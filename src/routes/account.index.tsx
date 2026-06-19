import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/account/")({
  head: () => ({ meta: [{ title: "Profile — Farah Belts" }] }),
  component: () => (
    <div>
      <h2 className="font-display text-2xl mb-6">Profile</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          ["First Name", "Aarav"],
          ["Last Name", "Sharma"],
          ["Email", "aarav@example.com"],
          ["Phone", "+91 98765 43210"],
        ].map(([l, v]) => (
          <label key={l}>
            <span className="block text-[11px] tracking-[0.18em] uppercase text-ink-soft mb-1.5">{l}</span>
            <input defaultValue={v} className="w-full border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-cocoa" />
          </label>
        ))}
      </div>
      <button className="btn-primary mt-6">Save Changes</button>
    </div>
  ),
});
