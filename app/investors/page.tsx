import { ClockIcon, LockClosedIcon } from "@heroicons/react/24/outline";

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
            The Operating System for Strategic Decisions
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            REDWOUD is building the continuous intelligence layer that transforms global volatility 
            into strategic advantage. Unlike legacy monitoring tools, we structure the world's complexity 
            into executable insights using our proprietary event grammar and patented fusion of 
            entity-region-topic contexts. Financial institutions and Fortune 500 strategists use REDWOUD 
            not just to see what happened, but to model what comes next - delivering 12-48 hour warning 
            advantages on geopolitical, economic, and competitive shifts.
          </p>
        </div>
      </section>

      {/* Strategic Imperative */}
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-semibold">The $2.8 Trillion Early Warning Problem</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="text-lg font-semibold">Decision Velocity Mismatch</h3>
              <p className="mt-2 text-sm text-slate-300">
                Traditional intelligence cycles take 72+ hours. Market-moving events unfold in under 12. 
                REDWOUD delivers structured understanding in under 4 minutes.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="text-lg font-semibold">The Context Collapse</h3>
              <p className="mt-2 text-sm text-slate-300">
                Raw signal volume now exceeds human processing capacity. Our entity-region-topic 
                fusion creates continuous strategic awareness without cognitive overload.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="text-lg font-semibold">From $58B to $220B TAM</h3>
              <p className="mt-2 text-sm text-slate-300">
                As decision automation penetrates enterprises, strategic intelligence becomes 
                infrastructure - not just a discretionary tool.
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

      {/* Technical Defensibility */}
      <section className="border-t border-slate-800 bg-slate-950 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-semibold">Architecture Advantage</h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            REDWOUD combines proprietary AI with institutional knowledge to create an intelligence layer 
            that scales beyond human capability yet retains strategic nuance:
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <ClockIcon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold">Continuous Intelligence</h3>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="font-medium">Real-time grammar:</span> 148-dimension schema structures raw events into executable insights
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="font-medium">Intelligence pipeline:</span> From signals → events → predictive alerts in under 4 minutes
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="font-medium">Network effects:</span> Every new client improves corpus quality for all existing clients
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300">
                  <LockClosedIcon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold">Structural Defensibility</h3>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="font-medium">5-year headstart:</span> Normalized event corpus creates compounding advantage (>10PB processed)
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="font-medium">Enterprise lock-in:</span> Strategic workflows built around REDWOUD models have 96% retention
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="font-medium">Patent portfolio:</span> 12 issued patents covering core fusion algorithms
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Monetization */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold">Financial Architecture</h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          REDWOUD's business model combines premium SaaS economics with deep enterprise monetization:
        </p>
        <div className="mt-8">
          <div className="divide-y divide-slate-800 overflow-hidden rounded-2xl border border-slate-800 shadow-[0_0_0_1px_rgba(186,230,253,0.1)]">
            <div className="grid grid-cols-1 bg-slate-900 md:grid-cols-2">
              <div className="border-b border-slate-800 p-8 md:border-b-0 md:border-r">
                <h3 className="text-lg font-semibold">Revenue Composition</h3>
                <div className="mt-6 space-y-6">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Enterprise SaaS</span>
                      <span className="font-medium text-emerald-300">72%</span>
                    </div>
                    <div className="mt-1 h-1 w-full rounded-full bg-slate-800">
                      <div className="h-1 w-[72%] rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">API Licensing</span>
                      <span className="font-medium text-emerald-300">18%</span>
                    </div>
                    <div className="mt-1 h-1 w-full rounded-full bg-slate-800">
                      <div className="h-1 w-[18%] rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Custom Solutions</span>
                      <span className="font-medium text-emerald-300">10%</span>
                    </div>
                    <div className="mt-1 h-1 w-full rounded-full bg-slate-800">
                      <div className="h-1 w-[10%] rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-lg font-semibold">Unit Economics</h3>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-slate-800/50 p-3">
                    <p className="text-xs text-slate-400">Gross Margin</p>
                    <p className="mt-1 text-2xl font-semibold text-emerald-300">84%</p>
                  </div>
                  <div className="rounded-lg bg-slate-800/50 p-3">
                    <p className="text-xs text-slate-400">Avg. ACV</p>
                    <p className="mt-1 text-2xl font-semibold text-emerald-300">$1.4M</p>
                  </div>
                  <div className="rounded-lg bg-slate-800/50 p-3">
                    <p className="text-xs text-slate-400">Retention</p>
                    <p className="mt-1 text-2xl font-semibold text-emerald-300">96%</p>
                  </div>
                  <div className="rounded-lg bg-slate-800/50 p-3">
                    <p className="text-xs text-slate-400">Payback</p>
                    <p className="mt-1 text-2xl font-semibold text-emerald-300">14mo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 p-8">
              <h3 className="text-lg font-semibold">Strategic Upsell Path</h3>
              <div className="mt-4 grid gap-6 md:grid-cols-3">
                {[
                  { stage: "Foundation", desc: "Core monitoring ($250K)", color: "bg-emerald-400" },
                  { stage: "Operational", desc: "Custom alerts + API ($750K)", color: "bg-emerald-500" },
                  { stage: "Strategic", desc: "Predictive models ($1.4M+)", color: "bg-emerald-600" }
                ].map((item) => (
                  <div key={item.stage} className="flex items-start gap-3">
                    <span className={`mt-1 h-3 w-3 rounded-full ${item.color}`} />
                    <div>
                      <h4 className="text-sm font-medium">{item.stage}</h4>
                      <p className="mt-1 text-xs text-slate-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
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
