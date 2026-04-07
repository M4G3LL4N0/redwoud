import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 text-slate-100">
      <div className="pattern-grid max-w-xl rounded-xl border border-slate-800/50 bg-slate-950/90 p-6">
        <div className="flex items-center justify-center gap-2 opacity-90">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rose-400"></span>
          </span>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
            Page Not Found
          </p>
        </div>
        <h1 className="mt-4 text-center text-3xl font-semibold">
          Lost in the Intelligence Stream
        </h1>
        <p className="mt-2 text-center text-sm text-slate-400">
          The page you're looking for doesn't exist in our operational parameters.
        </p>
        <div className="mt-6 flex justify-center">
          <Link
            href="/"
            className="rounded-lg border border-slate-700 bg-slate-800/30 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-slate-600 hover:bg-slate-800/50 hover:text-white"
          >
            Return to Mission Control
          </Link>
        </div>
      </div>
    </main>
  );
}
