import Link from "next/link";
import type { DailyBriefing, IntelligenceEvent, TrendSummary } from "@/lib/mockData";
import DailyBriefingSection from "@/components/dashboard/DailyBriefing";
import EntityActivityPanel from "@/components/dashboard/EntityActivityPanel";
import IntelligenceMap from "@/components/dashboard/IntelligenceMap";

async function getLiveEvents(): Promise<IntelligenceEvent[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
      ? process.env.NEXT_PUBLIC_SITE_URL
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

    const response = await fetch(`${baseUrl}/api/feed`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) return [];

    const data = await response.json();
    return Array.isArray(data.events) ? data.events : [];
  } catch {
    return [];
  }
}

async function getLiveTrends(): Promise<TrendSummary[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
      ? process.env.NEXT_PUBLIC_SITE_URL
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

    const response = await fetch(`${baseUrl}/api/trends`, {
      next: { revalidate: 120 },
    });

    if (!response.ok) return [];

    const data = await response.json();
    return Array.isArray(data.trends) ? data.trends : [];
  } catch {
    return [];
  }
}

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

    if (!response.ok) throw new Error("Briefing fetch failed");

    const data = await response.json();
    if (data?.briefing) return data.briefing;

    throw new Error("No briefing returned");
  } catch {
    return {
      title: "Global intelligence briefing",
      dateLabel: "Updated live",
      lead: "REDWOUD is actively monitoring live global signals.",
      summary:
        "Live event data is being collected and normalized into structured intelligence for the dashboard.",
      whyThisMatters:
        "Clustering signals across regions and topics can indicate broader strategic pressure, volatility, and emerging risk patterns.",
      keyThemes: ["Global monitoring active"],
      primaryRisks: ["No high-intensity live risks currently surfaced"],
    };
  }
}

