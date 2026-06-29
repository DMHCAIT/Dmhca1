import React from "react";
import { createFileRoute, useParams, Link } from "@tanstack/react-router";
import { getCourseBySlug, getCoursesBySpecialty, getCoursesByCity } from "@/data/cityWiseCourses";

export const Route = createFileRoute("/specialty-courses/city")({
  component: CityWiseCoursePage,
});

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-3 bg-white"
      >
        <div className="text-sm font-semibold text-slate-900">{question}</div>
        <div className="text-slate-500">{open ? "−" : "+"}</div>
      </button>
      {open && <div className="px-4 py-3 bg-slate-50 text-slate-700 text-sm">{answer}</div>}
    </div>
  );
}

export default function CityWiseCoursePage() {
  const { specialty, city } = useParams({ from: "/$specialty-courses/$city" });
  const slug = `${specialty}-courses/${city}`;
  const course = getCourseBySlug(slug);

  if (!course) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">404</h1>
          <p className="text-slate-600 mb-8">Sorry, we couldn't find courses in {city} for {specialty}.</p>
          <Link to="/city-wise-medical-courses" className="text-emerald-600 hover:text-emerald-700 font-bold">← Back to all courses</Link>
        </div>
      </div>
    );
  }

  const relatedCourses = getCoursesBySpecialty(specialty).filter((c) => c.slug !== slug);
  const cityCourses = getCoursesByCity(city);

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-12">
        <div className="container-home">
          <div className="max-w-3xl mx-auto">
            <Link to="/city-wise-medical-courses" className="text-emerald-100 hover:text-white mb-4 inline-block">← Back to all courses</Link>
            <h1 className="font-display text-4xl md:text-5xl text-white mb-4">{specialty.charAt(0).toUpperCase() + specialty.slice(1)} Courses in {city.charAt(0).toUpperCase() + city.slice(1)}</h1>
          </div>
        </div>
      </div>

      <div className="container-home py-16">
        <div className="max-w-3xl mx-auto">
          {/* Courses in this City */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Courses in {city.charAt(0).toUpperCase() + city.slice(1)}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cityCourses.length > 0 ? (
                cityCourses.map((c) => (
                  <div key={c.slug} className="bg-white border border-slate-200 rounded-lg p-4">
                    <h3 className="font-bold text-slate-900 mb-2">{c.specialty} — {c.city}</h3>
                    <p className="text-sm text-slate-600 mb-3">{c.description}</p>
                    <div className="text-xs font-semibold text-emerald-600">View details →</div>
                  </div>
                ))
              ) : (
                <div className="text-slate-600">No course listings found for this city.</div>
              )}
            </div>
            <div className="mt-6">
              <Link to={`/${specialty}-courses/`} className="text-emerald-600 hover:text-emerald-700 font-bold">Explore all {specialty} courses →</Link>
            </div>
          </div>

          {/* FAQs */}
          <div className="space-y-4 mt-12">
            <FAQItem
              question={`Where to apply for ${specialty} courses in ${city.charAt(0).toUpperCase() + city.slice(1)}?`}
              answer={`DMHCA Institute in ${city.charAt(0).toUpperCase() + city.slice(1)} offers recognized ${specialty} programs. Contact admissions for details.`}
            />
            <FAQItem
              question={`What is the fee for ${specialty} courses in ${city.charAt(0).toUpperCase() + city.slice(1)}?`}
              answer={`Typical fees range between ₹50,000 and ₹3,00,000 depending on the program. Exact fees are listed on the course page.`}
            />
            <FAQItem
              question={`How to apply for ${specialty} courses in ${city.charAt(0).toUpperCase() + city.slice(1)}?`}
              answer={`Apply via the online form, upload required documents, and complete payment. Admissions will confirm next steps.`}
            />
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to start your journey?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">Enroll in our {specialty} program in {city.charAt(0).toUpperCase() + city.slice(1)} today and advance your medical career</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919899711530" className="px-8 py-3 bg-white text-slate-900 rounded-lg font-bold hover:bg-slate-100 transition">Call: +91 9899711530</a>
              <a href="mailto:info@dmhca.in" className="px-8 py-3 border border-white text-white rounded-lg font-bold hover:bg-white hover:text-slate-900 transition">Email: info@dmhca.in</a>
            </div>
          </div>

          {/* Related Courses */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">{specialty} Courses in Other Cities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedCourses.slice(0, 6).map((relCourse) => (
                <Link key={relCourse.slug} to={`/${relCourse.slug}/`} className="group bg-white border border-slate-200 rounded-lg p-4 hover:shadow-lg hover:border-slate-300 transition-all">
                  <h3 className="font-bold text-slate-900 group-hover:text-emerald-600 transition mb-2">{specialty} in {relCourse.city}</h3>
                  <p className="text-sm text-slate-600 mb-3">{relCourse.description}</p>
                  <div className="text-xs font-semibold text-emerald-600">Learn more →</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
