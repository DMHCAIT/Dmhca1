import { createClient } from '@supabase/supabase-js';

// Import all courses from data file
import { _courses } from '../src/data/courses.tsx';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase credentials in environment');
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seedCourses() {
  try {
    console.log(`🌱 Starting to seed ALL ${_courses.length} courses...`);

    // First, clear existing courses to avoid duplicates
    console.log('🗑️  Clearing existing courses...');
    await supabase.from('courses').delete().neq('id', '');

    // Transform courses data to match database schema
    const coursesToInsert = _courses.map((course) => ({
      slug: course.slug,
      title: course.title,
      categories: JSON.stringify(course.categories || []),
      image: course.image,
      image_url: course.image,
      overview: course.overview || '',
      short_description: course.overview ? course.overview.substring(0, 200) : '',
      level: course.level || 'intermediate',
      lessons: course.lessons || null,
      weeks: course.weeks || null,
      price: course.priceINR || 0,
      rating: course.rating || null,
      review_count: course.reviewCount || 0,
      program: course.program || '',
      learn: JSON.stringify(course.learn || []),
      requirements: JSON.stringify(course.requirements || []),
      modules: JSON.stringify(course.modules || []),
      module_details: JSON.stringify(course.moduleDetails || []),
      faqs: JSON.stringify(course.faqs || []),
      reviews: JSON.stringify(course.reviews || []),
      trainers: JSON.stringify(course.trainers || []),
      is_active: true,
    }));

    // Insert in batches of 10 to avoid timeouts
    const batchSize = 10;
    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < coursesToInsert.length; i += batchSize) {
      const batch = coursesToInsert.slice(i, i + batchSize);
      
      const { error } = await supabase
        .from('courses')
        .insert(batch);

      if (error) {
        console.error(`❌ Error inserting batch ${Math.floor(i / batchSize) + 1}:`, error);
        errorCount += batch.length;
        continue;
      }

      successCount += batch.length;
      const progress = Math.min(i + batchSize, coursesToInsert.length);
      console.log(`✅ Batch ${Math.floor(i / batchSize) + 1} seeded (${batch.length} courses) - Progress: ${progress}/${coursesToInsert.length}`);
    }

    console.log(`\n📊 Seeding Summary:`);
    console.log(`✅ Successfully seeded: ${successCount} courses`);
    if (errorCount > 0) {
      console.log(`❌ Failed: ${errorCount} courses`);
    }

    if (successCount === _courses.length) {
      console.log(`\n🎉 ✅ SUCCESS! All ${successCount} courses have been seeded to database!`);
    }
  } catch (error) {
    console.error('Error seeding courses:', error);
    process.exit(1);
  }
}

seedCourses();