function slugify(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default async function HomePage() {
  const liveEvents = await getLiveEvents();
  const liveTrends = await getLiveTrends();
  const liveBriefing = await getLiveBriefing();

  const activeRegions = Array.from(
    new Set(liveEvents.map((event) => event.region).filter((region) => region !== "All"))
  );

  const highIntensitySignals = liveEvents.filter((event) => event.intensity === "high").length;

  const topAlerts = liveEvents
    .filter((event) => event.intensity === "high")
    .sort((a, b) => (b.score || 0) - (a.score || 0))
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-3 text-xs text-slate-400">
              <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1">
                Live monitoring active
              </span>
              <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1">
                {liveEvents.length} events
              </span>
              <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1">
                {activeRegions.length} regions
              </span>
              <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1">
                {highIntensitySignals} high-intensity
              </span>
            </div>
            <Link href="/stream" className="text-sm text-emerald-300 hover:text-emerald-200">
              Open full stream →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-14">
          {/* Mission metrics band */}
          <div className="mb-8 grid grid-cols-6 gap-4 border-b border-slate-800/40 pb-6">
            <div className="col-span-4 flex flex-col">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-500">
                <span className="text-emerald-300">></span>
                <span>ACTIVE_MISSION</span>
              </div>
              <h1 className="mt-2 font-mono text-2xl font-medium tracking-tight text-slate-200 sm:text-3xl">
                >_ GLOBAL_STRATEGIC_MONITORING
              </h1>
              <div className="mt-3 grid grid-cols-2 gap-x-8 gap-y-2 text-xs leading-5 text-slate-400">
                <div className="cli-prompt">OBJECTIVE: SIGNAL_NORMALIZATION</div>
                <div className="cli-prompt">SCOPE: GEOPOLITICS,MARKETS,TECH</div>
                <div className="cli-prompt">OUTPUT: RISK_INDICATORS</div>
                <div className="cli-prompt">CONFIDENCE: 0.92</div>
              </div>
            </div>
            <div className="col-span-2 flex items-center justify-end gap-3">
              <Link
                href="/stream"
                className="flex items-center gap-1.5 rounded border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300 transition-colors hover:border-emerald-400/50 hover:bg-emerald-400/20"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                </span>
                LIVE STREAM
              </Link>
              <Link
                href="/briefing"
                className="flex items-center gap-1.5 rounded border border-slate-700 bg-slate-800/40 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:bg-slate-800/60 hover:text-white"
              >
                CURRENT BRIEFING
              </Link>
            </div>
          </div>

          {/* Quick actions */}
          <div className="mb-8 flex gap-2">
            <Link
              href="/trends"
              className="rounded border border-slate-700 bg-slate-800/40 px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-slate-800/60 hover:text-white"
            >
              TRENDS →
            </Link>
            <Link
              href="/alerts"
              className="rounded border border-slate-700 bg-slate-800/40 px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-slate-800/60 hover:text-white"
            >
              ALERTS →
            </Link>
            <Link
              href="/investors"
              className="rounded border border-slate-700 bg-slate-800/40 px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-slate-800/60 hover:text-white"
            >
              INVESTOR ACCESS →
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Events monitored now
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">{liveEvents.length}</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Active regions
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">{activeRegions.length}</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                High-intensity signals
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">{highIntensitySignals}</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Briefing status
              </p>
              <p className="mt-3 text-2xl font-semibold text-emerald-300">Updated</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800 bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-wrap gap-3">
            {topAlerts.length ? (
              topAlerts.map((event) => (
                <div
                  key={event.id}
                  className="rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-xs text-rose-200"
                >
                  {event.region} · {event.topic} · Score {event.score ?? 0}
                </div>
              ))
            ) : (
              <div className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">
                No high-priority alerts currently surfaced
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-12">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 lg:col-span-7">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Live Event Feed</h2>
            <Link href="/stream" className="text-sm text-emerald-300 hover:text-emerald-200">
              View full stream
            </Link>
          </div>

          <div className="mt-5 space-y-4">
            {liveEvents.slice(0, 6).map((event) => (
              <article
                key={event.id}
                className={`
                  rounded-xl border p-4 relative overflow-hidden
                  ${
                    event.intensity === "high"
                      ? "border-rose-500/30 bg-rose-950/20"
                      : "border-slate-800 bg-slate-950/60"
                  }
                `}
              >
                {event.intensity === "high" && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.03)_0%,transparent_70%)]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.03)_0%,transparent_70%)]"></div>
                  </div>
                )}
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs uppercase tracking-wide text-slate-400">
                    {event.region}
                  </span>
                  <div className="flex items-center gap-2">
                    <span 
                      className={`
                        rounded-full px-2 py-1 text-xs font-medium
                        ${
                          event.intensity === "high"
                            ? "bg-rose-500/15 text-rose-300"
                            : "bg-indigo-500/15 text-indigo-300"
                        }
                      `}
                    >
                      Score {event.score ?? 0}
                    </span>
                    <span 
                      className={`
                        text-xs 
                        ${
                          event.intensity === "high"
                            ? "text-rose-400/80"
                            : "text-slate-500"
                        }
                      `}
                    >
                      {event.timeAgo}
                    </span>
                  </div>
                </div>

                <h3 className="mt-2 text-base font-semibold">{event.title}</h3>

                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                  <span>{event.topic}</span>
                  <span>•</span>
                  <Link
                    href={`/entity/${slugify(event.entity)}`}
                    className="hover:text-slate-200 hover:underline"
                  >
                    {event.entity}
                  </Link>
                  <span>•</span>
                  <span>Confidence {event.confidence}</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-[0.7rem]">
                  <div className="flex items-center gap-1.5">
                    <span className="font-medium text-slate-400/90">Source:</span>
                    <span className="rounded bg-slate-800/50 px-1.5 py-0.5 font-mono text-slate-300/90">
                      {event.sources?.[0] || "Multiple public signals"}
                    </span>
                  </div>
                  <span className="text-slate-600">|</span>
                  <div className="flex items-center gap-1.5">
                    <span className="font-medium text-slate-400/90">Updated:</span>
                    <span className="font-mono text-slate-300/90">
                      {event.timeAgo}
                    </span>
                  </div>
                </div>
                <div className="mt-1 text-[0.7rem] text-slate-400/90">
                  REDWOUD normalizes public signals into structured intelligence events with score, confidence and strategic framing.
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-300">{event.summary}</p>

                <p className="mt-3 text-xs leading-6 text-slate-400">
                  <span className="font-medium text-slate-300">Why this matters:</span>{" "}
                  {event.whyItMatters}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 lg:col-span-5">
          <DailyBriefingSection briefing={liveBriefing} />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <IntelligenceMap activeRegions={activeRegions.length ? (activeRegions as any) : undefined} />
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 lg:col-span-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Trend Signals</h2>
            <Link href="/trends" className="text-sm text-emerald-300 hover:text-emerald-200">
              View all
            </Link>
          </div>

          <div className="mt-5 space-y-4">
            {liveTrends.slice(0, 6).map((card) => (
              <div
                key={card.id}
                className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold">{card.title}</h3>
                  <span className="rounded-full bg-sky-500/15 px-2 py-1 text-xs font-medium text-sky-300">
                    {card.value}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-300">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <EntityActivityPanel events={liveEvents} />
      </section>
    </main>
  );
}
