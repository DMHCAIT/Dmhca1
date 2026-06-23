import { n as courses, t as categories } from "./courses-CyFM0Sm6.js";
import { t as CourseCard } from "./CourseCard-CF0QIKkE.js";
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/top-medical-courses.index.tsx?tsr-split=component
function programType(c) {
	return c.program || "Certificate";
}
function AllCourses() {
	const location = useLocation();
	const searchParams = useMemo(() => new URLSearchParams(location.search || ""), [location.search]);
	const cat = useMemo(() => {
		try {
			const p = searchParams.get("cat");
			if (p) {
				const slug = p.toLowerCase();
				if (categories.some((c) => c.slug === slug)) return slug;
			}
		} catch (e) {}
		return "all";
	}, [searchParams]);
	const [fmt, setFmt] = useState("all");
	useEffect(() => {
		try {
			const p = new URLSearchParams(location.search || "").get("fmt");
			if (p) setFmt(p);
		} catch (e) {}
	}, [location.search]);
	const [q, setQ] = useState(() => {
		try {
			return new URLSearchParams(window.location.search).get("q") || "";
		} catch (e) {
			return "";
		}
	});
	useEffect(() => {
		updateUrl({
			cat,
			q
		});
	}, []);
	function updateUrl(params) {
		const u = new URL(window.location.href);
		const s = u.searchParams;
		if (params.cat !== void 0) if (params.cat === "all" || !params.cat) s.delete("cat");
		else s.set("cat", params.cat);
		if (params.fmt !== void 0) if (params.fmt === "all" || !params.fmt) s.delete("fmt");
		else s.set("fmt", params.fmt);
		if (params.q !== void 0) if (!params.q) s.delete("q");
		else s.set("q", params.q);
		const newUrl = u.pathname + (s.toString() ? `?${s.toString()}` : "");
		window.history.replaceState({}, "", newUrl);
	}
	const filtered = useMemo(() => courses.filter((c) => (cat === "all" || c.categories.includes(cat)) && (fmt === "all" || programType(c) === fmt) && (q.trim() === "" || c.title.toLowerCase().includes(q.toLowerCase()))), [
		cat,
		fmt,
		q
	]);
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("section", {
		className: "site-hero",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container-x",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "text-xs uppercase tracking-[0.25em] text-navy-deep gold-rule",
					children: "Catalogue"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "font-display text-4xl md:text-5xl text-navy-deep mt-3",
					children: "All programs."
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mt-3 max-w-2xl text-muted-foreground",
					children: [
						"Filter across ",
						categories.length,
						" specialties and three program formats — Certificate, PG Diploma, and Fellowship."
					]
				})
			]
		})
	}), /* @__PURE__ */ jsxs("section", {
		className: "container-x py-10 text-navy-deep",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "bg-card border border-border rounded-md p-5 mb-8 space-y-5",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "grid md:grid-cols-[1fr_auto] gap-4 items-center",
					children: [/* @__PURE__ */ jsx("input", {
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "Search courses by title…",
						className: "w-full px-4 py-2.5 border border-border rounded-sm bg-background text-sm focus:outline-none focus:border-navy-deep"
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2 flex-wrap",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-[10px] uppercase tracking-[0.22em] text-muted-foreground mr-1",
							children: "Format"
						}), [
							"all",
							"Certificate",
							"PG Diploma",
							"Fellowship"
						].map((f) => {
							const s = new URLSearchParams(location.search || "");
							if (f === "all") s.delete("fmt");
							else s.set("fmt", f);
							return /* @__PURE__ */ jsx(Link, {
								to: "/top-medical-courses",
								search: Object.fromEntries(s.entries()),
								className: `text-xs px-3 py-1.5 rounded-sm border transition ${fmt === f ? "bg-navy-deep text-primary-foreground border-navy-deep" : "border-border text-muted-foreground hover:border-navy-deep hover:text-navy-deep"}`,
								children: f === "all" ? "All" : f
							}, f);
						})]
					})]
				}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2.5",
					children: "Specialty"
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							updateUrl({ cat: "all" });
						},
						className: `text-xs px-3 py-1.5 rounded-sm border transition ${cat === "all" ? "bg-navy-deep text-primary-foreground border-navy-deep" : "border-border text-muted-foreground hover:border-navy-deep hover:text-navy-deep"}`,
						children: "All specialties"
					}), categories.map((c) => /* @__PURE__ */ jsx("button", {
						onClick: () => {
							updateUrl({ cat: c.slug });
						},
						className: `text-xs px-3 py-1.5 rounded-sm border transition ${cat === c.slug ? "bg-navy-deep text-primary-foreground border-navy-deep" : "border-border text-muted-foreground hover:border-navy-deep hover:text-navy-deep"}`,
						children: c.name
					}, c.slug))]
				})] })]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "text-xs text-muted-foreground mb-5",
				children: [
					filtered.length,
					" program",
					filtered.length === 1 ? "" : "s"
				]
			}),
			filtered.length === 0 ? /* @__PURE__ */ jsxs("div", {
				className: "py-20 text-center text-muted-foreground",
				children: ["No courses match — try clearing filters. ", /* @__PURE__ */ jsx(Link, {
					to: "/top-medical-courses",
					className: "text-navy-deep underline",
					children: "Reset"
				})]
			}) : /* @__PURE__ */ jsx("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
				children: filtered.map((c) => /* @__PURE__ */ jsx(CourseCard, { course: c }, c.slug))
			})
		]
	})] });
}
//#endregion
export { AllCourses as component };
