import type { DailyBriefing } from "@/lib/mockData";

async function getLiveBriefing(): Promise<DailyBriefing> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
      ? process.env.NEXT_PUBLIC_SITE_URL
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

    const response = await fetch(`${baseUrl}/api/briefing`, {
      next: { revalidate: 300 },
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
      dateLabel: "Updated today",
      lead: "No significant developments detected in the monitored regions.",
      summary:
        "REDWOUD is actively monitoring live global signals and will surface major developments as they are detected.",
      whyThisMatters:
        "Maintaining a live intelligence layer helps decision-makers detect risk, volatility, and emerging strategic change early.",
      keyThemes: ["Global monitoring active"],
      primaryRisks: ["No high-intensity live risks currently surfaced"],
    };
  }
}

export default async function BriefingPage() {
  const briefing = await getLiveBriefing();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
          Daily Briefing
        </p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">{briefing.title}</h1>
        <p className="mt-3 text-sm text-slate-400">{briefing.dateLabel}</p>
        <p className="mt-6 text-lg leading-8 text-slate-200">{briefing.lead}</p>
        <p className="mt-6 text-base leading-8 text-slate-300">{briefing.summary}</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-lg font-semibold">Key themes</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {briefing.keyThemes.map((theme) => (
                <li key={theme}>• {theme}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-lg font-semibold">Primary risks</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {briefing.primaryRisks.map((risk) => (
                <li key={risk}>• {risk}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-lg font-semibold">Why this matters</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">{briefing.whyThisMatters}</p>
        </div>
      </section>
    </main>
  );
}
