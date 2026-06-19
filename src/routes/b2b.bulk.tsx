import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Upload } from "lucide-react";

export const Route = createFileRoute("/b2b/bulk")({
  head: () => ({ meta: [{ title: "Bulk Order — Farah Belts B2B" }] }),
  component: () => (
    <SiteLayout>
      <div className="container-x py-16 max-w-3xl">
        <div className="eyebrow">Bulk Orders & RFQ</div>
        <h1 className="font-display text-3xl md:text-4xl mt-2">Place a Large Quantity Order</h1>
        <p className="text-ink-soft mt-2">Upload a CSV or fill out the form below. We respond with quotes within 24 hours.</p>

        <div className="mt-8 bg-background border border-border p-6 md:p-8">
          <label className="block border-2 border-dashed border-border p-8 text-center cursor-pointer hover:border-cocoa transition">
            <Upload className="mx-auto text-gold" />
            <div className="font-medium mt-3">Upload CSV File</div>
            <div className="text-xs text-ink-soft mt-1">Columns: SKU, Quantity, Notes</div>
            <input type="file" accept=".csv" className="hidden" />
          </label>

          <div className="my-6 text-center text-xs text-ink-soft">— OR FILL THE QUICK ORDER FORM —</div>

          <form className="grid md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
            <F label="Business Name" required />
            <F label="Contact Email" type="email" required />
            <F label="Product / SKU" required />
            <F label="Quantity" type="number" required />
            <div className="md:col-span-2">
              <label className="block">
                <span className="block text-[11px] tracking-[0.18em] uppercase text-ink-soft mb-1.5">Additional Requirements</span>
                <textarea rows={4} className="w-full border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-cocoa" />
              </label>
            </div>
            <div className="md:col-span-2"><button className="btn-primary">Request Quote</button></div>
          </form>
        </div>
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
