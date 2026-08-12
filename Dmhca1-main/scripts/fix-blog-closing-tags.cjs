#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const routesDir = 'c:\\Users\\john\\OneDrive\\Desktop\\Dmhca1-main\\src\\routes';

// Blog files that need closing tag fix (21 files)
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

const closingStructure = `

              {/* Related Info Box */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-4">💡 Pro Tip</h4>
                <p className="text-sm text-gray-700">Pursue this specialty with dedication and commitment to continuous learning in this dynamic medical field.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`;

let fixed = 0;
let failed = 0;

filesToUpdate.forEach(file => {
  const filePath = path.join(routesDir, file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ File not found: ${file}`);
    failed++;
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Check if file already has the complete closing
  if (content.includes('Related Info Box')) {
    console.log(`✅ Already complete: ${file}`);
    return;
  }

  // Find where to insert closing structure (before the closing );)
  if (content.trim().endsWith(')}')) {
    // File ends with function closing, append before it
    const newContent = content.slice(0, -3) + closingStructure;
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`✅ Fixed: ${file}`);
    fixed++;
  } else if (content.includes('<div className="lg:col-span-1">')) {
    // File has the sidebar structure started but not completed
    // Find the end and replace/complete it
    const regex = /<div className="lg:col-span-1">[\s\S]*?$/;
    const newContent = content.replace(regex, `<div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Article Info Card */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 mb-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600 text-sm">Reading Time</p>
                    <p className="text-2xl font-bold text-blue-600">{readingTime} min</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 text-sm">Category</p>
                    <p className="text-lg font-semibold text-gray-800">Medical Career</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 text-sm">Last Updated</p>
                    <p className="text-lg font-semibold text-gray-800">June 2025</p>
                  </div>
                </div>
              </div>

              {/* Related Info Box */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-4">💡 Pro Tip</h4>
                <p className="text-sm text-gray-700">Pursue this specialty with dedication and commitment to continuous learning in this dynamic medical field.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`);
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`✅ Fixed: ${file}`);
    fixed++;
  } else {
    console.log(`⚠️  Skipped: ${file} (structure not recognized)`);
  }
});

console.log(`\n📊 Summary:`);
console.log(`✅ Fixed: ${fixed}`);
console.log(`❌ Failed: ${failed}`);
console.log(`📝 Total: ${filesToUpdate.length}`);
