import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from("events")
      .select("id, topic, region, score, timestamp")
      .order("timestamp", { ascending: false })
      .limit(200);

    if (error) throw error;

    const buckets = new Map<string, { id: string; title: string; value: string; detail: string; count: number }>();

    for (const event of data || []) {
      const key = `${event.topic}::${event.region}`;
      const existing = buckets.get(key);

      if (existing) {
        existing.count += 1;
        existing.value = existing.count >= 5 ? "Rising" : existing.count >= 3 ? "Active" : "Watch";
        existing.detail = `${existing.count} related signals detected across ${event.region}.`;
      } else {
        buckets.set(key, {
          id: key.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
          title: `${event.topic} · ${event.region}`,
          value: "Watch",
          detail: `1 related signal detected across ${event.region}.`,
          count: 1,
        });
      }
    }

    const trends = Array.from(buckets.values())
      .sort((a, b) => b.count - a.count)
      .slice(0, 8)
      .map(({ count, ...trend }) => trend);

    return NextResponse.json({ trends });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Trend fetch failed" }, { status: 500 });
  }
}
