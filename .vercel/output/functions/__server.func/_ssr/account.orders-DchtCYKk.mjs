import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { T as House, j as Check, o as Truck, v as Package } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account.orders-DchtCYKk.js
var import_jsx_runtime = require_jsx_runtime();
function Orders() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "font-display text-2xl mb-6",
		children: "Your Orders"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-4",
		children: [{
			id: "FB1042",
			date: "12 Jun 2026",
			total: "₹3,798",
			status: "Shipped"
		}, {
			id: "FB0987",
			date: "28 May 2026",
			total: "₹1,599",
			status: "Delivered"
		}].map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border border-border p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-medium",
						children: ["Order #", o.id]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-ink-soft",
						children: ["Placed on ", o.date]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-lg text-cocoa",
						children: o.total
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] tracking-[0.16em] uppercase bg-secondary px-3 py-1.5",
						children: o.status
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, { status: o.status })]
		}, o.id))
	})] });
}
function Timeline({ status }) {
	const steps = [
		{
			label: "Packed",
			Icon: Package
		},
		{
			label: "Shipped",
			Icon: Truck
		},
		{
			label: "Out for Delivery",
			Icon: Truck
		},
		{
			label: "Delivered",
			Icon: House
		}
	];
	const idx = status === "Delivered" ? 3 : status === "Shipped" ? 1 : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center mt-6",
		children: steps.map((s, i) => {
			const done = i <= idx;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 flex items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `w-9 h-9 rounded-full grid place-items-center ${done ? "bg-cocoa text-white" : "bg-secondary text-ink-soft"}`,
						children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 14 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.Icon, { size: 14 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `text-[10px] tracking-[0.14em] uppercase ${done ? "text-cocoa font-semibold" : "text-ink-soft"}`,
						children: s.label
					})]
				}), i < steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `flex-1 h-px mx-2 ${i < idx ? "bg-cocoa" : "bg-border"}` })]
			}, s.label);
		})
	});
}
//#endregion
export { Orders as component };
