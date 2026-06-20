import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as useCart, r as formatINR } from "./cart-gYbkUBbD.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as Heart, u as Star } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductCard-yon-5p0o.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ p }) {
	const { add } = useCart();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/product/$slug",
			params: { slug: p.slug },
			className: "relative block bg-secondary aspect-square overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.image,
					alt: p.name,
					loading: "lazy",
					width: 768,
					height: 768,
					className: "w-full h-full object-cover transition duration-700 group-hover:scale-105"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Wishlist",
					className: "absolute top-3 right-3 w-9 h-9 grid place-items-center bg-background/90 backdrop-blur text-ink hover:text-gold transition",
					onClick: (e) => e.preventDefault(),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
						size: 16,
						strokeWidth: 1.5
					})
				}),
				p.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute top-3 left-3 bg-cocoa text-white text-[10px] tracking-[0.18em] uppercase px-2 py-1",
					children: p.badge
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pt-4 px-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/product/$slug",
					params: { slug: p.slug },
					className: "block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-[15px] font-medium text-ink leading-snug",
						children: p.name
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 mt-1.5 text-ink-soft text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
							size: 12,
							fill: "currentColor",
							className: "text-gold",
							strokeWidth: 0
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-ink",
							children: p.rating
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"(",
							p.reviews,
							")"
						] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline gap-2 mt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-base font-semibold text-cocoa",
						children: formatINR(p.price)
					}), p.originalPrice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-ink-soft line-through",
						children: formatINR(p.originalPrice)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => add(p.id),
					className: "mt-3 w-full bg-cocoa text-white text-[11px] tracking-[0.18em] uppercase py-3 hover:bg-cocoa-deep transition",
					children: "Add to Cart"
				})
			]
		})]
	});
}
//#endregion
export { ProductCard as t };
