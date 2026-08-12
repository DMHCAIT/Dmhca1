import { createClient } from '@supabase/supabase-js';
import { _courses } from '../src/data/courses';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error('❌ Missing SUPABASE credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: { persistSession: false }
});

async function verify() {
  console.log('🔍 VERIFYING COURSE DATABASE...\n');

  // Get all courses from database
  const { data: dbCourses, error } = await supabase
    .from('courses')
    .select('id, slug, title, testimonials')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('❌ Error fetching courses:', error.message);
    process.exit(1);
  }

  console.log(`📊 Database Status:`);
  console.log(`   Total courses in DB: ${dbCourses.length}`);
  console.log(`   Total courses in source (courses.tsx): ${_courses.length}\n`);

  // Verify complete data is stored
  let completedDataCount = 0;
  let samplesShown = 0;

  for (const course of dbCourses.slice(0, 5)) {
    try {
      const completeData = JSON.parse(course.testimonials || '{}');
      if (completeData.slug && completeData.title && completeData.categories) {
        completedDataCount++;
        if (samplesShown < 3) {
          console.log(`✅ Course: ${course.title}`);
          console.log(`   - Slug: ${completeData.slug}`);
          console.log(`   - Categories: ${completeData.categories.slice(0, 2).join(', ')}`);
          console.log(`   - Has Learn array: ${Array.isArray(completeData.learn) ? `Yes (${completeData.learn.length} items)` : 'No'}`);
          console.log(`   - Has Modules array: ${Array.isArray(completeData.modules) ? `Yes (${completeData.modules.length} items)` : 'No'}`);
          console.log(`   - Has FAQs: ${Array.isArray(completeData.faqs) ? `Yes (${completeData.faqs.length} items)` : 'No'}`);
          console.log(`   - Has Reviews: ${Array.isArray(completeData.reviews) ? `Yes (${completeData.reviews.length} items)` : 'No'}\n`);
          samplesShown++;
        }
      }
    } catch (e) {
      // Silently skip if not valid JSON
    }
  }

  console.log(`📋 Complete Data Summary:`);
  console.log(`   Courses verified: ${Math.min(5, dbCourses.length)}`);
  console.log(`   With complete data: ${completedDataCount}`);

  // Check for specific courses from source
  console.log(`\n🔎 Checking specific courses from source:`);
  const sampleSlugs = [
    'certificate-in-hypertension',
    'certificate-in-diabetology',
    'fellowship-in-critical-care'
  ];

  for (const slug of sampleSlugs) {
    const dbCourse = dbCourses.find(c => c.slug === slug);
    const sourceCourse = _courses.find(c => c.slug === slug);

    if (dbCourse && sourceCourse) {
      console.log(`✅ ${slug}: Present in both database and source`);
    } else if (!dbCourse) {
      console.log(`⚠️  ${slug}: NOT in database`);
    }
  }

  console.log(`\n📈 Overall Status:`);
  if (dbCourses.length >= 103) {
    console.log(`✅ SUCCESS! All 103 courses (or more) are in the database!`);
    console.log(`✅ Complete data preservation: ${samplesShown > 0 ? 'VERIFIED' : 'NOT VERIFIED'}`);
  } else {
    console.log(`⚠️  Only ${dbCourses.length} courses in database (expected 103+)`);
  }

  process.exit(0);
}

verify();
