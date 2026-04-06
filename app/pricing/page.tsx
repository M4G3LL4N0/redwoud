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
          <div className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
            Pricing & Packaging
          </div>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
            Structured Intelligence for Every Strategic Tier
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            REDWOUD's pricing architecture is designed to attract broad monitoring needs then 
            convert to high-value decision advantage through enterprise-grade predictive intelligence.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-4">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-2xl border p-6 ${plan.highlight ? "border-emerald-500/30 bg-emerald-500/10" : "border-slate-800 bg-slate-900"}`}
            >
              {plan.highlight && (
                <div className="absolute -top-2 right-4 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 px-3 py-1 text-xs font-medium text-white">
                  Most common
                </div>
              )}
              <h2 className="text-xl font-semibold">{plan.name}</h2>
              <p className="mt-1 text-3xl font-semibold text-white">{plan.price}</p>
              <p className="mt-2 text-sm text-slate-400">{plan.subtitle}</p>
              <ul className="mt-6 space-y-2.5 text-sm leading-6 text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400 align-middle" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full rounded-lg py-2 text-sm font-medium ring-1 ring-inset ${plan.highlight ? "bg-emerald-500 text-white ring-emerald-500 hover:bg-emerald-400" : "bg-slate-800 text-slate-300 ring-slate-700 hover:bg-slate-700"}`}
              >
                {plan.price === "Free" ? "Start Monitoring" : "Get Strategic Advantage"}
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
