import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useCart } from "@/lib/cart";
import { formatINR } from "@/lib/catalog";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Cart — Farah Belts" }] }),
  component: CartPage,
});

function CartPage() {
  const { detailed, setQty, remove, subtotal, count } = useCart();
  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState(0);
  const shipping = subtotal > 999 || subtotal === 0 ? 0 : 99;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax - applied;

  return (
    <SiteLayout>
      <div className="container-x py-12">
        <div className="eyebrow">Your Cart</div>
        <h1 className="font-display text-3xl md:text-4xl mt-2">Shopping Bag</h1>

        {count === 0 ? (
          <div className="py-24 text-center">
            <div className="font-display text-2xl">Your cart is empty</div>
            <p className="text-ink-soft mt-2">Discover timeless pieces crafted to last.</p>
            <Link to="/shop" className="btn-primary mt-6 inline-flex">Start Shopping <ArrowRight size={16} /></Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 mt-10">
            <div className="border border-border bg-background">
              {detailed.map(({ product, qty, lineTotal }) => (
                <div key={product.id} className="flex gap-5 p-5 border-b border-border last:border-0">
                  <Link to="/product/$slug" params={{ slug: product.slug }} className="w-24 h-24 md:w-28 md:h-28 bg-secondary shrink-0">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </Link>
                  <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <Link to="/product/$slug" params={{ slug: product.slug }} className="font-medium hover:text-cocoa">{product.name}</Link>
                      <div className="text-xs text-ink-soft mt-1">{product.color} · {product.material}</div>
                      <div className="text-sm text-cocoa font-semibold mt-2 md:hidden">{formatINR(product.price)}</div>
                    </div>
                    <div className="flex items-center border border-border w-fit">
                      <button onClick={() => setQty(product.id, qty - 1)} className="px-2.5 py-2 hover:bg-secondary"><Minus size={12} /></button>
                      <div className="px-3 text-sm font-medium">{qty}</div>
                      <button onClick={() => setQty(product.id, qty + 1)} className="px-2.5 py-2 hover:bg-secondary"><Plus size={12} /></button>
                    </div>
                    <div className="hidden md:block w-24 text-right font-semibold text-cocoa">{formatINR(lineTotal)}</div>
                    <button onClick={() => remove(product.id)} className="text-ink-soft hover:text-destructive" aria-label="Remove"><Trash2 size={16} /></button>
                  </div>
                </div>
              ))}
            </div>

            <aside className="bg-background border border-border p-6 h-fit">
              <div className="font-display text-xl mb-5">Order Summary</div>
              <div className="space-y-3 text-sm">
                <Row label={`Subtotal (${count} items)`} value={formatINR(subtotal)} />
                <Row label="Shipping" value={shipping === 0 ? "Free" : formatINR(shipping)} />
                <Row label="Tax (5%)" value={formatINR(tax)} />
                {applied > 0 && <Row label="Discount" value={`− ${formatINR(applied)}`} />}
              </div>

              <div className="mt-4 flex gap-2">
                <input value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="Coupon code" className="flex-1 border border-border px-3 py-2.5 text-sm bg-background" />
                <button onClick={() => setApplied(coupon.toUpperCase() === "FARAH10" ? Math.round(subtotal * 0.1) : 0)} className="px-4 bg-cocoa text-white text-[11px] tracking-[0.18em] uppercase">Apply</button>
              </div>
              <div className="text-xs text-ink-soft mt-2">Try code <span className="font-semibold text-cocoa">FARAH10</span> for 10% off.</div>

              <div className="border-t border-border mt-5 pt-5 flex items-center justify-between">
                <div className="text-sm text-ink-soft">Total</div>
                <div className="font-display text-2xl text-cocoa">{formatINR(total)}</div>
              </div>
              <Link to="/checkout" className="btn-primary w-full justify-center mt-5">Proceed to Checkout <ArrowRight size={16} /></Link>
              <Link to="/shop" className="block text-center text-xs tracking-[0.18em] uppercase mt-3 text-ink-soft hover:text-ink link-underline w-fit mx-auto">Continue Shopping</Link>
            </aside>
          </div>
        )}
      </div>
    </SiteLayout>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return <div className="flex justify-between"><span className="text-ink-soft">{label}</span><span className="font-medium">{value}</span></div>;
}
