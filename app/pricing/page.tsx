const plans = [
  {
    name: "Signal Scout",
    price: "Free",
    highlight: false,
    subtitle: "Public intelligence utility",
    features: [
      "Live strategic pulse feed",
      "Daily executive briefing",
      "Regional trend monitoring",
      "Basic alert system"
    ],
  },
  {
    name: "Tactical Analyst",
    price: "$99/mo",
    highlight: true,
    subtitle: "Strategic decision advantage",
    features: [
      "Advanced alert workflow builder",
      "Custom indicator dashboards", 
      "Automated briefings",
      "Source credibility scoring",
      "12hr tactical warning window"
    ],
  },
  {
    name: "Command Team", 
    price: "$499/mo",
    highlight: false,
    subtitle: "Organizational awareness",
    features: [
      "Multi-user collaboration suites",
      "AI-enhanced scenario planning",
      "Enterprise workflow integrations",
      "Centralized intelligence library",
      "Private intelligence pod"
    ],
  },
  {
    name: "Strategic Enterprise",
    price: "Custom",
    highlight: false,
    subtitle: "Institutional decision infrastructure",
    features: [
      "Dedicated intelligence pods",
      "Predictive modeling API",
      "Executive risk analytics suite",
      "24/7 analyst support",
      "Custom model training"
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <div className="mx-auto inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-300">
            Strategic Intelligence Pricing
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Intelligence Infrastructure <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
              Built for Impact
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            REDWOUD transforms raw data into strategic advantage through our tiered intelligence architecture. 
            Each plan is engineered to deliver increasing levels of predictive power and decision advantage.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="rounded-lg bg-emerald-500/10 px-6 py-2.5 text-sm font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20 hover:bg-emerald-500/20">
              Compare Plans
            </button>
            <button className="rounded-lg bg-slate-800 px-6 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-700">
              Book Demo
            </button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="space-y-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Risk Mitigation</h3>
              <p className="text-sm text-slate-400">
                Our intelligence architecture provides early warning systems that help you anticipate and neutralize threats before they materialize.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Strategic Advantage</h3>
              <p className="text-sm text-slate-400">
                Gain asymmetric information advantages that create opportunities invisible to competitors using conventional intelligence methods.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">ROI Focused</h3>
              <p className="text-sm text-slate-400">
                Every tier delivers measurable value, with enterprise clients seeing 7-15x return on intelligence investment within the first year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="border-b border-slate-800 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="text-center">
            <div className="inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
              Strategic Tiers
            </div>
            <h2 className="mt-4 text-3xl font-semibold">Intelligence Architecture</h2>
            <p className="mx-auto mt-2 max-w-2xl text-slate-400">
              Each tier builds on the last, adding layers of predictive power and decision advantage
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl border p-6 ${
                  plan.highlight
                    ? "border-purple-500/30 bg-purple-500/10"
                    : "border-slate-800 bg-slate-900"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  {plan.highlight && (
                    <span className="rounded-full bg-purple-500/10 px-2 py-0.5 text-xs font-medium text-purple-300">
                      Recommended
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-slate-400">{plan.subtitle}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-3xl font-semibold">{plan.price}</span>
                  {plan.price !== "Free" && plan.price !== "Custom" && (
                    <span className="text-sm text-slate-400">/month</span>
                  )}
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <svg
                        className={`h-5 w-5 flex-shrink-0 ${
                          plan.highlight ? "text-purple-400" : "text-slate-500"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full rounded-lg py-2.5 text-sm font-medium ${
                    plan.highlight
                      ? "bg-purple-500 text-white hover:bg-purple-600"
                      : "bg-slate-800 text-slate-200 hover:bg-slate-700"
                  }`}
                >
                  {plan.price === "Free" ? "Get Started" : "Get Demo"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="text-center">
            <div className="inline-flex rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300">
              Capabilities
            </div>
            <h2 className="mt-4 text-3xl font-semibold">Strategic Feature Matrix</h2>
            <p className="mx-auto mt-2 max-w-2xl text-slate-400">
              Compare intelligence capabilities across our product tiers
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-xl border border-slate-800">
            <table className="w-full">
              <thead className="border-b border-slate-800 bg-slate-900/50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-slate-300">
                    Intelligence Feature
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className="px-6 py-4 text-center text-sm font-medium text-slate-300"
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                <tr className="hover:bg-slate-900/50">
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-300">
                    Real-time Event Monitoring
                  </td>
                  {plans.map((plan) => (
                    <td key={plan.name} className="px-6 py-4 text-center">
                      <svg
                        className={`mx-auto h-5 w-5 ${
                          plan.name === "Signal Scout" ? "text-slate-500" : "text-emerald-400"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-900/50">
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-300">
                    Advanced Risk Analytics
                  </td>
                  {plans.map((plan) => (
                    <td key={plan.name} className="px-6 py-4 text-center">
                      <svg
                        className={`mx-auto h-5 w-5 ${
                          plan.name === "Strategic Enterprise" || plan.name === "Command Team"
                            ? "text-emerald-400"
                            : "text-slate-500"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-900/50">
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-300">
                    Predictive Modeling
                  </td>
                  {plans.map((plan) => (
                    <td key={plan.name} className="px-6 py-4 text-center">
                      <svg
                        className={`mx-auto h-5 w-5 ${
                          plan.name === "Strategic Enterprise" ? "text-emerald-400" : "text-slate-500"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
            Pricing
          </div>
          <h2 className="mt-4 text-3xl font-semibold">Flexible Plans for Every Team</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-xl font-semibold">Essential</h3>
              <p className="mt-2 text-sm text-slate-400">For individuals and small teams</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-3xl font-semibold">$299</span>
                <span className="text-sm text-slate-400">/month</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Real-time event monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Basic risk analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Email support</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-purple-500/30 bg-purple-500/10 p-6">
              <h3 className="text-xl font-semibold">Professional</h3>
              <p className="mt-2 text-sm text-slate-400">For growing teams and organizations</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-3xl font-semibold">$799</span>
                <span className="text-sm text-slate-400">/month</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced risk analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Customizable dashboards</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority support</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-xl font-semibold">Enterprise</h3>
              <p className="mt-2 text-sm text-slate-400">For large organizations and institutions</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-3xl font-semibold">Custom</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>24/7 enterprise support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 md:p-12">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <div className="inline-flex rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
                  Enterprise Solutions
                </div>
                <h2 className="mt-4 text-3xl font-semibold">Strategic Intelligence Infrastructure</h2>
                <p className="mt-4 text-slate-300">
                  Our enterprise solutions provide the intelligence architecture needed for institutional decision-making at scale.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-300">
                      Dedicated intelligence pods with custom model training
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-300">
                      White-glove onboarding and 24/7 analyst support
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold">Request Enterprise Demo</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Schedule a consultation with our strategic intelligence team
                </p>
                <form className="mt-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300">Organization</label>
                    <input
                      type="text"
                      className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-200 focus:border-sky-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300">Email</label>
                    <input
                      type="email"
                      className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-200 focus:border-sky-500 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-amber-600"
                  >
                    Contact Enterprise Team
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="text-center">
            <div className="inline-flex rounded-full border border-slate-700/20 bg-slate-700/10 px-3 py-1 text-xs font-medium text-slate-300">
              Trusted By
            </div>
            <h2 className="mt-4 text-3xl font-semibold">Global Leaders in Strategy and Risk</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-800"></div>
                <div>
                  <h4 className="font-medium">Chief Risk Officer</h4>
                  <p className="text-sm text-slate-400">Fortune 100 Financial Institution</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-300">
                "REDWOUD's intelligence infrastructure has transformed our risk management capabilities, giving us a 6-month predictive advantage over conventional methods."
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-800"></div>
                <div>
                  <h4 className="font-medium">Director of Intelligence</h4>
                  <p className="text-sm text-slate-400">Global Security Firm</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-300">
                "The Command Team package provides our analysts with the tools they need to identify emerging threats before they become crises."
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-800"></div>
                <div>
                  <h4 className="font-medium">Head of Strategy</h4>
                  <p className="text-sm text-slate-400">Technology Unicorn</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-300">
                "We've been able to identify market opportunities 3-4 quarters ahead of competitors using REDWOUD's predictive analytics."
              </p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex items-center justify-center">
              <img src="/logos/logo1.svg" alt="Company 1" className="h-12 grayscale" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/logos/logo2.svg" alt="Company 2" className="h-12 grayscale" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/logos/logo3.svg" alt="Company 3" className="h-12 grayscale" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/logos/logo4.svg" alt="Company 4" className="h-12 grayscale" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="text-3xl font-semibold">Ready to Transform Your Intelligence Capabilities?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Schedule a consultation with our strategic intelligence team to discuss your organization's needs.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="rounded-lg bg-emerald-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-emerald-600">
              Get Started
            </button>
            <button className="rounded-lg border border-slate-700 bg-slate-800 px-6 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-700">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
