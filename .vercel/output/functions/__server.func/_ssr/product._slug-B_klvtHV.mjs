import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as useCart, i as products, r as formatINR } from "./cart-gYbkUBbD.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as Heart, f as ShieldCheck, g as Plus, h as RotateCcw, o as Truck, u as Star, y as Minus } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-6OHGRN1U.mjs";
import { t as ProductCard } from "./ProductCard-yon-5p0o.mjs";
import { t as Route } from "./product._slug-C7vYhH0V.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-B_klvtHV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { product } = Route.useLoaderData();
	const { add } = useCart();
	const nav = useNavigate();
	const [qty, setQty] = (0, import_react.useState)(1);
	const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x pt-8 text-xs text-ink-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "hover:text-ink",
					children: "Home"
				}),
				" / ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "hover:text-ink",
					children: "Shop"
				}),
				" / ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-ink",
					children: product.name
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x py-10 grid lg:grid-cols-2 gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-square bg-secondary overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.image,
						alt: product.name,
						className: "w-full h-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-4 gap-3",
					children: [
						product.image,
						product.image,
						product.image,
						product.image
					].map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "aspect-square bg-secondary overflow-hidden border border-border hover:border-cocoa transition",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src,
							alt: "",
							className: "w-full h-full object-cover"
						})
					}, i))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow",
					children: product.category
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl md:text-4xl mt-2",
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mt-3 text-sm text-ink-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex text-gold",
							children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
								size: 14,
								fill: "currentColor",
								strokeWidth: 0
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: product.rating }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [product.reviews, " reviews"] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline gap-3 mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-3xl text-cocoa",
						children: formatINR(product.price)
					}), product.originalPrice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-ink-soft line-through",
						children: formatINR(product.originalPrice)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs bg-gold text-white px-2 py-1",
						children: [Math.round((1 - product.price / product.originalPrice) * 100), "% OFF"]
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-emerald-700 mt-2 font-medium",
					children: "● In stock — ships in 1–2 days"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-ink-soft leading-relaxed mt-6",
					children: product.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-4 mt-6 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
							label: "Material",
							value: product.material
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
							label: "Color",
							value: product.color
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
							label: "Origin",
							value: "Made in India"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
							label: "Warranty",
							value: "1 Year"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 mt-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center border border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setQty(Math.max(1, qty - 1)),
									className: "px-3 py-3 hover:bg-secondary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { size: 14 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "px-5 py-3 min-w-12 text-center font-medium",
									children: qty
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setQty(qty + 1),
									className: "px-3 py-3 hover:bg-secondary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 14 })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => add(product.id, qty),
							className: "flex-1 btn-primary justify-center",
							children: "Add to Cart"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": "wishlist",
							className: "w-12 h-12 grid place-items-center border border-border hover:border-cocoa",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
								size: 18,
								strokeWidth: 1.5
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						add(product.id, qty);
						nav({ to: "/checkout" });
					},
					className: "mt-3 w-full btn-outline justify-center text-cocoa",
					children: "Buy It Now"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-3 gap-3 mt-8 pt-6 border-t border-border text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trust, {
							Icon: Truck,
							text: "Free shipping above ₹999"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trust, {
							Icon: RotateCcw,
							text: "7-day easy returns"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trust, {
							Icon: ShieldCheck,
							text: "Secure payments"
						})
					]
				})
			] })]
		}),
		related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl md:text-3xl mb-8",
				children: "You may also like"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-6",
				children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { p }, p.id))
			})]
		})
	] });
}
function Spec({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-border p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[10px] tracking-[0.18em] uppercase text-ink-soft",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-medium mt-1",
			children: value
		})]
	});
}
function Trust({ Icon, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2 text-ink-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				size: 16,
				className: "text-gold",
				strokeWidth: 1.5
			}),
			" ",
			text
		]
	});
}
//#endregion
export { ProductPage as component };
