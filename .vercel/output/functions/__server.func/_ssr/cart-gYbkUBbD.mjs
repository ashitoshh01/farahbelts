import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-gYbkUBbD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var cat_wallets_default = "/assets/cat-wallets-CggsISN5.jpg";
var cat_belts_default = "/assets/cat-belts-BPbl4Hj1.jpg";
var cat_bags_default = "/assets/cat-bags-BxkLNkBB.jpg";
var cat_jackets_default = "/assets/cat-jackets-C-oQ19Wj.jpg";
var p_belt_default = "/assets/p-belt-Dj-kdgj8.jpg";
var p_wallet_tan_default = "/assets/p-wallet-tan-sd5CLGnY.jpg";
var p_wallet_black_default = "/assets/p-wallet-black-2wwZ_JHl.jpg";
var p_duffle_default = "/assets/p-duffle-CCm7rfyx.jpg";
var p_sling_default = "/assets/p-sling-CQsPDMQm.jpg";
var p_jacket_default = "/assets/p-jacket-DhCqbNZe.jpg";
var categories = [
	{
		slug: "wallets",
		name: "Wallets",
		tagline: "Explore Collection",
		image: cat_wallets_default
	},
	{
		slug: "belts",
		name: "Belts",
		tagline: "Explore Collection",
		image: cat_belts_default
	},
	{
		slug: "bags",
		name: "Bags",
		tagline: "Explore Collection",
		image: cat_bags_default
	},
	{
		slug: "jackets",
		name: "Jackets",
		tagline: "Explore Collection",
		image: cat_jackets_default
	}
];
var products = [
	{
		id: "classic-leather-belt",
		name: "Classic Leather Belt",
		slug: "classic-leather-belt",
		category: "belts",
		price: 799,
		originalPrice: 1299,
		rating: 4.6,
		reviews: 348,
		image: p_belt_default,
		color: "Brown",
		material: "Full-Grain Leather",
		badge: "Bestseller",
		description: "A timeless full-grain leather belt with solid brass buckle. Hand-finished edges and durable stitching designed to age beautifully with everyday wear."
	},
	{
		id: "tan-leather-wallet",
		name: "Tan Leather Wallet",
		slug: "tan-leather-wallet",
		category: "wallets",
		price: 699,
		originalPrice: 1099,
		rating: 4.5,
		reviews: 256,
		image: p_wallet_tan_default,
		color: "Tan",
		material: "Vegetable-Tanned Leather",
		description: "Slim bifold crafted from premium vegetable-tanned leather. Eight card slots, two cash compartments and an RFID-shield lining."
	},
	{
		id: "premium-bifold-wallet",
		name: "Premium Bifold Wallet",
		slug: "premium-bifold-wallet",
		category: "wallets",
		price: 899,
		rating: 4.7,
		reviews: 512,
		image: p_wallet_black_default,
		color: "Black",
		material: "Nappa Leather",
		badge: "New",
		description: "Refined bifold in supple nappa leather with subtle pebble grain. Built for years of daily carry."
	},
	{
		id: "leather-duffle-bag",
		name: "Leather Duffle Bag",
		slug: "leather-duffle-bag",
		category: "bags",
		price: 2999,
		originalPrice: 4499,
		rating: 4.5,
		reviews: 198,
		image: p_duffle_default,
		color: "Cognac",
		material: "Full-Grain Leather",
		description: "Travel-ready weekender with reinforced base, brass hardware and a detachable shoulder strap."
	},
	{
		id: "leather-sling-bag",
		name: "Leather Sling Bag",
		slug: "leather-sling-bag",
		category: "bags",
		price: 1599,
		rating: 4.4,
		reviews: 164,
		image: p_sling_default,
		color: "Brown",
		material: "Pebble Leather",
		description: "Compact crossbody with secure zip closure, adjustable strap and three interior compartments."
	},
	{
		id: "classic-leather-jacket",
		name: "Classic Leather Jacket",
		slug: "classic-leather-jacket",
		category: "jackets",
		price: 4999,
		originalPrice: 7999,
		rating: 4.6,
		reviews: 312,
		image: p_jacket_default,
		color: "Cognac",
		material: "Lamb Leather",
		badge: "Limited",
		description: "Tailored silhouette in soft lamb leather with brushed silver hardware. A modern heirloom for everyday wear."
	}
];
var formatINR = (v) => new Intl.NumberFormat("en-IN", {
	style: "currency",
	currency: "INR",
	maximumFractionDigits: 0
}).format(v);
var Ctx = (0, import_react.createContext)(null);
var KEY = "farah_cart_v1";
function CartProvider({ children }) {
	const [items, setItems] = (0, import_react.useState)([]);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = typeof window !== "undefined" ? localStorage.getItem(KEY) : null;
			if (raw) setItems(JSON.parse(raw));
		} catch {}
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		try {
			localStorage.setItem(KEY, JSON.stringify(items));
		} catch {}
	}, [items, ready]);
	const value = (0, import_react.useMemo)(() => {
		const detailed = items.map((i) => {
			const p = products.find((p) => p.id === i.id);
			return p ? {
				product: p,
				qty: i.qty,
				lineTotal: p.price * i.qty
			} : null;
		}).filter(Boolean);
		return {
			items,
			add: (id, qty = 1) => setItems((prev) => {
				if (prev.find((p) => p.id === id)) return prev.map((p) => p.id === id ? {
					...p,
					qty: p.qty + qty
				} : p);
				return [...prev, {
					id,
					qty
				}];
			}),
			remove: (id) => setItems((prev) => prev.filter((p) => p.id !== id)),
			setQty: (id, qty) => setItems((prev) => qty <= 0 ? prev.filter((p) => p.id !== id) : prev.map((p) => p.id === id ? {
				...p,
				qty
			} : p)),
			clear: () => setItems([]),
			count: items.reduce((a, i) => a + i.qty, 0),
			subtotal: detailed.reduce((a, d) => a + d.lineTotal, 0),
			detailed
		};
	}, [items]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ctx.Provider, {
		value,
		children
	});
}
function useCart() {
	const c = (0, import_react.useContext)(Ctx);
	if (!c) throw new Error("useCart must be used inside CartProvider");
	return c;
}
//#endregion
export { useCart as a, products as i, categories as n, formatINR as r, CartProvider as t };
