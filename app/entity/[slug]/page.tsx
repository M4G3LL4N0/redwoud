import Link from "next/link";
import { notFound } from "next/navigation";
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

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
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

function decodeSlug(slug: string) {
  return decodeURIComponent(slug)
    .replace(/-/g, " ")
    .trim();
}

function normalizeText(value?: string) {
  return (value || "").trim().toLowerCase();
}

function safeNumber(value: number | undefined, fallback = 0) {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function average(values: number[]) {
  if (!values.length) return 0;
  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
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

function getDistribution(items: Array<string | undefined>) {
  const counts = items.reduce<Record<string, number>>((acc, item) => {
    const key = item?.trim() || "Unattributed";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(counts).sort((a, b) => b[1] - a[1]);
}

function getExecutiveSummary(
  entityName: string,
  totalSignals: number,
  avgScore: number,
  avgConfidence: number,
  topRegion?: string,
  topTopic?: string
) {
  const activityLevel =
    totalSignals >= 8 ? "high" : totalSignals >= 4 ? "elevated" : totalSignals >= 2 ? "active" : "light";

  const scoreState =
    avgScore >= 80 ? "high-risk" : avgScore >= 65 ? "elevated-risk" : avgScore >= 45 ? "moderate-risk" : "lower-risk";

  const confidenceState =
    avgConfidence >= 80
      ? "high-conviction"
      : avgConfidence >= 65
        ? "credible"
        : avgConfidence >= 45
          ? "developing"
          : "early-stage";

  const regionText = topRegion ? `Signal concentration is strongest in ${topRegion}.` : "";
  const topicText = topTopic ? `The dominant thematic association is ${topTopic}.` : "";

  return `${entityName} is showing ${activityLevel} activity across the live intelligence stream, with a ${scoreState} profile and ${confidenceState} signal quality. ${regionText} ${topicText}`.trim();
}

export default async function EntityPage({ params }: PageProps) {
  const { slug } = await params;
  const entityName = decodeSlug(slug);

  const events = await getEvents();

  const entityEvents = events
    .filter((event) => normalizeText(event.entity) === normalizeText(entityName))
    .sort((a, b) => {
      const scoreDiff = safeNumber(b.score) - safeNumber(a.score);
      if (scoreDiff !== 0) return scoreDiff;
      return safeNumber(b.confidence) - safeNumber(a.confidence);
    });

  if (!entityEvents.length) {
    notFound();
  }

  const totalSignals = entityEvents.length;
  const avgScore = average(entityEvents.map((event) => safeNumber(event.score)));
  const avgConfidence = average(entityEvents.map((event) => safeNumber(event.confidence)));

  const regionDistribution = getDistribution(entityEvents.map((event) => event.region));
  const topicDistribution = getDistribution(entityEvents.map((event) => event.topic));

  const regionsActive = regionDistribution.length;
  const topicsActive = topicDistribution.length;

  const topRegion = regionDistribution[0]?.[0];
  const topTopic = topicDistribution[0]?.[0];

  const executiveSummary = getExecutiveSummary(
    entityName,
    totalSignals,
    avgScore,
    avgConfidence,
    topRegion,
    topTopic
  );

  const topRegions = regionDistribution.slice(0, 5);
  const topTopics = topicDistribution.slice(0, 5);
  const strongestSignals = entityEvents.slice(0, 6);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900/30">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400">
                Intelligence Dossier
              </div>
              <div className="mt-1 text-xs text-slate-500">
                Analytical profile compiled from live intelligence stream
              </div>

              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {entityName}
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                {executiveSummary}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                {topRegion ? <span>{topRegion}</span> : null}
                {topRegion && topTopic ? <span>•</span> : null}
                {topTopic ? <span>{topTopic}</span> : null}
                {(topRegion || topTopic) ? <span>•</span> : null}
                <span>{totalSignals} total signals</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/stream"
                className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-300 transition hover:border-slate-700 hover:text-white"
              >
                Back to stream
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Total Signals</div>
              <div className="mt-2 text-2xl font-semibold text-white">{totalSignals}</div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Average Score</div>
              <div className="mt-2 text-2xl font-semibold text-white">{avgScore}</div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Average Confidence</div>
              <div className="mt-2 text-2xl font-semibold text-white">{avgConfidence}</div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Regions Active</div>
              <div className="mt-2 text-2xl font-semibold text-white">{regionsActive}</div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Topics Active</div>
              <div className="mt-2 text-2xl font-semibold text-white">{topicsActive}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-white">Analytical Assessment</h2>
              <p className="mt-1 text-sm text-slate-400">
                Current intelligence assessment derived from live signal analysis.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-slate-500">
                <span>Assessment</span>
                <span>•</span>
                <span>Live Intelligence</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-300">{executiveSummary}</p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-white">Evidence Items</h2>
              <p className="mt-1 text-sm text-slate-400">
                Verified intelligence signals associated with this entity.
              </p>
            </div>

            <div className="space-y-4">
              {strongestSignals.map((event, index) => {
                const primarySource = event.sources?.[0];
                const tier = getSourceTier(primarySource);

                return (
                  <article
                    key={event.id ?? `${event.title}-${index}`}
                    className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
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
                          <span className="font-medium text-slate-300">{getSourceName(primarySource)}</span>
                          {tier ? (
                            <span
                              className={`rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] ${getTierClasses(
                                tier
                              )}`}
                            >
                              {tier} source
                            </span>
                          ) : null}
                          <span>•</span>
                          <span>Verified intelligence</span>
                        </div>

                        <div className="mt-4">
                          <p className="text-sm leading-6 text-slate-300">
                            {event.summary || "No summary available."}
                          </p>
                        </div>
                      </div>

                      <div className="grid min-w-[150px] grid-cols-2 gap-3 lg:grid-cols-1">
                        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
                          <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Score</div>
                          <div className="mt-2 text-xl font-semibold text-white">{safeNumber(event.score)}</div>
                        </div>

                        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
                          <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Confidence</div>
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
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-lg font-semibold text-white">Regional Distribution</h2>
            <p className="mt-1 text-sm text-slate-400">
              Geographic concentration of associated signals.
            </p>
            <div className="mt-4 space-y-3">
              {topRegions.length === 0 ? (
                <p className="text-sm text-slate-500">No regional concentration detected.</p>
              ) : (
                topRegions.map(([region, count]) => {
                  const width = `${Math.max(18, Math.round((count / totalSignals) * 100))}%`;

                  return (
                    <div key={region} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-200">{region}</span>
                        <span className="text-slate-400">{count}</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800">
                        <div className="h-2 rounded-full bg-slate-300/70" style={{ width }} />
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-lg font-semibold text-white">Thematic Distribution</h2>
            <p className="mt-1 text-sm text-slate-400">
              Dominant themes across associated signals.
            </p>
            <div className="mt-4 space-y-3">
              {topTopics.length === 0 ? (
                <p className="text-sm text-slate-500">No topical concentration detected.</p>
              ) : (
                topTopics.map(([topic, count]) => {
                  const width = `${Math.max(18, Math.round((count / totalSignals) * 100))}%`;

                  return (
                    <div key={topic} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-200">{topic}</span>
                        <span className="text-slate-400">{count}</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800">
                        <div className="h-2 rounded-full bg-slate-300/70" style={{ width }} />
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
