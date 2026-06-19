import { Link } from "@tanstack/react-router";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";

const nav = [
  { to: "/shop", label: "Shop" },
  { to: "/shop/wallets", label: "Wallets" },
  { to: "/shop/belts", label: "Belts" },
  { to: "/shop/bags", label: "Bags" },
  { to: "/shop/jackets", label: "Jackets" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="bg-cocoa-deep text-cream/90 text-[11px] tracking-[0.18em] uppercase">
        <div className="container-x py-2 text-center">
          Free shipping on orders above ₹999 · Crafted in India
        </div>
      </div>

      <div className="container-x flex items-center justify-between gap-6 py-4">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-2xl tracking-[0.18em] text-cocoa">FARAH</span>
          <span className="text-[10px] tracking-[0.4em] text-ink-soft mt-0.5 self-center">— BELTS —</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-ink">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="link-underline transition-colors hover:text-cocoa"
              activeProps={{ className: "text-cocoa" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-ink">
          <button aria-label="Search" className="hidden sm:block hover:text-cocoa transition">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <Link to="/auth" aria-label="Account" className="hover:text-cocoa transition">
            <User size={20} strokeWidth={1.5} />
          </Link>
          <Link to="/cart" aria-label="Cart" className="relative hover:text-cocoa transition">
            <ShoppingBag size={20} strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-gold text-white text-[10px] rounded-full w-4 h-4 grid place-items-center font-semibold">
                {count}
              </span>
            )}
          </Link>
          <button className="lg:hidden hover:text-cocoa" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-x flex flex-col py-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-3 text-sm border-b border-border/60">
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
