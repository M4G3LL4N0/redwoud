import { detectTrends } from "./trend-detection";
import type { IntelligenceEvent, TrendSummary } from "./mockData";

interface TrendSummary {
  id: string;
  title: string;
  value: number;
  detail: string;
  direction: string;
  strength: string;
}

export function TrendSummaries({ events }: { events: IntelligenceEvent[] }): TrendSummary[] {
  const trends = detectTrends(events);
  const trendSummaries: TrendSummary[] = trends.map((trend) => ({
    id: `${trend.topic}-${trend.region}`,
    title: `${trend.topic} - ${trend.region}`,
    value: trend.count.toString(),
    detail: `Strength: ${trend.strength} (${trend.prevCount} → ${trend.count})`,
    direction: trend.strength === "up" ? "up" : trend.strength === "down" ? "down" : "stable",
    strength: trend.strength === "up" ? "High" : trend.strength === "down" ? "Medium" : "Low",
  }));

  return trendSummaries;
}
