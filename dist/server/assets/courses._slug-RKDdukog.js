import { o as getCourse } from "./courses-CyFM0Sm6.js";
import "react";
import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
import "react/jsx-runtime";
//#region src/routes/courses.$slug.tsx
var $$splitComponentImporter = () => import("./courses._slug-UP5Q-KVw.js");
var $$splitNotFoundComponentImporter = () => import("./courses._slug-BsyU43Kv.js");
var Route = createFileRoute("/courses/$slug")({
	loader: ({ params }) => {
		const course = getCourse(params.slug);
		if (!course) throw notFound();
		return { course };
	},
	head: ({ loaderData }) => ({ meta: loaderData ? [
		{ title: `${loaderData.course.title} — DMHCA` },
		{
			name: "description",
			content: loaderData.course.overview.slice(0, 160)
		},
		{
			property: "og:title",
			content: loaderData.course.title
		},
		{
			property: "og:description",
			content: loaderData.course.overview.slice(0, 200)
		},
		{
			property: "og:image",
			content: loaderData.course.image
		}
	] : [] }),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
