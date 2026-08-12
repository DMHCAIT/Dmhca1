// Convert downloaded event images to WebP format
// Requires: npm install sharp
// Run with: node convert-to-webp.mjs

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check if sharp is installed
let sharp;
try {
    sharp = (await import('sharp')).default;
} catch (err) {
    console.log('Installing sharp library...');
    try {
        await execAsync('npm install sharp');
        sharp = (await import('sharp')).default;
    } catch (installErr) {
        console.error('Failed to install sharp:', installErr.message);
        process.exit(1);
    }
}

const imageDir = path.join(__dirname, '..', 'public', 'events&webinars');

// Get all image files
const imageFiles = fs.readdirSync(imageDir).filter(file => {
    return /\.(jpg|jpeg|png)$/i.test(file) && !file.endsWith('.webp');
});

console.log('========================================');
console.log('Converting Event Images to WebP');
console.log('========================================\n');
console.log(`Found ${imageFiles.length} image files\n`);

let converted = 0;
let failed = 0;

// Convert each image
for (const file of imageFiles) {
    const inputPath = path.join(imageDir, file);
    const outputPath = path.join(imageDir, path.basename(file, path.extname(file)) + '.webp');
    
    try {
        console.log(`Converting: ${file}`);
        
        const stats = fs.statSync(inputPath);
        const inputSizeMB = (stats.size / 1024 / 1024).toFixed(2);
        
        await sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(outputPath);
        
        const outputStats = fs.statSync(outputPath);
        const outputSizeMB = (outputStats.size / 1024 / 1024).toFixed(2);
        
        console.log(`  Input:  ${inputSizeMB} MB`);
        console.log(`  Output: ${outputSizeMB} MB`);
        console.log(`  Saved:  ${path.basename(outputPath)}`);
        console.log('');
        
        // Delete original file
        fs.unlinkSync(inputPath);
        
        converted++;
    } catch (err) {
        console.error(`  Error: ${err.message}\n`);
        failed++;
    }
}

console.log('========================================');
console.log('Summary:');
console.log(`  Converted: ${converted}`);
console.log(`  Failed: ${failed}`);
console.log(`  Output Directory: ${imageDir}`);
console.log('========================================');
console.log('\nNext steps:');
console.log('1. Run: npm run dev');
console.log('2. Navigate to: http://localhost:8087/simple-event');
console.log('3. Verify all event images display correctly');
