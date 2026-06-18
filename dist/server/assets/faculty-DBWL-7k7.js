import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/faculty.tsx?tsr-split=component
var faculty = [
	{
		name: "Dr. Mysara Mohyeldin",
		role: "Director · Diabetology",
		bio: "Endocrinologist with 25+ years of clinical and academic experience. Leads DMHCA's diabetology programs."
	},
	{
		name: "Dr. Aarti Sharma",
		role: "Lead Faculty · Radiology",
		bio: "Consultant radiologist with a sub-specialty in abdominal and women's imaging."
	},
	{
		name: "Dr. Vikram Iyer",
		role: "Faculty · Cardiology",
		bio: "Interventional cardiologist and educator with 1,500+ PCIs to his name."
	},
	{
		name: "Dr. Priya Nair",
		role: "Faculty · Obs & Gynae",
		bio: "Maternal-fetal medicine specialist focused on antenatal imaging and infertility."
	},
	{
		name: "Dr. Rohan Kapoor",
		role: "Faculty · Emergency Medicine",
		bio: "Emergency physician and trauma lead at a tertiary care centre."
	},
	{
		name: "Dr. Anita Banerjee",
		role: "Faculty · Dermatology",
		bio: "Cosmetic dermatologist; leads our aesthetic medicine fellowship."
	}
];
function Faculty() {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("section", {
		className: "border-b border-border bg-secondary/40",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container-x py-14",
			children: [/* @__PURE__ */ jsx("div", {
				className: "text-xs uppercase tracking-[0.25em] text-navy-deep gold-rule",
				children: "Faculty"
			}), /* @__PURE__ */ jsx("h1", {
				className: "font-display text-4xl md:text-5xl text-navy-deep mt-3 max-w-3xl",
				children: "Taught by practising consultants."
			})]
		})
	}), /* @__PURE__ */ jsx("section", {
		className: "container-x py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
		children: faculty.map((f) => /* @__PURE__ */ jsxs("div", {
			className: "bg-card border border-border rounded-md p-6",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "w-14 h-14 rounded-full bg-navy-deep text-primary-foreground font-display text-xl grid place-items-center",
					children: f.name.split(" ").slice(-1)[0][0]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "font-display text-xl text-navy-deep mt-4",
					children: f.name
				}),
				/* @__PURE__ */ jsx("div", {
					className: "text-xs uppercase tracking-[0.18em] text-gold mt-1",
					children: f.role
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm text-muted-foreground mt-3",
					children: f.bio
				})
			]
		}, f.name))
	})] });
}
//#endregion
export { Faculty as component };
