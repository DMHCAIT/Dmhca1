import { useEffect, useState, useCallback } from 'react';
import { supabaseClient } from '@/lib/supabase';
import { courses as staticCourses } from '@/data/courses';

export interface CourseData {
  id: string;
  slug: string;
  title: string;
  category?: string;
  categories?: string[];
  image?: string;
  program?: string;
  priceINR?: number;
  months?: number;
  level?: string;
  lessons?: number;
  rating?: number;
  reviewCount?: number;
  overview?: string;
  heroDescription?: string;
  learn?: string[];
  requirements?: string[];
  modules?: string[];
  moduleDetails?: string[][];
  faqs?: any[];
  trainers?: any[];
  reviews?: any[];
  meta?: any;
  [key: string]: any;
}

// In-memory cache with expiration
const coursesCache = {
  data: null as CourseData[] | null,
  timestamp: 0,
  CACHE_DURATION: 5 * 60 * 1000, // 5 minutes
};

// Attempt to hydrate in-memory cache from sessionStorage for instant loads across reloads
try {
  if (typeof sessionStorage !== 'undefined') {
    const raw = sessionStorage.getItem('dmhca_courses_cache');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed?.data && parsed?.timestamp) {
        coursesCache.data = parsed.data;
        coursesCache.timestamp = parsed.timestamp;
      }
    }
  }
} catch (e) {
  // ignore storage errors
}

/**
 * Merge static course data with Supabase data
 * Static data provides lessons, months, and other details
 * Supabase data can override with updates
 */
function mergeWithStaticData(supabaseCourse: any): CourseData {
  // Find matching static course by title or slug
  const staticCourse = staticCourses.find(
    (c) => c.slug === supabaseCourse.slug || c.title === supabaseCourse.title
  ) as any;

  return {
    id: supabaseCourse.id,
    slug: supabaseCourse.slug || staticCourse?.slug || '',
    title: supabaseCourse.title || staticCourse?.title || '',
    category: supabaseCourse.category || staticCourse?.categories?.[0] || '',
    categories: supabaseCourse.categories || staticCourse?.categories || [],
    image: supabaseCourse.image_url || staticCourse?.image || '',
    program: supabaseCourse.program || staticCourse?.program || 'Certificate',
    priceINR: supabaseCourse.price || staticCourse?.priceINR || 0,
    // Use static data for lessons and months as Supabase doesn't always have these
    lessons: staticCourse?.lessons || null,
    months: staticCourse?.months || 0,
    level: supabaseCourse.level || staticCourse?.level || '',
    rating: supabaseCourse.rating || staticCourse?.rating || null,
    reviewCount: supabaseCourse.review_count || staticCourse?.reviewCount || 0,
    overview: staticCourse?.overview || '',
    heroDescription: staticCourse?.heroDescription || '',
    learn: staticCourse?.learn || [],
    requirements: staticCourse?.requirements || [],
    modules: staticCourse?.modules || [],
    moduleDetails: staticCourse?.moduleDetails,
    faqs: staticCourse?.faqs || [],
    trainers: staticCourse?.trainers,
    reviews: staticCourse?.reviews,
    meta: staticCourse?.meta || {},
  };
}

/**
 * Hook to fetch courses from Supabase with intelligent caching
 * Falls back to static data if Supabase is unavailable
 */
