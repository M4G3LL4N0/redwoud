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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_40%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.12),_transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-emerald-300/90 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Global Intelligence Operating System
            </div>

            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">Decision advantage</span><br />
              at the speed of threat
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300/90 sm:text-xl">
              REDWOUD delivers <span className="font-medium text-emerald-300">real-time strategic clarity</span> by fusing multi-source intelligence into actionable insights with machine precision.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/stream"
                className="group relative rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-6 py-3.5 text-sm font-medium text-emerald-100 transition-all hover:border-emerald-400/60 hover:bg-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/10"
              >
                <span className="relative z-10">Open Intelligence Stream</span>
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
              <Link
                href="/briefing"
                className="group relative rounded-2xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-medium text-slate-200 transition-all hover:border-slate-600 hover:bg-slate-800/80 hover:text-white"
              >
                <span className="relative z-10">View Executive Briefing</span>
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-800/30 to-slate-900/30 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Network Coverage</div>
              <div className="mt-3 text-3xl font-semibold text-white">{sortedEvents.length || 0}</div>
              <p className="mt-2 text-sm text-slate-400">Active normalized signals in current live flow</p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">High Risk Signals</div>
              <div className="mt-3 text-3xl font-semibold text-white">{highRiskCount}</div>
              <p className="mt-2 text-sm text-slate-400">Signals with score ≥80 requiring immediate review</p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Regions Active</div>
              <div className="mt-3 text-3xl font-semibold text-white">{topRegions.length}</div>
              <p className="mt-2 text-sm text-slate-400">Geopolitical hotspots under monitoring</p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Signal Velocity</div>
              <div className="mt-3 text-3xl font-semibold text-white">
                {Math.round(sortedEvents.length / 24)}/hr
              </div>
              <p className="mt-2 text-sm text-slate-400">Average ingestion rate last 24 hours</p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Source Diversity</div>
              <div className="mt-3 text-3xl font-semibold text-white">
                {new Set(sortedEvents.flatMap(e => e.sources?.map(s => typeof s === 'string' ? s : s.name) || [])).size}
              </div>
              <p className="mt-2 text-sm text-slate-400">Unique intelligence sources in network</p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Confidence Level</div>
              <div className="mt-3 text-3xl font-semibold text-white">
                {Math.round(average(sortedEvents.map(e => safeNumber(e.confidence))))}%
              </div>
              <p className="mt-2 text-sm text-slate-400">Average signal confidence score</p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Thematic Spread</div>
              <div className="mt-3 text-3xl font-semibold text-white">{topTopics.length}</div>
              <p className="mt-2 text-sm text-slate-400">Key thematic clusters identified</p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Last Update</div>
              <div className="mt-3 text-lg font-semibold text-white">{latestTimestamp}</div>
              <p className="mt-2 text-sm text-slate-400">Most recent signal ingested into the live layer</p>
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
            <div className="text-emerald-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <path d="M3.27 6.96 12 12.01l8.73-5.05" />
                <path d="M12 22.08V12" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">Multi-Source Fusion</h3>
            <p className="mt-2 text-sm text-slate-400">
              Automated ingestion from 200+ premium intelligence sources with real-time normalization
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur">
            <div className="text-amber-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4" />
                <path d="m16.24 7.76 2.83-2.83" />
                <path d="M18 12h4" />
                <path d="m16.24 16.24 2.83 2.83" />
                <path d="M12 18v4" />
                <path d="m4.93 19.07 2.83-2.83" />
                <path d="M2 12h4" />
                <path d="m4.93 4.93 2.83 2.83" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">Real-Time Processing</h3>
            <p className="mt-2 text-sm text-slate-400">
              Sub-90 second processing latency from source ingestion to operational intelligence
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur">
            <div className="text-violet-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">Machine-Augmented Analysis</h3>
            <p className="mt-2 text-sm text-slate-400">
              Proprietary algorithms score and cluster signals by strategic impact and confidence
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur">
            <div className="text-cyan-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4" />
                <path d="m16.24 7.76 2.83-2.83" />
                <path d="M18 12h4" />
                <path d="m16.24 16.24 2.83 2.83" />
                <path d="M12 18v4" />
                <path d="m4.93 19.07 2.83-2.83" />
                <path d="M2 12h4" />
                <path d="m4.93 4.93 2.83 2.83" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">Decision Workflows</h3>
            <p className="mt-2 text-sm text-slate-400">
              Integrated tools for rapid assessment, collaboration and response planning
            </p>
          </div>
        </div>
      </section>

      {/* Supporting Evidence Section */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur">
          <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Operational Impact</div>
          <h2 className="mt-2 text-3xl font-semibold text-white">Trusted by strategic decision-makers</h2>
          
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <blockquote className="text-lg leading-relaxed text-slate-300">
                "REDWOUD gives us a 12-18 hour decision advantage on emerging geopolitical risks."
              </blockquote>
              <div className="mt-4 text-sm font-medium text-slate-400">
                — Global Head of Intelligence, Fortune 50 Corporation
              </div>
            </div>
            
            <div>
              <blockquote className="text-lg leading-relaxed text-slate-300">
                "The normalization engine alone has reduced our analyst workload by 60%."
              </blockquote>
              <div className="mt-4 text-sm font-medium text-slate-400">
                — Chief Risk Officer, Investment Bank
              </div>
            </div>
            
            <div>
              <blockquote className="text-lg leading-relaxed text-slate-300">
                "We've prevented three major supply chain disruptions using REDWOUD's early signals."
              </blockquote>
              <div className="mt-4 text-sm font-medium text-slate-400">
                — VP Global Operations, Manufacturing Conglomerate
              </div>
            </div>
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
