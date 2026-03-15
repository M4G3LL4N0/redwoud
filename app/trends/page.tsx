interface TrendCard {
  id: string;
  title: string;
  value: string;
  detail: string;
}

export default async function TrendsPage() {
  let trends: TrendCard[] = [];
  
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/trends`, {
      next: { revalidate: 60 }
    });
    const data = await response.json();
    
    trends = data.trends.map((trend: any) => ({
      id: trend.id,
      title: trend.title,
      value: trend.value,
      detail: trend.detail,
    }));

  } catch (error) {
    console.error('Failed to fetch trends:', error);
  }
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
          Trends
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
          Strategic signal clustering across major global themes.
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {error ? (
            <div className="col-span-full rounded-2xl border border-rose-800/50 bg-slate-900/50 p-8 text-center">
              <p className="text-rose-400">Failed to load live trends</p>
              <p className="mt-2 text-sm text-slate-500">Retrying automatically...</p>
            </div>
          ) : trends.length === 0 ? (
            <div className="col-span-full grid animate-pulse gap-3 py-16">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-32 rounded-2xl bg-slate-900/50"></div>
              ))}
            </div>
          ) : (
            trends.map((trend) => (
            <article key={trend.id} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
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
            <div className="col-span-full py-16 text-center text-slate-400">
              Loading trends data...
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
