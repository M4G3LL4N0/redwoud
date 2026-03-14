const plans = [
  {
    name: "Free",
    price: "$0",
    subtitle: "Public intelligence utility",
    features: [
      "Live event feed",
      "Daily AI briefing",
      "Trend summaries",
      "Region and topic filters",
    ],
  },
  {
    name: "Pro",
    price: "$39/mo",
    subtitle: "For analysts and power users",
    features: [
      "Saved dashboards",
      "Custom alerts",
      "Advanced filtering",
      "Premium briefings",
    ],
  },
  {
    name: "Team",
    price: "$149/mo",
    subtitle: "For research and strategy teams",
    features: [
      "Shared dashboards",
      "Team collaboration",
      "Workspace organization",
      "Priority intelligence views",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    subtitle: "For institutions and large organizations",
    features: [
      "Organization workspaces",
      "Custom integrations",
      "Scenario analysis",
      "Enterprise support",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Pricing
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
            From public intelligence utility to enterprise decision support.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            REDWOUD is designed to attract public users first, then expand into professional and
            enterprise workflows with alerts, dashboards, intelligence search, and collaboration.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-4">
          {plans.map((plan) => (
            <article key={plan.name} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-xl font-semibold">{plan.name}</h2>
              <p className="mt-2 text-3xl font-semibold text-white">{plan.price}</p>
              <p className="mt-2 text-sm text-slate-400">{plan.subtitle}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
