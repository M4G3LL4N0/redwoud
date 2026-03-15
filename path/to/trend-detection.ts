import { IntelligenceEvent } from "./mockData";

interface Trend {
  topic: string;
  region: string;
  count: number;
  prevCount: number;
}

export function detectTrends(events: IntelligenceEvent[]): Trend[] {
  const trendMap: Record<string, Trend> = {};

  events.forEach((event) => {
    const key = `${event.topic}-${event.region}`;
    if (!trendMap[key]) {
      trendMap[key] = { topic: event.topic, region: event.region, count: 0, prevCount: 0 };
    }
    trendMap[key].count++;
  });

  const trends = Object.values(trendMap);
  trends.forEach((trend) => {
    trend.prevCount = trend.count - Math.floor(Math.random() * 5); // Simulate previous count
    trend.strength = trend.count - trend.prevCount;
  });

  return trends;
}
