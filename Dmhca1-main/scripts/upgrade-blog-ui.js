#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of blog files to update (all except how-to-become-a-radiologist.tsx which we already updated)
const blogFiles = [
  'how-to-become-a-cardiologist.tsx',
  'how-to-become-a-cosmetologist.tsx',
  'how-to-become-a-diabetologist.tsx',
  'how-to-become-a-neurologist.tsx',
  'how-to-become-an-embryologist.tsx',
  'how-to-become-an-endocrinologist.tsx',
  'how-to-become-an-oncologist.tsx',
  'how-to-become-a-pediatrician.tsx',
  'how-to-become-an-obstetrician-gynecologist.tsx',
  'scope-of-radiology.tsx',
  'scope-of-cardiology.tsx',
  'scope-of-cosmetology.tsx',
  'scope-of-diabetology.tsx',
  'scope-of-echocardiography.tsx',
  'scope-of-endocrinology.tsx',
  'scope-of-neurology.tsx',
  'scope-of-obstetrics-and-gynecology.tsx',
  'scope-of-oncology.tsx',
  'scope-of-paediatrics.tsx',
  'how-to-crack-neet-pg.tsx',
  'courses-after-mbbs-in-india.tsx'
];

const routesDir = path.join(__dirname, '..', 'src', 'routes');

// Function to upgrade a blog file
function upgradeBlogFile(filename) {
  const filepath = path.join(routesDir, filename);
  
  if (!fs.existsSync(filepath)) {
    console.log(`⚠️  File not found: ${filename}`);
    return false;
  }

  let content = fs.readFileSync(filepath, 'utf-8');

  // Extract imports
  const importMatch = content.match(/import.*?from ["'].*?["'];/gs);
  if (!importMatch) {
    console.log(`⚠️  Could not extract imports from ${filename}`);
    return false;
  }

  // Check if Clock, BookOpen, CheckCircle2 are already imported
  let imports = importMatch.join('\n');
  if (!imports.includes('Clock')) {
    imports = imports.replace(
      /import { ArrowLeft, ChevronDown } from "lucide-react";/,
      'import { ArrowLeft, ChevronDown, Clock, BookOpen, CheckCircle2 } from "lucide-react";'
    );
  }

  // Add readingTime variable
  if (!content.includes('const readingTime')) {
    content = content.replace(
      /const \[expandedFaq,/,
      `const [expandedFaq,`
    );
    const match = content.match(/function BlogPost\(\) \{[\s\S]*?const \[expandedFaq[^;]+;/);
    if (match) {
      const insertPoint = content.indexOf(match[0]) + match[0].length;
      content = content.slice(0, insertPoint) + '\n  const readingTime = 8;' + content.slice(insertPoint);
    }
  }

  // Replace return statement structure - add professional layout
  // This is a complex transformation, so we'll mark files that need manual review
  console.log(`✅ Analyzed ${filename} - ready for transformation`);
  return true;
}

// Run upgrades
console.log('🚀 Starting blog UI upgrade...\n');
let successful = 0;
let failed = 0;

blogFiles.forEach(file => {
  if (upgradeBlogFile(file)) {
    successful++;
  } else {
    failed++;
  }
});

console.log(`\n✨ Analysis complete!`);
console.log(`✅ ${successful} files analyzed`);
console.log(`⚠️  ${failed} files failed`);
