import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/briefing", label: "Briefing" },
  { href: "/trends", label: "Trends" },
  { href: "/alerts", label: "Alerts" },
  { href: "/investors", label: "Investors" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 border-b border-slate-800/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4">
        {/* Status bar */}
        <div className="flex h-8 items-center justify-between border-b border-slate-800/30 px-3">
          <div className="flex items-center gap-3">
            <div className="cli-prompt">
              <span className="status-light bg-emerald-400 shadow-[0_0_8px_theme(colors.emerald.400/0.3)]"></span>
              OPERATIONAL
            </div>
            <div className="cli-prompt">
              <span className="status-light bg-amber-400 shadow-[0_0_8px_theme(colors.amber.400/0.2)]"></span>
              MONITORING_ACTIVE
            </div>
          </div>
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="text-slate-300">UTC:{new Date().toISOString().split('T')[1].slice(0,8)}</span>
            <span className="text-slate-400">{new Date().toISOString().split('T')[0]}</span>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex h-14 items-center justify-between px-2">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.5)] group-hover:bg-emerald-300 transition-colors" />
            <div className="-space-y-0.5">
              <div className="font-mono text-sm font-semibold tracking-tight text-slate-200">{">"} REDWOUD</div>
              <div className="text-[10px] uppercase tracking-[0.15em] text-slate-500">STRATEGIC INTELLIGENCE PLATFORM</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded px-2.5 py-1 text-xs font-medium text-slate-300 transition-all hover:bg-slate-800/50 hover:text-white group relative"
              >
                {link.label}
                <span className="absolute inset-x-2.5 bottom-1 h-px bg-emerald-400/0 transition-all duration-300 group-hover:bg-emerald-400/80" />
              </Link>
            ))}
          </nav>

          <Link
            href="/stream"
            className="hidden md:flex items-center gap-1.5 rounded border border-slate-700 bg-slate-800/30 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-white hover:shadow-[0_0_15px_rgba(52,211,153,0.1)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
            </span>
            LIVE STREAM
          </Link>
        </div>
      </div>
    </header>
  );
}
