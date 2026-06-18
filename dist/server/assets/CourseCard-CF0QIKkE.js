import { a as getCategory, i as formatINR } from "./courses-CyFM0Sm6.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowUpRight, BookOpen, Clock, Star } from "lucide-react";
//#region src/components/site/CourseCard.tsx
function CourseCard({ course }) {
	const cat = getCategory(course.categories[0]);
	const programType = course.program || course.meta?.skill_level || (course.title.toLowerCase().includes("fellowship") ? "Fellowship" : course.title.toLowerCase().includes("pg diploma") ? "PG Diploma" : "Certificate");
	return /* @__PURE__ */ jsxs(Link, {
		to: "/courses/$slug",
		params: { slug: course.slug },
		className: "group block bg-card border border-border rounded-md overflow-hidden hover:border-navy-deep/40 hover:shadow-[0_24px_50px_-30px_rgba(15,27,61,0.45)] transition",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "aspect-[5/3] relative overflow-hidden bg-navy-deep",
			children: [
				/* @__PURE__ */ jsx("img", {
					src: course.image,
					alt: course.title,
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
						programType
					]
				}),
				course.rating && /* @__PURE__ */ jsxs("div", {
					className: "absolute top-3 right-3 inline-flex items-center gap-1 text-[11px] px-2 py-1 bg-primary-foreground/95 text-navy-deep rounded-sm",
					children: [
						/* @__PURE__ */ jsx(Star, { className: "w-3 h-3 fill-gold text-gold" }),
						" ",
						course.rating,
						" ",
						/* @__PURE__ */ jsxs("span", {
							className: "text-muted-foreground",
							children: [
								"(",
								course.reviewCount,
								")"
							]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "absolute bottom-3 left-3 right-3",
					children: [/* @__PURE__ */ jsx("div", {
						className: "text-[10px] uppercase tracking-[0.2em] text-gold/90 mb-1",
						children: cat?.name
					}), /* @__PURE__ */ jsx("div", {
						className: "font-display text-primary-foreground text-lg leading-tight line-clamp-2",
						children: course.title
					})]
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "p-5",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-4 text-xs text-muted-foreground",
				children: [
					course.lessons != null && /* @__PURE__ */ jsxs("span", {
						className: "flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ jsx(BookOpen, { className: "w-3.5 h-3.5" }),
							" ",
							course.lessons,
							" lessons"
						]
					}),
					course.weeks != null && /* @__PURE__ */ jsxs("span", {
						className: "flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ jsx(Clock, { className: "w-3.5 h-3.5" }),
							" ",
							course.weeks,
							" week"
						]
					}),
					/* @__PURE__ */ jsx("span", {
						className: "capitalize",
						children: course.level
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-4 flex items-end justify-between",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
					children: "Tuition"
				}), /* @__PURE__ */ jsx("div", {
					className: "text-lg font-semibold text-navy-deep tracking-tight",
					children: formatINR(course.priceINR)
				})] }), /* @__PURE__ */ jsxs("span", {
					className: "inline-flex items-center gap-1 text-sm text-navy-deep group-hover:text-gold transition",
					children: ["View ", /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4" })]
				})]
			})]
		})]
	});
}
//#endregion
export { CourseCard as t };
