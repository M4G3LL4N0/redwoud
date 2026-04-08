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

    if (!res.ok) {
      return [];
    }

    const data = await res.json();

    if (Array.isArray(data)) {
      return data as EventItem[];
    }

    if (Array.isArray(data?.events)) {
      return data.events as EventItem[];
    }

    return [];
  } catch {
    return [];
  }
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

function getWhyItMatters(event: EventItem) {
  if (event.summary && event.summary.length > 140) {
    return `${event.summary.slice(0, 140)}…`;
  }

  if (event.summary) return event.summary;

  return "Signal may affect regional stability, market posture, and strategic decision-making.";
}

function safeNumber(value: number | undefined, fallback = 0) {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

export default async function StreamPage() {
  const events = await getEvents();

  const sortedEvents = [...events].sort((a, b) => {
    const scoreDiff = safeNumber(b.score) - safeNumber(a.score);
    if (scoreDiff !== 0) return scoreDiff;

    return safeNumber(b.confidence) - safeNumber(a.confidence);
  });

  const prioritySignals = sortedEvents.slice(0, 4);
  const liveStream = sortedEvents.slice(4);

  const highRiskCount = sortedEvents.filter((event) => safeNumber(event.score) >= 80).length;

  const regionCounts = sortedEvents.reduce<Record<string, number>>((acc, event) => {
    const region = event.region || "Unattributed";
    acc[region] = (acc[region] || 0) + 1;
    return acc;
  }, {});

  const entityCounts = sortedEvents.reduce<Record<string, number>>((acc, event) => {
    const entity = event.entity || "Unknown Entity";
    acc[entity] = (acc[entity] || 0) + 1;
    return acc;
  }, {});

  const hotRegions = Object.entries(regionCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4);

  const hotEntities = Object.entries(entityCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const latestTimestamp = sortedEvents[0]?.timestamp
    ? formatTimestamp(sortedEvents[0].timestamp)
    : "No recent timestamp";

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-8 border-b border-slate-800 pb-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                </span>
                Live Operations Stream
              </div>

              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Real-time strategic intelligence console
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                Monitor live signals across regions, entities, and topics with a denser operational view
                of what matters now, what is escalating, and where attention is concentrating.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Signals</div>
                <div className="mt-2 text-2xl font-semibold text-white">{sortedEvents.length}</div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">High Risk</div>
                <div className="mt-2 text-2xl font-semibold text-white">{highRiskCount}</div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Hot Regions</div>
                <div className="mt-2 text-2xl font-semibold text-white">{hotRegions.length}</div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Last Update</div>
                <div className="mt-2 text-sm font-medium text-slate-200">{latestTimestamp}</div>
                <div className="mt-1 text-xs text-slate-500">UTC</div>
                <div className="mt-1 text-xs text-emerald-400">Live</div>
              </div>
            </div>
          </div>
        </header>

        <section className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">Priority Signals</h2>
              <p className="mt-1 text-sm text-slate-400">
                Highest-scoring and highest-confidence developments across the live stream.
              </p>
            </div>

            <Link
              href="/briefing"
              className="rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-300 transition hover:border-slate-700 hover:text-white"
            >
              Open briefing
            </Link>
          </div>

          {prioritySignals.length === 0 ? (
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-400">
              No live priority signals available yet.
            </div>
          ) : (
            <div className="grid gap-4 lg:grid-cols-2">
              {prioritySignals.map((event, index) => {
                const primarySource = event.sources?.[0];
                const tier = getSourceTier(primarySource);

                return (
                  <article
                    key={event.id ?? `${event.title}-${index}`}
                    className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl shadow-black/10"
                  >
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-slate-500">
                          <span>Priority</span>
                          {event.region ? <span>{event.region}</span> : null}
                          {event.topic ? <span>{event.topic}</span> : null}
                        </div>

                        <h3 className="text-lg font-semibold leading-6 text-white">{event.title}</h3>
                      </div>

                      <div className="rounded-2xl border border-rose-500/20 bg-rose-500/10 px-3 py-2 text-right">
                        <div className="text-[10px] uppercase tracking-[0.18em] text-rose-200/80">
                          Score
                        </div>
                        <div className="text-lg font-semibold text-rose-200">
                          {safeNumber(event.score)}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                      <span className="font-medium text-slate-200">{event.entity || "Unknown Entity"}</span>
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

                    <p className="mt-4 text-sm leading-6 text-slate-300">
                      {event.summary || "No summary available."}
                    </p>

                    <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-3">
                      <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                        Why this matters
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{getWhyItMatters(event)}</p>
                    </div>

                    <div className="mt-4 text-xs text-slate-500">
                      Updated {formatTimestamp(event.timestamp)}
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-white">Live Stream</h2>
              <p className="mt-1 text-sm text-slate-400">
                Continuous flow of normalized global signals across regions, entities, and themes.
              </p>
            </div>

            <div className="space-y-4">
              {(liveStream.length > 0 ? liveStream : sortedEvents).map((event, index) => {
                const primarySource = event.sources?.[0];
                const tier = getSourceTier(primarySource);

                return (
                  <article
                    key={event.id ?? `${event.title}-${index}`}
                    className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5"
                  >
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div className="min-w-0 flex-1">
                        <div className="mb-2 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-slate-500">
                          <span>{event.region || "Unattributed"}</span>
                          <span>•</span>
                          <span>{event.topic || "General"}</span>
                          <span>•</span>
                          <span>{formatTimestamp(event.timestamp)}</span>
                        </div>

                        <h3 className="text-lg font-medium leading-6 text-white">{event.title}</h3>

                        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                          <span className="font-medium text-slate-300">
                            {event.entity || "Unknown Entity"}
                          </span>
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

                        <p className="mt-3 text-sm leading-6 text-slate-300">
                          {event.summary || "No summary available."}
                        </p>

                        <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-3">
                          <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                            Analytical framing
                          </div>
                          <p className="mt-2 text-sm leading-6 text-slate-300">{getWhyItMatters(event)}</p>
                        </div>
                      </div>

                      <div className="grid min-w-[150px] grid-cols-2 gap-3 lg:grid-cols-1">
                        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
                          <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Score</div>
                          <div className="mt-2 text-xl font-semibold text-white">
                            {safeNumber(event.score)}
                          </div>
                        </div>

                        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
                          <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                            Confidence
                          </div>
                          <div className="mt-2 text-xl font-semibold text-white">
                            {safeNumber(event.confidence)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                Hot Regions
              </h3>
              <div className="mt-4 space-y-3">
                {hotRegions.length === 0 ? (
                  <p className="text-sm text-slate-500">No regional concentration detected.</p>
                ) : (
                  hotRegions.map(([region, count]) => (
                    <div
                      key={region}
                      className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/70 px-3 py-2"
                    >
                      <span className="text-sm text-slate-200">{region}</span>
                      <span className="text-xs text-slate-400">{count} signals</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                Active Entities
              </h3>
              <div className="mt-4 space-y-3">
                {hotEntities.length === 0 ? (
                  <p className="text-sm text-slate-500">No entity concentration detected.</p>
                ) : (
                  hotEntities.map(([entity, count]) => (
                    <div
                      key={entity}
                      className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/70 px-3 py-2"
                    >
                      <span className="text-sm text-slate-200">{entity}</span>
                      <span className="text-xs text-slate-400">{count} signals</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
