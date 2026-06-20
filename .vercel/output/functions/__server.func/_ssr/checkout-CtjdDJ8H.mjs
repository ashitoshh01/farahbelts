import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as useCart, r as formatINR } from "./cart-gYbkUBbD.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Lock, j as Check, k as CreditCard } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-6OHGRN1U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-CtjdDJ8H.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Checkout() {
	const { detailed, subtotal, count, clear } = useCart();
	const nav = useNavigate();
	const [step, setStep] = (0, import_react.useState)(1);
	const shipping = subtotal > 999 ? 0 : 99;
	const tax = Math.round(subtotal * .05);
	const total = subtotal + shipping + tax;
	if (count === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-x py-24 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: "Your cart is empty"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/shop",
			className: "btn-primary mt-6 inline-flex",
			children: "Shop now"
		})]
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-x py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "eyebrow",
				children: "Checkout"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl md:text-4xl mt-2",
				children: "Complete Your Order"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-4 mt-8 mb-10 text-xs tracking-[0.16em] uppercase",
				children: [
					"Shipping",
					"Review",
					"Payment"
				].map((s, i) => {
					const n = i + 1;
					const active = step === n;
					const done = step > n;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `w-7 h-7 grid place-items-center rounded-full text-[11px] ${done ? "bg-cocoa text-white" : active ? "bg-gold text-white" : "bg-secondary text-ink-soft"}`,
								children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 14 }) : n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: active ? "text-cocoa font-semibold" : "text-ink-soft",
								children: s
							}),
							i < 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10 h-px bg-border" })
						]
					}, s);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-[1fr_380px] gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-background border border-border p-6 md:p-8",
					children: [
						step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								setStep(2);
							},
							className: "grid md:grid-cols-2 gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Full Name",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Phone",
									type: "tel",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "md:col-span-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Email",
										type: "email",
										required: true
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "md:col-span-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Street Address",
										required: true
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "City",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "State",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "PIN Code",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Country",
									defaultValue: "India"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "md:col-span-2 flex justify-end pt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "btn-primary",
										children: "Continue to Review"
									})
								})
							]
						}),
						step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl mb-5",
								children: "Review Your Order"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "divide-y divide-border",
								children: detailed.map(({ product, qty, lineTotal }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "py-4 flex gap-4 items-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: product.image,
											alt: "",
											className: "w-16 h-16 object-cover bg-secondary"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-medium",
												children: product.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-xs text-ink-soft",
												children: ["Qty: ", qty]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold text-cocoa",
											children: formatINR(lineTotal)
										})
									]
								}, product.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between mt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setStep(1),
									className: "btn-outline text-cocoa",
									children: "Back"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setStep(3),
									className: "btn-primary",
									children: "Continue to Payment"
								})]
							})
						] }),
						step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-display text-xl mb-5 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { size: 20 }), " Payment"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3",
								children: ["Razorpay (Cards, UPI, Netbanking)", "Cash on Delivery"].map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-3 border border-border p-4 cursor-pointer hover:border-cocoa",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "pay",
										defaultChecked: i === 0,
										className: "accent-cocoa"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm",
										children: m
									})]
								}, m))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs text-ink-soft mt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { size: 12 }), " Your payment is encrypted and secure."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between mt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setStep(2),
									className: "btn-outline text-cocoa",
									children: "Back"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => {
										clear();
										nav({ to: "/order-success" });
									},
									className: "btn-primary",
									children: ["Place Order · ", formatINR(total)]
								})]
							})
						] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "bg-background border border-border p-6 h-fit",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-xl mb-5",
							children: "Summary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: `Subtotal (${count})`,
									value: formatINR(subtotal)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Shipping",
									value: shipping === 0 ? "Free" : formatINR(shipping)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Tax",
									value: formatINR(tax)
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border mt-4 pt-4 flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl text-cocoa",
								children: formatINR(total)
							})]
						})
					]
				})]
			})
		]
	}) });
}
function Field({ label, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-[11px] tracking-[0.18em] uppercase text-ink-soft mb-1.5",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			...rest,
			className: "w-full border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-cocoa"
		})]
	});
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
export { Checkout as component };
