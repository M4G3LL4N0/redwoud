import type { DailyBriefing } from "@/lib/mockData";

async function getLiveBriefing(): Promise<DailyBriefing> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
      ? process.env.NEXT_PUBLIC_SITE_URL
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

    const response = await fetch(`${baseUrl}/api/briefing`, {
      next: { revalidate: 120 },
    });

    if (!response.ok) {
      throw new Error("Briefing fetch failed");
    }

    const data = await response.json();

    if (data?.briefing) {
      return data.briefing;
    }

    throw new Error("No briefing returned");
  } catch {
    return {
      title: "Global intelligence briefing",
      dateLabel: "Updated live",
      lead: "REDWOUD is actively monitoring live global signals.",
      summary:
        "Live event data is being collected and normalized into structured intelligence for the platform.",
      whyThisMatters:
        "Clustering signals across regions and topics can indicate broader strategic pressure, volatility, and emerging risk patterns.",
      keyThemes: ["Global monitoring active"],
      primaryRisks: ["No high-intensity live risks currently surfaced"],
    };
  }
}

export default async function BriefingPage() {
  const briefing = await getLiveBriefing();
  const isHighPriority =
    briefing.primaryRisks.length > 0 ||
    briefing.lead.toLowerCase().includes("risk") ||
    briefing.lead.toLowerCase().includes("escalat") ||
    briefing.lead.toLowerCase().includes("disruption");

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="border-b border-slate-800 bg-slate-950/90">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Executive Briefing
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
                {briefing.title}
              </h1>
              <p className="mt-4 text-sm text-slate-400">{briefing.dateLabel}</p>
            </div>

            <div className="flex gap-2">
              <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-300">
                Live intelligence
              </span>
              <span
                className={`rounded-full px-3 py-1 text-xs ${
                  isHighPriority
                    ? "border border-rose-500/30 bg-rose-500/10 text-rose-200"
                    : "border border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                }`}
              >
                {isHighPriority ? "Priority watch" : "Stable watch"}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Lead assessment
            </p>
            <p className="mt-4 text-xl leading-9 text-slate-100">{briefing.lead}</p>

            <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Executive summary
              </p>
              <p className="mt-4 text-sm leading-8 text-slate-300">{briefing.summary}</p>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Why this matters
              </p>
              <p className="mt-4 text-sm leading-8 text-slate-300">
                {briefing.whyThisMatters}
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Key themes
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {briefing.keyThemes.map((theme) => (
                  <li key={theme} className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>{theme}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Primary risks
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {briefing.primaryRisks.map((risk) => (
                  <li key={risk} className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-rose-400" />
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
