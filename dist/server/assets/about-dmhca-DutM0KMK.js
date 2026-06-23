import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Award, BookOpen, Globe, Sparkles, Target, Users } from "lucide-react";
//#region src/routes/about-dmhca.tsx?tsr-split=component
function About() {
	const faculty = [
		"Dr Bhuvaneshwari.webp",
		"Dr Nirvana Ibrahim.webp",
		"Dr Pranesh Jain.webp",
		"Dr Rajeev Gupta.webp",
		"Dr. kartikeya.webp",
		"Dr. Mysara.webp",
		"Dr. Prabhdeep Kaur.webp"
	];
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsx("style", { children: `
        @keyframes marquee { from { transform: translateX(0%); } to { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 18s linear infinite; }
      ` }),
		/* @__PURE__ */ jsx("section", {
			className: "site-hero py-10 lg:py-14",
			children: /* @__PURE__ */ jsx("div", {
				className: "container-x relative z-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-3xl mx-auto text-center",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-4",
							children: [/* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4 text-gold" }), /* @__PURE__ */ jsx("span", {
								className: "text-xs uppercase tracking-[0.15em] text-gold font-medium",
								children: "Excellence in Medical Education"
							})]
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "font-display text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight",
							children: ["Transforming Healthcare ", /* @__PURE__ */ jsx("span", {
								className: "text-gold",
								children: "Education"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-base md:text-lg text-blue-100 leading-relaxed mb-6 max-w-2xl mx-auto",
							children: "Delhi Medical Health Care Academy empowers medical professionals with practical expertise and world-class education."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col sm:flex-row gap-3 justify-center",
							children: [/* @__PURE__ */ jsxs(Link, {
								to: "/top-medical-courses",
								className: "inline-flex items-center justify-center gap-2 px-6 py-2 bg-gold text-navy-deep rounded-lg hover:bg-yellow-400 transition font-semibold text-sm group",
								children: ["Explore Courses ", /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })]
							}), /* @__PURE__ */ jsx(Link, {
								to: "/contact-us",
								className: "inline-flex items-center justify-center gap-2 px-6 py-2 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition text-sm",
								children: "Join Us"
							})]
						})
					]
				})
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-white border-b border-border",
			children: /* @__PURE__ */ jsx("div", {
				className: "container-x py-10",
				children: /* @__PURE__ */ jsx("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
					children: [
						{
							icon: Users,
							stat: "42,000+",
							label: "Students Trained"
						},
						{
							icon: Globe,
							stat: "120+",
							label: "Countries"
						},
						{
							icon: Award,
							stat: "60+",
							label: "Expert Faculty"
						},
						{
							icon: BookOpen,
							stat: "75+",
							label: "Courses"
						}
					].map(({ icon: Icon, stat, label }) => /* @__PURE__ */ jsxs("div", {
						className: "text-center p-4 rounded-lg",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "flex justify-center mb-3",
								children: /* @__PURE__ */ jsx("div", {
									className: "p-2 bg-gradient-to-br from-gold/10 to-gold/5 rounded-lg",
									children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 text-gold" })
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "font-display text-2xl text-navy-deep font-bold mb-1",
								children: stat
							}),
							/* @__PURE__ */ jsx("div", {
								className: "text-sm text-muted-foreground",
								children: label
							})
						]
					}, label))
				})
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-gradient-to-b from-blue-50 to-white py-12 lg:py-16",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-3xl mx-auto text-center mb-8",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "font-display text-2xl lg:text-3xl text-navy-deep mb-2",
						children: "Our Mission & Vision"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: "Empowering healthcare professionals through excellence"
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "grid md:grid-cols-2 gap-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "bg-white border border-border rounded-xl p-6",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 mb-3",
							children: [/* @__PURE__ */ jsx("div", {
								className: "p-2 bg-gold/10 rounded-lg",
								children: /* @__PURE__ */ jsx(Target, { className: "w-5 h-5 text-gold" })
							}), /* @__PURE__ */ jsx("h3", {
								className: "font-display text-lg text-navy-deep",
								children: "Our Mission"
							})]
						}), /* @__PURE__ */ jsx("p", {
							className: "text-sm text-muted-foreground",
							children: "We provide competency-based education and practical training to improve clinical outcomes worldwide."
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "bg-gradient-to-br from-navy-deep to-blue-900 rounded-xl p-6",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 mb-3",
							children: [/* @__PURE__ */ jsx("div", {
								className: "p-2 bg-gold/20 rounded-lg",
								children: /* @__PURE__ */ jsx(Sparkles, { className: "w-5 h-5 text-gold" })
							}), /* @__PURE__ */ jsx("h3", {
								className: "font-display text-lg text-white",
								children: "Our Vision"
							})]
						}), /* @__PURE__ */ jsx("p", {
							className: "text-sm text-blue-100",
							children: "To be a global leader in medical education, delivering accessible, practice-focused programs."
						})]
					})]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-white py-10 lg:py-12",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-3xl mx-auto text-center mb-6",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "font-display text-2xl lg:text-3xl text-navy-deep mb-1",
						children: "Academic Leadership Members"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: "Our faculty and leaders guiding academic excellence"
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "overflow-hidden",
					children: /* @__PURE__ */ jsx("div", {
						className: "flex animate-marquee gap-6 items-center py-4",
						children: faculty.concat(faculty).map((file, idx) => {
							const name = file.replace(/\.[^/.]+$/, "");
							return /* @__PURE__ */ jsxs("div", {
								className: "flex-shrink-0 w-40 rounded-md overflow-hidden border border-border bg-white/5 shadow-sm",
								children: [/* @__PURE__ */ jsx("div", {
									className: "w-40 h-40 overflow-hidden",
									children: /* @__PURE__ */ jsx("img", {
										src: `/Faculty_images/${file}`,
										alt: name,
										className: "w-full h-full object-cover object-top"
									})
								}), /* @__PURE__ */ jsx("div", {
									className: "py-2 text-center bg-white/0",
									children: /* @__PURE__ */ jsx("div", {
										className: "text-sm text-navy-deep font-medium",
										children: name
									})
								})]
							}, idx);
						})
					})
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "site-hero py-12 lg:py-16",
			children: /* @__PURE__ */ jsx("div", {
				className: "container-x",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-3xl mx-auto text-center",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "font-display text-3xl lg:text-4xl text-white mb-3",
							children: "Ready to Transform Your Career?"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm text-blue-100 mb-6",
							children: "Join thousands of healthcare professionals who advanced their careers with DMHCA"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex gap-4 justify-center",
							children: [/* @__PURE__ */ jsx(Link, {
								to: "/contact-us",
								className: "px-5 py-3 bg-gold text-navy-deep rounded-lg",
								children: "Apply Now"
							}), /* @__PURE__ */ jsx(Link, {
								to: "/top-medical-courses",
								className: "px-5 py-3 bg-white/10 text-white rounded-lg",
								children: "Browse Courses"
							})]
						})
					]
				})
			})
		})
	] });
}
//#endregion
export { About as component };
