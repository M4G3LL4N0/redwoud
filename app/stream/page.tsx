import StreamRefresh from "./StreamRefresh";
import type { IntelligenceEvent } from "@/lib/mockData";

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

    if (!response.ok) {
      return [];
    }

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
                          {event.intensity}
                        </span>
                      </div>
                      <h3 className="mt-2 text-sm font-semibold text-slate-100">{event.title}</h3>
                      <p className="mt-2 text-xs text-slate-400">
                        {event.topic} • {event.entity} • Confidence {event.confidence}
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
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Global Event Stream</h2>
                <span className="text-xs text-slate-400">{events.length} events</span>
              </div>

              <div className="mt-5 space-y-4">
                {events.length ? (
                  events.map((event) => (
                    <article
                      key={event.id}
                      className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs uppercase tracking-wide text-slate-400">
                          {event.region}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-500">{event.timeAgo}</span>
                          <span className="rounded-full bg-sky-500/15 px-2 py-1 text-xs font-medium text-sky-300">
                            {event.intensity}
                          </span>
                        </div>
                      </div>

                      <h3 className="mt-2 text-base font-semibold">{event.title}</h3>

                      <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-400">
                        <span>{event.topic}</span>
                        <span>•</span>
                        <span>{event.entity}</span>
                        <span>•</span>
                        <span>Confidence {event.confidence}</span>
                      </div>

                      <p className="mt-3 text-sm leading-6 text-slate-300">{event.summary}</p>

                      <p className="mt-3 text-xs leading-6 text-slate-400">
                        <span className="font-medium text-slate-300">Why this matters:</span>{" "}
                        {event.whyItMatters}
                      </p>
                    </article>
                  ))
                ) : (
                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-400">
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
