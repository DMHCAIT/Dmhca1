import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, BookOpen, Award, CheckCircle2, ArrowLeft, ChevronDown, Star, GraduationCap, Globe } from "lucide-react";
import { getCourse, getCategory, relatedCourses, formatINR, type Course } from "@/data/courses";
import { CourseCard } from "@/components/site/CourseCard";
import CourseDetail from "@/components/site/CourseDetail";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = getCourse(params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.course.title} — DMHCA` },
          { name: "description", content: loaderData.course.overview.slice(0, 160) },
          { property: "og:title", content: loaderData.course.title },
          { property: "og:description", content: loaderData.course.overview.slice(0, 200) },
          { property: "og:type", content: "website" },
          { property: "og:image", content: loaderData.course.image },
          { property: "og:image:width", content: "1200" },
          { property: "og:image:height", content: "630" },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: loaderData.course.title },
          { name: "twitter:description", content: loaderData.course.overview.slice(0, 160) },
          { name: "twitter:image", content: loaderData.course.image },
          { name: "canonical", content: `https://dmhca.in/courses/${loaderData.course.slug}` },
        ]
      : [],
    links: loaderData
      ? [
          { rel: "canonical", href: `https://dmhca.in/courses/${loaderData.course.slug}` },
          { rel: "preload", as: "image", href: loaderData.course.image },
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
  const { course } = Route.useLoaderData();
  const primaryCat = getCategory(course.categories[0])!;
  const related = relatedCourses(course.slug, 3);
  const ptype = course.meta?.skill_level || programType(course);
  const { gstAmount, razorpayAmount, totalPrice } = calculateFees(course.priceINR);

  return <CourseDetail course={course} primaryCat={primaryCat} ptype={ptype} gstAmount={gstAmount} razorpayAmount={razorpayAmount} totalPrice={totalPrice} formatINR={formatINR} related={related} />;
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
