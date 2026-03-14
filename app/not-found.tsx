import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-slate-100">
      <div className="max-w-xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
          REDWOUD
        </p>
        <h1 className="mt-4 text-4xl font-semibold">Page not found</h1>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          The page you are looking for does not exist or has moved.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}
