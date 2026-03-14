const liveEvents = [
  {
    region: "Europe",
    title: "Energy corridor tensions raise regional supply concerns",
    impact: "High",
    summary:
      "Rising transport and policy uncertainty is increasing volatility across regional energy markets.",
  },
  {
    region: "Asia",
    title: "Export controls discussion intensifies around strategic chips",
    impact: "Medium",
    summary:
      "Technology restrictions could affect semiconductor supply chains, pricing, and cross-border investment.",
  },
  {
    region: "Middle East",
    title: "Shipping route disruption risk edges higher",
    impact: "High",
    summary:
      "New signals suggest elevated trade-route monitoring and possible insurance cost increases.",
  },
];

const trendCards = [
  {
    title: "Geopolitical Risk",
    value: "Rising",
    detail: "Conflict-adjacent signals are clustering across multiple regions.",
  },
  {
    title: "Macro Stress",
    value: "Elevated",
    detail: "Inflation, rates, and trade uncertainty remain tightly linked.",
  },
  {
    title: "Supply Chain Pressure",
    value: "Watch",
    detail: "Transport chokepoints and industrial dependency risks are increasing.",
  },
];

const filters = {
  topics: ["Geopolitics", "Markets", "Trade", "Energy", "Technology", "Security"],
  regions: ["Americas", "Europe", "Asia", "Middle East", "Africa"],
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-6 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium tracking-wide text-emerald-300">
            REDWOUD · REAL-TIME GLOBAL INTELLIGENCE
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
            Understand the world in real time.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            REDWOUD turns worldwide data, geopolitical developments, market signals,
            economic indicators, and public information into structured, actionable intelligence.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950">
              Open Intelligence Dashboard
            </button>
            <button className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200">
              View Daily Briefing
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-12">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 lg:col-span-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Topic Filters
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {filters.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-200"
              >
                {topic}
              </span>
            ))}
          </div>

          <h2 className="mt-8 text-sm font-semibold uppercase tracking-wide text-slate-400">
            Region Filters
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {filters.regions.map((region) => (
              <span
                key={region}
                className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-200"
              >
                {region}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 lg:col-span-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Live Event Feed</h2>
            <span className="text-sm text-emerald-300">Live monitoring</span>
          </div>

          <div className="mt-5 space-y-4">
            {liveEvents.map((event) => (
              <article
                key={event.title}
                className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs uppercase tracking-wide text-slate-400">
                    {event.region}
                  </span>
                  <span className="rounded-full bg-amber-500/15 px-2 py-1 text-xs font-medium text-amber-300">
                    {event.impact} Impact
                  </span>
                </div>
                <h3 className="mt-2 text-base font-semibold">{event.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{event.summary}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 lg:col-span-3">
          <h2 className="text-lg font-semibold">Daily AI Briefing</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Global risk signals are clustering around trade pressure, energy transport uncertainty,
            and strategic technology controls. The highest immediate attention areas are route security,
            policy escalation, and cross-market volatility.
          </p>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <h3 className="text-sm font-semibold text-slate-200">Why this matters</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Seemingly separate developments are beginning to connect into broader strategic pressure.
              Users should watch for second-order impacts on pricing, trade exposure, and regional policy reactions.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-8 lg:grid-cols-12">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 lg:col-span-7">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Global Event Map</h2>
            <span className="text-sm text-slate-400">Map placeholder</span>
          </div>
          <div className="mt-5 flex h-80 items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-950/60 text-center text-sm text-slate-400">
            Interactive global intelligence map will render here.
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 lg:col-span-5">
          <h2 className="text-lg font-semibold">Trend Summaries</h2>
          <div className="mt-5 space-y-4">
            {trendCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold">{card.title}</h3>
                  <span className="rounded-full bg-sky-500/15 px-2 py-1 text-xs font-medium text-sky-300">
                    {card.value}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-300">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
