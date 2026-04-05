import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 text-slate-100">
      <div className="pattern-grid max-w-xl rounded-xl border border-slate-800/50 bg-slate-950/90 p-8 text-center backdrop-blur-sm">
        <div className="flex items-center justify-center gap-2 opacity-90">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rose-400"></span>
          </span>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
            SYSTEM ALERT
          </p>
        </div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Navigation error</h1>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          The requested resource was not found in the intelligence database.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="cli-action-btn rounded border border-slate-700/50 bg-slate-800/30 px-5 py-2.5 text-sm font-medium text-slate-200 transition-all hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-white"
          >
            <span className="gradient-text">Return to Mission Control</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
