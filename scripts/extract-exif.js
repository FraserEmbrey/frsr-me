const exifr = require('exifr');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../src/content/blog/images');
const outputFile = path.join(__dirname, '../src/content/blog/images-exif.json');

async function extractExif() {
    const output = {};
    const files = fs.readdirSync(imagesDir);
    for (const file of files) {
        if (!file.match(/\.(jpe?g|png)$/i)) continue;
        const filePath = path.join(imagesDir, file);
        try {
            const data = await exifr.parse(filePath, ['FNumber', 'ExposureTime', 'FocalLength']);
            if (data && (data.FNumber || data.ExposureTime || data.FocalLength)) {
                output[file] = {
                    aperture: data.FNumber,
                    shutter: data.ExposureTime,
                    focalLength: data.FocalLength
                };
            }
        } catch (e) {
            console.warn(`Could not extract EXIF from ${file}:`, e.message);
        }
    }
    fs.writeFileSync(outputFile, JSON.stringify(output, null, 2));
    console.log(`EXIF data written to ${outputFile}`);
}

extractExif();
