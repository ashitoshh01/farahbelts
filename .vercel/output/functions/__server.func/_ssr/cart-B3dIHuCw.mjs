import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as useCart, r as formatINR } from "./cart-gYbkUBbD.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as ArrowRight, g as Plus, l as Trash2, y as Minus } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-6OHGRN1U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-B3dIHuCw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CartPage() {
	const { detailed, setQty, remove, subtotal, count } = useCart();
	const [coupon, setCoupon] = (0, import_react.useState)("");
	const [applied, setApplied] = (0, import_react.useState)(0);
	const shipping = subtotal > 999 || subtotal === 0 ? 0 : 99;
	const tax = Math.round(subtotal * .05);
	const total = subtotal + shipping + tax - applied;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-x py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "eyebrow",
				children: "Your Cart"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl md:text-4xl mt-2",
				children: "Shopping Bag"
			}),
			count === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "py-24 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-2xl",
						children: "Your cart is empty"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-ink-soft mt-2",
						children: "Discover timeless pieces crafted to last."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/shop",
						className: "btn-primary mt-6 inline-flex",
						children: ["Start Shopping ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-[1fr_380px] gap-10 mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border border-border bg-background",
					children: detailed.map(({ product, qty, lineTotal }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-5 p-5 border-b border-border last:border-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/product/$slug",
							params: { slug: product.slug },
							className: "w-24 h-24 md:w-28 md:h-28 bg-secondary shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: product.image,
								alt: product.name,
								className: "w-full h-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 flex flex-col md:flex-row md:items-center gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/product/$slug",
											params: { slug: product.slug },
											className: "font-medium hover:text-cocoa",
											children: product.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs text-ink-soft mt-1",
											children: [
												product.color,
												" · ",
												product.material
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm text-cocoa font-semibold mt-2 md:hidden",
											children: formatINR(product.price)
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center border border-border w-fit",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setQty(product.id, qty - 1),
											className: "px-2.5 py-2 hover:bg-secondary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { size: 12 })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "px-3 text-sm font-medium",
											children: qty
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setQty(product.id, qty + 1),
											className: "px-2.5 py-2 hover:bg-secondary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 12 })
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden md:block w-24 text-right font-semibold text-cocoa",
									children: formatINR(lineTotal)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => remove(product.id),
									className: "text-ink-soft hover:text-destructive",
									"aria-label": "Remove",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 16 })
								})
							]
						})]
					}, product.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "bg-background border border-border p-6 h-fit",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-xl mb-5",
							children: "Order Summary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: `Subtotal (${count} items)`,
									value: formatINR(subtotal)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Shipping",
									value: shipping === 0 ? "Free" : formatINR(shipping)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Tax (5%)",
									value: formatINR(tax)
								}),
								applied > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Discount",
									value: `− ${formatINR(applied)}`
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: coupon,
								onChange: (e) => setCoupon(e.target.value),
								placeholder: "Coupon code",
								className: "flex-1 border border-border px-3 py-2.5 text-sm bg-background"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setApplied(coupon.toUpperCase() === "FARAH10" ? Math.round(subtotal * .1) : 0),
								className: "px-4 bg-cocoa text-white text-[11px] tracking-[0.18em] uppercase",
								children: "Apply"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-ink-soft mt-2",
							children: [
								"Try code ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-cocoa",
									children: "FARAH10"
								}),
								" for 10% off."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border mt-5 pt-5 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-ink-soft",
								children: "Total"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-2xl text-cocoa",
								children: formatINR(total)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/checkout",
							className: "btn-primary w-full justify-center mt-5",
							children: ["Proceed to Checkout ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							className: "block text-center text-xs tracking-[0.18em] uppercase mt-3 text-ink-soft hover:text-ink link-underline w-fit mx-auto",
							children: "Continue Shopping"
						})
					]
				})]
			})
		]
	}) });
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-ink-soft",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-medium",
			children: value
		})]
	});
}
//#endregion
export { CartPage as component };
