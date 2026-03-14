export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-6 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium tracking-wide text-emerald-300">
            REDWOUD · INVESTOR OVERVIEW
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
            The Operating System for Global Intelligence
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            REDWOUD is building the world's most advanced intelligence platform -
            transforming global events, market signals, and geopolitical developments
            into structured, predictive insights. Our AI-native architecture processes
            millions of data points daily, delivering real-time intelligence to
            enterprises, governments, and financial institutions.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-10 md:grid-cols-2">
        {/* Vision */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Vision</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            REDWOUD aims to become the default platform for understanding what is
            happening in the world, why it matters, and what may happen next. We
            are building the operating system for global intelligence—a single
            source of truth that connects events to implications.
          </p>
        </div>

        {/* Why Now */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Why Now</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            The world is increasingly complex, volatile, and information-dense.
            Traditional news and data sources are insufficient for strategic
            decision-making. The convergence of advanced AI, real-time data
            processing, and growing demand for structured intelligence creates
            a unique market opportunity.
          </p>
        </div>

        {/* Market Opportunity */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Market Opportunity</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            The global intelligence and risk analytics market is projected to grow
            from $32B in 2025 to $58B by 2030 (CAGR 12.6%). REDWOUD targets three
            primary segments:
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
            <li>• Financial Services ($18B): Hedge funds, private equity, and investment banks</li>
            <li>• Enterprise Strategy ($22B): Fortune 500 companies across tech, energy, and manufacturing</li>
            <li>• Government & Defense ($18B): Intelligence agencies and policy makers</li>
          </ul>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Our platform addresses the $12B opportunity in AI-driven intelligence,
            growing at 25% CAGR through 2030.
          </p>
        </div>

        {/* Business Model */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Business Model</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Revenue expands from free user acquisition into professional plans,
            team workspaces, enterprise contracts, premium briefings, and future
            API products. Our model leverages network effects: as more users
            engage, the intelligence graph becomes more valuable for all.
          </p>
        </div>

        {/* Expansion Ladder */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Expansion Ladder</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-800 p-4">
              <h3 className="text-sm font-semibold">Public Intelligence</h3>
              <p className="mt-2 text-xs text-slate-400">Free Tier</p>
              <ul className="mt-2 space-y-1 text-xs leading-6 text-slate-300">
                <li>• Basic event monitoring</li>
                <li>• Daily briefings</li>
                <li>• Limited filtering</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-800 p-4">
              <h3 className="text-sm font-semibold">Pro Research</h3>
              <p className="mt-2 text-xs text-slate-400">$99/mo</p>
              <ul className="mt-2 space-y-1 text-xs leading-6 text-slate-300">
                <li>• Advanced filtering</li>
                <li>• Custom alerts</li>
                <li>• Trend analysis</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-800 p-4">
              <h3 className="text-sm font-semibold">Team Collaboration</h3>
              <p className="mt-2 text-xs text-slate-400">$499/mo</p>
              <ul className="mt-2 space-y-1 text-xs leading-6 text-slate-300">
                <li>• Shared workspaces</li>
                <li>• Admin controls</li>
                <li>• Export capabilities</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-800 p-4">
              <h3 className="text-sm font-semibold">Enterprise</h3>
              <p className="mt-2 text-xs text-slate-400">Custom Pricing</p>
              <ul className="mt-2 space-y-1 text-xs leading-6 text-slate-300">
                <li>• Dedicated infrastructure</li>
                <li>• API access</li>
                <li>• Custom models</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Moat */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Moat</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            REDWOUD's competitive moat is built on four pillars:
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
            <li>• Proprietary Data Graph: Our intelligence graph connects over 10M entities across events, organizations, and geopolitical actors</li>
            <li>• Network Effects: Each user interaction improves the platform's predictive capabilities for all users</li>
            <li>• Institutional Trust: Our enterprise-grade security and compliance framework ensures reliability for mission-critical operations</li>
            <li>• Workflow Lock-in: Deep integration with enterprise systems creates switching costs while improving productivity</li>
          </ul>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            These advantages create a compounding competitive edge that grows with scale.
          </p>
        </div>

        {/* Roadmap */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 md:col-span-2">
          <h2 className="text-xl font-semibold">Roadmap</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-emerald-300">Phase 1</h3>
              <p className="mt-1 text-sm text-slate-400">Public Dashboard</p>
              <ul className="mt-2 space-y-1 text-xs leading-6 text-slate-300">
                <li>• Core event ingestion</li>
                <li>• Basic filtering</li>
                <li>• Daily briefings</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-emerald-300">Phase 2</h3>
              <p className="mt-1 text-sm text-slate-400">Pro Workflows</p>
              <ul className="mt-2 space-y-1 text-xs leading-6 text-slate-300">
                <li>• Custom alerts</li>
                <li>• Trend analysis</li>
                <li>• Export capabilities</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-emerald-300">Phase 3</h3>
              <p className="mt-1 text-sm text-slate-400">Team & Enterprise</p>
              <ul className="mt-2 space-y-1 text-xs leading-6 text-slate-300">
                <li>• Shared workspaces</li>
                <li>• Admin controls</li>
                <li>• SSO integration</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-emerald-300">Phase 4</h3>
              <p className="mt-1 text-sm text-slate-400">Platform Scale</p>
              <ul className="mt-2 space-y-1 text-xs leading-6 text-slate-300">
                <li>• API access</li>
                <li>• Custom models</li>
                <li>• Global coverage</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Scale Potential */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 md:col-span-2">
          <h2 className="text-xl font-semibold">Scale Potential</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            REDWOUD's enterprise offering delivers measurable ROI:
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
            <li>• 40% reduction in time spent on intelligence gathering</li>
            <li>• 25% improvement in decision accuracy</li>
            <li>• 3x faster response to emerging risks</li>
          </ul>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Our scalable architecture supports:
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
            <li>• Processing 10M+ events daily</li>
            <li>• Serving 100K+ concurrent users</li>
            <li>• Delivering insights in under 500ms</li>
          </ul>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            With a $12B TAM in AI-driven intelligence and 25% CAGR growth,
            REDWOUD is positioned to capture significant market share in the
            emerging intelligence infrastructure layer.
          </p>
        </div>
      </section>
    </main>
  );
}
