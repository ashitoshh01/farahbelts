import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/account/addresses")({
  component: () => (
    <div>
      <h2 className="font-display text-2xl mb-6">Saved Addresses</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="border border-border p-5">
          <div className="text-[11px] tracking-[0.18em] uppercase text-gold mb-2">Default</div>
          <div className="font-medium">Aarav Sharma</div>
          <div className="text-sm text-ink-soft mt-1">221B Brigade Road, Bengaluru, KA 560001, India</div>
          <div className="text-sm text-ink-soft">+91 98765 43210</div>
        </div>
        <button className="border border-dashed border-border p-5 text-ink-soft hover:border-cocoa hover:text-cocoa transition text-sm">+ Add new address</button>
      </div>
    </div>
  ),
});
