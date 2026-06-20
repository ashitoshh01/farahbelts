import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account.index-D4aVCUa7.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "font-display text-2xl mb-6",
		children: "Profile"
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid md:grid-cols-2 gap-4",
		children: [
			["First Name", "Aarav"],
			["Last Name", "Sharma"],
			["Email", "aarav@example.com"],
			["Phone", "+91 98765 43210"]
		].map(([l, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-[11px] tracking-[0.18em] uppercase text-ink-soft mb-1.5",
			children: l
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			defaultValue: v,
			className: "w-full border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-cocoa"
		})] }, l))
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: "btn-primary mt-6",
		children: "Save Changes"
	})
] });
//#endregion
export { SplitComponent as component };
