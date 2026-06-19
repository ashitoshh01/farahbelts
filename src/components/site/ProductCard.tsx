import { Link } from "@tanstack/react-router";
import { Heart, Star } from "lucide-react";
import { formatINR, type Product } from "@/lib/catalog";
import { useCart } from "@/lib/cart";

export function ProductCard({ p }: { p: Product }) {
  const { add } = useCart();
  return (
    <div className="group flex flex-col">
      <Link to="/product/$slug" params={{ slug: p.slug }} className="relative block bg-secondary aspect-square overflow-hidden">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          width={768}
          height={768}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />
        <button
          aria-label="Wishlist"
          className="absolute top-3 right-3 w-9 h-9 grid place-items-center bg-background/90 backdrop-blur text-ink hover:text-gold transition"
          onClick={(e) => e.preventDefault()}
        >
          <Heart size={16} strokeWidth={1.5} />
        </button>
        {p.badge && (
          <span className="absolute top-3 left-3 bg-cocoa text-white text-[10px] tracking-[0.18em] uppercase px-2 py-1">
            {p.badge}
          </span>
        )}
      </Link>
      <div className="pt-4 px-1">
        <Link to="/product/$slug" params={{ slug: p.slug }} className="block">
          <h3 className="text-[15px] font-medium text-ink leading-snug">{p.name}</h3>
        </Link>
        <div className="flex items-center gap-1.5 mt-1.5 text-ink-soft text-xs">
          <Star size={12} fill="currentColor" className="text-gold" strokeWidth={0} />
          <span className="font-medium text-ink">{p.rating}</span>
          <span>({p.reviews})</span>
        </div>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-base font-semibold text-cocoa">{formatINR(p.price)}</span>
          {p.originalPrice && (
            <span className="text-xs text-ink-soft line-through">{formatINR(p.originalPrice)}</span>
          )}
        </div>
        <button
          onClick={() => add(p.id)}
          className="mt-3 w-full bg-cocoa text-white text-[11px] tracking-[0.18em] uppercase py-3 hover:bg-cocoa-deep transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
