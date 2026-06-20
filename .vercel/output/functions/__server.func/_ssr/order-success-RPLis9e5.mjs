import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as CircleCheck, v as Package } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-6OHGRN1U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order-success-RPLis9e5.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "container-x py-24 max-w-xl text-center",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-16 h-16 grid place-items-center bg-gold/15 text-gold rounded-full mx-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { size: 32 })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl md:text-4xl mt-6",
			children: "Thank You For Your Order"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-ink-soft mt-3",
			children: "Your order has been confirmed. We've emailed you a receipt with the details."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-secondary border border-border p-5 text-left mt-8 flex items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "text-cocoa" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[11px] tracking-[0.18em] uppercase text-ink-soft",
				children: "Order Number"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "font-display text-lg",
				children: ["#FB", Math.floor(Math.random() * 9e3 + 1e3)]
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex justify-center gap-3 mt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/account/orders",
				className: "btn-outline text-cocoa",
				children: "Track Order"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/shop",
				className: "btn-primary",
				children: "Continue Shopping"
			})]
		})
	]
}) });
//#endregion
export { SplitComponent as component };
