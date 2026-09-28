import Link from "next/link";
import { getSourceName } from "@/lib/utils";
import type { EventSource } from "@/lib/types";

type EventItem = {
  id?: string | number;
  title: string;
  summary?: string;
  entity?: string;
  region?: string;
  topic?: string;
  score?: number;
  confidence?: number;
  timestamp?: string;
  sources?: Array<string | EventSource>;
};

async function getEvents(): Promise<EventItem[]> {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_APP_URL?.startsWith("http")
        ? process.env.NEXT_PUBLIC_APP_URL
        : process.env.NEXT_PUBLIC_APP_URL
          ? `https://${process.env.NEXT_PUBLIC_APP_URL}`
          : "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/feed`, {
      cache: "no-store",
    });

    if (!res.ok) return [];

    const data = await res.json();

    if (Array.isArray(data)) return data as EventItem[];
    if (Array.isArray(data?.events)) return data.events as EventItem[];

    return [];
  } catch {
    return [];
  }
}

function safeNumber(value: number | undefined, fallback = 0) {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function average(values: number[]): number {
  if (!values || values.length === 0) return 0;
  const sum = values.reduce((acc, v) => acc + (Number.isFinite(v) ? v : 0), 0);
  return sum / values.length;
}


function formatTimestamp(timestamp?: string) {
  if (!timestamp) return "Time unavailable";

  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) return "Time unavailable";

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function getSourceTier(source?: string | EventSource) {
  if (!source || typeof source === "string") return null;
  return source.tier;
}

function getTierClasses(tier: EventSource["tier"] | null) {
  switch (tier) {
    case "premium":
      return "border-amber-500/30 bg-amber-500/10 text-amber-200";
    case "verified":
      return "border-emerald-500/30 bg-emerald-500/10 text-emerald-200";
    case "standard":
      return "border-slate-700 bg-slate-800/80 text-slate-300";
    default:
      return "border-slate-700 bg-slate-900 text-slate-400";
  }
}

function getCountMap(values: Array<string | undefined>, fallback: string) {
  return values.reduce<Record<string, number>>((acc, value) => {
    const key = value?.trim() || fallback;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

export default async function HomePage() {
  const events = await getEvents();

  const sortedEvents = [...events].sort((a, b) => {
    const scoreDiff = safeNumber(b.score) - safeNumber(a.score);
    if (scoreDiff !== 0) return scoreDiff;
    return safeNumber(b.confidence) - safeNumber(a.confidence);
  });

  const prioritySignals = sortedEvents.slice(0, 4);
  const latestSignals = sortedEvents.slice(0, 6);

  const highRiskCount = sortedEvents.filter((event) => safeNumber(event.score) >= 80).length;

  const regionMap = getCountMap(
    sortedEvents.map((event) => event.region),
    "Unattributed"
  );
  const entityMap = getCountMap(
    sortedEvents.map((event) => event.entity),
    "Unknown Entity"
  );
  const topicMap = getCountMap(
    sortedEvents.map((event) => event.topic),
    "General"
  );

  const topRegions = Object.entries(regionMap).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const topEntities = Object.entries(entityMap).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const topTopics = Object.entries(topicMap).sort((a, b) => b[1] - a[1]).slice(0, 5);

  const latestTimestamp = sortedEvents[0]?.timestamp
    ? formatTimestamp(sortedEvents[0].timestamp)
    : "No recent timestamp";

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-900/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_40%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.12),_transparent_30%)] animate-[pulse_10s_ease-in-out_infinite]" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-32 lg:py-36">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-emerald-300/90 backdrop-blur hover:bg-emerald-500/20 transition-all">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Global Intelligence Operating System
            </div>

            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">The live strategic intelligence layer</span>
              <span className="mt-2 block text-white">for a noisy world.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-300/90">
              REDWOUD ingests public global signals, fuses entity–region–topic context, and surfaces mission-control dashboards — not a news feed, not a generic SaaS grid.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/stream"
                className="group relative rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-6 py-3.5 text-sm font-medium text-emerald-100 transition-all hover:border-emerald-400/60 hover:bg-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-0.5 hover:scale-[1.02]"
              >
                <span className="relative z-10">Monitor Live Threats</span>
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
              <Link
                href="/briefing"
                className="group relative rounded-2xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-medium text-slate-200 transition-all hover:border-slate-600 hover:bg-slate-800/80 hover:text-white hover:-translate-y-0.5 hover:scale-[1.02]"
              >
                <span className="relative z-10">Get Strategic Analysis</span>
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-800/40 to-slate-900/40 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
              <Link
                href="/demo"
                className="rounded-2xl border border-rose-400/40 bg-rose-400/10 px-6 py-3.5 text-sm font-medium text-rose-100 transition hover:bg-rose-400/15"
              >
                Intel brief demo
              </Link>
            </div>
          </div>

          <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur hover:bg-slate-900/70 transition-all">
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Events in this window</div>
              <div className="mt-3 text-3xl font-semibold text-white">{sortedEvents.length || 0}</div>
              <p className="mt-2 text-sm text-slate-400">Normalized items from `/api/feed` when the feed is up; empty if it is not.</p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">High-score items</div>
              <div className="mt-3 text-3xl font-semibold text-white">{highRiskCount}</div>
              <p className="mt-2 text-sm text-slate-400">Items in this window with score ≥80. Score is a ranking field, not a live risk claim.</p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Regions in window</div>
              <div className="mt-3 text-3xl font-semibold text-white">{topRegions.length}</div>
              <p className="mt-2 text-sm text-slate-400">Distinct region labels on the current event set.</p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Source labels</div>
              <div className="mt-3 text-3xl font-semibold text-white">
                {new Set(sortedEvents.flatMap(e => e.sources?.map(s => typeof s === 'string' ? s : s.name) || [])).size}
              </div>
              <p className="mt-2 text-sm text-slate-400">Unique source names attached to this window.</p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Mean confidence</div>
              <div className="mt-3 text-3xl font-semibold text-white">
                {sortedEvents.length ? `${Math.round(average(sortedEvents.map(e => safeNumber(e.confidence))))}` : "—"}
              </div>
              <p className="mt-2 text-sm text-slate-400">Average of the confidence field on current events. Blank when the feed is empty.</p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Topics in window</div>
              <div className="mt-3 text-3xl font-semibold text-white">{topTopics.length}</div>
              <p className="mt-2 text-sm text-slate-400">Distinct topic labels on the current event set.</p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur sm:col-span-2">
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Latest timestamp</div>
              <div className="mt-3 text-lg font-semibold text-white">{latestTimestamp}</div>
              <p className="mt-2 text-sm text-slate-400">Most recent timestamp in this window, or unavailable if the feed did not return events.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Escalating Now</div>
            <h2 className="mt-2 text-3xl font-semibold text-white">Priority signal snapshot</h2>
          </div>
          <Link href="/stream" className="text-sm text-slate-300 transition hover:text-white">
            View full stream
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {prioritySignals.length === 0 ? (
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-400">
              No live signals available yet.
            </div>
          ) : (
            prioritySignals.map((event, index) => {
              const primarySource = event.sources?.[0];
              const tier = getSourceTier(primarySource);

              return (
                <article
                  key={event.id ?? `${event.title}-${index}`}
                  className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur"
                >
                  <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-slate-500">
                    <span>{event.region || "Unattributed"}</span>
                    <span>•</span>
                    <span>{event.topic || "General"}</span>
                  </div>

                  <h3 className="text-xl font-semibold leading-7 text-white">{event.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {event.summary || "No summary available."}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                    <span className="font-medium text-slate-200">
                      {event.entity || "Unknown Entity"}
                    </span>
                    <span>•</span>
                    <span>Score {safeNumber(event.score)}</span>
                    <span>•</span>
                    <span>Confidence {safeNumber(event.confidence)}</span>
                    <span>•</span>
                    <span>{getSourceName(primarySource)}</span>
                    {tier ? (
                      <span
                        className={`rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] ${getTierClasses(
                          tier
                        )}`}
                      >
                        {tier}
                      </span>
                    ) : null}
                  </div>
                </article>
              );
            })
          )}
        </div>
      </section>

      {/* Platform Capabilities Section */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8">
          <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Strategic Advantage</div>
          <h2 className="mt-2 text-3xl font-semibold text-white">The REDWOUD Intelligence Platform</h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            Our proprietary architecture delivers decision advantage through multi-source fusion,
            real-time normalization, and machine-augmented analysis at scale.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold text-white">Normalize</h3>
            <p className="mt-2 text-sm text-slate-400">
              Public signals become event objects: entity, region, topic, score, confidence, and source labels.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold text-white">Prioritize</h3>
            <p className="mt-2 text-sm text-slate-400">
              The stream ranks the current window so analysts read the highest-score items first.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold text-white">Prove</h3>
            <p className="mt-2 text-sm text-slate-400">
              Cards keep source names, tiers, and timestamps. This is structured public context, not classified reporting.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold text-white">Operate</h3>
            <p className="mt-2 text-sm text-slate-400">
              Routes match the work: stream, briefing, alerts, trends, and entity dossiers.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
            <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Signal Concentration</div>
            <h2 className="mt-2 text-3xl font-semibold text-white">Where activity is clustering</h2>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Top Regions
                </h3>
                <div className="mt-4 space-y-3">
                  {topRegions.map(([region, count]) => (
                    <div key={region} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-200">{region}</span>
                        <span className="text-slate-400">{count}</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800">
                        <div
                          className="h-2 rounded-full bg-cyan-400/70"
                          style={{
                            width: `${Math.max(
                              18,
                              Math.round((count / Math.max(sortedEvents.length, 1)) * 100)
                            )}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Top Entities
                </h3>
                <div className="mt-4 space-y-3">
                  {topEntities.map(([entity, count]) => (
                    <div key={entity} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-200">{entity}</span>
                        <span className="text-slate-400">{count}</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800">
                        <div
                          className="h-2 rounded-full bg-emerald-400/70"
                          style={{
                            width: `${Math.max(
                              18,
                              Math.round((count / Math.max(sortedEvents.length, 1)) * 100)
                            )}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Top Topics
                </h3>
                <div className="mt-4 space-y-3">
                  {topTopics.map(([topic, count]) => (
                    <div key={topic} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-200">{topic}</span>
                        <span className="text-slate-400">{count}</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800">
                        <div
                          className="h-2 rounded-full bg-violet-400/70"
                          style={{
                            width: `${Math.max(
                              18,
                              Math.round((count / Math.max(sortedEvents.length, 1)) * 100)
                            )}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
            <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Latest Signals</div>
            <h2 className="mt-2 text-2xl font-semibold text-white">Recent flow</h2>

            <div className="mt-6 space-y-4">
              {latestSignals.length === 0 ? (
                <div className="text-sm text-slate-400">No recent signals available.</div>
              ) : (
                latestSignals.map((event, index) => (
                  <article
                    key={event.id ?? `${event.title}-${index}`}
                    className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4"
                  >
                    <div className="mb-2 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-slate-500">
                      <span>{event.region || "Unattributed"}</span>
                      <span>•</span>
                      <span>{event.topic || "General"}</span>
                      <span>•</span>
                      <span>{formatTimestamp(event.timestamp)}</span>
                    </div>

                    <h3 className="text-base font-semibold text-white">{event.title}</h3>

                    <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                      <span>{event.entity || "Unknown Entity"}</span>
                      <span>•</span>
                      <span>Score {safeNumber(event.score)}</span>
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
