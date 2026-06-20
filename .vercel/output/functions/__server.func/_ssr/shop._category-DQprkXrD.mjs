import { n as categories } from "./cart-gYbkUBbD.mjs";
import { M as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop._category-DQprkXrD.js
var $$splitNotFoundComponentImporter = () => import("./shop._category-BnUkC2Fe.mjs");
var $$splitComponentImporter = () => import("./shop._category-DH-07nT3.mjs");
var Route = createFileRoute("/shop/$category")({
	head: ({ params }) => {
		const name = categories.find((x) => x.slug === params.category)?.name ?? "Shop";
		return { meta: [{ title: `${name} — Farah Belts` }, {
			name: "description",
			content: `Shop premium leather ${name.toLowerCase()} at Farah Belts.`
		}] };
	},
	loader: ({ params }) => {
		const c = categories.find((x) => x.slug === params.category);
		if (!c) throw notFound();
		return { category: c };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
