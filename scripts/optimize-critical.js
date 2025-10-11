import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  { input: path.resolve(__dirname, '../attached_assets/limes_1759971097571.jpeg'), name: 'hero background' },
  { input: path.resolve(__dirname, '../client/src/assets/logo.png'), name: 'logo' }
];

for (const img of images) {
  try {
    const fileBuffer = await fs.readFile(img.input);
    const stats = await fs.stat(img.input);
    const originalSize = stats.size;
    
    // Create WebP version
    const webpPath = `${img.input}.webp`;
    const webpBuffer = await sharp(fileBuffer)
      .webp({ quality: 85 })
      .toBuffer();
    
    await fs.writeFile(webpPath, webpBuffer);
    console.log(`✓ ${img.name}: Created WebP (${(originalSize/1024).toFixed(1)}KB → ${(webpBuffer.length/1024).toFixed(1)}KB)`);
  } catch (error) {
    console.error(`✗ Error with ${img.name}:`, error.message);
  }
}
