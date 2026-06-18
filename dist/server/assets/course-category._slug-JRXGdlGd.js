import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/course-category.$slug.tsx?tsr-split=notFoundComponent
var SplitNotFoundComponent = () => /* @__PURE__ */ jsxs("div", {
	className: "container-x py-24 text-center",
	children: [/* @__PURE__ */ jsx("h1", {
		className: "font-display text-3xl text-navy-deep",
		children: "Category not found"
	}), /* @__PURE__ */ jsx(Link, {
		to: "/top-medical-courses",
		className: "text-navy-deep underline mt-4 inline-block",
		children: "All categories"
	})]
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
