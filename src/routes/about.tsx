import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Farah Belts — Crafted with Heritage" },
    { name: "description", content: "Our story: premium leather craftsmanship, built in India, designed for life." },
  ]}),
  component: () => (
    <SiteLayout>
      <section className="container-x py-20 max-w-3xl">
        <div className="eyebrow">Our Story</div>
        <h1 className="font-display text-4xl md:text-5xl mt-3">Heritage, Hand-stitched.</h1>
        <p className="text-ink-soft text-lg leading-relaxed mt-6">
          Farah Belts began as a small atelier dedicated to one idea — that everyday objects deserve to be made beautifully and built to last.
          Three generations later, our craftspeople still cut, stitch and finish every piece by hand.
        </p>
        <p className="text-ink-soft leading-relaxed mt-4">
          We source full-grain leather from responsible Indian tanneries, partner with brass smiths for our hardware, and finish every edge with patience. The result is a quiet kind of luxury — pieces that look better with age and feel personal from the very first wear.
        </p>
      </section>
      <section className="bg-secondary py-20">
        <div className="container-x grid md:grid-cols-3 gap-8">
          {[
            { t: "Handcrafted", d: "Every piece passes through skilled artisan hands." },
            { t: "Built to Last", d: "Premium materials and construction designed for years of daily use." },
            { t: "Made in India", d: "Proudly made by craftspeople who care, paid fairly." },
          ].map((b) => (
            <div key={b.t}>
              <div className="font-display text-2xl text-cocoa">{b.t}</div>
              <p className="text-ink-soft mt-2">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  ),
});
