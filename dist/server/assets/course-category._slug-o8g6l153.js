import { t as categories } from "./courses-CyFM0Sm6.js";
import { t as Route } from "./course-category._slug-6ZNkVr8R.js";
import { t as CourseCard } from "./CourseCard-CF0QIKkE.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/course-category.$slug.tsx?tsr-split=component
function CategoryPage() {
	const { category, courses: list } = Route.useLoaderData();
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("section", {
		className: "bg-navy-deep text-primary-foreground",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container-x py-16",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "text-xs uppercase tracking-[0.25em] text-gold",
					children: "Specialty"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "font-display text-4xl md:text-5xl mt-3",
					children: category.name
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 max-w-2xl text-primary-foreground/75",
					children: category.tagline
				})
			]
		})
	}), /* @__PURE__ */ jsxs("section", {
		className: "container-x py-14 grid lg:grid-cols-4 gap-10",
		children: [/* @__PURE__ */ jsxs("aside", {
			className: "lg:col-span-1",
			children: [/* @__PURE__ */ jsx("div", {
				className: "text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-3",
				children: "Browse specialties"
			}), /* @__PURE__ */ jsx("ul", {
				className: "space-y-1.5",
				children: categories.map((c) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
					to: "/course-category/$slug",
					params: { slug: c.slug },
					className: `text-sm ${c.slug === category.slug ? "text-navy-deep font-medium" : "text-muted-foreground hover:text-navy-deep"}`,
					children: c.name
				}) }, c.slug))
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "lg:col-span-3",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-xs text-muted-foreground mb-5",
				children: [
					list.length,
					" program",
					list.length === 1 ? "" : "s",
					" in ",
					category.name
				]
			}), list.length === 0 ? /* @__PURE__ */ jsxs("div", {
				className: "py-12 text-muted-foreground",
				children: [
					"New programs are being added in this specialty. ",
					/* @__PURE__ */ jsx(Link, {
						to: "/contact-us",
						className: "text-navy-deep underline",
						children: "Get notified"
					}),
					"."
				]
			}) : /* @__PURE__ */ jsx("div", {
				className: "grid sm:grid-cols-2 gap-6",
				children: list.map((c) => /* @__PURE__ */ jsx(CourseCard, { course: c }, c.slug))
			})]
		})]
	})] });
}
//#endregion
export { CategoryPage as component };
