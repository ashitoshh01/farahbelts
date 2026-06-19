import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/lib/catalog";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/account/wishlist")({
  component: () => (
    <div>
      <h2 className="font-display text-2xl mb-6">Wishlist</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {products.slice(0, 3).map((p) => <ProductCard key={p.id} p={p} />)}
      </div>
    </div>
  ),
});
