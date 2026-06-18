import { n as courses } from "./courses-CyFM0Sm6.js";
import { t as CourseCard } from "./CourseCard-CF0QIKkE.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/fellowship.tsx?tsr-split=component
function Fellowship() {
	const fellowships = courses.filter((c) => c.program === "Fellowship");
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("section", {
		className: "bg-navy-deep text-primary-foreground",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container-x py-16",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "text-xs uppercase tracking-[0.25em] text-gold",
					children: "Fellowships"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "font-display text-4xl md:text-5xl mt-3 max-w-3xl",
					children: "Advanced clinical fellowships for sub-specialty expertise."
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 max-w-2xl text-primary-foreground/75",
					children: "A year of structured, case-based mentorship from senior consultants — designed for postgraduates ready to deepen their practice."
				})
			]
		})
	}), /* @__PURE__ */ jsxs("section", {
		className: "container-x py-14",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "text-xs text-muted-foreground mb-5",
			children: [fellowships.length, " fellowship programs"]
		}), /* @__PURE__ */ jsx("div", {
			className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
			children: fellowships.map((c) => /* @__PURE__ */ jsx(CourseCard, { course: c }, c.slug))
		})]
	})] });
}
//#endregion
export { Fellowship as component };
