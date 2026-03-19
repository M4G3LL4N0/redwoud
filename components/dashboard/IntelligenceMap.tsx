import { useState, useEffect } from 'react';
import { Region, IntelligenceEvent } from '@/lib/mockData';

interface IntelligenceMapProps {
  activeRegions?: Region[];
  events?: IntelligenceEvent[];
}

type RegionPanel = {
  region: Region;
  count: number;
  conflictScore: number;
  economicScore: number;
  summary: string;
  eventDensity: number;
  topThreat: string;
};

function getConflictColor(score: number): string {
  if (score >= 8) return "bg-rose-500/30 hover:bg-rose-500/50";
  if (score >= 5) return "bg-amber-500/30 hover:bg-amber-500/50";
  return "bg-emerald-500/20 hover:bg-emerald-500/40";
}

function getEconomicColor(score: number): string {
  if (score >= 8) return "bg-sky-500/30 hover:bg-sky-500/50";
  if (score >= 5) return "bg-indigo-500/30 hover:bg-indigo-500/50";
  return "bg-slate-500/20 hover:bg-slate-500/40";
}

function getConflictLabel(score: number): string {
  if (score >= 8) return "CRITICAL";
  if (score >= 5) return "ELEVATED";
  return "STABLE";
}

function getEconomicLabel(score: number): string {
  if (score >= 8) return "VOLATILE";
  if (score >= 5) return "FLUCTUATING";
  return "STEADY";
}

function getHeatmapIntensity(density: number): string {
  if (density >= 8) return "bg-gradient-to-r from-red-500/20 via-red-500/40 to-red-500/60";
  if (density >= 5) return "bg-gradient-to-r from-amber-500/20 via-amber-500/40 to-amber-500/60";
  return "bg-gradient-to-r from-emerald-500/10 via-emerald-500/20 to-emerald-500/30";
}

function getThreatLevel(intensity: string): string {
  if (intensity === "high") return "bg-gradient-to-r from-red-600/20 via-red-600/40 to-red-600/60 text-red-500";
  if (intensity === "medium") return "bg-gradient-to-r from-amber-600/20 via-amber-600/40 to-amber-600/60 text-amber-500";
  return "bg-gradient-to-r from-emerald-600/10 via-emerald-600/20 to-emerald-600/30 text-emerald-500";
}

