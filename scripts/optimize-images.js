import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGE_DIRS = [
  path.resolve(__dirname, '../attached_assets'),
  path.resolve(__dirname, '../client/src/assets/store-photos')
];

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png'];
const COMPRESSION_QUALITY = 85;

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  
  if (!IMAGE_EXTENSIONS.includes(ext)) {
    return;
  }

  try {
    const fileBuffer = await fs.readFile(filePath);
    const fileStats = await fs.stat(filePath);
    const originalSize = fileStats.size;
    
    // Compress original format
    const image = sharp(fileBuffer);
    const metadata = await image.metadata();
    
    let optimized;
    if (ext === '.png') {
      optimized = await image
        .png({ quality: COMPRESSION_QUALITY, compressionLevel: 9 })
        .toBuffer();
    } else {
      optimized = await image
        .jpeg({ quality: COMPRESSION_QUALITY, mozjpeg: true })
        .toBuffer();
    }
    
    // Only replace if smaller
    if (optimized.length < originalSize) {
      await fs.writeFile(filePath, optimized);
      console.log(`✓ Optimized ${path.basename(filePath)}: ${(originalSize / 1024).toFixed(1)}KB → ${(optimized.length / 1024).toFixed(1)}KB`);
    }
    
    // Create WebP version
    const webpPath = `${filePath}.webp`;
    const webpBuffer = await sharp(fileBuffer)
      .webp({ quality: COMPRESSION_QUALITY })
      .toBuffer();
    
    // Only create WebP if smaller than optimized original
    if (webpBuffer.length < optimized.length) {
      await fs.writeFile(webpPath, webpBuffer);
      console.log(`✓ Created WebP ${path.basename(webpPath)}: ${(webpBuffer.length / 1024).toFixed(1)}KB`);
    }
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
  }
}

async function processDirectory(dirPath) {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      
      if (entry.isDirectory()) {
        await processDirectory(fullPath);
      } else if (entry.isFile()) {
        await optimizeImage(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
}

async function main() {
  console.log('🖼️  Starting image optimization...\n');
  
  for (const dir of IMAGE_DIRS) {
    console.log(`Processing ${dir}...`);
    await processDirectory(dir);
    console.log('');
  }
  
  console.log('✅ Image optimization complete!');
}

main().catch(console.error);
