"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  { label: "Research", to: "/research" },
  { label: "Studio", to: "/studio" },
  { label: "Work", to: "/work" },
  { label: "Lab", to: "/lab" },
  { label: "Journal", to: "/journal" },
];

export function SiteHeader() {
  return (
    <header className="animate-soft-fade relative z-30 flex items-center justify-between px-6 py-6 md:px-12">
      <Link href="/" className="text-ink" aria-label="Zynaptrix home">
        <ZMark className="h-9 w-9" />
      </Link>

      <nav className="hidden items-center gap-3 text-[15px] font-medium text-ink md:flex">
        {navItems.map((item, i) => (
          <span key={item.to} className="flex items-center gap-3">
            <Link
              href={item.to}
              className="transition-opacity hover:opacity-70 opacity-90"
            >
              {item.label}
            </Link>
            {i < navItems.length - 1 && <span className="text-ink/45">/</span>}
          </span>
        ))}
      </nav>

      <button
        type="button"
        className="clip-tag-left bg-ink px-6 py-2.5 text-[13px] font-bold tracking-[0.18em] text-paper transition-transform hover:scale-[1.03]"
      >
        INITIATE
      </button>
    </header>
  );
}

export function SiteFooter() {
  const pathname = usePathname();

  if (pathname === "/research") {
    return (
      <footer className="border-t border-rule mt-10 relative z-30">
        <div className="mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-subtle">
          <p>Zynaptrix Research / Cambridge / NY</p>
          <p>© Zynaptrix 2078</p>
          <p className="tracking-[0.2em]">EST. MMXXIV</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="animate-soft-fade-up relative z-30 flex items-end justify-between px-6 pb-7 md:px-12 mt-10">
      <p className="text-[11px] font-bold tracking-[0.28em] text-ink/95">
        ESTABLISHED 2024 · CAMBRIDGE / NY
      </p>
      <div className="flex items-center gap-2.5">
        {[Facebook, Twitter, Instagram].map((Icon, i) => (
          <a
            key={i}
            href="#"
            aria-label="Social link"
            className="flex h-7 w-7 items-center justify-center rounded-md border border-ink/30 bg-ink/10 text-ink transition-colors hover:bg-ink/20"
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
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-paper text-ink">
      <SiteHeader />
      <div className="relative z-20 flex-1">{children}</div>
      <SiteFooter />
    </main>
  );
}
