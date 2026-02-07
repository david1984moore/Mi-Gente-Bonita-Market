import { Octokit } from '@octokit/rest';
import { execSync } from 'child_process';
import { readFileSync, statSync } from 'fs';
import { join } from 'path';

let connectionSettings;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }

  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY
    ? 'repl ' + process.env.REPL_IDENTITY
    : process.env.WEB_REPL_RENEWAL
    ? 'depl ' + process.env.WEB_REPL_RENEWAL
    : null;

  if (!xReplitToken) throw new Error('X_REPLIT_TOKEN not found');

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    { headers: { 'Accept': 'application/json', 'X_REPLIT_TOKEN': xReplitToken } }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings?.settings?.oauth?.credentials?.access_token;
  if (!connectionSettings || !accessToken) throw new Error('GitHub not connected');
  return accessToken;
}

const owner = 'david1984moore';
const repo = 'Mi-Gente-Bonita-Market';
const CONCURRENCY = 15;

async function processBatch(octokit, files) {
  return Promise.all(files.map(async (filePath) => {
    try {
      const fullPath = join(process.cwd(), filePath);
      const stat = statSync(fullPath);
      const content = readFileSync(fullPath).toString('base64');
      const { data: blob } = await octokit.git.createBlob({
        owner, repo, content, encoding: 'base64',
      });
      return {
        path: filePath,
        mode: (stat.mode & 0o111) !== 0 ? '100755' : '100644',
        type: 'blob',
        sha: blob.sha,
      };
    } catch (err) {
      console.warn(`  Skipping ${filePath}: ${err.message}`);
      return null;
    }
  }));
}

async function main() {
  const token = await getAccessToken();
  const octokit = new Octokit({ auth: token });
  console.log('Connected to GitHub.');

  const trackedFiles = execSync('git ls-files', { encoding: 'utf8' }).trim().split('\n').filter(Boolean);
  console.log(`Found ${trackedFiles.length} tracked files`);

  let remoteHeadSha = null;
  try {
    const { data: ref } = await octokit.git.getRef({ owner, repo, ref: 'heads/main' });
    remoteHeadSha = ref.object.sha;
  } catch (e) {}

  console.log('Uploading files in parallel...');
  const treeItems = [];
  for (let i = 0; i < trackedFiles.length; i += CONCURRENCY) {
    const batch = trackedFiles.slice(i, i + CONCURRENCY);
    const results = await processBatch(octokit, batch);
    treeItems.push(...results.filter(Boolean));
    console.log(`  ${Math.min(i + CONCURRENCY, trackedFiles.length)}/${trackedFiles.length} files uploaded`);
  }

  console.log('Creating tree...');
  const { data: tree } = await octokit.git.createTree({ owner, repo, tree: treeItems });

  console.log('Creating commit...');
  const commitData = {
    owner, repo,
    message: 'Sync all project files from Replit',
    tree: tree.sha,
    ...(remoteHeadSha ? { parents: [remoteHeadSha] } : {}),
  };
  const { data: commit } = await octokit.git.createCommit(commitData);

  console.log('Updating main branch...');
  if (remoteHeadSha) {
    await octokit.git.updateRef({ owner, repo, ref: 'heads/main', sha: commit.sha, force: true });
  } else {
    await octokit.git.createRef({ owner, repo, ref: 'refs/heads/main', sha: commit.sha });
  }

  console.log(`Successfully pushed all files to GitHub!`);
  console.log(`View at: https://github.com/${owner}/${repo}`);
}

main().catch(err => { console.error('Failed:', err.message); process.exit(1); });