export function useCoursesData() {
  const [courses, setCourses] = useState<CourseData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCourses = useCallback(async (forceRefresh = false) => {
    try {
      // Check cache validity
      const now = Date.now();
      const isCacheValid = coursesCache.data && (now - coursesCache.timestamp) < coursesCache.CACHE_DURATION;

      // If cache is valid and not forcing refresh, return immediately
      if (isCacheValid && !forceRefresh) {
        setCourses(coursesCache.data!);
        setLoading(false);
        return coursesCache.data!;
      }

      // If we have stale cache and not forcing refresh, return it immediately
      // and refresh in background to avoid stalling the homepage
      if (coursesCache.data && !forceRefresh) {
        setCourses(coursesCache.data);
        setLoading(false);
        // Fire-and-forget refresh to update cache
        (async () => {
          try {
            const { data: freshData, error: supabaseError } = await supabaseClient
              .from('courses')
              .select('id,slug,title,category,categories,image_url,program,price,rating,review_count,created_at')
              .order('created_at', { ascending: false })
              .limit(200);
            if (!supabaseError && freshData && Array.isArray(freshData)) {
              const processedCourses = freshData.map(mergeWithStaticData);
              coursesCache.data = processedCourses;
              coursesCache.timestamp = Date.now();
              setCourses(processedCourses);
            }
          } catch (e) {
            console.error('Background refresh failed', e);
          }
        })();
        return coursesCache.data;
      }

      setLoading(true);
      // Fetch only essential courses for faster initial render (reduced from 200)
      const { data, error: supabaseError } = await supabaseClient
        .from('courses')
        .select('id,slug,title,category,categories,image_url,program,price,rating,review_count,created_at')
        .order('created_at', { ascending: false })
        .limit(30); // Reduced for fast initial load

      if (supabaseError) {
        throw new Error(supabaseError.message);
      }

      // Fetch remaining courses in background (non-blocking)
      supabaseClient
        .from('courses')
        .select('id,slug,title,category,categories,image_url,program,price,rating,review_count,created_at')
        .order('created_at', { ascending: false })
        .limit(200)
        .then(result => {
          if (result.data) {
            coursesCache.data = result.data.map(mergeWithStaticData);
            coursesCache.timestamp = Date.now();
          }
        })
        .catch(() => {}); // Fail silently, keep initial data

      // If Supabase returns data, merge with static data; otherwise fall back to static data
      let processedCourses: CourseData[];
      
      if (data && Array.isArray(data) && data.length > 0) {
        processedCourses = data.map(mergeWithStaticData);
      } else {
        // Fall back to static courses data
        console.warn('No courses from Supabase, using static data');
        processedCourses = (staticCourses as any[]).map((course) => ({
          id: course.slug,
          slug: course.slug,
          title: course.title,
          category: course.categories?.[0] || '',
          categories: course.categories || [],
          image: course.image || '',
          program: course.program || 'Certificate',
          priceINR: course.priceINR || 0,
          lessons: course.lessons || null,
          months: course.months || 0,
          level: course.level || '',
          rating: course.rating || null,
          reviewCount: course.reviewCount || 0,
          overview: course.overview || '',
          heroDescription: course.heroDescription || '',
          learn: course.learn || [],
          requirements: course.requirements || [],
          modules: course.modules || [],
          moduleDetails: course.moduleDetails,
          faqs: course.faqs || [],
          trainers: course.trainers,
          reviews: course.reviews,
          meta: course.meta || {},
        }));
      }

      // Update cache
      coursesCache.data = processedCourses;
      coursesCache.timestamp = now;
      try {
        if (typeof sessionStorage !== 'undefined') {
          sessionStorage.setItem('dmhca_courses_cache', JSON.stringify({ data: processedCourses, timestamp: now }));
        }
      } catch (e) {}

      setCourses(processedCourses);
      setError(null);
      return processedCourses;
    } catch (err) {
      const errorMsg = `Failed to fetch courses: ${(err as any)?.message || err}`;
      console.error(errorMsg);
      setError(errorMsg);
      
      // Fall back to static courses data if Supabase fails
      if (!coursesCache.data) {
        const staticCoursesData: CourseData[] = (staticCourses as any[]).map((course) => ({
          id: course.slug,
          slug: course.slug,
          title: course.title,
          category: course.categories?.[0] || '',
          categories: course.categories || [],
          image: course.image || '',
          program: course.program || 'Certificate',
          priceINR: course.priceINR || 0,
          lessons: course.lessons || null,
          months: course.months || 0,
          level: course.level || '',
          rating: course.rating || null,
          reviewCount: course.reviewCount || 0,
          overview: course.overview || '',
          heroDescription: course.heroDescription || '',
          learn: course.learn || [],
          requirements: course.requirements || [],
          modules: course.modules || [],
          moduleDetails: course.moduleDetails,
          faqs: course.faqs || [],
          trainers: course.trainers,
          reviews: course.reviews,
          meta: course.meta || {},
        }));
        coursesCache.data = staticCoursesData;
        coursesCache.timestamp = Date.now();
        setCourses(staticCoursesData);
      } else if (coursesCache.data) {
        setCourses(coursesCache.data);
      }
      
      setLoading(false);
      return coursesCache.data || [];
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const refreshCourses = useCallback(async () => {
    return await fetchCourses(true);
  }, [fetchCourses]);

  const getCourseBySlug = useCallback((slug: string): CourseData | undefined => {
    return courses.find((c) => c.slug === slug);
  }, [courses]);

  const getCoursesByCategory = useCallback((category: string): CourseData[] => {
    if (!category) return courses;
    return courses.filter((c) => {
      const courseCategories = Array.isArray(c.categories) ? c.categories : [c.category];
      return courseCategories.some((cat) => cat?.toLowerCase() === category.toLowerCase());
    });
  }, [courses]);

  const getCoursesByProgram = useCallback((program: string): CourseData[] => {
    return courses.filter((c) => c.program?.toLowerCase() === program.toLowerCase());
  }, [courses]);

  return {
    courses,
    loading,
    error,
    refreshCourses,
    getCourseBySlug,
    getCoursesByCategory,
    getCoursesByProgram,
  };
}

/**
 * Invalidate the courses cache when admin makes updates
 * Call this after updating courses in the admin panel
 */
export function invalidateCoursesCache() {
  coursesCache.data = null;
  coursesCache.timestamp = 0;
}

/**
 * Get cached courses synchronously (useful for static data needs)
 */
export function getCachedCourses(): CourseData[] {
  return coursesCache.data || [];
}
