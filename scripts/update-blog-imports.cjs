#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, '..', 'src', 'routes');

// List of files to complete upgrade (excluding radiologist which is done)
const filesToUpgrade = [
  'how-to-become-a-diabetologist.tsx',
  'how-to-become-a-neurologist.tsx',
  'how-to-become-an-embryologist.tsx',
  'how-to-become-an-endocrinologist.tsx',
  'how-to-become-an-oncologist.tsx',
  'how-to-become-a-pediatrician.tsx',
  'how-to-become-an-obstetrician-gynecologist.tsx',
  'scope-of-cardiology.tsx',
  'scope-of-cosmetology.tsx',
  'scope-of-diabetology.tsx',
  'scope-of-echocardiography.tsx',
  'scope-of-endocrinology.tsx',
  'scope-of-neurology.tsx',
  'scope-of-obstetrics-and-gynecology.tsx',
  'scope-of-oncology.tsx',
  'scope-of-paediatrics.tsx',
  'scope-of-radiology.tsx',
  'how-to-crack-neet-pg.tsx',
  'courses-after-mbbs-in-india.tsx'
];

// Update all imports to include professional layout icons
filesToUpgrade.forEach(filename => {
  const filepath = path.join(routesDir, filename);
  
  if (!fs.existsSync(filepath)) {
    console.log(`⚠️  Skipping ${filename} - not found`);
    return;
  }

  try {
    let content = fs.readFileSync(filepath, 'utf-8');
    
    // Update imports
    if (!content.includes('Clock, BookOpen, CheckCircle2')) {
      content = content.replace(
        /import { ArrowLeft, ChevronDown } from "lucide-react";/,
        'import { ArrowLeft, ChevronDown, Clock, BookOpen, CheckCircle2 } from "lucide-react";'
      );
    }
    
    // Add readingTime if not present
    if (!content.includes('const readingTime')) {
      content = content.replace(
        /const \[expandedFaq, setExpandedFaq\] = useState<number \| null>\(null\);\n  const \[comments, setComments\]/,
        `const [expandedFaq, setExpandedFaq] = useState<number | null>(null);\n  const [comments, setComments]`
      );
      
      const insertMatch = content.match(/setFormData.*?\}\);[\n\s]+const faqs/);
      if (insertMatch) {
        const insertPoint = content.indexOf(insertMatch[0]) + insertMatch[0].length - 'const faqs'.length;
        content = content.slice(0, insertPoint) + '\n  const readingTime = 8;\n\n  ' + content.slice(insertPoint);
      }
    }
    
    fs.writeFileSync(filepath, content, 'utf-8');
    console.log(`✅ Updated imports: ${filename}`);
  } catch (error) {
    console.log(`❌ Error updating ${filename}: ${error.message}`);
  }
});

console.log('\n✨ Import updates complete!');
console.log('📝 Note: JSX layout updates require manual handling due to file structure variations');
