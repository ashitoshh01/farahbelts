import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as useCart } from "./cart-gYbkUBbD.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as Facebook, a as Twitter, b as Menu, d as ShoppingBag, m as Search, r as User, t as X, w as Instagram } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteLayout-6OHGRN1U.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var nav = [
	{
		to: "/shop",
		label: "Shop"
	},
	{
		to: "/shop/wallets",
		label: "Wallets"
	},
	{
		to: "/shop/belts",
		label: "Belts"
	},
	{
		to: "/shop/bags",
		label: "Bags"
	},
	{
		to: "/shop/jackets",
		label: "Jackets"
	},
	{
		to: "/about",
		label: "About Us"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Header() {
	const { count } = useCart();
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-cocoa-deep text-cream/90 text-[11px] tracking-[0.18em] uppercase",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-x py-2 text-center",
					children: "Free shipping on orders above ₹999 · Crafted in India"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x flex items-center justify-between gap-6 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex flex-col leading-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl tracking-[0.18em] text-cocoa",
							children: "FARAH"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] tracking-[0.4em] text-ink-soft mt-0.5 self-center",
							children: "— BELTS —"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden lg:flex items-center gap-7 text-[13px] font-medium text-ink",
						children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: n.to,
							className: "link-underline transition-colors hover:text-cocoa",
							activeProps: { className: "text-cocoa" },
							children: n.label
						}, n.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 text-ink",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								"aria-label": "Search",
								className: "hidden sm:block hover:text-cocoa transition",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
									size: 20,
									strokeWidth: 1.5
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/auth",
								"aria-label": "Account",
								className: "hover:text-cocoa transition",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
									size: 20,
									strokeWidth: 1.5
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/cart",
								"aria-label": "Cart",
								className: "relative hover:text-cocoa transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
									size: 20,
									strokeWidth: 1.5
								}), count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -top-1.5 -right-2 bg-gold text-white text-[10px] rounded-full w-4 h-4 grid place-items-center font-semibold",
									children: count
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "lg:hidden hover:text-cocoa",
								onClick: () => setOpen((o) => !o),
								"aria-label": "Menu",
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 22 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 22 })
							})
						]
					})
				]
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:hidden border-t border-border bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "container-x flex flex-col py-3",
					children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						onClick: () => setOpen(false),
						className: "py-3 text-sm border-b border-border/60",
						children: n.label
					}, n.to))
				})
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-cocoa-deep text-cream/80 mt-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x py-16 grid gap-12 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-2xl tracking-[0.18em] text-cream",
						children: "FARAH"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] tracking-[0.4em] mt-1",
						children: "— BELTS —"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm leading-relaxed text-cream/70 max-w-xs",
						children: "Premium leather essentials crafted to last and designed for life. Built in India, made for the world."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-3 mt-6",
						children: [
							Instagram,
							Facebook,
							Twitter
						].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "w-9 h-9 grid place-items-center border border-cream/20 hover:bg-gold hover:border-gold transition",
							"aria-label": "social",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								size: 16,
								strokeWidth: 1.5
							})
						}, i))
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FooterCol, {
					title: "Shop",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FLink, {
							to: "/shop/wallets",
							children: "Wallets"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FLink, {
							to: "/shop/belts",
							children: "Belts"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FLink, {
							to: "/shop/bags",
							children: "Bags"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FLink, {
							to: "/shop/jackets",
							children: "Jackets"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FLink, {
							to: "/shop",
							children: "All Products"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FooterCol, {
					title: "Company",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FLink, {
							to: "/about",
							children: "About Us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FLink, {
							to: "/contact",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FLink, {
							to: "/b2b",
							children: "Wholesale"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FLink, {
							to: "/account/orders",
							children: "Track Order"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FooterCol, {
					title: "Help",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FLink, {
							to: "/shipping",
							children: "Shipping"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FLink, {
							to: "/returns",
							children: "Returns"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FLink, {
							to: "/faq",
							children: "FAQ"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FLink, {
							to: "/privacy",
							children: "Privacy Policy"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-cream/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x py-5 text-xs flex flex-wrap gap-2 justify-between text-cream/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Farah Belts. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Crafted with care in India." })]
			})
		})]
	});
}
function FooterCol({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-[11px] tracking-[0.22em] uppercase text-gold-soft mb-5",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "flex flex-col gap-3 text-sm",
		children
	})] });
}
function FLink({ to, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: "text-cream/70 hover:text-cream transition",
		children
	}) });
}
function SiteLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { SiteLayout as t };
