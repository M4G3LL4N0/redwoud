import type { IntelligenceEvent } from "@/lib/mockData";

interface EventFeedProps {
  events: IntelligenceEvent[];
}

export function EventFeed({ events }: EventFeedProps) {
  return (
    <section className="rw-card flex flex-col overflow-hidden">
      <header className="flex items-center justify-between border-b border-rw-border/80 px-4 py-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Live event feed
          </p>
          <p className="mt-1 text-xs text-slate-400">
            AI-normalized events from global data, news, and signals.
          </p>
        </div>
        <span className="rw-chip">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          {events.length} surfaced now
        </span>
      </header>
      <div className="divide-y divide-rw-border/70">
        {events.map((event) => (
          <article
            key={event.id}
            className="flex gap-3 px-4 py-3.5 hover:bg-slate-800/50 transition-colors"
          >
            <div className="mt-1 flex flex-col items-center gap-2">
              <span
                className={[
                  "h-1.5 w-1.5 rounded-full",
                  event.intensity === "high"
                    ? "bg-rose-400"
                    : event.intensity === "medium"
                    ? "bg-amber-300"
                    : "bg-emerald-400",
                ].join(" ")}
              />
              <span className="h-10 w-px bg-gradient-to-b from-slate-600/60 via-slate-700/20 to-transparent" />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <h3 className="text-[0.86rem] font-medium text-slate-50">
                  {event.title}
                </h3>
                <span className="text-[10px] text-slate-400">
                  {event.timeAgo}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 text-[10px]">
                <span className="rw-pill-muted">{event.region}</span>
                <span className="rw-pill-muted">{event.topic}</span>
                <span className="rw-pill-muted">
                  Intensity{" "}
                  <span
                    className={
                      event.intensity === "high"
                        ? "text-rose-300"
                        : event.intensity === "medium"
                        ? "text-amber-200"
                        : "text-emerald-300"
                    }
                  >
                    {event.intensity}
                  </span>
                </span>
                <span className="rw-pill-muted">
                  Confidence{" "}
                  <span
                    className={
                      event.confidence === "high"
                        ? "text-emerald-300"
                        : event.confidence === "medium"
                        ? "text-amber-200"
                        : "text-slate-300"
                    }
                  >
                    {event.confidence}
                  </span>
                </span>
              </div>
              <p className="mt-1 text-[0.78rem] leading-relaxed text-slate-300">
                {event.summary}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
