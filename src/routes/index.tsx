import { createFileRoute, Link, useLocation } from "@tanstack/react-router";
import { ArrowUpRight, Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
const heroImg = "/hero-doctor.webp";
import { categories, courses } from "@/data/courses";
import { CourseCard } from "@/components/site/CourseCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DMHCA - Top Institute For Medical Courses" },
      { name: "description", content: "Advance your medical career with accredited online fellowships and certificate programs across radiology, cardiology, gynaecology, dermatology, oncology and more." },
    ],
  }),
  component: Home,
});

function Home() {
  const location = useLocation();
  const currentFmt = (() => {
    try { const p = new URLSearchParams(location.search || '').get('fmt'); return p; } catch (e) { return null; }
  })();
  const [reviewIndex, setReviewIndex] = useState(0);
  const [slide, setSlide] = useState(0);
  const slides = [
    {
      id: 0,
      program: 'Fellowship',
      theme: 'dark',
      heroImg: '/hero-doctor.webp',
      titleMain: 'Medical mastery,',
      titleSub: 'delivered with precision.',
      desc: 'Develop your medical career with accessible online fellowships and hands-on training from leading universities.'
    },
    {
      id: 1,
      program: 'Certificate',
      theme: 'light',
      heroImg: 'https://images.unsplash.com/photo-1586773860416-3b8d0b5f2f7d?w=1600&h=900&fit=crop&q=80&auto=format',
      titleMain: 'Upskill clinically,',
      titleSub: 'fast and focused.',
      desc: 'Short certificate courses designed to build practical skills and clinical confidence for busy clinicians.'
    },
    {
      id: 2,
      program: 'PG Diploma',
      theme: 'muted',
      heroImg: 'https://images.unsplash.com/photo-1580281657521-7b6f4b4b2f3b?w=1600&h=900&fit=crop&q=80&auto=format',
      titleMain: 'Deep clinical training,',
      titleSub: 'structured for practice.',
      desc: 'Comprehensive PG Diploma programs blending theory and supervised clinical exposure over months.'
    },
  ];

  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(() => setSlide((s) => (s + 1) % slides.length), 2000);
    return () => clearInterval(t);
  }, [isPaused]);
  const featured = [...courses].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0)).slice(0, 6);
  
  const reviews = [
    { name: "Ahsan Habib", role: "Bangladesh", text: "Hi I am Dr.Jakaria from Bangladesh. I have completed the fellowship on endocrinology course from here. Their educational system is very good.. thanks to DMHCA.", image: "/courses/Ahsan-Habib-150x150.jpg" },
    { name: "Pragya Rajbhandari", role: "Jaipur", text: "My journey through the Pediatric Neurology Fellowship Program at your institute has been an incredibly rewarding experience. I've gained valuable clinical knowledge, hands-on training, and deepened my understanding of neurological conditions in children. Thank you for everything!", image: "/courses/Pragya-150x150.jpg" },
    { name: "Shahjad Khan", role: "Lucknow", text: "I recently completed the Fellowship in Diabetology at DMHCA, and it has been a transformative journey in my medical career. The program is well-structured, combining updated theoretical modules with excellent hands-on clinical training.", image: "/courses/sahjad-khan-150x150.jpg" },
    { name: "Rahul Jain", role: "Mumbai", text: "Very genuine and trustworthy platform for doing fellowship in various courses. Admin team and consultation team are very helpful, specially my guide from consultation team Mr Akshay Suryavanshi is very polite, cooperative and kind person. Thanks to DMHCA", image: "/courses/rahul-jain-150x150.jpg" },
    { name: "Moomin Ahmad Mir", role: "Kashmir", text: "I am truly grateful to Delhi Medical Health Care Academy for providing me the opportunity to pursue a Fellowship in Critical Care. The admission process was extremely smooth and hassle-free. The staff members are very helpful and supportive, always ready to guide students at every step. Thanks Guys…", image: "/courses/mommin-150x150.jpg" },
    { name: "Manisha Kumari", role: "New Delhi", text: "Highly recommend for the fellowship courses. I completed the fellowship in family medicine. It was a great learning experience. Very happy with the course content and faculty. Thank you team DMHCA", image: "/courses/manisha-kumari-150x150.jpg" },
  ];
  const displayedReviews = reviews.slice(reviewIndex, reviewIndex + 3);
  const nextReviews = () => setReviewIndex((reviewIndex + 3) % reviews.length);
  const prevReviews = () => setReviewIndex((reviewIndex - 3 + reviews.length) % reviews.length);

  return (
    <div>
      {/* Compact editorial hero (Asymmetric direction) */}
      <section className="site-hero" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(203, 163, 91, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(203, 163, 91, 0.08) 0%, transparent 50%)'}} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          {/* Sliding background images (translateX) */}
          <motion.div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" initial={false} animate={{ x: `-${slide * 100}%` }} transition={{ duration: 1, ease: 'easeInOut' }}>
            <div className="flex h-full w-[300%]">
              {slides.map((s, i) => (
                <div key={i} className="w-1/3 h-full flex-shrink-0 relative">
                  <img src={s.heroImg || '/hero-fallback.webp'} alt={s.titleMain} className="w-full h-full object-cover object-center brightness-75" onError={(e: any) => { e.currentTarget.src = '/hero-fallback.webp' }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </motion.div>
        
        <div className="container-home py-6 md:py-8 grid lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
          {/* Left: content */}
          <motion.div 
            className="lg:col-span-8 space-y-6 relative z-30"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Premium badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm w-fit"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-xs font-semibold text-gold uppercase tracking-wider">Excellence in Medical Education</span>
            </motion.div>

            <div className="space-y-3">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight drop-shadow-lg">
                <div>
                  <motion.span className="relative inline-block" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25, delay: 0.1 }}>
                    {slides[slide].titleMain}
                    <span className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-gold via-gold/50 to-transparent rounded-full" style={{ width: '100%' }} />
                  </motion.span>
                  <br />
                  <motion.span className="italic font-normal text-gold" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25, delay: 0.15 }}>
                    {slides[slide].titleSub}
                  </motion.span>
                </div>
              </h1>

              <motion.p className="text-base md:text-lg text-white/90 max-w-lg leading-relaxed drop-shadow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25, delay: 0.2 }}>
                {slides[slide].desc}
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-wrap gap-2.5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link to="/top-medical-courses" className="group inline-flex items-center gap-2 px-6 py-2.5 bg-gold text-navy-deep text-sm font-medium hover:shadow-lg hover:shadow-gold/30 transition rounded-sm">
                Explore Courses <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <div className="inline-flex items-center gap-2">
                <Link to="/top-medical-courses" search={(() => { const s = new URLSearchParams(location.search || ''); s.set('fmt', slides[slide].program); return Object.fromEntries(s.entries()); })()} className="px-4 py-2 rounded-sm border border-border text-sm text-navy-deep hover:bg-gold/10 transition bg-navy-deep text-primary-foreground">
                  {slides[slide].program}
                </Link>
                <div className="ml-2 inline-flex items-center gap-1">
                  <button aria-label="Previous slide" onClick={() => setSlide((slide - 1 + slides.length) % slides.length)} className="p-2 rounded-sm border border-border text-sm">‹</button>
                  <button aria-label="Next slide" onClick={() => setSlide((slide + 1) % slides.length)} className="p-2 rounded-sm border border-border text-sm">›</button>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="pt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-xs text-gold/70 uppercase tracking-widest mb-2 font-semibold">Trending specialties</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-medium">
                {["radiology", "dermatology", "obs-gynae", "cardiology", "endocrinology"].map((s, i) => (
                  <motion.div 
                    key={s}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + i * 0.05 }}
                  >
                    <Link to="/top-medical-courses/" search={(() => { const ss = new URLSearchParams(location.search || ''); ss.set('cat', s); return Object.fromEntries(ss.entries()); })()} className="text-white hover:text-gold transition">
                      {categories.find(c => c.slug === s)?.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {currentFmt ? (
              <div className="mt-4">
                <Link to="/top-medical-courses" search={(() => { const s = new URLSearchParams(location.search || ''); if (currentFmt) s.set('fmt', currentFmt); return Object.fromEntries(s.entries()); })()} className="inline-block">
                  <span className="inline-block bg-navy-deep text-primary-foreground px-3 py-1 rounded-full text-sm hover:opacity-95">Showing: {currentFmt}</span>
                </Link>
              </div>
            ) : null}
          </motion.div>

          {/* Right: portrait + stat card */}
          <motion.div 
            className="lg:col-span-4 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-[4/5] max-w-[380px] lg:max-w-none mx-auto z-20">
              {/* Gold offset frame */}
              <motion.div 
                className="absolute inset-0 translate-x-2 translate-y-2 border-2 border-gold/40 rounded-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
              {/* Main image */}
              <motion.div 
                className="relative w-full h-full rounded-sm overflow-hidden shadow-2xl bg-navy-deep"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <img src={slides[slide].heroImg} alt="DMHCA faculty" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>
              {/* Floating stat card */}
              <motion.div 
                className="absolute -left-3 sm:-left-6 bottom-6 bg-white p-4 shadow-2xl border-l-2 border-gold max-w-[220px] z-50 rounded-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-navy-deep mb-1">Active Learners</p>
                <p className="font-display text-2xl text-navy-deep font-bold">42,000<span className="text-gold">+</span></p>
                <div className="mt-2 flex items-center gap-2 text-sm text-navy-deep">
                  <Star className="w-4 h-4 fill-gold text-gold" />
                  <span className="ml-1 font-medium">4.8 / 5 alumni rating</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </section>

      {/* Stats bar */}
      <section className="bg-hero-dark text-on-hero-dark">
        <div className="container-home py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { k: courses.length + "+", v: "Specialised programs" },
            { k: "60+", v: "Faculty worldwide" },
            { k: categories.length.toString(), v: "Clinical specialties" },
            { k: "120+", v: "Countries reached" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-3xl text-gold">{s.k}</div>
              <div className="text-xs uppercase tracking-[0.15em] text-primary-foreground/70 mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Specialties - Large Image Cards */}
      <section className="bg-hero-light text-on-hero-light py-12">
        <div className="container-home">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-navy-deep gold-rule">Specialties</div>
            <h2 className="font-display text-3xl md:text-4xl text-navy-deep mt-3">Find your discipline</h2>
          </div>
          <Link to="/top-medical-courses" className="text-sm text-navy-deep hover:text-gold">All categories →</Link>
        </div>
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
          {["radiology", "dermatology", "obs-gynae", "cardiology", "emergency", "orthopedics", "medicine", "oncology"].map((slug) => {
            const category = categories.find(c => c.slug === slug);
            if (!category) return null;
            
            // Specialty-specific colors as fallback + medical images
            const specialtyColors: {[key: string]: string} = {
              'radiology': 'from-blue-900 to-blue-700',
              'dermatology': 'from-pink-900 to-pink-700',
              'obs-gynae': 'from-purple-900 to-purple-700',
              'cardiology': 'from-red-900 to-red-700',
              'emergency': 'from-orange-900 to-orange-700',
              'orthopedics': 'from-amber-900 to-amber-700',
              'medicine': 'from-green-900 to-green-700',
              'oncology': 'from-indigo-900 to-indigo-700',
            };

            // Working medical images from Unsplash
            const specialtyImages: {[key: string]: string} = {
              'radiology': 'https://images.unsplash.com/photo-1631217314985-abc2ced88d60?w=800&h=600&fit=crop&q=80&auto=format',
              'dermatology': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&q=80&auto=format',
              'obs-gynae': 'https://images.unsplash.com/photo-1584308666744-24d5f400f6f1?w=800&h=600&fit=crop&q=80&auto=format',
              'cardiology': 'https://images.unsplash.com/photo-1576091160399-7c2172fcd7a7?w=800&h=600&fit=crop&q=80&auto=format',
              'emergency': 'https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=800&h=600&fit=crop&q=80&auto=format',
              'orthopedics': 'https://images.unsplash.com/photo-1576091160681-112b5879f967?w=800&h=600&fit=crop&q=80&auto=format',
              'medicine': 'https://images.unsplash.com/photo-1578496781514-637d1afc2ba9?w=800&h=600&fit=crop&q=80&auto=format',
              'oncology': 'https://images.unsplash.com/photo-1559839734945-08b6332c0ff3?w=800&h=600&fit=crop&q=80&auto=format',
            };
            
            const imageUrl = specialtyImages[slug] || 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&q=90';
            
            return (
              <motion.div
                key={slug}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { type: "spring", stiffness: 100, damping: 20 }
                  },
                }}
              >
                <Link 
                  to="/top-medical-courses/" 
                  search={{ cat: slug }}
                  className={`group relative overflow-hidden rounded-2xl aspect-video md:aspect-square h-auto block bg-gradient-to-br ${specialtyColors[slug]}`}
                >
                  {/* Background image with zoom effect */}
                  <motion.img 
                    src={imageUrl} 
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Dark gradient overlay - only at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-300" />
                  
                  {/* Content - bottom left */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10"
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
        </div>
      </section>

      {/* Featured / Top Rated */}
      <section className="bg-hero-dark text-on-hero-dark py-12">
        <div className="container-home">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-on-hero-dark/80 gold-rule">Top rated</div>
            <h2 className="font-display text-3xl md:text-4xl text-on-hero-dark mt-3">Featured programs</h2>
          </div>
          <Link to="/top-medical-courses" className="text-sm text-on-hero-dark/90 hover:text-gold">View all courses →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((c) => <CourseCard key={c.slug} course={c} />)}
        </div>
        </div>
      </section>

      {/* University Partners / Academic Alliances */}
      <section className="bg-hero-light text-on-hero-light py-12">
        <div className="container-home">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-navy-deep gold-rule inline-block">Academic alliances</div>
          <h2 className="font-display text-3xl md:text-4xl text-navy-deep mt-3">Academic partners</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-sm">DMHCA programs are delivered in academic collaboration with internationally recognised universities and medical institutions.</p>
        </div>
        
        {/* Academic partners — styled horizontal carousel */}
        <div className="mb-16">
          <div className="relative">
            <div className="mx-auto max-w-6xl py-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 items-center">
                {[
                  'ACTD-2.webp',
                  'btu_hero_logo.webp',
                  'duke logo.webp',
                  'IBMP LOGO .webp',
                  'logo-srdu.webp',
                ].map((file) => (
                  <div key={file} className="rounded-xl bg-white/80 dark:bg-slate-800/60 p-4 flex items-center justify-center shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                    <div className="w-48 h-32 md:w-56 md:h-36 lg:w-64 lg:h-40 flex items-center justify-center bg-white rounded-lg">
                      <img src={`/ACADEMIC PARTNERS/${file}`} alt={file} className="max-w-full max-h-full object-contain" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <style jsx>{`
              .partners-carousel { background: linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.2)); border-radius: 12px; }
              .scrollbar-hide::-webkit-scrollbar { display: none; }
              .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
          </div>
        </div>
        </div>
      </section>

      {/* Google Reviews / Alumni Voices */}
      <section className="site-hero">
        <div className="container-x py-8">
          <div className="mb-6">
            <div className="text-xs uppercase tracking-[0.25em] text-primary-foreground gold-rule">Alumni voices</div>
            <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mt-3">Loved by Doctors Worldwide</h2>
            <p className="text-primary-foreground/85 mt-2 text-sm">2,100+ verified reviews from practicing physicians</p>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <button onClick={prevReviews} className="p-2 rounded-md border border-border hover:bg-secondary transition-colors" aria-label="Previous reviews"><ChevronLeft className="w-5 h-5 text-primary-foreground" /></button>
            <div className="flex-1 grid md:grid-cols-3 gap-4">
              {displayedReviews.map((r) => (
                <motion.div key={r.name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="bg-white/6 border border-white/10 rounded-md p-6 flex flex-col shadow-xl backdrop-blur-sm">
                  <div className="mb-3">
                    <div>
                      <div className="text-sm font-medium text-primary-foreground">{r.name}</div>
                      <div className="text-xs text-primary-foreground/80">{r.role}</div>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-gold/70" />
                  <p className="text-sm text-primary-foreground/90 mt-2 leading-relaxed flex-1">{r.text}</p>
                  <div className="flex items-center gap-1 text-gold mt-3">{Array.from({length:5}).map((_,i)=><Star key={i} className="w-3.5 h-3.5 fill-gold"/>)}</div>
                </motion.div>
              ))}
            </div>
            <button onClick={nextReviews} className="p-2 rounded-md border border-border hover:bg-secondary transition-colors" aria-label="Next reviews"><ChevronRight className="w-5 h-5 text-primary-foreground" /></button>
          </div>
        </div>
      </section>

      {/* Training partners - moving marquee */}
      <section className="bg-white/60 py-8">
        <div className="container-home">
          <div className="text-center mb-6">
            <div className="text-xs uppercase tracking-[0.25em] text-navy-deep gold-rule inline-block">Training partners</div>
            <h2 className="font-display text-2xl md:text-3xl text-navy-deep mt-2">Our training partners</h2>
          </div>

          <div className="overflow-hidden">
            <div className="marquee">
              <div className="marquee__inner flex gap-8 items-center">
                {(() => {
                  const logos = [
                    '1678526353_7823551bcf91d278e567.webp',
                    // 'aig-logo-white.webp', (removed)
                    'images (1).webp',
                    'images.webp',
                    'KIMS_Main_Logo_Col-01.webp',
                    'Logo-medicover.webp',
                    'logo.webp',
                    'Noora-Logo-01.webp',
                    'skinfinity-skin-hair-laser-and-aesthetic-clinic-noida-625ce89ba1d3f.webp',
                    'Untitled-design.webp',
                    'VPH_New-Logo-1024x462.webp',
                  ];
                  const unique = Array.from(new Set(logos));
                  const sequence = unique.concat(unique); // duplicate for seamless loop
                  return sequence.map((file, idx) => (
                    <div key={idx} className="flex-shrink-0 w-48 h-24 md:w-56 md:h-28 lg:w-64 lg:h-32 flex items-center justify-center bg-card rounded-lg p-3 shadow-sm">
                      <img src={`/Training partners/${file}`} alt={file} className="max-w-full max-h-full object-contain" />
                    </div>
                  ));
                })()}
              </div>
            </div>
            <style jsx>{`
              .marquee { --gap: 2rem; }
              .marquee__inner { display: flex; gap: var(--gap); width: max-content; animation: marquee-left 18s linear infinite; }
              @keyframes marquee-left {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-12">
        <div className="rounded-md bg-navy-deep text-primary-foreground p-10 md:p-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold">Admissions open</div>
            <h2 className="font-display text-3xl md:text-4xl mt-3">Begin the next chapter of your medical career</h2>
          </div>
          <div className="flex md:justify-end gap-3 flex-wrap">
            <Link to="/contact-us" className="px-5 py-3 bg-gold text-navy-deep text-sm rounded-sm hover:opacity-90">Talk to admissions</Link>
            <Link to="/top-medical-courses" className="px-5 py-3 border border-primary-foreground/30 text-sm rounded-sm hover:border-gold">Browse programs</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
