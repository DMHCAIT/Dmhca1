import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Clock, BookOpen, Award, CheckCircle2, ArrowLeft, ChevronDown, Star, GraduationCap, Globe } from "lucide-react";
import { getCourse, getCategory, relatedCourses, formatINR, type Course } from "@/data/courses";
import { supabaseClient } from "@/lib/supabase";
import { CourseCard } from "@/components/site/CourseCard";
import CourseDetail from "@/components/site/CourseDetail";

export const Route = createFileRoute("/courses/$slug")({
  loader: async ({ params }) => {
    // Try to fetch from Supabase first
    try {
      const { data, error } = await supabaseClient
        .from('courses')
        .select('*')
        .ilike('slug', params.slug)
        .single();

      if (data && !error) {
        // Parse course data from testimonials column
        let courseData: any = {};
        if (data.testimonials && typeof data.testimonials === 'string') {
          try {
            courseData = JSON.parse(data.testimonials);
          } catch (e) {
            console.warn('Could not parse testimonials for course', data.id);
          }
        }
        
        if (courseData.title) {
          return { course: courseData, slug: params.slug, fromDb: true };
        }
      }
    } catch (e) {
      console.warn('Error fetching course from DB, falling back to local data', e);
    }

    // Fallback to local data
    const course = getCourse(params.slug);
    if (!course) throw notFound();
    return { course, slug: params.slug, fromDb: false };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.course.title} — DMHCA` },
          { name: "description", content: loaderData.course.overview?.slice(0, 160) || '' },
          { property: "og:title", content: loaderData.course.title },
          { property: "og:description", content: loaderData.course.overview?.slice(0, 200) || '' },
          { property: "og:type", content: "website" },
          { property: "og:image", content: loaderData.course.image || loaderData.course.heroImage },
          { property: "og:image:width", content: "1200" },
          { property: "og:image:height", content: "630" },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: loaderData.course.title },
          { name: "twitter:description", content: loaderData.course.overview?.slice(0, 160) || '' },
          { name: "twitter:image", content: loaderData.course.image || loaderData.course.heroImage },
          { name: "canonical", content: `https://dmhca.in/courses/${loaderData.slug}` },
        ]
      : [],
    links: loaderData
      ? [
          { rel: "canonical", href: `https://dmhca.in/courses/${loaderData.slug}` },
          { rel: "preload", as: "image", href: loaderData.course.image || loaderData.course.heroImage },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="container-x py-24 text-center">
      <h1 className="font-display text-3xl text-navy-deep">Course not found</h1>
      <Link to="/top-medical-courses" className="text-navy-deep underline mt-4 inline-block">Back to all courses</Link>
    </div>
  ),
  component: CoursePage,
});

function programType(c: Course) {
  return c.program || c.meta?.skill_level || "Certificate";
}

function calculateFees(price: number) {
  const gstRate = 0.18; // 18% GST
  const razorpayRate = 0.04; // 4% Razorpay
  const gstAmount = price * gstRate;
  const razorpayAmount = price * razorpayRate;
  const totalPrice = price + gstAmount + razorpayAmount;
  return { gstAmount, razorpayAmount, totalPrice };
}

function CoursePage() {
  const { course, slug } = Route.useLoaderData();
  const [courseData, setCourseData] = useState(course);
  const [loading, setLoading] = useState(false);

  // Refresh course data from DB on mount
  useEffect(() => {
    const fetchLatestCourse = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabaseClient
          .from('courses')
          .select('*')
          .ilike('slug', slug)
          .single();

        if (data && !error) {
          let courseData: any = {};
          if (data.testimonials && typeof data.testimonials === 'string') {
            try {
              courseData = JSON.parse(data.testimonials);
              setCourseData(courseData);
            } catch (e) {
              console.warn('Could not parse testimonials');
            }
          }
        }
      } catch (e) {
        console.warn('Error fetching latest course data');
      } finally {
        setLoading(false);
      }
    };

    fetchLatestCourse();
  }, [slug]);

  // Ensure course has default values for arrays
  const finalCourse = {
    ...courseData,
    categories: courseData.categories || [],
    learn: courseData.learn || [],
    requirements: courseData.requirements || [],
    modules: courseData.modules || [],
    moduleDetails: courseData.moduleDetails || [],
    faqs: courseData.faqs || [],
    trainers: courseData.trainers || [],
    reviews: courseData.reviews || [],
  };

  // Get category from local data (fallback)
  let primaryCat: any = null;
  if (finalCourse.categories?.[0]) {
    try {
      primaryCat = getCategory(finalCourse.categories[0]);
    } catch (e) {
      // Category not found in local data, use a default
      primaryCat = { name: finalCourse.category || 'Medical Courses', slug: finalCourse.category?.toLowerCase().replace(/\s+/g, '-') || 'general' };
    }
  } else {
    primaryCat = { name: 'Medical Courses', slug: 'general' };
  }

  // Get related courses from local data
  let related: Course[] = [];
  try {
    related = relatedCourses(slug, 3);
  } catch (e) {
    related = [];
  }

  const ptype = finalCourse.program || finalCourse.meta?.skill_level || "Certificate";
  const { gstAmount, razorpayAmount, totalPrice } = calculateFees(finalCourse.priceINR || 0);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600">Loading course...</p>
        </div>
      </div>
    );
  }

  return <CourseDetail course={finalCourse} primaryCat={primaryCat} ptype={ptype} gstAmount={gstAmount} razorpayAmount={razorpayAmount} totalPrice={totalPrice} formatINR={formatINR} related={related} />;
}

function ModuleRow({ index, title }: { index: number; title: string }) {
  return (
    <div className="flex items-center gap-5 p-4">
      <span className="font-display text-gold text-base w-8">{String(index).padStart(2, "0")}</span>
      <span className="text-sm text-navy-deep flex-1">{title}</span>
    </div>
  );
}

function FaqRow({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 text-left p-5 hover:bg-secondary/40 transition">
        <span className="font-medium text-navy-deep text-sm">{q}</span>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</div>}
    </div>
  );
}
