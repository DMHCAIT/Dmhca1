import { createFileRoute, Link, useLocation, useNavigate } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Star,
  StarHalf,
  Quote,
  ChevronLeft,
  ChevronRight,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
const heroImg = "/herofellowshiplarge.webp";
import { categories } from "@/data/courses";
import { useCoursesData } from "@/hooks/useCoursesData";
import { CourseCard } from "@/components/site/CourseCard";
import { HeroArtwork } from "@/components/site/HeroArtwork";
import { SignupFlow } from "@/components/SignupFlow";
import { OTPLoginModal } from "@/components/OTPLoginModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DMHCA ? Top Medical Courses Online | Fellowships, PG Diplomas & Certificates" },
      {
        name: "description",
        content:
          "DMHCA (dmhca.in) offers top medical courses online: accredited fellowships, PG diplomas and certificate programs in cardiology, radiology, gynaecology, diabetology, oncology and more for doctors.",
      },
      {
        name: "keywords",
        content:
          "dmhca, dmhca.in, top medical courses, top medical courses online, medical courses, online fellowship, medical education, cardiology, radiology, gynecology, dermatology, PG diploma, certificate courses",
      },
      { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=5.0" },
      { name: "author", content: "DMHCA" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      {
        property: "og:title",
        content: "DMHCA - Top Institute For Medical Courses | Accredited Online Fellowships",
      },
      {
        property: "og:description",
        content:
          "Advance your medical career with accredited online fellowships and certificate programs across radiology, cardiology, gynaecology, dermatology, oncology and more.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.dmhca.in/logo.webp" },
      { property: "og:url", content: "https://www.dmhca.in/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "DMHCA - Top Institute For Medical Courses" },
      {
        name: "twitter:description",
        content:
          "Advance your medical career with accredited online fellowships and certificate programs",
      },
      { name: "twitter:image", content: "https://www.dmhca.in/logo.webp" },
      { name: "theme-color", content: "#1a2a4a" },
    ],
    links: [
      { rel: "canonical", href: "https://www.dmhca.in/" },
      { rel: "prefetch", href: "/top-medical-courses" },
      { rel: "dns-prefetch", href: "https://cdn.jsdelivr.net" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "EducationalOrganization",
              "@id": "https://www.dmhca.in/#organization",
              name: "DMHCA",
              alternateName: ["DMHCA", "dmhca.in", "Delhi Medical Health Care Academy"],
              url: "https://www.dmhca.in/",
              logo: "https://www.dmhca.in/logo.webp",
              description:
                "DMHCA offers top medical courses online: fellowships, PG diplomas and certificate programs for doctors.",
            },
            {
              "@type": "WebSite",
              "@id": "https://www.dmhca.in/#website",
              url: "https://www.dmhca.in/",
              name: "DMHCA",
              alternateName: ["dmhca.in", "DMHCA Medical Courses"],
              publisher: { "@id": "https://www.dmhca.in/#organization" },
            },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentFmt = (() => {
    try {
      const p = new URLSearchParams(location.search || "").get("fmt");
      return p;
    } catch (e) {
      return null;
    }
  })();

  // Fetch courses dynamically from Supabase
  const { courses, loading } = useCoursesData();

  // Auth modal states
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [signupEmail, setSignupEmail] = useState("");

  // Check if already logged in
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loggedIn = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(loggedIn);
    }
  }, []);

  const [reviewIndex, setReviewIndex] = useState(0);
  const [slide, setSlide] = useState(0);
  const [screenSize, setScreenSize] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );
  // Slides order intentionally set to Certificate → PG Diploma → Fellowship
  const slides = [
    {
      id: 0,
      program: "Certificate",
      theme: "dark",
      heroImg: "/herocertificatelarge.webp",
      blockImg: "/herocertificateblock.webp",
      titleMain: "Upskill clinically,",
      titleSub: "fast and focused.",
      desc: "Short certificate courses designed to build practical skills and clinical confidence for busy clinicians.",
    },
    {
      id: 1,
      program: "PG Diploma",
      theme: "muted",
      heroImg: "/heropgdiplomalarge.webp",
      blockImg: "/heropgdiplomablock-v2.webp",
      titleMain: "Deep clinical training,",
      titleSub: "structured for practice.",
      desc: "Comprehensive PG Diploma programs blending theory and supervised clinical exposure over months.",
    },
    {
      id: 2,
      program: "Fellowship",
      theme: "dark",
      heroImg: "/herofellowshiplarge.webp",
      blockImg: "/herofellowshipblock.webp",
      titleMain: "Medical mastery,",
      titleSub: "delivered with precision.",
      desc: "Develop your medical career with accessible online fellowships and hands-on training from leading universities.",
    },
  ];

  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    if (isPaused) return;
    console.log("starting slide interval, isPaused=", isPaused);
    // Advance immediately once when autoplay starts
    setSlide((s) => {
      const next = (s + 1) % slides.length;
      console.log("advancing slide (immediate)", s, "->", next);
      return next;
    });
    const t = setInterval(() => {
      setSlide((s) => {
        const next = (s + 1) % slides.length;
        console.log("advancing slide", s, "->", next);
        return next;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [isPaused]);

  useEffect(() => {
    console.log("slide state changed:", slide);
  }, [slide]);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const reviewsPerPage = screenSize < 640 ? 1 : screenSize < 1024 ? 2 : 3;

  // Memoize featured courses computation to avoid recalculation on every render
  const featured = useMemo(() => {
    if (!courses || courses.length === 0) return [];
    const result = [...courses].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0)).slice(0, 6);
    // Replace specific courses with requested alternatives in featured programs
    const replacementMap = [
      { find: /interventional cardiology/i, replaceWith: "Fellowship in Pediatrics" },
      { find: /pediatric rheumatology/i, replaceWith: "PG Diploma in HIV Medicine" },
      { find: /cardiothoracic surgery/i, replaceWith: "PG Diploma In Diabetology" },
      { find: /cardio oncology/i, replaceWith: "Certificate in Child Health" },
      { find: /abdominal imaging/i, replaceWith: "Fellowship in Clinical Hematology" },
    ];
    try {
      for (const { find, replaceWith } of replacementMap) {
        const idx = result.findIndex((c) => find.test(c.title));
        if (idx !== -1) {
          const replacement = courses.find((c) => c.title.includes(replaceWith));
          if (replacement) {
            result[idx] = replacement;
          }
        }
      }
    } catch (e) {
      // silent fallback if courses data shape differs
    }
    return result;
  }, [courses]);

  // Memoize reviews array to prevent recreation on every render
  const reviews = useMemo(
    () => [
      {
        name: "Ahsan Habib",
        role: "Bangladesh",
        text: "Hi I am Dr.Jakaria from Bangladesh. I have completed the fellowship on endocrinology course from here. Their educational system is very good.. thanks to DMHCA.",
        image: "/courses/Ahsan-Habib-150x150.jpg",
        rating: 5,
      },
      {
        name: "Pragya Rajbhandari",
        role: "Jaipur",
        text: "My journey through the Pediatric Neurology Fellowship Program at your institute has been an incredibly rewarding experience. I've gained valuable clinical knowledge, hands-on training, and deepened my understanding of neurological conditions in children. Thank you for everything!",
        image: "/courses/Pragya-150x150.jpg",
        rating: 4.5,
      },
      {
        name: "Shahjad Khan",
        role: "Lucknow",
        text: "I recently completed the Fellowship in Diabetology at DMHCA, and it has been a transformative journey in my medical career. The program is well-structured, combining updated theoretical modules with excellent hands-on clinical training.",
        image: "/courses/sahjad-khan-150x150.jpg",
        rating: 5,
      },
      {
        name: "Rahul Jain",
        role: "Mumbai",
        text: "Very genuine and trustworthy platform for doing fellowship in various courses. Admin team and consultation team are very helpful, specially my guide from consultation team Mr Akshay Suryavanshi is very polite, cooperative and kind person. Thanks to DMHCA",
        image: "/courses/rahul-jain-150x150.jpg",
        rating: 5,
      },
      {
        name: "Moomin Ahmad Mir",
        role: "Kashmir",
        text: "I am truly grateful to Delhi Medical Health Care Academy for providing me the opportunity to pursue a Fellowship in Critical Care. The admission process was extremely smooth and hassle-free. The staff members are very helpful and supportive, always ready to guide students at every step. Thanks Guys…",
        image: "/courses/mommin-150x150.jpg",
        rating: 4,
      },
      {
        name: "Manisha Kumari",
        role: "New Delhi",
        text: "Highly recommend for the fellowship courses. I completed the fellowship in family medicine. It was a great learning experience. Very happy with the course content and faculty. Thank you team DMHCA",
        image: "/courses/manisha-kumari-150x150.jpg",
        rating: 5,
      },
      {
        name: "Dr. Mutharasan Kanniah",
        role: "Internal Medical Specialist, Dammam, KSA",
        text: "I highly appreciate Mr. Mahender, DMHCA Coordinator, for his excellent guidance throughout my Fellowship in Internal Medicine. His prompt support, professionalism, and ability to explain concepts clearly made my learning journey smooth and valuable. Thank you, DMHCA, for such dedicated support.",
        rating: 5,
      },
      {
        name: "Dr. Feroz Ahmad",
        role: "Neurology Fellowship, India",
        text: "DMHCA has a dedicated and supportive team that makes learning smooth and enjoyable. Ashwani Mishra guided me throughout my Neurology Fellowship and made every step easy. I truly appreciate the team's commitment and support.",
        rating: 4,
      },
      {
        name: "Sheikh Shozib",
        role: "Bangladesh",
        text: "I'm pursuing a Fellowship in Clinical Neurology with DMHCA. The system is well organized, the staff are friendly and supportive, and the lectures are clear, up-to-date, and easy to understand. Looking forward to a great learning journey.",
        rating: 5,
      },
      {
        name: "Pragya Rajbhandari",
        role: "Pediatric Neurology Fellowship",
        text: "My Pediatric Neurology Fellowship at DMHCA was a rewarding experience. The faculty provided excellent guidance, hands-on training, and valuable clinical knowledge, helping me strengthen my skills and passion for pediatric neurology.",
        rating: 5,
      },
      {
        name: "Dr. Biplab Chatterjee",
        role: "India",
        text: "Very nicely managed professional institute. Got my due papers on time. Nice experience with DMHCA. Keep it up.",
        rating: 4.5,
      },
      {
        name: "Jyothsna Theegala",
        role: "India",
        text: "Completing the Certificate in Advanced ART from DMHCA was a transformative experience. Overall, it was a great learning experience. The best part is that it is very affordable, and the faculty are excellent.",
        rating: 4,
      },
      {
        name: "Abhishek Sharma",
        role: "India",
        text: "I had an excellent experience at DMHCA while pursuing PGD in Reproductive Medicine. I highly recommend the academy for its quality education and professional guidance. Special thanks to Loveleen Ji and Sajid Ji for their constant support throughout my admission journey.",
        rating: 5,
      },
      {
        name: "Devayanee Gunjate",
        role: "India",
        text: "DMHCA has a very good curriculum with regular and interactive online lectures. The 15-day hands-on training was highly informative and helped me gain practical knowledge. Overall, it was a valuable learning experience.",
        rating: 5,
      },
      {
        name: "Syed Mustafa Aaqib",
        role: "India",
        text: "I had a very good experience at the Cardiology Conclave at Virinchi. Miss Soniya was an excellent coordinator who ensured everything was well organized and supported participants throughout the event. Overall, it was a great learning experience.",
        rating: 5,
      },
    ],
    [],
  );
  const displayedReviews = reviews.slice(reviewIndex, reviewIndex + reviewsPerPage);
  const nextReviews = () => setReviewIndex((reviewIndex + reviewsPerPage) % reviews.length);
  const prevReviews = () =>
    setReviewIndex((reviewIndex - reviewsPerPage + reviews.length) % reviews.length);

  // Memoize Organization Schema for Homepage
  const organizationSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "DMHCA",
      url: "https://www.dmhca.in",
      logo: "https://www.dmhca.in/logo.webp",
      description:
        "Top institute for accredited medical courses, fellowships and certificate programs",
      sameAs: [
        "https://www.facebook.com/dmhca",
        "https://twitter.com/dmhca",
        "https://www.linkedin.com/company/dmhca",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        email: "info@dmhca.in",
      },
    }),
    [],
  );

  const handleSignupSuccess = async (data: { email?: string } | any) => {
    setSignupEmail(data?.email || "");
    setShowSignupModal(false);
    // Show OTP verification modal for signup completion
    setShowOtpModal(true);
  };

  const handleLoginSuccess = (data: { userId?: string } | any) => {
    setIsLoggedIn(true);
    setShowLoginModal(false);
    setShowOtpModal(false);
    // Redirect to dashboard
    setTimeout(() => {
      navigate({ to: "/dashboard" });
    }, 500);
  };

  return (
    <div className="home-page">
      {/* Auth Modals */}
      <SignupFlow
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        onSuccess={handleSignupSuccess}
        onSwitchToLogin={() => {
          setShowSignupModal(false);
          setShowLoginModal(true);
        }}
      />
      <OTPLoginModal
        isOpen={showLoginModal || showOtpModal}
        onClose={() => {
          setShowLoginModal(false);
          setShowOtpModal(false);
        }}
        onSuccess={handleLoginSuccess}
        onSwitchToSignup={() => {
          setShowLoginModal(false);
          setShowSignupModal(true);
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Centered, text-focused hero */}
      <section
        className="home-hero relative overflow-hidden mx-3 my-4 rounded-[1.75rem] sm:mx-6 sm:my-5 sm:rounded-[2rem]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <HeroArtwork />
        <div className="container-home max-w-[76rem] py-7 sm:py-10 lg:py-12 relative z-10">
          <motion.div
            className="mx-auto max-w-5xl space-y-4 sm:space-y-6 text-center relative z-30"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Premium badge */}
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 w-fit text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
              <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                Excellence in Medical Education
              </span>
            </motion.div>

            <div className="space-y-3 sm:space-y-4">
              <h1 className="mx-auto flex min-h-[4.32em] sm:min-h-0 items-center justify-center font-display text-[1.875rem] sm:text-5xl lg:text-[3.75rem] text-foreground leading-[1.12] tracking-[-0.04em] max-w-5xl">
                <div>
                  <motion.span
                    className="relative inline-block"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: 0.1 }}
                  >
                    {slides[slide].titleMain}
                  </motion.span>
                  <br />
                  <motion.span
                    className="home-hero-highlight font-semibold text-gold not-italic"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: 0.15 }}
                  >
                    {slides[slide].titleSub}
                  </motion.span>
                </div>
              </h1>

              <motion.p
                className="mx-auto pt-1 text-sm text-foreground/75 max-w-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, delay: 0.2 }}
              >
                {slides[slide].desc}
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap justify-center gap-2.5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                to="/top-medical-courses"
                className="hero-primary-action group inline-flex min-h-12 items-center gap-3 px-7 py-3 text-sm font-semibold shadow-[0_12px_28px_-12px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 hover:shadow-lg transition rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                Explore Courses{" "}
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <div className="inline-flex items-center gap-2">
                <Link
                  to="/top-medical-courses"
                  search={{ fmt: slides[slide].program }}
                  className="inline-flex min-h-12 items-center px-5 py-2 rounded-full text-sm text-foreground bg-white/10 hover:bg-white/20 transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                >
                  {slides[slide].program}
                </Link>
                <div className="ml-2 inline-flex items-center gap-1">
                  <button
                    aria-label="Previous slide"
                    onClick={() => {
                      setSlide((slide - 1 + slides.length) % slides.length);
                    }}
                    className="flex h-11 w-11 items-center justify-center rounded-full text-foreground bg-white/10 hover:bg-white/20 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  >
                    ‹
                  </button>
                  <button
                    aria-label="Next slide"
                    onClick={() => {
                      setSlide((slide + 1) % slides.length);
                    }}
                    className="flex h-11 w-11 items-center justify-center rounded-full text-foreground bg-white/10 hover:bg-white/20 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  >
                    ›
                  </button>
                </div>
              </div>
            </motion.div>

            <div className="hero-details hidden sm:flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-6 pt-7 text-left">
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p className="hero-specialties-label uppercase tracking-widest mb-3 hidden sm:block">
                  Trending specialties
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 text-xs font-medium">
                  {["radiology", "dermatology", "obs-gynae", "cardiology", "endocrinology"].map(
                    (s, i) => (
                      <motion.div
                        key={s}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 + i * 0.05 }}
                      >
                        <Link
                          to="/top-medical-courses"
                          search={{ cat: s }}
                          className="hero-specialty-link inline-flex rounded-full px-3 py-2 text-foreground transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                        >
                          {categories.find((c) => c.slug === s)?.name}
                        </Link>
                      </motion.div>
                    ),
                  )}
                </div>
              </motion.div>

              <div className="flex shrink-0 flex-wrap justify-center items-stretch gap-3 text-sm">
                <div className="hero-trust-item flex items-center gap-3 py-2">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Users className="h-5 w-5 text-gold" aria-hidden="true" />
                  </div>
                  <div className="text-left">
                    <div className="font-display text-2xl font-bold leading-tight text-foreground">
                      15,000<span className="text-gold">+</span>
                    </div>
                    <span className="text-xs text-foreground/75">Active Learners</span>
                  </div>
                </div>
                <div className="hero-trust-item flex items-center gap-3 py-2">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Star className="h-5 w-5 fill-gold text-gold" aria-hidden="true" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-baseline gap-1.5 whitespace-nowrap text-foreground">
                      <span className="font-display text-2xl font-bold leading-tight">4.8</span>
                      <span className="text-xs text-foreground/75">/ 5</span>
                    </div>
                    <span className="text-xs text-foreground/75">Learner rating</span>
                  </div>
                </div>
              </div>
            </div>

            {currentFmt ? (
              <div className="mt-4">
                <Link
                  to="/top-medical-courses"
                  search={{ fmt: currentFmt }}
                  className="inline-block"
                >
                  <span className="inline-block bg-navy-deep text-primary-foreground px-3 py-1 rounded-full text-sm hover:opacity-95">
                    Showing: {currentFmt}
                  </span>
                </Link>
              </div>
            ) : null}
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="home-impact mx-3 sm:mx-6 rounded-[1.75rem]">
        <div className="container-home py-7 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 text-center">
          {[
            { k: "103+", v: "Specialised programs" },
            { k: "60+", v: "Faculty worldwide" },
            { k: categories.length.toString(), v: "Clinical specialties" },
            { k: "50+", v: "Countries reached" },
          ].map((s) => (
            <div key={s.v} className="rounded-xl px-2 py-2">
              <div className="home-impact-value font-display text-3xl sm:text-4xl font-bold tracking-tight">
                {s.k}
              </div>
              <div className="text-xs font-medium tracking-wide text-foreground/80 mt-2">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Specialties - Large Image Cards */}
      <section className="home-surface home-specialties py-12 md:py-16">
        <div className="container-home">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-navy-deep dark:text-white gold-rule">
                Specialties
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-navy-deep dark:text-white mt-3">
                Find your discipline
              </h2>
            </div>
            <Link to="/top-medical-courses" className="home-section-link text-sm">
              All categories →
            </Link>
          </div>
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-44 rounded-2xl bg-card animate-pulse" />
              ))}
            </div>
          ) : (
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.1,
                  },
                },
              }}
            >
              {[
                "radiology",
                "dermatology",
                "endocrinology",
                "cardiology",
                "emergency",
                "orthopedics",
                "medicine",
                "oncology",
              ].map((slug) => {
                const category = categories.find((c) => c.slug === slug);
                if (!category) return null;

                const specialtyImages: { [key: string]: string } = {
                  radiology: "/courses/Radiology.webp",
                  dermatology: "/courses/Dermatology.webp",
                  endocrinology: "/courses/Endocrinology.webp",
                  cardiology: "/courses/cardiology.webp",
                  emergency: "/courses/emergency.webp",
                  orthopedics: "/courses/orthopedics.webp",
                  medicine: "/courses/medicine.webp",
                  oncology: "/courses/oncology.webp",
                };

                const imageUrl = specialtyImages[slug] || "/courses/default.webp";

                return (
                  <motion.div
                    key={slug}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { type: "spring", stiffness: 100, damping: 20 },
                      },
                    }}
                  >
                    <Link
                      to="/top-medical-courses"
                      search={(() => {
                        const ss = new URLSearchParams(location.search || "");
                        ss.set("cat", slug);
                        return Object.fromEntries(ss.entries());
                      })()}
                      className="home-specialty-card group relative overflow-hidden rounded-2xl aspect-video md:aspect-[4/3] h-auto block"
                    >
                      <img
                        loading="lazy"
                        src={imageUrl}
                        alt={category.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      <div className="home-specialty-overlay absolute inset-0" />

                      {/* Content - bottom left */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-10"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <h3 className="font-display text-lg md:text-2xl text-white leading-tight group-hover:text-gold transition">
                          {category.name}
                        </h3>
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured / Top Rated */}
      <section className="home-light-panel home-programs home-section-panel py-10 md:py-14">
        <div className="container-home">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-gold gold-rule">
                Top rated
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mt-3">
                Featured programs
              </h2>
            </div>
            <Link to="/top-medical-courses" className="home-section-link text-sm">
              View all courses →
            </Link>
          </div>
          {loading ? (
            <div className="home-program-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-64 rounded-md bg-card animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="home-program-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((c) => (
                <CourseCard key={c.slug} course={c as any} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* University Partners / Academic Alliances */}
      <section className="home-academic py-12 md:py-16">
        <div className="container-home">
          <div className="academic-intro">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-3">
                Academic alliances
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground">
                Academic partners
              </h2>
            </div>
          </div>

          <div className="academic-logo-grid mt-8 md:mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8 sm:gap-x-10">
            {[
              {
                file: "AAA-logo.png",
                src: "/AAA-logo-dark-text.png",
                name: "American Accreditation Association",
                width: 349,
                height: 141,
              },
              {
                file: "btu_hero_logo.webp",
                name: "Bir Tikendrajit University",
                width: 150,
                height: 150,
              },
              {
                file: "duke logo.webp",
                name: "Duke International University",
                width: 1627,
                height: 633,
              },
              {
                file: "ibmp-logo.webp",
                name: "International Board of Medical Practitioners",
                width: 96,
                height: 96,
              },
              {
                file: "logo-srdu.webp",
                name: "Shri Rukmani Dwarkadhish University",
                width: 752,
                height: 307,
              },
            ].map(
              ({
                file,
                src,
                name,
                width,
                height,
              }: {
                file: string;
                src?: string;
                name: string;
                width: number;
                height: number;
              }) => (
                <div
                  key={file}
                  className="academic-logo-item flex h-28 items-center justify-center px-3 sm:px-6"
                >
                  <img
                    src={src ?? `/ACADEMIC PARTNERS/${file}`}
                    alt={name}
                    width={width}
                    height={height}
                    style={{
                      maxWidth: `min(100%, ${file === "AAA-logo.png" ? 210 : file === "ibmp-logo.webp" || file === "btu_hero_logo.webp" ? 88 : 240}px)`,
                      maxHeight: 88,
                    }}
                    loading="lazy"
                    className="object-contain"
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Google Reviews / Alumni Voices */}
      <section className="home-light-panel home-alumni home-section-panel">
        <div className="container-home py-8 md:py-14">
          <div className="mb-6 md:mb-8 max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-gold gold-rule">
              Alumni voices
            </div>
            <h2 className="font-display text-[1.75rem] md:text-4xl text-primary-foreground mt-2 md:mt-3">
              Loved by Doctors Worldwide
            </h2>
            <p className="text-primary-foreground/85 mt-2 text-sm">
              verified reviews from practicing physicians
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 sm:mb-6">
            <button
              onClick={prevReviews}
              className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-5 h-5 text-primary-foreground" />
            </button>
            <div className="flex-1 min-w-0 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {loading &&
                Array.from({ length: reviewsPerPage }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-card p-5 sm:p-6 flex flex-col shadow-lg animate-pulse min-h-[18rem]"
                  />
                ))}
              {!loading &&
                displayedReviews.map((r) => (
                  <motion.div
                    key={r.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="home-review-card flex flex-col rounded-2xl bg-card p-5 sm:p-6 shadow-lg"
                  >
                    <div className="mb-5 flex items-center gap-3">
                      <div
                        aria-hidden="true"
                        className="home-review-avatar flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-lg font-bold"
                      >
                        {r.name.charAt(0)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-semibold text-foreground">{r.name}</div>
                        <div className="mt-0.5 text-xs text-muted-foreground">{r.role}</div>
                      </div>
                      <Quote aria-hidden="true" className="h-7 w-7 shrink-0 text-gold" />
                    </div>
                    <p className="text-sm text-foreground/85 leading-relaxed flex-1">{r.text}</p>
                    <div
                      aria-label={`${r.rating ?? 5} out of 5 stars`}
                      className="mt-5 flex items-center gap-1 pt-4"
                    >
                      {(() => {
                        const rating = Number(r.rating ?? 5);
                        const full = Math.floor(rating);
                        const hasHalf = rating - full >= 0.5;
                        const empty = 5 - full - (hasHalf ? 1 : 0);
                        const nodes = [];
                        for (let i = 0; i < full; i++)
                          nodes.push(
                            <Star
                              key={`full-${i}`}
                              aria-hidden="true"
                              className="h-4 w-4 fill-gold text-gold"
                            />,
                          );
                        if (hasHalf)
                          nodes.push(
                            <StarHalf
                              key={`half`}
                              aria-hidden="true"
                              className="h-4 w-4 fill-gold text-gold"
                            />,
                          );
                        for (let i = 0; i < empty; i++)
                          nodes.push(
                            <Star
                              key={`empty-${i}`}
                              aria-hidden="true"
                              className="h-4 w-4 text-muted-foreground/40"
                            />,
                          );
                        return nodes;
                      })()}
                    </div>
                  </motion.div>
                ))}
            </div>
            <button
              onClick={nextReviews}
              className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-5 h-5 text-primary-foreground" />
            </button>
          </div>
          <div className="flex sm:hidden justify-center gap-2">
            <button
              onClick={prevReviews}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-5 h-5 text-primary-foreground" />
            </button>
            <button
              onClick={nextReviews}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-5 h-5 text-primary-foreground" />
            </button>
          </div>
        </div>
      </section>

      {/* Training partners - moving marquee */}
      <section className="home-surface home-training py-12 md:py-16">
        <div className="container-home">
          <div className="academic-intro mb-8">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-3">
                Training network
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground">
                Our training partners
              </h2>
            </div>
          </div>

          <div className="home-logo-marquee overflow-hidden">
            <div className="training-logo-track">
              {(() => {
                const logos = [
                  { file: "images (1).webp", width: 288, height: 175 },
                  { file: "images.webp", width: 331, height: 152 },
                  { file: "KIMS_Main_Logo_Col-01.webp", width: 901, height: 402 },
                  { file: "Logo-medicover.webp", width: 250, height: 250 },
                  { file: "logo.webp", width: 109, height: 56 },
                  { file: "Noora-Logo-01.webp", width: 2250, height: 869 },
                  {
                    file: "skinfinity-skin-hair-laser-and-aesthetic-clinic-noida-625ce89ba1d3f.webp",
                    width: 888,
                    height: 588,
                  },
                  { file: "Untitled-design.webp", width: 500, height: 500 },
                  { file: "VPH_New-Logo-1024x462.webp", width: 1024, height: 462 },
                ];
                return [0, 1].map((copy) => (
                  <div
                    className="training-logo-group"
                    key={copy}
                    aria-hidden={copy === 1 ? true : undefined}
                  >
                    {logos.map(({ file, width, height }) => (
                      <div
                        key={file}
                        className="training-logo-item flex-shrink-0 w-44 h-24 sm:w-52 sm:h-28 flex items-center justify-center px-4"
                      >
                        <img
                          src={`/Training partners/${file}`}
                          alt={file}
                          width={width}
                          height={height}
                          style={{ maxWidth: width / 2, maxHeight: Math.min(80, height / 2) }}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                ));
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-admissions home-section-panel">
        <div className="container-home py-8 md:py-14 grid md:grid-cols-2 gap-5 md:gap-6 items-center">
          <div className="admissions-copy">
            <div className="admissions-eyebrow inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
              Admissions open
            </div>
            <h2 className="font-display text-[1.75rem] leading-tight md:text-[2.75rem] mt-3 md:mt-4 max-w-xl">
              Begin the next chapter of your medical career
            </h2>
            <p className="mt-3 md:mt-4 max-w-lg text-sm sm:text-base text-foreground/80">
              Explore your next step with guidance on fellowships, PG Diplomas and certificate
              programs.
            </p>
          </div>
          <div className="admissions-actions rounded-2xl p-5 sm:p-8 md:ml-auto w-full max-w-md">
            <div className="text-xs uppercase tracking-[0.16em] text-gold font-semibold">
              Your next step
            </div>
            <h3 className="font-display text-lg sm:text-xl mt-2 sm:mt-3">
              Find the program that fits your goals.
            </h3>
            <p className="mt-2 mb-4 sm:mb-5 text-sm sm:text-base text-muted-foreground">
              Speak with our team or explore the available programs.
            </p>
            <Link
              to="/contact-us"
              className="admissions-primary flex items-center justify-between gap-3 px-5 py-3 sm:py-3.5 text-sm font-semibold rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              Talk to Counsellor
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/top-medical-courses"
              className="admissions-secondary mt-2 sm:mt-3 flex items-center justify-center gap-2 py-2 text-sm font-semibold rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              Browse programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
