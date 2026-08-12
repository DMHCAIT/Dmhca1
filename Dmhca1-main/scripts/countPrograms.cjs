const fs = require('fs');
const s = fs.readFileSync('src/data/courses.tsx','utf8');
const progMatches = s.match(/program:\s*"([^"]+)"/g) || [];
const metaMatches = s.match(/skill_level:\s*"([^"]+)"/g) || [];
const progVals = progMatches.map(x=>x.match(/program:\s*"([^"]+)"/)[1]);
const metaVals = metaMatches.map(x=>x.match(/skill_level:\s*"([^"]+)"/)[1]);
const all = progVals.concat(metaVals);
const counts = all.reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})
console.log('program counts from program/meta combined:',counts);
console.log('total program entries (program+skill_level):', all.length);
console.log('program-only entries:', progVals.length);
console.log('skill_level-only entries:', metaVals.length);
console.log('total courses (by slug count):', (s.match(/slug:\s*"/g)||[]).length);
