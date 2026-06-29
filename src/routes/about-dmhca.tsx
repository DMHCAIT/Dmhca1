import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Sparkles, ArrowRight, Zap, Stethoscope, BookOpen } from "lucide-react";

export const Route = createFileRoute("/about-dmhca")({
  head: () => ({
    meta: [
      { title: "About DMHCA — Delhi Medical Health Care Academy" },
      { name: "description", content: "Learn about DMHCA's mission to provide transformative healthcare education with advanced courses and expert faculty." },
    ],
  }),
  component: About,
});

function About() {
  const faculty = [
    "Dr Bhuvaneshwari.webp",
    "Dr Nirvana Ibrahim.webp",
    "Dr Pranesh Jain.webp",
    "Dr Rajeev Gupta.webp",
    "Dr. kartikeya.webp",
    "Dr. Mysara.webp",
    "Dr. Prabhdeep Kaur.webp",
  ];

  return (
    <div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0%); } to { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 18s linear infinite; }
      `}</style>

      {/* Small hero for About page */}
      <section className="site-hero py-10 lg:py-14">
        <div className="container-x relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-xs uppercase tracking-[0.15em] text-gold font-medium">Excellence in Medical Education</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight">Transforming Healthcare <span className="text-gold">Education</span></h1>
            <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-6 max-w-2xl mx-auto">Delhi Medical Health Care Academy empowers medical professionals with practical expertise and world-class education.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/top-medical-courses" className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-gold text-navy-deep rounded-lg hover:bg-yellow-400 transition font-semibold text-sm group">Explore Courses <ArrowRight className="w-4 h-4" /></Link>
              <Link to="/contact-us" className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition text-sm">Join Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Content Intro */}
      <section className="bg-white border-b border-border">
        <div className="container-x py-12 lg:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl lg:text-4xl text-navy-deep mb-4">DMHCA — Delhi Medical Health Care Academy</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">DMHCA, also known as the Delhi Medical Health Care Academy, is a prestigious institute that specializes in medical training courses. Our institute is dedicated to equipping students with the knowledge and skills necessary to provide compassionate, understanding, and effective healthcare to those in need.</p>
            <p className="text-base text-muted-foreground leading-relaxed">Our mission at DMHCA is to provide a transformative healthcare education experience. We believe that education is the key to the future and that healthcare is an essential field for the sustenance, maintenance, and existence of human beings. That is why we are committed to providing our trainees with the competence and skills necessary to ensure the well-being of the world's population with knowledge, conviction, and confidence.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 lg:py-16">
        <div className="container-x">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="font-display text-3xl lg:text-4xl text-navy-deep mb-2">How it works?</h2>
            <p className="text-sm text-muted-foreground">Explore courses, enroll, and start learning — three simple steps to upskill.</p>
          </div>

          <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-6 mb-10">
            {[{
              num: '01', title: 'Browse courses', desc: 'Discover curated courses from expert contributors.'
            },{
              num: '02', title: 'Enroll securely', desc: 'Fast, secure checkout with multiple payment options.'
            },{
              num: '03', title: 'Start learning', desc: 'Access materials instantly and follow guided practical modules.'
            }].map((c) => (
              <div key={c.num} className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-white font-semibold">{c.num}</div>
                  <div>
                    <h4 className="font-semibold text-navy-deep">{c.title}</h4>
                    <p className="text-sm text-muted-foreground">{c.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-border shadow-lg">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-display text-3xl text-navy-deep leading-tight mb-3">Start your Learning Journey Today!</h3>
                  <p className="text-base text-muted-foreground mb-6">Join thousands of healthcare professionals who upskill with DMHCA — high-quality courses, practical training, and industry-recognized certifications designed for working clinicians.</p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    {[
                      ['Comprehensive Curriculum','Practical, evidence-based modules.'],
                      ['Flexible Learning','Self-paced and live options.'],
                      ['Global Recognition','Certificates accepted by partners.'],
                      ['Mentorship','Dedicated tutor support.']
                    ].map(([t,s]) => (
                      <div key={t} className="flex items-start gap-3 bg-muted-foreground/3 p-4 rounded-lg">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold flex items-center justify-center text-white">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-navy-deep">{t}</div>
                          <div className="text-sm text-muted-foreground">{s}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <Link to="/top-medical-courses" className="inline-flex items-center gap-2 px-5 py-3 bg-gold text-navy-deep rounded-lg font-semibold shadow">Get Started Free <ArrowRight className="w-4 h-4" /></Link>
                    <Link to="/contact-us" className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm">Contact Admissions</Link>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-full max-w-md rounded-xl overflow-hidden border border-border">
                    <img src="/herocertificatelarge.webp" alt="Students learning" className="w-full h-56 object-cover" />
                    <div className="p-4 bg-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-muted-foreground">Courses available</div>
                          <div className="text-2xl font-semibold text-navy-deep">103+</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">Learners</div>
                          <div className="text-2xl font-semibold text-navy-deep">42,000+</div>
                        </div>
                      </div>
                      <div className="mt-3 text-sm text-muted-foreground">Hands-on modules, expert mentors, and industry-aligned certificates.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Leadership Members */}
      <section className="bg-white py-10 lg:py-12">
        <div className="container-x">
          <div className="max-w-3xl mx-auto text-center mb-6">
            <h2 className="font-display text-2xl lg:text-3xl text-navy-deep mb-1">Academic Leadership Members</h2>
            <p className="text-sm text-muted-foreground">Our faculty and leaders guiding academic excellence</p>
          </div>

          <div className="overflow-hidden">
            <div className="flex animate-marquee gap-6 items-center py-4">
              {faculty.concat(faculty).map((file, idx) => {
                const name = file.replace(/\.[^/.]+$/, "");
                return (
                  <div key={idx} className="flex-shrink-0 w-40 rounded-md overflow-hidden border border-border bg-white/5 shadow-sm">
                    <div className="w-40 h-40 overflow-hidden">
                      <img src={`/Faculty_images/${file}`} alt={name} className="w-full h-full object-cover object-top" />
                    </div>
                    <div className="py-2 text-center bg-white/0">
                      <div className="text-sm text-navy-deep font-medium">{name}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="site-hero py-12 lg:py-16">
        <div className="container-x">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl lg:text-4xl text-white mb-3">Ready to Transform Your Career?</h2>
            <p className="text-sm text-blue-100 mb-6">Join thousands of healthcare professionals who advanced their careers with DMHCA</p>
            <div className="flex gap-4 justify-center">
              <Link to="/contact-us" className="px-5 py-3 bg-gold text-navy-deep rounded-lg">Apply Now</Link>
              <Link to="/top-medical-courses" className="px-5 py-3 bg-white/10 text-white rounded-lg">Browse Courses</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
