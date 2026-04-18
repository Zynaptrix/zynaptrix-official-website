import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Instagram } from "lucide-react";
import type { ReactNode } from "react";

export function ZMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="currentColor" aria-label="Zynaptrix">
      <polygon points="14,12 66,12 60,24 20,24" />
      <polygon points="56,18 70,18 28,62 14,62" />
      <polygon points="20,56 60,56 66,68 14,68" />
    </svg>
  );
}

const navItems = [
  { label: "Studio", to: "/studio" as const },
  { label: "Work", to: "/work" as const },
  { label: "Lab", to: "/lab" as const },
  { label: "Journal", to: "/journal" as const },
];

export function SiteHeader() {
  return (
    <header className="animate-soft-fade relative z-30 flex items-center justify-between px-6 py-6 md:px-12">
      <Link to="/" className="text-foreground" aria-label="Zynaptrix home">
        <ZMark className="h-9 w-9" />
      </Link>

      <nav className="hidden items-center gap-3 text-[15px] font-medium text-foreground md:flex">
        {navItems.map((item, i) => (
          <span key={item.to} className="flex items-center gap-3">
            <Link
              to={item.to}
              activeProps={{ className: "opacity-100" }}
              inactiveProps={{ className: "opacity-90" }}
              className="transition-opacity hover:opacity-70"
            >
              {item.label}
            </Link>
            {i < navItems.length - 1 && <span className="text-foreground/45">/</span>}
          </span>
        ))}
      </nav>

      <button
        type="button"
        className="clip-tag-left bg-foreground px-6 py-2.5 text-[13px] font-bold tracking-[0.18em] text-background transition-transform hover:scale-[1.03]"
      >
        INITIATE
      </button>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="animate-soft-fade-up relative z-30 flex items-end justify-between px-6 pb-7 md:px-12">
      <p className="text-[11px] font-bold tracking-[0.28em] text-foreground/95">
        ESTABLISHED 2024 · CAMBRIDGE / NY
      </p>
      <div className="flex items-center gap-2.5">
        {[Facebook, Twitter, Instagram].map((Icon, i) => (
          <a
            key={i}
            href="#"
            aria-label="Social link"
            className="flex h-7 w-7 items-center justify-center rounded-md border border-foreground/30 bg-foreground/10 text-foreground transition-colors hover:bg-foreground/20"
          >
            <Icon className="h-3.5 w-3.5" />
          </a>
        ))}
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-hero-radial grain smoke">
      <SiteHeader />
      <div className="relative z-20 flex-1">{children}</div>
      <SiteFooter />
    </main>
  );
}

export function PageTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mx-auto max-w-[1500px] px-6 pt-6 pb-10 md:px-12">
      <p className="animate-soft-fade text-[11px] font-bold tracking-[0.32em] text-foreground/60">
        {kicker}
      </p>
      <h1
        className="font-brush animate-drip-in mt-3 leading-[0.9] text-foreground drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)]"
        style={{ fontSize: "clamp(3rem, 11vw, 9rem)" }}
      >
        {title}
      </h1>
    </div>
  );
}

export function Card({
  index,
  title,
  meta,
  body,
}: {
  index: string;
  title: string;
  meta: string;
  body: string;
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-foreground/15 bg-foreground/[0.04] p-7 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-foreground/35 hover:bg-foreground/[0.08]">
      <div className="flex items-start justify-between gap-4">
        <span className="text-[11px] font-bold tracking-[0.28em] text-foreground/50">
          {index}
        </span>
        <span className="text-[11px] font-bold tracking-[0.28em] text-foreground/50">
          {meta}
        </span>
      </div>
      <h3
        className="font-brush mt-6 text-foreground"
        style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)", lineHeight: 0.95 }}
      >
        {title}
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-foreground/75">{body}</p>
      <span className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-[radial-gradient(circle,oklch(0.55_0.18_22/0.35),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </article>
  );
}
