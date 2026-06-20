import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteLayout } from "./SiteLayout-6OHGRN1U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-BcTTBY3E.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AuthPage() {
	const [mode, setMode] = (0, import_react.useState)("login");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-x py-16 max-w-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-background border border-border p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-6 border-b border-border mb-6",
					children: ["login", "register"].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setMode(m),
						className: `pb-3 text-sm tracking-[0.12em] uppercase ${mode === m ? "text-cocoa border-b-2 border-cocoa font-semibold" : "text-ink-soft"}`,
						children: m === "login" ? "Sign In" : "Create Account"
					}, m))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl",
					children: mode === "login" ? "Welcome back" : "Join Farah"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-ink-soft mt-1",
					children: mode === "login" ? "Sign in to continue." : "Create your account to start shopping."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-6 space-y-4",
					onSubmit: (e) => e.preventDefault(),
					children: [
						mode === "register" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Full Name",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							type: "email",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Password",
							type: "password",
							required: true
						}),
						mode === "login" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/auth",
							className: "block text-right text-xs text-ink-soft link-underline w-fit ml-auto",
							children: "Forgot password?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn-primary w-full justify-center",
							children: mode === "login" ? "Sign In" : "Create Account"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 my-6 text-xs text-ink-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 h-px bg-border" }),
						" OR ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 h-px bg-border" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn-outline w-full justify-center text-cocoa",
					children: "Continue with Google"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] text-ink-soft text-center mt-6",
					children: "By continuing you agree to our Terms and Privacy Policy."
				})
			]
		})
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
//#endregion
export { AuthPage as component };
