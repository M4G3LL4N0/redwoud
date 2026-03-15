import { detectTrends } from "./trend-detection";
import type { IntelligenceEvent } from "@/lib/mockData";

export interface TrendSummary {
  id: string;
  title: string;
  value: string;
  detail: string;
}

export function buildTrendSummaries(events: IntelligenceEvent[]): TrendSummary[] {
  const trends = detectTrends(events);

  return trends.slice(0, 6).map((trend) => ({
    id: `${trend.topic}-${trend.region}`.toLowerCase().replace(/\s+/g, "-"),
    title: `${trend.topic} · ${trend.region}`,
    value: trend.strength === "high" ? "Rising" : trend.strength === "medium" ? "Active" : "Watch",
    detail: `${trend.count} related signals detected across ${trend.region}.`,
  }));
}
