import type { IntelligenceEvent } from "@/lib/mockData";

export async function getLiveEvents(): Promise<IntelligenceEvent[]> {
  try {
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
