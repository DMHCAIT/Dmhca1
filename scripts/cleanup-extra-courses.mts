import { createClient } from '@supabase/supabase-js';
import { _courses } from '../src/data/courses';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } }
);

const { data: dbCourses } = await supabase
  .from('courses')
  .select('id, slug, testimonials');

// Get slugs from _courses
const expectedSlugs = new Set(_courses.map(c => c.slug));

// Find courses in database but not in _courses
const extraCourses = dbCourses?.filter(c => !expectedSlugs.has(c.slug)) || [];

console.log('Extra courses in database (not in courses.tsx):');
console.log(`Found ${extraCourses.length} extra courses:\n`);

const extraIds: string[] = [];
extraCourses.forEach((course, idx) => {
  try {
    const data = JSON.parse(course.testimonials || '{}');
    console.log(`${idx + 1}. ${course.slug}`);
    console.log(`   Program: ${data.program || 'Certificate'}`);
    extraIds.push(course.id);
  } catch (e) {
    console.log(`${idx + 1}. ${course.slug} (parse error)`);
    extraIds.push(course.id);
  }
});

if (extraIds.length > 0) {
  console.log(`\n🗑️  Deleting ${extraIds.length} extra courses...`);
  
  for (const id of extraIds) {
    const { error } = await supabase
      .from('courses')
      .delete()
      .eq('id', id);
    
    if (error) {
      console.error(`❌ Failed to delete ${id}:`, error);
    } else {
      console.log(`✅ Deleted ${id}`);
    }
  }

  // Verify
  console.log('\n🔍 Verifying...');
  const { data: remaining } = await supabase
    .from('courses')
    .select('id', { count: 'exact' });
  
  console.log(`Remaining courses: ${remaining?.length}`);
  
  if (remaining?.length === 103) {
    console.log('✅ Database now contains EXACTLY 103 courses!');
  }
} else {
  console.log('No extra courses found.');
}

process.exit(0);
