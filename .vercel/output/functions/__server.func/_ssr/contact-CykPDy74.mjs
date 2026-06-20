import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { S as Mail, _ as Phone, x as MapPin } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-6OHGRN1U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CykPDy74.js
var import_jsx_runtime = require_jsx_runtime();
function Info({ Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-10 h-10 grid place-items-center bg-secondary text-gold",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 16 })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[11px] tracking-[0.18em] uppercase text-ink-soft",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-medium",
			children: value
		})] })]
	});
}
function F({ label, ...rest }) {
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
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "container-x py-16 grid lg:grid-cols-2 gap-12",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "eyebrow",
			children: "Get in Touch"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl mt-2",
			children: "We'd love to hear from you."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-ink-soft mt-3 max-w-md",
			children: "Questions about a product, an order, or wholesale? Our team responds within 24 hours."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 space-y-4 text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
					Icon: Mail,
					label: "Email",
					value: "hello@farahbelts.com"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
					Icon: Phone,
					label: "Phone",
					value: "+91 98765 43210"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
					Icon: MapPin,
					label: "Address",
					value: "221B Brigade Road, Bengaluru, KA 560001"
				})
			]
		})
	] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "bg-background border border-border p-6 md:p-8 space-y-4 h-fit",
		onSubmit: (e) => e.preventDefault(),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
				label: "Name",
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
				label: "Email",
				type: "email",
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
				label: "Subject",
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-[11px] tracking-[0.18em] uppercase text-ink-soft mb-1.5",
					children: "Message"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					rows: 5,
					required: true,
					className: "w-full border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-cocoa"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "btn-primary",
				children: "Send Message"
			})
		]
	})]
}) });
//#endregion
export { SplitComponent as component };
