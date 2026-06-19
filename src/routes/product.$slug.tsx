import { createFileRoute, notFound, Link, useNavigate } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { products, formatINR } from "@/lib/catalog";
import { useCart } from "@/lib/cart";
import { useState } from "react";
import { Heart, Minus, Plus, ShieldCheck, Truck, RotateCcw, Star } from "lucide-react";

export const Route = createFileRoute("/product/$slug")({
  head: ({ params }) => {
    const p = products.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: p ? `${p.name} — Farah Belts` : "Product — Farah Belts" },
        { name: "description", content: p?.description ?? "Premium leather product." },
        { property: "og:title", content: p?.name ?? "Farah Belts" },
        { property: "og:description", content: p?.description ?? "" },
        ...(p?.image ? [{ property: "og:image", content: p.image }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const product = products.find((x) => x.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  component: ProductPage,
  notFoundComponent: () => (
    <SiteLayout><div className="container-x py-24 text-center"><h1 className="font-display text-3xl">Product not found</h1></div></SiteLayout>
  ),
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const nav = useNavigate();
  const [qty, setQty] = useState(1);
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <SiteLayout>
      <div className="container-x pt-8 text-xs text-ink-soft">
        <Link to="/" className="hover:text-ink">Home</Link> / <Link to="/shop" className="hover:text-ink">Shop</Link> / <span className="text-ink">{product.name}</span>
      </div>

      <div className="container-x py-10 grid lg:grid-cols-2 gap-12">
        <div className="space-y-3">
          <div className="aspect-square bg-secondary overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[product.image, product.image, product.image, product.image].map((src, i) => (
              <button key={i} className="aspect-square bg-secondary overflow-hidden border border-border hover:border-cocoa transition">
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="eyebrow">{product.category}</div>
          <h1 className="font-display text-3xl md:text-4xl mt-2">{product.name}</h1>
          <div className="flex items-center gap-2 mt-3 text-sm text-ink-soft">
            <div className="flex text-gold">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}</div>
            <span>{product.rating}</span><span>·</span><span>{product.reviews} reviews</span>
          </div>

          <div className="flex items-baseline gap-3 mt-6">
            <span className="font-display text-3xl text-cocoa">{formatINR(product.price)}</span>
            {product.originalPrice && (
              <>
                <span className="text-ink-soft line-through">{formatINR(product.originalPrice)}</span>
                <span className="text-xs bg-gold text-white px-2 py-1">{Math.round((1 - product.price / product.originalPrice) * 100)}% OFF</span>
              </>
            )}
          </div>
          <div className="text-xs text-emerald-700 mt-2 font-medium">● In stock — ships in 1–2 days</div>

          <p className="text-ink-soft leading-relaxed mt-6">{product.description}</p>

          <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
            <Spec label="Material" value={product.material} />
            <Spec label="Color" value={product.color} />
            <Spec label="Origin" value="Made in India" />
            <Spec label="Warranty" value="1 Year" />
          </div>

          <div className="flex items-center gap-4 mt-8">
            <div className="flex items-center border border-border">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-3 hover:bg-secondary"><Minus size={14} /></button>
              <div className="px-5 py-3 min-w-12 text-center font-medium">{qty}</div>
              <button onClick={() => setQty(qty + 1)} className="px-3 py-3 hover:bg-secondary"><Plus size={14} /></button>
            </div>
            <button onClick={() => add(product.id, qty)} className="flex-1 btn-primary justify-center">Add to Cart</button>
            <button aria-label="wishlist" className="w-12 h-12 grid place-items-center border border-border hover:border-cocoa"><Heart size={18} strokeWidth={1.5} /></button>
          </div>
          <button onClick={() => { add(product.id, qty); nav({ to: "/checkout" }); }} className="mt-3 w-full btn-outline justify-center text-cocoa">Buy It Now</button>

          <div className="grid grid-cols-3 gap-3 mt-8 pt-6 border-t border-border text-xs">
            <Trust Icon={Truck} text="Free shipping above ₹999" />
            <Trust Icon={RotateCcw} text="7-day easy returns" />
            <Trust Icon={ShieldCheck} text="Secure payments" />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="container-x py-16">
          <h2 className="font-display text-2xl md:text-3xl mb-8">You may also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        </section>
      )}
    </SiteLayout>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-border p-3">
      <div className="text-[10px] tracking-[0.18em] uppercase text-ink-soft">{label}</div>
      <div className="font-medium mt-1">{value}</div>
    </div>
  );
}
function Trust({ Icon, text }: { Icon: typeof Truck; text: string }) {
  return <div className="flex items-center gap-2 text-ink-soft"><Icon size={16} className="text-gold" strokeWidth={1.5} /> {text}</div>;
}
