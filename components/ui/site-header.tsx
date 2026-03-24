import Link from "next/link";

const navItems = [
  { href: "/", label: "Dashboard" },
  { href: "/stream", label: "Stream" },
  { href: "/trends", label: "Trends" },
  { href: "/briefing", label: "Briefing" },
  { href: "/alerts", label: "Alerts" },
  { href: "/investors", label: "Investors" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-sm font-semibold tracking-[0.2em] text-emerald-300">
            REDWOUD
          </Link>

          <nav className="hidden md:flex items-center gap-5 text-sm text-slate-300">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/stream"
            className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-200 transition-colors hover:border-slate-500 hover:text-white"
          >
            Open Stream
          </Link>
        </div>
      </div>
    </header>
  );
}
