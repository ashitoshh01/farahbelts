import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Truck, Award, Package, Star } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { categories, products } from "@/lib/catalog";
import hero from "@/assets/hero-leather.jpg";
import bannerRetail from "@/assets/banner-retail.jpg";
import bannerB2B from "@/assets/banner-b2b.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Farah Belts — Crafted To Last. Designed For Life." },
      { name: "description", content: "Premium leather wallets, belts, bags and jackets. Handcrafted, durable, timeless." },
      { property: "og:title", content: "Farah Belts — Premium Leather Goods" },
      { property: "og:description", content: "Crafted to last. Designed for life." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative bg-cocoa-deep text-cream overflow-hidden">
        <img
          src={hero}
          alt="Premium leather wallet and belt on wood"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
        <div className="relative container-x py-24 md:py-36 lg:py-44 max-w-3xl">
          <div className="eyebrow">Premium Leather Goods</div>
          <h1 className="mt-5 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-cream">
            Crafted To Last.<br />Designed For Life.
          </h1>
          <p className="mt-6 text-cream/80 max-w-md text-base md:text-lg">
            Premium leather essentials that combine elegance, durability and everyday functionality.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/shop" className="btn-primary">Shop Collection <ArrowRight size={16} /></Link>
            <Link to="/b2b" className="btn-outline text-cream">Explore Wholesale <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container-x py-20">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <div className="eyebrow">Explore Categories</div>
            <h2 className="font-display text-3xl md:text-4xl text-ink mt-2">Find What Complements You</h2>
          </div>
          <Link to="/shop" className="link-underline text-xs tracking-[0.18em] uppercase text-ink flex items-center gap-2">
            View All Categories <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/shop/$category"
              params={{ category: c.slug }}
              className="group relative aspect-[4/5] overflow-hidden bg-cocoa-deep"
            >
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                width={768}
                height={768}
                className="absolute inset-0 w-full h-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute left-5 right-5 bottom-5 flex items-end justify-between text-cream">
                <div>
                  <div className="text-[11px] tracking-[0.22em] uppercase">{c.name}</div>
                  <div className="text-xs text-cream/70 mt-1">{c.tagline}</div>
                </div>
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="container-x pb-20">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <div className="eyebrow">Best Sellers</div>
            <h2 className="font-display text-3xl md:text-4xl text-ink mt-2">Our Most Loved Picks</h2>
          </div>
          <Link to="/shop" className="link-underline text-xs tracking-[0.18em] uppercase text-ink flex items-center gap-2">
            View All Products <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6">
          {products.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="container-x pb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {[
            { Icon: Award, title: "Genuine Leather", text: "100% authentic leather quality products" },
            { Icon: ShieldCheck, title: "Secure Payments", text: "Safe & secure transactions you can trust" },
            { Icon: Truck, title: "Fast Delivery", text: "Quick delivery across India" },
            { Icon: Package, title: "Bulk Orders", text: "Special pricing for wholesale buyers" },
          ].map(({ Icon, title, text }) => (
            <div key={title} className="bg-background p-6 flex gap-4">
              <div className="w-11 h-11 grid place-items-center bg-secondary text-gold shrink-0">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-[12px] tracking-[0.18em] uppercase font-semibold text-ink">{title}</div>
                <div className="text-sm text-ink-soft mt-1">{text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DUAL BANNERS */}
      <section className="container-x pb-20 grid md:grid-cols-2 gap-5">
        <BannerCard
          image={bannerRetail}
          eyebrow="For Retail Customers"
          title={<>Premium Quality.<br />Everyday Luxury.</>}
          cta="Shop Now"
          to="/shop"
        />
        <BannerCard
          image={bannerB2B}
          eyebrow="For Wholesale Buyers"
          title={<>Better Prices.<br />Bigger Opportunities.</>}
          cta="Visit B2B Portal"
          to="/b2b"
        />
      </section>

      {/* SOCIAL PROOF STATS */}
      <section className="container-x pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <Stat label="Happy Customers" value="10,000+" />
          <Stat label="Average Rating" value="4.8/5" Icon={Star} />
          <Stat label="Hassle Free" value="Easy Returns" />
          <Stat label="24/7 Available" value="Support" />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary py-20">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="eyebrow">Words From Customers</div>
            <h2 className="font-display text-3xl md:text-4xl text-ink mt-2">Trusted by craftspeople of style</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Arjun M.", text: "Wallet quality is outstanding — the leather softens beautifully with use." },
              { name: "Priya S.", text: "Bought the duffle for travel. Sturdy, premium, and gets compliments everywhere." },
              { name: "Rohit T.", text: "Belts are built like tanks. Worth every rupee for the craftsmanship." },
            ].map((t) => (
              <div key={t.name} className="bg-background p-7 border border-border">
                <div className="flex gap-0.5 text-gold mb-4">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}
                </div>
                <p className="text-ink leading-relaxed">"{t.text}"</p>
                <div className="text-sm text-ink-soft mt-4">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function BannerCard({ image, eyebrow, title, cta, to }: { image: string; eyebrow: string; title: React.ReactNode; cta: string; to: string }) {
  return (
    <Link to={to} className="group relative overflow-hidden aspect-[16/9] md:aspect-[5/3] bg-cocoa-deep">
      <img src={image} alt="" loading="lazy" width={1280} height={720} className="absolute inset-0 w-full h-full object-cover opacity-80 transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      <div className="relative h-full flex flex-col justify-end p-7 md:p-10 text-cream">
        <div className="text-[10px] tracking-[0.22em] uppercase text-gold-soft">{eyebrow}</div>
        <h3 className="font-display text-2xl md:text-3xl mt-2">{title}</h3>
        <div className="mt-5">
          <span className="inline-flex items-center gap-2 bg-gold text-white text-[11px] tracking-[0.18em] uppercase px-5 py-3 group-hover:bg-cocoa transition">
            {cta} <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}

function Stat({ label, value, Icon }: { label: string; value: string; Icon?: typeof Star }) {
  return (
    <div className="flex items-center justify-center gap-3">
      {Icon && <Icon size={22} className="text-gold" strokeWidth={1.5} />}
      <div className="text-left">
        <div className="font-display text-xl text-ink">{value}</div>
        <div className="text-xs text-ink-soft">{label}</div>
      </div>
    </div>
  );
}
