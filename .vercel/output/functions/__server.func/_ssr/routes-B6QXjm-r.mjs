import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as products, n as categories } from "./cart-gYbkUBbD.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as ArrowRight, P as Award, f as ShieldCheck, o as Truck, u as Star, v as Package } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-6OHGRN1U.mjs";
import { t as ProductCard } from "./ProductCard-yon-5p0o.mjs";
import { t as banner_b2b_default } from "./banner-b2b-DPj9YWCN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B6QXjm-r.js
var import_jsx_runtime = require_jsx_runtime();
var hero_leather_default = "/assets/hero-leather-PGYwdfp1.jpg";
var banner_retail_default = "/assets/banner-retail-Byy53tTn.jpg";
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative bg-cocoa-deep text-cream overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_leather_default,
					alt: "Premium leather wallet and belt on wood",
					width: 1920,
					height: 1080,
					className: "absolute inset-0 w-full h-full object-cover opacity-90"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0",
					style: { background: "var(--gradient-overlay)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative container-x py-24 md:py-36 lg:py-44 max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow",
							children: "Premium Leather Goods"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-cream",
							children: [
								"Crafted To Last.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Designed For Life."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-cream/80 max-w-md text-base md:text-lg",
							children: "Premium leather essentials that combine elegance, durability and everyday functionality."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/shop",
								className: "btn-primary",
								children: ["Shop Collection ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/b2b",
								className: "btn-outline text-cream",
								children: ["Explore Wholesale ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4 mb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow",
					children: "Explore Categories"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl md:text-4xl text-ink mt-2",
					children: "Find What Complements You"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/shop",
					className: "link-underline text-xs tracking-[0.18em] uppercase text-ink flex items-center gap-2",
					children: ["View All Categories ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5",
				children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/shop/$category",
					params: { category: c.slug },
					className: "group relative aspect-[4/5] overflow-hidden bg-cocoa-deep",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: c.image,
							alt: c.name,
							loading: "lazy",
							width: 768,
							height: 768,
							className: "absolute inset-0 w-full h-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute left-5 right-5 bottom-5 flex items-end justify-between text-cream",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] tracking-[0.22em] uppercase",
								children: c.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-cream/70 mt-1",
								children: c.tagline
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								size: 18,
								className: "transition group-hover:translate-x-1"
							})]
						})
					]
				}, c.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x pb-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4 mb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow",
					children: "Best Sellers"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl md:text-4xl text-ink mt-2",
					children: "Our Most Loved Picks"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/shop",
					className: "link-underline text-xs tracking-[0.18em] uppercase text-ink flex items-center gap-2",
					children: ["View All Products ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6",
				children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { p }, p.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border",
				children: [
					{
						Icon: Award,
						title: "Genuine Leather",
						text: "100% authentic leather quality products"
					},
					{
						Icon: ShieldCheck,
						title: "Secure Payments",
						text: "Safe & secure transactions you can trust"
					},
					{
						Icon: Truck,
						title: "Fast Delivery",
						text: "Quick delivery across India"
					},
					{
						Icon: Package,
						title: "Bulk Orders",
						text: "Special pricing for wholesale buyers"
					}
				].map(({ Icon, title, text }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-background p-6 flex gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-11 h-11 grid place-items-center bg-secondary text-gold shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							size: 20,
							strokeWidth: 1.5
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[12px] tracking-[0.18em] uppercase font-semibold text-ink",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-ink-soft mt-1",
						children: text
					})] })]
				}, title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x pb-20 grid md:grid-cols-2 gap-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BannerCard, {
				image: banner_retail_default,
				eyebrow: "For Retail Customers",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Premium Quality.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Everyday Luxury."
				] }),
				cta: "Shop Now",
				to: "/shop"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BannerCard, {
				image: banner_b2b_default,
				eyebrow: "For Wholesale Buyers",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Better Prices.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Bigger Opportunities."
				] }),
				cta: "Visit B2B Portal",
				to: "/b2b"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Happy Customers",
						value: "10,000+"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Average Rating",
						value: "4.8/5",
						Icon: Star
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Hassle Free",
						value: "Easy Returns"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "24/7 Available",
						value: "Support"
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow",
						children: "Words From Customers"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl md:text-4xl text-ink mt-2",
						children: "Trusted by craftspeople of style"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-3 gap-6",
					children: [
						{
							name: "Arjun M.",
							text: "Wallet quality is outstanding — the leather softens beautifully with use."
						},
						{
							name: "Priya S.",
							text: "Bought the duffle for travel. Sturdy, premium, and gets compliments everywhere."
						},
						{
							name: "Rohit T.",
							text: "Belts are built like tanks. Worth every rupee for the craftsmanship."
						}
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-background p-7 border border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-0.5 text-gold mb-4",
								children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
									size: 14,
									fill: "currentColor",
									strokeWidth: 0
								}, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-ink leading-relaxed",
								children: [
									"\"",
									t.text,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm text-ink-soft mt-4",
								children: ["— ", t.name]
							})
						]
					}, t.name))
				})]
			})
		})
	] });
}
function BannerCard({ image, eyebrow, title, cta, to }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "group relative overflow-hidden aspect-[16/9] md:aspect-[5/3] bg-cocoa-deep",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: "",
				loading: "lazy",
				width: 1280,
				height: 720,
				className: "absolute inset-0 w-full h-full object-cover opacity-80 transition duration-700 group-hover:scale-105"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-full flex flex-col justify-end p-7 md:p-10 text-cream",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] tracking-[0.22em] uppercase text-gold-soft",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl md:text-3xl mt-2",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 bg-gold text-white text-[11px] tracking-[0.18em] uppercase px-5 py-3 group-hover:bg-cocoa transition",
							children: [
								cta,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })
							]
						})
					})
				]
			})
		]
	});
}
function Stat({ label, value, Icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-center gap-3",
		children: [Icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			size: 22,
			className: "text-gold",
			strokeWidth: 1.5
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-left",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display text-xl text-ink",
				children: value
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs text-ink-soft",
				children: label
			})]
		})]
	});
}
//#endregion
export { Home as component };
