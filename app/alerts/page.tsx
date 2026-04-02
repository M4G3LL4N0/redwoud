export default function AlertsPage() {
  const alertCategories = [
    {
      title: "Entity Alerts",
      description: "Track specific companies, countries, and strategic actors with elevated live signal activity.",
    },
    {
      title: "Region Alerts",
      description: "Monitor shifting pressure across the Americas, Europe, Asia, the Middle East, and Africa.",
    },
    {
      title: "Topic Alerts",
      description: "Follow geopolitical, market, trade, energy, technology, and security developments.",
    },
    {
      title: "Risk Alerts",
      description: "Surface high-intensity conditions, rising concentrations, and emerging strategic pressure.",
    },
  ];

  const activeAlerts = [
    {
      title: "Shipping corridor pressure remains elevated",
      meta: "Trade • Middle East • High priority",
    },
    {
      title: "Semiconductor restriction signals clustering",
      meta: "Technology • Asia • Active",
    },
    {
      title: "Energy transport uncertainty requires monitoring",
      meta: "Energy • Europe • Elevated",
    },
    {
      title: "Cross-region macro volatility still active",
      meta: "Markets • Americas • Watch",
    },
  ];

  const signalActivity = [
    "Multiple high-priority signals are concentrated in trade and transport routes.",
    "Technology-related policy and supply chain developments remain active.",
    "Regional energy sensitivity continues to shape wider market behavior.",
    "Cross-topic signal clustering suggests broader strategic pressure.",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Alerting Control Center
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">
            Alerts
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            REDWOUD alerting helps operators and analysts identify where live signals are clustering,
            which conditions are rising in priority, and what deserves immediate monitoring.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {alertCategories.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5"
            >
              <h2 className="text-base font-semibold text-slate-100">{card.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-7">
          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold">Active Alerts</h2>
              <span className="rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-200">
                Live priority view
              </span>
            </div>

            <div className="mt-6 space-y-3">
              {activeAlerts.map((alert) => (
                <article
                  key={alert.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="text-sm font-semibold text-slate-100">{alert.title}</h3>
                  <p className="mt-2 text-xs text-slate-400">{alert.meta}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Supporting Signal Activity</h2>
            <div className="mt-6 space-y-3">
              {signalActivity.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-7 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-6 lg:col-span-5">
          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Configuration</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Configure future entity, region, topic, and risk alert workflows. This surface is
              designed to evolve into a full operational control layer for REDWOUD users.
            </p>

            <div className="mt-6 grid gap-3">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Alert Type
                </p>
                <p className="mt-2 text-sm text-slate-200">Entity / Region / Topic / Risk</p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Frequency
                </p>
                <p className="mt-2 text-sm text-slate-200">Real-time / Hourly / Daily</p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Delivery
                </p>
                <p className="mt-2 text-sm text-slate-200">Dashboard / Email / Push</p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Control Center Status</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              REDWOUD alerting is positioned as a strategic monitoring layer that converts live
              signal concentration into structured operational awareness.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
