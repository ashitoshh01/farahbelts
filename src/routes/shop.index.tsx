import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/lib/catalog";
import { useState, useMemo } from "react";

export const Route = createFileRoute("/shop/")({
  head: () => ({ meta: [{ title: "Shop — Farah Belts" }, { name: "description", content: "Browse the full collection of premium leather goods." }] }),
  component: ShopAll,
});

function ShopAll() {
  const [sort, setSort] = useState("featured");
  const [max, setMax] = useState(10000);

  const list = useMemo(() => {
    const f = products.filter((p) => p.price <= max);
    if (sort === "low") return [...f].sort((a, b) => a.price - b.price);
    if (sort === "high") return [...f].sort((a, b) => b.price - a.price);
    if (sort === "rating") return [...f].sort((a, b) => b.rating - a.rating);
    return f;
  }, [sort, max]);

  return (
    <SiteLayout>
      <div className="bg-secondary border-b border-border">
        <div className="container-x py-10">
          <div className="eyebrow">All Products</div>
          <h1 className="font-display text-3xl md:text-4xl mt-2">The Full Collection</h1>
          <p className="text-ink-soft mt-2 max-w-xl">Every piece, handpicked and crafted for everyday luxury.</p>
        </div>
      </div>

      <div className="container-x py-10 grid lg:grid-cols-[260px_1fr] gap-10">
        <aside className="space-y-8">
          <FilterBlock title="Sort">
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="w-full bg-background border border-border px-3 py-2.5 text-sm">
              <option value="featured">Featured</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </FilterBlock>
          <FilterBlock title={`Max Price: ₹${max.toLocaleString("en-IN")}`}>
            <input type="range" min={500} max={10000} step={100} value={max} onChange={(e) => setMax(+e.target.value)} className="w-full accent-cocoa" />
          </FilterBlock>
          <FilterBlock title="Category">
            <ul className="space-y-2 text-sm">
              {["Wallets", "Belts", "Bags", "Jackets"].map((c) => (
                <li key={c}><label className="flex items-center gap-2 text-ink-soft hover:text-ink cursor-pointer"><input type="checkbox" className="accent-cocoa" /> {c}</label></li>
              ))}
            </ul>
          </FilterBlock>
          <FilterBlock title="Color">
            <div className="flex flex-wrap gap-2">
              {["#4A2C1A", "#8B5A2B", "#000", "#C19A6B"].map((c) => (
                <button key={c} className="w-7 h-7 rounded-full border border-border" style={{ background: c }} aria-label={c} />
              ))}
            </div>
          </FilterBlock>
        </aside>

        <div>
          <div className="text-sm text-ink-soft mb-5">{list.length} products</div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {list.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}

function FilterBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[11px] tracking-[0.2em] uppercase font-semibold text-ink mb-3">{title}</div>
      {children}
    </div>
  );
}
