import { i as products } from "./cart-gYbkUBbD.mjs";
import { M as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-C7vYhH0V.js
var $$splitNotFoundComponentImporter = () => import("./product._slug-9bSE3yFb.mjs");
var $$splitComponentImporter = () => import("./product._slug-B_klvtHV.mjs");
var Route = createFileRoute("/product/$slug")({
	head: ({ params }) => {
		const p = products.find((x) => x.slug === params.slug);
		return { meta: [
			{ title: p ? `${p.name} — Farah Belts` : "Product — Farah Belts" },
			{
				name: "description",
				content: p?.description ?? "Premium leather product."
			},
			{
				property: "og:title",
				content: p?.name ?? "Farah Belts"
			},
			{
				property: "og:description",
				content: p?.description ?? ""
			},
			...p?.image ? [{
				property: "og:image",
				content: p.image
			}] : []
		] };
	},
	loader: ({ params }) => {
		const product = products.find((x) => x.slug === params.slug);
		if (!product) throw notFound();
		return { product };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
