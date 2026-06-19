import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/account/settings")({
  component: () => (
    <div>
      <h2 className="font-display text-2xl mb-6">Account Settings</h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-medium mb-3">Change Password</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <input type="password" placeholder="Current password" className="border border-border bg-background px-3 py-2.5 text-sm" />
            <input type="password" placeholder="New password" className="border border-border bg-background px-3 py-2.5 text-sm" />
          </div>
          <button className="btn-primary mt-4">Update Password</button>
        </div>
        <div className="border-t border-border pt-6">
          <h3 className="font-medium mb-2 text-destructive">Delete Account</h3>
          <p className="text-sm text-ink-soft">Permanently delete your account and all associated data.</p>
          <button className="btn-outline mt-4 text-destructive">Delete Account</button>
        </div>
      </div>
    </div>
  ),
});
