import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ArrowRight, Briefcase, Package, TrendingDown, Users } from "lucide-react";
import bannerB2B from "@/assets/banner-b2b.jpg";

export const Route = createFileRoute("/b2b")({
  head: () => ({ meta: [
    { title: "Wholesale — Farah Belts B2B" },
    { name: "description", content: "Wholesale leather goods at exceptional prices. Bulk orders, custom manufacturing, dedicated account managers." },
  ]}),
  component: B2B,
});

function B2B() {
  return (
    <SiteLayout>
      <section className="relative bg-cocoa-deep text-cream">
        <img src={bannerB2B} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="relative container-x py-24 max-w-3xl">
          <div className="eyebrow">Farah Wholesale</div>
          <h1 className="font-display text-4xl md:text-6xl mt-4 text-cream leading-tight">Better Prices.<br />Bigger Opportunities.</h1>
          <p className="text-cream/80 mt-5 max-w-xl">Premium leather goods at exceptional wholesale rates. Trusted by retailers, gifting partners and brands across India.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/b2b/register" className="btn-primary">Apply for Wholesale <ArrowRight size={16} /></Link>
            <Link to="/b2b/bulk" className="btn-outline text-cream">Bulk Order <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="container-x py-20 grid md:grid-cols-4 gap-px bg-border border border-border">
        {[
          { Icon: TrendingDown, t: "Up to 40% Off", s: "Wholesale tier pricing" },
          { Icon: Package, t: "Low MOQ", s: "Starting at 25 units" },
          { Icon: Briefcase, t: "Custom Manufacturing", s: "OEM and private label" },
          { Icon: Users, t: "Account Manager", s: "Dedicated support" },
        ].map(({ Icon, t, s }) => (
          <div key={t} className="bg-background p-7 flex gap-4">
            <div className="w-11 h-11 grid place-items-center bg-secondary text-gold shrink-0"><Icon size={20} strokeWidth={1.5} /></div>
            <div>
              <div className="text-[12px] tracking-[0.18em] uppercase font-semibold">{t}</div>
              <div className="text-sm text-ink-soft mt-1">{s}</div>
            </div>
          </div>
        ))}
      </section>

      <section className="container-x pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          <Link to="/b2b/dashboard" className="block bg-cocoa text-cream p-10 hover:bg-cocoa-deep transition">
            <div className="text-[11px] tracking-[0.22em] uppercase text-gold-soft">For Partners</div>
            <h3 className="font-display text-2xl mt-2">Partner Dashboard</h3>
            <p className="text-cream/80 mt-2 text-sm">View orders, invoices, and exclusive wholesale pricing.</p>
            <div className="mt-5 text-xs tracking-[0.18em] uppercase flex items-center gap-2 text-gold">Enter Dashboard <ArrowRight size={14} /></div>
          </Link>
          <Link to="/b2b/bulk" className="block bg-secondary border border-border p-10 hover:border-cocoa transition">
            <div className="text-[11px] tracking-[0.22em] uppercase text-gold">New Buyer</div>
            <h3 className="font-display text-2xl mt-2">Request a Quote</h3>
            <p className="text-ink-soft mt-2 text-sm">Tell us what you need — we'll price your order within 24 hours.</p>
            <div className="mt-5 text-xs tracking-[0.18em] uppercase flex items-center gap-2 text-cocoa">Submit RFQ <ArrowRight size={14} /></div>
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
