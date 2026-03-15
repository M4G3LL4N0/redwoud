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

  // Find the top region
  const topRegion = displayRegions[0];

  function generateRegionSummary(region: {
    region: Region;
    count: number;
    conflictScore: number;
    economicScore: number;
  }): string {
    const conflictLevel = region.conflictScore >= 6 ? 'HIGH'
      : region.conflictScore >= 4 ? 'ELEVATED'
      : 'MODERATE';
    
    const economicLevel = region.economicScore >= 6 ? 'SIGNIFICANT'
      : region.economicScore >= 4 ? 'NOTABLE'
      : 'STABLE';

    return `${region.region} is currently the highest-activity region with ${region.count} intelligence signals. 
    Shows ${conflictLevel.toLowerCase()} conflict risk (${region.conflictScore}/10) and ${economicLevel.toLowerCase()} 
    economic activity (${region.economicScore}/10). Monitor for potential ${conflictLevel === 'HIGH' ? 
    'security developments' : 'emerging trends'} in coming hours.`;
  }

  return (
    <section className="rw-card flex flex-col overflow-hidden">
      <header className="flex items-center justify-between border-b border-rw-border/80 px-4 py-3 bg-slate-900/50">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            REGIONAL MONITORING CONSOLE
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Real-time geopolitical and economic indicators
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs font-medium text-emerald-300">
            LIVE DATA
          </span>
        </div>
      </header>

      {/* Top Region Section */}
      <div className="border-b border-rw-border/80 px-6 py-4 bg-gradient-to-r from-slate-900 to-slate-800/30">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">FOCAL REGION</p>
            <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-100">{topRegion.region}</h2>
          </div>
          <div className="grid grid-cols-3 gap-6 min-w-[300px]">
            <div className="flex flex-col">
              <p className="text-xs text-slate-400">SIGNALS</p>
              <p className="text-2xl font-bold text-white">{topRegion.count}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-xs text-slate-400">CONFLICT</p>
              <p className={`text-2xl font-bold ${getConflictColor(topRegion.conflictScore).replace('bg-', 'text-')}`}>{topRegion.conflictScore}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-xs text-slate-400">ECONOMIC</p>
              <p className={`text-2xl font-bold ${getEconomicColor(topRegion.economicScore).replace('bg-', 'text-')}`}>{topRegion.economicScore}</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-slate-300 leading-relaxed">
            {generateRegionSummary(topRegion)}
          </p>
        </div>
      </div>

      <div className="grid flex-1 grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3 bg-slate-900/50">
        {displayRegions.map(({ region, count, conflictScore, economicScore }) => (
          <div key={region} className="group rounded-xl border border-slate-800 bg-slate-900/80 hover:bg-slate-900 transition-colors p-4">
            {region === topRegion.region && (
              <div className="-mt-4 -mx-4 mb-3 px-4 py-2 bg-indigo-900/30 border-b border-indigo-800/30">
                <p className="text-xs font-semibold text-indigo-300 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </svg>
                  CURRENT FOCAL REGION
                </p>
              </div>
            )}
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
