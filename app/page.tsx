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
    direction: "rising",
    detail: "Conflict-adjacent signals are clustering across multiple regions.",
    signalStrength: 78,
  },
  {
    title: "Macro Stress",
    value: "Elevated",
    direction: "stabilizing",
    detail: "Inflation, rates, and trade uncertainty remain tightly linked.",
    signalStrength: 65,
  },
  {
    title: "Supply Chain Pressure",
    value: "Watch",
    direction: "rising",
    detail: "Transport chokepoints and industrial dependency risks are increasing.",
    signalStrength: 72,
  },
];

const filters = {
  topics: ["Geopolitics", "Markets", "Trade", "Energy", "Technology", "Security"],
  regions: ["Americas", "Europe", "Asia", "Middle East", "Africa"],
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-800/60 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-sm font-semibold tracking-wider text-emerald-300">REDWOUD</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
              <a href="/product" className="hover:text-emerald-300 transition-colors">Product</a>
              <a href="/pricing" className="hover:text-emerald-300 transition-colors">Pricing</a>
              <a href="/briefing" className="hover:text-emerald-300 transition-colors">Briefing</a>
              <a href="/trends" className="hover:text-emerald-300 transition-colors">Trends</a>
              <a href="/investors" className="hover:text-emerald-300 transition-colors">Investors</a>
            </div>
          </div>
          <button className="btn-primary">Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative border-b border-slate-800/60 bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-emerald-500/5" />
        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24 sm:pt-36 sm:pb-28 lg:px-8">
          <div className="mb-6 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold tracking-wider text-emerald-300 backdrop-blur-sm">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            REAL-TIME GLOBAL INTELLIGENCE
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block text-slate-100">Understand the world</span>
            <span className="block gradient-text">in real time</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-7 text-slate-300 sm:text-xl">
            REDWOUD transforms worldwide data, geopolitical developments, market signals,
            economic indicators, and public information into structured, actionable intelligence.
          </p>

          <div className="mt-12 flex flex-wrap gap-6">
            <button className="btn-primary px-8 py-4 text-base">
              Open Intelligence Dashboard
            </button>
            <button className="btn-secondary px-8 py-4 text-base">
              View Daily Briefing
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl font-bold text-emerald-300">24/7</span>
              <span className="text-sm text-slate-400">Monitoring</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl font-bold text-emerald-300">150+</span>
              <span className="text-sm text-slate-400">Data Sources</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl font-bold text-emerald-300">95%</span>
              <span className="text-sm text-slate-400">Accuracy</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl font-bold text-emerald-300">10s</span>
              <span className="text-sm text-slate-400">Response Time</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard Grid */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-12 lg:gap-8 xl:px-8">
        {/* Filters Sidebar */}
        <div className="glass-card rounded-2xl p-5 lg:col-span-3">
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Topic Filters
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {filters.topics.map((topic) => (
                  <button
                    key={topic}
                    className="rounded-full border border-slate-700/60 bg-slate-800/30 px-3 py-1.5 text-xs font-medium text-slate-200 transition-all duration-200 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-300"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Region Filters
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {filters.regions.map((region) => (
                  <button
                    key={region}
                    className="rounded-full border border-slate-700/60 bg-slate-800/30 px-3 py-1.5 text-xs font-medium text-slate-200 transition-all duration-200 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-300"
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Live Event Feed */}
        <div className="glass-card rounded-2xl p-5 lg:col-span-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-100">Live Event Feed</h2>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-sm font-medium text-emerald-300">Live monitoring</span>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {liveEvents.map((event) => (
              <article
                key={event.title}
                className="group card-hover rounded-xl border border-slate-800/60 bg-slate-900/40 p-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    {event.region}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      event.impact === "High"
                        ? "bg-rose-500/15 text-rose-300 border border-rose-500/30"
                        : "bg-amber-500/15 text-amber-300 border border-amber-500/30"
                    }`}
                  >
                    {event.impact} Impact
                  </span>
                </div>
                <h3 className="mt-2.5 text-base font-semibold leading-snug text-slate-100 group-hover:text-emerald-300 transition-colors">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {event.summary}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Daily AI Briefing */}
        <div className="gradient-border glass-card rounded-2xl p-5 lg:col-span-3">
          <div className="flex h-full flex-col">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-100">Daily AI Briefing</h2>
              <span className="rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-300">
                Today
              </span>
            </div>

            <p className="flex-1 text-sm leading-relaxed text-slate-300">
              Global risk signals are clustering around trade pressure, energy transport uncertainty,
              and strategic technology controls. The highest immediate attention areas are route security,
              policy escalation, and cross-market volatility.
            </p>

            <div className="mt-6 rounded-xl border border-slate-800/60 bg-slate-950/60 p-4">
              <h3 className="text-sm font-semibold text-slate-200">Why this matters</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Seemingly separate developments are beginning to connect into broader strategic pressure.
                Users should watch for second-order impacts on pricing, trade exposure, and regional policy reactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Row: Map and Trends */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 lg:grid-cols-12 lg:gap-8 xl:px-8">
        {/* Global Event Map */}
        <div className="glass-card rounded-2xl p-5 lg:col-span-7">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-100">Global Event Map</h2>
            <span className="text-sm font-medium text-slate-400">Interactive</span>
          </div>
          <div className="mt-5 flex h-80 items-center justify-center rounded-xl border border-slate-800/60 bg-slate-950/40 text-center">
            <div className="max-w-md px-4">
              <div className="mb-3 text-4xl">🗺️</div>
              <p className="text-sm text-slate-400">
                Interactive global intelligence map with real-time event plotting, spatial risk corridors,
                and regional heatmaps will render here.
              </p>
            </div>
          </div>
        </div>

        {/* Trend Summaries */}
        <div className="lg:col-span-5 space-y-4">
          {trendCards.map((card) => (
            <div
              key={card.title}
              className="glass-card card-hover rounded-xl p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-slate-200">{card.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                    {card.detail}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                      card.direction === "rising"
                        ? "bg-rose-500/15 text-rose-300 border border-rose-500/30"
                        : card.direction === "falling"
                        ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                        : "bg-amber-500/15 text-amber-300 border border-amber-500/30"
                    }`}
                  >
                    {card.value}
                  </span>
                  <div className="h-1.5 w-16 overflow-hidden rounded-full bg-slate-800/60">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 transition-all duration-1000"
                      style={{ width: `${card.signalStrength}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
