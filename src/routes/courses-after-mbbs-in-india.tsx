import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, Clock, Users, Award, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/courses-after-mbbs-in-india")({
  head: () => ({
    meta: [
      { title: "Courses After MBBS in India: Complete Postgraduate Guide — DMHCA" },
      { name: "description", content: "Comprehensive guide to all postgraduate and specialization courses available for MBBS graduates in India. Explore MD, MS, DM, MCh, and more." },
    ],
  }),
  component: BlogContent,
});

function BlogContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      {/* Hero Section */}
      <section className="site-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/95 to-blue-600/95 dark:from-purple-700 dark:to-blue-700"></div>
        <div className="relative container-x py-4 sm:py-6 md:py-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-2 transition text-xs sm:text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
          <div className="max-w-3xl">
            <div className="inline-block px-3 sm:px-4 py-1 bg-purple-500/20 border border-purple-300/50 rounded-full text-purple-200 text-xs font-semibold mb-2">
              Career Planning Guide • 2025 Edition
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight tracking-tight">
              Courses After MBBS in India: Your Complete Postgraduate Roadmap
            </h1>
            <p className="text-sm sm:text-base text-white/90 max-w-2xl mb-4 leading-relaxed">
              Explore all postgraduate and specialization courses available for MBBS graduates. Master your career path with comprehensive guidance on MD, MS, DM, MCh, and beyond.
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
                <div className="text-xs sm:text-sm text-white/70">Specializations</div>
                <div className="font-bold text-sm sm:text-lg">50+</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-white">
              <TrendingUp className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <div>
                <div className="text-xs sm:text-sm text-white/70">Updated</div>
                <div className="font-bold text-sm sm:text-lg">June 2025</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-4 sm:py-6 md:py-8 bg-white dark:bg-slate-800 px-4 sm:px-0">
        <div className="container-x flex justify-center">
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl w-full max-w-[992px]">
            <img src="/blog-images/Courses-After-MBBS-in-India.webp" alt="Courses After MBBS in India" className="w-full h-auto aspect-[992/496] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 md:py-16 bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm px-4 sm:px-0">
        <div className="container-x max-w-4xl">
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            
            {/* Quick Summary */}
            <div className="mb-8 sm:mb-10 md:mb-12 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-purple-900/30 dark:via-blue-900/30 dark:to-indigo-900/30 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-purple-200 dark:border-purple-800/50 not-prose">
              <h2 className="text-xl sm:text-2xl font-bold text-purple-900 dark:text-purple-200 mb-4">What You'll Learn in This Guide</h2>
              <p className="text-sm sm:text-base text-purple-800 dark:text-purple-300 mb-6 leading-relaxed">
                This comprehensive guide explores all postgraduate options available for MBBS graduates in India. From MD and MS programs to DM/MCh super specialties and international opportunities, discover the pathway that matches your career aspirations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 text-xl">✓</span>
                  <span className="text-purple-900 dark:text-purple-200">7 major postgraduate pathways</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 text-xl">✓</span>
                  <span className="text-purple-900 dark:text-purple-200">Detailed eligibility criteria</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 text-xl">✓</span>
                  <span className="text-purple-900 dark:text-purple-200">Career planning tips</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 text-xl">✓</span>
                  <span className="text-purple-900 dark:text-purple-200">International opportunities</span>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="mb-12 sm:mb-14 md:mb-16 p-4 sm:p-6 md:p-8 bg-slate-100 dark:bg-slate-700/50 rounded-lg sm:rounded-xl md:rounded-2xl border border-slate-200 dark:border-slate-600 not-prose">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 sm:mb-6">Table of Contents</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {[
                  { num: 1, title: "MD (Doctorate of Medicine)" },
                  { num: 2, title: "MS (Master of Surgery)" },
                  { num: 3, title: "PG Diploma Programs" },
                  { num: 4, title: "DM (Super-specialty)" },
                  { num: 5, title: "MCh (Super-specialty)" },
                  { num: 6, title: "MBA in Healthcare" },
                  { num: 7, title: "International Opportunities" },
                ].map((item) => (
                  <a
                    key={item.num}
                    href={`#section-${item.num}`}
                    className="p-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition group"
                  >
                    <div className="flex items-start gap-2 sm:gap-3">
                      <span className="inline-block px-2 sm:px-2.5 py-1 bg-purple-600 text-white text-xs font-bold rounded flex-shrink-0">
                        {item.num}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 line-clamp-2">
                        {item.title}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Section 1: MD */}
            <div id="section-1" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-blue-200 dark:border-blue-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700 rounded-full text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 1
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-3 sm:mb-4">MD (Doctorate of Medicine)</h2>
              <div className="space-y-3 text-blue-900 dark:text-blue-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Duration: 3 years full-time postgraduate degree</p>
                    <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-300">Comprehensive medical training and specialization</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Eligibility: MBBS completion + 1 year internship + NEET-PG qualification</p>
                    <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-300">Must be registered with MCI/State Medical Council</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Focus: Clinical training with research and thesis component</p>
                    <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-300">Balanced blend of practice and research</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Specialties: Internal Medicine, Pediatrics, Psychiatry, etc.</p>
                    <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-300">Multiple medical specializations available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: MS */}
            <div id="section-2" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-emerald-200 dark:border-emerald-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-300 dark:border-emerald-700 rounded-full text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 2
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-900 dark:text-emerald-100 mb-3 sm:mb-4">MS (Master of Surgery)</h2>
              <div className="space-y-3 text-emerald-900 dark:text-emerald-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Duration: 3 years full-time postgraduate degree</p>
                    <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300">Comprehensive surgical training program</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Eligibility: MBBS completion + 1 year internship + NEET-PG qualification</p>
                    <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300">Similar to MD eligibility requirements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Focus: Surgical training with research and thesis requirement</p>
                    <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300">Practical surgical skills with academic rigor</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Specialties: General Surgery, Orthopedics, ENT, Ophthalmology, etc.</p>
                    <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300">Diverse surgical specializations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: PG Diploma */}
            <div id="section-3" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-amber-200 dark:border-amber-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-amber-100 dark:bg-amber-900/30 border border-amber-300 dark:border-amber-700 rounded-full text-amber-700 dark:text-amber-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 3
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-900 dark:text-amber-100 mb-3 sm:mb-4">PG Diploma Programs</h2>
              <div className="space-y-3 text-amber-900 dark:text-amber-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-amber-600 dark:text-amber-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Duration: 2-3 years depending on specialty</p>
                    <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-300">Shorter than MD/MS programs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-amber-600 dark:text-amber-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Focus: More practical, less research emphasis than MD/MS</p>
                    <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-300">Clinically oriented training approach</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-amber-600 dark:text-amber-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Specialties: Anesthesia, Radiology, Pathology, OBG, etc.</p>
                    <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-300">Diverse specialty options available</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-amber-600 dark:text-amber-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Benefit: Faster completion with clinically oriented training</p>
                    <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-300">Quick entry into specialized practice</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: DM */}
            <div id="section-4" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-indigo-200 dark:border-indigo-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-300 dark:border-indigo-700 rounded-full text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 4
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-900 dark:text-indigo-100 mb-3 sm:mb-4">DM (Doctor of Medicine - Super-specialty)</h2>
              <div className="space-y-3 text-indigo-900 dark:text-indigo-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Duration: 3 years advanced specialization</p>
                    <p className="text-xs sm:text-sm text-indigo-800 dark:text-indigo-300">Highly specialized medical training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Eligibility: MD in relevant specialty + entrance exam</p>
                    <p className="text-xs sm:text-sm text-indigo-800 dark:text-indigo-300">Requires prior MD qualification</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Examples: DM Cardiology, DM Neurology, DM Nephrology, DM Gastroenterology</p>
                    <p className="text-xs sm:text-sm text-indigo-800 dark:text-indigo-300">Multiple super-specialty options</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Career: Highly specialized practice and research opportunities</p>
                    <p className="text-xs sm:text-sm text-indigo-800 dark:text-indigo-300">Premium expertise and earning potential</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: MCh */}
            <div id="section-5" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-rose-200 dark:border-rose-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-rose-100 dark:bg-rose-900/30 border border-rose-300 dark:border-rose-700 rounded-full text-rose-700 dark:text-rose-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 5
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-900 dark:text-rose-100 mb-3 sm:mb-4">MCh (Master of Chirurgie - Super-specialty)</h2>
              <div className="space-y-3 text-rose-900 dark:text-rose-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-rose-600 dark:text-rose-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Duration: 3 years advanced surgical specialization</p>
                    <p className="text-xs sm:text-sm text-rose-800 dark:text-rose-300">Highest level of surgical expertise</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-rose-600 dark:text-rose-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Eligibility: MS in relevant surgical specialty + entrance exam</p>
                    <p className="text-xs sm:text-sm text-rose-800 dark:text-rose-300">Requires MS qualification</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-rose-600 dark:text-rose-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Examples: MCh Urology, MCh Pediatric Surgery, MCh CTVS, MCh Neurosurgery</p>
                    <p className="text-xs sm:text-sm text-rose-800 dark:text-rose-300">Specialized surgical branches</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-rose-600 dark:text-rose-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Career: Advanced surgical expertise and specialized centers</p>
                    <p className="text-xs sm:text-sm text-rose-800 dark:text-rose-300">Elite surgical specialization</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6: MBA */}
            <div id="section-6" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-cyan-200 dark:border-cyan-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-cyan-100 dark:bg-cyan-900/30 border border-cyan-300 dark:border-cyan-700 rounded-full text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 6
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-900 dark:text-cyan-100 mb-3 sm:mb-4">MBA in Healthcare/Hospital Administration</h2>
              <div className="space-y-3 text-cyan-900 dark:text-cyan-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Duration: 2 years full-time or 3-4 years part-time</p>
                    <p className="text-xs sm:text-sm text-cyan-800 dark:text-cyan-300">Flexible options for working professionals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Focus: Healthcare management, hospital administration, policy</p>
                    <p className="text-xs sm:text-sm text-cyan-800 dark:text-cyan-300">Business and administrative skills</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Career Path: Hospital director, healthcare consultant, policy maker</p>
                    <p className="text-xs sm:text-sm text-cyan-800 dark:text-cyan-300">Leadership and management roles</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Benefit: Blend clinical knowledge with management expertise</p>
                    <p className="text-xs sm:text-sm text-cyan-800 dark:text-cyan-300">Unique combination of skills</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7: International */}
            <div id="section-7" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-green-200 dark:border-green-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-full text-green-700 dark:text-green-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 7
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 dark:text-green-100 mb-3 sm:mb-4">International Postgraduate Studies</h2>
              <div className="space-y-3 text-green-900 dark:text-green-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">USA: USMLE (United States Medical Licensing Exam)</p>
                    <p className="text-xs sm:text-sm text-green-800 dark:text-green-300">Path to medical practice in United States</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">UK: FRCPS (Royal College of Physicians), FRCS (Surgery)</p>
                    <p className="text-xs sm:text-sm text-green-800 dark:text-green-300">Prestigious UK medical qualifications</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Australia/Canada: RACGP, CCPA, and other certifications</p>
                    <p className="text-xs sm:text-sm text-green-800 dark:text-green-300">Opportunities in developed healthcare systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Benefit: Global career opportunities and international recognition</p>
                    <p className="text-xs sm:text-sm text-green-800 dark:text-green-300">Worldwide medical practice options</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Planning Tips */}
            <div className="mb-12 sm:mb-14 md:mb-16 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 sm:mb-6">Career Planning Tips</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-2">✓ Choose by Interest</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Choose specialization based on your interest, not market demand</p>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-2">✓ Gain Exposure</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Gain clinical exposure during internship year to test interests</p>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-2">✓ Start Early</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Start preparation for entrance exams early for better results</p>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-2">✓ Research Institutes</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Research institutes and mentors thoroughly before applying</p>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-2">✓ Global Opportunities</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Consider international opportunities if interested in global practice</p>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-2">✓ Balance Development</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Balance academics with professional and personal development</p>
                </div>
              </div>
            </div>

            <div className="mt-20 p-10 bg-gradient-to-r from-purple-600/95 to-blue-600/95 dark:from-purple-700 dark:to-blue-700 rounded-2xl border border-purple-400/20 dark:border-purple-500/30 shadow-lg not-prose">
              <div className="flex items-start gap-6">
                <BookOpen className="w-10 h-10 text-white flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white dark:text-slate-50 mb-3">Ready to Plan Your Postgraduate Career?</h3>
                  <p className="text-slate-100 dark:text-slate-300 mb-6 leading-relaxed text-lg">
                    Explore comprehensive postgraduate programs and get personalized guidance for your medical career advancement.
                  </p>
                  <Link to="/top-medical-courses" className="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-gray-100 text-purple-600 font-bold rounded-lg transition shadow-md hover:shadow-lg transform hover:scale-105">
                    Explore Programs →
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
          <p className="text-slate-600 dark:text-slate-400 mb-8 text-sm sm:text-base">Get answers to common questions about postgraduate medical education in India.</p>
          
          <div className="space-y-4 sm:space-y-6">
            {[
              {
                q: "What are the main postgraduate options after MBBS in India?",
                a: "After MBBS, you can pursue MD (Doctorate of Medicine), MS (Master of Surgery), PG Diploma, or super-specialty courses like DM or MCh. Each has different duration and requirements."
              },
              {
                q: "Is NEET-PG mandatory for all postgraduate courses?",
                a: "Yes, NEET-PG is the primary entrance exam for most MD, MS, and PG Diploma programs in India. Some institutions may have their own entrance exams."
              },
              {
                q: "How long is an MD/MS program?",
                a: "MD (Doctorate of Medicine) and MS (Master of Surgery) programs typically last 3 years with mandatory thesis/research component."
              },
              {
                q: "Can I study abroad after MBBS?",
                a: "Yes, many medical graduates pursue postgraduate studies abroad. Popular destinations include USA (USMLE), UK (FRCPS), Canada, and Australia (RACGP)."
              },
              {
                q: "What is a PG Diploma and how is it different from MD?",
                a: "PG Diploma programs are typically 2-3 years long and focus on practical clinical training with less emphasis on research compared to MD programs."
              },
              {
                q: "What are super-specialty courses (DM/MCh)?",
                a: "DM (Doctor of Medicine) and MCh (Master of Chirurgie) are 3-year super-specialty courses pursued after completing MD/MS. They provide advanced specialized knowledge."
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

          <div className="mt-10 sm:mt-12 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border-2 border-indigo-200 dark:border-indigo-800 rounded-lg sm:rounded-xl">
            <h3 className="text-lg sm:text-xl font-bold text-indigo-900 dark:text-indigo-200 mb-2">Still have questions?</h3>
            <p className="text-sm sm:text-base text-indigo-800 dark:text-indigo-300 mb-4">
              Don't hesitate to reach out to our expert counselors who can provide personalized guidance for your postgraduate career pathway.
            </p>
            <Link to="/contact-us" className="inline-flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition text-sm sm:text-base">
              Contact Our Experts →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
