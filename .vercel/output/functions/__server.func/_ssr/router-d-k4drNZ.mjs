import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as CartProvider } from "./cart-gYbkUBbD.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$21 } from "./product._slug-C7vYhH0V.mjs";
import { t as Route$22 } from "./shop._category-DQprkXrD.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-d-k4drNZ.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-B6NoNj5a.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-display text-cocoa",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-display text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "btn-primary",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-display text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "btn-primary",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "btn-outline",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$20 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Farah Belts — Premium Leather Wallets, Belts & Bags" },
			{
				name: "description",
				content: "Premium leather essentials crafted to last. Shop wallets, belts, bags and jackets from Farah Belts — built in India, made for life."
			},
			{
				name: "author",
				content: "Farah Belts"
			},
			{
				property: "og:title",
				content: "Farah Belts — Premium Leather Wallets, Belts & Bags"
			},
			{
				property: "og:description",
				content: "Premium leather essentials crafted to last. Shop wallets, belts, bags and jackets from Farah Belts — built in India, made for life."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Farah Belts — Premium Leather Wallets, Belts & Bags"
			},
			{
				name: "twitter:description",
				content: "Premium leather essentials crafted to last. Shop wallets, belts, bags and jackets from Farah Belts — built in India, made for life."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9f1a8a0d-de77-4dd8-a1b9-b208be368b62/id-preview-da15cf4a--9e7bc740-a291-461c-bec5-01be727fa8de.lovable.app-1781889231538.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9f1a8a0d-de77-4dd8-a1b9-b208be368b62/id-preview-da15cf4a--9e7bc740-a291-461c-bec5-01be727fa8de.lovable.app-1781889231538.png"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$20.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
	});
}
var $$splitComponentImporter$19 = () => import("./shop-C1QSjShi.mjs");
var Route$19 = createFileRoute("/shop")({ component: lazyRouteComponent($$splitComponentImporter$19, "component") });
var $$splitComponentImporter$18 = () => import("./order-success-RPLis9e5.mjs");
var Route$18 = createFileRoute("/order-success")({
	head: () => ({ meta: [{ title: "Order Confirmed — Farah Belts" }] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./contact-CykPDy74.mjs");
var Route$17 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact — Farah Belts" }] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./checkout-CtjdDJ8H.mjs");
var Route$16 = createFileRoute("/checkout")({
	head: () => ({ meta: [{ title: "Checkout — Farah Belts" }] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./cart-B3dIHuCw.mjs");
var Route$15 = createFileRoute("/cart")({
	head: () => ({ meta: [{ title: "Cart — Farah Belts" }] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./b2b-7pohOB8n.mjs");
var Route$14 = createFileRoute("/b2b")({
	head: () => ({ meta: [{ title: "Wholesale — Farah Belts B2B" }, {
		name: "description",
		content: "Wholesale leather goods at exceptional prices. Bulk orders, custom manufacturing, dedicated account managers."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./auth-BcTTBY3E.mjs");
var Route$13 = createFileRoute("/auth")({
	head: () => ({ meta: [{ title: "Account — Farah Belts" }] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./account-BbMGyXje.mjs");
var Route$12 = createFileRoute("/account")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./about-DROR_LjA.mjs");
var Route$11 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About Farah Belts — Crafted with Heritage" }, {
		name: "description",
		content: "Our story: premium leather craftsmanship, built in India, designed for life."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./routes-B6QXjm-r.mjs");
var Route$10 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Farah Belts — Crafted To Last. Designed For Life." },
		{
			name: "description",
			content: "Premium leather wallets, belts, bags and jackets. Handcrafted, durable, timeless."
		},
		{
			property: "og:title",
			content: "Farah Belts — Premium Leather Goods"
		},
		{
			property: "og:description",
			content: "Crafted to last. Designed for life."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./shop.index-CaRPMAJb.mjs");
var Route$9 = createFileRoute("/shop/")({
	head: () => ({ meta: [{ title: "Shop — Farah Belts" }, {
		name: "description",
		content: "Browse the full collection of premium leather goods."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./account.index-D4aVCUa7.mjs");
var Route$8 = createFileRoute("/account/")({
	head: () => ({ meta: [{ title: "Profile — Farah Belts" }] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./b2b.register-BQCzAm5X.mjs");
var Route$7 = createFileRoute("/b2b/register")({
	head: () => ({ meta: [{ title: "Wholesale Registration — Farah Belts" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./b2b.dashboard-bE3zU8ZV.mjs");
var Route$6 = createFileRoute("/b2b/dashboard")({
	head: () => ({ meta: [{ title: "B2B Dashboard — Farah Belts" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./b2b.bulk-CSS-cYzs.mjs");
var Route$5 = createFileRoute("/b2b/bulk")({
	head: () => ({ meta: [{ title: "Bulk Order — Farah Belts B2B" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./account.wishlist-BtoIDEcM.mjs");
var Route$4 = createFileRoute("/account/wishlist")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./account.settings-DYRdSNCQ.mjs");
var Route$3 = createFileRoute("/account/settings")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./account.orders-DchtCYKk.mjs");
var Route$2 = createFileRoute("/account/orders")({
	head: () => ({ meta: [{ title: "Orders — Farah Belts" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./account.notifications-iHskhKqY.mjs");
var Route$1 = createFileRoute("/account/notifications")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./account.addresses-COtiU5co.mjs");
var Route = createFileRoute("/account/addresses")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var ShopRoute = Route$19.update({
	id: "/shop",
	path: "/shop",
	getParentRoute: () => Route$20
});
var OrderSuccessRoute = Route$18.update({
	id: "/order-success",
	path: "/order-success",
	getParentRoute: () => Route$20
});
var ContactRoute = Route$17.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$20
});
var CheckoutRoute = Route$16.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$20
});
var CartRoute = Route$15.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => Route$20
});
var B2bRoute = Route$14.update({
	id: "/b2b",
	path: "/b2b",
	getParentRoute: () => Route$20
});
var AuthRoute = Route$13.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$20
});
var AccountRoute = Route$12.update({
	id: "/account",
	path: "/account",
	getParentRoute: () => Route$20
});
var AboutRoute = Route$11.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$20
});
var IndexRoute = Route$10.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$20
});
var ShopIndexRoute = Route$9.update({
	id: "/",
	path: "/",
	getParentRoute: () => ShopRoute
});
var AccountIndexRoute = Route$8.update({
	id: "/",
	path: "/",
	getParentRoute: () => AccountRoute
});
var ShopCategoryRoute = Route$22.update({
	id: "/$category",
	path: "/$category",
	getParentRoute: () => ShopRoute
});
var ProductSlugRoute = Route$21.update({
	id: "/product/$slug",
	path: "/product/$slug",
	getParentRoute: () => Route$20
});
var B2bRegisterRoute = Route$7.update({
	id: "/register",
	path: "/register",
	getParentRoute: () => B2bRoute
});
var B2bDashboardRoute = Route$6.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => B2bRoute
});
var B2bBulkRoute = Route$5.update({
	id: "/bulk",
	path: "/bulk",
	getParentRoute: () => B2bRoute
});
var AccountWishlistRoute = Route$4.update({
	id: "/wishlist",
	path: "/wishlist",
	getParentRoute: () => AccountRoute
});
var AccountSettingsRoute = Route$3.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => AccountRoute
});
var AccountOrdersRoute = Route$2.update({
	id: "/orders",
	path: "/orders",
	getParentRoute: () => AccountRoute
});
var AccountNotificationsRoute = Route$1.update({
	id: "/notifications",
	path: "/notifications",
	getParentRoute: () => AccountRoute
});
var AccountRouteChildren = {
	AccountAddressesRoute: Route.update({
		id: "/addresses",
		path: "/addresses",
		getParentRoute: () => AccountRoute
	}),
	AccountNotificationsRoute,
	AccountOrdersRoute,
	AccountSettingsRoute,
	AccountWishlistRoute,
	AccountIndexRoute
};
var AccountRouteWithChildren = AccountRoute._addFileChildren(AccountRouteChildren);
var B2bRouteChildren = {
	B2bBulkRoute,
	B2bDashboardRoute,
	B2bRegisterRoute
};
var B2bRouteWithChildren = B2bRoute._addFileChildren(B2bRouteChildren);
var ShopRouteChildren = {
	ShopCategoryRoute,
	ShopIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AccountRoute: AccountRouteWithChildren,
	AuthRoute,
	B2bRoute: B2bRouteWithChildren,
	CartRoute,
	CheckoutRoute,
	ContactRoute,
	OrderSuccessRoute,
	ShopRoute: ShopRoute._addFileChildren(ShopRouteChildren),
	ProductSlugRoute
};
var routeTree = Route$20._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
