import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Users, Globe, BookOpen, Award, Zap, Heart, Target, Sparkles, ArrowRight, Stethoscope } from "lucide-react";

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

      {/* Stats */}
      <section className="bg-white border-b border-border">
        <div className="container-x py-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, stat: "42,000+", label: "Students Trained" },
              { icon: Globe, stat: "120+", label: "Countries" },
              { icon: Award, stat: "60+", label: "Expert Faculty" },
              { icon: BookOpen, stat: "103+", label: "Courses" },
            ].map(({ icon: Icon, stat, label }) => (
              <div key={label} className="text-center p-4 rounded-lg">
                <div className="flex justify-center mb-3">
                  <div className="p-2 bg-gradient-to-br from-gold/10 to-gold/5 rounded-lg">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                </div>
                <div className="font-display text-2xl text-navy-deep font-bold mb-1">{stat}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 lg:py-16">
        <div className="container-x">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-display text-2xl lg:text-3xl text-navy-deep mb-2">Our Mission & Vision</h2>
            <p className="text-sm text-muted-foreground">Empowering healthcare professionals through excellence</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gold/10 rounded-lg"><Target className="w-5 h-5 text-gold" /></div>
                <h3 className="font-display text-lg text-navy-deep">Our Mission</h3>
              </div>
              <p className="text-sm text-muted-foreground">We provide competency-based education and practical training to improve clinical outcomes worldwide.</p>
            </div>
            <div className="bg-gradient-to-br from-navy-deep to-blue-900 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gold/20 rounded-lg"><Sparkles className="w-5 h-5 text-gold" /></div>
                <h3 className="font-display text-lg text-white">Our Vision</h3>
              </div>
              <p className="text-sm text-blue-100">To be a global leader in medical education, delivering accessible, practice-focused programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Leadership Members - marquee */}
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
