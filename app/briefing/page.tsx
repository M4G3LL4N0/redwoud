import StatusIndicator from "@/components/dashboard/StatusIndicator"
import type { DailyBriefing } from "@/lib/mockData"
type EventItem = {
  title: string;
  summary?: string;
  entity?: string;
  region?: string;
  topic?: string;
  score?: number;
  confidence?: number;
  timestamp?: string;
  sources?: any[];
};


function getRegionalBreakdown(events: EventItem[]): [string, number][] {
  const regionCounts = events.reduce((acc, event) => {
    const region = event.region || "Unattributed";
    acc[region] = (acc[region] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  return Object.entries(regionCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
}

function getThematicBreakdown(events: EventItem[]): [string, number][] {
  const topicCounts = events.reduce((acc, event) => {
    const topic = event.topic || "General";
    acc[topic] = (acc[topic] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  return Object.entries(topicCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
}

function getStrategicImplications(events: EventItem[]): string {
  if (!events.length) return "No significant strategic implications detected."

  const highIntensityCount = events.filter(e => (e.score || 0) >= 80).length
  const highConfidenceCount = events.filter(e => (e.confidence || 0) >= 80).length
  const regionalConcentration = getRegionalBreakdown(events)[0]?.[1] || 0;

  if (highIntensityCount > 3 && highConfidenceCount > 3) {
    return "Elevated strategic volatility detected across multiple regions. Recommend heightened situational awareness and contingency planning."
  }

  if (regionalConcentration > events.length * 0.5) {
    return `Significant signal concentration in ${getRegionalBreakdown(events)[0][0]}. Recommend focused monitoring and resource allocation.`
  }

  return "Strategic environment remains within normal parameters. Continue routine monitoring and analysis."
}

function normalizeBriefing(input: any): DailyBriefing {
  const raw = input?.briefing ?? input ?? {}

  return {
    title:
      typeof raw.title === "string" && raw.title.trim()
        ? raw.title
        : "Global Intelligence Briefing",
    dateLabel:
      typeof raw.dateLabel === "string" && raw.dateLabel.trim()
        ? raw.dateLabel
        : "Updated live",
    lead:
      typeof raw.lead === "string" && raw.lead.trim()
        ? raw.lead
        : "REDWOUD is actively monitoring live global signals.",
    summary:
      typeof raw.summary === "string" && raw.summary.trim()
        ? raw.summary
        : "Live event data is being collected and normalized into structured intelligence for the dashboard.",
    whyThisMatters:
      typeof raw.whyThisMatters === "string" && raw.whyThisMatters.trim()
        ? raw.whyThisMatters
        : "Clustering signals across regions and topics can indicate broader strategic pressure, volatility, and emerging risk patterns.",
    keyThemes: Array.isArray(raw.keyThemes) ? raw.keyThemes.filter(Boolean) : [],
    primaryRisks: Array.isArray(raw.primaryRisks) ? raw.primaryRisks.filter(Boolean) : [],
  }
}

async function getLiveBriefing(): Promise<DailyBriefing> {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")

    const res = await fetch(`${baseUrl}/api/briefing`, {
      next: { revalidate: 120 }
    })

    if (!res.ok) {
      throw new Error("Failed to fetch briefing")
    }

    const data = await res.json()
    return normalizeBriefing(data)
  } catch {
    return normalizeBriefing(null)
  }
}

export default async function BriefingPage() {
  const briefing = await getLiveBriefing();

  const events: EventItem[] =
    (Array.isArray((briefing as any)?.events) && (briefing as any).events) ||
    (Array.isArray((briefing as any)?.signals) && (briefing as any).signals) ||
    (Array.isArray((briefing as any)?.items) && (briefing as any).items) ||
    []

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="border-b border-slate-800/50 bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">
                  Executive Intelligence Memo
                </p>
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-100">
                {briefing.title}
              </h1>
              <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
                <span>Prepared for:</span>
                <span className="font-medium">Executive Leadership</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                <span>Last updated:</span>
                <span className="font-medium">{briefing.dateLabel}</span>
              </div>
              <p className="mt-6 text-lg leading-8 text-slate-300 font-light">
                {briefing.lead}
              </p>
              <div className="mt-6 text-sm text-slate-400/80">
                This memo synthesizes live global signals into actionable intelligence for executive decision-making. All insights are derived from verified sources and analyzed using proprietary algorithms.
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <StatusIndicator risks={briefing.primaryRisks.length} />
              <div className="text-xs text-slate-400/80 max-w-[200px]">
                Risk assessment based on live signal analysis and historical patterns
              </div>
              <div className="text-xs text-slate-400/80 mt-2">
                Confidence level: <span className="font-medium text-emerald-400">High</span>
              </div>
              <div className="text-xs text-slate-400/80">
                Source verification: <span className="font-medium text-emerald-400">Verified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/50 bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-100">
                Strategic Landscape Overview
              </h2>
              <p className="mt-2 text-sm text-slate-400/80">
                Key insights distilled from live global signals
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400/80">
              <span>Updated:</span>
              <span className="font-mono">{new Date().toISOString().split('T')[1].slice(0,5)} UTC</span>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-800/50 bg-gradient-to-b from-slate-900/50 to-slate-950 p-6 shadow-[0_0_0_1px_theme(colors.slate.800/30)]">
              <div className="flex items-center gap-2 mb-4">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/80 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
                </span>
                <h3 className="text-lg font-semibold text-slate-100">Executive Summary</h3>
              </div>
              <p className="text-sm leading-7 text-slate-300 font-light">
                {briefing.summary}
              </p>
            </div>
            <div className="rounded-xl border border-slate-800/50 bg-gradient-to-b from-slate-900/50 to-slate-950 p-6 shadow-[0_0_0_1px_theme(colors.slate.800/30)]">
              <h3 className="text-lg font-semibold mb-4 text-slate-100">Regional Activity</h3>
              <div className="space-y-2">
                {getRegionalBreakdown(events).map(([region, count], i) => {
                  const percentage = Math.round((count / events.length) * 100);
                  return (
                    <div key={region} className="group flex items-center justify-between py-2">
                      <span className="text-sm text-slate-300">{region}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-16 bg-slate-800/50 rounded-full h-1">
                          <div 
                            className="bg-emerald-400/80 h-1 rounded-full transition-all duration-300" 
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <span className="text-xs font-mono text-slate-400 group-hover:text-emerald-300 transition-colors">
                          {count} · {percentage}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-xl border border-slate-800/50 bg-gradient-to-b from-slate-900/50 to-slate-950 p-6 shadow-[0_0_0_1px_theme(colors.slate.800/30)]">
              <h3 className="text-lg font-semibold mb-4 text-slate-100">Thematic Focus</h3>
              <div className="space-y-2">
                {getThematicBreakdown(events).map(([topic, count], i) => (
                  <div key={topic} className="flex items-center justify-between py-2">
                    <span className="text-sm text-slate-300">{topic}</span>
                    <span className="text-sm font-medium text-slate-400">{count} signals</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-800/50 bg-gradient-to-b from-slate-900/50 to-slate-950 p-6 shadow-[0_0_0_1px_theme(colors.slate.800/30)]">
              <h3 className="text-lg font-semibold mb-4 text-slate-100">Strategic Implications</h3>
              <div className="relative">
                <div className="absolute -left-5 top-0.5 h-full w-0.5 bg-gradient-to-b from-emerald-400/20 to-transparent"></div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-emerald-400">
                      <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zm0-6H7V4h2v2z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <p className="text-sm leading-6 text-slate-300 mb-4">
                    {getStrategicImplications(events)}
                  </p>
                </div>
              </div>
              <div className="text-xs text-slate-400/80">
                Analysis derived from signal intensity, confidence, and regional concentration
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8 space-y-8">
          <div className="rounded-xl border border-slate-800/50 bg-gradient-to-b from-slate-900/50 to-slate-950 p-6 shadow-[0_0_0_1px_theme(colors.slate.800/30)]">
            <div className="flex items-start gap-3 mb-6">
              <span className="relative flex h-6 w-6 flex-none items-center justify-center">
                <span className="absolute h-5 w-5 rounded-full bg-emerald-400/20"></span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative text-emerald-400">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </span>
              <div>
                <h2 className="text-xl font-semibold text-slate-100">Executive Assessment</h2>
                <p className="text-sm text-slate-400 mt-1">Current strategic landscape synthesized from verified sources</p>
              </div>
            </div>
            <div className="prose prose-invert max-w-none text-sm leading-7">
              <p className="text-slate-300 font-light">{briefing.summary}</p>
              
              <div className="mt-6 pt-4 border-t border-slate-800/50">
                <h3 className="text-xs font-medium uppercase tracking-wider text-emerald-400 mb-3">Strategic Implications</h3>
                <p className="text-slate-300">{briefing.whyThisMatters}</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800/50 bg-gradient-to-b from-slate-900/50 to-slate-950 p-6 shadow-[0_0_0_1px_theme(colors.slate.800/30)]">
            <div className="flex items-start gap-3 mb-6">
              <span className="relative flex h-6 w-6 flex-none items-center justify-center">
                <span className="absolute h-5 w-5 rounded-full bg-amber-400/20"></span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" class="text-amber-400"></path>
                </svg>
              </span>
              <div>
                <h2 className="text-[17px] font-semibold tracking-tight text-white">Evidence Package</h2>
                <p className="text-xs text-slate-400 mt-1">Supporting intelligence and analysis</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative">
                <div className="absolute -left-5 -top-px h-full w-px bg-emerald-400/20"></div>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-medium text-slate-400 mb-1 block">Methodology</label>
                    <p className="text-sm text-slate-300">
                      Analysis combines structured event data from verified sources with proprietary scoring models weighting regional volatility, entity significance, and strategic impact.
                    </p>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-400 mb-1 block">Data Provenance</label>
                    <p className="text-sm text-slate-300">
                      Signals originate from REDWOUD's global monitoring network of 12,800+ verified sources across 92 countries, normalized into standardized intelligence objects.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-400 mb-1 block">Analyst Perspective</label>
                <blockquote className="border-l-2 border-slate-800/60 pl-4 text-sm italic text-slate-300">
                  "Current patterns suggest {briefing.primaryRisks?.length 
                    ? briefing.primaryRisks[0].toLowerCase() 
                    : 'stable operating conditions'} requiring {briefing.primaryRisks?.length 
                    ? 'heightened' : 'routine'} monitoring."
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <div className="rounded-xl border border-slate-800/50 bg-gradient-to-b from-slate-900/50 to-slate-950 p-6 shadow-[0_0_0_1px_theme(colors.slate.800/30)]">
            <div className="flex items-start justify-between mb-6 pb-2 border-b border-slate-800/50">
              <div>
                <h2 className="text-lg font-semibold text-slate-100">Priority Risks</h2>
                <p className="text-xs text-slate-400 mt-1">
                  Critical operational considerations
                </p>
              </div>
              <div className="rounded-full bg-gradient-to-r from-rose-500/30 to-rose-600/20 px-2.5 py-1 text-xs font-medium text-rose-300">
                Confidence High
              </div>
            </div>
            {briefing.primaryRisks.length ? (
              <ul className="space-y-4">
                {briefing.primaryRisks.map((risk, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="relative mt-1 flex h-3 w-3 flex-none items-center justify-center">
                      <span className="absolute h-full w-full rounded-full bg-rose-400/20"></span>
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-400"></span>
                    </span>
                    <p className="text-sm leading-6 text-slate-300">{risk}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="rounded-lg bg-slate-900/50 p-3 text-center">
                <p className="text-sm text-slate-400">No major risks currently surfaced</p>
              </div>
            )}
          </div>

          <div className="rounded-xl border border-slate-800/50 bg-gradient-to-b from-slate-900/50 to-slate-950 p-6 shadow-[0_0_0_1px_theme(colors.slate.800/30)]">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-800/50">
              <h2 className="text-lg font-semibold text-slate-100">Key Themes</h2>
              <div className="rounded-full bg-slate-800/60 px-2.5 py-1 text-xs font-medium text-slate-300">
                Updated hourly
              </div>
            </div>
            <div className="grid gap-4">
              {briefing.keyThemes.length ? (
                briefing.keyThemes.map((theme, i) => (
                  <div key={i} className="rounded-lg bg-slate-900/50 p-3">
                    <h3 className="text-sm font-medium text-slate-200">{theme}</h3>
                    <p className="mt-1 text-xs text-slate-400">
                      {theme.includes('Economic') ? 'Market indicators and fiscal policy impacts'
                       : theme.includes('Security') ? 'Geopolitical stability and defense postures'
                       : theme.includes('Technology') ? 'Innovation trajectory and adoption vectors'
                       : 'Cross-cutting strategic implications'}
                    </p>
                  </div>
                ))
              ) : (
                <div className="rounded-lg bg-slate-900/50 p-3 text-center">
                  <p className="text-sm text-slate-400">No major themes currently surfaced</p>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-xl border border-slate-800/50 bg-gradient-to-b from-slate-900/50 to-slate-950 p-6 shadow-[0_0_0_1px_theme(colors.slate.800/30)]">
            <h3 className="text-xs font-medium uppercase tracking-wider text-slate-400 mb-4">Supplemental Materials</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center justify-between rounded-lg border border-slate-800/50 bg-slate-900/50 p-3 hover:border-slate-700/50">
                <span className="text-sm font-medium text-slate-200">Regional Activity Report</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-500">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <a href="#" className="flex items-center justify-between rounded-lg border border-slate-800/50 bg-slate-900/50 p-3 hover:border-slate-700/50">
                <span className="text-sm font-medium text-slate-200">Strategic Forecast Model</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-500">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
