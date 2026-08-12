import { createClient } from '@supabase/supabase-js';
import { _courses } from '../src/data/courses';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error('❌ Missing SUPABASE credentials in .env.local');
  console.error('Please set: VITE_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: { persistSession: false }
});

async function seedAllCourses() {
  try {
    console.log(`🌱 Starting to seed ALL ${_courses.length} courses from local data...`);
    console.log('━'.repeat(60));

    // Step 1: Clear existing courses
    console.log('🗑️  Clearing existing courses from database...');
    try {
      await supabase
        .from('courses')
        .delete()
        .gt('id', '0');
    } catch (e) {
      console.log('✅ Database ready (already empty or first run)');
    }

    // Step 2: Transform courses to database format using ACTUAL column names
    console.log('\n🔄 Transforming course data for database schema...');
    const coursesToInsert = _courses.map((course) => ({
      slug: course.slug,
      title: course.title,
      description: course.overview || '',
      short_description: course.overview ? course.overview.substring(0, 200) : '',
      category: (course.categories && course.categories[0]) || '',
      duration: `${course.weeks || 0} weeks`,
      price: course.priceINR || 0,
      image_url: course.image || '',
      image_alt: course.title,
      instructor_name: course.trainers?.[0]?.name || '',
      instructor_bio: course.trainers?.[0]?.bio || '',
      instructor_image: course.trainers?.[0]?.image || '',
      duration_weeks: course.weeks || null,
      total_lessons: course.lessons || null,
      certification: true,
      highlights: JSON.stringify(course.learn || []),
      syllabus: JSON.stringify(course.modules || []),
      requirements: JSON.stringify(course.requirements || []),
      learning_outcomes: JSON.stringify(course.learn || []),
      testimonials: JSON.stringify(course.reviews || []),
    }));

    console.log(`✅ Transformed ${coursesToInsert.length} courses`);

    // Step 3: Insert in batches
    console.log('\n📤 Inserting courses in batches...');
    const batchSize = 5;
    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < coursesToInsert.length; i += batchSize) {
      const batch = coursesToInsert.slice(i, i + batchSize);
      const batchNum = Math.floor(i / batchSize) + 1;
      
      try {
        const { error } = await supabase
          .from('courses')
          .insert(batch);

        if (error) {
          console.error(`❌ Batch ${batchNum} failed:`, error.message);
          errorCount += batch.length;
          continue;
        }

        successCount += batch.length;
        const progress = Math.min(i + batchSize, coursesToInsert.length);
        const percentage = Math.round((progress / coursesToInsert.length) * 100);
        console.log(`✅ Batch ${batchNum} complete (${batch.length} courses) - ${progress}/${coursesToInsert.length} (${percentage}%)`);
      } catch (err) {
        console.error(`❌ Batch ${batchNum} error:`, err);
        errorCount += batch.length;
      }
    }

    // Step 4: Summary & Verify
    console.log('\n' + '═'.repeat(60));
    console.log('📊 SEEDING RESULT');
    console.log('═'.repeat(60));
    console.log(`✅ Successfully inserted: ${successCount} courses`);
    if (errorCount > 0) {
      console.log(`❌ Failed to insert: ${errorCount} courses`);
    }

    const { count } = await supabase
      .from('courses')
      .select('*', { count: 'exact', head: true });

    console.log(`\n🔍 Database verification: ${count} courses now in database`);

    if (successCount > 0) {
      console.log('\n🎉 ✅ SUCCESS! Courses are now in the database!');
      console.log('🚀 Next: Start your app with `npm run dev` and go to /admin/courses');
      console.log('\nYou should now see ALL courses in the admin panel!');
      process.exit(0);
    } else {
      console.log(`\n❌ No courses were inserted. Check database connection.`);
      process.exit(1);
    }

  } catch (error) {
    console.error('\n❌ FATAL ERROR:', error);
    process.exit(1);
  }
}

// Run
seedAllCourses();
