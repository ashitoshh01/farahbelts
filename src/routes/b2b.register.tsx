import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/b2b/register")({
  head: () => ({ meta: [{ title: "Wholesale Registration — Farah Belts" }] }),
  component: () => (
    <SiteLayout>
      <div className="container-x py-16 max-w-2xl">
        <div className="eyebrow">Apply for Wholesale</div>
        <h1 className="font-display text-3xl md:text-4xl mt-2">Become a Farah Partner</h1>
        <p className="text-ink-soft mt-2">All wholesale accounts are subject to approval. We respond within 1–2 business days.</p>

        <form className="mt-8 grid md:grid-cols-2 gap-4 bg-background border border-border p-6 md:p-8" onSubmit={(e) => e.preventDefault()}>
          <F label="Business Name" required />
          <F label="GST Number" required />
          <F label="Contact Name" required />
          <F label="Phone" type="tel" required />
          <div className="md:col-span-2"><F label="Business Email" type="email" required /></div>
          <div className="md:col-span-2"><F label="Address" required /></div>
          <F label="City" required />
          <F label="State" required />
          <div className="md:col-span-2">
            <label className="block">
              <span className="block text-[11px] tracking-[0.18em] uppercase text-ink-soft mb-1.5">Tell us about your business</span>
              <textarea rows={4} className="w-full border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-cocoa" />
            </label>
          </div>
          <div className="md:col-span-2"><button className="btn-primary">Submit Application</button></div>
        </form>
      </div>
    </SiteLayout>
  ),
});

function F({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="block text-[11px] tracking-[0.18em] uppercase text-ink-soft mb-1.5">{label}</span>
      <input {...rest} className="w-full border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-cocoa" />
    </label>
  );
}
