import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useState } from "react";

export const Route = createFileRoute("/auth")({
  head: () => ({ meta: [{ title: "Account — Farah Belts" }] }),
  component: AuthPage,
});

function AuthPage() {
  const [mode, setMode] = useState<"login" | "register">("login");
  return (
    <SiteLayout>
      <div className="container-x py-16 max-w-md">
        <div className="bg-background border border-border p-8">
          <div className="flex gap-6 border-b border-border mb-6">
            {(["login", "register"] as const).map((m) => (
              <button key={m} onClick={() => setMode(m)} className={`pb-3 text-sm tracking-[0.12em] uppercase ${mode === m ? "text-cocoa border-b-2 border-cocoa font-semibold" : "text-ink-soft"}`}>
                {m === "login" ? "Sign In" : "Create Account"}
              </button>
            ))}
          </div>

          <h1 className="font-display text-2xl">{mode === "login" ? "Welcome back" : "Join Farah"}</h1>
          <p className="text-sm text-ink-soft mt-1">{mode === "login" ? "Sign in to continue." : "Create your account to start shopping."}</p>

          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            {mode === "register" && <Field label="Full Name" required />}
            <Field label="Email" type="email" required />
            <Field label="Password" type="password" required />
            {mode === "login" && <Link to="/auth" className="block text-right text-xs text-ink-soft link-underline w-fit ml-auto">Forgot password?</Link>}
            <button className="btn-primary w-full justify-center">{mode === "login" ? "Sign In" : "Create Account"}</button>
          </form>

          <div className="flex items-center gap-3 my-6 text-xs text-ink-soft"><div className="flex-1 h-px bg-border" /> OR <div className="flex-1 h-px bg-border" /></div>
          <button className="btn-outline w-full justify-center text-cocoa">Continue with Google</button>

          <p className="text-[11px] text-ink-soft text-center mt-6">By continuing you agree to our Terms and Privacy Policy.</p>
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
