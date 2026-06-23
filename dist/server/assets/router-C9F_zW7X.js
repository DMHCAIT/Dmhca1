import { n as courses, t as categories } from "./courses-CyFM0Sm6.js";
import { t as Route$14 } from "./courses._slug-RKDdukog.js";
import { t as Route$15 } from "./course-category._slug-6ZNkVr8R.js";
import React, { useEffect, useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useLocation, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
//#region src/styles.css?url
var styles_default = "/assets/styles-aD49kt6i.css";
//#endregion
//#region src/components/site/Header.tsx
var logo$1 = "/logo.webp";
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about-dmhca",
		label: "About"
	},
	{
		to: "/top-medical-courses",
		label: "Courses"
	},
	{
		to: "/contact-us",
		label: "Contact"
	}
];
function Header() {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs("header", {
		className: "sticky top-0 z-40 bg-background/95 backdrop-blur-md hairline",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "container-x flex items-center justify-between h-16",
			children: [
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "flex items-center",
					children: /* @__PURE__ */ jsx("img", {
						src: logo$1,
						alt: "DMHCA",
						className: "h-10 w-auto"
					})
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden lg:flex items-center gap-7 text-base",
					children: nav.map((n) => /* @__PURE__ */ jsx(Link, {
						to: n.to,
						className: "text-foreground/80 hover:text-navy-deep transition",
						activeProps: { className: "text-navy-deep" },
						activeOptions: { exact: n.to === "/" },
						children: n.label
					}, n.to))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "hidden lg:flex items-center gap-3",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/login",
						className: "text-base px-4 py-2 bg-navy-deep text-primary-foreground rounded-sm hover:bg-navy transition",
						children: "Log in"
					})
				}),
				/* @__PURE__ */ jsx("button", {
					className: "lg:hidden p-2",
					onClick: () => setOpen(!open),
					"aria-label": "Menu",
					children: open ? /* @__PURE__ */ jsx(X, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(Menu, { className: "w-5 h-5" })
				})
			]
		}), open && /* @__PURE__ */ jsx("div", {
			className: "lg:hidden border-t border-border bg-background",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x py-4 flex flex-col gap-3 text-base",
				children: [nav.map((n) => /* @__PURE__ */ jsx(Link, {
					to: n.to,
					onClick: () => setOpen(false),
					className: "py-1",
					children: n.label
				}, n.to)), /* @__PURE__ */ jsx(Link, {
					to: "/login",
					onClick: () => setOpen(false),
					className: "mt-2 inline-block w-fit px-4 py-2 bg-navy-deep text-primary-foreground rounded-sm",
					children: "Log in"
				})]
			})
		})]
	});
}
//#endregion
//#region src/components/site/Footer.tsx
var logo = "/logo.webp";
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "mt-24 bg-navy-deep text-primary-foreground",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "container-x py-14 grid gap-8 md:grid-cols-12",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-4",
					children: [
						/* @__PURE__ */ jsx("img", {
							src: logo,
							alt: "DMHCA",
							className: "h-10 w-auto filter brightness-0 invert opacity-90"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-6 text-sm text-primary-foreground/70 max-w-sm",
							children: "Accessible online medical education, accredited certificates, and advanced fellowships — delivered by faculty from leading institutions worldwide."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-6 space-y-2 text-sm text-primary-foreground/80",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 text-gold" }), " +91 70420 11441"]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(Mail, { className: "w-4 h-4 text-gold" }), " info@dmhca.in"]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 text-gold mt-0.5" }), " New Delhi, India"]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-3",
					children: [/* @__PURE__ */ jsx("div", {
						className: "text-xs uppercase tracking-[0.2em] text-gold mb-3",
						children: "Explore"
					}), /* @__PURE__ */ jsxs("ul", {
						className: "space-y-1 text-sm",
						children: [
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/",
								className: "hover:text-gold",
								children: "Home"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/about-dmhca",
								className: "hover:text-gold",
								children: "About us"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/top-medical-courses",
								className: "hover:text-gold",
								children: "Courses"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/simple-event",
								className: "hover:text-gold",
								children: "Events"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
								href: "/sitemap.xml",
								className: "hover:text-gold",
								children: "Sitemap"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/contact-us",
								className: "hover:text-gold",
								children: "Contact"
							}) })
						]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-3",
					children: [/* @__PURE__ */ jsx("div", {
						className: "text-xs uppercase tracking-[0.2em] text-gold mb-3",
						children: "Specialties"
					}), /* @__PURE__ */ jsxs("ul", {
						className: "space-y-1 text-sm",
						children: [
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/course-category/$slug",
								params: { slug: "cardiology" },
								className: "hover:text-gold",
								children: "Cardiology"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/course-category/$slug",
								params: { slug: "radiology" },
								className: "hover:text-gold",
								children: "Radiology"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/course-category/$slug",
								params: { slug: "dermatology" },
								className: "hover:text-gold",
								children: "Dermatology"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/course-category/$slug",
								params: { slug: "obs-gynae" },
								className: "hover:text-gold",
								children: "Obs & Gynae"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/course-category/$slug",
								params: { slug: "endocrinology" },
								className: "hover:text-gold",
								children: "Endocrinology"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/course-category/$slug",
								params: { slug: "oncology" },
								className: "hover:text-gold",
								children: "Oncology"
							}) })
						]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ jsx("div", {
						className: "text-xs uppercase tracking-[0.2em] text-gold mb-3",
						children: "Top medical courses"
					}), /* @__PURE__ */ jsxs("ul", {
						className: "space-y-1 text-sm",
						children: [
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/courses/$slug",
								params: { slug: "certificate-in-hypertension" },
								className: "hover:text-gold",
								children: "Certificate in Hypertension"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/courses/$slug",
								params: { slug: "certificate-in-diabetology" },
								className: "hover:text-gold",
								children: "Certificate in Diabetology"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/courses/$slug",
								params: { slug: "fellowship-in-critical-care" },
								className: "hover:text-gold",
								children: "Fellowship in Critical Care"
							}) })
						]
					})]
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-primary-foreground/10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Delhi Medical Health Care Academy. All rights reserved."
				] }), /* @__PURE__ */ jsxs("div", {
					className: "flex gap-5",
					children: [
						/* @__PURE__ */ jsx("a", {
							href: "#",
							className: "hover:text-gold",
							children: "Privacy"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#",
							className: "hover:text-gold",
							children: "Terms"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#",
							className: "hover:text-gold",
							children: "Refund Policy"
						})
					]
				})]
			})
		})]
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "font-display text-7xl text-navy-deep",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-sm bg-navy-deep px-5 py-2.5 text-sm text-primary-foreground hover:bg-navy",
						children: "Back home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		console.error("Error boundary triggered:", error);
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "font-display text-2xl text-navy-deep",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong. Try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-sm bg-navy-deep px-4 py-2 text-sm text-primary-foreground hover:bg-navy",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "rounded-sm border border-input bg-background px-4 py-2 text-sm",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$13 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "DMHCA - Top Institute For Medical Courses" },
			{
				name: "description",
				content: "Accredited online medical fellowships, PG diplomas, and certificate programs across 10+ specialties."
			},
			{
				property: "og:title",
				content: "DMHCA - Top Institute For Medical Courses"
			},
			{
				property: "og:description",
				content: "Accredited medical education delivered online."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [
			{
				rel: "icon",
				href: "/titlelogo.jpg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter+Tight:wght@400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$13.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsxs("div", {
			className: "min-h-screen flex flex-col",
			children: [
				/* @__PURE__ */ jsx(Header, {}),
				/* @__PURE__ */ jsx("main", {
					className: "flex-1",
					children: /* @__PURE__ */ jsx(Outlet, {})
				}),
				/* @__PURE__ */ jsx(Footer, {})
			]
		})
	});
}
//#endregion
//#region src/routes/sitemap[.]xml.tsx
var BASE_URL = "";
var Route$12 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		...[
			"/",
			"/top-medical-courses",
			"/fellowship",
			"/faculty",
			"/about",
			"/blog",
			"/contact-us",
			"/login"
		].map((p) => ({
			path: p,
			changefreq: "weekly",
			priority: p === "/" ? "1.0" : "0.8"
		})),
		...categories.map((c) => ({
			path: `/course-category/${c.slug}`,
			changefreq: "weekly",
			priority: "0.7"
		})),
		...courses.map((c) => ({
			path: `/courses/${c.slug}`,
			changefreq: "monthly",
			priority: "0.6"
		}))
	].map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
