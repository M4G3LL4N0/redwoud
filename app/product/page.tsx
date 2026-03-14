const modules = [
  {
    title: "Live Event Feed",
    detail: "AI-normalized global developments organized into structured, readable intelligence.",
  },
  {
    title: "Global Event Map",
    detail: "Geographic intelligence view for tracking regional clustering and escalation patterns.",
  },
  {
    title: "Daily AI Briefing",
    detail: "Condensed strategic explanation of what matters, why it matters, and what to watch next.",
  },
  {
    title: "Trend Summaries",
    detail: "High-level signal compression across geopolitics, trade, markets, energy, and technology.",
  },
  {
    title: "Filters and Search",
    detail: "Topic and region-based exploration designed for speed and clarity.",
  },
  {
    title: "Alerts and Workspaces",
    detail: "Future premium workflows for professionals, teams, and enterprises.",
  },
];

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Product
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
            Structured intelligence for a world that moves too fast to read manually.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            REDWOUD transforms fragmented global signals into a coherent intelligence experience for
            analysts, operators, founders, investors, and enterprise teams.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <article key={module.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-lg font-semibold">{module.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{module.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
