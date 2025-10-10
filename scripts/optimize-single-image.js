import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagePath = path.resolve(__dirname, '../attached_assets/304d78dd-cc23-4a47-ae32-fb172decb6a8_1760113351843.jpeg');

async function optimizeImage() {
  try {
    const fileBuffer = await fs.readFile(imagePath);
    const fileStats = await fs.stat(imagePath);
    const originalSize = fileStats.size;
    
    // Compress JPEG
    const optimized = await sharp(fileBuffer)
      .jpeg({ quality: 85, mozjpeg: true })
      .toBuffer();
    
    if (optimized.length < originalSize) {
      await fs.writeFile(imagePath, optimized);
      console.log(`✓ Optimized: ${(originalSize / 1024).toFixed(1)}KB → ${(optimized.length / 1024).toFixed(1)}KB`);
    } else {
      console.log(`Already optimized at ${(originalSize / 1024).toFixed(1)}KB`);
    }
    
    // Create WebP version
    const webpPath = `${imagePath}.webp`;
    const webpBuffer = await sharp(fileBuffer)
      .webp({ quality: 85 })
      .toBuffer();
    
    if (webpBuffer.length < optimized.length) {
      await fs.writeFile(webpPath, webpBuffer);
      console.log(`✓ Created WebP: ${(webpBuffer.length / 1024).toFixed(1)}KB`);
    }
  } catch (error) {
    console.error(`Error processing image:`, error.message);
  }
}

await optimizeImage();
