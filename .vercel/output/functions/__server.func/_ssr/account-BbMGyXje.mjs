import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as Outlet, g as Link, l as useLocation } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as Heart, N as Bell, p as Settings, r as User, v as Package, x as MapPin } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-6OHGRN1U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-BbMGyXje.js
var import_jsx_runtime = require_jsx_runtime();
function Sidebar() {
	const path = useLocation({ select: (l) => l.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		className: "bg-background border border-border",
		children: [
			{
				to: "/account",
				label: "Profile",
				Icon: User
			},
			{
				to: "/account/orders",
				label: "Orders",
				Icon: Package
			},
			{
				to: "/account/addresses",
				label: "Addresses",
				Icon: MapPin
			},
			{
				to: "/account/wishlist",
				label: "Wishlist",
				Icon: Heart
			},
			{
				to: "/account/notifications",
				label: "Notifications",
				Icon: Bell
			},
			{
				to: "/account/settings",
				label: "Settings",
				Icon: Settings
			}
		].map(({ to, label, Icon }) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to,
				className: `flex items-center gap-3 px-5 py-4 text-sm border-b border-border last:border-0 ${path === to ? "bg-secondary text-cocoa font-semibold" : "text-ink hover:bg-secondary"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						size: 16,
						strokeWidth: 1.5
					}),
					" ",
					label
				]
			}, to);
		})
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "container-x py-12",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "eyebrow",
			children: "My Account"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl md:text-4xl mt-2",
			children: "Welcome back"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:grid-cols-[240px_1fr] gap-8 mt-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sidebar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-background border border-border p-6 md:p-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			})]
		})
	]
}) });
//#endregion
export { SplitComponent as component };
