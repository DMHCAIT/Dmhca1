import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env.local
const envPath = path.join(__dirname, '.env.local');
const envContent = fs.readFileSync(envPath, 'utf-8');
const envLines = envContent.split('\n');

envLines.forEach((line) => {
  if (line && !line.startsWith('#')) {
    const [key, ...value] = line.split('=');
    process.env[key.trim()] = value.join('=').trim();
  }
});

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Error: Missing Supabase credentials in environment variables');
  console.error('URL:', supabaseUrl);
  console.error('Key:', supabaseKey);
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function addInstructorToCourse() {
  try {
    // Dr. Bhuvaneshwari Instructor Information
    const instructor = {
      name: "Dr. Bhuvaneshwari",
      title: "Cosmetologist/Dermatologist",
      specialization: "Cosmetic Dermatology",
      bio: "Expert cosmetologist and dermatologist with extensive experience in aesthetic medicine and cosmetic procedures.",
      image: "/Faculty_images/Dr Bhuvaneshwari.webp",
      qualifications: [
        "MBBS",
        "MD Dermatology",
        "Fellowship in Cosmetic Dermatology"
      ],
      experience: "15+ years in cosmetic and aesthetic medicine"
    };

    const courseSlug = "certificate-in-clinical-cosmetology";

    // First, try to fetch the course
    const { data: existingCourse, error: fetchError } = await supabase
      .from('courses')
      .select('*')
      .ilike('slug', courseSlug)
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') {
      throw fetchError;
    }

    let courseData = {
      title: "Certificate in Clinical Cosmetology",
      slug: courseSlug,
      category: "dermatology",
      categories: ["dermatology"],
      program: "Certificate",
      priceINR: 50000,
      overview: "Advanced clinical cosmetology program designed to equip healthcare professionals with comprehensive knowledge and practical skills in modern cosmetic procedures and aesthetic medicine.",
      heroDescription: "Master Clinical Cosmetology: Professional Certificate in Advanced Aesthetic Medicine Procedures",
      level: "intermediate",
      rating: 4.8,
      reviewCount: 45,
      lessons: 24,
      modules: [
        "Fundamentals of Clinical Cosmetology",
        "Skin Anatomy and Physiology",
        "Cosmetic Assessment and Treatment Planning",
        "Laser and Light-Based Procedures",
        "Injectables and Fillers",
        "Advanced Aesthetic Procedures",
        "Patient Safety and Ethics",
        "Business Management of Aesthetic Practice"
      ],
      learn: [
        "Master advanced cosmetic procedures and techniques",
        "Understand skin anatomy and pathology",
        "Develop expertise in laser and light therapies",
        "Learn injectable techniques and filler applications",
        "Understand safety protocols and patient management",
        "Develop business and practice management skills",
        "Hands-on clinical experience with real cases",
        "Industry best practices and standards"
      ],
      requirements: [
        "MBBS or equivalent medical qualification",
        "Active medical practice or healthcare background",
        "Interest in aesthetic medicine",
        "Basic computer literacy for online coursework"
      ],
      trainers: [instructor],
      faqs: [
        {
          q: "What are the prerequisites for this certificate course?",
          a: "Candidates must have MBBS or equivalent medical qualification. Healthcare professionals with MD/MS degrees are also eligible."
        },
        {
          q: "What is the duration of this course?",
          a: "The certificate course typically spans 12-16 weeks with flexible online learning schedules."
        },
        {
          q: "Will I get hands-on training?",
          a: "Yes, the course includes practical demonstrations, case studies, and supervised clinical practice sessions."
        },
        {
          q: "Is this course recognized?",
          a: "This is a professional development and continuing education course from DMHCA designed for skill enhancement and professional growth."
        }
      ]
    };

    if (existingCourse) {
      // Update existing course
      console.log('Updating existing course:', courseSlug);
      
      let existingData = {};
      if (existingCourse.testimonials && typeof existingCourse.testimonials === 'string') {
        try {
          existingData = JSON.parse(existingCourse.testimonials);
        } catch (e) {
          console.warn('Could not parse existing testimonials');
        }
      }

      // Merge with existing data, preserving trainers array
      courseData = {
        ...existingData,
        ...courseData,
        trainers: [instructor] // Add or update trainers
      };

      const { data, error } = await supabase
        .from('courses')
        .update({
          testimonials: JSON.stringify(courseData),
          title: courseData.title,
          slug: courseData.slug,
          category: courseData.category,
          categories: courseData.categories,
          price: courseData.priceINR,
          updated_at: new Date().toISOString()
        })
        .eq('id', existingCourse.id)
        .select();

      if (error) throw error;
      console.log('✓ Course updated successfully');
      console.log('Instructor added:', instructor.name, '-', instructor.title);
      return data;
    } else {
      // Create new course
      console.log('Creating new course:', courseSlug);
      
      courseData = {
        ...courseData,
        trainers: [instructor]
      };

      const { data, error } = await supabase
        .from('courses')
        .insert([{
          testimonials: JSON.stringify(courseData),
          slug: courseData.slug,
          title: courseData.title,
          category: courseData.category,
          categories: courseData.categories,
          price: courseData.priceINR,
          duration_weeks: 16
        }])
        .select();

      if (error) throw error;
      console.log('✓ Course created successfully');
      console.log('Instructor added:', instructor.name, '-', instructor.title);
      return data;
    }
  } catch (error) {
    console.error('Error adding instructor to course:', error);
    process.exit(1);
  }
}

// Run the function
addInstructorToCourse().then(() => {
  console.log('\n✓ All done! The instructor has been added to the certificate-in-clinical-cosmetology course.');
  process.exit(0);
});
