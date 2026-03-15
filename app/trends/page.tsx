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
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
          Trends
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
          Live trend detection across current global intelligence signals.
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trends.length ? (
            trends.map((trend) => (
              <article
                key={trend.id}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-lg font-semibold">{trend.title}</h2>
                  <span className="rounded-full bg-sky-500/15 px-2 py-1 text-xs font-medium text-sky-300">
                    {trend.value}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{trend.detail}</p>
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
