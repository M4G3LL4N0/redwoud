import Parser from "rss-parser";
import { NextResponse } from "next/server";

import { IntelligenceEvent } from "@/lib/mockData";

const parser = new Parser();

type RawFeedItem = any;

async function fetchRSSFeed(url: string): Promise<RawFeedItem[]> {
  const feed = await parser.parseURL(url);
  return feed.items || [];
}

// New function to fetch JSON feeds
async function fetchJSONFeed(url: string): Promise<RawFeedItem[]> {
  const response = await fetch(url);
  const data = await response.json();
  return data.items || [];
}

function inferEntity(text: string): string {
  // Simple keyword extraction logic, can be enhanced with NLP
  const entityKeywords = ["China", "Iran", "Fed", "TSMC", "Russia", "Ukraine"];
  const foundEntity = entityKeywords.find((keyword) => text.includes(keyword));
  return foundEntity || "Unknown";
}

function generateWhyItMatters(event: Partial<IntelligenceEvent>): string {
  // Placeholder logic, can be enhanced with LLM-based generation
  const { region, topic, entity, intensity } = event;
  if (intensity === "high") {
    return `This high-intensity event involving ${entity} in ${region} could have significant implications for ${topic} trends.`;
  } else {
    return `This event involving ${entity} in ${region} may affect ${topic} developments.`;
  }
}

function normalizeItem(item: RawFeedItem, source: string): IntelligenceEvent {
  const title = item.title || "Untitled event";
  const summary = item.contentSnippet || item.content || "No summary available.";
  const combined = `${title} ${summary}`;

  const topic = inferTopic(combined);
  const region = inferRegion(combined);
  const entity = inferEntity(combined);
  const intensity = inferIntensity(combined);

  return {
    id: `${source}-${item.guid || item.link || title}`.replace(/\s+/g, "-").slice(0, 120),
    timestamp: item.pubDate || new Date().toISOString(),
    region,
    topic,
    entity,
    intensity,
    confidence: intensity === "high"? "high" : intensity === "medium"? "medium" : "low",
    summary,
    whyItMatters: generateWhyItMatters({ region, topic, entity, intensity }),
    sources: [source],
  };
}

export async function GET() {
  try {
    const feeds = [
      { url: "https://feeds.bbci.co.uk/news/world/rss.xml", source: "bbc-world", type: "rss" },
      { url: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml", source: "nyt-world", type: "rss" },
      { url: "https://www.aljazeera.com/xml/rss/all.xml", source: "aljazeera", type: "rss" },
      // Example JSON feed (not a real URL)
      { url: "https://example.com/api/feed", source: "example-json", type: "json" },
    ];

    const results = await Promise.allSettled(
      feeds.map(async (feed) => {
        const items = feed.type === "rss"? await fetchRSSFeed(feed.url) : await fetchJSONFeed(feed.url);
        return items.slice(0, 4).map((item) => normalizeItem(item, feed.source));
      })
    );

    const events = results
     .flatMap((result) => (result.status === "fulfilled"? result.value : []))
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
