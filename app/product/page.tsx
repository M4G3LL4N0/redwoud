const productModules = [
  {
    title: "Strategic Pulse",
    icon: "⚡",
    category: "Core Platform",
    description: "Real-time normalized event stream with entity/topic/region analysis",
    capabilities: [
      "148-dimension event grammar",
      "4-minute processing latency",
      "Predictive alert triggers"
    ],
    highlight: true
  },
  {
    title: "Global Command",
    icon: "🌐",
    category: "Situational Awareness", 
    description: "Geospatial intelligence for regional escalation patterns",
    capabilities: [
      "Heatmap visualization",
      "Cluster detection",
      "Strategic choke points"
    ]
  },
  {
    title: "Executive Brief",
    icon: "📋",
    category: "Decision Support",
    description: "Automated strategic synthesis updated every 6 hours",
    capabilities: [
      "Priority intelligence requirements",
      "Impact forecasting",
      "Response playbooks"
    ]
  },
  {
    title: "Signal Analysis",
    icon: "🔍",
    category: "Research",
    description: "Advanced pattern detection across 18 risk dimensions",
    capabilities: [
      "Multivariate correlation",
      "Anomaly detection", 
      "Network mapping"
    ]
  },
  {
    title: "Workflow Engine",
    icon: "🔄",
    category: "Productivity",
    description: "Custom automation for intelligence operations",
    capabilities: [
      "Alert escalation paths",
      "Stakeholder notifications",
      "API/webhook integration"
    ]
  },
  {
    title: "Risk Horizon",
    icon: "🔮",
    category: "Premium",
    description: "Forward-looking threat and opportunity modeling",
    capabilities: [
      "Scenario planning",
      "Probability weighting",
      "Strategic stress testing"
    ]
  }
];

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
            Product Architecture
          </div>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
            The Intelligence Operating System for Strategic Advantage
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            REDWOUD transforms unstructured global volatility into structured decision advantage 
            through patented AI-powered analysis workflows and enterprise-grade intelligence infrastructure.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {productModules.map((module) => (
            <article 
              key={module.title}
              className={`relative rounded-2xl border p-6 ${module.highlight ? "border-emerald-500/30 bg-emerald-500/10" : "border-slate-800 bg-slate-900"}`}
            >
              <div className="absolute right-6 top-6 text-2xl opacity-20">
                {module.icon}
              </div>
              <span className="text-xs font-medium uppercase tracking-wider text-emerald-300">
                {module.category}
              </span>
              <h2 className="mt-2 text-xl font-semibold">{module.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {module.description}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                {module.capabilities.map((capability) => (
                  <li key={capability} className="flex items-start">
                    <span className="mr-2 mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 opacity-70" />
                    {capability}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold">Strategic Workflows</h2>
            <p className="mt-4 text-slate-300">
              REDWOUD powers critical decision-making across four key operational domains:
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                "Market Intelligence",
                "Geopolitical Risk", 
                "Supply Chain Security",
                "Competitive Strategy"
              ].map((domain) => (
                <div key={domain} className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
                  <p className="text-sm font-medium text-emerald-300">{domain}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
