import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from("events")
      .select("*")
      .order("score", { ascending: false })
      .limit(12);

    if (error) throw error;

    const events = data || [];

    const topTitles = events.slice(0, 3).map((e) => e.title);
    const topThemes = Array.from(new Set(events.map((e) => e.topic))).slice(0, 4);
    const topRisks = events
      .filter((e) => e.intensity === "high")
      .map((e) => `${e.topic} in ${e.region}`)
      .slice(0, 4);

    const briefing = {
      title: "REDWOUD Global Intelligence Briefing",
      dateLabel: "Updated live",
      lead:
        topTitles[0] ||
        "Live intelligence signals are being monitored across global topics and regions.",
      summary: events.length
        ? `REDWOUD is monitoring ${events.length} live signals across ${Array.from(new Set(events.map((e) => e.region))).length} active regions.`
        : "No live events available yet.",
      whyThisMatters:
        "Clustering signals across regions and topics can indicate broader strategic pressure, volatility, and emerging risk patterns.",
      keyThemes: topThemes,
      primaryRisks: topRisks,
    };

    return NextResponse.json({ briefing });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Briefing fetch failed" },
      { status: 500 }
    );
  }
}
