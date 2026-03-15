import type { IntelligenceEvent } from "@/lib/mockData";

interface EntityActivityPanelProps {
  events: IntelligenceEvent[];
}

export default function EntityActivityPanel({ events }: EntityActivityPanelProps) {
  const counts = events.reduce<Record<string, number>>((acc, event) => {
    acc[event.entity] = (acc[event.entity] || 0) + 1;
    return acc;
  }, {});

  const entities = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Entity Activity
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Strategic entities appearing across current signals.
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {entities.map(([entity, count]) => (
          <div
            key={entity}
            className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3"
          >
            <span className="text-sm text-slate-200">{entity}</span>
            <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-300">
              {count} signals
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
