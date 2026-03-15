import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

type FeedEvent = {
  id: string;
  title: string;
  entity: string;
  region: string;
  topic: string;
  impact: "Low" | "Medium" | "High";
  intensity: "low" | "medium" | "high";
  confidence: "low" | "medium" | "high";
  summary: string;
  whyItMatters: string;
  timestamp: string;
  timeAgo: string;
  score: number;
  sources?: string[];
};

export async function GET() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
      ? process.env.NEXT_PUBLIC_SITE_URL
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

    const response = await fetch(`${baseUrl}/api/feed`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Feed fetch failed" }, { status: 500 });
    }

    const data = await response.json();
    const events: FeedEvent[] = Array.isArray(data.events) ? data.events : [];

    if (!events.length) {
      return NextResponse.json({
        inserted: 0,
        updatedAt: new Date().toISOString(),
      });
    }

    const rows = events.map((event) => ({
      id: event.id,
      title: event.title,
      summary: event.summary,
      entity: event.entity,
      region: event.region,
      topic: event.topic,
      impact: event.impact,
      intensity: event.intensity,
      confidence: event.confidence,
      why_it_matters: event.whyItMatters,
      source: event.sources?.[0] || "Unknown",
      score: event.score,
      timestamp: event.timestamp,
    }));

    const { error } = await supabaseAdmin.from("events").upsert(rows, {
      onConflict: "id",
    });

    if (error) throw error;

    return NextResponse.json({
      inserted: rows.length,
      updatedAt: new Date().toISOString(),
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Ingest failed" },
      { status: 500 }
    );
  }
}
