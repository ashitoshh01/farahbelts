import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as ArrowRight, M as Briefcase, c as TrendingDown, n as Users, v as Package } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-6OHGRN1U.mjs";
import { t as banner_b2b_default } from "./banner-b2b-DPj9YWCN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/b2b-7pohOB8n.js
var import_jsx_runtime = require_jsx_runtime();
function B2B() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative bg-cocoa-deep text-cream",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: banner_b2b_default,
				alt: "",
				className: "absolute inset-0 w-full h-full object-cover opacity-40"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative container-x py-24 max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow",
						children: "Farah Wholesale"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display text-4xl md:text-6xl mt-4 text-cream leading-tight",
						children: [
							"Better Prices.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Bigger Opportunities."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-cream/80 mt-5 max-w-xl",
						children: "Premium leather goods at exceptional wholesale rates. Trusted by retailers, gifting partners and brands across India."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/b2b/register",
							className: "btn-primary",
							children: ["Apply for Wholesale ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/b2b/bulk",
							className: "btn-outline text-cream",
							children: ["Bulk Order ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-20 grid md:grid-cols-4 gap-px bg-border border border-border",
			children: [
				{
					Icon: TrendingDown,
					t: "Up to 40% Off",
					s: "Wholesale tier pricing"
				},
				{
					Icon: Package,
					t: "Low MOQ",
					s: "Starting at 25 units"
				},
				{
					Icon: Briefcase,
					t: "Custom Manufacturing",
					s: "OEM and private label"
				},
				{
					Icon: Users,
					t: "Account Manager",
					s: "Dedicated support"
				}
			].map(({ Icon, t, s }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-background p-7 flex gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-11 h-11 grid place-items-center bg-secondary text-gold shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						size: 20,
						strokeWidth: 1.5
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[12px] tracking-[0.18em] uppercase font-semibold",
					children: t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm text-ink-soft mt-1",
					children: s
				})] })]
			}, t))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-2 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/b2b/dashboard",
					className: "block bg-cocoa text-cream p-10 hover:bg-cocoa-deep transition",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] tracking-[0.22em] uppercase text-gold-soft",
							children: "For Partners"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl mt-2",
							children: "Partner Dashboard"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-cream/80 mt-2 text-sm",
							children: "View orders, invoices, and exclusive wholesale pricing."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 text-xs tracking-[0.18em] uppercase flex items-center gap-2 text-gold",
							children: ["Enter Dashboard ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/b2b/bulk",
					className: "block bg-secondary border border-border p-10 hover:border-cocoa transition",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] tracking-[0.22em] uppercase text-gold",
							children: "New Buyer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl mt-2",
							children: "Request a Quote"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-ink-soft mt-2 text-sm",
							children: "Tell us what you need — we'll price your order within 24 hours."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 text-xs tracking-[0.18em] uppercase flex items-center gap-2 text-cocoa",
							children: ["Submit RFQ ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
						})
					]
				})]
			})
		})
	] });
}
//#endregion
export { B2B as component };
