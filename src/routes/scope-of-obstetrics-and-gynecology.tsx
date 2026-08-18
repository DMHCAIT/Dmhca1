import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, Clock, Users, Award, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/scope-of-obstetrics-and-gynecology")({
  head: () => ({
    meta: [
      { title: "Scope of Obstetrics and Gynecology: Career Opportunities & Specializations — DMHCA" },
      { name: "description", content: "Explore diverse career opportunities in OB-GYN. Learn about clinical practice, specializations, research, and earning potential in women's health medical specialty." },
    ],
  }),
  component: BlogContent,
});

function BlogContent() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      {/* Hero Section */}
      <section className="site-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-600/95 to-pink-600/95 dark:from-rose-700 dark:to-pink-700"></div>
        <div className="relative container-x py-4 sm:py-6 md:py-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-2 transition text-xs sm:text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
          <div className="max-w-3xl">
            <div className="inline-block px-3 sm:px-4 py-1 bg-rose-500/20 border border-rose-300/50 rounded-full text-rose-200 text-xs font-semibold mb-2">
              Medical Specialty Guide • 2025 Edition
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight tracking-tight">
              Scope of Obstetrics & Gynecology: Career Opportunities & Specializations
            </h1>
            <p className="text-sm sm:text-base text-white/90 max-w-2xl mb-4 leading-relaxed">
              Explore comprehensive career pathways in women's health. Master clinical practice, subspecializations, research, and achieve exceptional earning potential in this dynamic medical specialty.
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
            <img src="/blog-images/Scope-of-Obstetrics-and-Gynecology.webp" alt="Scope of Obstetrics and Gynecology" className="w-full h-auto aspect-[992/496] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 md:py-16 bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm px-4 sm:px-0">
        <div className="container-x max-w-4xl">
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            
            {/* Quick Summary */}
            <div className="mb-8 sm:mb-10 md:mb-12 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 dark:from-rose-900/30 dark:via-pink-900/30 dark:to-fuchsia-900/30 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-rose-200 dark:border-rose-800/50 not-prose">
              <h2 className="text-xl sm:text-2xl font-bold text-rose-900 dark:text-rose-200 mb-4">Career Scope in Obstetrics and Gynecology</h2>
              <p className="text-sm sm:text-base text-rose-800 dark:text-rose-300 mb-6 leading-relaxed">
                Obstetrics and Gynecology is a dynamic and rewarding medical specialty with expanding career opportunities in India and globally. This specialty focuses on women's reproductive health, pregnancy management, and surgical interventions. With increasing awareness and growing healthcare infrastructure, OB-GYN professionals have diverse career pathways.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div className="flex items-start gap-3">
                  <span className="text-rose-600 dark:text-rose-400 text-xl">✓</span>
                  <span className="text-rose-900 dark:text-rose-200">7 major career pathways</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-rose-600 dark:text-rose-400 text-xl">✓</span>
                  <span className="text-rose-900 dark:text-rose-200">Clinical practice opportunities</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-rose-600 dark:text-rose-400 text-xl">✓</span>
                  <span className="text-rose-900 dark:text-rose-200">Specialization options</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-rose-600 dark:text-rose-400 text-xl">✓</span>
                  <span className="text-rose-900 dark:text-rose-200">Excellent earning potential</span>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="mb-12 sm:mb-14 md:mb-16 p-4 sm:p-6 md:p-8 bg-slate-100 dark:bg-slate-700/50 rounded-lg sm:rounded-xl md:rounded-2xl border border-slate-200 dark:border-slate-600 not-prose">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 sm:mb-6">Table of Contents</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {[
                  { num: 1, title: "Clinical Practice" },
                  { num: 2, title: "Hospital & Academic" },
                  { num: 3, title: "Private Practice" },
                  { num: 4, title: "Specializations" },
                  { num: 5, title: "Research & Academics" },
                  { num: 6, title: "Global Opportunities" },
                  { num: 7, title: "Emerging Areas" },
                ].map((item) => (
                  <a
                    key={item.num}
                    href={`#section-${item.num}`}
                    className="p-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/20 transition group"
                  >
                    <div className="flex items-start gap-2 sm:gap-3">
                      <span className="inline-block px-2 sm:px-2.5 py-1 bg-rose-600 text-white text-xs font-bold rounded flex-shrink-0">
                        {item.num}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-rose-600 dark:group-hover:text-rose-400 line-clamp-2">
                        {item.title}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Section 1: Clinical Practice */}
            <div id="section-1" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-rose-200 dark:border-rose-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-rose-100 dark:bg-rose-900/30 border border-rose-300 dark:border-rose-700 rounded-full text-rose-700 dark:text-rose-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 1
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-900 dark:text-rose-100 mb-3 sm:mb-4">Clinical Practice Opportunities</h2>
              <div className="space-y-3 text-rose-900 dark:text-rose-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-rose-600 dark:text-rose-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Hospital Positions</p>
                    <p className="text-xs sm:text-sm text-rose-800 dark:text-rose-300">Work as consultant obstetrician-gynecologist in government and private hospitals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-rose-600 dark:text-rose-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Patient Care Responsibilities</p>
                    <p className="text-xs sm:text-sm text-rose-800 dark:text-rose-300">Manage obstetric cases, conduct deliveries, provide antenatal/postnatal care</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-rose-600 dark:text-rose-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Emergency Care</p>
                    <p className="text-xs sm:text-sm text-rose-800 dark:text-rose-300">Handle gynecological emergencies, hysterectomies, and ectopic pregnancies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-rose-600 dark:text-rose-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Community Outreach</p>
                    <p className="text-xs sm:text-sm text-rose-800 dark:text-rose-300">Provide family planning services, counseling, and community health programs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Hospital & Academic */}
            <div id="section-2" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-fuchsia-50 to-pink-50 dark:from-fuchsia-900/20 dark:to-pink-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-fuchsia-200 dark:border-fuchsia-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-fuchsia-100 dark:bg-fuchsia-900/30 border border-fuchsia-300 dark:border-fuchsia-700 rounded-full text-fuchsia-700 dark:text-fuchsia-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 2
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-fuchsia-900 dark:text-fuchsia-100 mb-3 sm:mb-4">Hospital and Academic Positions</h2>
              <div className="space-y-3 text-fuchsia-900 dark:text-fuchsia-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-fuchsia-600 dark:text-fuchsia-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Medical College Faculty</p>
                    <p className="text-xs sm:text-sm text-fuchsia-800 dark:text-fuchsia-300">Secure positions in medical colleges teaching undergraduate and postgraduate students</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-fuchsia-600 dark:text-fuchsia-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Department Leadership</p>
                    <p className="text-xs sm:text-sm text-fuchsia-800 dark:text-fuchsia-300">Lead hospital departments and manage clinical teams in tertiary care centers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-fuchsia-600 dark:text-fuchsia-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Clinical Education</p>
                    <p className="text-xs sm:text-sm text-fuchsia-800 dark:text-fuchsia-300">Conduct ward rounds, seminars, and clinical case discussions for medical education</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-fuchsia-600 dark:text-fuchsia-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Academic Activities</p>
                    <p className="text-xs sm:text-sm text-fuchsia-800 dark:text-fuchsia-300">Engage in examinations, curriculum development, and quality assurance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Private Practice */}
            <div id="section-3" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-pink-200 dark:border-pink-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-pink-100 dark:bg-pink-900/30 border border-pink-300 dark:border-pink-700 rounded-full text-pink-700 dark:text-pink-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 3
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-900 dark:text-pink-100 mb-3 sm:mb-4">Private Practice and Entrepreneurship</h2>
              <div className="space-y-3 text-pink-900 dark:text-pink-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-pink-600 dark:text-pink-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Nursing Home Establishment</p>
                    <p className="text-xs sm:text-sm text-pink-800 dark:text-pink-300">Establish independent nursing homes and diagnostic centers specializing in women's health</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-600 dark:text-pink-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Profitable Services</p>
                    <p className="text-xs sm:text-sm text-pink-800 dark:text-pink-300">Build profitable practice through consultation fees, surgical procedures, and imaging</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-600 dark:text-pink-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Specialized Services</p>
                    <p className="text-xs sm:text-sm text-pink-800 dark:text-pink-300">Offer infertility treatment, ultrasound imaging, and cosmetic gynecology</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-600 dark:text-pink-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Financial Independence</p>
                    <p className="text-xs sm:text-sm text-pink-800 dark:text-pink-300">Achieve financial independence and flexibility in working hours through private enterprise</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Specializations */}
            <div id="section-4" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-red-200 dark:border-red-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-full text-red-700 dark:text-red-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 4
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-900 dark:text-red-100 mb-3 sm:mb-4">Specialization and Sub-specialty Options</h2>
              <div className="space-y-3 text-red-900 dark:text-red-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Reproductive Medicine and Infertility</p>
                    <p className="text-xs sm:text-sm text-red-800 dark:text-red-300">Pursue fellowship for IVF center practice and fertility treatment expertise</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Uro-gynecology</p>
                    <p className="text-xs sm:text-sm text-red-800 dark:text-red-300">Specialize in treating pelvic floor disorders and urinary incontinence</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Maternal-Fetal Medicine</p>
                    <p className="text-xs sm:text-sm text-red-800 dark:text-red-300">Focus on managing high-risk pregnancies and fetal complications</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Gynecological Oncology</p>
                    <p className="text-xs sm:text-sm text-red-800 dark:text-red-300">Develop expertise in cancer management and specialized surgical care</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: Research & Academics */}
            <div id="section-5" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-900/20 dark:to-fuchsia-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-purple-200 dark:border-purple-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-purple-100 dark:bg-purple-900/30 border border-purple-300 dark:border-purple-700 rounded-full text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 5
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-900 dark:text-purple-100 mb-3 sm:mb-4">Research and Academic Excellence</h2>
              <div className="space-y-3 text-purple-900 dark:text-purple-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Women's Health Research</p>
                    <p className="text-xs sm:text-sm text-purple-800 dark:text-purple-300">Conduct research on women's health topics and contribute to medical literature</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Clinical Trials</p>
                    <p className="text-xs sm:text-sm text-purple-800 dark:text-purple-300">Participate in clinical trials and contribute to evidence-based medical practice</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Academic Publications</p>
                    <p className="text-xs sm:text-sm text-purple-800 dark:text-purple-300">Publish research papers in national and international medical journals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Expert Recognition</p>
                    <p className="text-xs sm:text-sm text-purple-800 dark:text-purple-300">Build reputation as expert in specific areas and gain academic community recognition</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6: Global Opportunities */}
            <div id="section-6" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-orange-200 dark:border-orange-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-orange-100 dark:bg-orange-900/30 border border-orange-300 dark:border-orange-700 rounded-full text-orange-700 dark:text-orange-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 6
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-900 dark:text-orange-100 mb-3 sm:mb-4">Global Career Opportunities</h2>
              <div className="space-y-3 text-orange-900 dark:text-orange-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 dark:text-orange-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Developed Countries Practice</p>
                    <p className="text-xs sm:text-sm text-orange-800 dark:text-orange-300">Practice in USA, Canada, Australia through licensing and equivalency exams</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 dark:text-orange-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Middle Eastern Opportunities</p>
                    <p className="text-xs sm:text-sm text-orange-800 dark:text-orange-300">Work in Middle Eastern countries offering lucrative salaries and modern facilities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 dark:text-orange-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">International Fellowships</p>
                    <p className="text-xs sm:text-sm text-orange-800 dark:text-orange-300">Pursue fellowship training in other countries for international exposure and skills</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 dark:text-orange-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Global Network</p>
                    <p className="text-xs sm:text-sm text-orange-800 dark:text-orange-300">Build international career network and access to conferences and learning opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7: Emerging Areas */}
            <div id="section-7" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-900/20 dark:to-red-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-rose-200 dark:border-rose-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-rose-100 dark:bg-rose-900/30 border border-rose-300 dark:border-rose-700 rounded-full text-rose-700 dark:text-rose-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 7
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-900 dark:text-rose-100 mb-3 sm:mb-4">Emerging Areas in Women's Health</h2>
              <div className="space-y-3 text-rose-900 dark:text-rose-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-rose-600 dark:text-rose-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Maternal Health Focus</p>
                    <p className="text-xs sm:text-sm text-rose-800 dark:text-rose-300">Focus on maternal health and reducing maternal mortality in underserved areas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-rose-600 dark:text-rose-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Minimally Invasive Surgery</p>
                    <p className="text-xs sm:text-sm text-rose-800 dark:text-rose-300">Practice advanced laparoscopy and hysteroscopy procedures for better patient outcomes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-rose-600 dark:text-rose-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Reproductive Health Education</p>
                    <p className="text-xs sm:text-sm text-rose-800 dark:text-rose-300">Work in reproductive health awareness and family planning education programs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-rose-600 dark:text-rose-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Telemedicine Initiatives</p>
                    <p className="text-xs sm:text-sm text-rose-800 dark:text-rose-300">Engage in telemedicine and digital health for remote women's health consultations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Timeline */}
            <div className="mb-12 sm:mb-14 md:mb-16 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 sm:mb-6">Career Timeline</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="p-4 bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30 border border-rose-200 dark:border-rose-700 rounded-lg">
                  <p className="text-xs sm:text-sm text-rose-700 dark:text-rose-300 font-semibold mb-1">12 to MBBS</p>
                  <p className="text-2xl sm:text-3xl font-bold text-rose-900 dark:text-rose-100">4.5 years</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-fuchsia-100 to-pink-100 dark:from-fuchsia-900/30 dark:to-pink-900/30 border border-fuchsia-200 dark:border-fuchsia-700 rounded-lg">
                  <p className="text-xs sm:text-sm text-fuchsia-700 dark:text-fuchsia-300 font-semibold mb-1">MBBS to MD OB-GYN</p>
                  <p className="text-2xl sm:text-3xl font-bold text-fuchsia-900 dark:text-fuchsia-100">3 years</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-100 to-fuchsia-100 dark:from-purple-900/30 dark:to-fuchsia-900/30 border border-purple-200 dark:border-purple-700 rounded-lg">
                  <p className="text-xs sm:text-sm text-purple-700 dark:text-purple-300 font-semibold mb-1">Total Duration</p>
                  <p className="text-2xl sm:text-3xl font-bold text-purple-900 dark:text-purple-100">7.5+ years</p>
                </div>
              </div>
            </div>

            {/* Key Tips Section */}
            <div className="mb-12 sm:mb-14 md:mb-16 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 sm:mb-6">Key Tips for Success</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-2">✓ Clinical Skills</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Develop strong clinical skills and surgical proficiency</p>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-2">✓ Communication</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Build excellent patient communication and counseling skills</p>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-2">✓ Clinical Exposure</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Gain exposure to diverse clinical cases during MBBS</p>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-2">✓ Keep Updated</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Stay updated with latest obstetric and gynecologic practices</p>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-2">✓ Research Interest</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Develop interest in research and evidence-based practice</p>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-2">✓ Mentorship</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Network with established gynecologists and mentors</p>
                </div>
              </div>
            </div>

            <div className="mt-20 p-10 bg-gradient-to-r from-rose-600/95 to-pink-600/95 dark:from-rose-700 dark:to-pink-700 rounded-2xl border border-rose-400/20 dark:border-rose-500/30 shadow-lg not-prose">
              <div className="flex items-start gap-6">
                <BookOpen className="w-10 h-10 text-white flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white dark:text-slate-50 mb-3">Ready to Pursue OB-GYN?</h3>
                  <p className="text-slate-100 dark:text-slate-300 mb-6 leading-relaxed text-lg">
                    Explore comprehensive OB-GYN programs and get expert guidance for your women's health specialty career.
                  </p>
                  <Link to="/top-medical-courses" className="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-gray-100 text-rose-600 font-bold rounded-lg transition shadow-md hover:shadow-lg transform hover:scale-105">
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
          <p className="text-slate-600 dark:text-slate-400 mb-8 text-sm sm:text-base">Get answers to common questions about OB-GYN career opportunities.</p>
          
          <div className="space-y-4 sm:space-y-6">
            {[
              {
                q: "What is the scope of Obstetrics and Gynecology in India?",
                a: "OB-GYN offers extensive career opportunities in India with growing private practice potential, hospital positions, teaching roles, and specialized areas like reproductive medicine. Demand is increasing with improving healthcare access and women's health awareness."
              },
              {
                q: "What are the employment opportunities for gynecologists?",
                a: "Opportunities include government hospitals, private nursing homes, corporate hospitals, independent clinics, academic positions in medical colleges, reproductive medicine centers, NGOs focusing on women's health, and international opportunities."
              },
              {
                q: "Is there scope for specialization within OB-GYN?",
                a: "Yes, multiple sub-specializations exist like Maternal-Fetal Medicine, Reproductive Medicine and Infertility, Uro-gynecology, Gynecological Oncology, and Minimally Invasive Surgery. These enhance career prospects and earning potential."
              },
              {
                q: "What is the earning potential for gynecologists in India?",
                a: "Government doctors earn through salary and practice allowances. Private practitioners earn significantly more through consultation fees and procedures. Top specialists earn 15-30 lakhs annually, with some earning even higher."
              },
              {
                q: "Are there international career prospects in OB-GYN?",
                a: "Yes, Indian gynecologists can pursue careers abroad in USA, Canada, Australia, and Middle East. They need to qualify relevant licensing exams (USMLE for USA, PLAB for UK) and complete local medical equivalency training."
              },
              {
                q: "What skills are essential for success in OB-GYN?",
                a: "Essential skills include strong clinical examination abilities, excellent communication and empathy, surgical and procedural proficiency, decision-making in emergencies, leadership qualities, and continuous learning mindset."
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

          <div className="mt-10 sm:mt-12 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 border-2 border-rose-200 dark:border-rose-800 rounded-lg sm:rounded-xl">
            <h3 className="text-lg sm:text-xl font-bold text-rose-900 dark:text-rose-200 mb-2">Need Expert Guidance?</h3>
            <p className="text-sm sm:text-base text-rose-800 dark:text-rose-300 mb-4">
              Our OB-GYN experts can help you navigate your specialty career path and make informed decisions.
            </p>
            <Link to="/contact-us" className="inline-flex items-center gap-2 px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-lg transition text-sm sm:text-base">
              Contact Our Experts →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
