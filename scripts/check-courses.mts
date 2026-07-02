import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } }
);

const { data: courses, error } = await supabase
  .from('courses')
  .select('id, slug, title, testimonials');

if (error) {
  console.error('Error fetching courses:', error);
  process.exit(1);
}

console.log('Total courses:', courses?.length);

// Check for duplicates
const slugs = courses?.map(c => c.slug) || [];
const uniqueSlugs = new Set(slugs);
console.log('Unique slugs:', uniqueSlugs.size);
console.log('Duplicates:', slugs.length - uniqueSlugs.size);

// Check distribution
const distribution: { [key: string]: number } = {
  'Fellowship': 0,
  'PG Diploma': 0,
  'Certificate': 0
};

courses?.forEach(c => {
  try {
    const data = JSON.parse(c.testimonials || '{}');
    const program = data.program || 'Certificate';
    distribution[program] = (distribution[program] || 0) + 1;
  } catch (e) {
    // Ignore parse errors
  }
});

console.log('\nDistribution by program:');
console.log('  Fellowships:', distribution['Fellowship']);
console.log('  PG Diplomas:', distribution['PG Diploma']);
console.log('  Certificates:', distribution['Certificate']);

// Show duplicate slugs if any
if (slugs.length !== uniqueSlugs.size) {
  console.log('\nDuplicate slugs:');
  const slugCount: { [key: string]: number } = {};
  slugs.forEach(s => {
    slugCount[s] = (slugCount[s] || 0) + 1;
  });
  Object.entries(slugCount).forEach(([slug, count]) => {
    if (count > 1) {
      console.log(`  ${slug}: ${count} times`);
    }
  });
}

process.exit(0);
