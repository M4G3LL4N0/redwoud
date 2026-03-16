import Link from "next/link";
import type { IntelligenceEvent } from "@/lib/mockData";
import StreamRefresh from "./StreamRefresh";

function slugify(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

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

export default async function StreamPage() {
  const events = await getLiveEvents();
  const topSignals = events.slice(0, 3);

  return (
    <StreamRefresh refreshInterval={60000}>
      <main className="min-h-screen bg-slate-950 text-slate-100">
        <section className="border-b border-slate-800">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Live Stream
            </p>
            <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-tight sm:text-6xl">
              Real-time global intelligence stream.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              REDWOUD monitors live public signals and normalizes them into structured intelligence
              events with score, confidence, entity context, and strategic framing.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 px-6 py-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Top Signals</h2>
                <span className="text-xs text-emerald-300">Updated live</span>
              </div>

              <div className="mt-5 space-y-4">
                {topSignals.length ? (
                  topSignals.map((event) => (
                    <article
                      key={event.id}
                      className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-xs uppercase tracking-wide text-slate-400">
                          {event.region}
                        </span>
                        <span className="rounded-full bg-rose-500/15 px-2 py-1 text-xs font-medium text-rose-300">
                          Score {event.score ?? 0}
                        </span>
                      </div>
                      <h3 className="mt-2 text-sm font-semibold text-slate-100">{event.title}</h3>
                      <p className="mt-2 text-xs text-slate-400">
                        {event.topic} •{" "}
                        <Link
                          href={`/entity/${slugify(event.entity)}`}
                          className="hover:text-slate-200 hover:underline"
                        >
                          {event.entity}
                        </Link>{" "}
                        • Confidence {event.confidence}
                      </p>
                    </article>
                  ))
                ) : (
                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-400">
                    No live events available yet.
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="rounded-xl border border-slate-800/50 bg-gradient-to-b from-slate-900/50 to-slate-900/30 p-5 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold tracking-tight text-slate-100">
                  Global Event Stream
                </h2>
                <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400/90">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                  </span>
                  {events.length} live events
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {events.length ? (
                  events.map((event) => (
                    <article
                      key={event.id}
                      className="rounded-lg border border-slate-800/50 bg-slate-950/60 p-4"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs font-medium uppercase tracking-wide text-slate-400/90">
                          {event.region}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="rounded-full bg-indigo-500/15 px-2 py-1 text-xs font-medium text-indigo-400">
                            Score {event.score ?? 0}
                          </span>
                          <span className="text-xs font-medium text-slate-500/90">
                            {event.timeAgo}
                          </span>
                        </div>
                      </div>

                      <h3 className="mt-3 text-base font-semibold tracking-tight text-slate-100">
                        {event.title}
                      </h3>

                      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400/90">
                        <span className="font-medium text-slate-300">{event.topic}</span>
                        <span>•</span>
                        <Link
                          href={`/entity/${slugify(event.entity)}`}
                          className="font-medium text-slate-300 hover:text-slate-100 hover:underline"
                        >
                          {event.entity}
                        </Link>
                        <span>•</span>
                        <span>Confidence {event.confidence}</span>
                        <span>•</span>
                        <span className="font-medium text-slate-300">
                          {event.sources?.[0] || "Source unavailable"}
                        </span>
                      </div>

                      <div className="mt-3 space-y-2">
                        <p className="text-sm leading-6 text-slate-300/90">
                          {event.summary}
                        </p>
                        <p className="text-xs leading-6 text-slate-400/90">
                          <span className="font-medium text-slate-300">
                            Strategic Context:
                          </span>{" "}
                          {event.whyItMatters}
                        </p>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="rounded-lg border border-slate-800/50 bg-slate-950/60 p-4 text-sm text-slate-400/90">
                    Live stream unavailable. Check the feed route or try again shortly.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </StreamRefresh>
  );
}
