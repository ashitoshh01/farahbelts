import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useCart } from "@/lib/cart";
import { formatINR } from "@/lib/catalog";
import { useState } from "react";
import { Check, CreditCard, Lock } from "lucide-react";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — Farah Belts" }] }),
  component: Checkout,
});

function Checkout() {
  const { detailed, subtotal, count, clear } = useCart();
  const nav = useNavigate();
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const shipping = subtotal > 999 ? 0 : 99;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax;

  if (count === 0) {
    return (
      <SiteLayout><div className="container-x py-24 text-center">
        <h1 className="font-display text-3xl">Your cart is empty</h1>
        <Link to="/shop" className="btn-primary mt-6 inline-flex">Shop now</Link>
      </div></SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <div className="container-x py-12">
        <div className="eyebrow">Checkout</div>
        <h1 className="font-display text-3xl md:text-4xl mt-2">Complete Your Order</h1>

        {/* Steps */}
        <div className="flex items-center gap-4 mt-8 mb-10 text-xs tracking-[0.16em] uppercase">
          {["Shipping", "Review", "Payment"].map((s, i) => {
            const n = (i + 1) as 1 | 2 | 3;
            const active = step === n;
            const done = step > n;
            return (
              <div key={s} className="flex items-center gap-3">
                <div className={`w-7 h-7 grid place-items-center rounded-full text-[11px] ${done ? "bg-cocoa text-white" : active ? "bg-gold text-white" : "bg-secondary text-ink-soft"}`}>
                  {done ? <Check size={14} /> : n}
                </div>
                <span className={active ? "text-cocoa font-semibold" : "text-ink-soft"}>{s}</span>
                {i < 2 && <div className="w-10 h-px bg-border" />}
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-10">
          <div className="bg-background border border-border p-6 md:p-8">
            {step === 1 && (
              <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="grid md:grid-cols-2 gap-4">
                <Field label="Full Name" required />
                <Field label="Phone" type="tel" required />
                <div className="md:col-span-2"><Field label="Email" type="email" required /></div>
                <div className="md:col-span-2"><Field label="Street Address" required /></div>
                <Field label="City" required />
                <Field label="State" required />
                <Field label="PIN Code" required />
                <Field label="Country" defaultValue="India" />
                <div className="md:col-span-2 flex justify-end pt-2">
                  <button className="btn-primary">Continue to Review</button>
                </div>
              </form>
            )}
            {step === 2 && (
              <div>
                <h3 className="font-display text-xl mb-5">Review Your Order</h3>
                <div className="divide-y divide-border">
                  {detailed.map(({ product, qty, lineTotal }) => (
                    <div key={product.id} className="py-4 flex gap-4 items-center">
                      <img src={product.image} alt="" className="w-16 h-16 object-cover bg-secondary" />
                      <div className="flex-1">
                        <div className="font-medium">{product.name}</div>
                        <div className="text-xs text-ink-soft">Qty: {qty}</div>
                      </div>
                      <div className="font-semibold text-cocoa">{formatINR(lineTotal)}</div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-6">
                  <button onClick={() => setStep(1)} className="btn-outline text-cocoa">Back</button>
                  <button onClick={() => setStep(3)} className="btn-primary">Continue to Payment</button>
                </div>
              </div>
            )}
            {step === 3 && (
              <div>
                <h3 className="font-display text-xl mb-5 flex items-center gap-2"><CreditCard size={20} /> Payment</h3>
                <div className="space-y-3">
                  {["Razorpay (Cards, UPI, Netbanking)", "Cash on Delivery"].map((m, i) => (
                    <label key={m} className="flex items-center gap-3 border border-border p-4 cursor-pointer hover:border-cocoa">
                      <input type="radio" name="pay" defaultChecked={i === 0} className="accent-cocoa" />
                      <span className="text-sm">{m}</span>
                    </label>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs text-ink-soft mt-4"><Lock size={12} /> Your payment is encrypted and secure.</div>
                <div className="flex justify-between mt-6">
                  <button onClick={() => setStep(2)} className="btn-outline text-cocoa">Back</button>
                  <button onClick={() => { clear(); nav({ to: "/order-success" }); }} className="btn-primary">Place Order · {formatINR(total)}</button>
                </div>
              </div>
            )}
          </div>

          <aside className="bg-background border border-border p-6 h-fit">
            <div className="font-display text-xl mb-5">Summary</div>
            <div className="space-y-2 text-sm">
              <Row label={`Subtotal (${count})`} value={formatINR(subtotal)} />
              <Row label="Shipping" value={shipping === 0 ? "Free" : formatINR(shipping)} />
              <Row label="Tax" value={formatINR(tax)} />
            </div>
            <div className="border-t border-border mt-4 pt-4 flex justify-between">
              <span>Total</span><span className="font-display text-xl text-cocoa">{formatINR(total)}</span>
            </div>
          </aside>
        </div>
      </div>
    </SiteLayout>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="block text-[11px] tracking-[0.18em] uppercase text-ink-soft mb-1.5">{label}</span>
      <input {...rest} className="w-full border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-cocoa" />
    </label>
  );
}
function Row({ label, value }: { label: string; value: string }) {
  return <div className="flex justify-between"><span className="text-ink-soft">{label}</span><span className="font-medium">{value}</span></div>;
}
