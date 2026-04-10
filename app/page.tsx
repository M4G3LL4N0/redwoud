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
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900/70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.10),_transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Global Intelligence Operating System
            </div>

            <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Command-level intelligence at decision speed.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              REDWOUD transforms global complexity into structured advantage through real-time
              intelligence normalization, fusion, and operationalization.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/stream"
                className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 text-sm font-medium text-emerald-200 transition hover:border-emerald-400/50 hover:bg-emerald-500/15"
              >
                Open Stream
              </Link>
              <Link
                href="/briefing"
                className="rounded-2xl border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-600 hover:text-white"
              >
                Read Briefing
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Network Coverage</div>
              <div className="mt-3 text-3xl font-semibold text-white">{sortedEvents.length || 0}</div>
              <p className="mt-2 text-sm text-slate-400">Active normalized signals in current live flow</p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">High Risk Signals</div>
              <div className="mt-3 text-3xl font-semibold text-white">{highRiskCount}</div>
              <p className="mt-2 text-sm text-slate-400">Signals with elevated operational significance</p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Regions Active</div>
              <div className="mt-3 text-3xl font-semibold text-white">{topRegions.length}</div>
              <p className="mt-2 text-sm text-slate-400">Concentrated regional activity clusters</p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Last Update</div>
              <div className="mt-3 text-lg font-semibold text-white">{latestTimestamp}</div>
              <p className="mt-2 text-sm text-slate-400">Most recent signal ingested into the live layer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
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

      <section className="mx-auto max-w-7xl px-6 pb-12">
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
