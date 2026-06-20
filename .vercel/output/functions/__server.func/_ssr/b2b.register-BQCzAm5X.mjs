import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SiteLayout } from "./SiteLayout-6OHGRN1U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/b2b.register-BQCzAm5X.js
var import_jsx_runtime = require_jsx_runtime();
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
	className: "container-x py-16 max-w-2xl",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "eyebrow",
			children: "Apply for Wholesale"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl md:text-4xl mt-2",
			children: "Become a Farah Partner"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-ink-soft mt-2",
			children: "All wholesale accounts are subject to approval. We respond within 1–2 business days."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mt-8 grid md:grid-cols-2 gap-4 bg-background border border-border p-6 md:p-8",
			onSubmit: (e) => e.preventDefault(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "Business Name",
					required: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "GST Number",
					required: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "Contact Name",
					required: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "Phone",
					type: "tel",
					required: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
						label: "Business Email",
						type: "email",
						required: true
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
						label: "Address",
						required: true
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "City",
					required: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "State",
					required: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[11px] tracking-[0.18em] uppercase text-ink-soft mb-1.5",
							children: "Tell us about your business"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 4,
							className: "w-full border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-cocoa"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn-primary",
						children: "Submit Application"
					})
				})
			]
		})
	]
}) });
//#endregion
export { SplitComponent as component };
