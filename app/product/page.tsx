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
      {/* Hero Section */}
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
            Intelligence Operating System
          </div>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
            The Complete Platform for Strategic Intelligence
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            REDWOUD integrates real-time intelligence collection, advanced analytics, and decision support into a unified system for strategic advantage.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Mission Control → Live Operations",
              "Entity Intelligence → Strategic Forecasting", 
              "Alert System → Workflow Automation"
            ].map((flow) => (
              <div key={flow} className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
                <p className="text-sm font-medium text-emerald-300">{flow}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold">System Architecture</h2>
            <p className="mt-4 text-slate-300">
              REDWOUD's architecture integrates intelligence collection, analysis, and decision support into a unified platform.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Mission Control → Dashboard",
                "Live Operations → Stream", 
                "Executive Intelligence → Briefing",
                "Alert System → Notifications",
                "Entity Intelligence → Profiles",
                "Intelligence Graph → Connections"
              ].map((component) => (
                <div key={component} className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
                  <p className="text-sm font-medium text-emerald-300">{component}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Platform Overview</h2>
            <p className="mt-4 text-slate-300">
              REDWOUD integrates real-time intelligence collection, advanced analytics, 
              and decision support into a unified platform for strategic advantage.
            </p>
            <div className="mt-8 space-y-6">
              <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
                <h3 className="text-sm font-medium text-emerald-300">Mission Control</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Centralized dashboard for monitoring global volatility and strategic posture
                </p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
                <h3 className="text-sm font-medium text-emerald-300">Operations Hub</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Real-time event stream with entity/topic/region analysis and alerting
                </p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
                <h3 className="text-sm font-medium text-emerald-300">Executive Synthesis</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Automated strategic briefings updated every 6 hours with impact forecasting
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="text-sm font-medium text-emerald-300">Strategic Value</h3>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 opacity-70" />
                  <span className="text-sm text-slate-400">4-minute event processing latency</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 opacity-70" />
                  <span className="text-sm text-slate-400">148-dimension event analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 opacity-70" />
                  <span className="text-sm text-slate-400">150+ integrated intelligence sources</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 opacity-70" />
                  <span className="text-sm text-slate-400">Enterprise-grade security & compliance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Workflows */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold">Core Workflows</h2>
            <p className="mt-4 text-slate-300">
              REDWOUD powers strategic decision-making across key operational roles:
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Analyst Monitoring",
                "Executive Briefing", 
                "Entity Intelligence",
                "Regional Analysis",
                "Strategic Forecasting",
                "Workflow Automation"
              ].map((workflow) => (
                <div key={workflow} className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
                  <p className="text-sm font-medium text-emerald-300">{workflow}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Architecture */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Platform Architecture</h2>
            <p className="mt-4 text-slate-300">
              REDWOUD's modular architecture integrates real-time intelligence collection, 
              advanced analytics, and decision support into a unified platform.
            </p>
            <div className="mt-8 space-y-6">
              <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
                <h3 className="text-sm font-medium text-emerald-300">Data Layer</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Real-time ingestion from 150+ sources with 4-minute processing latency
                </p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
                <h3 className="text-sm font-medium text-emerald-300">Analytics Layer</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Multidimensional event analysis across 148 dimensions
                </p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
                <h3 className="text-sm font-medium text-emerald-300">Decision Layer</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Automated synthesis and strategic forecasting
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="text-sm font-medium text-emerald-300">Operational Layers</h3>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 opacity-70" />
                  <span className="text-sm text-slate-400">Real-time monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 opacity-70" />
                  <span className="text-sm text-slate-400">Strategic forecasting</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 opacity-70" />
                  <span className="text-sm text-slate-400">Entity analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 opacity-70" />
                  <span className="text-sm text-slate-400">Workflow automation</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="text-sm font-medium text-emerald-300">Enterprise Features</h3>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 opacity-70" />
                  <span className="text-sm text-slate-400">Role-based access control</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 opacity-70" />
                  <span className="text-sm text-slate-400">Audit logging</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 opacity-70" />
                  <span className="text-sm text-slate-400">Enterprise-grade security</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 opacity-70" />
                  <span className="text-sm text-slate-400">Scalable infrastructure</span>
                </div>
              </div>
            </div>
          </div>
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

      {/* Operational Layers */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold">Operational Layers</h2>
            <p className="mt-4 text-slate-300">
              REDWOUD processes intelligence through three core operational layers:
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Collection → 150+ sources",
                "Analysis → 148 dimensions", 
                "Decision → Strategic forecasting",
                "Automation → Workflow engine",
                "Integration → API/webhooks",
                "Security → Enterprise-grade"
              ].map((layer) => (
                <div key={layer} className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
                  <p className="text-sm font-medium text-emerald-300">{layer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Integration */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold">Platform Integration</h2>
            <p className="mt-4 text-slate-300">
              REDWOUD connects intelligence surfaces into a unified strategic workflow:
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Mission Control → Operations",
                "Operations → Briefing", 
                "Briefing → Entity Intelligence",
                "Entity Intelligence → Forecasting",
                "Forecasting → Workflow Automation",
                "Automation → Mission Control"
              ].map((integration) => (
                <div key={integration} className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
                  <p className="text-sm font-medium text-emerald-300">{integration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Value */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold">Strategic Value</h2>
            <p className="mt-4 text-slate-300">
              REDWOUD delivers measurable impact across key strategic dimensions:
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "4-minute event processing",
                "148-dimension analysis", 
                "150+ integrated sources",
                "Enterprise-grade security",
                "Scalable infrastructure",
                "Custom workflow automation"
              ].map((value) => (
                <div key={value} className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
                  <p className="text-sm font-medium text-emerald-300">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Expansion */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold">Premium Expansion</h2>
            <p className="mt-4 text-slate-300">
              Extend REDWOUD's capabilities with advanced features and integrations:
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                "Scenario Planning",
                "Risk Modeling", 
                "Custom Workflows",
                "API Integrations"
              ].map((feature) => (
                <div key={feature} className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
                  <p className="text-sm font-medium text-emerald-300">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
