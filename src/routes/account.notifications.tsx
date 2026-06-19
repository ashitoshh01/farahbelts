import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/account/notifications")({
  component: () => (
    <div>
      <h2 className="font-display text-2xl mb-6">Notifications</h2>
      <div className="space-y-3">
        {[
          "Your order #FB1042 has been shipped.",
          "New arrivals dropped this week — explore now.",
          "Use code FARAH10 for 10% off your next order.",
        ].map((n, i) => (
          <div key={i} className="border border-border p-4 text-sm">{n}</div>
        ))}
      </div>
    </div>
  ),
});
