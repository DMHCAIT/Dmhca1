import { a as getCategory, i as formatINR, s as relatedCourses } from "./courses-CyFM0Sm6.js";
import { t as Route } from "./courses._slug-RKDdukog.js";
import "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowLeft, ArrowUpRight, Award, BookOpen, Clock, FileCheck, Globe, GraduationCap, Star } from "lucide-react";
//#region src/components/site/CourseDetail.tsx
function CourseDetail({ course, primaryCat, ptype, gstAmount, totalPrice, formatINR, related }) {
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "site-hero",
			children: [
				/* @__PURE__ */ jsx("img", {
					src: course.image,
					alt: "",
					"aria-hidden": true,
					referrerPolicy: "no-referrer",
					className: "absolute inset-0 w-full h-full object-cover opacity-15"
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-blue-900/90 to-navy-deep/85" }),
				/* @__PURE__ */ jsxs("div", {
					className: "relative container-x py-6 lg:py-8",
					children: [
						/* @__PURE__ */ jsxs(Link, {
							to: "/course-category/$slug",
							params: { slug: primaryCat.slug },
							className: "inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.22em] text-gold hover:opacity-80",
							children: [
								/* @__PURE__ */ jsx(ArrowLeft, { className: "w-3.5 h-3.5" }),
								" ",
								primaryCat.name
							]
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "font-display text-3xl md:text-4xl mt-3 max-w-3xl leading-tight",
							children: course.title
						}),
						course.overview && /* @__PURE__ */ jsx(HeroOverviewText, { text: course.overview }),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-primary-foreground/85",
							children: [
								course.rating && /* @__PURE__ */ jsxs("span", {
									className: "flex items-center gap-1.5",
									children: [
										/* @__PURE__ */ jsx(Star, { className: "w-4 h-4 fill-gold text-gold" }),
										" ",
										course.rating,
										" ",
										/* @__PURE__ */ jsxs("span", {
											className: "text-primary-foreground/55",
											children: [
												"(",
												course.reviewCount,
												" reviews)"
											]
										})
									]
								}),
								course.lessons != null && /* @__PURE__ */ jsxs("span", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4 text-gold" }),
										" ",
										course.lessons,
										" lessons"
									]
								}),
								course.weeks != null && /* @__PURE__ */ jsxs("span", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 text-gold" }),
										" ",
										course.weeks,
										" weeks"
									]
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ jsx(Award, { className: "w-4 h-4 text-gold" }),
										" ",
										ptype
									]
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "capitalize flex items-center gap-2",
									children: [
										/* @__PURE__ */ jsx(GraduationCap, { className: "w-4 h-4 text-gold" }),
										" ",
										course.level
									]
								})
							]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ jsx("nav", {
			className: "sticky top-16 z-30 bg-background/95 backdrop-blur border-b border-border",
			children: /* @__PURE__ */ jsx("div", {
				className: "container-x flex gap-6 overflow-x-auto text-sm",
				children: [
					"overview",
					"curriculum",
					"instructor",
					"faqs"
				].map((id) => /* @__PURE__ */ jsx("a", {
					href: `#${id}`,
					className: "py-3.5 capitalize text-muted-foreground hover:text-navy-deep border-b-2 border-transparent hover:border-gold transition whitespace-nowrap",
					children: id
				}, id))
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-x py-12 lg:py-14 grid lg:grid-cols-3 gap-10",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "lg:col-span-2 space-y-14",
				children: [
					/* @__PURE__ */ jsxs("div", {
						id: "overview",
						children: [
							/* @__PURE__ */ jsx("h2", {
								className: "font-display text-2xl text-navy-deep",
								children: "Course Overview"
							}),
							course.overview && /* @__PURE__ */ jsx("p", {
								className: "mt-3 text-muted-foreground leading-relaxed",
								children: course.overview
							}),
							course.learn.length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("h3", {
								className: "font-display text-xl text-navy-deep mt-8",
								children: "What you’ll learn"
							}), /* @__PURE__ */ jsx("div", {
								className: "mt-4 grid sm:grid-cols-2 gap-4",
								children: course.learn.map((o, idx) => /* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ jsx("div", {
										className: "mt-1",
										children: /* @__PURE__ */ jsx("span", { className: "inline-flex items-center justify-center w-3 h-3 rounded-full bg-gold" })
									}), /* @__PURE__ */ jsx("div", {
										className: "text-sm text-navy-deep leading-relaxed",
										children: o
									})]
								}, idx))
							})] }),
							course.requirements.length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("h3", {
								className: "font-display text-xl text-navy-deep mt-8",
								children: "Requirements"
							}), /* @__PURE__ */ jsx("ul", {
								className: "mt-3 space-y-1.5 list-disc list-inside text-sm text-muted-foreground marker:text-gold",
								children: course.requirements.map((r) => /* @__PURE__ */ jsx("li", { children: r }, r))
							})] })
						]
					}),
					course.modules.length > 0 && /* @__PURE__ */ jsxs("div", {
						id: "curriculum",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-end justify-between flex-wrap gap-2",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "font-display text-2xl text-navy-deep",
								children: "Curriculum"
							}), /* @__PURE__ */ jsxs("div", {
								className: "text-xs text-muted-foreground",
								children: [
									course.modules.length,
									" Sections · ",
									course.lessons ?? "—",
									" Lessons · ",
									course.weeks ?? "—",
									" Weeks"
								]
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-4 border border-border rounded-md overflow-hidden divide-y divide-border bg-card",
							children: course.modules.map((m, i) => /* @__PURE__ */ jsxs("details", {
								className: "border-b border-border bg-card",
								open: i === 0,
								children: [/* @__PURE__ */ jsxs("summary", {
									className: "cursor-pointer px-4 py-3 flex items-center justify-between font-medium text-navy-deep",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ jsx("div", {
											className: "text-sm text-muted-foreground w-6",
											children: String(i + 1).padStart(2, "0")
										}), /* @__PURE__ */ jsx("div", { children: m.replace(/^Module \d+:\s*/, "") })]
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ jsx("div", {
											className: "text-sm text-muted-foreground",
											children: Array.isArray(course.moduleDetails?.[i]) ? course.moduleDetails[i].length : "—"
										}), /* @__PURE__ */ jsx("svg", {
											xmlns: "http://www.w3.org/2000/svg",
											className: "w-4 h-4 text-muted-foreground",
											fill: "none",
											viewBox: "0 0 24 24",
											stroke: "currentColor",
											children: /* @__PURE__ */ jsx("path", {
												strokeLinecap: "round",
												strokeLinejoin: "round",
												strokeWidth: 2,
												d: "M19 11a7 7 0 10-14 0v3a2 2 0 002 2h10a2 2 0 002-2v-3z"
											})
										})]
									})]
								}), /* @__PURE__ */ jsx("div", {
									className: "px-4 pb-4",
									children: course.moduleDetails && course.moduleDetails[i] ? Array.isArray(course.moduleDetails[i]) ? /* @__PURE__ */ jsx("ul", {
										className: "divide-y divide-border bg-white rounded-md overflow-hidden border border-border mt-2",
										children: course.moduleDetails[i].map((lesson, li) => /* @__PURE__ */ jsxs("li", {
											className: "flex items-center justify-between px-4 py-3 text-sm text-muted-foreground",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ jsx("svg", {
													xmlns: "http://www.w3.org/2000/svg",
													className: "w-4 h-4 text-gold",
													viewBox: "0 0 24 24",
													fill: "none",
													stroke: "currentColor",
													children: /* @__PURE__ */ jsx("path", {
														strokeLinecap: "round",
														strokeLinejoin: "round",
														strokeWidth: 2,
														d: "M9 12h6M9 16h6M9 8h6"
													})
												}), /* @__PURE__ */ jsx("span", {
													className: "text-sm text-navy-deep",
													children: lesson
												})]
											}), /* @__PURE__ */ jsxs("svg", {
												xmlns: "http://www.w3.org/2000/svg",
												className: "w-4 h-4 text-muted-foreground",
												fill: "none",
												viewBox: "0 0 24 24",
												stroke: "currentColor",
												children: [/* @__PURE__ */ jsx("path", {
													strokeLinecap: "round",
													strokeLinejoin: "round",
													strokeWidth: 2,
													d: "M15 11V7a3 3 0 10-6 0v4"
												}), /* @__PURE__ */ jsx("rect", {
													x: "3",
													y: "11",
													width: "18",
													height: "11",
													rx: "2",
													ry: "2"
												})]
											})]
										}, li))
									}) : /* @__PURE__ */ jsx("div", {
										className: "text-sm text-muted-foreground",
										children: course.moduleDetails[i]
									}) : /* @__PURE__ */ jsx("div", {
										className: "text-sm text-muted-foreground",
										children: "Module description and learning objectives."
									})
								})]
							}, m + i))
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						id: "instructor",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "font-display text-2xl text-navy-deep",
							children: "Instructors"
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-4 grid sm:grid-cols-2 gap-4",
							children: (course.trainers && course.trainers.length > 0 ? course.trainers : [{
								name: "DMHCA Faculty",
								title: "Expert Faculty",
								bio: "Experienced clinicians and educators."
							}]).map((trainer, idx) => /* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-4 p-4 border border-border rounded-md bg-card",
								children: [/* @__PURE__ */ jsx("div", {
									className: "w-16 h-16 rounded-full bg-white flex items-center justify-center flex-shrink-0 overflow-hidden border border-gray-200",
									children: /* @__PURE__ */ jsx("img", {
										src: trainer.image || "/logo.webp",
										alt: trainer.name,
										className: "w-11 h-11 object-contain"
									})
								}), /* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("div", {
										className: "font-display text-lg text-navy-deep",
										children: trainer.name
									}),
									trainer.title && /* @__PURE__ */ jsx("div", {
										className: "text-sm text-gold font-medium",
										children: trainer.title
									}),
									trainer.bio && /* @__PURE__ */ jsx("div", {
										className: "text-xs text-muted-foreground mt-2 leading-relaxed",
										children: trainer.bio
									})
								] })]
							}, idx))
						})]
					}),
					course.faqs.length > 0 && /* @__PURE__ */ jsxs("div", {
						id: "faqs",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "font-display text-2xl text-navy-deep",
							children: "Frequently Asked Questions"
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-4 border border-border rounded-md divide-y divide-border bg-card",
							children: course.faqs.map((f, i) => /* @__PURE__ */ jsxs("details", {
								className: "p-4",
								open: i === 0,
								children: [/* @__PURE__ */ jsx("summary", {
									className: "cursor-pointer font-medium text-navy-deep",
									children: f.q
								}), /* @__PURE__ */ jsx("div", {
									className: "mt-2 text-sm text-muted-foreground",
									children: f.a
								})]
							}, i))
						})]
					})
				]
			}), /* @__PURE__ */ jsx("aside", {
				className: "lg:col-span-1",
				children: /* @__PURE__ */ jsxs("div", {
					className: "sticky top-32 bg-card border border-border rounded-md overflow-hidden",
					children: [/* @__PURE__ */ jsx("div", {
						className: "aspect-[5/3] bg-navy-deep relative",
						children: /* @__PURE__ */ jsx("img", {
							src: course.image,
							alt: "",
							referrerPolicy: "no-referrer",
							className: "absolute inset-0 w-full h-full object-cover"
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "p-6",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-3 mb-6 pb-6 border-b border-border",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "text-xs uppercase tracking-widest text-muted-foreground",
										children: "Course Price"
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-baseline gap-2",
										children: [/* @__PURE__ */ jsx("div", {
											className: "text-3xl font-semibold text-navy-deep",
											children: formatINR(course.priceINR)
										}), /* @__PURE__ */ jsx("div", {
											className: "text-sm text-muted-foreground",
											children: "+ GST"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "text-xs text-muted-foreground pt-2",
										children: ["Total: ", formatINR(totalPrice)]
									})
								]
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/contact-us",
								className: "w-full inline-flex justify-center items-center px-5 py-3 bg-navy-deep text-primary-foreground text-sm rounded-sm hover:bg-navy",
								children: "Apply Now"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "tel:+917042011441",
								className: "mt-2 w-full inline-flex justify-center items-center px-5 py-3 border border-border text-navy-deep text-sm rounded-sm hover:border-navy-deep",
								children: "Book a Demo Class"
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-6 pt-6 border-t border-border",
								children: /* @__PURE__ */ jsxs("div", {
									className: "space-y-2.5",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-3",
											children: [
												/* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 text-gold flex-shrink-0" }),
												/* @__PURE__ */ jsx("div", {
													className: "text-xs uppercase tracking-widest text-muted-foreground min-w-28",
													children: "Duration"
												}),
												/* @__PURE__ */ jsx("div", {
													className: "font-medium text-navy-deep",
													children: course.meta?.duration || course.weeks + " weeks"
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-3",
											children: [
												/* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4 text-gold flex-shrink-0" }),
												/* @__PURE__ */ jsx("div", {
													className: "text-xs uppercase tracking-widest text-muted-foreground min-w-28",
													children: "Lessons"
												}),
												/* @__PURE__ */ jsx("div", {
													className: "font-medium text-navy-deep",
													children: course.lessons ?? "—"
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-3",
											children: [
												/* @__PURE__ */ jsx(Globe, { className: "w-4 h-4 text-gold flex-shrink-0" }),
												/* @__PURE__ */ jsx("div", {
													className: "text-xs uppercase tracking-widest text-muted-foreground min-w-28",
													children: "Language"
												}),
												/* @__PURE__ */ jsx("div", {
													className: "font-medium text-navy-deep",
													children: course.meta?.language || "English"
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-3",
											children: [
												/* @__PURE__ */ jsx(GraduationCap, { className: "w-4 h-4 text-gold flex-shrink-0" }),
												/* @__PURE__ */ jsx("div", {
													className: "text-xs uppercase tracking-widest text-muted-foreground min-w-28",
													children: "Program Type"
												}),
												/* @__PURE__ */ jsx("div", {
													className: "font-medium text-navy-deep",
													children: ptype
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-3",
											children: [
												/* @__PURE__ */ jsx(FileCheck, { className: "w-4 h-4 text-gold flex-shrink-0" }),
												/* @__PURE__ */ jsx("div", {
													className: "text-xs uppercase tracking-widest text-muted-foreground min-w-28",
													children: "Certificate"
												}),
												/* @__PURE__ */ jsx("div", {
													className: "font-medium text-navy-deep",
													children: course.meta?.certificate === "no" ? "No" : "Yes"
												})
											]
										})
									]
								})
							})
						]
					})]
				})
			})]
		}),
		related.length > 0 && /* @__PURE__ */ jsx("section", {
			className: "bg-secondary/40 border-t border-border",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x py-16",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "text-xs uppercase tracking-[0.25em] text-navy-deep gold-rule",
						children: "Related programs"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "font-display text-3xl text-navy-deep mt-3 mb-8",
						children: "Related Courses"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
						children: related.map((r) => {
							const relCat = primaryCat;
							const relProgramType = r.meta?.skill_level || (r.title.toLowerCase().includes("fellowship") ? "Fellowship" : r.title.toLowerCase().includes("pg diploma") ? "PG Diploma" : "Certificate");
							return /* @__PURE__ */ jsxs(Link, {
								to: "/courses/$slug",
								params: { slug: r.slug },
								className: "group block bg-card border border-border rounded-md overflow-hidden hover:border-navy-deep/40 hover:shadow-[0_24px_50px_-30px_rgba(15,27,61,0.45)] transition",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "aspect-[5/3] relative overflow-hidden bg-navy-deep",
									children: [
										/* @__PURE__ */ jsx("img", {
											src: r.image,
											alt: r.title,
											loading: "lazy",
											referrerPolicy: "no-referrer",
											className: "absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700",
											onError: (e) => {
												e.currentTarget.style.display = "none";
											}
										}),
										/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/30 to-transparent" }),
										/* @__PURE__ */ jsxs("div", {
											className: "absolute top-3 left-3 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] px-2 py-1 bg-primary-foreground/15 text-primary-foreground rounded-sm backdrop-blur",
											children: [
												/* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-gold" }),
												" ",
												relProgramType
											]
										}),
										r.rating && /* @__PURE__ */ jsxs("div", {
											className: "absolute top-3 right-3 inline-flex items-center gap-1 text-[11px] px-2 py-1 bg-primary-foreground/95 text-navy-deep rounded-sm",
											children: [
												/* @__PURE__ */ jsx(Star, { className: "w-3 h-3 fill-gold text-gold" }),
												" ",
												r.rating,
												" ",
												/* @__PURE__ */ jsxs("span", {
													className: "text-muted-foreground",
													children: [
														"(",
														r.reviewCount,
														")"
													]
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "absolute bottom-3 left-3 right-3",
											children: [/* @__PURE__ */ jsx("div", {
												className: "text-[10px] uppercase tracking-[0.2em] text-gold/90 mb-1",
												children: relCat?.name
											}), /* @__PURE__ */ jsx("div", {
												className: "font-display text-primary-foreground text-lg leading-tight line-clamp-2",
												children: r.title
											})]
										})
									]
								}), /* @__PURE__ */ jsxs("div", {
									className: "p-5",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-4 text-xs text-muted-foreground",
										children: [
											r.lessons != null && /* @__PURE__ */ jsxs("span", {
												className: "flex items-center gap-1.5",
												children: [
													/* @__PURE__ */ jsx(BookOpen, { className: "w-3.5 h-3.5" }),
													" ",
													r.lessons,
													" lessons"
												]
											}),
											r.weeks != null && /* @__PURE__ */ jsxs("span", {
												className: "flex items-center gap-1.5",
												children: [
													/* @__PURE__ */ jsx(Clock, { className: "w-3.5 h-3.5" }),
													" ",
													r.weeks,
													" week"
												]
											}),
											/* @__PURE__ */ jsx("span", {
												className: "capitalize",
												children: r.level
											})
										]
									}), /* @__PURE__ */ jsxs("div", {
										className: "mt-4 flex items-end justify-between",
										children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
											className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
											children: "Tuition"
										}), /* @__PURE__ */ jsx("div", {
											className: "text-lg font-semibold text-navy-deep tracking-tight",
											children: formatINR(r.priceINR)
										})] }), /* @__PURE__ */ jsxs("span", {
											className: "inline-flex items-center gap-1 text-sm text-navy-deep group-hover:text-gold transition",
											children: ["View ", /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4" })]
										})]
									})]
								})]
							}, r.slug);
						})
					})
				]
			})
		})
	] });
}
function HeroOverviewText({ text }) {
	let summary = text;
	const firstPeriod = text.indexOf(".");
	if (firstPeriod !== -1 && firstPeriod < 140) {
		summary = text.slice(0, firstPeriod + 1);
		const secondPeriod = text.indexOf(".", firstPeriod + 1);
		if (secondPeriod !== -1 && secondPeriod < 220) summary = text.slice(0, secondPeriod + 1);
	} else if (text.length > 140) {
		const cut = text.slice(0, 140);
		const lastSpace = cut.lastIndexOf(" ");
		summary = (lastSpace > 80 ? cut.slice(0, lastSpace) : cut) + "…";
	}
	return /* @__PURE__ */ jsx("div", {
		className: "max-w-2xl",
		children: /* @__PURE__ */ jsx("p", {
			className: "text-primary-foreground/85 text-sm md:text-base",
			style: {
				display: "-webkit-box",
				WebkitLineClamp: 2,
				WebkitBoxOrient: "vertical",
				overflow: "hidden"
			},
			children: summary
		})
	});
}
//#endregion
//#region src/routes/courses.$slug.tsx?tsr-split=component
function programType(c) {
	return c.program || c.meta?.skill_level || "Certificate";
}
function calculateGST(price) {
	const gstAmount = price * .18;
	return {
		gstAmount,
		totalPrice: price + gstAmount
	};
}
function CoursePage() {
	const { course } = Route.useLoaderData();
	const primaryCat = getCategory(course.categories[0]);
	const related = relatedCourses(course.slug, 3);
	const ptype = course.meta?.skill_level || programType(course);
	const { gstAmount, totalPrice } = calculateGST(course.priceINR);
	return /* @__PURE__ */ jsx(CourseDetail, {
		course,
		primaryCat,
		ptype,
		gstAmount,
		totalPrice,
		formatINR,
		related
	});
}
//#endregion
export { CoursePage as component };
