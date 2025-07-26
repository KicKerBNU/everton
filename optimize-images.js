import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = './public';

// Get all image files
const imageFiles = fs.readdirSync(publicDir).filter(file => 
  /\.(jpg|jpeg|png)$/i.test(file)
);

console.log('Optimizing images...');

imageFiles.forEach(async (file) => {
  const inputPath = path.join(publicDir, file);
  const tempPath = path.join(publicDir, `temp_${file}`);
  
  try {
    // Get file stats
    const stats = fs.statSync(inputPath);
    const originalSize = (stats.size / 1024 / 1024).toFixed(2);
    
    // Determine file type and optimize accordingly
    const isJpeg = /\.(jpg|jpeg)$/i.test(file);
    const isPng = /\.png$/i.test(file);
    
    let sharpInstance = sharp(inputPath);
    
    if (isJpeg) {
      sharpInstance = sharpInstance.jpeg({ 
        quality: 75, 
        progressive: true,
        mozjpeg: true
      });
    } else if (isPng) {
      sharpInstance = sharpInstance.png({ 
        quality: 75, 
        progressive: true,
        compressionLevel: 9
      });
    }
    
    // Optimize image
    await sharpInstance.toFile(tempPath);
    
    // Get optimized file stats
    const optimizedStats = fs.statSync(tempPath);
    const optimizedSize = (optimizedStats.size / 1024 / 1024).toFixed(2);
    const savings = ((stats.size - optimizedStats.size) / stats.size * 100).toFixed(1);
    
    console.log(`${file}: ${originalSize}MB → ${optimizedSize}MB (${savings}% smaller)`);
    
    // Replace original with optimized version
    fs.unlinkSync(inputPath);
    fs.renameSync(tempPath, inputPath);
    
  } catch (error) {
    console.error(`Error optimizing ${file}:`, error.message);
    // Clean up temp file if it exists
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
  }
});

console.log('Image optimization complete!'); 