export default function IntelligenceMap({
  activeRegions = ["Americas", "Europe", "Asia", "Middle East", "Africa"],
  events = []
}: IntelligenceMapProps) {
  const [regionData, setRegionData] = useState<RegionPanel[]>([]);
  const [hotZone, setHotZone] = useState<string | null>(null);

  useEffect(() => {
    const regionEvents = activeRegions.map(region => {
      const regionEvents = events.filter(e => e.region === region);
      const count = regionEvents.length;
      const conflictScore = Math.min(10, Math.floor(count / 2) + Math.random() * 3);
      const economicScore = Math.min(10, Math.floor(count / 3) + Math.random() * 2);
      const eventDensity = Math.min(10, Math.floor(count / 2) + Math.random() * 3);
      const topThreat = regionEvents.sort((a, b) => {
        if (b.intensity === "high" && a.intensity !== "high") return 1;
        if (a.intensity === "high" && b.intensity !== "high") return -1;
        return b.confidence.localeCompare(a.confidence);
      })[0]?.title.slice(0, 30) || "Monitoring...";

      return {
        region,
        count,
        conflictScore,
        economicScore,
        summary: `${count} active signals`,
        eventDensity,
        topThreat
      };
    });

    const maxDensity = Math.max(...regionEvents.map(r => r.eventDensity));
    const hotZoneRegion = regionEvents.find(r => r.eventDensity === maxDensity);
    setHotZone(hotZoneRegion?.region || null);

    setRegionData(regionEvents);
  }, [events, activeRegions]);

  return (
    <div className="relative h-full">
      {/* Command Panel Sidebar */}
      <div className="absolute left-0 top-0 bottom-0 w-80 bg-slate-900/80 backdrop-blur-md border-r border-slate-700">
        <div className="p-4">
          <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-3">
            GLOBAL INTELLIGENCE CONSOLE
          </h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg">
              <span className="text-xs text-slate-300">ACTIVE REGIONS</span>
              <span className="font-mono text-sm font-bold text-emerald-400">
                {activeRegions.length}
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg">
              <span className="text-xs text-slate-300">TOTAL SIGNALS</span>
              <span className="font-mono text-sm font-bold text-amber-400">
                {regionData.reduce((sum, r) => sum + r.count, 0)}
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg">
              <span className="text-xs text-slate-300">HOT ZONE</span>
              <span className="font-mono text-sm font-bold text-red-400">
                {hotZone || "None"}
              </span>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-4">
            <p className="text-xs text-slate-400 mb-2">THREAT LEVELS</p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300">CRITICAL</span>
                <div className="w-16 bg-gradient-to-r from-red-500/60 via-red-500/40 to-red-500/20 rounded-full" />
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300">ELEVATED</span>
                <div className="w-16 bg-gradient-to-r from-amber-500/60 via-amber-500/40 to-amber-500/20 rounded-full" />
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300">MONITOR</span>
                <div className="w-16 bg-gradient-to-r from-emerald-500/60 via-emerald-500/40 to-emerald-500/20 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="ml-80 h-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-4 h-full">
          {regionData.map((region, index) => (
            <div
              key={region.region}
              className={`relative p-4 rounded-2xl cursor-pointer transition-all ${
                hotZone === region.region
                  ? 'border-4 border-red-500/30 ring-2 ring-red-500/20'
                  : 'border border-slate-700 hover:shadow-lg'
              } ${getHeatmapIntensity(region.eventDensity)}`}
            >
              {/* Region Header */}
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-slate-100">
                  {region.region}
                </h4>
                {hotZone === region.region && (
                  <div className="px-2 py-1 bg-red-500/20 text-xs font-bold uppercase tracking-wider text-red-400">
                    HOT ZONE
                  </div>
                )}
              </div>

              {/* Threat Density */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-slate-400">THREAT DENSITY</span>
                  <span className="text-xs font-mono text-slate-300">
                    {region.eventDensity}/10
                  </span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="h-2 bg-gradient-to-r from-red-500/60 to-amber-500/60 rounded-full"
                    style={{ width: `${region.eventDensity * 10}%` }}
                  />
                </div>
              </div>

              {/* Top Threat */}
              <div className={`p-3 rounded-lg mb-4 ${getThreatLevel(
                events.find(e => e.region === region.region && e.intensity === "high")?.intensity || "low"
              )}`}>
                <p className="text-xs text-slate-300 mb-1">TOP THREAT</p>
                <p className="text-sm font-mono font-bold leading-none">
                  {region.topThreat}
                </p>
              </div>

              {/* Signal Count */}
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-xs text-slate-400">ACTIVE SIGNALS</p>
                  <p className="text-2xl font-bold text-slate-100">
                    {region.count}
                  </p>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-bold ${
                  region.count > 10 ? 'bg-red-500/20 text-red-400' :
                  region.count > 5 ? 'bg-amber-500/20 text-amber-400' :
                  'bg-emerald-500/20 text-emerald-400'
                }`}>
                  {region.count > 10 ? 'HIGH' :
                   region.count > 5 ? 'MED' : 'LOW'}
                </div>
              </div>

              {/* Indicators Grid */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className={`p-3 rounded-lg ${getConflictColor(region.conflictScore)}`}>
                  <p className="text-xs text-slate-400 mb-1">CONFLICT</p>
                  <p className="text-sm font-bold">{getConflictLabel(region.conflictScore)}</p>
                  <p className="text-xs text-slate-500 mt-1">
                    {region.conflictScore}/10
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${getEconomicColor(region.economicScore)}`}>
                  <p className="text-xs text-slate-400 mb-1">ECONOMIC</p>
                  <p className="text-sm font-bold">{getEconomicLabel(region.economicScore)}</p>
                  <p className="text-xs text-slate-500 mt-1">
                    {region.economicScore}/10
                  </p>
                </div>
              </div>

              {/* Summary */}
              <p className="text-xs text-slate-400 leading-none">
                {region.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
