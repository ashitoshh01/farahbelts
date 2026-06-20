import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as products, r as formatINR } from "./cart-gYbkUBbD.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as FileText, n as Users, s as TrendingUp, v as Package } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-6OHGRN1U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/b2b.dashboard-bE3zU8ZV.js
var import_jsx_runtime = require_jsx_runtime();
function B2BDash() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-x py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "eyebrow",
				children: "Partner Dashboard"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl md:text-4xl mt-2",
				children: "Welcome, Sharma Leathers"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10",
				children: [
					{
						Icon: Package,
						l: "Total Orders",
						v: "142"
					},
					{
						Icon: TrendingUp,
						l: "This Month",
						v: "₹2.4L"
					},
					{
						Icon: FileText,
						l: "Pending Invoices",
						v: "3"
					},
					{
						Icon: Users,
						l: "Account Manager",
						v: "Priya R."
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-background border border-border p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.Icon, {
							className: "text-gold",
							size: 20,
							strokeWidth: 1.5
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] tracking-[0.18em] uppercase text-ink-soft mt-3",
							children: s.l
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-2xl mt-1",
							children: s.v
						})
					]
				}, s.l))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-3 gap-6 mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2 bg-background border border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-6 py-4 border-b border-border flex justify-between items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl",
							children: "Recent Orders"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/account/orders",
							className: "text-xs tracking-[0.16em] uppercase link-underline",
							children: "View all"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "text-left text-[11px] tracking-[0.16em] uppercase text-ink-soft",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-3",
									children: "Order"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Date" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Items" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "text-right pr-6",
									children: "Total"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: [
							[
								"#WS1142",
								"12 Jun",
								"120 belts",
								"₹84,000"
							],
							[
								"#WS1129",
								"05 Jun",
								"60 wallets",
								"₹38,400"
							],
							[
								"#WS1108",
								"28 May",
								"200 belts",
								"₹1,40,000"
							]
						].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-4 font-medium",
									children: r[0]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r[1] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r[2] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "text-right pr-6 font-semibold text-cocoa",
									children: r[3]
								})
							]
						}, r[0])) })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-cocoa text-cream p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl",
							children: "Your Account Manager"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 text-sm text-cream/80",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-medium text-cream",
									children: "Priya R."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "priya@farahbelts.com" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "+91 98765 12345" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn-outline text-cream mt-6 w-full justify-center",
							children: "Contact"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl mb-6",
					children: "Wholesale Pricing"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-background border border-border overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm min-w-[640px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "text-left text-[11px] tracking-[0.16em] uppercase text-ink-soft",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3",
									children: "Product"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Retail" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Wholesale" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "MOQ" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "pr-5",
									children: "Bulk (100+)"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: products.slice(0, 5).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-5 py-3 font-medium flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.image,
										alt: "",
										className: "w-10 h-10 object-cover bg-secondary"
									}), p.name]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "text-ink-soft line-through",
									children: formatINR(p.price)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "font-semibold text-cocoa",
									children: formatINR(Math.round(p.price * .6))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "25" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "pr-5 font-semibold text-gold",
									children: formatINR(Math.round(p.price * .45))
								})
							]
						}, p.id)) })]
					})
				})]
			})
		]
	}) });
}
//#endregion
export { B2BDash as component };
