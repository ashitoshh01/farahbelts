import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Farah Belts" }] }),
  component: () => (
    <SiteLayout>
      <div className="container-x py-16 grid lg:grid-cols-2 gap-12">
        <div>
          <div className="eyebrow">Get in Touch</div>
          <h1 className="font-display text-4xl mt-2">We'd love to hear from you.</h1>
          <p className="text-ink-soft mt-3 max-w-md">Questions about a product, an order, or wholesale? Our team responds within 24 hours.</p>

          <div className="mt-8 space-y-4 text-sm">
            <Info Icon={Mail} label="Email" value="hello@farahbelts.com" />
            <Info Icon={Phone} label="Phone" value="+91 98765 43210" />
            <Info Icon={MapPin} label="Address" value="221B Brigade Road, Bengaluru, KA 560001" />
          </div>
        </div>

        <form className="bg-background border border-border p-6 md:p-8 space-y-4 h-fit" onSubmit={(e) => e.preventDefault()}>
          <F label="Name" required />
          <F label="Email" type="email" required />
          <F label="Subject" required />
          <label className="block">
            <span className="block text-[11px] tracking-[0.18em] uppercase text-ink-soft mb-1.5">Message</span>
            <textarea rows={5} required className="w-full border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-cocoa" />
          </label>
          <button className="btn-primary">Send Message</button>
        </form>
      </div>
    </SiteLayout>
  ),
});

function Info({ Icon, label, value }: { Icon: typeof Mail; label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <div className="w-10 h-10 grid place-items-center bg-secondary text-gold"><Icon size={16} /></div>
      <div>
        <div className="text-[11px] tracking-[0.18em] uppercase text-ink-soft">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
}
function F({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="block text-[11px] tracking-[0.18em] uppercase text-ink-soft mb-1.5">{label}</span>
      <input {...rest} className="w-full border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-cocoa" />
    </label>
  );
}
