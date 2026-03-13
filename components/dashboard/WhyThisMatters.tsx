import type { IntelligenceEvent } from "@/lib/mockData";

interface WhyThisMattersProps {
  focalEvents: IntelligenceEvent[];
}

export function WhyThisMatters({ focalEvents }: WhyThisMattersProps) {
  const topEvents = focalEvents.slice(0, 3);

  return (
    <section className="rw-card flex flex-col overflow-hidden">
      <header className="flex items-center justify-between border-b border-rw-border/80 px-4 py-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Why this matters
          </p>
          <p className="mt-1 text-xs text-slate-400">
            First-order implications distilled from the most material signals.
          </p>
        </div>
      </header>
      <div className="space-y-3 px-4 py-3.5 text-[0.8rem] text-slate-200">
        {topEvents.map((event) => (
          <article key={event.id} className="rounded-2xl bg-rw-surface-alt/80 p-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-[0.86rem] font-medium text-slate-50">
                {event.title}
              </h3>
              <span className="rw-pill-muted text-[10px]">
                {event.region} · {event.topic}
              </span>
            </div>
            <p className="mt-2 text-[0.78rem] leading-relaxed text-slate-300">
              {event.whyItMatters}
            </p>
          </article>
        ))}
        <p className="mt-1 text-[0.75rem] text-slate-400">
          In the full product, this section learns from your portfolio, geography, and
          operating profile to prioritize the{" "}
          <span className="font-medium text-slate-100">
            few signals that truly move your world
          </span>
          .
        </p>
      </div>
    </section>
  );
}
