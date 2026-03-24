import type { IntelligenceEvent } from "@/lib/mockData";

interface Props {
  events?: IntelligenceEvent[];
  groupBy?: "entity" | "region" | "topic";
  title?: string;
  description?: string;
}

export default function EntityActivityPanel({
  events = [],
  groupBy = "entity",
  title = "Entity Activity",
  description = "Strategic activity across current signals.",
}: Props) {
  const grouped = events.reduce<Record<string, number>>((acc, event) => {
    const key =
      groupBy === "region"
        ? event.region
        : groupBy === "topic"
        ? event.topic
        : event.entity;

    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const items = Object.entries(grouped)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900 p-4">
      <div>
        <p className="text-xs uppercase tracking-wide text-slate-400">{title}</p>
        <p className="mt-1 text-xs text-slate-500">{description}</p>
      </div>

      <div className="mt-4 space-y-2">
        {items.length ? (
          items.map(([label, count]) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2"
            >
              <span className="text-sm text-slate-300">{label}</span>
              <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-300">
                {count}
              </span>
            </div>
          ))
        ) : (
          <p className="text-xs text-slate-500">No activity</p>
        )}
      </div>
    </section>
  );
}
