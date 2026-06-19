import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CheckCircle2, Package } from "lucide-react";

export const Route = createFileRoute("/order-success")({
  head: () => ({ meta: [{ title: "Order Confirmed — Farah Belts" }] }),
  component: () => (
    <SiteLayout>
      <div className="container-x py-24 max-w-xl text-center">
        <div className="w-16 h-16 grid place-items-center bg-gold/15 text-gold rounded-full mx-auto"><CheckCircle2 size={32} /></div>
        <h1 className="font-display text-3xl md:text-4xl mt-6">Thank You For Your Order</h1>
        <p className="text-ink-soft mt-3">Your order has been confirmed. We've emailed you a receipt with the details.</p>
        <div className="bg-secondary border border-border p-5 text-left mt-8 flex items-center gap-4">
          <Package className="text-cocoa" />
          <div>
            <div className="text-[11px] tracking-[0.18em] uppercase text-ink-soft">Order Number</div>
            <div className="font-display text-lg">#FB{Math.floor(Math.random() * 9000 + 1000)}</div>
          </div>
        </div>
        <div className="flex justify-center gap-3 mt-8">
          <Link to="/account/orders" className="btn-outline text-cocoa">Track Order</Link>
          <Link to="/shop" className="btn-primary">Continue Shopping</Link>
        </div>
      </div>
    </SiteLayout>
  ),
});
