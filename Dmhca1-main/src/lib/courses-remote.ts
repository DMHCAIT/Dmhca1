import { supabaseClient } from '@/lib/supabase';

export async function fetchCoursesFromSupabase() {
  try {
    const { data, error } = await supabaseClient
      .from('courses')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    const normalized = (data || []).map((row: any) => {
      let parsed = {};
      try {
        parsed = row.testimonials && typeof row.testimonials === 'string' ? JSON.parse(row.testimonials) : row.testimonials || {};
      } catch (e) {
        parsed = {};
      }

      // Handle categories - check multiple sources in order of preference
      let categoriesArray = [];
      if (row.categories && Array.isArray(row.categories)) {
        categoriesArray = row.categories;
      } else if (parsed.categories && Array.isArray(parsed.categories)) {
        categoriesArray = parsed.categories;
      } else if (row.category && typeof row.category === 'string') {
        categoriesArray = [row.category];
      } else if (parsed.category && typeof parsed.category === 'string') {
        categoriesArray = [parsed.category];
      }

      return {
        slug: row.slug,
        title: row.title || parsed.title || row.slug,
        categories: categoriesArray,
        image: row.image_url || parsed.image || null,
        heroImage: row.hero_image || parsed.heroImage || null,
        heroDescription: row.hero_description || parsed.heroDescription || parsed.overview || '',
        lessons: parsed.lessons ?? row.lessons ?? null,
        months: parsed.months ?? row.months ?? parsed.weeks ?? row.weeks ?? null,
        level: parsed.level || row.level || '',
        priceINR: parsed.priceINR ?? row.price ?? 0,
        rating: parsed.rating ?? row.rating ?? null,
        reviewCount: parsed.reviewCount ?? row.review_count ?? 0,
        program: parsed.program || row.program || 'Certificate',
        overview: parsed.overview || parsed.description || '',
        learn: parsed.learn || [],
        modules: parsed.modules || [],
        moduleDetails: parsed.moduleDetails || [],
        requirements: parsed.requirements || [],
        faqs: parsed.faqs || [],
        trainers: parsed.trainers || [],
        reviews: parsed.reviews || [],
        meta: parsed.meta || {},
        raw: row,
      };
    });

    return normalized;
  } catch (e) {
    console.error('Error fetching courses from Supabase:', e);
    return null;
  }
}
