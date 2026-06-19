import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-cocoa-deep text-cream/80 mt-24">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="font-display text-2xl tracking-[0.18em] text-cream">FARAH</div>
          <div className="text-[10px] tracking-[0.4em] mt-1">— BELTS —</div>
          <p className="mt-6 text-sm leading-relaxed text-cream/70 max-w-xs">
            Premium leather essentials crafted to last and designed for life. Built in India, made for the world.
          </p>
          <div className="flex gap-3 mt-6">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 grid place-items-center border border-cream/20 hover:bg-gold hover:border-gold transition" aria-label="social">
                <Icon size={16} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Shop">
          <FLink to="/shop/wallets">Wallets</FLink>
          <FLink to="/shop/belts">Belts</FLink>
          <FLink to="/shop/bags">Bags</FLink>
          <FLink to="/shop/jackets">Jackets</FLink>
          <FLink to="/shop">All Products</FLink>
        </FooterCol>

        <FooterCol title="Company">
          <FLink to="/about">About Us</FLink>
          <FLink to="/contact">Contact</FLink>
          <FLink to="/b2b">Wholesale</FLink>
          <FLink to="/account/orders">Track Order</FLink>
        </FooterCol>

        <FooterCol title="Help">
          <FLink to="/shipping">Shipping</FLink>
          <FLink to="/returns">Returns</FLink>
          <FLink to="/faq">FAQ</FLink>
          <FLink to="/privacy">Privacy Policy</FLink>
        </FooterCol>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-x py-5 text-xs flex flex-wrap gap-2 justify-between text-cream/60">
          <span>© {new Date().getFullYear()} Farah Belts. All rights reserved.</span>
          <span>Crafted with care in India.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[11px] tracking-[0.22em] uppercase text-gold-soft mb-5">{title}</div>
      <ul className="flex flex-col gap-3 text-sm">{children}</ul>
    </div>
  );
}
function FLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link to={to} className="text-cream/70 hover:text-cream transition">
        {children}
      </Link>
    </li>
  );
}
