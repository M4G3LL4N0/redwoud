import type { IntelligenceEvent } from "@/lib/mockData";

interface EntityActivityPanelProps {
  events: IntelligenceEvent[];
}

export function EntityActivityPanel({ events }: EntityActivityPanelProps) {
  // Count entities across all events
  const entityCounts: Record<string, number> = {};
  events.forEach((event) => {
    const entity = event.entity;
    entityCounts[entity] = (entityCounts[entity] || 0) + 1;
  });

  // Sort entities by count descending
  const sortedEntities = Object.entries(entityCounts).sort(
    ([, countA], [, countB]) => countB - countA
  );

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Entity activity
          </p>
          <p className="mt-1 text-xs text-slate-400">
            AI-identified entities across monitored signals
          </p>
        </div>
        <span className="rounded-full bg-emerald-300/15 px-2 py-1 text-[10px] text-emerald-300">
          {events.length} active
        </span>
      </div>

      <div className="mt-5 space-y-4">
        {sortedEntities.slice(0, 5).map(([entity, count]) => (
          <article
            key={entity}
            className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-slate-100">
                {entity}
              </h3>
              <span className="rounded-full bg-sky-500/15 px-2 py-1 text-xs font-medium text-sky-300">
                {count}
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {count} signals reference this entity
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
