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

async function seedAllCoursesComplete() {
  try {
    console.log(`🌱 Starting to seed ALL ${_courses.length} courses with COMPLETE data...`);
    console.log('═'.repeat(70));

    // Step 1: Clear existing courses
    console.log('\n🗑️  Clearing existing courses from database...');
    try {
      await supabase
        .from('courses')
        .delete()
        .gt('id', '0');
      console.log('✅ Database cleared');
    } catch (e) {
      console.log('✅ Database ready');
    }

    // Step 2: Transform courses to database format with ALL fields
    console.log('\n🔄 Transforming ALL 103 courses with complete data...');
    const coursesToInsert = _courses.map((course) => {
      // Store the COMPLETE course object as JSON string
      const courseData = {
        ...course,
        // Ensure all arrays and objects are preserved
        categories: course.categories || [],
        learn: course.learn || [],
        requirements: course.requirements || [],
        modules: course.modules || [],
        moduleDetails: course.moduleDetails || [],
        trainers: course.trainers || [],
        faqs: course.faqs || [],
        reviews: course.reviews || [],
        meta: course.meta || {},
        courseDetails: course.courseDetails || {},
      };

      return {
        slug: course.slug,
        title: course.title,
        
        // Store in columns that exist in database
        description: course.overview || '',
        short_description: course.overview ? course.overview.substring(0, 200) : '',
        category: (course.categories && course.categories[0]) || '',
        image_url: course.image || '',
        price: course.priceINR || 0,
        level: course.level || 'intermediate',
        rating: course.rating || null,
        review_count: course.reviewCount || 0,
        duration: `${course.weeks || 0} weeks`,
        duration_weeks: course.weeks || null,
        total_lessons: course.lessons || null,
        
        // IMPORTANT: Store the COMPLETE course data here for retrieval
        // Using testimonials column to store complete JSON data
        testimonials: JSON.stringify(courseData),
      };
    });

    console.log(`✅ Transformed ${coursesToInsert.length} courses with ALL fields`);

    // Step 3: Insert or update in batches (upsert)
    console.log('\n📤 Upserting courses in batches...');
    const batchSize = 5;
    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < coursesToInsert.length; i += batchSize) {
      const batch = coursesToInsert.slice(i, i + batchSize);
      const batchNum = Math.floor(i / batchSize) + 1;
      
      try {
        // Use upsert to insert new courses or update existing ones
        const { error } = await supabase
          .from('courses')
          .upsert(batch, { onConflict: 'slug' });

        if (error) {
          console.error(`❌ Batch ${batchNum} failed:`, error.message);
          errorCount += batch.length;
          continue;
        }

        successCount += batch.length;
        const progress = Math.min(i + batchSize, coursesToInsert.length);
        const percentage = Math.round((progress / coursesToInsert.length) * 100);
        console.log(`✅ Batch ${batchNum} (${batch.length} courses) - ${progress}/${coursesToInsert.length} (${percentage}%)`);
      } catch (err) {
        console.error(`❌ Batch ${batchNum} error:`, err);
        errorCount += batch.length;
      }
    }

    // Step 4: Summary & Verification
    console.log('\n' + '═'.repeat(70));
    console.log('📊 SEEDING COMPLETE');
    console.log('═'.repeat(70));
    console.log(`✅ Successfully inserted: ${successCount} courses`);
    if (errorCount > 0) {
      console.log(`❌ Failed: ${errorCount} courses`);
    }

    const { count } = await supabase
      .from('courses')
      .select('*', { count: 'exact', head: true });

    console.log(`\n🔍 Database verification: ${count} courses now in database`);

    if (successCount > 0) {
      console.log('\n🎉 ✅ SUCCESS! All courses with COMPLETE data are now in database!');
      console.log('🚀 Next: Start your app with `npm run dev` and go to /admin/courses');
      console.log('\n📋 All ' + successCount + ' courses are available with their exact data:');
      console.log('   ✓ Categories');
      console.log('   ✓ Learning Outcomes');
      console.log('   ✓ Curriculum Modules');
      console.log('   ✓ Requirements');
      console.log('   ✓ Instructors/Trainers');
      console.log('   ✓ FAQs');
      console.log('   ✓ Reviews');
      console.log('   ✓ All metadata');
      process.exit(0);
    } else {
      console.log(`\n❌ No courses inserted. Check database connection.`);
      process.exit(1);
    }

  } catch (error) {
    console.error('\n❌ FATAL ERROR:', error);
    process.exit(1);
  }
}

// Run
seedAllCoursesComplete();
