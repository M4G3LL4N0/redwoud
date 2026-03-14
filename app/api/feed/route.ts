import Parser from "rss-parser";
import { NextResponse } from "next/server";

const parser = new Parser();

type FeedEvent = {
  id: string;
  title: string;
  region: string;
  topic: string;
  intensity: "low" | "medium" | "high";
  confidence: "low" | "medium" | "high";
  timeAgo: string;
  summary: string;
  whyItMatters: string;
};

function inferTopic(text: string): string {
  const value = text.toLowerCase();

  if (value.includes("energy") || value.includes("oil") || value.includes("gas")) return "Energy";
  if (value.includes("market") || value.includes("stocks") || value.includes("inflation")) return "Markets";
  if (value.includes("trade") || value.includes("shipping") || value.includes("tariff")) return "Trade";
  if (value.includes("tech") || value.includes("chip") || value.includes("ai")) return "Technology";
  if (value.includes("war") || value.includes("security") || value.includes("military")) return "Security";

  return "Geopolitics";
}

function inferRegion(text: string): string {
  const value = text.toLowerCase();

  if (value.includes("europe") || value.includes("uk") || value.includes("france") || value.includes("germany")) return "Europe";
  if (value.includes("asia") || value.includes("china") || value.includes("japan") || value.includes("india")) return "Asia";
  if (value.includes("middle east") || value.includes("israel") || value.includes("iran") || value.includes("saudi")) return "Middle East";
  if (value.includes("africa")) return "Africa";
  if (value.includes("america") || value.includes("united states") || value.includes("canada") || value.includes("mexico")) return "Americas";

  return "All";
}

function inferIntensity(text: string): "low" | "medium" | "high" {
  const value = text.toLowerCase();

  if (
    value.includes("war") ||
    value.includes("attack") ||
    value.includes("sanction") ||
    value.includes("disruption") ||
    value.includes("crisis")
  ) {
    return "high";
  }

  if (
    value.includes("risk") ||
    value.includes("volatility") ||
    value.includes("pressure") ||
    value.includes("warning")
  ) {
    return "medium";
  }

  return "low";
}

function toTimeAgo(pubDate?: string): string {
  if (!pubDate) return "recent";

  const published = new Date(pubDate).getTime();
  const now = Date.now();
  const diffMs = Math.max(now - published, 0);
  const diffMin = Math.floor(diffMs / 60000);

  if (diffMin < 60) return `${diffMin || 1}m ago`;

  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `${diffHr}h ago`;

  const diffDay = Math.floor(diffHr / 24);
  return `${diffDay}d ago`;
}

function normalizeItem(item: any, source: string): FeedEvent {
  const title = item.title || "Untitled event";
  const summary = item.contentSnippet || item.content || "No summary available.";
  const combined = `${title} ${summary}`;

  const topic = inferTopic(combined);
  const region = inferRegion(combined);
  const intensity = inferIntensity(combined);

  return {
    id: `${source}-${item.guid || item.link || title}`.replace(/\s+/g, "-").slice(0, 120),
    title,
    region,
    topic,
    intensity,
    confidence: intensity === "high" ? "high" : intensity === "medium" ? "medium" : "low",
    timeAgo: toTimeAgo(item.pubDate),
    summary,
    whyItMatters:
      "This signal may affect regional stability, market sentiment, supply chains, or strategic positioning depending on how related developments evolve.",
  };
}

export async function GET() {
  try {
    const feeds = [
      { url: "https://feeds.bbci.co.uk/news/world/rss.xml", source: "bbc-world" },
      { url: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml", source: "nyt-world" },
      { url: "https://www.aljazeera.com/xml/rss/all.xml", source: "aljazeera" },
    ];

    const results = await Promise.allSettled(
      feeds.map(async (feed) => {
        const parsed = await parser.parseURL(feed.url);
        return (parsed.items || []).slice(0, 4).map((item) => normalizeItem(item, feed.source));
      })
    );

    const events = results
      .flatMap((result) => (result.status === "fulfilled" ? result.value : []))
      .slice(0, 10);

    return NextResponse.json(
      {
        updatedAt: new Date().toISOString(),
        events,
      },
      {
        headers: {
          "Cache-Control": "s-maxage=300, stale-while-revalidate=600",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        updatedAt: new Date().toISOString(),
        events: [],
        error: "Unable to fetch live feed.",
      },
      { status: 500 }
    );
  }
}
