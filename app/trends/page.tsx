import type { TrendSummary } from "@/lib/mockData";

async function getLiveTrends(): Promise<TrendSummary[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
      ? process.env.NEXT_PUBLIC_SITE_URL
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

    const response = await fetch(`${baseUrl}/api/trends`, {
      next: { revalidate: 120 },
    });

    if (!response.ok) return [];

    const data = await response.json();
    return Array.isArray(data.trends) ? data.trends : [];
  } catch {
    return [];
  }
}

export default async function TrendsPage() {
  const trends = await getLiveTrends();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900/50 text-slate-100">
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex items-center justify-between border-b border-slate-800 pb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400/80">
              Live Trend Detection
            </p>
            <h1 className="mt-2 max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl">
              Real-time signal analysis across global intelligence streams
            </h1>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 px-4 py-1.5 text-sm font-medium text-emerald-400 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Live Intelligence Feed
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {trends.length ? (
            trends.map((trend) => (
              <article
                key={trend.id}
                className="group relative rounded-xl border border-slate-800/50 bg-gradient-to-b from-slate-900/50 to-slate-900/30 p-5 backdrop-blur-sm transition-all hover:border-slate-700/50 hover:bg-slate-800/30"
              >
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-base font-semibold leading-6 text-slate-100">
                    {trend.title}
                  </h2>
                  <span className="flex-shrink-0 rounded-full bg-sky-500/15 px-2.5 py-1 text-xs font-medium text-sky-300/90">
                    {trend.value}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300/90">{trend.detail}</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="rounded-full bg-slate-800/50 px-2.5 py-1 text-xs font-medium text-slate-300/90">
                    Emerging
                  </span>
                  <span className="rounded-full bg-slate-800/50 px-2.5 py-1 text-xs font-medium text-slate-300/90">
                    12h
                  </span>
                </div>
              </article>
            ))
          ) : (
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-sm text-slate-400">
              No live trends available yet.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
