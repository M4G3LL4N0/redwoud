import StatusIndicator from "@/components/dashboard/StatusIndicator"
import type { DailyBriefing } from "@/lib/mockData"

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
  const briefing = await getLiveBriefing()

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-4xl">
              <p className="text-xs uppercase tracking-wider text-emerald-400">
                Executive Intelligence Brief
              </p>
              <h1 className="mt-2 text-4xl font-semibold">
                {briefing.title}
              </h1>
              <p className="mt-3 text-slate-400">{briefing.dateLabel}</p>
              <p className="mt-5 text-lg leading-8 text-slate-300">{briefing.lead}</p>
            </div>

            <StatusIndicator risks={briefing.primaryRisks.length} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-lg font-semibold mb-4">Summary</h2>
          <p className="text-sm leading-7 text-slate-300">{briefing.summary}</p>

          <div className="mt-8 rounded-xl border border-slate-800 bg-slate-950/60 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Why This Matters
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {briefing.whyThisMatters}
            </p>
            <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400/90">
              REDWOUD normalizes public signals into structured intelligence briefings with strategic context and risk analysis.
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-8">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Primary Risks</h2>
              <div className="flex items-center gap-1.5 text-[0.7rem] text-slate-400">
                <span>Updated:</span>
                <span className="font-mono">{new Date().toISOString().split('T')[1].slice(0,5)}</span>
              </div>
            </div>
            {briefing.primaryRisks.length ? (
              <ul className="space-y-3">
                {briefing.primaryRisks.map((risk, i) => (
                  <li key={i} className="text-sm text-slate-300">
                    • {risk}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-slate-400">No major live risks currently surfaced.</p>
            )}
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Key Themes</h2>
              <div className="flex items-center gap-1.5 text-[0.7rem] text-slate-400">
                <span>Updated:</span>
                <span className="font-mono">{new Date().toISOString().split('T')[1].slice(0,5)}</span>
              </div>
            </div>
            {briefing.keyThemes.length ? (
              <ul className="space-y-3">
                {briefing.keyThemes.map((theme, i) => (
                  <li key={i} className="text-sm text-slate-300">
                    • {theme}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-slate-400">No major themes currently surfaced.</p>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
