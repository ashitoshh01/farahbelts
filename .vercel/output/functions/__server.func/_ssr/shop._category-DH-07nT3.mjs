import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as products } from "./cart-gYbkUBbD.mjs";
import { t as SiteLayout } from "./SiteLayout-6OHGRN1U.mjs";
import { t as ProductCard } from "./ProductCard-yon-5p0o.mjs";
import { t as Route } from "./shop._category-DQprkXrD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop._category-DH-07nT3.js
var import_jsx_runtime = require_jsx_runtime();
function CategoryPage() {
	const { category } = Route.useLoaderData();
	const list = products.filter((p) => p.category === category.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative bg-cocoa-deep text-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: category.image,
			alt: category.name,
			className: "absolute inset-0 w-full h-full object-cover opacity-40"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative container-x py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow",
					children: "Collection"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl md:text-5xl mt-2 text-cream",
					children: category.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-cream/70 mt-2 max-w-xl",
					children: [
						"Curated ",
						category.name.toLowerCase(),
						" built to last and designed for daily life."
					]
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-x py-12",
		children: list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "py-20 text-center text-ink-soft",
			children: "No products yet in this collection."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6",
			children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { p }, p.id))
		})
	})] });
}
//#endregion
export { CategoryPage as component };
