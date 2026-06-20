import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as products } from "./cart-gYbkUBbD.mjs";
import { t as SiteLayout } from "./SiteLayout-6OHGRN1U.mjs";
import { t as ProductCard } from "./ProductCard-yon-5p0o.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop.index-CaRPMAJb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ShopAll() {
	const [sort, setSort] = (0, import_react.useState)("featured");
	const [max, setMax] = (0, import_react.useState)(1e4);
	const list = (0, import_react.useMemo)(() => {
		const f = products.filter((p) => p.price <= max);
		if (sort === "low") return [...f].sort((a, b) => a.price - b.price);
		if (sort === "high") return [...f].sort((a, b) => b.price - a.price);
		if (sort === "rating") return [...f].sort((a, b) => b.rating - a.rating);
		return f;
	}, [sort, max]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-secondary border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow",
					children: "All Products"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl md:text-4xl mt-2",
					children: "The Full Collection"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-ink-soft mt-2 max-w-xl",
					children: "Every piece, handpicked and crafted for everyday luxury."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-x py-10 grid lg:grid-cols-[260px_1fr] gap-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "space-y-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterBlock, {
					title: "Sort",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: sort,
						onChange: (e) => setSort(e.target.value),
						className: "w-full bg-background border border-border px-3 py-2.5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "featured",
								children: "Featured"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "low",
								children: "Price: Low to High"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "high",
								children: "Price: High to Low"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "rating",
								children: "Top Rated"
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterBlock, {
					title: `Max Price: ₹${max.toLocaleString("en-IN")}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "range",
						min: 500,
						max: 1e4,
						step: 100,
						value: max,
						onChange: (e) => setMax(+e.target.value),
						className: "w-full accent-cocoa"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterBlock, {
					title: "Category",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2 text-sm",
						children: [
							"Wallets",
							"Belts",
							"Bags",
							"Jackets"
						].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-center gap-2 text-ink-soft hover:text-ink cursor-pointer",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									className: "accent-cocoa"
								}),
								" ",
								c
							]
						}) }, c))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterBlock, {
					title: "Color",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							"#4A2C1A",
							"#8B5A2B",
							"#000",
							"#C19A6B"
						].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "w-7 h-7 rounded-full border border-border",
							style: { background: c },
							"aria-label": c
						}, c))
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-sm text-ink-soft mb-5",
			children: [list.length, " products"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6",
			children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { p }, p.id))
		})] })]
	})] });
}
function FilterBlock({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-[11px] tracking-[0.2em] uppercase font-semibold text-ink mb-3",
		children: title
	}), children] });
}
//#endregion
export { ShopAll as component };
