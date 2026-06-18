import { a as getCategory, r as coursesByCategory } from "./courses-CyFM0Sm6.js";
import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
//#region src/routes/course-category.$slug.tsx
var $$splitComponentImporter = () => import("./course-category._slug-o8g6l153.js");
var $$splitNotFoundComponentImporter = () => import("./course-category._slug-JRXGdlGd.js");
var Route = createFileRoute("/course-category/$slug")({
	loader: ({ params }) => {
		const category = getCategory(params.slug);
		if (!category) throw notFound();
		return {
			category,
			courses: coursesByCategory(params.slug)
		};
	},
	head: ({ loaderData }) => ({ meta: loaderData ? [{ title: `${loaderData.category.name} Courses — DMHCA` }, {
		name: "description",
		content: loaderData.category.tagline
	}] : [] }),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
