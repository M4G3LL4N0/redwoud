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

function trendWidth(value: string): number {
  if (value === "Rising") return 85;
  if (value === "Active") return 65;
  return 45;
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
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          REDWOUD groups live events into trend clusters by topic and region to surface rising pressure,
          active signal concentration, and emerging strategic patterns.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trends.length ? (
            trends.map((trend) => {
              const region = typeof (trend as any).region === "string" ? (trend as any).region : "";
              const topic = typeof (trend as any).topic === "string" ? (trend as any).topic : "";

              return (
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

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-sky-500 to-sky-400"
                      style={{ width: `${trendWidth(trend.value)}%` }}
                    ></div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2 text-xs">
                    {region ? (
                      <span className="rounded-full bg-sky-500/10 px-2.5 py-1 text-sky-300/90">
                        {region}
                      </span>
                    ) : null}
                    {topic ? (
                      <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-emerald-300/90">
                        {topic}
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-300">{trend.detail}</p>
                </article>
              );
            })
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
