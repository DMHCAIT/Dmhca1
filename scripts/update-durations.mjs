import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const filePath = resolve('src/data/courses.tsx');
let content = readFileSync(filePath, 'utf-8');

// Replace all duration strings
content = content.replace(/duration: "52 week",/g, 'duration: "12 months",');
content = content.replace(/duration: "50 week",/g, 'duration: "12 months",');
content = content.replace(/duration: "25 week",/g, 'duration: "6 months",');
content = content.replace(/duration: "50 weeks",/g, 'duration: "12 months",');

writeFileSync(filePath, content, 'utf-8');
console.log('✓ Updated all duration strings from weeks to months');
