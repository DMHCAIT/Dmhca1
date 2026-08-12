const fs = require('fs');
const s = fs.readFileSync('src/data/courses.tsx','utf8');
const parts = s.split(/\n\s*\{\s*\n\s*slug:\s*"/).slice(1);
const results = [];
for(const p of parts){
  const slug = p.split('"')[0];
  const progMatch = p.match(/program:\s*"([^"]+)"/);
  const metaMatch = p.match(/skill_level:\s*"([^"]+)"/);
  const program = progMatch ? progMatch[1] : (metaMatch? metaMatch[1] : 'Unknown');
  results.push({slug, program});
}
const counts = results.reduce((a,c)=>{a[c.program]=(a[c.program]||0)+1;return a},{})
console.log('unique courses parsed:', results.length);
console.log('counts by program:', counts);
// list slugs per program if needed
for(const k of Object.keys(counts)){
  console.log('\n=== '+k+' ===');
  results.filter(r=>r.program===k).slice(0,5).forEach(r=>console.log(r.slug));
}
fs.writeFileSync('scripts/course_programs.json', JSON.stringify(results, null, 2));
console.log('wrote scripts/course_programs.json');
