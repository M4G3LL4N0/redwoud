import type { Region } from "@/lib/mockData";

interface IntelligenceMapProps {
  activeRegions?: Region[];
}

type RegionPanel = {
  region: Region;
  count: number;
  conflictScore: number;
  economicScore: number;
  summary: string;
};

function getConflictColor(score: number): string {
  if (score >= 8) return "bg-rose-400";
  if (score >= 5) return "bg-amber-300";
  return "bg-emerald-400";
}

function getEconomicColor(score: number): string {
  if (score >= 8) return "bg-sky-400";
  if (score >= 5) return "bg-indigo-300";
  return "bg-slate-400";
}

function getConflictLabel(score: number): string {
  if (score >= 8) return "Elevated";
  if (score >= 5) return "Active";
  return "Stable";
}

function getEconomicLabel(score: number): string {
  if (score >= 8) return "High";
  if (score >= 5) return "Moderate";
  return "Limited";
}

export default function IntelligenceMap({
  activeRegions = ["Americas", "Europe", "Asia", "Middle East", "Africa"],
}: IntelligenceMapProps) {
  const regionPanels: RegionPanel[] = [
    {
      region: "Americas",
      count: 12,
      conflictScore: 3,
      economicScore: 8,
      summary: "Macro, policy, and market-moving signals remain the dominant regional drivers.",
    },
    {
      region: "Europe",
      count: 8,
      conflictScore: 7,
      economicScore: 7,
      summary: "Energy, security, and industrial competitiveness pressures remain tightly linked.",
    },
    {
      region: "Asia",
      count: 15,
      conflictScore: 6,
      economicScore: 9,
      summary: "Technology supply chains and strategic export controls continue to shape the region.",
    },
    {
      region: "Middle East",
      count: 6,
      conflictScore: 9,
      economicScore: 4,
      summary: "Shipping route and security-related developments remain the core watchpoints.",
    },
    {
      region: "Africa",
      count: 3,
      conflictScore: 4,
      economicScore: 5,
      summary: "Political and economic signals are active but lower-volume than other regions.",
    },
    {
      region: "All",
      count: 44,
      conflictScore: 7,
      economicScore: 7,
      summary: "Global monitoring layer aggregates cross-regional strategic pressure.",
    },
  ];

  const displayRegions = regionPanels.filter((panel) => panel.region !== "All");
  const filtered =
    activeRegions.includes("All")
      ? displayRegions
      : displayRegions.filter((panel) => activeRegions.includes(panel.region));

  const topRegion =
    [...filtered].sort((a, b) => b.count - a.count)[0] || displayRegions[0];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Regional intelligence console
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Event density, conflict posture, and economic signal intensity by region.
          </p>
        </div>
        <span className="rounded-full border border-slate-700 px-2 py-1 text-[10px] text-slate-300">
          Top active region: {topRegion.region}
        </span>
      </div>

      <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/60 p-3">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-sm font-semibold text-slate-100">{topRegion.region}</h3>
          <span className="rounded-full bg-indigo-500/15 px-2 py-1 text-xs font-medium text-indigo-300">
            {topRegion.count} signals
          </span>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-300">{topRegion.summary}</p>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map(({ region, count, conflictScore, economicScore, summary }) => (
          <div
            key={region}
            className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-slate-100">{region}</h3>
              <span className="rounded-full bg-sky-500/15 px-2 py-1 text-xs font-medium text-sky-300">
                {count} events
              </span>
            </div>

            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Conflict</span>
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${getConflictColor(conflictScore)}`}></div>
                  <span className="text-slate-300">
                    {conflictScore} · {getConflictLabel(conflictScore)}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-400">Economic</span>
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${getEconomicColor(economicScore)}`}></div>
                  <span className="text-slate-300">
                    {economicScore} · {getEconomicLabel(economicScore)}
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs leading-6 text-slate-400">{summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
