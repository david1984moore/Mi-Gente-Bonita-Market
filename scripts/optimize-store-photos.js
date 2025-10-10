import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STORE_PHOTOS_DIR = path.resolve(__dirname, '../client/src/assets/store-photos');
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
    
    const image = sharp(fileBuffer);
    
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
    
    if (optimized.length < originalSize) {
      await fs.writeFile(filePath, optimized);
      console.log(`✓ Optimized ${path.basename(filePath)}: ${(originalSize / 1024).toFixed(1)}KB → ${(optimized.length / 1024).toFixed(1)}KB`);
    }
    
    const webpPath = `${filePath}.webp`;
    const webpBuffer = await sharp(fileBuffer)
      .webp({ quality: COMPRESSION_QUALITY })
      .toBuffer();
    
    if (webpBuffer.length < optimized.length) {
      await fs.writeFile(webpPath, webpBuffer);
      console.log(`✓ Created WebP ${path.basename(webpPath)}: ${(webpBuffer.length / 1024).toFixed(1)}KB`);
    }
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
  }
}

async function processDirectory(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    
    if (entry.isFile()) {
      await optimizeImage(fullPath);
    }
  }
}

console.log('🖼️  Optimizing store photos...\n');
await processDirectory(STORE_PHOTOS_DIR);
console.log('\n✅ Store photos optimization complete!');
