// convert-to-webp.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/images/futuristic'; // Change this if your images are in a different folder

function convertImages(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      convertImages(filePath); // Recursive for nested folders
    } else {
      const ext = path.extname(file).toLowerCase();
      const supportedExtensions = ['.png', '.jpg', '.jpeg'];

      if (supportedExtensions.includes(ext)) {
        const outputPath = filePath.replace(ext, '.webp');
        sharp(filePath)
          .toFormat('webp')
          .webp({ quality: 85 }) // adjust quality if needed
          .toFile(outputPath)
          .then(() => console.log(`✅ Converted: ${file} → ${path.basename(outputPath)}`))
          .catch(err => console.error(`❌ Error converting ${file}:`, err));
      }
    }
  });
}

convertImages(inputDir);
