import { NextResponse } from "next/server";
import { liveEvents, dailyBriefing, trendCards } from "@/lib/mockData";

export const revalidate = 300;

export async function GET() {
  return NextResponse.json({
    generatedAt: new Date().toISOString(),
    events: liveEvents,
    briefing: dailyBriefing,
    trends: trendCards,
  });
}
