import type { Region } from "@/lib/mockData";

interface IntelligenceMapProps {
  activeRegions: Region[];
}

export function IntelligenceMap({ activeRegions }: IntelligenceMapProps) {
  const regionData: Record<
    Region,
    { events: number; conflict: boolean; economic: boolean }
  > = {
    All: { events: 44, conflict: true, economic: true },
    Americas: { events: 12, conflict: false, economic: true },
    Europe: { events: 8, conflict: true, economic: true },
    Asia: { events: 15, conflict: true, economic: true },
    "Middle East": { events: 6, conflict: true, economic: false },
    Africa: { events: 3, conflict: false, economic: true },
  };

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Global intelligence map
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Active regions and signal density across the current monitoring set.
          </p>
        </div>
        <span className="rounded-full border border-slate-700 px-2 py-1 text-[10px] text-slate-300">
          {activeRegions.includes("All") ? "Global" : activeRegions.join(", ")} view
        </span>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(regionData)
          .filter(([region]) => region !== "All")
          .map(([region, data]) => (
            <article
              key={region}
              className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold text-slate-100">{region}</h3>
                <span className="rounded-full bg-sky-500/15 px-2 py-1 text-xs font-medium text-sky-300">
                  {data.events} events
                </span>
              </div>

              <div className="mt-4 space-y-2 text-sm text-slate-300">
                <p>
                  Conflict signal:{" "}
                  <span className={data.conflict ? "text-rose-300" : "text-emerald-300"}>
                    {data.conflict ? "elevated" : "stable"}
                  </span>
                </p>
                <p>
                  Economic signal:{" "}
                  <span className={data.economic ? "text-amber-200" : "text-slate-400"}>
                    {data.economic ? "active" : "limited"}
                  </span>
                </p>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}
