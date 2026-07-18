import { useEffect, useState, useCallback } from 'react';
import { supabaseClient } from '@/lib/supabase';

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

      if (isCacheValid && !forceRefresh) {
        setCourses(coursesCache.data!);
        setLoading(false);
        return coursesCache.data!;
      }

      setLoading(true);
      const { data, error: supabaseError } = await supabaseClient
        .from('courses')
        .select('*')
        .order('created_at', { ascending: false });

      if (supabaseError) {
        throw new Error(supabaseError.message);
      }

      const processedCourses = (data || []).map((course: any) => {
        let courseData = {};

        // Parse testimonials (fresh data from admin panel updates)
        if (course.testimonials && typeof course.testimonials === 'string') {
          try {
            courseData = JSON.parse(course.testimonials);
          } catch (e) {
            console.warn(`Could not parse testimonials for course ${course.id}`);
          }
        }

        // Fallback to data field if testimonials empty
        if (!courseData || Object.keys(courseData).length === 0) {
          if (course.data && typeof course.data === 'string') {
            try {
              courseData = JSON.parse(course.data);
            } catch (e) {
              console.warn(`Could not parse data for course ${course.id}`);
            }
          } else if (course.data) {
            courseData = course.data;
          }
        }

        const lessonsValue = (courseData as any).lessons || course.lessons;
        const parsedLessons = lessonsValue ? Number(lessonsValue) : null;

        return {
          ...course,
          id: course.id,
          slug: course.slug || (courseData as any).slug || '',
          title: course.title || (courseData as any).title || '',
          category: course.category || (courseData as any).category || '',
          categories: course.categories || [(courseData as any).category] || [],
          image: course.image_url || (courseData as any).image || '',
          program: (courseData as any).program || course.program || 'Certificate',
          priceINR: (courseData as any).priceINR || course.price || 0,
          months: (courseData as any).months || course.duration_weeks || 0,
          level: (courseData as any).level || '',
          lessons: parsedLessons,
          rating: (courseData as any).rating || course.rating || 0,
          reviewCount: (courseData as any).reviewCount || course.review_count || 0,
          overview: (courseData as any).overview || '',
          heroDescription: (courseData as any).heroDescription || '',
          learn: (courseData as any).learn || [],
          requirements: (courseData as any).requirements || [],
          modules: (courseData as any).modules || [],
          moduleDetails: (courseData as any).moduleDetails || [],
          faqs: (courseData as any).faqs || [],
          trainers: (courseData as any).trainers || [],
          reviews: (courseData as any).reviews || [],
          meta: (courseData as any).meta || {},
        };
      });

      // Update cache
      coursesCache.data = processedCourses;
      coursesCache.timestamp = now;

      setCourses(processedCourses);
      setError(null);
      return processedCourses;
    } catch (err) {
      const errorMsg = `Failed to fetch courses: ${(err as any)?.message || err}`;
      console.error(errorMsg);
      setError(errorMsg);
      
      // If Supabase fails, try to use cached data
      if (coursesCache.data) {
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
