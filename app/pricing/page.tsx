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
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            Pricing & Packaging
          </div>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
            Structured Intelligence for Every Strategic Tier
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            REDWOUD's pricing architecture is designed to deliver strategic advantage at every level, from individual analysts to enterprise decision-making teams.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <div>
              <div className="inline-flex rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300">
                Pricing Tiers
              </div>
              <h2 className="mt-4 text-3xl font-semibold">Flexible Plans for Every Team</h2>
              <div className="mt-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 p-1.5">
                    <svg className="h-4 w-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Essential</h3>
                    <p className="mt-1 text-sm text-slate-400">For individual analysts and small teams</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 p-1.5">
                    <svg className="h-4 w-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Professional</h3>
                    <p className="mt-1 text-sm text-slate-400">For growing organizations and strategic teams</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 p-1.5">
                    <svg className="h-4 w-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Enterprise</h3>
                    <p className="mt-1 text-sm text-slate-400">For large organizations and institutions</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-flex rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
                Enterprise Features
              </div>
              <h2 className="mt-4 text-3xl font-semibold">Built for Scale</h2>
              <div className="mt-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 p-1.5">
                    <svg className="h-4 w-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Custom Integrations</h3>
                    <p className="mt-1 text-sm text-slate-400">Seamless integration with your existing systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 p-1.5">
                    <svg className="h-4 w-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Dedicated Support</h3>
                    <p className="mt-1 text-sm text-slate-400">24/7 enterprise support with dedicated account managers</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 p-1.5">
                    <svg className="h-4 w-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Custom Pricing</h3>
                    <p className="mt-1 text-sm text-slate-400">Tailored pricing based on your organization's needs</p>
                  </div>
                </div>
              </div>
            </div>
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

      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="inline-flex rounded-full border border-slate-700/20 bg-slate-700/10 px-3 py-1 text-xs font-medium text-slate-300">
            Trusted By
          </div>
          <h2 className="mt-4 text-3xl font-semibold">Global Leaders in Strategy and Risk</h2>
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
    </main>
  );
}
