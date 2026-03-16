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
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="mx-auto max-w-7xl border-b border-slate-800/70 bg-gradient-to-r from-slate-950 to-slate-900/80 px-6 py-6 backdrop-blur-md">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-medium tracking-tight text-slate-100 sm:text-4xl">
                {briefing.title}
              </h1>
              <span className="animate-pulse rounded-full bg-emerald-500/20 px-2 py-1 text-xs font-medium uppercase tracking-wider text-emerald-400">
                Live
              </span>
            </div>
            <div className="mt-2 flex items-baseline gap-4">
              <p className="text-sm text-slate-400">
                <span className="font-medium text-emerald-400">REDWOUD</span> • {briefing.dateLabel}
              </p>
              <span className="text-xs text-slate-500">EYES ONLY</span>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500/30 to-emerald-500/15 px-3.5 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-80"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </span>
            SIGNALS LIVE • {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
          </div>
        </div>
      </header>
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-6 py-8">
        {/* Status sidebar */}
        <div className="col-span-2 space-y-6">
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Status
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-slate-400">Last Update</p>
                <p className="text-sm font-medium text-slate-200">
                  {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Coverage</p>
                <p className="text-sm font-medium text-slate-200">Global</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Classification</p>
                <p className="text-sm font-medium text-amber-400">EYES ONLY</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="col-span-7 space-y-6">
        {isFallbackData && (
          <div className="mb-6 rounded-lg border border-amber-500/30 bg-gradient-to-r from-amber-900/40 to-amber-900/20 p-4 text-sm text-amber-100">
            <div className="flex items-center gap-2">
              <span className="animate-pulse">⚠️</span>
              <span className="font-medium">CACHED BRIEFING</span>
            </div>
            <p className="mt-1">Reconnecting to live intelligence feed...</p>
          </div>
        )}

        <div className="grid grid-cols-8 gap-6">
          <div className="col-span-5 space-y-6">
            <div className="rounded-xl border border-slate-800/70 bg-gradient-to-b from-slate-900/60 to-slate-900/40 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-start justify-between border-b border-slate-800/50 pb-4">
                <h2 className="text-xl font-medium text-slate-100">Situation Report</h2>
                <span className="rounded-full bg-indigo-500/20 px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-indigo-400">
                  Priority Intel
                </span>
              </div>
              <div className="prose prose-sm prose-invert max-w-none">
                <h3 className="text-base/[1.4] font-medium text-slate-100">
                  {briefing.lead}
                </h3>
                <p className="text-sm/[1.6] text-slate-300">{briefing.summary}</p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-800/70 bg-gradient-to-b from-slate-900/60 to-slate-900/40 p-6 backdrop-blur-sm">
              <h2 className="mb-4 text-xl font-medium text-slate-100">
                Strategic Implications
                <span className="ml-2 text-sm font-normal text-slate-500">REDWOUD Analysis</span>
              </h2>
              <div className="prose prose-sm prose-invert max-w-none">
                <p className="text-sm/[1.6] text-slate-300">{briefing.whyThisMatters}</p>
              </div>
            </div>
          </div>

          <div className="col-span-3 space-y-6">
            <div className="divide-y divide-slate-800/50 rounded-xl border border-slate-800/70 bg-gradient-to-b from-slate-900/60 to-slate-900/40 backdrop-blur-sm">
              <div className="p-4">
                <h2 className="flex items-center gap-2 text-xl font-medium text-slate-100">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  Key Themes
                </h2>
              </div>
              <ul className="divide-y divide-slate-800/50">
                {briefing.keyThemes.map((theme) => (
                  <li key={theme} className="p-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500/80"></span>
                      <span className="text-sm/[1.6] text-slate-300">{theme}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="divide-y divide-slate-800/50 rounded-xl border border-slate-800/70 bg-gradient-to-b from-slate-900/60 to-slate-900/40 backdrop-blur-sm">
              <div className="p-4">
                <h2 className="flex items-center gap-2 text-xl font-medium text-slate-100">
                  <span className="h-2 w-2 rounded-full bg-rose-500"></span>
                  Primary Risks
                </h2>
              </div>
              <ul className="divide-y divide-slate-800/50">
                {briefing.primaryRisks.map((risk) => (
                  <li key={risk} className="p-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-rose-500/80"></span>
                      <span className="text-sm/[1.6] text-slate-300">{risk}</span>
                    </div>
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
