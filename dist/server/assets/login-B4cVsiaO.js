import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/login.tsx?tsr-split=component
function Login() {
	return /* @__PURE__ */ jsx("div", {
		className: "container-x py-20 grid place-items-center",
		children: /* @__PURE__ */ jsxs("div", {
			className: "w-full max-w-md bg-card border border-border rounded-md p-8",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "text-xs uppercase tracking-[0.25em] text-navy-deep gold-rule",
					children: "Learner portal"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "font-display text-3xl text-navy-deep mt-3",
					children: "Welcome back."
				}),
				/* @__PURE__ */ jsxs("form", {
					onSubmit: (e) => e.preventDefault(),
					className: "mt-6 space-y-4",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
							children: "Email"
						}), /* @__PURE__ */ jsx("input", {
							type: "email",
							required: true,
							className: "mt-2 w-full px-4 py-3 bg-background border border-border rounded-sm text-sm focus:outline-none focus:border-navy-deep"
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
							children: "Password"
						}), /* @__PURE__ */ jsx("input", {
							type: "password",
							required: true,
							className: "mt-2 w-full px-4 py-3 bg-background border border-border rounded-sm text-sm focus:outline-none focus:border-navy-deep"
						})] }),
						/* @__PURE__ */ jsx("button", {
							className: "w-full px-5 py-3 bg-navy-deep text-primary-foreground text-sm rounded-sm hover:bg-navy",
							children: "Log in"
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "text-xs text-muted-foreground mt-6 text-center",
					children: ["New to DMHCA? ", /* @__PURE__ */ jsx(Link, {
						to: "/contact-us",
						className: "text-navy-deep underline",
						children: "Talk to admissions"
					})]
				})
			]
		})
	});
}
//#endregion
export { Login as component };
