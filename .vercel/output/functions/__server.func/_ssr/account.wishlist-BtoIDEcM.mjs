import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as products } from "./cart-gYbkUBbD.mjs";
import { t as ProductCard } from "./ProductCard-yon-5p0o.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account.wishlist-BtoIDEcM.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
	className: "font-display text-2xl mb-6",
	children: "Wishlist"
}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "grid grid-cols-2 md:grid-cols-3 gap-5",
	children: products.slice(0, 3).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { p }, p.id))
})] });
//#endregion
export { SplitComponent as component };
