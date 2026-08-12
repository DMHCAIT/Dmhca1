import React from "react";
import { createFileRoute, useParams } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  getCoursesBySpecialty,
} from "@/data/cityWiseCourses";
import { courses } from "@/data/courses";
import { CourseCard } from "@/components/site/CourseCard";

export const Route = createFileRoute("/embryology-courses/$city")({
  component: EmbryologyCityPage,
});

function EmbryologyCityPage() {
  const { city } = useParams({
    from: "/embryology-courses/$city",
  });

  const specialty = "embryology";
  const relatedCourses = getCoursesBySpecialty(specialty);

  // Filter courses that contain embryology or reproductive
  const cityCourses = courses.filter(
    (c) => c.categories.includes("reproductive") || 
    c.title.toLowerCase().includes("embryology")
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-navy-deep to-navy py-12">
        <div className="container-city">
          <div className="w-full">
            <Link to="/city-wise-medical-courses" className="text-white hover:text-gold mb-4 inline-block">
              ← Back to all courses
            </Link>
            <h1 className="font-display text-4xl md:text-5xl text-white mb-4">
              Embryology Courses in{" "}
              {city.charAt(0).toUpperCase() + city.slice(1)}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-city py-16">
        <div className="w-full">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              {city.charAt(0).toUpperCase() + city.slice(1)} is home to some of India's best medical
              colleges, universities, and hospitals, making it an ideal location
              for pursuing embryology specialization. Our comprehensive embryology programs provide world-class education and practical
              training at DMHCA Institute.
            </p>

            {/* Inline course cards shown immediately under intro (replaces Explore link) */}
            {cityCourses.length > 0 && (
              <div className="mt-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {cityCourses.slice(0, 6).map((c) => (
                    <CourseCard key={c.slug} course={c} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* FAQs - collapsed behavior with short answers */}
          <div className="space-y-4">
            <CollapsibleFAQ
              question={`Where to apply for embryology courses in ${city.charAt(0).toUpperCase() + city.slice(1)}?`}
              shortAnswer={`You can go with DMHCA Institute in ${city.charAt(0).toUpperCase() + city.slice(1)} for your embryology course because of their medical experts.`}
              longAnswer={`DMHCA Institute offers premium embryology programs with expert faculty and practical training.`}
            />

            <CollapsibleFAQ
              question={`What is the fees of embryology course in ${city.charAt(0).toUpperCase() + city.slice(1)}?`}
              shortAnswer={`The fees of embryology courses in ${city.charAt(0).toUpperCase() + city.slice(1)} varies from ₹50,000 to ₹3,00,000. For latest prices, contact the DMHCA medical experts.`}
              longAnswer={`Fees vary by program type and duration. Contact admissions for exact figures and payment plans.`}
            />

            <CollapsibleFAQ
              question={`How to apply for embryology course in ${city.charAt(0).toUpperCase() + city.slice(1)}?`}
              shortAnswer={`Directly contact the DMHCA medical professionals at +91 9899711530 and they will guide you thoroughly.`}
              longAnswer={`Visit our website, complete the application, upload required documents, and our admissions team will confirm enrollment.`}
            />
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to start your journey?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Enroll in our embryology program in {city.charAt(0).toUpperCase() + city.slice(1)} today and advance your medical career
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919899711530"
                className="px-8 py-3 bg-white text-slate-900 rounded-lg font-bold hover:bg-slate-100 transition"
              >
                Call: +91 9899711530
              </a>
              <a
                href="mailto:info@dmhca.in"
                className="px-8 py-3 border border-white text-white rounded-lg font-bold hover:bg-white hover:text-slate-900 transition"
              >
                Email: info@dmhca.in
              </a>
            </div>
          </div>

          {/* Related Courses */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Embryology Courses in Other Cities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedCourses.slice(0, 6).map((relCourse) => (
                <Link
                  key={relCourse.slug}
                  to={`/${relCourse.slug}/`}
                  className="group bg-white border border-slate-200 rounded-lg p-4 hover:shadow-lg hover:border-slate-300 transition-all"
                >
                  <h3 className="font-bold text-slate-900 group-hover:text-navy-deep transition mb-2">
                    Embryology in {relCourse.city}
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">{relCourse.description}</p>
                  <div className="text-xs font-semibold text-navy-deep">
                    Learn more →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CollapsibleFAQ({ question, shortAnswer, longAnswer }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition text-left"
      >
        <div>
          <div className="text-base font-bold text-slate-900">{question}</div>
        </div>
        <div className="text-slate-600 ml-4 text-xl">{open ? "−" : "+"}</div>
      </button>
      {open && (
        <div className="px-6 py-4 bg-slate-50 text-slate-700 text-sm leading-relaxed border-t border-slate-200">
          {shortAnswer}
        </div>
      )}
    </div>
  );
}
