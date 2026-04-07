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
        <div className="space-y-6 lg:col-span-8">
          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">Active Alert Conditions</h2>
                <p className="mt-1 text-sm text-slate-400">Live signal thresholds triggered in last 24 hours</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-400"></span>
                </span>
                <span className="rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-200">
                  Operational Priority
                </span>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {activeAlerts.map((alert) => (
                <article
                  key={alert.title}
                  className="rounded-xl border border-slate-800/50 bg-gradient-to-b from-slate-900/50 to-slate-950/80 p-4"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-100">{alert.title}</h3>
                      <p className="mt-1 text-xs text-slate-400">{alert.meta}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="rounded-full bg-rose-500/15 px-2 py-1 text-xs font-medium text-rose-200">
                        Active
                      </span>
                      <span className="text-xs text-slate-500">Last updated: 12m ago</span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="flex-1">
                      <div className="h-1 w-full rounded-full bg-slate-800">
                        <div 
                          className="h-1 rounded-full bg-gradient-to-r from-rose-500 to-rose-400" 
                          style={{ width: '85%' }}
                        />
                      </div>
                    </div>
                    <span className="text-xs font-medium text-slate-300">85% intensity</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Trigger Activity</h2>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Last 24h</span>
                <select className="rounded-lg border border-slate-800 bg-slate-950/50 px-2 py-1 text-xs text-slate-300">
                  <option>All alert types</option>
                  <option>Entity alerts</option>
                  <option>Region alerts</option>
                  <option>Topic alerts</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {signalActivity.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-slate-800/50 bg-slate-950/60 p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-slate-800/50">
                      <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                    </div>
                    <div>
                      <p className="text-sm leading-6 text-slate-300">{item}</p>
                      <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                        <span>12:42 PM</span>
                        <span>•</span>
                        <span>High confidence</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-6 lg:col-span-4">
          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Alert Configuration</h2>
              <button className="rounded-lg border border-slate-700 px-3 py-1 text-xs font-medium text-slate-200 hover:border-slate-600 hover:text-white">
                New Alert
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Threshold Sensitivity</label>
                <select className="w-full rounded-lg border border-slate-800 bg-slate-950/50 px-3 py-2 text-sm text-slate-300">
                  <option>Standard (recommended)</option>
                  <option>High sensitivity</option>
                  <option>Low sensitivity</option>
                  <option>Custom thresholds</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Scope Filtering</label>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="regions" className="h-4 w-4 rounded border-slate-700 bg-slate-800 text-emerald-400" />
                    <label htmlFor="regions" className="text-sm text-slate-300">Regional alerts</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="entities" className="h-4 w-4 rounded border-slate-700 bg-slate-800 text-emerald-400" checked />
                    <label htmlFor="entities" className="text-sm text-slate-300">Entity alerts</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="topics" className="h-4 w-4 rounded border-slate-700 bg-slate-800 text-emerald-400" checked />
                    <label htmlFor="topics" className="text-sm text-slate-300">Topic alerts</label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Delivery Channels</label>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="dashboard" className="h-4 w-4 rounded border-slate-700 bg-slate-800 text-emerald-400" checked />
                    <label htmlFor="dashboard" className="text-sm text-slate-300">Dashboard</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="email" className="h-4 w-4 rounded border-slate-700 bg-slate-800 text-emerald-400" />
                    <label htmlFor="email" className="text-sm text-slate-300">Email digest</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="mobile" className="h-4 w-4 rounded border-slate-700 bg-slate-800 text-emerald-400" />
                    <label htmlFor="mobile" className="text-sm text-slate-300">Mobile push</label>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">System Status</h2>
              <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs font-medium text-emerald-300">
                Operational
              </span>
            </div>
            
            <div className="mt-6 space-y-4">
              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300">Signal processing</span>
                  <span className="font-mono text-xs text-emerald-400">148ms latency</span>
                </div>
                <div className="mt-1 h-1 w-full rounded-full bg-slate-800">
                  <div className="h-1 rounded-full bg-emerald-400" style={{ width: '95%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300">Alert evaluation</span>
                  <span className="font-mono text-xs text-emerald-400">12ms latency</span>
                </div>
                <div className="mt-1 h-1 w-full rounded-full bg-slate-800">
                  <div className="h-1 rounded-full bg-emerald-400" style={{ width: '99%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300">Source coverage</span>
                  <span className="font-mono text-xs text-emerald-400">12,800+ feeds</span>
                </div>
                <div className="mt-1 h-1 w-full rounded-full bg-slate-800">
                  <div className="h-1 rounded-full bg-emerald-400" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
