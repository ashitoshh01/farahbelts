import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as Upload } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-6OHGRN1U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/b2b.bulk-CSS-cYzs.js
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
	className: "container-x py-16 max-w-3xl",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "eyebrow",
			children: "Bulk Orders & RFQ"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl md:text-4xl mt-2",
			children: "Place a Large Quantity Order"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-ink-soft mt-2",
			children: "Upload a CSV or fill out the form below. We respond with quotes within 24 hours."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 bg-background border border-border p-6 md:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block border-2 border-dashed border-border p-8 text-center cursor-pointer hover:border-cocoa transition",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "mx-auto text-gold" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-medium mt-3",
							children: "Upload CSV File"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-ink-soft mt-1",
							children: "Columns: SKU, Quantity, Notes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "file",
							accept: ".csv",
							className: "hidden"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "my-6 text-center text-xs text-ink-soft",
					children: "— OR FILL THE QUICK ORDER FORM —"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid md:grid-cols-2 gap-4",
					onSubmit: (e) => e.preventDefault(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
							label: "Business Name",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
							label: "Contact Email",
							type: "email",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
							label: "Product / SKU",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
							label: "Quantity",
							type: "number",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[11px] tracking-[0.18em] uppercase text-ink-soft mb-1.5",
									children: "Additional Requirements"
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
								children: "Request Quote"
							})
						})
					]
				})
			]
		})
	]
}) });
//#endregion
export { SplitComponent as component };
