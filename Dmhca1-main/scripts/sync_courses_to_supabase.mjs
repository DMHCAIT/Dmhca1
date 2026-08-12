import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Usage: node scripts/sync_courses_to_supabase.mjs
// Requires env: SUPABASE_URL and SUPABASE_KEY

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('Please set SUPABASE_URL and SUPABASE_KEY environment variables');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function loadLocalCourses() {
  const file = path.resolve('src/data/courses.tsx');
  try {
    const imported = await import(path.resolve(file));
    const courses = imported.courses || imported.default || null;
    if (!courses) {
      console.error('Could not import courses from file');
      process.exit(1);
    }
    return courses;
  } catch (e) {
    console.error('Import error:', e);
    process.exit(1);
  }
}

function normalizeCourse(c) {
  return {
    slug: c.slug,
    title: c.title,
    categories: c.categories || [],
    image: c.image || null,
    heroImage: c.heroImage || null,
    heroDescription: c.heroDescription || c.overview || null,
    lessons: c.lessons ?? null,
    weeks: c.weeks ?? null,
    level: c.level || null,
    priceINR: c.priceINR ?? c.price ?? 0,
    rating: c.rating ?? null,
    reviewCount: c.reviewCount ?? 0,
    program: c.program || c.meta?.skill_level || 'Certificate',
    overview: c.overview || '',
    learn: c.learn || [],
    faqs: c.faqs || [],
    trainers: c.trainers || [],
    meta: c.meta || {},
    raw: c,
  };
}

async function sync() {
  const local = await loadLocalCourses();
  const normalized = local.map(normalizeCourse);

  console.log('Syncing', normalized.length, 'courses to Supabase...');

  // Upsert in batches
  const batchSize = 50;
  for (let i = 0; i < normalized.length; i += batchSize) {
    const slice = normalized.slice(i, i + batchSize).map((c) => ({
      slug: c.slug,
      title: c.title,
      categories: c.categories,
      image_url: c.image,
      hero_image: c.heroImage,
      hero_description: c.heroDescription,
      lessons: c.lessons,
      weeks: c.weeks,
      level: c.level,
      price: c.priceINR,
      rating: c.rating,
      review_count: c.reviewCount,
      program: c.program,
      testimonials: JSON.stringify(c),
      data: JSON.stringify(c),
    }));

    const { data, error } = await supabase.from('courses').upsert(slice, { onConflict: ['slug'] });
    if (error) {
      console.error('Upsert error:', error);
      process.exit(1);
    }
    console.log('Upserted', slice.length);
  }

  console.log('Sync completed.');
}

sync().catch((e) => { console.error(e); process.exit(1); });
