#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const routesDir = 'c:\\Users\\john\\OneDrive\\Desktop\\Dmhca1-main\\src\\routes';

// Blog files that need updates (excluding radiologist, cardiologist, cosmetologist which are mostly done)
const filesToUpdate = [
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

filesToUpdate.forEach(file => {
  const filePath = path.join(routesDir, file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ File not found: ${file}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  // 1. Update FAQ section markup to professional styling
  if (content.includes('className="border border-gray-200 rounded-lg overflow-hidden"') &&
      !content.includes('className="bg-white rounded-xl overflow-hidden border')) {
    content = content.replace(
      /className="border border-gray-200 rounded-lg overflow-hidden"/g,
      'className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-blue-300 transition"'
    );
    modified = true;
  }

  // 2. Update FAQ button hover styling
  if (content.includes('className="w-full flex items-center justify-between p-4 hover:bg-gray-50')) {
    content = content.replace(
      /className="w-full flex items-center justify-between p-4 hover:bg-gray-50/g,
      'className="w-full flex items-center justify-between p-6 hover:bg-blue-50'
    );
    modified = true;
  }

  // 3. Update FAQ answer styling
  if (content.includes('className="px-4 py-4 bg-gray-50 border-t')) {
    content = content.replace(
      /className="px-4 py-4 bg-gray-50 border-t border-gray-200"/g,
      'className="px-6 py-6 bg-blue-50 border-t border-gray-200"'
    );
    modified = true;
  }

  // 4. Update comment form styling
  if (content.includes('className="mb-8 bg-gray-50 p-6')) {
    content = content.replace(
      /className="mb-8 bg-gray-50 p-6 rounded-lg"/g,
      'className="mb-10 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200"'
    );
    modified = true;
  }

  // 5. Update comment form input/textarea styling
  if (content.includes('className="px-4 py-2 border border-gray-300 rounded-lg')) {
    content = content.replace(
      /className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"/g,
      'className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"'
    );
    modified = true;
  }

  // 6. Update submit button
  if (content.includes('className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2')) {
    content = content.replace(
      /className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition"/g,
      'className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition shadow-md hover:shadow-lg"'
    );
    modified = true;
  }

  // 7. Update comments display section
  if (content.includes('className="bg-gray-50 p-4 rounded-lg border')) {
    content = content.replace(
      /className="bg-gray-50 p-4 rounded-lg border border-gray-200"/g,
      'className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition"'
    );
    modified = true;
  }

  // 8. Update footer CTA link styling
  if (content.includes('className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4')) {
    content = content.replace(
      /className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition"/g,
      'className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition shadow-md hover:shadow-lg"'
    );
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ Updated: ${file}`);
    updated++;
  } else {
    console.log(`⏭️  Already modern: ${file}`);
  }
});

console.log(`\n📊 Summary:`);
console.log(`✅ Updated: ${updated}/${filesToUpdate.length}`);
