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
      {/* Mission Frame */}
      <section className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-emerald-300">LIVE INTELLIGENCE LAYER</span>
            <span className="rounded-full bg-slate-800/50 px-2 py-1 text-xs font-medium text-slate-300">
              Verified Signals
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-medium tracking-tight">REDWOUD</h1>
          <p className="mt-1 text-xl text-slate-300">Live strategic intelligence layer</p>
          <p className="mt-2 max-w-2xl text-slate-400">
            Real-time synthesis of global signals across geopolitics, markets, and systems.
          </p>
        </div>
      </section>

      {/* System Metrics */}
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                Total Signals
              </p>
              <p className="mt-1 text-2xl font-semibold">{liveEvents.length}</p>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                High Risk
              </p>
              <p className="mt-1 text-2xl font-semibold">{highIntensitySignals}</p>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                Regions
              </p>
              <p className="mt-1 text-2xl font-semibold">{activeRegions.length}</p>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                Entities
              </p>
              <p className="mt-1 text-2xl font-semibold">
                {new Set(liveEvents.map((e) => e.entity)).size}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signal Clustering */}
      <section className="border-b border-slate-800 bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-6 inline-flex items-center gap-2">
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium tracking-wide text-emerald-300">
                  REDWOUD · REAL-TIME GLOBAL INTELLIGENCE
                </span>
                <span className="rounded-full bg-slate-800/50 px-2 py-1 text-xs font-medium text-slate-300">
                  Verified Sources
                </span>
                <span className="rounded-full bg-slate-800/50 px-2 py-1 text-xs font-medium text-slate-300">
                  Signal Integrity Monitoring
                </span>
              </div>

              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
                Mission Control for Strategic Intelligence
              </h1>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                Monitor, analyze, and act on live global signals with REDWOUD's operational dashboard.
                Track emerging risks, regional concentrations, and entity activity in real-time.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/stream"
                  className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-white/90"
                >
                  Open Live Stream
                </Link>
                <Link
                  href="/briefing"
                  className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 hover:border-slate-600 hover:text-white"
                >
                  Read Briefing
                </Link>
                <Link
                  href="/investors"
                  className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 hover:border-slate-600 hover:text-white"
                >
                  Investor Overview
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
                <h2 className="text-lg font-semibold">Operational Overview</h2>
                <p className="mt-2 text-sm text-slate-400">
                  Current signal concentration and risk posture
                </p>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                      Signal Volume
                    </div>
                    <div className="mt-2 text-2xl font-semibold text-white">{liveEvents.length}</div>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                      High Risk
                    </div>
                    <div className="mt-2 text-2xl font-semibold text-white">{highIntensitySignals}</div>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                      Active Regions
                    </div>
                    <div className="mt-2 text-2xl font-semibold text-white">{activeRegions.length}</div>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                      Entity Activity
                    </div>
                    <div className="mt-2 text-2xl font-semibold text-white">
                      {new Set(liveEvents.map((e) => e.entity)).size}
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

      {/* Priority Signals */}
      <section className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Escalating Now</h2>
            <Link href="/stream" className="text-sm text-emerald-300 hover:text-emerald-200">
              View full stream →
            </Link>
          </div>

          <div className="mt-4 space-y-4">
            {topAlerts.length ? (
              topAlerts.map((event) => (
                <div
                  key={event.id}
                  className="rounded-lg border border-slate-800 bg-slate-900/80 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-medium text-white">{event.title}</h3>
                      <div className="mt-1 flex items-center gap-2 text-sm text-slate-400">
                        <span>{event.entity}</span>
                        <span>•</span>
                        <span>{event.region}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="rounded-full bg-rose-500/15 px-2 py-1 text-xs font-medium text-rose-200">
                        Score {event.score ?? 0}
                      </span>
                      <div className="flex items-center gap-1 text-xs">
                        <span className="text-slate-500">
                          {typeof event.sources?.[0] === "string"
                            ? event.sources[0]
                            : event.sources?.[0]?.name || "Unknown source"}
                        </span>
                        {event.sources?.[0]?.tier && (
                          <span className={[
                            "rounded-full px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider",
                            event.sources?.[0]?.tier === "premium" 
                              ? "bg-amber-500/15 text-amber-300"
                              : event.sources?.[0]?.tier === "verified"
                                ? "bg-emerald-500/15 text-emerald-300"
                                : "bg-slate-700/20 text-slate-400"
                          ].join(" ")}>
                            {event.sources?.[0]?.tier}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-4 text-sm text-slate-400">
                No high-priority alerts currently surfaced
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800 bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Signal Clusters</h2>
            <p className="text-sm text-slate-400">Live signal concentration analysis</p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(() => {
              // Calculate clusters
              const totalSignals = liveEvents.length;
              const regionCounts = new Map<string, number>();
              const topicCounts = new Map<string, number>();
              const entityCounts = new Map<string, number>();

              liveEvents.forEach(event => {
                regionCounts.set(event.region, (regionCounts.get(event.region) || 0) + 1);
                topicCounts.set(event.topic, (topicCounts.get(event.topic) || 0) + 1);
                entityCounts.set(event.entity, (entityCounts.get(event.entity) || 0) + 1);
              });

              // Get top clusters
              const topRegions = Array.from(regionCounts.entries())
                .filter(([_, count]) => count / totalSignals > 0.2)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 3);

              const topTopics = Array.from(topicCounts.entries())
                .filter(([_, count]) => count / totalSignals > 0.15)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 3);

              const topEntities = Array.from(entityCounts.entries())
                .filter(([_, count]) => count / totalSignals > 0.1)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 3);

              const clusters = [
                ...topRegions.map(([region, count]) => ({
                  type: 'Region',
                  name: region,
                  count,
                  percent: Math.round((count / totalSignals) * 100),
                  events: liveEvents.filter(e => e.region === region).slice(0, 3)
                })),
                ...topTopics.map(([topic, count]) => ({
                  type: 'Topic',
                  name: topic,
                  count,
                  percent: Math.round((count / totalSignals) * 100),
                  events: liveEvents.filter(e => e.topic === topic).slice(0, 3)
                })),
                ...topEntities.map(([entity, count]) => ({
                  type: 'Entity',
                  name: entity,
                  count,
                  percent: Math.round((count / totalSignals) * 100),
                  events: liveEvents.filter(e => e.entity === entity).slice(0, 3)
                }))
              ].sort((a, b) => b.count - a.count);

              return clusters.map((cluster, i) => (
                <div
                  key={`${cluster.type}-${cluster.name}`}
                  className="group relative overflow-hidden rounded-2xl border border-slate-800/50 bg-gradient-to-b from-slate-900/50 to-slate-950/80 p-5 hover:border-slate-700/50"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      {cluster.type}
                    </span>
                    <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs font-medium text-emerald-300">
                      {cluster.percent}%
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">{cluster.name}</h3>
                  <p className="mt-1 text-sm text-slate-300">
                    {cluster.count} signals clustered
                  </p>

                  <div className="mt-4 space-y-2">
                    {cluster.events.map((event) => (
                      <div
                        key={event.id}
                        className="rounded-lg border border-slate-800/50 bg-slate-950/60 p-2 text-sm"
                      >
                        <p className="truncate font-medium">{event.title}</p>
                        <p className="text-xs text-slate-400">{event.timeAgo}</p>
                      </div>
                    ))}
                  </div>

                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-slate-800/20 to-slate-900/50 opacity-50 transition-all group-hover:opacity-100" />
                  <div className="absolute -left-8 -bottom-8 h-24 w-24 rounded-full bg-gradient-to-br from-slate-800/20 to-slate-900/50 opacity-50 transition-all group-hover:opacity-100" />
                </div>
              ));
            })()}
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
                className={[
                  "rounded-xl border p-4 transition-all hover:border-slate-700",
                  event.intensity === "high"
                    ? "border-rose-800/30 bg-gradient-to-b from-rose-950/20 to-slate-950/80"
                    : "border-slate-800/50 bg-slate-950/60",
                ].join(" ")}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs uppercase tracking-wide text-slate-400">
                    {event.region}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-indigo-500/15 px-2 py-1 text-xs font-medium text-indigo-300">
                        Score {event.score ?? 0}
                      </span>
                      <span className={[
                        "rounded-full px-2 py-1 text-xs font-medium",
                        event.confidence === "high"
                          ? "bg-emerald-500/15 text-emerald-300"
                          : event.confidence === "medium"
                            ? "bg-amber-500/15 text-amber-300"
                            : "bg-slate-700/20 text-slate-400"
                      ].join(" ")}>
                        Confidence {event.confidence}
                      </span>
                    </div>
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
                  <div className="flex items-center gap-1">
                    <span>
                      {typeof event.sources?.[0] === "string"
                        ? event.sources[0]
                        : event.sources?.[0]?.name || "Source unavailable"}
                    </span>
                    {event.sources?.[0]?.tier && (
                      <span className={[
                        "rounded-full px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider",
                        event.sources?.[0]?.tier === "premium" 
                          ? "bg-amber-500/15 text-amber-300"
                          : event.sources?.[0]?.tier === "verified"
                            ? "bg-emerald-500/15 text-emerald-300"
                            : "bg-slate-700/20 text-slate-400"
                      ].join(" ")}>
                        {event.sources?.[0]?.tier}
                      </span>
                    )}
                  </div>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-300">{event.summary}</p>

                <div className="mt-3 rounded-lg border border-slate-800 bg-slate-950/60 p-3">
                  <p className="text-xs leading-6 text-slate-400">
                    <span className="font-medium text-slate-300">Why this matters:</span>{" "}
                    {event.whyItMatters}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-6 lg:col-span-5">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <DailyBriefingSection briefing={liveBriefing} />
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <h2 className="text-lg font-semibold">Entity Activity</h2>
            <p className="mt-1 text-sm text-slate-400">Most active entities in current signals</p>

            <div className="mt-4 space-y-3">
              {Array.from(new Set(liveEvents.map((e) => e.entity)))
                .slice(0, 5)
                .map((entity) => (
                  <div
                    key={entity}
                    className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2"
                  >
                    <span className="text-sm text-slate-200">{entity}</span>
                    <span className="text-xs text-slate-400">
                      {liveEvents.filter((e) => e.entity === entity).length} signals
                    </span>
                  </div>
                ))}
            </div>
          </div>
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
