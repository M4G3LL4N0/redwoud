import { trendCards } from "@/lib/mockData";

export default function TrendsPage() {
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
          {trendCards.map((trend) => (
            <article key={trend.id} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold">{trend.title}</h2>
                <span className="rounded-full bg-sky-500/15 px-2 py-1 text-xs font-medium text-sky-300">
                  {trend.value}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">{trend.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
