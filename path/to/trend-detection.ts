import type { IntelligenceEvent } from "@/lib/mockData";

export interface Trend {
  topic: string;
  region: string;
  count: number;
  strength: "low" | "medium" | "high";
}

export function detectTrends(events: IntelligenceEvent[]): Trend[] {
  const buckets = new Map<string, Trend>();

  for (const event of events) {
    const key = `${event.topic}::${event.region}`;
    const existing = buckets.get(key);

    if (existing) {
      existing.count += 1;
      existing.strength =
        existing.count >= 5 ? "high" : existing.count >= 3 ? "medium" : "low";
    } else {
      buckets.set(key, {
        topic: event.topic,
        region: event.region,
        count: 1,
        strength: "low",
      });
    }
  }

  return Array.from(buckets.values()).sort((a, b) => b.count - a.count);
}
