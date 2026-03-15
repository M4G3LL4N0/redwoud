import { IntelligenceEvent, Region } from "@/lib/mockData";

interface IntelligenceMapProps {
  events: IntelligenceEvent[];
  activeRegions?: Region[];
}

export function IntelligenceMap({ events, activeRegions }: IntelligenceMapProps) {
  // Group events by region and compute metrics
  const regionMetrics = events.reduce((acc, event) => {
    const region = event.region;
    if (!acc[region]) {
      acc[region] = {
        count: 0,
        conflictScore: 0,
        economicScore: 0,
      };
    }
    acc[region].count++;

    // Conflict scoring: high intensity geopolitical/security events
    const isConflictTopic = 
      event.topic === "Geopolitics" || 
      event.topic === "Security" ||
      event.title.toLowerCase().includes("war") ||
      event.title.toLowerCase().includes("conflict") ||
      event.title.toLowerCase().includes("military") ||
      event.title.toLowerCase().includes("attack");
    
    if (isConflictTopic) {
      if (event.intensity === "high") acc[region].conflictScore += 3;
      else if (event.intensity === "medium") acc[region].conflictScore += 2;
      else acc[region].conflictScore += 1;
    }

    // Economic scoring: markets, trade, energy, inflation, etc.
    const isEconomicTopic =
      event.topic === "Markets" ||
      event.topic === "Trade" ||
      event.topic === "Energy" ||
      event.title.toLowerCase().includes("inflation") ||
      event.title.toLowerCase().includes("rates") ||
      event.title.toLowerCase().includes("economy") ||
      event.title.toLowerCase().includes("market");
    
    if (isEconomicTopic) {
      if (event.intensity === "high") acc[region].economicScore += 3;
      else if (event.intensity === "medium") acc[region].economicScore += 2;
      else acc[region].economicScore += 1;
    }

    return acc;
  }, {} as Record<string, { count: number; conflictScore: number; economicScore: number }>);

  // Convert to array and sort by signal count
  const regionList = Object.entries(regionMetrics)
    .map(([region, metrics]) => ({ region: region as Region, ...metrics }))
    .sort((a, b) => b.count - a.count);

  // Filter by activeRegions if provided
  const displayRegions = activeRegions
    ? regionList.filter(r => activeRegions.includes(r.region))
    : regionList;

  // Color helpers
  const getConflictColor = (score: number) => {
    if (score >= 5) return "bg-red-500";
    if (score >= 3) return "bg-orange-500";
    return "bg-emerald-500";
  };

  const getEconomicColor = (score: number) => {
    if (score >= 5) return "bg-amber-500";
    if (score >= 3) return "bg-yellow-500";
    return "bg-slate-500";
  };

  return (
    <section className="rw-card flex flex-col overflow-hidden">
      <header className="flex items-center justify-between border-b border-rw-border/80 px-4 py-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Regional monitoring console
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Active regions with signal counts, conflict and economic indicators.
          </p>
        </div>
      </header>
      <div className="grid flex-1 grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {displayRegions.map(({ region, count, conflictScore, economicScore }) => (
          <div key={region} className="rounded-lg border border-slate-800 bg-slate-900 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-100">{region}</h3>
              <span className="text-xs font-medium text-slate-400">{count} signals</span>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Conflict</span>
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${getConflictColor(conflictScore)}`}></div>
                  <span className="text-slate-300">{conflictScore}</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Economic</span>
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${getEconomicColor(economicScore)}`}></div>
                  <span className="text-slate-300">{economicScore}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
