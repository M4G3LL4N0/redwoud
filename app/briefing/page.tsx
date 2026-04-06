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
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">
                  Executive Intelligence Brief
                </p>
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-100">
                {briefing.title}
              </h1>
              <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
                <span>Last updated:</span>
                <span className="font-medium">{briefing.dateLabel}</span>
              </div>
              <p className="mt-6 text-lg leading-8 text-slate-300 font-light">
                {briefing.lead}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <StatusIndicator risks={briefing.primaryRisks.length} />
              <div className="text-xs text-slate-400/80 max-w-[200px]">
                Risk assessment based on live signal analysis and historical patterns
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/50 bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-100">
              Strategic Landscape
            </h2>
            <div className="text-xs text-slate-400/80">
              Updated: {new Date().toISOString().split('T')[1].slice(0,5)} UTC
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
        <div className="lg:col-span-7 space-y-8">
          <div className="rounded-xl border border-slate-800/50 bg-gradient-to-b from-slate-900/50 to-slate-950 p-6 shadow-[0_0_0_1px_theme(colors.slate.800/30)]">
            <h2 className="text-lg font-semibold mb-6 text-slate-100">Executive Summary</h2>
            <p className="text-sm leading-7 text-slate-300 font-light">
              {briefing.summary}
            </p>
          </div>

          <div className="rounded-xl border border-slate-800/50 bg-gradient-to-b from-slate-900/50 to-slate-950 p-6 shadow-[0_0_0_1px_theme(colors.slate.800/30)]">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400 mb-4">
              Strategic Context
            </h3>
            <p className="text-sm leading-7 text-slate-300 font-light">
              {briefing.whyThisMatters}
            </p>
            <div className="mt-6 pt-4 border-t border-slate-800/50 text-xs text-slate-400/80">
              REDWOUD normalizes public signals into structured intelligence briefings with strategic context and risk analysis. All briefings are derived from verified sources and updated in real-time.
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-8">
          <div className="rounded-xl border border-slate-800/50 bg-gradient-to-b from-slate-900/50 to-slate-950 p-6 shadow-[0_0_0_1px_theme(colors.slate.800/30)]">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-slate-100">Primary Risks</h2>
                <p className="text-xs text-slate-400 mt-1">
                  Critical risk vectors requiring executive attention
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400/80 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-rose-400"></span>
                </span>
                <div className="text-[11px] font-medium text-slate-400 uppercase tracking-[0.2em]">
                  LIVE PRIORITIZATION
                </div>
              </div>
            </div>
            {briefing.primaryRisks.length ? (
              <ul className="space-y-3">
                {briefing.primaryRisks.map((risk, i) => (
                  <li key={i} className="text-sm text-slate-300">
                    <span className="mr-2 text-slate-400/80">•</span>
                    {risk}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-slate-400/80">No major live risks currently surfaced.</p>
            )}
          </div>

          <div className="rounded-xl border border-slate-800/50 bg-gradient-to-b from-slate-900/50 to-slate-950 p-6 shadow-[0_0_0_1px_theme(colors.slate.800/30)]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-slate-100">Key Themes</h2>
              <div className="flex items-center gap-1.5 text-[0.7rem] text-slate-400/80">
                <span>Updated:</span>
                <span className="font-mono">{new Date().toISOString().split('T')[1].slice(0,5)}</span>
              </div>
            </div>
            {briefing.keyThemes.length ? (
              <ul className="space-y-3">
                {briefing.keyThemes.map((theme, i) => (
                  <li key={i} className="text-sm text-slate-300">
                    <span className="mr-2 text-slate-400/80">•</span>
                    {theme}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-slate-400/80">No major themes currently surfaced.</p>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
