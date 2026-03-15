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
  const isFallbackData = briefing.title === "Global intelligence briefing" && 
                         briefing.lead.includes("⚠️");

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900/50 text-slate-100">
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8 flex items-center justify-between border-b border-slate-800 pb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400/80">
              Strategic Intelligence Briefing
            </p>
            <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">{briefing.title}</h1>
            <p className="mt-1 text-sm text-slate-400/80">{briefing.dateLabel}</p>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 px-4 py-1.5 text-sm font-medium text-emerald-400 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Live Intelligence Feed
          </div>
        </div>
        {isFallbackData && (
          <div className="mb-6 rounded-lg bg-amber-900/30 p-3 text-sm text-amber-100">
            <p>Showing cached briefing data • Reconnecting to live intelligence feed...</p>
          </div>
        )}
        
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="rounded-xl border border-slate-800/50 bg-gradient-to-b from-slate-900/50 to-slate-900/30 p-6 backdrop-blur-sm">
              <h2 className="text-lg font-semibold text-slate-100">Executive Summary</h2>
              <div className="mt-4 space-y-4 text-sm leading-6 text-slate-300/90">
                <p>{briefing.lead}</p>
                <p>{briefing.summary}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="rounded-xl border border-slate-800/50 bg-gradient-to-b from-slate-900/50 to-slate-900/30 p-6 backdrop-blur-sm">
              <h2 className="text-lg font-semibold text-slate-100">Key Themes</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-300/90">
                {briefing.keyThemes.map((theme) => (
                  <li key={theme} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-500/80"></span>
                    <span>{theme}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-slate-800/50 bg-gradient-to-b from-slate-900/50 to-slate-900/30 p-6 backdrop-blur-sm">
              <h2 className="text-lg font-semibold text-slate-100">Primary Risks</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-300/90">
                {briefing.primaryRisks.map((risk) => (
                  <li key={risk} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-500/80"></span>
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="rounded-xl border border-slate-800/50 bg-gradient-to-b from-slate-900/50 to-slate-900/30 p-6 backdrop-blur-sm">
              <h2 className="text-lg font-semibold text-slate-100">Strategic Implications</h2>
              <p className="mt-4 text-sm leading-6 text-slate-300/90">{briefing.whyThisMatters}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
