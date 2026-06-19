import { createFileRoute } from "@tanstack/react-router";
import { Check, Package, Truck, Home } from "lucide-react";

export const Route = createFileRoute("/account/orders")({
  head: () => ({ meta: [{ title: "Orders — Farah Belts" }] }),
  component: Orders,
});

function Orders() {
  const orders = [
    { id: "FB1042", date: "12 Jun 2026", total: "₹3,798", status: "Shipped" },
    { id: "FB0987", date: "28 May 2026", total: "₹1,599", status: "Delivered" },
  ];
  return (
    <div>
      <h2 className="font-display text-2xl mb-6">Your Orders</h2>
      <div className="space-y-4">
        {orders.map((o) => (
          <div key={o.id} className="border border-border p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="font-medium">Order #{o.id}</div>
                <div className="text-xs text-ink-soft">Placed on {o.date}</div>
              </div>
              <div className="font-display text-lg text-cocoa">{o.total}</div>
              <span className="text-[11px] tracking-[0.16em] uppercase bg-secondary px-3 py-1.5">{o.status}</span>
            </div>
            <Timeline status={o.status} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Timeline({ status }: { status: string }) {
  const steps = [
    { label: "Packed", Icon: Package },
    { label: "Shipped", Icon: Truck },
    { label: "Out for Delivery", Icon: Truck },
    { label: "Delivered", Icon: Home },
  ];
  const idx = status === "Delivered" ? 3 : status === "Shipped" ? 1 : 0;
  return (
    <div className="flex items-center mt-6">
      {steps.map((s, i) => {
        const done = i <= idx;
        return (
          <div key={s.label} className="flex-1 flex items-center">
            <div className="flex flex-col items-center gap-2">
              <div className={`w-9 h-9 rounded-full grid place-items-center ${done ? "bg-cocoa text-white" : "bg-secondary text-ink-soft"}`}>
                {done ? <Check size={14} /> : <s.Icon size={14} />}
              </div>
              <div className={`text-[10px] tracking-[0.14em] uppercase ${done ? "text-cocoa font-semibold" : "text-ink-soft"}`}>{s.label}</div>
            </div>
            {i < steps.length - 1 && <div className={`flex-1 h-px mx-2 ${i < idx ? "bg-cocoa" : "bg-border"}`} />}
          </div>
        );
      })}
    </div>
  );
}
