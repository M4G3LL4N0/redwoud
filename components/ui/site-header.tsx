import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/briefing", label: "Briefing" },
  { href: "/trends", label: "Trends" },
  { href: "/investors", label: "Investors" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.45)]" />
          <div>
            <div className="text-sm font-semibold tracking-[0.22em] text-slate-100">
              REDWOUD
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
              Global Intelligence Platform
            </div>
          </div>
        </Link>

        <nav className="hidden gap-5 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/investors"
            className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:border-slate-500 hover:text-white"
          >
            Investor Overview
          </Link>
        </div>
      </div>
    </header>
  );
}
