import type { IntelligenceEvent } from "@/lib/mockData";

interface FeedHealth {
  source: string;
  status: 'healthy' | 'degraded' | 'down';
  lastUpdated: string;
  error?: string;
}

const feedHealthMap = new Map<string, FeedHealth>();

export async function getLiveEvents(): Promise<IntelligenceEvent[]> {
  try {
    if (!process.env.NEXT_PUBLIC_SITE_URL && !process.env.VERCEL_URL) {
      console.warn('Missing environment configuration - using fallback URL');
    }

    // Track request rate
    const requestId = Math.random().toString(36).slice(2);
    console.log(`[${new Date().toISOString()}] Request ${requestId} initiated`);
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
      ? process.env.NEXT_PUBLIC_SITE_URL
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

    const response = await fetch(`${baseUrl}/api/feed`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return [];
    }

    const data = await response.json();
    return Array.isArray(data.events) ? data.events : [];
  } catch (error) {
    console.error("Failed to fetch live events:", error);
    return [];
  }
}
