#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const routesDir = 'c:\\Users\\john\\OneDrive\\Desktop\\Dmhca1-main\\src\\routes';

// Blog files that need updates (21 remaining files)
const filesToUpdate = [
  'how-to-become-a-cardiologist.tsx',
  'how-to-become-a-cosmetologist.tsx',
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

let updated = 0;
let failed = 0;

filesToUpdate.forEach(file => {
  const filePath = path.join(routesDir, file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ File not found: ${file}`);
    failed++;
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  // 1. Update imports - Add Clock, BookOpen, CheckCircle2 if missing
  if (!content.includes('Clock, BookOpen, CheckCircle2')) {
    if (content.includes('import { ArrowLeft, ChevronDown }')) {
      content = content.replace(
        'import { ArrowLeft, ChevronDown }',
        'import { ArrowLeft, ChevronDown, Clock, BookOpen, CheckCircle2 }'
      );
      modified = true;
    } else if (content.includes('import { ArrowLeft, ChevronDown, ')) {
      content = content.replace(
        /import { ArrowLeft, ChevronDown, [^}]* }/,
        'import { ArrowLeft, ChevronDown, Clock, BookOpen, CheckCircle2 }'
      );
      modified = true;
    }
  }

  // 2. Add readingTime if missing
  if (!content.includes('const readingTime')) {
    const functionMatch = content.match(/function BlogPost\(\) \{/);
    if (functionMatch) {
      const index = functionMatch.index + functionMatch[0].length;
      const indent = '\n  const readingTime = 8;';
      content = content.slice(0, index) + indent + content.slice(index);
      modified = true;
    }
  }

  // 3. Update hero section styling
  if (content.includes('<section className="site-hero">')) {
    const newHero = `<section className="site-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container-home max-w-5xl relative z-10">`;
    content = content.replace(/<section className="site-hero">\s*<div className="container-home max-w-4xl">/, newHero);
    modified = true;
  }

  // 4. Update article meta section (add metadata display after title)
  if (!content.includes('Article Meta') && content.includes('<p className="text-white/90 text-lg">')) {
    const metaBlock = `
          
          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-white/80 mt-6">
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{readingTime} min read</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen size={18} />
              <span>Medical Career Guide</span>
            </div>
            <div className="text-sm text-white/70">Updated: June 2025</div>
          </div>`;
    content = content.replace(/<\/div>\s*<\/section>/m, metaBlock + '\n        </div>\n      </section>');
    modified = true;
  }

  // 5. Update FAQ styling to professional cards
  if (content.includes('border border-gray-200 rounded-lg overflow-hidden')) {
    content = content.replace(
      /border border-gray-200 rounded-lg overflow-hidden/g,
      'bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-blue-300 transition'
    );
    modified = true;
  }

  if (content.includes('hover:bg-gray-50')) {
    content = content.replace(/hover:bg-gray-50/g, 'hover:bg-blue-50');
    modified = true;
  }

  if (content.includes('bg-gray-50 border-t border-gray-200')) {
    content = content.replace(
      /bg-gray-50 border-t border-gray-200/g,
      'bg-blue-50 border-t border-gray-200'
    );
    modified = true;
  }

  // 6. Update comment form styling
  if (content.includes('bg-gray-50 p-6 rounded-lg')) {
    content = content.replace(
      /bg-gray-50 p-6 rounded-lg/g,
      'bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200'
    );
    modified = true;
  }

  if (content.includes('hover:bg-blue-700')) {
    content = content.replace(
      /bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg/g,
      'bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg'
    );
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ Updated: ${file}`);
    updated++;
  } else {
    console.log(`⏭️  Skipped: ${file} (already updated or no changes)`);
  }
});

console.log(`\n📊 Summary:`);
console.log(`✅ Updated: ${updated}`);
console.log(`❌ Failed: ${failed}`);
console.log(`📝 Total: ${filesToUpdate.length}`);
