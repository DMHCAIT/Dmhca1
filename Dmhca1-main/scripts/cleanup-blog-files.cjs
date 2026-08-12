#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, '..', 'src', 'routes');

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

blogFiles.forEach(filename => {
  const filepath = path.join(routesDir, filename);
  
  if (!fs.existsSync(filepath)) {
    console.log(`⚠️  File not found: ${filename}`);
    return;
  }

  try {
    let content = fs.readFileSync(filepath, 'utf-8');
    
    // Find the last closing brace of the component function followed by closing of the module
    // Look for the pattern: }\n} at the end of the file
    // Remove everything after the first occurrence of "}\n}" that ends with the component
    
    // More precise: Find "function BlogPost()" and then find its closing brace at the right indentation level
    const functionMatch = content.match(/function BlogPost\(\) \{[\s\S]*?\n\}/);
    
    if (functionMatch) {
      const properEnd = content.lastIndexOf('}\n');
      if (properEnd > 0) {
        content = content.substring(0, properEnd + 2);
        fs.writeFileSync(filepath, content, 'utf-8');
        console.log(`✅ Fixed: ${filename}`);
      }
    } else {
      console.log(`⚠️  Could not fix: ${filename} - structure unclear`);
    }
  } catch (error) {
    console.log(`❌ Error fixing ${filename}: ${error.message}`);
  }
});

console.log('\n✨ Cleanup complete!');
