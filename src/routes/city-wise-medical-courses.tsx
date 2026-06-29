import React, { useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  cityWiseCourses,
  getAllSpecialties,
} from "@/data/cityWiseCourses";
import { categories, courses } from "@/data/courses";
import { events } from "@/data/events";

export const Route = createFileRoute("/city-wise-medical-courses")({
  component: CityWiseMedicalCourses,
});

function CityWiseMedicalCourses() {
  const specialties = getAllSpecialties();

  // Group courses by specialty
  const coursesBySpecialty = useMemo(() => {
    const grouped: Record<string, typeof cityWiseCourses> = {};
    specialties.forEach((specialty) => {
      grouped[specialty] = cityWiseCourses.filter(
        (course) => course.specialty === specialty
      );
    });
    return grouped;
  }, [specialties]);

  // Get unique categories from courses
  const categoriesWithCourses = useMemo(() => {
    return categories
      .map((category) => ({
        ...category,
        courseCount: courses.filter((c) =>
          c.categories.includes(category.slug)
        ).length,
      }))
      .filter((c) => c.courseCount > 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 py-12">
        <div className="container-home">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl text-white mb-4">
              List of Medical Courses City Wise
            </h1>
            <p className="text-lg text-slate-300">
              Explore medical specialization courses available across different
              cities in India. Find the perfect course location for your medical
              career.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-home py-16">
        <div className="max-w-6xl mx-auto">
          {/* Table of Contents */}
          <div className="bg-slate-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">What's on This Page</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-slate-900 mb-2">City-Wise Courses</h3>
                <p className="text-sm text-slate-600">
                  Medical courses grouped by specialty across different Indian cities
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Course Categories</h3>
                <p className="text-sm text-slate-600">
                  Browse by medical specialty: Cardiology, Radiology, Surgery, and more
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Events & Webinars</h3>
                <p className="text-sm text-slate-600">
                  Upcoming workshops, seminars, and educational events from DMHCA
                </p>
              </div>
            </div>
          </div>

          {/* Section 1: Specialty Sections (City-Wise) */}
          <section className="mb-20">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-slate-900 mb-2">
                📍 City-Wise Medical Courses
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded"></div>
              <p className="text-slate-600 mt-3">Explore specialized medical courses available in different cities across India</p>
            </div>

            <div className="space-y-16">
              {specialties.map((specialty) => (
                <div key={specialty} className="scroll-mt-32">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 capitalize">
                      {specialty} Courses by City
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded"></div>
                  </div>

                  {/* Cities Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {coursesBySpecialty[specialty].map((course) => (
                      <Link
                        key={course.slug}
                        to={`/${course.slug}/`}
                        className="group bg-white border border-slate-200 rounded-lg p-4 hover:shadow-lg hover:border-slate-300 transition-all duration-300"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-bold text-slate-900 group-hover:text-emerald-600 transition">
                            {specialty} in {course.city}
                          </h4>
                          <span className="text-slate-400 group-hover:text-emerald-600 transition">
                            →
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 mb-3">
                          {course.description}
                        </p>
                        <div className="text-xs font-semibold text-emerald-600">
                          Learn more
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Course Categories */}
          <section className="mb-20 pt-12 border-t border-slate-200">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-slate-900 mb-2">
                📚 Course Categories
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded"></div>
              <p className="text-slate-600 mt-3">Browse medical specializations with {courses.length} professional courses available</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoriesWithCourses.map((category) => (
                <Link
                  key={category.slug}
                  to={`/top-medical-courses#${category.slug}`}
                  className="group bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
                >
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">
                    {category.tagline}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-600">
                      {category.courseCount} course{category.courseCount !== 1 ? 's' : ''}
                    </span>
                    <span className="text-blue-600 group-hover:translate-x-1 transition">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Section 3: Events & Webinars */}
          <section className="mb-20 pt-12 border-t border-slate-200">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-slate-900 mb-2">
                🎓 Events & Webinars
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
              <p className="text-slate-600 mt-3">Join our upcoming workshops, seminars, and educational events</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {events.slice(0, 6).map((event) => (
                <Link
                  key={event.id}
                  to={`/events/${event.slug}`}
                  className="group bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-40 bg-slate-200 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-slate-900 group-hover:text-purple-600 transition mb-2 line-clamp-2">
                      {event.title}
                    </h3>
                    <div className="space-y-2 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <span>📅</span>
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>📍</span>
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 mt-3 mb-3 line-clamp-2">
                      {event.shortDescription}
                    </p>
                    <div className="text-xs font-semibold text-purple-600">
                      View details →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {events.length > 6 && (
              <div className="text-center mt-8">
                <Link
                  to="/events"
                  className="inline-block px-6 py-2 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition"
                >
                  View All Events ({events.length})
                </Link>
              </div>
            )}
          </section>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Enroll?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact our admission team to learn more about your preferred
              course and city location. We're here to guide you through every
              step of your medical education journey.
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
        </div>
      </div>
    </div>
  );
}
