import "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/courses.$slug.tsx?tsr-split=notFoundComponent
var SplitNotFoundComponent = () => /* @__PURE__ */ jsxs("div", {
	className: "container-x py-24 text-center",
	children: [/* @__PURE__ */ jsx("h1", {
		className: "font-display text-3xl text-navy-deep",
		children: "Course not found"
	}), /* @__PURE__ */ jsx(Link, {
		to: "/top-medical-courses",
		className: "text-navy-deep underline mt-4 inline-block",
		children: "Back to all courses"
	})]
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
