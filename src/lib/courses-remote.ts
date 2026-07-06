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

      return {
        slug: row.slug,
        title: row.title || parsed.title || row.slug,
        categories: row.categories || parsed.categories || (parsed.category ? [parsed.category] : []),
        image: row.image_url || parsed.image || null,
        heroImage: row.hero_image || parsed.heroImage || null,
        heroDescription: row.hero_description || parsed.heroDescription || parsed.overview || '',
        lessons: parsed.lessons ?? row.lessons ?? null,
        weeks: parsed.weeks ?? row.weeks ?? null,
        level: parsed.level || row.level || '',
        priceINR: parsed.priceINR ?? row.price ?? 0,
        rating: parsed.rating ?? row.rating ?? null,
        reviewCount: parsed.reviewCount ?? row.review_count ?? 0,
        program: parsed.program || row.program || 'Certificate',
        overview: parsed.overview || parsed.description || '',
        learn: parsed.learn || [],
        faqs: parsed.faqs || [],
        trainers: parsed.trainers || [],
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
