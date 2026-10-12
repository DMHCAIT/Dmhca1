import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { HeroArtwork } from "@/components/site/HeroArtwork";

export const Route = createFileRoute("/about-dmhca")({
  head: () => ({
    meta: [
      { title: "About DMHCA — Delhi Medical Health Care Academy" },
      {
        name: "description",
        content:
          "Learn about DMHCA's mission to provide transformative healthcare education with advanced courses and expert faculty.",
      },
    ],
  }),
  component: About,
});

function About() {
  const [facultyPaused, setFacultyPaused] = useState(false);
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
    <div className="home-page about-page">
      {/* Small hero for About page */}
      <section className="home-hero about-hero home-section-panel">
        <HeroArtwork />
        <div className="container-home py-12 lg:py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-5">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-xs uppercase tracking-[0.15em] text-gold font-medium">
                Excellence in Medical Education
              </span>
            </div>
            <h1 className="font-display text-[2.125rem] md:text-5xl lg:text-[3.75rem] text-white mb-5 leading-tight tracking-[-0.04em]">
              Transforming Healthcare <span className="text-gold">Education</span>
            </h1>
            <p className="text-foreground/80 leading-relaxed mb-7 max-w-2xl mx-auto">
              Delhi Medical Health Care Academy empowers medical professionals with practical
              expertise and world-class education.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/top-medical-courses"
                className="hero-primary-action inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full transition font-semibold text-sm group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                Explore Courses <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Content Intro */}
      <section className="about-introduction">
        <div className="container-home py-12 lg:py-16">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-6 lg:gap-x-16">
            <h2 className="about-intro-heading font-display text-3xl lg:text-4xl text-foreground lg:row-span-2">
              DMHCA — Delhi Medical Health Care Academy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              DMHCA, also known as the Delhi Medical Health Care Academy, is a prestigious institute
              that specializes in medical training courses. Our institute is dedicated to equipping
              students with the knowledge and skills necessary to provide compassionate,
              understanding, and effective healthcare to those in need.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission at DMHCA is to provide a transformative healthcare education experience.
              We believe that education is the key to the future and that healthcare is an essential
              field for the sustenance, maintenance, and existence of human beings. That is why we
              are committed to providing our trainees with the competence and skills necessary to
              ensure the well-being of the world's population with knowledge, conviction, and
              confidence.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="about-learning home-light-panel py-8 lg:py-10">
        <div className="container-home">
          <div className="academic-intro mb-8">
            <h2 className="font-display text-3xl lg:text-4xl text-foreground">How it works?</h2>
          </div>

          <ol className="about-steps">
            {[
              {
                num: "01",
                title: "Browse courses",
                desc: "Discover curated courses from expert contributors.",
              },
              {
                num: "02",
                title: "Enroll securely",
                desc: "Fast, secure checkout with multiple payment options.",
              },
              {
                num: "03",
                title: "Start learning",
                desc: "Access materials instantly and follow guided practical modules.",
              },
            ].map((c) => (
              <li key={c.num} className="about-step">
                <span
                  className="about-step-number font-display text-3xl font-bold"
                  aria-hidden="true"
                >
                  {c.num}
                </span>
                <div className="about-step-content">
                  <h3 className="font-display text-xl text-foreground">{c.title}</h3>
                  <p className="mt-2 text-muted-foreground">{c.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="about-clinical py-8 lg:py-10">
        <div className="container-home">
          <div>
            <div>
              <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-center">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl text-foreground leading-tight mb-4">
                    Advance Your Clinical Learning with DMHCA
                  </h2>
                  <p className="text-base text-muted-foreground mb-6">
                    Explore specialised healthcare programs designed for working professionals.
                    Learn through structured modules, live sessions, and guidance from experienced
                    faculty, with study options that fit around clinical practice.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    {[
                      ["Comprehensive Curriculum", "Practical, evidence-based modules."],
                      ["Flexible Learning", "Self-paced and live options."],
                      ["Learning Across Borders", "Connect with global faculty & peers."],
                      ["Mentorship", "Dedicated tutor support."],
                    ].map(([t, s]) => (
                      <div key={t} className="flex items-start gap-3 py-3">
                        <div className="about-feature-icon flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-navy-deep">{t}</div>
                          <div className="text-sm text-muted-foreground">{s}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      to="/top-medical-courses"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-gold rounded-full font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                    >
                      Explore Programs <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      to="/contact-us"
                      className="home-section-link inline-flex items-center gap-2 text-sm"
                    >
                      Contact Admissions
                    </Link>
                  </div>
                </div>

                <div className="flex items-center justify-center w-full">
                  <div className="about-image-card w-full max-w-[446px] rounded-[1.5rem] overflow-hidden">
                    <div className="w-full h-auto">
                      <img
                        src="/dmhca_about.webp"
                        alt="Healthcare professional - DMHCA"
                        width={446}
                        height={288}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="about-image-stats p-5 sm:p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-foreground/75">Courses available</div>
                          <div className="text-3xl font-bold text-gold">103+</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-foreground/75">Learners</div>
                          <div className="text-3xl font-bold text-gold">15,000+</div>
                        </div>
                      </div>
                      <div className="mt-4 text-sm text-foreground/75">
                        programs designed for healthcare professionals.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Leadership Members */}
      <section className="about-faculty py-12 lg:py-16">
        <div className="container-home">
          <div className="flex flex-wrap items-center justify-between gap-5 mb-8">
            <div className="academic-intro">
              <h2 className="font-display text-3xl lg:text-4xl text-foreground">
                Academic Leadership Members
              </h2>
            </div>
            <button
              type="button"
              className="about-faculty-pause home-section-link text-sm"
              aria-pressed={facultyPaused}
              onClick={() => setFacultyPaused((paused) => !paused)}
            >
              {facultyPaused ? "Resume movement" : "Pause movement"}
            </button>
          </div>

          <div className="about-faculty-strip">
            <div className="about-faculty-track" data-paused={facultyPaused}>
              {[false, true].map((duplicate) => (
                <div
                  className="about-faculty-group"
                  key={String(duplicate)}
                  aria-hidden={duplicate || undefined}
                >
                  {faculty.map((file, idx) => {
                    const name = file.replace(/\.[^/.]+$/, "").replace(/^Dr\s+/, "Dr. ");
                    return (
                      <div key={idx} className="about-faculty-card rounded-2xl">
                        <img
                          src={`/Faculty_images/${file}`}
                          alt={name}
                          width={250}
                          height={250}
                          className="about-faculty-portrait"
                        />
                        <div className="px-3 py-4">
                          <div className="text-sm text-foreground font-semibold">{name}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-admissions home-admissions home-section-panel">
        <HeroArtwork />
        <div className="container-home relative z-10 py-9 lg:py-12">
          <div className="flex flex-col items-center gap-5 text-center max-w-3xl mx-auto">
            <div>
              <div className="about-admissions-accent" aria-hidden="true" />
              <h2 className="font-display text-3xl lg:text-4xl text-white mb-3 tracking-tight">
                Ready to Transform Your Career?
              </h2>
              <p className="text-foreground/80 max-w-xl mx-auto">
                Join thousands of healthcare professionals who advanced their careers with DMHCA
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                to="/top-medical-courses"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold rounded-full font-semibold hover:bg-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                Browse Courses <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
