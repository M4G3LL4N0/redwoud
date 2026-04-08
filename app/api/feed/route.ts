import Parser from "rss-parser";
import { NextResponse } from "next/server";

const parser = new Parser();

type FeedEvent = {
  id: string;
  entity: string;
  title: string;
  region: string;
  topic: string;
  impact: "Low" | "Medium" | "High";
  intensity: "low" | "medium" | "high";
  confidence: "low" | "medium" | "high";
  timeAgo: string;
  summary: string;
  whyItMatters: string;
  sources: string[];
  timestamp: string;
  score: number;
};

function inferTopic(text: string): string {
  const value = text.toLowerCase();

  if (value.includes("energy") || value.includes("oil") || value.includes("gas")) return "Energy";
  if (
    value.includes("market") || 
    value.includes("stocks") || 
    value.includes("inflation") ||
    value.includes("financial") ||
    value.includes("currency") ||
    value.includes("bank")
  ) return "Markets";
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

function inferEntity(text: string): string {
  const value = text.toLowerCase();

  if (value.includes("oil") || value.includes("gas") || value.includes("energy")) return "Energy markets";
  if (value.includes("chip") || value.includes("semiconductor")) return "Semiconductor supply chain";
  if (value.includes("shipping") || value.includes("trade route")) return "Global shipping corridors";
  if (value.includes("inflation") || value.includes("rates")) return "Macroeconomic environment";
  if (value.includes("sanction") || value.includes("military") || value.includes("security")) return "Regional security environment";

  return "Global strategic environment";
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

function inferConfidence(text: string): "low" | "medium" | "high" {
  const value = text.toLowerCase();

  if (
    value.includes("confirmed") ||
    value.includes("official") ||
    value.includes("announced")
  ) {
    return "high";
  }

  if (
    value.includes("report") ||
    value.includes("suggests") ||
    value.includes("indicates")
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

function generateWhyItMatters(event: Partial<FeedEvent>): string {
  const { region, topic, entity, intensity } = event;

  if (intensity === "high") {
    return `This high-intensity development involving ${entity || "a major strategic factor"} in ${region || "a key region"} could materially affect ${topic || "global intelligence"} conditions and broader decision-making.`;
  }

  if (intensity === "medium") {
    return `This signal may shape ${topic || "strategic"} conditions in ${region || "its region"} and is worth monitoring for second-order effects.`;
  }

  return `This development adds context to evolving ${topic || "global"} dynamics and may become more important if similar signals continue to cluster.`;
}

function computeEventScore(input: {
  topic: string;
  intensity: "low" | "medium" | "high";
  confidence: "low" | "medium" | "high";
  pubDate?: string;
  sourceCount?: number;
}): number {
  let score = 0;

  if (input.topic === "Security" || input.topic === "Energy") score += 25;
  else if (input.topic === "Markets" || input.topic === "Trade") score += 18;
  else score += 12;

  if (input.intensity === "high") score += 30;
  else if (input.intensity === "medium") score += 18;
  else score += 8;

  if (input.confidence === "high") score += 20;
  else if (input.confidence === "medium") score += 12;
  else score += 5;

  if (input.sourceCount && input.sourceCount > 1) score += Math.min(input.sourceCount * 4, 12);

  if (input.pubDate) {
    const ageMs = Date.now() - new Date(input.pubDate).getTime();
    const ageHours = ageMs / (1000 * 60 * 60);

    if (ageHours < 2) score += 12;
    else if (ageHours < 8) score += 8;
    else if (ageHours < 24) score += 4;
  }

  return Math.min(score, 100);
}

function normalizeItem(item: any, source: string): FeedEvent {
  const title = item.title || "Untitled event";
  const summary = item.contentSnippet || item.content || "No summary available.";
  const combined = `${title} ${summary}`;

  const topic = inferTopic(combined);
  const region = inferRegion(combined);
  const entity = inferEntity(combined);
  const intensity = inferIntensity(combined);
  const confidence = inferConfidence(combined);
  const impact =
    intensity === "high" ? "High" : intensity === "medium" ? "Medium" : "Low";

  return {
    id: `${source}-${item.guid || item.link || title}`.replace(/\s+/g, "-").slice(0, 120),
    entity,
    title,
    region,
    topic,
    impact,
    intensity,
    confidence,
    timeAgo: toTimeAgo(item.pubDate),
    summary,
    whyItMatters: generateWhyItMatters({ region, topic, entity, intensity }),
    sources: [source],
    timestamp: item.pubDate || new Date().toISOString(),
    score: computeEventScore({
      topic,
      intensity,
      confidence,
      pubDate: item.pubDate,
      sourceCount: 1,
    }),
  };
}

export async function GET() {
  try {
    // Get feeds from environment or use defaults
    const feeds = process.env.FEED_SOURCES 
      ? JSON.parse(process.env.FEED_SOURCES)
      : [
          { url: "https://feeds.bbci.co.uk/news/world/rss.xml", source: "BBC World" },
          { url: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml", source: "NYT World" },
          { url: "https://www.aljazeera.com/xml/rss/all.xml", source: "Al Jazeera" },
        ];

    // Process feeds in parallel with timeout
    const results = await Promise.allSettled(
      feeds.map(async (feed) => {
        try {
          const controller = new AbortController();
          const timeout = setTimeout(() => controller.abort(), 5000);
          
          const parsed = await parser.parseURL(feed.url, { signal: controller.signal });
          clearTimeout(timeout);
          
          return (parsed.items || []).slice(0, 4).map((item) => normalizeItem(item, feed.source));
        } catch (error) {
          console.error(`Failed to parse feed ${feed.source}:`, error);
          return [];
        }
      })
    );

    const events = results
      .flatMap((result) => (result.status === "fulfilled" ? result.value : []))
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);

    return NextResponse.json(
      {
        updatedAt: new Date().toISOString(),
        events,
        stats: {
          totalFeeds: feeds.length,
          successfulFeeds: results.filter(r => r.status === 'fulfilled').length,
          totalEvents: events.length
        }
      },
      {
        headers: {
          "Cache-Control": "s-maxage=300, stale-while-revalidate=600",
          "X-RateLimit-Limit": "100",
          "X-RateLimit-Remaining": "99",
          "X-RateLimit-Reset": "60"
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
