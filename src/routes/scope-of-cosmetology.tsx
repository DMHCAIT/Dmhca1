import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, Clock, Users, Award, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/scope-of-cosmetology")({
  head: () => ({
    meta: [
      { title: "Scope of Cosmetology in India — DMHCA" },
      {
        name: "description",
        content: "Comprehensive guide to career opportunities and growth in cosmetology field.",
      },
    ],
  }),
  component: BlogContent,
});

function BlogContent() {
  return (
    <div className="home-page resource-page resource-article min-h-screen">
      {/* Hero Section */}
      <section className="resource-hero relative overflow-hidden">
        <div className="relative container-x py-4 sm:py-6 md:py-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-2 transition text-xs sm:text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
          <div className="max-w-3xl">
            <div className="inline-block px-3 sm:px-4 py-1 bg-[#800020]/20 border border-[#f7cbd7]/50 rounded-full text-[#f7cbd7] text-xs font-semibold mb-2">
              Medical Career Guide • 2025 Edition
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight tracking-tight">
              Scope of Cosmetology: Career Opportunities & Specializations
            </h1>
            <p className="text-sm sm:text-base text-white/90 max-w-2xl mb-4 leading-relaxed">
              Explore the booming aesthetic medicine field. Master cosmetic procedures, advanced
              technologies, and build a thriving practice with excellent earning potential.
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
                <div className="font-bold text-sm sm:text-lg">20%+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-4 sm:py-6 md:py-8 bg-white px-4 sm:px-0">
        <div className="container-x flex justify-center">
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl w-full max-w-[992px]">
            <img
              src="/blog-images/Scope-of-Cosmetology.webp"
              alt="Scope of Cosmetology"
              className="w-full h-auto aspect-[992/496] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 md:py-16 bg-white/50 backdrop-blur-sm px-4 sm:px-0">
        <div className="container-x max-w-4xl">
          <div className="prose prose-lg prose-slate max-w-none">
            {/* Quick Summary */}
            <div className="mb-8 sm:mb-10 md:mb-12 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#f7cbd7]/25 via-[#f7cbd7]/25 to-[#f7cbd7]/25 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-[#f7cbd7] not-prose">
              <h2 className="text-xl sm:text-2xl font-bold text-[#800020] mb-4">
                Career Scope in Cosmetology
              </h2>
              <p className="text-sm sm:text-base text-[#800020] mb-6 leading-relaxed">
                Cosmetic dermatology is one of the fastest-growing specialties with immense scope in
                India and globally. The rising awareness about aesthetics and self-care creates
                tremendous opportunities for qualified cosmetologists with excellent earning
                potential.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] text-xl">✓</span>
                  <span className="text-[#800020]">7 major career pathways</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] text-xl">✓</span>
                  <span className="text-[#800020]">Advanced aesthetic procedures</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] text-xl">✓</span>
                  <span className="text-[#800020]">Entrepreneurship opportunities</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] text-xl">✓</span>
                  <span className="text-[#800020]">Highest earning potential</span>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="mb-12 sm:mb-14 md:mb-16 p-4 sm:p-6 md:p-8 bg-[#f8f9fc] rounded-lg sm:rounded-xl md:rounded-2xl border border-[#29334a]/15 not-prose">
              <h3 className="text-lg sm:text-xl font-bold text-[#29334a] mb-4 sm:mb-6">
                Table of Contents
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {[
                  { num: 1, title: "Cosmetic Procedures" },
                  { num: 2, title: "Specializations" },
                  { num: 3, title: "Advanced Technologies" },
                  { num: 4, title: "Private Practice" },
                  { num: 5, title: "Earning Potential" },
                  { num: 6, title: "Entrepreneurship" },
                  { num: 7, title: "Future Growth" },
                ].map((item) => (
                  <a
                    key={item.num}
                    href={`#section-${item.num}`}
                    className="p-3 bg-white border border-[#29334a]/15 rounded-lg hover:bg-[#f7cbd7]/25 transition group"
                  >
                    <div className="flex items-start gap-2 sm:gap-3">
                      <span className="inline-block px-2 sm:px-2.5 py-1 bg-[#800020] text-white text-xs font-bold rounded flex-shrink-0">
                        {item.num}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-[#29334a] group-hover:text-[#800020] line-clamp-2">
                        {item.title}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Section 1: Cosmetic Procedures */}
            <div
              id="section-1"
              className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#f7cbd7]/25 to-[#f7cbd7]/25 rounded-lg sm:rounded-xl md:rounded-2xl border border-[#f7cbd7] not-prose"
            >
              <div className="inline-block px-3 sm:px-4 py-1 bg-[#f7cbd7]/25 border border-[#f7cbd7] rounded-full text-[#800020] text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 1
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#800020] mb-3 sm:mb-4">
                Cosmetic Procedures & Treatments
              </h2>
              <div className="space-y-3 text-[#800020] text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">→</span>
                  <div>
                    <p className="font-semibold">Botox and Facial Rejuvenation</p>
                    <p className="text-xs sm:text-sm text-[#800020]">
                      Highly sought-after anti-aging treatments with strong patient demand
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">→</span>
                  <div>
                    <p className="font-semibold">Dermal Fillers & Volume Restoration</p>
                    <p className="text-xs sm:text-sm text-[#800020]">
                      Facial contouring and age reversal procedures with excellent results
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">→</span>
                  <div>
                    <p className="font-semibold">Laser Treatments & Skin Resurfacing</p>
                    <p className="text-xs sm:text-sm text-[#800020]">
                      Advanced laser technology for acne, scars, and skin rejuvenation
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">→</span>
                  <div>
                    <p className="font-semibold">Chemical Peels & Microneedling</p>
                    <p className="text-xs sm:text-sm text-[#800020]">
                      Non-invasive procedures for skin texture improvement and collagen induction
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Specializations */}
            <div
              id="section-2"
              className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#f7cbd7]/25 to-[#f7cbd7]/25 rounded-lg sm:rounded-xl md:rounded-2xl border border-[#f7cbd7] not-prose"
            >
              <div className="inline-block px-3 sm:px-4 py-1 bg-[#f7cbd7]/25 border border-[#f7cbd7] rounded-full text-[#800020] text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 2
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#800020] mb-3 sm:mb-4">
                Specialization Areas
              </h2>
              <div className="space-y-3 text-[#800020] text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">→</span>
                  <div>
                    <p className="font-semibold">Anti-aging Specialist</p>
                    <p className="text-xs sm:text-sm text-[#800020]">
                      Facial rejuvenation and preventive aging strategies for mature clients
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">→</span>
                  <div>
                    <p className="font-semibold">Body Contouring Specialist</p>
                    <p className="text-xs sm:text-sm text-[#800020]">
                      Liposuction, fat reduction, and body shaping procedures
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">→</span>
                  <div>
                    <p className="font-semibold">Hair Restoration Expert</p>
                    <p className="text-xs sm:text-sm text-[#800020]">
                      Hair loss treatment and restoration using advanced techniques
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">→</span>
                  <div>
                    <p className="font-semibold">Pigmentation & Scar Management</p>
                    <p className="text-xs sm:text-sm text-[#800020]">
                      Treating melanosis, vitiligo, and scar revision with modern technology
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Advanced Technologies */}
            <div
              id="section-3"
              className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#f7cbd7]/25 to-[#f7cbd7]/25 rounded-lg sm:rounded-xl md:rounded-2xl border border-[#f7cbd7] not-prose"
            >
              <div className="inline-block px-3 sm:px-4 py-1 bg-[#f7cbd7]/25 border border-[#f7cbd7] rounded-full text-[#800020] text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 3
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#800020] mb-3 sm:mb-4">
                Advanced Technologies & Equipment
              </h2>
              <div className="space-y-3 text-[#800020] text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">→</span>
                  <div>
                    <p className="font-semibold">Laser Systems</p>
                    <p className="text-xs sm:text-sm text-[#800020]">
                      Advanced laser technology for skin rejuvenation, hair removal, and resurfacing
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">→</span>
                  <div>
                    <p className="font-semibold">Radiofrequency & Ultrasound</p>
                    <p className="text-xs sm:text-sm text-[#800020]">
                      Non-invasive skin tightening and collagen stimulation technology
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">→</span>
                  <div>
                    <p className="font-semibold">PRP and Stem Cell Therapy</p>
                    <p className="text-xs sm:text-sm text-[#800020]">
                      Regenerative medicine applications for skin and hair restoration
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">→</span>
                  <div>
                    <p className="font-semibold">AI-Powered Analysis</p>
                    <p className="text-xs sm:text-sm text-[#800020]">
                      Artificial intelligence for skin analysis and personalized treatment planning
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Private Practice */}
            <div
              id="section-4"
              className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#f7cbd7]/25 to-[#f7cbd7]/25 rounded-lg sm:rounded-xl md:rounded-2xl border border-[#f7cbd7] not-prose"
            >
              <div className="inline-block px-3 sm:px-4 py-1 bg-[#f7cbd7]/25 border border-[#f7cbd7] rounded-full text-[#800020] text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 4
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#800020] mb-3 sm:mb-4">
                Private Practice & Clinical Settings
              </h2>
              <div className="space-y-3 text-[#800020] text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">→</span>
                  <div>
                    <p className="font-semibold">Aesthetic Clinic Establishment</p>
                    <p className="text-xs sm:text-sm text-[#800020]">
                      Start your own standalone aesthetic clinic with modern facilities
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">→</span>
                  <div>
                    <p className="font-semibold">Dermatology Clinics</p>
                    <p className="text-xs sm:text-sm text-[#800020]">
                      Work in established dermatology centers with specialized departments
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">→</span>
                  <div>
                    <p className="font-semibold">Medical Spas & Wellness Centers</p>
                    <p className="text-xs sm:text-sm text-[#800020]">
                      Combine medical expertise with spa services for holistic beauty
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">→</span>
                  <div>
                    <p className="font-semibold">Franchise & Chain Models</p>
                    <p className="text-xs sm:text-sm text-[#800020]">
                      Build multiple centers and chain clinics for scalable growth
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: Earning Potential */}
            <div
              id="section-5"
              className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#f7cbd7]/25 to-[#f7cbd7]/25 rounded-lg sm:rounded-xl md:rounded-2xl border border-[#f7cbd7] not-prose"
            >
              <div className="inline-block px-3 sm:px-4 py-1 bg-[#f7cbd7]/25 border border-[#f7cbd7] rounded-full text-[#800020] text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 5
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#800020] mb-3 sm:mb-4">
                Earning Potential & Income Streams
              </h2>
              <div className="space-y-3 text-[#800020] text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">→</span>
                  <div>
                    <p className="font-semibold">Hospital-Based Practice: 12-25 Lakhs</p>
                    <p className="text-xs sm:text-sm text-[#800020]">
                      Annual salary in government and private hospitals
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">→</span>
                  <div>
                    <p className="font-semibold">Established Practice: 25-50 Lakhs</p>
                    <p className="text-xs sm:text-sm text-[#800020]">
                      Income from consultation fees and procedures
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">→</span>
                  <div>
                    <p className="font-semibold">Premium Aesthetic Clinic: 50-100+ Lakhs</p>
                    <p className="text-xs sm:text-sm text-[#800020]">
                      High-end cosmetic procedures and exclusive clientele
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">→</span>
                  <div>
                    <p className="font-semibold">International Opportunities: 80+ Lakhs</p>
                    <p className="text-xs sm:text-sm text-[#800020]">
                      Practice in developed countries with higher compensation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6: Entrepreneurship */}
            <div
              id="section-6"
              className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#f7cbd7]/25 to-[#f7cbd7]/25 rounded-lg sm:rounded-xl md:rounded-2xl border border-[#f7cbd7] not-prose"
            >
              <div className="inline-block px-3 sm:px-4 py-1 bg-[#f7cbd7]/25 border border-[#f7cbd7] rounded-full text-[#800020] text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 6
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#800020] mb-3 sm:mb-4">
                Entrepreneurship & Business Opportunities
              </h2>
              <div className="space-y-3 text-[#800020] text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">→</span>
                  <div>
                    <p className="font-semibold">Start Your Own Aesthetic Clinic</p>
                    <p className="text-xs sm:text-sm text-[#800020]">
                      Establish independent aesthetic centers with high return on investment
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">→</span>
                  <div>
                    <p className="font-semibold">Cosmetic Product Development</p>
                    <p className="text-xs sm:text-sm text-[#800020]">
                      Create and market skincare and cosmetic product lines
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">→</span>
                  <div>
                    <p className="font-semibold">Training & Workshop Conduction</p>
                    <p className="text-xs sm:text-sm text-[#800020]">
                      Teach other professionals and conduct specialized training programs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">→</span>
                  <div>
                    <p className="font-semibold">Medical Tourism & Corporate Services</p>
                    <p className="text-xs sm:text-sm text-[#800020]">
                      Serve international patients and corporate wellness programs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7: Future Growth */}
            <div
              id="section-7"
              className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#f7cbd7]/25 to-[#f7cbd7]/25 rounded-lg sm:rounded-xl md:rounded-2xl border border-[#f7cbd7] not-prose"
            >
              <div className="inline-block px-3 sm:px-4 py-1 bg-[#f7cbd7]/25 border border-[#f7cbd7] rounded-full text-[#800020] text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 7
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#800020] mb-3 sm:mb-4">
                Future Trends & Global Market Demand
              </h2>
              <div className="space-y-3 text-[#800020] text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">→</span>
                  <div>
                    <p className="font-semibold">Booming Global Market</p>
                    <p className="text-xs sm:text-sm text-[#800020]">
                      Cosmetology growing at 20%+ annually worldwide with increasing demand
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">→</span>
                  <div>
                    <p className="font-semibold">Medical Tourism in India</p>
                    <p className="text-xs sm:text-sm text-[#800020]">
                      International patients seeking affordable cosmetic procedures in India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">→</span>
                  <div>
                    <p className="font-semibold">Emerging Technologies</p>
                    <p className="text-xs sm:text-sm text-[#800020]">
                      AI analysis, sustainable treatments, and personalized protocols evolving
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">→</span>
                  <div>
                    <p className="font-semibold">Telehealth & Digital Platforms</p>
                    <p className="text-xs sm:text-sm text-[#800020]">
                      Online consultations and digital treatment planning gaining popularity
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Timeline */}
            <div className="mb-12 sm:mb-14 md:mb-16 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#29334a] mb-4 sm:mb-6">
                Career Timeline
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="p-4 bg-gradient-to-br from-[#f7cbd7]/25 to-[#f7cbd7]/25 border border-[#f7cbd7] rounded-lg">
                  <p className="text-xs sm:text-sm text-[#800020] font-semibold mb-1">12 to MBBS</p>
                  <p className="text-2xl sm:text-3xl font-bold text-[#800020]">4.5 years</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-[#f7cbd7]/25 to-[#f7cbd7]/25 border border-[#f7cbd7] rounded-lg">
                  <p className="text-xs sm:text-sm text-[#800020] font-semibold mb-1">
                    MD Dermatology
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-[#800020]">3 years</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-[#f7cbd7]/25 to-[#f7cbd7]/25 border border-[#f7cbd7] rounded-lg">
                  <p className="text-xs sm:text-sm text-[#800020] font-semibold mb-1">
                    Total Duration
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-[#800020]">7.5+ years</p>
                </div>
              </div>
            </div>

            {/* Key Tips Section */}
            <div className="mb-12 sm:mb-14 md:mb-16 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#29334a] mb-4 sm:mb-6">
                Key Tips for Success in Cosmetology
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-4 bg-[#f7cbd7]/25 border border-[#f7cbd7] rounded-lg">
                  <p className="font-bold text-[#29334a] text-sm sm:text-base mb-2">
                    ✓ Aesthetic Sense
                  </p>
                  <p className="text-xs sm:text-sm text-[#6b5b68]">
                    Develop strong artistic skills and aesthetic judgment
                  </p>
                </div>
                <div className="p-4 bg-[#f7cbd7]/25 border border-[#f7cbd7] rounded-lg">
                  <p className="font-bold text-[#29334a] text-sm sm:text-base mb-2">
                    ✓ Technology Mastery
                  </p>
                  <p className="text-xs sm:text-sm text-[#6b5b68]">
                    Master latest aesthetic technologies and equipment
                  </p>
                </div>
                <div className="p-4 bg-[#f7cbd7]/25 border border-[#f7cbd7] rounded-lg">
                  <p className="font-bold text-[#29334a] text-sm sm:text-base mb-2">
                    ✓ Patient Communication
                  </p>
                  <p className="text-xs sm:text-sm text-[#6b5b68]">
                    Build excellent counseling and consultation skills
                  </p>
                </div>
                <div className="p-4 bg-[#f7cbd7]/25 border border-[#f7cbd7] rounded-lg">
                  <p className="font-bold text-[#29334a] text-sm sm:text-base mb-2">
                    ✓ Stay Updated
                  </p>
                  <p className="text-xs sm:text-sm text-[#6b5b68]">
                    Keep pace with international aesthetic trends and innovation
                  </p>
                </div>
                <div className="p-4 bg-[#f7cbd7]/25 border border-[#f7cbd7] rounded-lg">
                  <p className="font-bold text-[#29334a] text-sm sm:text-base mb-2">
                    ✓ Safety First
                  </p>
                  <p className="text-xs sm:text-sm text-[#6b5b68]">
                    Focus on patient safety and ethical practices always
                  </p>
                </div>
                <div className="p-4 bg-[#f7cbd7]/25 border border-[#f7cbd7] rounded-lg">
                  <p className="font-bold text-[#29334a] text-sm sm:text-base mb-2">
                    ✓ Business Acumen
                  </p>
                  <p className="text-xs sm:text-sm text-[#6b5b68]">
                    Develop business skills for entrepreneurial ventures
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-20 p-10 bg-gradient-to-r from-[#800020]/95 to-[#800020]/95 rounded-2xl border border-[#800020]/20 shadow-lg not-prose">
              <div className="flex items-start gap-6">
                <BookOpen className="w-10 h-10 text-white flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Ready to Pursue Cosmetology?
                  </h3>
                  <p className="text-[#f8f9fc] mb-6 leading-relaxed text-lg">
                    Explore comprehensive cosmetic dermatology programs and build a thriving
                    aesthetic medicine career.
                  </p>
                  <Link
                    to="/top-medical-courses"
                    className="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-[#f8f9fc] text-[#800020] font-bold rounded-lg transition shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    Explore Programs →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white px-4 sm:px-0">
        <div className="container-x max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#29334a] mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#6b5b68] mb-8 text-sm sm:text-base">
            Get answers to common questions about cosmetology career opportunities.
          </p>

          <div className="space-y-4 sm:space-y-6">
            {[
              {
                q: "What is the scope of cosmetology in India?",
                a: "Cosmetology has excellent scope in India with growing demand for aesthetic procedures. Cosmetologists can work in dermatology clinics, aesthetic centers, spas, corporate hospitals, and private practice with strong earning potential.",
              },
              {
                q: "What procedures can cosmetologists perform?",
                a: "Common procedures include Botox injections, dermal fillers, laser treatments, chemical peels, microneedling, PRP therapy, thread lifts, skin resurfacing, hair restoration, and body contouring procedures.",
              },
              {
                q: "What is the earning potential for cosmetologists?",
                a: "Hospital-based cosmetologists earn 12-25 lakhs annually, while private practitioners typically earn 25-50+ lakhs annually. With established clinics and high-end procedures, income can exceed 60+ lakhs annually.",
              },
              {
                q: "Is cosmetology a rewarding specialty?",
                a: "Yes, cosmetology is highly rewarding both financially and professionally. It combines medical knowledge with aesthetic skills, offers flexibility, and provides immediate patient satisfaction through visible results.",
              },
              {
                q: "What skills are required for success in cosmetology?",
                a: "Essential skills include strong dermatological knowledge, artistic sense, procedural precision, excellent patient communication, business acumen, continuous learning about new technologies, and dedication to patient satisfaction and safety.",
              },
              {
                q: "What are the career opportunities after MD in Dermatology?",
                a: "Cosmetologists can establish aesthetic clinics, work in dermatology centers, perform advanced procedures, conduct workshops, engage in research, teach in medical colleges, offer telemedicine consultations, and expand internationally.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-6 bg-gradient-to-br from-[#f8f9fc] to-[#f8f9fc] border border-[#29334a]/15 rounded-lg sm:rounded-xl hover:shadow-md transition"
              >
                <details className="group">
                  <summary className="flex items-start justify-between cursor-pointer font-semibold text-[#29334a] text-sm sm:text-base">
                    <span className="flex-1 text-left pr-4">{faq.q}</span>
                    <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-[#6b5b68] group-open:rotate-180 transition-transform">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-[#29334a] mt-3 text-xs sm:text-sm leading-relaxed">{faq.a}</p>
                </details>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#f7cbd7]/25 to-[#f7cbd7]/25 border-2 border-[#f7cbd7] rounded-lg sm:rounded-xl">
            <h3 className="text-lg sm:text-xl font-bold text-[#800020] mb-2">
              Still have questions?
            </h3>
            <p className="text-sm sm:text-base text-[#800020] mb-4">
              Don't hesitate to reach out to our expert counselors who can provide personalized
              guidance for your cosmetology specialization career journey.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#800020] hover:bg-[#68001e] text-white font-semibold rounded-lg transition text-sm sm:text-base"
            >
              Contact Our Experts →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
