import AlertSettingsPanel from "@/components/dashboard/AlertSettingsPanel";

export default function AlertsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Alerts
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
            Real-time intelligence alerts for the signals that matter most.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            REDWOUD alerts are designed to notify users when important developments emerge across
            tracked entities, regions, topics, and risk conditions.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-10 lg:grid-cols-12">
        <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Alert types</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Entity alerts",
                detail: "Track specific countries, companies, industries, or strategic assets.",
              },
              {
                title: "Region alerts",
                detail: "Monitor changes across Europe, Asia, the Middle East, Africa, and the Americas.",
              },
              {
                title: "Topic alerts",
                detail: "Follow geopolitical, energy, trade, technology, market, and security developments.",
              },
              {
                title: "Risk alerts",
                detail: "Surface rising intensity, volatility, disruption, and escalation signals.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <h3 className="text-sm font-semibold text-slate-100">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <AlertSettingsPanel />
        </div>
      </section>
    </main>
  );
}
