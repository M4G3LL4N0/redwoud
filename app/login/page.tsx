import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-16">
        <div className="grid w-full gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400">
              REDWOUD Access
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Sign in to the strategic intelligence layer.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                Access live signal monitoring, regional intelligence views,
                trend detection, and briefing workflows from a single command surface.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Live Monitoring
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Track global signals across geopolitics, markets, trade, energy, and security.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Analyst Workflow
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Move from noisy headlines to structured events, clustering, and interpretation.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-black/20 sm:p-8">
            <div className="mb-6 space-y-2">
              <h2 className="text-2xl font-semibold text-white">Login</h2>
              <p className="text-sm text-slate-400">
                Use your account to enter the REDWOUD platform.
              </p>
            </div>

            <form className="space-y-5">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="analyst@redwoud.ai"
                  className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-slate-600"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-slate-300"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••••••"
                  className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-slate-600"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-300 transition hover:border-emerald-400/50 hover:bg-emerald-500/15"
              >
                Continue
              </button>
            </form>

            <div className="mt-6 border-t border-slate-800 pt-4 text-sm text-slate-400">
              Need an account?{" "}
              <Link
                href="/pricing"
                className="text-slate-200 underline decoration-slate-700 underline-offset-4 hover:text-white"
              >
                View access options
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
