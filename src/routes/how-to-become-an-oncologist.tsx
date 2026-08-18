import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, Clock, Users, Award, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/how-to-become-an-oncologist")({
  head: () => ({
    meta: [
      { title: "How to Become an Oncologist — DMHCA" },
      { name: "description", content: "Step-by-step guide to becoming a oncologist in India." },
    ],
  }),
  component: BlogContent,
});

function BlogContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      <section className="site-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-600/95 to-rose-600/95 dark:from-red-700 dark:to-rose-700"></div>
        <div className="relative container-x py-4 sm:py-6 md:py-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-2 transition text-xs sm:text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
          <div className="max-w-3xl">
            <div className="inline-block px-3 sm:px-4 py-1 bg-white/20 border border-white/30 rounded-full text-white text-xs font-semibold mb-2">
              Medical Career Guide • 2025 Edition
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight tracking-tight">
              How to Become an Oncologist
            </h1>
            <p className="text-sm sm:text-base text-white/90 max-w-2xl mb-4 leading-relaxed">
              Complete pathway to becoming a oncologist in India
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mt-3 pt-3 border-t border-white/20">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-white">
              <Clock className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <div>
                <div className="text-xs sm:text-sm text-white/70">Read Time</div>
                <div className="font-bold text-sm sm:text-lg">8 min</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-white">
              <Users className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <div>
                <div className="text-xs sm:text-sm text-white/70">Steps</div>
                <div className="font-bold text-sm sm:text-lg">7</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-white">
              <Award className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <div>
                <div className="text-xs sm:text-sm text-white/70">Duration</div>
                <div className="font-bold text-sm sm:text-lg">12-13 years</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-white">
              <TrendingUp className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <div>
                <div className="text-xs sm:text-sm text-white/70">Job Market</div>
                <div className="font-bold text-sm sm:text-lg">Excellent</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-2 sm:py-3 md:py-4 bg-white dark:bg-slate-800 px-4 sm:px-0">
        <div className="container-x flex justify-center">
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl w-full max-w-[992px]">
            <img src="/blog-images/How-to-Become-an-Oncologist.webp" alt="How to Become an Oncologist" className="w-full h-auto aspect-[992/496] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16 bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm px-4 sm:px-0">
        <div className="container-x max-w-4xl">
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            <div className="mb-12 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6">Path to Oncologist</h2>
              <p className="text-slate-700 dark:text-slate-300 mb-8 text-sm sm:text-base">Becoming a oncologist in India requires a systematic approach combining academic excellence, competitive entrance exams, and clinical experience. This guide outlines the complete pathway to help you navigate your journey into this rewarding medical specialty.</p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-red-600/95 to-rose-600/95 dark:from-red-700 dark:to-rose-700 text-white font-bold">1</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Foundation & Preparation</h3>
                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300">Complete 12th standard with Science (Physics, Chemistry, Biology). This is the foundation for your medical career. Strong academic performance is essential to clear competitive entrance exams.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-red-600/95 to-rose-600/95 dark:from-red-700 dark:to-rose-700 text-white font-bold">2</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">NEET-UG & MBBS Admission</h3>
                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300">Appear for NEET-UG entrance examination and secure admission to a recognized medical college. Score well to get into premier institutions that offer quality medical education.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-red-600/95 to-rose-600/95 dark:from-red-700 dark:to-rose-700 text-white font-bold">3</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Complete MBBS Program</h3>
                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300">Study comprehensive 4.5 years of medical curriculum covering all major subjects. Develop strong fundamentals in anatomy, physiology, pathology, and pharmacology during your MBBS journey.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-red-600/95 to-rose-600/95 dark:from-red-700 dark:to-rose-700 text-white font-bold">4</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Clinical Internship</h3>
                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300">Complete 1-year mandatory clinical internship with rotations across various departments. Gain practical clinical experience and exposure to your specialty during internship postings.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-red-600/95 to-rose-600/95 dark:from-red-700 dark:to-rose-700 text-white font-bold">5</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">NEET-PG Preparation & Exam</h3>
                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300">Dedicate 10-14 months for intensive NEET-PG preparation. Score well in this competitive examination to secure your specialty seat in a reputable institute.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-red-600/95 to-rose-600/95 dark:from-red-700 dark:to-rose-700 text-white font-bold">6</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Postgraduate Specialization</h3>
                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300">Complete 3-year MD/MS in your chosen specialty. Undergo intensive training, gain hands-on experience, and develop expertise in specialty-specific knowledge and skills.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-red-600/95 to-rose-600/95 dark:from-red-700 dark:to-rose-700 text-white font-bold">7</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Establish Practice & Career</h3>
                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300">Start your professional career in hospitals, diagnostic centers, or private practice. Optionally pursue super-specialty fellowships for advanced expertise and better career prospects.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6">Duration Timeline</h2>
              <div className="bg-gradient-to-r from-red-600/95 to-rose-600/95 dark:from-red-700 dark:to-rose-700 rounded-lg p-6 text-white">
                <p className="text-sm sm:text-base">Total Duration: <span className="font-bold text-lg">12-13 years</span></p>
                <p className="text-sm sm:text-base text-white/80 mt-2">This includes 12th to MBBS, internship, NEET-PG preparation, and postgraduate specialization training.</p>
              </div>
            </div>

            <div className="mb-12 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6">Key Tips for Success</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-lg"><p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">✓ Excel in academic subjects early</p></div>
                <div className="p-4 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-lg"><p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">✓ Develop interest during clinical rotations</p></div>
                <div className="p-4 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-lg"><p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">✓ Score well in NEET-PG for seat selection</p></div>
                <div className="p-4 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-lg"><p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">✓ Stay updated with latest advancements</p></div>
                <div className="p-4 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-lg"><p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">✓ Build strong clinical skills and acumen</p></div>
                <div className="p-4 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-lg"><p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">✓ Consider super-specialty for better prospects</p></div>
              </div>
            </div>

            <div className="mb-12 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg sm:rounded-xl hover:shadow-md transition">
                  <details className="group">
                    <summary className="flex items-start justify-between cursor-pointer font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                      <span className="flex-1 text-left pr-4">What is the total time required to become a oncologist?</span>
                      <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                      </span>
                    </summary>
                    <p className="text-slate-700 dark:text-slate-300 mt-3 text-xs sm:text-sm leading-relaxed">Total duration is approximately 12-13 years. This includes 12th completion, 5.5-year MBBS program, 1-year internship, NEET-PG preparation, and 3-year postgraduate specialization training.</p>
                  </details>
                </div>
                <div className="p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg sm:rounded-xl hover:shadow-md transition">
                  <details className="group">
                    <summary className="flex items-start justify-between cursor-pointer font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                      <span className="flex-1 text-left pr-4">How competitive is NEET-PG for this specialty?</span>
                      <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                      </span>
                    </summary>
                    <p className="text-slate-700 dark:text-slate-300 mt-3 text-xs sm:text-sm leading-relaxed">Competition level varies based on specialty popularity and available seats. Generally, specialties with high demand require top 1-5% ranking in NEET-PG. Focus on consistent preparation and strong fundamentals to secure your preferred seat.</p>
                  </details>
                </div>
                <div className="p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg sm:rounded-xl hover:shadow-md transition">
                  <details className="group">
                    <summary className="flex items-start justify-between cursor-pointer font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                      <span className="flex-1 text-left pr-4">What are the career prospects after completing the specialization?</span>
                      <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                      </span>
                    </summary>
                    <p className="text-slate-700 dark:text-slate-300 mt-3 text-xs sm:text-sm leading-relaxed">Excellent career prospects! You can work in government hospitals, private practices, diagnostic centers, teaching institutions, research organizations, and international opportunities. Many specialists establish their own clinics or super-specialty centers.</p>
                  </details>
                </div>
                <div className="p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg sm:rounded-xl hover:shadow-md transition">
                  <details className="group">
                    <summary className="flex items-start justify-between cursor-pointer font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                      <span className="flex-1 text-left pr-4">What are the financial requirements for this medical career?</span>
                      <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                      </span>
                    </summary>
                    <p className="text-slate-700 dark:text-slate-300 mt-3 text-xs sm:text-sm leading-relaxed">Government medical colleges charge nominal MBBS fees (₹0-25 lakhs), while private institutions charge ₹15-50 lakhs. Postgraduate fees vary: government colleges charge minimal fees, while private institutions charge ₹10-30 lakhs for specialization. Various scholarships and educational loans are available.</p>
                  </details>
                </div>
                <div className="p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg sm:rounded-xl hover:shadow-md transition">
                  <details className="group">
                    <summary className="flex items-start justify-between cursor-pointer font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                      <span className="flex-1 text-left pr-4">Can I practice this specialty internationally?</span>
                      <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                      </span>
                    </summary>
                    <p className="text-slate-700 dark:text-slate-300 mt-3 text-xs sm:text-sm leading-relaxed">Yes, Indian specialists can practice internationally! You may need additional qualifications or exams like FRCR (UK), ABR (USA), or equivalent certifications in your target country. Many Indian specialists work successfully in developed nations and contribute to global healthcare.</p>
                  </details>
                </div>
                <div className="p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg sm:rounded-xl hover:shadow-md transition">
                  <details className="group">
                    <summary className="flex items-start justify-between cursor-pointer font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                      <span className="flex-1 text-left pr-4">What skills are essential to succeed in this field?</span>
                      <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                      </span>
                    </summary>
                    <p className="text-slate-700 dark:text-slate-300 mt-3 text-xs sm:text-sm leading-relaxed">Essential skills include strong academic foundation, excellent clinical acumen, attention to detail, effective communication, problem-solving abilities, continuous learning mindset, empathy for patients, and hands-on procedural skills. Time management and stress handling are equally important for success in medical practice.</p>
                  </details>
                </div>
              </div>
            </div>

            <div className="mt-20 p-10 bg-gradient-to-r from-red-600/95 to-rose-600/95 dark:from-red-700 dark:to-rose-700 rounded-2xl border border-red-400/20 dark:border-red-500/30 shadow-lg not-prose">
              <div className="flex items-start gap-6">
                <BookOpen className="w-10 h-10 text-white flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white dark:text-slate-50 mb-3">Still have questions?</h3>
                  <p className="text-slate-100 dark:text-slate-300 mb-6 leading-relaxed text-lg">Don't hesitate to reach out to our expert counselors who can provide personalized guidance for your oncology specialization career journey.</p>
                  <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-gray-100 text-slate-900 font-bold rounded-lg transition shadow-md hover:shadow-lg transform hover:scale-105">
                    Contact Our Experts →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
