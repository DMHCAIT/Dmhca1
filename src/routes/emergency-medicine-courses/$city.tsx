import React from "react";
import { createFileRoute, useParams } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  getCourseBySlug,
  getCoursesBySpecialty,
} from "@/data/cityWiseCourses";
import { courses, categories } from "@/data/courses";
import { CourseCard } from "@/components/site/CourseCard";

export const Route = createFileRoute("/emergency-medicine-courses/$city")({
  component: EmergencyMedicineCityPage,
});

function EmergencyMedicineCityPage() {
  const { city } = useParams({
    from: "/emergency-medicine-courses/$city",
  });

  const specialty = "emergency medicine";
  const slug = `emergency-medicine-courses/${city}`;
  const course = getCourseBySlug(slug);

  if (!course) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">404</h1>
          <p className="text-slate-600 mb-8">
            Sorry, we couldn't find {specialty} courses in {city}.
          </p>
          <Link to="/city-wise-medical-courses" className="text-emerald-600 hover:text-emerald-700 font-bold">
            ← Back to all courses
          </Link>
        </div>
      </div>
    );
  }

  const relatedCourses = getCoursesBySpecialty(specialty).filter(
    (c) => c.slug !== slug
  );

  const categoryObj = categories.find(
    (cat) =>
      cat.name.toLowerCase() === specialty.toLowerCase() ||
      cat.slug === specialty.toLowerCase().replace(/\s+/g, "-") ||
      cat.name.toLowerCase().includes(specialty.toLowerCase().split(" ")[0])
  );
  const categorySlug = categoryObj?.slug;
  const cityCourses = categorySlug ? courses.filter((c) => c.categories.includes(categorySlug)) : [];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-12">
        <div className="container-home">
          <div className="max-w-3xl mx-auto">
            <Link to="/city-wise-medical-courses" className="text-emerald-100 hover:text-white mb-4 inline-block">
              ← Back to all courses
            </Link>
            <h1 className="font-display text-4xl md:text-5xl text-white mb-4">
              {specialty.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Courses in{" "}
              {city.charAt(0).toUpperCase() + city.slice(1)}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-home py-16">
        <div className="max-w-3xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              {city.charAt(0).toUpperCase() + city.slice(1)} is home to some of India's best medical
              colleges, universities, and hospitals, making it an ideal location
              for pursuing {specialty} specialization. Our comprehensive{" "}
              {specialty} programs provide world-class education and practical
              training at DMHCA Institute.
            </p>
            <Link
              to="/top-medical-courses"
              className="text-emerald-600 hover:text-emerald-700 font-bold"
            >
              Explore all {specialty} courses →
            </Link>
          </div>

          {/* FAQs */}
          <div className="space-y-8">
            {/* FAQ 1 */}
            <div className="border-l-4 border-emerald-600 pl-6 py-4 bg-slate-50 rounded-r-lg">
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Where to apply for {specialty} courses in {city.charAt(0).toUpperCase() + city.slice(1)}?
              </h2>
              <p className="text-slate-700 mb-4">
                DMHCA Institute offers premium {specialty} programs designed for
                medical professionals seeking advanced specialization. Our
                courses provide:
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-2">
                <li>Expert faculty from leading institutions worldwide</li>
                <li>Comprehensive curriculum covering latest developments</li>
                <li>Flexible learning formats (online and offline)</li>
                <li>Accredited certifications recognized nationally</li>
              </ul>
            </div>

            {/* FAQ 2 */}
            <div className="border-l-4 border-blue-600 pl-6 py-4 bg-slate-50 rounded-r-lg">
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                What is the fees of {specialty} course in{" "}
                {city.charAt(0).toUpperCase() + city.slice(1)}?
              </h2>
              <p className="text-slate-700 mb-4">
                Course fees for {specialty} programs at DMHCA typically range from{" "}
                <strong>₹50,000 to ₹3,00,000</strong>, depending on course
                duration and specialization level. We offer:
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-2">
                <li>Flexible payment options</li>
                <li>Installment plans available</li>
                <li>Scholarships for deserving candidates</li>
                <li>Special corporate discounts</li>
              </ul>
              <p className="text-slate-700 mt-4">
                Contact our admission team for detailed fee structure and
                available discounts.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="border-l-4 border-purple-600 pl-6 py-4 bg-slate-50 rounded-r-lg">
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                How to apply for {specialty} course in{" "}
                {city.charAt(0).toUpperCase() + city.slice(1)}?
              </h2>
              <p className="text-slate-700 mb-4">
                Applying is simple and straightforward. Here's how:
              </p>
              <ol className="list-decimal list-inside text-slate-700 space-y-2 mb-4">
                <li>Visit our website and fill out the application form</li>
                <li>Upload required documents (medical degree, certificates)</li>
                <li>Review your application and submit</li>
                <li>Receive confirmation within 24 hours</li>
                <li>Complete payment and begin your course</li>
              </ol>
              <div className="bg-white p-4 rounded border border-slate-200 mt-4">
                <p className="text-slate-700 mb-2">
                  <strong>Direct Contact:</strong>
                </p>
                <p className="text-slate-700 mb-2">
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+919899711530" className="text-emerald-600 hover:text-emerald-700">
                    +91 9899711530
                  </a>
                </p>
                <p className="text-slate-700">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@dmhca.in" className="text-emerald-600 hover:text-emerald-700">
                    info@dmhca.in
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to start your journey?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Enroll in our {specialty} program in {city.charAt(0).toUpperCase() + city.slice(1)} today and advance your medical career
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

          {/* Courses in this City (CourseCard grid filtered by specialty) */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Courses in {city.charAt(0).toUpperCase() + city.slice(1)}</h2>
            {cityCourses.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cityCourses.map((c) => (
                  <CourseCard key={c.slug} course={c} />
                ))}
              </div>
            ) : (
              <div className="text-slate-600">No course listings found for this specialty.</div>
            )}
          </div>

          {/* Related Courses */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              {specialty.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Courses in Other Cities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedCourses.slice(0, 6).map((relCourse) => (
                <Link
                  key={relCourse.slug}
                  to={`/${relCourse.slug}/`}
                  className="group bg-white border border-slate-200 rounded-lg p-4 hover:shadow-lg hover:border-slate-300 transition-all"
                >
                  <h3 className="font-bold text-slate-900 group-hover:text-emerald-600 transition mb-2">
                    {specialty} in {relCourse.city}
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">{relCourse.description}</p>
                  <div className="text-xs font-semibold text-emerald-600">
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
