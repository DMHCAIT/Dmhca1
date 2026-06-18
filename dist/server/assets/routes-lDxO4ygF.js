import { n as courses, t as categories } from "./courses-CyFM0Sm6.js";
import { t as CourseCard } from "./CourseCard-CF0QIKkE.js";
import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowUpRight, ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
//#region src/routes/index.tsx?tsr-split=component
function Home() {
	const location = useLocation();
	const currentFmt = (() => {
		try {
			return new URLSearchParams(location.search || "").get("fmt");
		} catch (e) {
			return null;
		}
	})();
	const [reviewIndex, setReviewIndex] = useState(0);
	const [slide, setSlide] = useState(0);
	const slides = [
		{
			id: 0,
			program: "Fellowship",
			theme: "dark",
			heroImg: "/hero-doctor.webp",
			titleMain: "Medical mastery,",
			titleSub: "delivered with precision.",
			desc: "Develop your medical career with accessible online fellowships and hands-on training from leading universities."
		},
		{
			id: 1,
			program: "Certificate",
			theme: "light",
			heroImg: "https://images.unsplash.com/photo-1586773860416-3b8d0b5f2f7d?w=1600&h=900&fit=crop&q=80&auto=format",
			titleMain: "Upskill clinically,",
			titleSub: "fast and focused.",
			desc: "Short certificate courses designed to build practical skills and clinical confidence for busy clinicians."
		},
		{
			id: 2,
			program: "PG Diploma",
			theme: "muted",
			heroImg: "https://images.unsplash.com/photo-1580281657521-7b6f4b4b2f3b?w=1600&h=900&fit=crop&q=80&auto=format",
			titleMain: "Deep clinical training,",
			titleSub: "structured for practice.",
			desc: "Comprehensive PG Diploma programs blending theory and supervised clinical exposure over months."
		}
	];
	const [isPaused, setIsPaused] = useState(false);
	useEffect(() => {
		if (isPaused) return;
		const t = setInterval(() => setSlide((s) => (s + 1) % slides.length), 2e3);
		return () => clearInterval(t);
	}, [isPaused]);
	const featured = [...courses].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0)).slice(0, 6);
	const reviews = [
		{
			name: "Ahsan Habib",
			role: "Bangladesh",
			text: "Hi I am Dr.Jakaria from Bangladesh. I have completed the fellowship on endocrinology course from here. Their educational system is very good.. thanks to DMHCA.",
			image: "/courses/Ahsan-Habib-150x150.jpg"
		},
		{
			name: "Pragya Rajbhandari",
			role: "Jaipur",
			text: "My journey through the Pediatric Neurology Fellowship Program at your institute has been an incredibly rewarding experience. I've gained valuable clinical knowledge, hands-on training, and deepened my understanding of neurological conditions in children. Thank you for everything!",
			image: "/courses/Pragya-150x150.jpg"
		},
		{
			name: "Shahjad Khan",
			role: "Lucknow",
			text: "I recently completed the Fellowship in Diabetology at DMHCA, and it has been a transformative journey in my medical career. The program is well-structured, combining updated theoretical modules with excellent hands-on clinical training.",
			image: "/courses/sahjad-khan-150x150.jpg"
		},
		{
			name: "Rahul Jain",
			role: "Mumbai",
			text: "Very genuine and trustworthy platform for doing fellowship in various courses. Admin team and consultation team are very helpful, specially my guide from consultation team Mr Akshay Suryavanshi is very polite, cooperative and kind person. Thanks to DMHCA",
			image: "/courses/rahul-jain-150x150.jpg"
		},
		{
			name: "Moomin Ahmad Mir",
			role: "Kashmir",
			text: "I am truly grateful to Delhi Medical Health Care Academy for providing me the opportunity to pursue a Fellowship in Critical Care. The admission process was extremely smooth and hassle-free. The staff members are very helpful and supportive, always ready to guide students at every step. Thanks Guys…",
			image: "/courses/mommin-150x150.jpg"
		},
		{
			name: "Manisha Kumari",
			role: "New Delhi",
			text: "Highly recommend for the fellowship courses. I completed the fellowship in family medicine. It was a great learning experience. Very happy with the course content and faculty. Thank you team DMHCA",
			image: "/courses/manisha-kumari-150x150.jpg"
		}
	];
	const displayedReviews = reviews.slice(reviewIndex, reviewIndex + 3);
	const nextReviews = () => setReviewIndex((reviewIndex + 3) % reviews.length);
	const prevReviews = () => setReviewIndex((reviewIndex - 3 + reviews.length) % reviews.length);
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "site-hero",
			onMouseEnter: () => setIsPaused(true),
			onMouseLeave: () => setIsPaused(false),
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 opacity-30 pointer-events-none",
					style: { backgroundImage: "radial-gradient(circle at 20% 50%, rgba(203, 163, 91, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(203, 163, 91, 0.08) 0%, transparent 50%)" }
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" }),
				/* @__PURE__ */ jsx(motion.div, {
					className: "absolute inset-0 z-0 overflow-hidden pointer-events-none",
					initial: false,
					animate: { x: `-${slide * 100}%` },
					transition: {
						duration: 1,
						ease: "easeInOut"
					},
					children: /* @__PURE__ */ jsx("div", {
						className: "flex h-full w-[300%]",
						children: slides.map((s, i) => /* @__PURE__ */ jsxs("div", {
							className: "w-1/3 h-full flex-shrink-0 relative",
							children: [/* @__PURE__ */ jsx("img", {
								src: s.heroImg || "/hero-fallback.webp",
								alt: s.titleMain,
								className: "w-full h-full object-cover object-center brightness-75",
								onError: (e) => {
									e.currentTarget.src = "/hero-fallback.webp";
								}
							}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" })]
						}, i))
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "container-home py-6 md:py-8 grid lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10",
					children: [/* @__PURE__ */ jsxs(motion.div, {
						className: "lg:col-span-8 space-y-6 relative z-30",
						initial: {
							opacity: 0,
							x: -20
						},
						animate: {
							opacity: 1,
							x: 0
						},
						transition: {
							duration: .6,
							ease: "easeOut"
						},
						children: [
							/* @__PURE__ */ jsxs(motion.div, {
								className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm w-fit",
								initial: {
									opacity: 0,
									y: 10
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .5,
									delay: .1
								},
								children: [/* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-gold animate-pulse" }), /* @__PURE__ */ jsx("span", {
									className: "text-xs font-semibold text-gold uppercase tracking-wider",
									children: "Excellence in Medical Education"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ jsx("h1", {
									className: "font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight drop-shadow-lg",
									children: /* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsxs(motion.span, {
											className: "relative inline-block",
											initial: {
												opacity: 0,
												y: 10
											},
											animate: {
												opacity: 1,
												y: 0
											},
											transition: {
												duration: .25,
												delay: .1
											},
											children: [slides[slide].titleMain, /* @__PURE__ */ jsx("span", {
												className: "absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-gold via-gold/50 to-transparent rounded-full",
												style: { width: "100%" }
											})]
										}),
										/* @__PURE__ */ jsx("br", {}),
										/* @__PURE__ */ jsx(motion.span, {
											className: "italic font-normal text-gold",
											initial: {
												opacity: 0,
												y: 8
											},
											animate: {
												opacity: 1,
												y: 0
											},
											transition: {
												duration: .25,
												delay: .15
											},
											children: slides[slide].titleSub
										})
									] })
								}), /* @__PURE__ */ jsx(motion.p, {
									className: "text-base md:text-lg text-white/90 max-w-lg leading-relaxed drop-shadow",
									initial: { opacity: 0 },
									animate: { opacity: 1 },
									transition: {
										duration: .25,
										delay: .2
									},
									children: slides[slide].desc
								})]
							}),
							/* @__PURE__ */ jsxs(motion.div, {
								className: "flex flex-wrap gap-2.5",
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .6,
									delay: .5
								},
								children: [/* @__PURE__ */ jsxs(Link, {
									to: "/top-medical-courses",
									className: "group inline-flex items-center gap-2 px-6 py-2.5 bg-gold text-navy-deep text-sm font-medium hover:shadow-lg hover:shadow-gold/30 transition rounded-sm",
									children: ["Explore Courses ", /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" })]
								}), /* @__PURE__ */ jsxs("div", {
									className: "inline-flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(Link, {
										to: "/top-medical-courses",
										search: (() => {
											const s = new URLSearchParams(location.search || "");
											s.set("fmt", slides[slide].program);
											return Object.fromEntries(s.entries());
										})(),
										className: "px-4 py-2 rounded-sm border border-border text-sm text-navy-deep hover:bg-gold/10 transition bg-navy-deep text-primary-foreground",
										children: slides[slide].program
									}), /* @__PURE__ */ jsxs("div", {
										className: "ml-2 inline-flex items-center gap-1",
										children: [/* @__PURE__ */ jsx("button", {
											"aria-label": "Previous slide",
											onClick: () => setSlide((slide - 1 + slides.length) % slides.length),
											className: "p-2 rounded-sm border border-border text-sm",
											children: "‹"
										}), /* @__PURE__ */ jsx("button", {
											"aria-label": "Next slide",
											onClick: () => setSlide((slide + 1) % slides.length),
											className: "p-2 rounded-sm border border-border text-sm",
											children: "›"
										})]
									})]
								})]
							}),
							/* @__PURE__ */ jsxs(motion.div, {
								className: "pt-1",
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								transition: {
									duration: .6,
									delay: .6
								},
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-xs text-gold/70 uppercase tracking-widest mb-2 font-semibold",
									children: "Trending specialties"
								}), /* @__PURE__ */ jsx("div", {
									className: "flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-medium",
									children: [
										"radiology",
										"dermatology",
										"obs-gynae",
										"cardiology",
										"endocrinology"
									].map((s, i) => /* @__PURE__ */ jsx(motion.div, {
										initial: {
											opacity: 0,
											x: -10
										},
										animate: {
											opacity: 1,
											x: 0
										},
										transition: {
											duration: .4,
											delay: .7 + i * .05
										},
										children: /* @__PURE__ */ jsx(Link, {
											to: "/top-medical-courses/",
											search: (() => {
												const ss = new URLSearchParams(location.search || "");
												ss.set("cat", s);
												return Object.fromEntries(ss.entries());
											})(),
											className: "text-white hover:text-gold transition",
											children: categories.find((c) => c.slug === s)?.name
										})
									}, s))
								})]
							}),
							currentFmt ? /* @__PURE__ */ jsx("div", {
								className: "mt-4",
								children: /* @__PURE__ */ jsx(Link, {
									to: "/top-medical-courses",
									search: (() => {
										const s = new URLSearchParams(location.search || "");
										if (currentFmt) s.set("fmt", currentFmt);
										return Object.fromEntries(s.entries());
									})(),
									className: "inline-block",
									children: /* @__PURE__ */ jsxs("span", {
										className: "inline-block bg-navy-deep text-primary-foreground px-3 py-1 rounded-full text-sm hover:opacity-95",
										children: ["Showing: ", currentFmt]
									})
								})
							}) : null
						]
					}), /* @__PURE__ */ jsx(motion.div, {
						className: "lg:col-span-4 relative",
						initial: {
							opacity: 0,
							x: 20
						},
						animate: {
							opacity: 1,
							x: 0
						},
						transition: {
							duration: .6,
							delay: .2
						},
						children: /* @__PURE__ */ jsxs("div", {
							className: "relative aspect-[4/5] max-w-[380px] lg:max-w-none mx-auto z-20",
							children: [
								/* @__PURE__ */ jsx(motion.div, {
									className: "absolute inset-0 translate-x-2 translate-y-2 border-2 border-gold/40 rounded-sm",
									initial: { opacity: 0 },
									animate: { opacity: 1 },
									transition: {
										duration: .6,
										delay: .4
									}
								}),
								/* @__PURE__ */ jsxs(motion.div, {
									className: "relative w-full h-full rounded-sm overflow-hidden shadow-2xl bg-navy-deep",
									initial: {
										opacity: 0,
										scale: .95
									},
									animate: {
										opacity: 1,
										scale: 1
									},
									transition: {
										duration: .6,
										delay: .3
									},
									whileHover: { scale: 1.02 },
									children: [/* @__PURE__ */ jsx("img", {
										src: slides[slide].heroImg,
										alt: "DMHCA faculty",
										className: "w-full h-full object-cover object-top"
									}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" })]
								}),
								/* @__PURE__ */ jsxs(motion.div, {
									className: "absolute -left-3 sm:-left-6 bottom-6 bg-white p-4 shadow-2xl border-l-2 border-gold max-w-[220px] z-50 rounded-md",
									initial: {
										opacity: 0,
										y: 20
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: {
										duration: .6,
										delay: .6
									},
									whileHover: { y: -5 },
									children: [
										/* @__PURE__ */ jsx("p", {
											className: "text-[10px] font-bold uppercase tracking-widest text-navy-deep mb-1",
											children: "Active Learners"
										}),
										/* @__PURE__ */ jsxs("p", {
											className: "font-display text-2xl text-navy-deep font-bold",
											children: ["42,000", /* @__PURE__ */ jsx("span", {
												className: "text-gold",
												children: "+"
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "mt-2 flex items-center gap-2 text-sm text-navy-deep",
											children: [/* @__PURE__ */ jsx(Star, { className: "w-4 h-4 fill-gold text-gold" }), /* @__PURE__ */ jsx("span", {
												className: "ml-1 font-medium",
												children: "4.8 / 5 alumni rating"
											})]
										})
									]
								})
							]
						})
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" })
			]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-hero-dark text-on-hero-dark",
			children: /* @__PURE__ */ jsx("div", {
				className: "container-home py-8 grid grid-cols-2 md:grid-cols-4 gap-6",
				children: [
					{
						k: courses.length + "+",
						v: "Specialised programs"
					},
					{
						k: "60+",
						v: "Faculty worldwide"
					},
					{
						k: categories.length.toString(),
						v: "Clinical specialties"
					},
					{
						k: "120+",
						v: "Countries reached"
					}
				].map((s) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "font-display text-3xl text-gold",
					children: s.k
				}), /* @__PURE__ */ jsx("div", {
					className: "text-xs uppercase tracking-[0.15em] text-primary-foreground/70 mt-1",
					children: s.v
				})] }, s.v))
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-hero-light text-on-hero-light py-12",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-home",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-end justify-between flex-wrap gap-4 mb-10",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "text-xs uppercase tracking-[0.25em] text-navy-deep gold-rule",
						children: "Specialties"
					}), /* @__PURE__ */ jsx("h2", {
						className: "font-display text-3xl md:text-4xl text-navy-deep mt-3",
						children: "Find your discipline"
					})] }), /* @__PURE__ */ jsx(Link, {
						to: "/top-medical-courses",
						className: "text-sm text-navy-deep hover:text-gold",
						children: "All categories →"
					})]
				}), /* @__PURE__ */ jsx(motion.div, {
					className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
					initial: "hidden",
					whileInView: "visible",
					viewport: {
						once: true,
						amount: .2
					},
					variants: {
						hidden: { opacity: 0 },
						visible: {
							opacity: 1,
							transition: {
								staggerChildren: .12,
								delayChildren: .1
							}
						}
					},
					children: [
						"radiology",
						"dermatology",
						"obs-gynae",
						"cardiology",
						"emergency",
						"orthopedics",
						"medicine",
						"oncology"
					].map((slug) => {
						const category = categories.find((c) => c.slug === slug);
						if (!category) return null;
						const specialtyColors = {
							"radiology": "from-blue-900 to-blue-700",
							"dermatology": "from-pink-900 to-pink-700",
							"obs-gynae": "from-purple-900 to-purple-700",
							"cardiology": "from-red-900 to-red-700",
							"emergency": "from-orange-900 to-orange-700",
							"orthopedics": "from-amber-900 to-amber-700",
							"medicine": "from-green-900 to-green-700",
							"oncology": "from-indigo-900 to-indigo-700"
						};
						const imageUrl = {
							"radiology": "https://images.unsplash.com/photo-1631217314985-abc2ced88d60?w=800&h=600&fit=crop&q=80&auto=format",
							"dermatology": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&q=80&auto=format",
							"obs-gynae": "https://images.unsplash.com/photo-1584308666744-24d5f400f6f1?w=800&h=600&fit=crop&q=80&auto=format",
							"cardiology": "https://images.unsplash.com/photo-1576091160399-7c2172fcd7a7?w=800&h=600&fit=crop&q=80&auto=format",
							"emergency": "https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=800&h=600&fit=crop&q=80&auto=format",
							"orthopedics": "https://images.unsplash.com/photo-1576091160681-112b5879f967?w=800&h=600&fit=crop&q=80&auto=format",
							"medicine": "https://images.unsplash.com/photo-1578496781514-637d1afc2ba9?w=800&h=600&fit=crop&q=80&auto=format",
							"oncology": "https://images.unsplash.com/photo-1559839734945-08b6332c0ff3?w=800&h=600&fit=crop&q=80&auto=format"
						}[slug] || "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&q=90";
						return /* @__PURE__ */ jsx(motion.div, {
							variants: {
								hidden: {
									opacity: 0,
									y: 30
								},
								visible: {
									opacity: 1,
									y: 0,
									transition: {
										type: "spring",
										stiffness: 100,
										damping: 20
									}
								}
							},
							children: /* @__PURE__ */ jsxs(Link, {
								to: "/top-medical-courses/",
								search: { cat: slug },
								className: `group relative overflow-hidden rounded-2xl aspect-video md:aspect-square h-auto block bg-gradient-to-br ${specialtyColors[slug]}`,
								children: [
									/* @__PURE__ */ jsx(motion.img, {
										src: imageUrl,
										alt: category.name,
										className: "absolute inset-0 w-full h-full object-cover group-hover:brightness-110 transition-all duration-500",
										whileHover: { scale: 1.05 },
										transition: { duration: .6 }
									}),
									/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-300" }),
									/* @__PURE__ */ jsx(motion.div, {
										className: "absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10",
										initial: {
											opacity: 0,
											y: 10
										},
										whileInView: {
											opacity: 1,
											y: 0
										},
										transition: { duration: .4 },
										children: /* @__PURE__ */ jsx("h3", {
											className: "font-display text-lg md:text-2xl text-white leading-tight group-hover:text-gold transition",
											children: category.name
										})
									})
								]
							})
						}, slug);
					})
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-hero-dark text-on-hero-dark py-12",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-home",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-end justify-between flex-wrap gap-4 mb-10",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "text-xs uppercase tracking-[0.25em] text-on-hero-dark/80 gold-rule",
						children: "Top rated"
					}), /* @__PURE__ */ jsx("h2", {
						className: "font-display text-3xl md:text-4xl text-on-hero-dark mt-3",
						children: "Featured programs"
					})] }), /* @__PURE__ */ jsx(Link, {
						to: "/top-medical-courses",
						className: "text-sm text-on-hero-dark/90 hover:text-gold",
						children: "View all courses →"
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
					children: featured.map((c) => /* @__PURE__ */ jsx(CourseCard, { course: c }, c.slug))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-hero-light text-on-hero-light py-12",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-home",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "text-center mb-12",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "text-xs uppercase tracking-[0.25em] text-navy-deep gold-rule inline-block",
							children: "Academic alliances"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "font-display text-3xl md:text-4xl text-navy-deep mt-3",
							children: "Academic partners"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground mt-2 max-w-2xl mx-auto text-sm",
							children: "DMHCA programs are delivered in academic collaboration with internationally recognised universities and medical institutions."
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "mb-16",
					children: /* @__PURE__ */ jsxs("div", {
						className: "relative",
						children: [/* @__PURE__ */ jsx("div", {
							className: "mx-auto max-w-6xl py-6",
							children: /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 items-center",
								children: [
									"ACTD-2.webp",
									"btu_hero_logo.webp",
									"duke logo.webp",
									"IBMP LOGO .webp",
									"logo-srdu.webp"
								].map((file) => /* @__PURE__ */ jsx("div", {
									className: "rounded-xl bg-white/80 dark:bg-slate-800/60 p-4 flex items-center justify-center shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1",
									children: /* @__PURE__ */ jsx("div", {
										className: "w-48 h-32 md:w-56 md:h-36 lg:w-64 lg:h-40 flex items-center justify-center bg-white rounded-lg",
										children: /* @__PURE__ */ jsx("img", {
											src: `/ACADEMIC PARTNERS/${file}`,
											alt: file,
											className: "max-w-full max-h-full object-contain"
										})
									})
								}, file))
							})
						}), /* @__PURE__ */ jsx("style", {
							jsx: true,
							children: `
              .partners-carousel { background: linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.2)); border-radius: 12px; }
              .scrollbar-hide::-webkit-scrollbar { display: none; }
              .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            `
						})]
					})
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "site-hero",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x py-8",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mb-6",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "text-xs uppercase tracking-[0.25em] text-primary-foreground gold-rule",
							children: "Alumni voices"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "font-display text-3xl md:text-4xl text-primary-foreground mt-3",
							children: "Loved by Doctors Worldwide"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-primary-foreground/85 mt-2 text-sm",
							children: "2,100+ verified reviews from practicing physicians"
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3 mb-6",
					children: [
						/* @__PURE__ */ jsx("button", {
							onClick: prevReviews,
							className: "p-2 rounded-md border border-border hover:bg-secondary transition-colors",
							"aria-label": "Previous reviews",
							children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-5 h-5 text-primary-foreground" })
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex-1 grid md:grid-cols-3 gap-4",
							children: displayedReviews.map((r) => /* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									x: 20
								},
								animate: {
									opacity: 1,
									x: 0
								},
								transition: { duration: .4 },
								className: "bg-white/6 border border-white/10 rounded-md p-6 flex flex-col shadow-xl backdrop-blur-sm",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "mb-3",
										children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
											className: "text-sm font-medium text-primary-foreground",
											children: r.name
										}), /* @__PURE__ */ jsx("div", {
											className: "text-xs text-primary-foreground/80",
											children: r.role
										})] })
									}),
									/* @__PURE__ */ jsx(Quote, { className: "w-6 h-6 text-gold/70" }),
									/* @__PURE__ */ jsx("p", {
										className: "text-sm text-primary-foreground/90 mt-2 leading-relaxed flex-1",
										children: r.text
									}),
									/* @__PURE__ */ jsx("div", {
										className: "flex items-center gap-1 text-gold mt-3",
										children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-3.5 h-3.5 fill-gold" }, i))
									})
								]
							}, r.name))
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: nextReviews,
							className: "p-2 rounded-md border border-border hover:bg-secondary transition-colors",
							"aria-label": "Next reviews",
							children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-5 h-5 text-primary-foreground" })
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-white/60 py-8",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-home",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "text-center mb-6",
					children: [/* @__PURE__ */ jsx("div", {
						className: "text-xs uppercase tracking-[0.25em] text-navy-deep gold-rule inline-block",
						children: "Training partners"
					}), /* @__PURE__ */ jsx("h2", {
						className: "font-display text-2xl md:text-3xl text-navy-deep mt-2",
						children: "Our training partners"
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "overflow-hidden",
					children: [/* @__PURE__ */ jsx("div", {
						className: "marquee",
						children: /* @__PURE__ */ jsx("div", {
							className: "marquee__inner flex gap-8 items-center",
							children: (() => {
								const unique = Array.from(new Set([
									"1678526353_7823551bcf91d278e567.webp",
									"images (1).webp",
									"images.webp",
									"KIMS_Main_Logo_Col-01.webp",
									"Logo-medicover.webp",
									"logo.webp",
									"Noora-Logo-01.webp",
									"skinfinity-skin-hair-laser-and-aesthetic-clinic-noida-625ce89ba1d3f.webp",
									"Untitled-design.webp",
									"VPH_New-Logo-1024x462.webp"
								]));
								return unique.concat(unique).map((file, idx) => /* @__PURE__ */ jsx("div", {
									className: "flex-shrink-0 w-48 h-24 md:w-56 md:h-28 lg:w-64 lg:h-32 flex items-center justify-center bg-card rounded-lg p-3 shadow-sm",
									children: /* @__PURE__ */ jsx("img", {
										src: `/Training partners/${file}`,
										alt: file,
										className: "max-w-full max-h-full object-contain"
									})
								}, idx));
							})()
						})
					}), /* @__PURE__ */ jsx("style", {
						jsx: true,
						children: `
              .marquee { --gap: 2rem; }
              .marquee__inner { display: flex; gap: var(--gap); width: max-content; animation: marquee-left 18s linear infinite; }
              @keyframes marquee-left {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
              }
            `
					})]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "container-x py-12",
			children: /* @__PURE__ */ jsxs("div", {
				className: "rounded-md bg-navy-deep text-primary-foreground p-10 md:p-14 grid md:grid-cols-2 gap-8 items-center",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "text-xs uppercase tracking-[0.25em] text-gold",
					children: "Admissions open"
				}), /* @__PURE__ */ jsx("h2", {
					className: "font-display text-3xl md:text-4xl mt-3",
					children: "Begin the next chapter of your medical career"
				})] }), /* @__PURE__ */ jsxs("div", {
					className: "flex md:justify-end gap-3 flex-wrap",
					children: [/* @__PURE__ */ jsx(Link, {
						to: "/contact-us",
						className: "px-5 py-3 bg-gold text-navy-deep text-sm rounded-sm hover:opacity-90",
						children: "Talk to admissions"
					}), /* @__PURE__ */ jsx(Link, {
						to: "/top-medical-courses",
						className: "px-5 py-3 border border-primary-foreground/30 text-sm rounded-sm hover:border-gold",
						children: "Browse programs"
					})]
				})]
			})
		})
	] });
}
//#endregion
export { Home as component };
