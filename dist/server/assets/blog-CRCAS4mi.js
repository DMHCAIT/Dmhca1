import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/blog.tsx?tsr-split=component
var posts = [
	{
		slug: "choosing-a-fellowship",
		title: "How to choose the right fellowship for your career",
		date: "Mar 2026",
		excerpt: "Five questions to ask before committing to a year of sub-specialty training."
	},
	{
		slug: "imaging-2026",
		title: "Imaging trends to watch in 2026",
		date: "Feb 2026",
		excerpt: "AI co-pilots, abbreviated MRI protocols, and what they mean for the working radiologist."
	},
	{
		slug: "primary-care-diabetes",
		title: "Updating your primary-care diabetes playbook",
		date: "Jan 2026",
		excerpt: "Pragmatic guidance on GLP-1s, CGM, and shared decision making."
	}
];
function Blog() {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("section", {
		className: "border-b border-border bg-secondary/40",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container-x py-14",
			children: [/* @__PURE__ */ jsx("div", {
				className: "text-xs uppercase tracking-[0.25em] text-navy-deep gold-rule",
				children: "Journal"
			}), /* @__PURE__ */ jsx("h1", {
				className: "font-display text-4xl md:text-5xl text-navy-deep mt-3",
				children: "Notes & updates."
			})]
		})
	}), /* @__PURE__ */ jsx("section", {
		className: "container-x py-14 grid md:grid-cols-3 gap-8",
		children: posts.map((p) => /* @__PURE__ */ jsxs("article", {
			className: "group",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "aspect-[5/3] rounded-md site-hero mb-5 relative overflow-hidden",
					children: /* @__PURE__ */ jsx("div", {
						className: "absolute inset-0 opacity-10",
						style: {
							backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)",
							backgroundSize: "32px 32px"
						}
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "text-xs uppercase tracking-[0.2em] text-gold",
					children: p.date
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "font-display text-xl text-navy-deep mt-2 group-hover:text-navy",
					children: p.title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm text-muted-foreground mt-2",
					children: p.excerpt
				}),
				/* @__PURE__ */ jsx(Link, {
					to: "/blog",
					className: "text-sm text-navy-deep mt-3 inline-block hover:text-gold",
					children: "Read →"
				})
			]
		}, p.slug))
	})] });
}
//#endregion
export { Blog as component };
