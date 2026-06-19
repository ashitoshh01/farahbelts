import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { User, MapPin, Package, Heart, Bell, Settings } from "lucide-react";

export const Route = createFileRoute("/account")({
  component: () => (
    <SiteLayout>
      <div className="container-x py-12">
        <div className="eyebrow">My Account</div>
        <h1 className="font-display text-3xl md:text-4xl mt-2">Welcome back</h1>
        <div className="grid lg:grid-cols-[240px_1fr] gap-8 mt-10">
          <Sidebar />
          <div className="bg-background border border-border p-6 md:p-8"><Outlet /></div>
        </div>
      </div>
    </SiteLayout>
  ),
});

function Sidebar() {
  const path = useLocation({ select: (l) => l.pathname });
  const links = [
    { to: "/account", label: "Profile", Icon: User },
    { to: "/account/orders", label: "Orders", Icon: Package },
    { to: "/account/addresses", label: "Addresses", Icon: MapPin },
    { to: "/account/wishlist", label: "Wishlist", Icon: Heart },
    { to: "/account/notifications", label: "Notifications", Icon: Bell },
    { to: "/account/settings", label: "Settings", Icon: Settings },
  ] as const;
  return (
    <aside className="bg-background border border-border">
      {links.map(({ to, label, Icon }) => {
        const active = path === to;
        return (
          <Link key={to} to={to} className={`flex items-center gap-3 px-5 py-4 text-sm border-b border-border last:border-0 ${active ? "bg-secondary text-cocoa font-semibold" : "text-ink hover:bg-secondary"}`}>
            <Icon size={16} strokeWidth={1.5} /> {label}
          </Link>
        );
      })}
    </aside>
  );
}
