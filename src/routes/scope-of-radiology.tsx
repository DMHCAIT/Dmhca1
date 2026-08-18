import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, Clock, Users, Award, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/scope-of-radiology")({
  head: () => ({
    meta: [
      { title: "Scope of Cardiology: Career Opportunities & Specializations — DMHCA" },
      { name: "description", content: "Explore diverse career opportunities in cardiology. Learn about clinical practice, interventional procedures, research, and earning potential in this high-demand specialty." },
    ],
  }),
  component: BlogContent,
});

function BlogContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      {/* Hero Section */}
      <section className="site-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-600/95 to-rose-600/95 dark:from-red-700 dark:to-rose-700"></div>
        <div className="relative container-x py-4 sm:py-6 md:py-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-2 transition text-xs sm:text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
          <div className="max-w-3xl">
            <div className="inline-block px-3 sm:px-4 py-1 bg-red-500/20 border border-red-300/50 rounded-full text-red-200 text-xs font-semibold mb-2">
              Medical Career Guide • 2025 Edition
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight tracking-tight">
              Scope of Cardiology: Career Opportunities & Specializations
            </h1>
            <p className="text-sm sm:text-base text-white/90 max-w-2xl mb-4 leading-relaxed">
              Explore diverse career opportunities in cardiology. Master clinical practice, interventional procedures, research, and achieve exceptional earning potential in this high-demand medical specialty.
            </p>
          </div>
          
          {/* Key Metrics */}
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
                <div className="text-xs sm:text-sm text-white/70">Career Paths</div>
                <div className="font-bold text-sm sm:text-lg">7+</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-white">
              <Award className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <div>
                <div className="text-xs sm:text-sm text-white/70">Job Market</div>
                <div className="font-bold text-sm sm:text-lg">Excellent</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-white">
              <TrendingUp className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <div>
                <div className="text-xs sm:text-sm text-white/70">Growth Rate</div>
                <div className="font-bold text-sm sm:text-lg">High</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-4 sm:py-6 md:py-8 bg-white dark:bg-slate-800 px-4 sm:px-0">
        <div className="container-x flex justify-center">
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl w-full max-w-[992px]">
            <img src="/blog-images/Scope-of-Cardiology.webp" alt="Scope of Cardiology" className="w-full h-auto aspect-[992/496] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 md:py-16 bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm px-4 sm:px-0">
        <div className="container-x max-w-4xl">
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            
            {/* Quick Summary */}
            <div className="mb-8 sm:mb-10 md:mb-12 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 dark:from-red-900/30 dark:via-rose-900/30 dark:to-pink-900/30 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-red-200 dark:border-red-800/50 not-prose">
              <h2 className="text-xl sm:text-2xl font-bold text-red-900 dark:text-red-200 mb-4">What You'll Learn in This Guide</h2>
              <p className="text-sm sm:text-base text-red-800 dark:text-red-300 mb-6 leading-relaxed">
                This comprehensive guide explores the vast scope of cardiology—one of the most dynamic and rewarding medical specialties. Discover diverse career pathways from clinical practice to interventional procedures, research opportunities, and exceptional earning potential.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400 text-xl">✓</span>
                  <span className="text-red-900 dark:text-red-200">7 major career pathways</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400 text-xl">✓</span>
                  <span className="text-red-900 dark:text-red-200">Clinical practice opportunities</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400 text-xl">✓</span>
                  <span className="text-red-900 dark:text-red-200">Procedural expertise guide</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400 text-xl">✓</span>
                  <span className="text-red-900 dark:text-red-200">Earning potential insights</span>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="mb-12 sm:mb-14 md:mb-16 p-4 sm:p-6 md:p-8 bg-slate-100 dark:bg-slate-700/50 rounded-lg sm:rounded-xl md:rounded-2xl border border-slate-200 dark:border-slate-600 not-prose">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 sm:mb-6">Table of Contents</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {[
                  { num: 1, title: "Career Overview" },
                  { num: 2, title: "Clinical Practice" },
                  { num: 3, title: "Interventional Cardiology" },
                  { num: 4, title: "Research & Academics" },
                  { num: 5, title: "Advanced Specializations" },
                  { num: 6, title: "Earning Potential" },
                  { num: 7, title: "International Opportunities" },
                ].map((item) => (
                  <a
                    key={item.num}
                    href={`#section-${item.num}`}
                    className="p-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition group"
                  >
                    <div className="flex items-start gap-2 sm:gap-3">
                      <span className="inline-block px-2 sm:px-2.5 py-1 bg-red-600 text-white text-xs font-bold rounded flex-shrink-0">
                        {item.num}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-red-600 dark:group-hover:text-red-400 line-clamp-2">
                        {item.title}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Section 1: Career Overview */}
            <div id="section-1" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-red-200 dark:border-red-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-full text-red-700 dark:text-red-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 1
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-900 dark:text-red-100 mb-3 sm:mb-4">Career Overview in Cardiology</h2>
              <div className="space-y-3 text-red-900 dark:text-red-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Diverse Career Paths</p>
                    <p className="text-xs sm:text-sm text-red-800 dark:text-red-300">Cardiology offers pathways across diagnostic, therapeutic, and preventive domains</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Professional Roles</p>
                    <p className="text-xs sm:text-sm text-red-800 dark:text-red-300">Diagnose and treat heart diseases, perform procedures, conduct research, and educate medical professionals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Rising Demand</p>
                    <p className="text-xs sm:text-sm text-red-800 dark:text-red-300">Rising prevalence of cardiovascular diseases creates tremendous opportunities in India and globally</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Dynamic Specialty</p>
                    <p className="text-xs sm:text-sm text-red-800 dark:text-red-300">One of the most rewarding medical specialties with exceptional career prospects</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Clinical Practice */}
            <div id="section-2" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-amber-200 dark:border-amber-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-amber-100 dark:bg-amber-900/30 border border-amber-300 dark:border-amber-700 rounded-full text-amber-700 dark:text-amber-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 2
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-900 dark:text-amber-100 mb-3 sm:mb-4">Clinical Practice Opportunities</h2>
              <div className="space-y-3 text-amber-900 dark:text-amber-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-amber-600 dark:text-amber-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Hospital Practice</p>
                    <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-300">Work as cardiologist in government or private hospitals with comprehensive patient care responsibilities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-amber-600 dark:text-amber-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Private Clinic</p>
                    <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-300">Establish own cardiac clinic with consultation services and patient management</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-amber-600 dark:text-amber-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Diagnostic Centers</p>
                    <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-300">Provide cardiac imaging and consultation services in specialized imaging centers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-amber-600 dark:text-amber-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Preventive Cardiology</p>
                    <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-300">Focus on disease prevention, lifestyle modification, and risk management programs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Interventional Cardiology */}
            <div id="section-3" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-pink-200 dark:border-pink-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-pink-100 dark:bg-pink-900/30 border border-pink-300 dark:border-pink-700 rounded-full text-pink-700 dark:text-pink-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 3
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-900 dark:text-pink-100 mb-3 sm:mb-4">Interventional Cardiology</h2>
              <div className="space-y-3 text-pink-900 dark:text-pink-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-pink-600 dark:text-pink-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Coronary Interventions</p>
                    <p className="text-xs sm:text-sm text-pink-800 dark:text-pink-300">Perform coronary angiography and angioplasty procedures with advanced catheterization techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-600 dark:text-pink-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Complex Procedures</p>
                    <p className="text-xs sm:text-sm text-pink-800 dark:text-pink-300">Conduct complex percutaneous coronary interventions for challenging cases</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-600 dark:text-pink-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Emergency Care</p>
                    <p className="text-xs sm:text-sm text-pink-800 dark:text-pink-300">Manage acute coronary syndromes and emergency cardiac care situations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-600 dark:text-pink-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Structural Procedures</p>
                    <p className="text-xs sm:text-sm text-pink-800 dark:text-pink-300">Specialize in structural heart procedures and advanced interventional techniques</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Research & Academics */}
            <div id="section-4" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-indigo-200 dark:border-indigo-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-300 dark:border-indigo-700 rounded-full text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 4
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-900 dark:text-indigo-100 mb-3 sm:mb-4">Research and Academics</h2>
              <div className="space-y-3 text-indigo-900 dark:text-indigo-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Cardiac Research</p>
                    <p className="text-xs sm:text-sm text-indigo-800 dark:text-indigo-300">Conduct research in cardiac pathophysiology and therapeutic advancements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Academic Teaching</p>
                    <p className="text-xs sm:text-sm text-indigo-800 dark:text-indigo-300">Teach in medical colleges and research institutions with mentorship opportunities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Publications</p>
                    <p className="text-xs sm:text-sm text-indigo-800 dark:text-indigo-300">Publish research in international journals and contribute to medical knowledge</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Protocol Development</p>
                    <p className="text-xs sm:text-sm text-indigo-800 dark:text-indigo-300">Develop new cardiac treatment protocols and practice guidelines</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: Advanced Specializations */}
            <div id="section-5" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-blue-200 dark:border-blue-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700 rounded-full text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 5
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-3 sm:mb-4">Advanced Specializations</h2>
              <p className="text-sm sm:text-base text-blue-800 dark:text-blue-300 mb-4">After MD Cardiology, pursue additional fellowships in specialized areas:</p>
              <div className="space-y-3 text-blue-900 dark:text-blue-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Interventional Cardiology Fellowship</p>
                    <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-300">Advanced catheterization and percutaneous intervention procedures</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Electrophysiology Specialization</p>
                    <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-300">Heart rhythm management and ablation procedures expertise</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Heart Failure & Transplant</p>
                    <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-300">Transplantation and advanced device therapy specialization</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Pediatric Cardiology</p>
                    <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-300">Specialized care for congenital and acquired heart diseases in children</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6: Earning Potential */}
            <div id="section-6" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-green-200 dark:border-green-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-full text-green-700 dark:text-green-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 6
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 dark:text-green-100 mb-3 sm:mb-4">Earning Potential</h2>
              <div className="space-y-3 text-green-900 dark:text-green-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Hospital Cardiologists: ₹15-30 Lakhs Annually</p>
                    <p className="text-xs sm:text-sm text-green-800 dark:text-green-300">Competitive government and private hospital positions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Private Practitioners: ₹30+ Lakhs Annually</p>
                    <p className="text-xs sm:text-sm text-green-800 dark:text-green-300">Higher earning potential with own clinic practice</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Interventional Specialists: ₹40+ Lakhs Annually</p>
                    <p className="text-xs sm:text-sm text-green-800 dark:text-green-300">Premium compensation for advanced procedural skills</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">International Opportunities: ₹60+ Lakhs Annually</p>
                    <p className="text-xs sm:text-sm text-green-800 dark:text-green-300">Excellent compensation in USA, UK, Australia, and Gulf countries</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7: International Opportunities */}
            <div id="section-7" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-teal-200 dark:border-teal-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-teal-100 dark:bg-teal-900/30 border border-teal-300 dark:border-teal-700 rounded-full text-teal-700 dark:text-teal-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 7
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-900 dark:text-teal-100 mb-3 sm:mb-4">International Opportunities</h2>
              <p className="text-sm sm:text-base text-teal-800 dark:text-teal-300 mb-4">Cardiologists from India have strong prospects globally with excellent career advancement opportunities.</p>
              <div className="space-y-3 text-teal-900 dark:text-teal-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Global Work Opportunities</p>
                    <p className="text-xs sm:text-sm text-teal-800 dark:text-teal-300">Work in hospitals in USA, UK, Australia, Canada, and Gulf countries</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Higher Compensation</p>
                    <p className="text-xs sm:text-sm text-teal-800 dark:text-teal-300">Significantly higher compensation packages and better working conditions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Advanced Technology</p>
                    <p className="text-xs sm:text-sm text-teal-800 dark:text-teal-300">Access to cutting-edge cardiac technology and advanced equipment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Research Opportunities</p>
                    <p className="text-xs sm:text-sm text-teal-800 dark:text-teal-300">Access to extensive research opportunities and international collaborations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Skills Section */}
            <div className="mb-12 sm:mb-14 md:mb-16 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 sm:mb-6">Essential Skills for Cardiology Success</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-2">✓ Clinical Expertise</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Strong fundamentals in cardiac pathophysiology</p>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-2">✓ Technical Skills</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Master ECG interpretation and cardiac imaging</p>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-2">✓ Procedural Training</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Pursue hands-on training in procedures early</p>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-2">✓ Research Skills</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Engage in clinical research and publications</p>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-2">✓ Continuous Learning</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Stay updated with latest cardiac guidelines</p>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-2">✓ Mentorship</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Build mentorship with experienced cardiologists</p>
                </div>
              </div>
            </div>

            <div className="mt-20 p-10 bg-gradient-to-r from-red-600/95 to-rose-600/95 dark:from-red-700 dark:to-rose-700 rounded-2xl border border-red-400/20 dark:border-red-500/30 shadow-lg not-prose">
              <div className="flex items-start gap-6">
                <BookOpen className="w-10 h-10 text-white flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white dark:text-slate-50 mb-3">Ready to Pursue Cardiology?</h3>
                  <p className="text-slate-100 dark:text-slate-300 mb-6 leading-relaxed text-lg">
                    Explore comprehensive cardiology programs and get expert guidance for your cardiac specialty career.
                  </p>
                  <Link to="/top-medical-courses" className="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-gray-100 text-red-600 font-bold rounded-lg transition shadow-md hover:shadow-lg transform hover:scale-105">
                    Explore Cardiology Programs →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-slate-800 px-4 sm:px-0">
        <div className="container-x max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 text-sm sm:text-base">Get answers to common questions about cardiology career opportunities.</p>
          
          <div className="space-y-4 sm:space-y-6">
            {[
              {
                q: "What is the scope of cardiology in India?",
                a: "Cardiology has tremendous scope in India due to rising cardiovascular diseases. Cardiologists can work in hospitals, diagnostic centers, private practice, research institutions, and academic medical centers with excellent earning potential and job security."
              },
              {
                q: "What are the career opportunities after MD Cardiology?",
                a: "After MD, cardiologists can pursue private practice, work as consultants in hospitals, engage in research, teach in medical colleges, specialize in interventional cardiology, electrophysiology, or heart transplantation. International opportunities are also available."
              },
              {
                q: "What subspecialties are available in cardiology?",
                a: "Popular subspecialties include Interventional Cardiology, Clinical Cardiac Electrophysiology, Heart Failure and Transplant Cardiology, Preventive Cardiology, Pediatric Cardiology, and Non-invasive Cardiac Imaging. Each offers unique career prospects."
              },
              {
                q: "What is the salary potential for cardiologists?",
                a: "Cardiologists command high salaries in India. In hospitals, they earn 15-30 lakhs annually, while private practitioners often earn significantly more. International opportunities offer even higher compensation packages."
              },
              {
                q: "Is cardiology a good specialty to pursue?",
                a: "Yes, cardiology is excellent for those interested in acute care, procedures, and research. With increasing cardiovascular diseases, demand is consistently high. It offers both clinical and procedural satisfaction with excellent earning potential."
              },
              {
                q: "What skills are required for a successful cardiology career?",
                a: "Essential skills include strong clinical assessment, proficiency in cardiac imaging and ECG interpretation, procedural skills, problem-solving abilities, continuous learning mindset, excellent communication for patient counseling, and research aptitude."
              }
            ].map((faq, idx) => (
              <div key={idx} className="p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg sm:rounded-xl hover:shadow-md transition">
                <details className="group">
                  <summary className="flex items-start justify-between cursor-pointer font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                    <span className="flex-1 text-left pr-4">{faq.q}</span>
                    <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-slate-700 dark:text-slate-300 mt-3 text-xs sm:text-sm leading-relaxed">{faq.a}</p>
                </details>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 border-2 border-red-200 dark:border-red-800 rounded-lg sm:rounded-xl">
            <h3 className="text-lg sm:text-xl font-bold text-red-900 dark:text-red-200 mb-2">Need Expert Guidance?</h3>
            <p className="text-sm sm:text-base text-red-800 dark:text-red-300 mb-4">
              Our cardiology experts can help you navigate your specialty career path and make informed decisions.
            </p>
            <Link to="/contact-us" className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition text-sm sm:text-base">
              Contact Our Experts →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
