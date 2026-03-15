import type { Region } from "@/lib/mockData";

interface IntelligenceMapProps {
  activeRegions: Record<Region, { events: number; conflict: boolean; economic: boolean }>;
}

export function IntelligenceMap({ activeRegions }: IntelligenceMapProps) {
  const regionData: Record<Region, { events: number; conflict: boolean; economic: boolean }> = {
    Americas: { events: 12, conflict: false, economic: true },
    Europe: { events: 8, conflict: true, economic: true },
    Asia: { events: 15, conflict: true, economic: true },
    "Middle East": { events: 6, conflict: true, economic: false },
    Africa: { events: 4, conflict: false, economic: false },
  };

  return (
    <section className="rw-card flex flex-col overflow-hidden">
      <header className="flex items-center justify-between border-b border-rw-border/80 px-4 py-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Global intelligence map
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Real-time event clustering across regions with conflict and economic indicators.
          </p>
        </div>
        <span className="rw-chip">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          {Object.values(regionData).reduce((sum, region) => sum + region.events, 0)} active
        </span>
      </header>

      <div className="p-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {Object.entries(regionData).map(([region, data]) => (
            <div
              key={region}
              className="relative rounded-xl border border-rw-border/80 bg-slate-950/60 p-4 hover:border-emerald-400/50 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-slate-100">{region}</h3>
                <span className="text-xs text-slate-400">{data.events} events</span>
              </div>

              <div className="flex items-center gap-2 text-xs">
                {data.conflict && (
                  <span className="px-2 py-1 rounded-full bg-rose-500/20 text-rose-300">
                    Conflict
                  </span>
                )}
                {data.economic && (
                  <span className="px-2 py-1 rounded-full bg-amber-500/20 text-amber-300">
                    Economic
                  </span>
                )}
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                <span>Conflict: {data.conflict? "High" : "Low"}</span>
                <span>Economic: {data.economic? "Active" : "Stable"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
