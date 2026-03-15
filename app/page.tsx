import Link from "next/link";
import type { DailyBriefing, IntelligenceEvent, TrendSummary } from "@/lib/mockData";
import DailyBriefingSection from "@/components/dashboard/DailyBriefing";
import EntityActivityPanel from "@/components/dashboard/EntityActivityPanel";

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

    if (!response.ok) {
      throw new Error("Briefing fetch failed");
    }

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
      {/* Command Bar */}
      <section className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-xl font-bold tracking-tight text-white">
                <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
                REDWOUD COMMAND
              </h1>
              <div className="flex gap-4">
                <button className="text-xs font-medium uppercase tracking-wider text-slate-400 hover:text-white">
                  Operations
                </button>
                <button className="text-xs font-medium uppercase tracking-wider text-slate-400 hover:text-white">
                  Analysis
                </button>
                <button className="text-xs font-medium uppercase tracking-wider text-slate-400 hover:text-white">
                  Monitoring
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs font-medium text-emerald-400">
                LIVE · {new Date().toLocaleTimeString()}
              </span>
              <Link
                href="/stream"
                className="btn-primary"
              >
                Launch Console
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="grid grid-cols-8 gap-2">
            <div className="glass-card col-span-2 flex items-center justify-between rounded-lg p-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Events
                </p>
                <p className="mt-1 text-2xl font-semibold text-white">{liveEvents.length}</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-emerald-500/10 p-1.5">
                <div className="h-5 w-5 rounded-full bg-emerald-500/80 shadow-[0_0_10px_rgba(52,211,153,0.3)]"></div>
              </div>
            </div>

            <div className="glass-card col-span-2 flex items-center justify-between rounded-lg p-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Active Regions
                </p>
                <p className="mt-1 text-2xl font-semibold text-white">{activeRegions.length}</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-indigo-500/10 p-1.5">
                <svg className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 18L20 6"></path>
                </svg>
              </div>
            </div>

            <div className="glass-card col-span-2 flex items-center justify-between rounded-lg p-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Priority Signals
                </p>
                <p className="mt-1 text-2xl font-semibold text-white">{highIntensitySignals}</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-rose-500/10 p-1.5">
                <svg className="h-5 w-5 text-rose-400" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V18M18 12H6"></path>
                </svg>
              </div>
            </div>

            <div className="glass-card col-span-2 flex items-center justify-between rounded-lg p-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Systems
                </p>
                <p className="mt-1 text-2xl font-semibold text-emerald-300">ONLINE</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-sky-500/10 p-1.5">
                <svg className="h-5 w-5 text-sky-400" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13L9.5 17L19 7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alerts Strip */}
      <section className="relative z-30 border-b border-slate-800 bg-gradient-to-r from-slate-950/90 via-rose-900/10 to-slate-950/90">
        <div className="mx-auto max-w-7xl px-6 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium uppercase tracking-wider text-rose-400">
                Priority Alerts
              </span>
              {topAlerts.length ? (
                topAlerts.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-200"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-rose-500 shadow-[0_0_6px_rgba(244,63,94,0.7)]"></div>
                    {event.region} · {event.topic} · 
                    <span className="font-bold"> Score {event.score ?? 0}</span>
                  </div>
                ))
              ) : (
                <div className="rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-300">
                  NO ACTIVE PRIORITY ALERTS
                </div>
              )}
            </div>
            <button className="text-xs font-medium text-slate-400 hover:text-white">
              View All Alerts →
            </button>
          </div>
        </div>
      </section>
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

      {/* Main Content Grid */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-5 p-5 md:grid-cols-2 xl:grid-cols-12">
        {/* Live Feed Column */}
        <div className="rounded-xl border border-slate-800 bg-slate-900 xl:col-span-7">
          <div className="flex items-center justify-between border-b border-slate-800 p-5">
            <h2 className="text-lg font-semibold text-white">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
              LIVE SIGNAL FEED
            </h2>
            <div className="flex items-center gap-3">
              <button className="text-xs font-medium tracking-wider text-slate-400 hover:text-white">
                FILTERS
              </button>
              <Link
                href="/stream"
                className="rounded-md border border-slate-700 px-3 py-1 text-xs font-medium text-slate-200 hover:border-slate-600"
              >
                FULL CONSOLE →
              </Link>
            </div>
          </div>
          <div className="divide-y divide-slate-800/70">
            {liveEvents.slice(0, 8).map((event) => (
              <article
                key={event.id}
                className="p-4 transition-colors hover:bg-slate-900/50"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs uppercase tracking-wide text-slate-400">
                    {event.region}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-indigo-500/15 px-2 py-1 text-xs font-medium text-indigo-300">
                      Score {event.score ?? 0}
                    </span>
                    <span className="text-xs text-slate-500">{event.timeAgo}</span>
                  </div>
                </div>

                <h3 className="mt-2 text-base font-semibold">{event.title}</h3>

                <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-400">
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
                  <span>•</span>
                  <span>{event.sources?.[0] || "Source unavailable"}</span>
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

        {/* Bottom Row */}
        <div className="rounded-xl border border-slate-800 bg-slate-900 pb-5 xl:col-span-12">
          <div className="grid grid-cols-1 gap-5 p-5 xl:grid-cols-12">
            <div className="xl:col-span-7">
              <EntityActivityPanel events={liveEvents} />
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 xl:col-span-5">
              <div className="flex items-center justify-between border-b border-slate-800 p-5">
                <h2 className="text-lg font-semibold text-white">
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]"></span>
                  TREND SIGNALS
                </h2>
                <Link
                  href="/trends"
                  className="text-xs font-medium tracking-wider text-slate-400 hover:text-white"
                >
                  VIEW ALL →
                </Link>
              </div>
              <div className="divide-y divide-slate-800/70">
                {liveTrends.slice(0, 8).map((card) => (
                  <div
                    key={card.id}
                    className="p-4 transition-colors hover:bg-slate-900/50"
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
    </main>
  );
}
