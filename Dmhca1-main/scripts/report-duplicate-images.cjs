const fs = require('fs');
const path = require('path');
// Read the TSX file and parse image path literals without importing.
const file = fs.readFileSync(path.join(__dirname, '../src/data/courses.tsx'), 'utf8');
const imageRegex = /image:\s*"([^"]+)"/g;
let m;
const images = [];
while ((m = imageRegex.exec(file)) !== null) {
  images.push(m[1]);
}

const map = new Map();
images.forEach((img, idx) => {
  if (!map.has(img)) map.set(img, []);
  map.get(img).push(idx);
});

const duplicates = [];
for (const [img, idxs] of map.entries()) {
  if (idxs.length > 1) duplicates.push({ img, count: idxs.length, indexes: idxs });
}

const out = {
  totalCourses: images.length,
  uniqueImages: map.size,
  duplicates: duplicates,
};
fs.writeFileSync(path.join(__dirname, 'duplicate-images-report.json'), JSON.stringify(out, null, 2));
console.log('Report written to scripts/duplicate-images-report.json');