//#endregion
//#region src/routes/simple-event.tsx
var events = [
	{
		slug: "join-our-3-day-master-workshop-in-ultrasound-with-hands-on-training-program",
		image: "vasa-academy.webp",
		title: "Join our 3 Day Master Workshop in Ultrasound with Hands-On Training Program",
		date: "23/01/2026",
		location: "Workshop"
	},
	{
		slug: "webinar-what-to-expect-at-the-hiv-awareness-webinar-2025",
		image: "sandeep_gupta.webp",
		title: "Webinar: What to Expect at the HIV Awareness Webinar 2025",
		date: "01/12/2025",
		location: "Zoom Meeting"
	},
	{
		slug: "webinar-cervical-cancer-awareness-diagnosis-and-treatment",
		image: "Renuka gupta.webp",
		title: "Webinar : Cervical Cancer Awareness, Diagnosis, and Treatment",
		date: "14/11/2024",
		location: "Zoom meeting"
	},
	{
		slug: "using-laptop-and-pc-working-at-home",
		image: "Pramod kumar Dhar.webp",
		title: "Event : Cardiology Conclave",
		date: "06/04/2024",
		location: "Hyderabad, India"
	},
	{
		slug: "business-people-working-together-conference",
		image: "Dr_Azra khan.webp",
		title: "Webinar : Management of High-Risk Pregnancies",
		date: "12/05/2024",
		location: "Online On Zoom"
	},
	{
		slug: "young-tutor-home-teaching-online-courses",
		image: "Dr_Abbas kazim.webp",
		title: "Trauma and Fracture Management",
		date: "26/05/2024",
		location: "Online on Zoom"
	},
	{
		slug: "startup-business-team-meeting-modern",
		image: "Dr.Abhishek-Lachyan.webp",
		title: "Musculoskeletal Ultrasound – Applications and Techniques",
		date: "08/06/2024",
		location: "Online on Zoom"
	}
];
function EventsListing() {
	if (useLocation().pathname !== "/simple-event") return /* @__PURE__ */ jsx(Outlet, {});
	return /* @__PURE__ */ jsxs("div", {
		className: "container-home py-12",
		children: [/* @__PURE__ */ jsxs("h1", {
			className: "font-display text-4xl mb-6 flex items-center gap-3",
			children: [/* @__PURE__ */ jsx("img", {
				src: "/titlelogo.jpg",
				alt: "DMHCA mark",
				className: "w-9 h-9"
			}), "Events & Webinars"]
		}), /* @__PURE__ */ jsx("div", {
			className: "grid sm:grid-cols-2 md:grid-cols-3 gap-6",
			children: events.map((event) => /* @__PURE__ */ jsxs(Link, {
				to: `/simple-event/${event.slug}`,
				className: "block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition bg-white",
				children: [/* @__PURE__ */ jsx("div", {
					className: "w-full",
					children: /* @__PURE__ */ jsx("img", {
						src: `/events&webinars/${event.image}`,
						alt: event.title,
						className: "w-full object-cover object-center aspect-[4/3]",
						style: { filter: "none" }
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "p-4",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 text-sm text-muted-foreground mb-2",
							children: [/* @__PURE__ */ jsx("span", { children: "📅" }), /* @__PURE__ */ jsx("span", {
								className: "font-semibold",
								children: event.date
							})]
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "font-semibold text-navy-deep mb-2 line-clamp-2",
							children: event.title
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ jsx("span", { children: "📍" }), /* @__PURE__ */ jsx("span", { children: event.location })]
						})
					]
				})]
			}, event.slug))
		})]
	});
}
var Route$11 = createFileRoute("/simple-event")({ component: EventsListing });
//#endregion
//#region src/routes/login.tsx
var $$splitComponentImporter$8 = () => import("./login-B4cVsiaO.js");
var Route$10 = createFileRoute("/login")({
	head: () => ({ meta: [{ title: "Log in — DMHCA" }, {
		name: "description",
		content: "Log in to your DMHCA learner profile."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
//#endregion
//#region src/routes/fellowship.tsx
var $$splitComponentImporter$7 = () => import("./fellowship-qYTJvwI1.js");
var Route$9 = createFileRoute("/fellowship")({
	head: () => ({ meta: [{ title: "Fellowship Programs — DMHCA" }, {
		name: "description",
		content: "Advanced clinical fellowships at DMHCA across radiology, cardiology, pulmonology, surgery, and more."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
//#endregion
//#region src/routes/faculty.tsx
var $$splitComponentImporter$6 = () => import("./faculty-DBWL-7k7.js");
var Route$8 = createFileRoute("/faculty")({
	head: () => ({ meta: [{ title: "Faculty — DMHCA" }, {
		name: "description",
		content: "Meet the consultants and academic faculty who lead DMHCA programs."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
//#endregion
//#region src/routes/contact-us.tsx
function Contact() {
	useEffect(() => {
		if (typeof window !== "undefined" && window.location.hash) {
			const url = window.location.href.replace(/#.*$/, "");
			window.history.replaceState({}, "", url);
		}
	}, []);
	const faqs = [
		{
			q: "How can I contact your support team?",
			a: "You can reach our support team via email at info@dmhca.in or by phone at +91 70420 11441. We are available Monday to Saturday, from 9:30 a.m. to 6:30 p.m."
		},
		{
			q: "What is the response time for inquiries?",
			a: "We typically respond to inquiries within the same day between 9:30 a.m. to 6:30 p.m. During peak periods, it may take longer, but we strive to assist you as quickly as possible."
		},
		{
			q: "Do you offer live chat support?",
			a: "Yes, we provide live chat support on WhatsApp during our operating hours, i.e., 9:30 a.m. to 6:30 p.m. You can access live chat by clicking the icon on the bottom right of our website."
		},
		{
			q: "What should I do if I have technical issues with a course?",
			a: "If you experience any technical problems with our courses, please contact us at info@delhimedical.net or call +91 9899711530. Providing detailed information about the issue will help us resolve it faster."
		},
		{
			q: "Do you offer customer support outside regular business hours?",
			a: "Our support team is available during business hours at 9:30 a.m. to 6:30 p.m. For urgent issues outside these hours, please email us at info@delhimedical.net, and we will get back to you as soon as possible."
		}
	];
	const [openIndex, setOpenIndex] = useState(null);
	const toggleFaq = (i) => setOpenIndex(openIndex === i ? null : i);
	return /* @__PURE__ */ jsx("div", {
		className: "bg-slate-50",
		children: /* @__PURE__ */ jsx("div", {
			className: "container-home py-16",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-6xl",
				children: [/* @__PURE__ */ jsxs("header", {
					className: "mb-8",
					children: [/* @__PURE__ */ jsx("h1", {
						className: "font-display text-4xl md:text-5xl text-navy-deep",
						children: "Contact Us"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-2 text-lg text-muted-foreground",
						children: "Get in touch — we’re here to help with any questions or support you need."
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-2 space-y-6",
						children: [
							/* @__PURE__ */ jsxs("section", {
								className: "bg-white p-6 rounded-2xl shadow-xl border border-white/10 relative overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl",
								children: [
									/* @__PURE__ */ jsx("div", { className: "absolute left-0 top-6 bottom-6 w-1 bg-gold/80 rounded-r-md" }),
									/* @__PURE__ */ jsx("h2", {
										className: "font-display text-2xl text-navy-deep ml-6",
										children: "Our Addresses"
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mt-4 grid grid-cols-1 md:grid-cols-2 gap-6",
										children: [/* @__PURE__ */ jsxs("div", { children: [
											/* @__PURE__ */ jsx("h3", {
												className: "font-medium text-lg ml-6",
												children: "Delhi"
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-sm mt-2 leading-relaxed ml-6",
												children: "Buliding No.-581/2, First Floor, Khatana Farm, Mandi Rd, Sultanpur, New Delhi-30"
											}),
											/* @__PURE__ */ jsx("p", {
												className: "mt-3 font-medium ml-6",
												children: "+91 9899711530"
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-sm text-muted-foreground ml-6",
												children: "info@dmhca.in"
											})
										] }), /* @__PURE__ */ jsxs("div", { children: [
											/* @__PURE__ */ jsx("h3", {
												className: "font-medium text-lg ml-6",
												children: "Hyderabad"
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-sm mt-2 leading-relaxed ml-6",
												children: "DMHCA, 8-2-351/W//B 1st Floor, Green Valley, Navodaya society, Banjara Hills Road no-3, Behind Times of India, Hyderabad, Telangana 500034"
											}),
											/* @__PURE__ */ jsx("p", {
												className: "mt-3 font-medium ml-6",
												children: "+91 9899711530"
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-sm text-muted-foreground ml-6",
												children: "info@dmhca.in"
											})
										] })]
									})
								]
							}),
							/* @__PURE__ */ jsxs("section", {
								className: "bg-white p-6 rounded-2xl shadow-xl border border-white/10",
								children: [
									/* @__PURE__ */ jsx("h2", {
										className: "font-display text-2xl text-navy-deep",
										children: "For Academic Support"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: "Contact our academic services team for guidance, resources, and personalized assistance."
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mt-4",
										children: [/* @__PURE__ */ jsx("p", {
											className: "font-medium",
											children: "M. No. – 9289980479"
										}), /* @__PURE__ */ jsx("p", {
											className: "text-sm text-muted-foreground",
											children: "Email – support@dmhca.in"
										})]
									})
								]
							}),
							/* @__PURE__ */ jsxs("section", {
								className: "bg-white p-6 rounded-2xl shadow-xl border border-white/10",
								children: [
									/* @__PURE__ */ jsx("h2", {
										className: "font-display text-2xl text-navy-deep",
										children: "Send a Message"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: "Send us a message and we'll get back to you shortly."
									}),
									/* @__PURE__ */ jsxs("form", {
										className: "mt-4 space-y-4",
										children: [
											/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
												className: "block text-sm font-medium text-navy-deep",
												children: "Name"
											}), /* @__PURE__ */ jsx("input", {
												className: "mt-1 block w-full rounded-xl border px-4 py-3 shadow-inner focus:outline-none focus:ring-2 focus:ring-gold",
												placeholder: "Your name"
											})] }),
											/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
												className: "block text-sm font-medium text-navy-deep",
												children: "Email"
											}), /* @__PURE__ */ jsx("input", {
												type: "email",
												className: "mt-1 block w-full rounded-xl border px-4 py-3 shadow-inner focus:outline-none focus:ring-2 focus:ring-gold",
												placeholder: "you@example.com"
											})] }),
											/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
												className: "block text-sm font-medium text-navy-deep",
												children: "Message"
											}), /* @__PURE__ */ jsx("textarea", {
												className: "mt-1 block w-full rounded-xl border px-4 py-3 h-40 shadow-inner focus:outline-none focus:ring-2 focus:ring-gold",
												placeholder: "Write your message"
											})] }),
											/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("button", {
												type: "button",
												className: "inline-flex items-center px-6 py-3 bg-gold text-navy-deep rounded-xl shadow-lg font-semibold",
												children: "Send message"
											}) })
										]
									})
								]
							})
						]
					}), /* @__PURE__ */ jsxs("aside", {
						className: "space-y-6",
						children: [/* @__PURE__ */ jsxs("section", {
							className: "bg-gradient-to-r from-navy-deep to-slate-800 text-primary-foreground p-6 rounded-2xl shadow-lg",
							children: [
								/* @__PURE__ */ jsx("h3", {
									className: "font-semibold text-lg",
									children: "Quick Contact"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 text-sm",
									children: "Reach us via phone or email for quick assistance."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-4 text-sm space-y-2",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2",
											children: [
												/* @__PURE__ */ jsx("span", { className: "inline-block w-3 h-3 bg-gold rounded-full" }),
												" ",
												/* @__PURE__ */ jsx("strong", { children: "Phone:" }),
												" +91 9899711530"
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2",
											children: [
												/* @__PURE__ */ jsx("span", { className: "inline-block w-3 h-3 bg-gold rounded-full" }),
												" ",
												/* @__PURE__ */ jsx("strong", { children: "Email:" }),
												" info@dmhca.in"
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2",
											children: [
												/* @__PURE__ */ jsx("span", { className: "inline-block w-3 h-3 bg-gold rounded-full" }),
												" ",
												/* @__PURE__ */ jsx("strong", { children: "Address (primary):" }),
												" Delhi"
											]
										})
									]
								})
							]
						}), /* @__PURE__ */ jsxs("section", {
							className: "border rounded-lg p-4",
							children: [/* @__PURE__ */ jsx("h4", {
								className: "font-medium",
								children: "Frequently Asked Questions"
							}), /* @__PURE__ */ jsx("div", {
								className: "mt-3 text-sm",
								children: faqs.map((f, i) => /* @__PURE__ */ jsxs("div", {
									className: "border-b last:border-b-0",
									children: [/* @__PURE__ */ jsxs("button", {
										onClick: () => toggleFaq(i),
										className: "w-full text-left py-3 flex justify-between items-center",
										children: [/* @__PURE__ */ jsx("span", {
											className: "font-medium",
											children: f.q
										}), /* @__PURE__ */ jsx("span", {
											className: "text-muted-foreground",
											children: openIndex === i ? "−" : "+"
										})]
									}), openIndex === i && /* @__PURE__ */ jsx("div", {
										className: "pb-3 text-sm text-muted-foreground",
										children: f.a
									})]
								}, i))
							})]
						})]
					})]
				})]
			})
		})
	});
}
var Route$7 = createFileRoute("/contact-us")({ component: Contact });
//#endregion
//#region src/routes/contact-redirect.tsx
var $$splitComponentImporter$5 = () => import("./contact-redirect-aGtlhEJd.js");
var Route$6 = createFileRoute("/contact-redirect")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
//#endregion
//#region src/routes/blog.tsx
var $$splitComponentImporter$4 = () => import("./blog-CRCAS4mi.js");
var Route$5 = createFileRoute("/blog")({
	head: () => ({ meta: [{ title: "Blog — DMHCA" }, {
		name: "description",
		content: "Notes from DMHCA — clinical updates, course launches, and faculty insights."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/about-dmhca.tsx
var $$splitComponentImporter$3 = () => import("./about-dmhca-DutM0KMK.js");
var Route$4 = createFileRoute("/about-dmhca")({
	head: () => ({ meta: [{ title: "About DMHCA — Delhi Medical Health Care Academy" }, {
		name: "description",
		content: "Learn about DMHCA's mission to provide transformative healthcare education with advanced courses and expert faculty."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$2 = () => import("./about-DnakxJA5.js");
var Route$3 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$1 = () => import("./routes-lDxO4ygF.js");
var Route$2 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "DMHCA - Top Institute For Medical Courses" }, {
		name: "description",
		content: "Advance your medical career with accredited online fellowships and certificate programs across radiology, cardiology, gynaecology, dermatology, oncology and more."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/top-medical-courses.index.tsx
var $$splitComponentImporter = () => import("./top-medical-courses.index-CDWxp_Jn.js");
var Route$1 = createFileRoute("/top-medical-courses/")({
	head: () => ({ meta: [{ title: "All Courses — DMHCA" }, {
		name: "description",
		content: "Browse fellowships, PG diplomas, and certificate courses across every medical specialty."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routes/simple-event.$slug.tsx
var slugMap = {
	"join-our-3-day-master-workshop-in-ultrasound-with-hands-on-training-program": "vasa-academy.webp",
	"webinar-what-to-expect-at-the-hiv-awareness-webinar-2025": "sandeep_gupta.webp",
	"webinar-cervical-cancer-awareness-diagnosis-and-treatment": "Renuka-gupta.webp",
	"using-laptop-and-pc-working-at-home": "Pramod-kumar-Dhar.webp",
	"business-people-working-together-conference": "Dr_Azra-khan.webp",
	"young-tutor-home-teaching-online-courses": "Dr_Abbas-kazim.webp",
	"startup-business-team-meeting-modern": "Dr.Abhishek-Lachyan.webp"
};
function EventPage() {
	const [slug, setSlug] = React.useState("");
	const [htmlContent, setHtmlContent] = React.useState(null);
	React.useEffect(() => {
		const pathParts = window.location.pathname.split("/");
		if (pathParts.length >= 3) {
			const extractedSlug = pathParts[2];
			setSlug(extractedSlug);
		}
	}, []);
	const found = slug ? slugMap[slug] : void 0;
	React.useEffect(() => {
		let mounted = true;
		if (!found || !slug) return;
		fetch(`/events-content/${slug}.html`).then(async (r) => {
			if (!mounted) return;
			if (r.ok) setHtmlContent(await r.text());
			else setHtmlContent(null);
		}).catch(() => setHtmlContent(null));
		return () => {
			mounted = false;
		};
	}, [slug, found]);
	if (!slug || !found) return /* @__PURE__ */ jsx("div", {
		className: "container-home py-12",
		children: /* @__PURE__ */ jsx("h1", {
			className: "text-2xl",
			children: "Event not found"
		})
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "container-home py-12",
		children: [/* @__PURE__ */ jsxs(Link, {
			to: "/simple-event",
			className: "inline-flex items-center gap-2 text-gold hover:text-gold/80 mb-6 font-medium",
			children: [/* @__PURE__ */ jsx("span", { children: "←" }), " Back to Events"]
		}), /* @__PURE__ */ jsxs("div", {
			className: "grid md:grid-cols-3 gap-8 items-start",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "md:col-span-2",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "rounded-lg overflow-hidden shadow-2xl",
						children: /* @__PURE__ */ jsx("img", {
							src: `/events&webinars/${found}`,
							alt: slug,
							className: "w-full h-96 object-cover object-center",
							style: { filter: "none" }
						})
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "font-display text-4xl mt-6 text-navy-deep flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("img", {
							src: "/titlelogo.jpg",
							alt: "DMHCA mark",
							className: "w-9 h-9"
						}), slug.replace(/-/g, " ")]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-4 prose max-w-none text-muted-foreground bg-white/0 p-0",
						children: htmlContent === null ? /* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("p", { children: "This is placeholder content for the event. The page keeps the same URL and original image." }),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4",
								children: "Highlights:"
							}),
							/* @__PURE__ */ jsxs("ul", {
								className: "list-disc ml-6 mt-2 text-muted-foreground",
								children: [
									/* @__PURE__ */ jsx("li", { children: "Speaker details and agenda" }),
									/* @__PURE__ */ jsx("li", { children: "Registration information" }),
									/* @__PURE__ */ jsx("li", { children: "Venue and timing" })
								]
							})
						] }) : /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: htmlContent } })
					})
				]
			}), /* @__PURE__ */ jsxs("aside", {
				className: "p-6 bg-navy-deep text-primary-foreground rounded-lg shadow-lg",
				children: [
					/* @__PURE__ */ jsx("h4", {
						className: "font-semibold text-lg",
						children: "Event details"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-sm text-primary-foreground/90 mt-3",
						children: "Date: To be announced"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-sm text-primary-foreground/90 mt-2",
						children: "Location: Online / Venue"
					}),
					/* @__PURE__ */ jsx("a", {
						href: "#register",
						className: "inline-block mt-4 px-4 py-2 bg-gold text-navy-deep rounded-md font-medium",
						children: "Register"
					})
				]
			})]
		})]
	});
}
var Route = createFileRoute("/simple-event/$slug")({ component: EventPage });
//#endregion
//#region src/routeTree.gen.ts
var SitemapDotxmlRoute = Route$12.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$13
});
var SimpleEventRoute = Route$11.update({
	id: "/simple-event",
	path: "/simple-event",
	getParentRoute: () => Route$13
});
var LoginRoute = Route$10.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$13
});
var FellowshipRoute = Route$9.update({
	id: "/fellowship",
	path: "/fellowship",
	getParentRoute: () => Route$13
});
var FacultyRoute = Route$8.update({
	id: "/faculty",
	path: "/faculty",
	getParentRoute: () => Route$13
});
var ContactUsRoute = Route$7.update({
	id: "/contact-us",
	path: "/contact-us",
	getParentRoute: () => Route$13
});
var ContactRedirectRoute = Route$6.update({
	id: "/contact-redirect",
	path: "/contact-redirect",
	getParentRoute: () => Route$13
});
var BlogRoute = Route$5.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$13
});
var AboutDmhcaRoute = Route$4.update({
	id: "/about-dmhca",
	path: "/about-dmhca",
	getParentRoute: () => Route$13
});
var AboutRoute = Route$3.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$13
});
var IndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$13
});
var TopMedicalCoursesIndexRoute = Route$1.update({
	id: "/top-medical-courses/",
	path: "/top-medical-courses/",
	getParentRoute: () => Route$13
});
var SimpleEventSlugRoute = Route.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => SimpleEventRoute
});
var CoursesSlugRoute = Route$14.update({
	id: "/courses/$slug",
	path: "/courses/$slug",
	getParentRoute: () => Route$13
});
var CourseCategorySlugRoute = Route$15.update({
	id: "/course-category/$slug",
	path: "/course-category/$slug",
	getParentRoute: () => Route$13
});
var SimpleEventRouteChildren = { SimpleEventSlugRoute };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AboutDmhcaRoute,
	BlogRoute,
	ContactRedirectRoute,
	ContactUsRoute,
	FacultyRoute,
	FellowshipRoute,
	LoginRoute,
	SimpleEventRoute: SimpleEventRoute._addFileChildren(SimpleEventRouteChildren),
	SitemapDotxmlRoute,
	CourseCategorySlugRoute,
	CoursesSlugRoute,
	TopMedicalCoursesIndexRoute
};
var routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
