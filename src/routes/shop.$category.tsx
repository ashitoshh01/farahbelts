import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { products, categories } from "@/lib/catalog";

export const Route = createFileRoute("/shop/$category")({
  head: ({ params }) => {
    const c = categories.find((x) => x.slug === params.category);
    const name = c?.name ?? "Shop";
    return { meta: [{ title: `${name} — Farah Belts` }, { name: "description", content: `Shop premium leather ${name.toLowerCase()} at Farah Belts.` }] };
  },
  loader: ({ params }) => {
    const c = categories.find((x) => x.slug === params.category);
    if (!c) throw notFound();
    return { category: c };
  },
  component: CategoryPage,
  notFoundComponent: () => (
    <SiteLayout><div className="container-x py-24 text-center"><h1 className="font-display text-3xl">Category not found</h1></div></SiteLayout>
  ),
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const list = products.filter((p) => p.category === category.slug);
  return (
    <SiteLayout>
      <div className="relative bg-cocoa-deep text-cream">
        <img src={category.image} alt={category.name} className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="relative container-x py-20">
          <div className="eyebrow">Collection</div>
          <h1 className="font-display text-4xl md:text-5xl mt-2 text-cream">{category.name}</h1>
          <p className="text-cream/70 mt-2 max-w-xl">Curated {category.name.toLowerCase()} built to last and designed for daily life.</p>
        </div>
      </div>
      <div className="container-x py-12">
        {list.length === 0 ? (
          <div className="py-20 text-center text-ink-soft">No products yet in this collection.</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {list.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        )}
      </div>
    </SiteLayout>
  );
}
