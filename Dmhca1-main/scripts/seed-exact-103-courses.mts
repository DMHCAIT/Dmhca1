import { createClient } from '@supabase/supabase-js';
import { _courses } from '../src/data/courses';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error('❌ Missing SUPABASE credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: { persistSession: false }
});

async function seedExactCourses() {
  try {
    console.log('🌱 Seeding EXACTLY 103 courses (62 Fellowships, 18 PG Diplomas, 23 Certificates)...');
    console.log('═'.repeat(70));

    // Step 1: Clear all existing courses
    console.log('\n🗑️  Clearing all existing courses from database...');
    try {
      await supabase.from('courses').delete().gt('id', '0');
      console.log('✅ Database cleared');
    } catch (e) {
      console.log('✅ Database ready');
    }

    // Step 2: Count courses by program
    const fellowships = _courses.filter(c => c.program === 'Fellowship');
    const pgDiplomas = _courses.filter(c => c.program === 'PG Diploma');
    const certificates = _courses.filter(c => (c.program || 'Certificate') === 'Certificate');

    console.log('\n📊 Course Count Verification:');
    console.log(`   Fellowships: ${fellowships.length}`);
    console.log(`   PG Diplomas: ${pgDiplomas.length}`);
    console.log(`   Certificates: ${certificates.length}`);
    console.log(`   TOTAL: ${_courses.length}`);

    if (fellowships.length !== 62 || pgDiplomas.length !== 18 || certificates.length !== 23) {
      console.warn('⚠️  Warning: Course counts do not match expected values!');
      console.warn(`   Expected: 62 Fellowships, 18 PG Diplomas, 23 Certificates (103 total)`);
      console.warn(`   Got: ${fellowships.length} Fellowships, ${pgDiplomas.length} PG Diplomas, ${certificates.length} Certificates (${_courses.length} total)`);
    }

    // Step 3: Transform courses to database format
    console.log('\n🔄 Transforming all 103 courses with complete data...');
    const coursesToInsert = _courses.map((course) => {
      const courseData = {
        ...course,
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
        testimonials: JSON.stringify(courseData),
      };
    });

    console.log(`✅ Transformed ${coursesToInsert.length} courses`);

    // Step 4: Insert in batches
    console.log('\n📤 Upserting courses in batches...');
    const batchSize = 10;
    let successCount = 0;

    for (let i = 0; i < coursesToInsert.length; i += batchSize) {
      const batch = coursesToInsert.slice(i, i + batchSize);
      const batchNum = Math.floor(i / batchSize) + 1;

      try {
        const { error } = await supabase
          .from('courses')
          .upsert(batch, { onConflict: 'slug' });

        if (error) {
          console.error(`❌ Batch ${batchNum} failed:`, error.message);
          continue;
        }

        successCount += batch.length;
        const progress = Math.min(i + batchSize, coursesToInsert.length);
        const percentage = Math.round((progress / coursesToInsert.length) * 100);
        console.log(`✅ Batch ${batchNum} (${batch.length} courses) - ${progress}/103 (${percentage}%)`);
      } catch (err) {
        console.error(`❌ Batch ${batchNum} error:`, err);
      }
    }

    // Step 5: Verify final count
    console.log('\n' + '═'.repeat(70));
    console.log('🔍 FINAL VERIFICATION');
    console.log('═'.repeat(70));

    const { count, data: allCourses } = await supabase
      .from('courses')
      .select('*', { count: 'exact' });

    // Verify program distribution
    const finalFellowships = (allCourses || []).filter(c => {
      try {
        const data = JSON.parse(c.testimonials || '{}');
        return data.program === 'Fellowship';
      } catch {
        return false;
      }
    }).length;

    const finalPgDiplomas = (allCourses || []).filter(c => {
      try {
        const data = JSON.parse(c.testimonials || '{}');
        return data.program === 'PG Diploma';
      } catch {
        return false;
      }
    }).length;

    const finalCertificates = (allCourses || []).filter(c => {
      try {
        const data = JSON.parse(c.testimonials || '{}');
        return (data.program || 'Certificate') === 'Certificate';
      } catch {
        return false;
      }
    }).length;

    console.log(`\n📊 Database Status:`);
    console.log(`   Total Courses: ${count}`);
    console.log(`   Fellowships: ${finalFellowships}`);
    console.log(`   PG Diplomas: ${finalPgDiplomas}`);
    console.log(`   Certificates: ${finalCertificates}`);

    if (count === 103 && finalFellowships === 62 && finalPgDiplomas === 18 && finalCertificates === 23) {
      console.log('\n🎉 ✅ SUCCESS! Database contains EXACTLY:');
      console.log('   ✓ 62 Fellowships');
      console.log('   ✓ 18 PG Diplomas');
      console.log('   ✓ 23 Certificates');
      console.log('   ✓ 103 TOTAL COURSES');
      process.exit(0);
    } else {
      console.log('\n⚠️  Count mismatch! Please verify the data.');
      process.exit(1);
    }

  } catch (error) {
    console.error('\n❌ FATAL ERROR:', error);
    process.exit(1);
  }
}

seedExactCourses();
