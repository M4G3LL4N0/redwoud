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
            The Bloomberg Terminal for Geopolitical Intelligence
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

      {/* Why Now Section */}
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-semibold">Why Now: The Strategic Intelligence Imperative</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="text-lg font-semibold">Geopolitical Volatility</h3>
              <p className="mt-2 text-sm text-slate-300">
                78% of Fortune 500 companies cite geopolitical risk as their top external threat (McKinsey 2025)
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="text-lg font-semibold">AI Maturity</h3>
              <p className="mt-2 text-sm text-slate-300">
                Breakthroughs in NLP enable real-time analysis of unstructured intelligence data
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="text-lg font-semibold">Market Gap</h3>
              <p className="mt-2 text-sm text-slate-300">
                $47B TAM with no dominant player in AI-driven strategic intelligence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold">Market Opportunity</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-lg font-semibold">$58B by 2030</h3>
            <p className="mt-2 text-sm text-slate-300">
              Global intelligence and risk analytics market (12.6% CAGR)
            </p>
            <div className="mt-4">
              <div className="flex justify-between text-xs text-slate-400">
                <span>2025</span>
                <span>2030</span>
              </div>
              <div className="mt-1 h-2 w-full rounded-full bg-slate-800">
                <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600" />
              </div>
              <div className="mt-2 flex justify-between text-xs">
                <span className="text-slate-300">$32B</span>
                <span className="text-slate-300">$58B</span>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-lg font-semibold">Target Segments</h3>
            <div className="mt-4 space-y-4">
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Financial Services</span>
                  <span className="font-medium text-emerald-300">$18B</span>
                </div>
                <div className="mt-1 h-1 w-full rounded-full bg-slate-800">
                  <div className="h-1 w-2/3 rounded-full bg-emerald-500" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Enterprise Strategy</span>
                  <span className="font-medium text-emerald-300">$22B</span>
                </div>
                <div className="mt-1 h-1 w-full rounded-full bg-slate-800">
                  <div className="h-1 w-3/4 rounded-full bg-emerald-500" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Government & Defense</span>
                  <span className="font-medium text-emerald-300">$18B</span>
                </div>
                <div className="mt-1 h-1 w-full rounded-full bg-slate-800">
                  <div className="h-1 w-2/3 rounded-full bg-emerald-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Moats */}
      <section className="border-t border-slate-800 bg-slate-950 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-semibold">Unassailable Competitive Advantages</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-lg font-semibold">Data Network Effects</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                  Proprietary intelligence graph with 10M+ connected entities
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                  Enterprise feedback loops continuously improve model accuracy
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                  5+ years of structured event data for predictive analytics
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-lg font-semibold">Technical Differentiation</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                  Sub-second processing of 10M+ daily events
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                  Proprietary NLP models trained on strategic intelligence corpus
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                  99.95% uptime enterprise-grade infrastructure
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Monetization */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold">Monetization Strategy</h2>
        <div className="mt-8">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold">Revenue Streams</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                    SaaS subscriptions (80% gross margins)
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                    Enterprise API licensing
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                    Custom intelligence solutions
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Key Metrics</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                    $250K-$2M average enterprise ACV
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                    40%+ expansion revenue from existing customers
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                    90%+ enterprise retention rate
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Expansion */}
      <section className="border-t border-slate-800 bg-slate-950 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-semibold">Product Expansion Ladder</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              {
                title: "Free Intelligence",
                price: "Free",
                features: ["Basic monitoring", "Daily briefings", "Public trends"],
                highlight: false
              },
              {
                title: "Professional",
                price: "$99/month",
                features: ["Advanced filters", "Custom alerts", "Trend analysis"],
                highlight: false
              },
              {
                title: "Team",
                price: "$499/month",
                features: ["Shared workspaces", "Admin controls", "Data exports"],
                highlight: false
              },
              {
                title: "Enterprise",
                price: "Custom",
                features: ["Dedicated infra", "API access", "Custom models"],
                highlight: true
              }
            ].map((tier) => (
              <div
                key={tier.title}
                className={`rounded-xl border p-6 ${tier.highlight ? "border-emerald-500/30 bg-emerald-500/10" : "border-slate-800 bg-slate-900"}`}
              >
                <h3 className="text-lg font-semibold">{tier.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{tier.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="mr-2 mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold">Strategic Roadmap</h2>
        <div className="mt-8">
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-slate-800 md:left-1/2" />
            {[
              {
                year: "2024",
                title: "Platform Foundation",
                milestones: ["Core AI models", "Enterprise API", "100K+ users"],
                position: "left"
              },
              {
                year: "2025",
                title: "Market Expansion",
                milestones: ["Financial vertical", "Government adoption", "1M+ users"],
                position: "right"
              },
              {
                year: "2026",
                title: "Predictive Intelligence",
                milestones: ["Scenario planning", "Risk forecasting", "500+ enterprises"],
                position: "left"
              },
              {
                year: "2027+",
                title: "Global Dominance",
                milestones: ["Market standard", "$100M+ revenue", "IPO readiness"],
                position: "right"
              }
            ].map((phase, index) => (
              <div
                key={phase.year}
                className={`relative mb-8 md:w-1/2 md:${phase.position === "left" ? "mr-auto pr-8 md:pl-0" : "ml-auto pl-8 md:pr-0"}`}
              >
                <div className="absolute left-0 top-1 h-4 w-4 rounded-full border-4 border-emerald-500 bg-slate-950 md:left-1/2 md:-ml-2" />
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                  <div className="flex items-center">
                    <span className="text-emerald-300">{phase.year}</span>
                    <span className="mx-2 text-slate-600">|</span>
                    <span className="font-medium">{phase.title}</span>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    {phase.milestones.map((milestone) => (
                      <li key={milestone} className="flex items-start">
                        <span className="mr-2 mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                        {milestone}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-slate-800 bg-slate-950 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-semibold">World-Class Team</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Leadership",
                description: "Former executives from Palantir, McKinsey, and Bloomberg with deep intelligence and enterprise SaaS experience"
              },
              {
                title: "Engineering",
                description: "AI and infrastructure experts from FAANG companies with PhDs in machine learning and distributed systems"
              },
              {
                title: "Advisors",
                description: "Former intelligence community leaders and Fortune 500 strategists providing domain expertise"
              }
            ].map((team) => (
              <div key={team.title} className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-lg font-semibold">{team.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{team.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
          <h2 className="text-2xl font-semibold">Investor Inquiries</h2>
          <p className="mt-4 text-slate-300">
            For investment opportunities and detailed financials, please contact:
          </p>
          <a
            href="mailto:investors@redwoud.com"
            className="mt-6 inline-block rounded-full bg-emerald-500/10 px-6 py-3 text-sm font-medium text-emerald-300 ring-1 ring-inset ring-emerald-500/20 hover:bg-emerald-500/20"
          >
            investors@redwoud.com
          </a>
        </div>
      </section>
    </main>
  );
}
