import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { courses, formatINR } from "@/data/courses";
import { CourseCard } from "@/components/site/CourseCard";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/specialty-courses/city")({
  component: CityWiseCoursePage,
});

function CityWiseCoursePage() {
  const { specialty, city } = useParams({ from: "/[specialty]-courses/[city]" });

  const specialtyFormatted = specialty
    ? specialty
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    : "Courses";

  const cityFormatted = city
    ? city
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    : "Location";

  const filteredCourses = useMemo(() => {
    return courses.filter((c) =>
      c.categories.some((cat) =>
        cat.toLowerCase().includes(specialty?.toLowerCase() || "")
      )
    );
  }, [specialty]);

  if (filteredCourses.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">404</h1>
          <p className="text-slate-600 mb-8">
            Sorry, we couldn't find {specialtyFormatted} courses in {cityFormatted}.
          </p>
          <Link
            to="/top-medical-courses"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-deep text-white rounded-lg hover:bg-navy-deep/90 transition"
          >
            <ArrowLeft className="w-4 h-4" /> Back to courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="dark:bg-slate-900">
      {/* Hero Section - Matching Specialty Pages */}
      <section className="site-hero">
        <div className="container-x">
          <Link
            to="/top-medical-courses"
            search={{ cat: specialty }}
            className="inline-flex items-center gap-2 text-sm text-primary-foreground hover:text-primary-foreground/70 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to courses
          </Link>
          <div className="text-xs uppercase tracking-[0.25em] text-primary-foreground gold-rule">
            {cityFormatted}
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-primary-foreground mt-3">
            {specialtyFormatted} Courses in {cityFormatted}
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl">
            {cityFormatted} is home to some of India's best medical colleges and hospitals. Explore {specialtyFormatted.toLowerCase()} courses and certifications with world-class training.
          </p>
          <div className="mt-6 text-sm text-primary-foreground/80">
            <span className="font-semibold">{filteredCourses.length}</span> courses available
          </div>

          {/* Inline course cards placed under intro (replaces 'Explore...' link) */}
          {filteredCourses.length > 0 && (
            <div className="mt-10">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredCourses.slice(0, 6).map((course) => (
                  <CourseCard key={course.slug} course={course} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Remove duplicate courses section: cards are now inline under intro */}

      {/* FAQs Section */}
      <FAQsSection specialty={specialtyFormatted} city={cityFormatted} />
    </div>
  );
}

function FAQsSection({
  specialty,
  city,
}: {
  specialty: string;
  city: string;
}) {
  const faqs = [
    {
      question: `Where to apply for ${specialty} courses in ${city}?`,
      answer: `Apply via DMHCA's online portal.`,
    },
    {
      question: `What is the fee for ${specialty} course in ${city}?`,
      answer: `Fees vary; typically ₹50,000–₹3,00,000. Contact admissions.`,
    },
    {
      question: `How to apply for ${specialty} courses in ${city}?`,
      answer: `Fill the online form and upload documents.`,
    },
    {
      question: `What are the eligibility requirements?`,
      answer: `Typically MBBS; some programs need clinical experience.`,
    },
  ];

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-800">
      <div className="container-x max-w-3xl">
        <h2 className="font-display text-3xl text-navy-deep dark:text-slate-100 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden bg-white dark:bg-slate-800 hover:shadow-md dark:hover:shadow-lg transition-shadow">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 hover:bg-slate-50 dark:hover:bg-slate-700 transition text-left"
      >
        <span className="text-base font-bold text-slate-900 dark:text-slate-100">{question}</span>
        <span className="text-slate-600 dark:text-slate-400 flex-shrink-0 ml-4 text-xl">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-200 dark:border-slate-600">
          {answer}
        </div>
      )}
    </div>
  );
}
