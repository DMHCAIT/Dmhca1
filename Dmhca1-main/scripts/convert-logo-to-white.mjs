#!/usr/bin/env node

import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const inputPath = path.join(publicDir, 'logo.webp');
const outputPath = path.join(publicDir, 'logo-white.webp');

console.log(`Converting ${inputPath} to white letters...`);

// Convert logo to white letters: grayscale + brighten
sharp(inputPath)
  .grayscale()
  .modulate({
    brightness: 2.5, // aggressive brightness boost
    saturation: 0
  })
  .linear(2, 0) // increase contrast significantly
  .toFile(outputPath)
  .then(() => {
    console.log(`✓ White logo created at ${outputPath}`);
  })
  .catch((err) => {
    console.error('✗ Error converting logo:', err);
    process.exit(1);
  });
