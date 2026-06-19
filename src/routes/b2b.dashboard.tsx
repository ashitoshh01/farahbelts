import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { products, formatINR } from "@/lib/catalog";
import { Package, FileText, Users, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/b2b/dashboard")({
  head: () => ({ meta: [{ title: "B2B Dashboard — Farah Belts" }] }),
  component: B2BDash,
});

function B2BDash() {
  return (
    <SiteLayout>
      <div className="container-x py-12">
        <div className="eyebrow">Partner Dashboard</div>
        <h1 className="font-display text-3xl md:text-4xl mt-2">Welcome, Sharma Leathers</h1>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {[
            { Icon: Package, l: "Total Orders", v: "142" },
            { Icon: TrendingUp, l: "This Month", v: "₹2.4L" },
            { Icon: FileText, l: "Pending Invoices", v: "3" },
            { Icon: Users, l: "Account Manager", v: "Priya R." },
          ].map((s) => (
            <div key={s.l} className="bg-background border border-border p-5">
              <s.Icon className="text-gold" size={20} strokeWidth={1.5} />
              <div className="text-[11px] tracking-[0.18em] uppercase text-ink-soft mt-3">{s.l}</div>
              <div className="font-display text-2xl mt-1">{s.v}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mt-10">
          <div className="lg:col-span-2 bg-background border border-border">
            <div className="px-6 py-4 border-b border-border flex justify-between items-center">
              <h3 className="font-display text-xl">Recent Orders</h3>
              <Link to="/account/orders" className="text-xs tracking-[0.16em] uppercase link-underline">View all</Link>
            </div>
            <table className="w-full text-sm">
              <thead className="text-left text-[11px] tracking-[0.16em] uppercase text-ink-soft">
                <tr><th className="px-6 py-3">Order</th><th>Date</th><th>Items</th><th className="text-right pr-6">Total</th></tr>
              </thead>
              <tbody>
                {[
                  ["#WS1142", "12 Jun", "120 belts", "₹84,000"],
                  ["#WS1129", "05 Jun", "60 wallets", "₹38,400"],
                  ["#WS1108", "28 May", "200 belts", "₹1,40,000"],
                ].map((r) => (
                  <tr key={r[0]} className="border-t border-border">
                    <td className="px-6 py-4 font-medium">{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td className="text-right pr-6 font-semibold text-cocoa">{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-cocoa text-cream p-6">
            <h3 className="font-display text-xl">Your Account Manager</h3>
            <div className="mt-4 text-sm text-cream/80">
              <div className="font-medium text-cream">Priya R.</div>
              <div>priya@farahbelts.com</div>
              <div>+91 98765 12345</div>
            </div>
            <button className="btn-outline text-cream mt-6 w-full justify-center">Contact</button>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-display text-2xl mb-6">Wholesale Pricing</h3>
          <div className="bg-background border border-border overflow-x-auto">
            <table className="w-full text-sm min-w-[640px]">
              <thead className="text-left text-[11px] tracking-[0.16em] uppercase text-ink-soft">
                <tr><th className="px-5 py-3">Product</th><th>Retail</th><th>Wholesale</th><th>MOQ</th><th className="pr-5">Bulk (100+)</th></tr>
              </thead>
              <tbody>
                {products.slice(0, 5).map((p) => (
                  <tr key={p.id} className="border-t border-border">
                    <td className="px-5 py-3 font-medium flex items-center gap-3">
                      <img src={p.image} alt="" className="w-10 h-10 object-cover bg-secondary" />
                      {p.name}
                    </td>
                    <td className="text-ink-soft line-through">{formatINR(p.price)}</td>
                    <td className="font-semibold text-cocoa">{formatINR(Math.round(p.price * 0.6))}</td>
                    <td>25</td>
                    <td className="pr-5 font-semibold text-gold">{formatINR(Math.round(p.price * 0.45))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
