import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const filePath = resolve('src/data/courses.tsx');
let content = readFileSync(filePath, 'utf-8');

// Replace FAQ text mentioning weeks
content = content.replace(/The course runs for 50 weeks,/g, 'The course runs for 12 months,');
content = content.replace(/The fellowship program runs for 50 weeks,/g, 'The fellowship program runs for 12 months,');
content = content.replace(/runs for (\d+) weeks/g, (match, weeks) => {
  const w = parseInt(weeks);
  const months = Math.round(w / 4.33);
  return `runs for ${months} months`;
});

writeFileSync(filePath, content, 'utf-8');
console.log('✓ Updated FAQ text from weeks to months');
