import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Existing courses data from src/data/courses.tsx
const existingCourses = [
  {
    slug: "fellowship-in-echocardiography",
    title: "Fellowship in Echocardiography",
    category: "cardiology",
    price: 110000,
    duration_weeks: 52,
    instructor_name: "Dr. Cardiac Specialist",
    description: "Fellowship in Echocardiography: Master Cardiac Imaging Techniques for Comprehensive Diagnosis and Patient Care",
    short_description: "Advanced cardiac imaging training",
    is_active: true,
  },
  {
    slug: "certificate-in-hypertension",
    title: "Certificate in Hypertension",
    category: "cardiology",
    price: 45000,
    duration_weeks: 12,
    instructor_name: "Dr. Hypertension Expert",
    description: "Comprehensive course on hypertension management",
    short_description: "Master hypertension diagnosis and treatment",
    is_active: true,
  },
  {
    slug: "certificate-in-diabetology",
    title: "Certificate in Diabetology",
    category: "endocrinology",
    price: 50000,
    duration_weeks: 16,
    instructor_name: "Dr. Diabetes Specialist",
    description: "Complete diabetes management and care program",
    short_description: "Diabetes management expertise",
    is_active: true,
  },
  {
    slug: "fellowship-in-critical-care",
    title: "Fellowship in Critical Care",
    category: "emergency",
    price: 95000,
    duration_weeks: 48,
    instructor_name: "Dr. Critical Care Expert",
    description: "Advanced critical care and emergency medicine",
    short_description: "Master critical care procedures",
    is_active: true,
  },
  {
    slug: "certificate-in-advanced-cardiac-life-support",
    title: "Certificate in Advanced Cardiac Life Support",
    category: "cardiology",
    price: 35000,
    duration_weeks: 8,
    instructor_name: "Dr. ACLS Instructor",
    description: "ACLS certification course",
    short_description: "ACLS and emergency cardiology",
    is_active: true,
  },
];

// Existing events/webinars
const existingEvents = [
  {
    slug: "join-our-3-day-master-workshop-in-ultrasound-with-hands-on-training-program",
    title: "3-Day Master Workshop in Ultrasound",
    event_type: "workshop",
    location: "New Delhi, India",
    speaker_name: "Dr. Ultrasound Expert",
    capacity: 50,
    enrolled_count: 0,
    description: "Hands-on ultrasound training workshop",
    date_time: new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    is_active: true,
  },
  {
    slug: "webinar-what-to-expect-at-the-hiv-awareness-webinar-2025",
    title: "HIV Awareness Webinar 2025",
    event_type: "webinar",
    location: "Online",
    speaker_name: "Dr. HIV Specialist",
    capacity: 500,
    enrolled_count: 0,
    description: "HIV awareness and prevention strategies",
    date_time: new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000).toISOString(),
    is_active: true,
  },
  {
    slug: "webinar-cervical-cancer-awareness-diagnosis-and-treatment",
    title: "Cervical Cancer Awareness Webinar",
    event_type: "webinar",
    location: "Online",
    speaker_name: "Dr. Oncology Expert",
    capacity: 300,
    enrolled_count: 0,
    description: "Cervical cancer diagnosis and treatment",
    date_time: new Date(new Date().getTime() + 21 * 24 * 60 * 60 * 1000).toISOString(),
    is_active: true,
  },
];

// Website pages to manage
const pagesList = [
  { page_name: "home", display_name: "Home" },
  { page_name: "about", display_name: "About Us" },
  { page_name: "courses", display_name: "Courses" },
  { page_name: "events", display_name: "Events & Webinars" },
  { page_name: "contact", display_name: "Contact Us" },
  { page_name: "blog", display_name: "Blog" },
];

async function seedData() {
  console.log("🌱 Starting data seed...\n");

  try {
    // 1. Seed Courses
    console.log("📚 Seeding courses...");
    for (const course of existingCourses) {
      const { data: existing } = await supabase
        .from('courses')
        .select('id')
        .eq('slug', course.slug)
        .single();

      if (!existing) {
        const { error } = await supabase.from('courses').insert([
          {
            ...course,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
        ]);

        if (error) {
          console.error(`  ❌ Error adding ${course.title}:`, error.message);
        } else {
          console.log(`  ✅ Added: ${course.title}`);
        }
      } else {
        console.log(`  ℹ️  Exists: ${course.title}`);
      }
    }

    // 2. Seed Events
    console.log("\n📅 Seeding events...");
    for (const event of existingEvents) {
      const { data: existing } = await supabase
        .from('events')
        .select('id')
        .eq('slug', event.slug)
        .single();

      if (!existing) {
        const { error } = await supabase.from('events').insert([
          {
            ...event,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
        ]);

        if (error) {
          console.error(`  ❌ Error adding ${event.title}:`, error.message);
        } else {
          console.log(`  ✅ Added: ${event.title}`);
        }
      } else {
        console.log(`  ℹ️  Exists: ${event.title}`);
      }
    }

    // 3. Seed Pages
    console.log("\n📄 Seeding pages...");
    for (const page of pagesList) {
      try {
        const { data: existing } = await supabase
          .from('site_pages')
          .select('id')
          .eq('page_name', page.page_name)
          .single();

        if (!existing) {
          const { error } = await supabase.from('site_pages').insert([
            {
              ...page,
              content: '',
              is_active: true,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            },
          ]);

          if (error && !error.message.includes('already')) {
            console.error(`  ❌ Error adding ${page.display_name}:`, error.message);
          } else if (!error) {
            console.log(`  ✅ Added: ${page.display_name}`);
          }
        } else {
          console.log(`  ℹ️  Exists: ${page.display_name}`);
        }
      } catch (err) {
        // Page doesn't exist yet, so create it
        const { error } = await supabase.from('site_pages').insert([
          {
            ...page,
            content: '',
            is_active: true,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
        ]);

        if (error && !error.message.includes('already')) {
          console.error(`  ❌ Error adding ${page.display_name}:`, error.message);
        } else if (!error) {
          console.log(`  ✅ Added: ${page.display_name}`);
        }
      }
    }

    console.log("\n✅ Data seeding completed successfully!");
  } catch (error) {
    console.error("❌ Fatal error during seeding:", error.message);
    process.exit(1);
  }
}

seedData();
