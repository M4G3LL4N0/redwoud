import Link from "next/link";
import { dailyBriefing, liveEvents as fallbackEvents, trendCards } from "@/lib/mockData";
import { IntelligenceMap } from "@/components/dashboard/IntelligenceMap";

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

async function getLiveEvents(): Promise<FeedEvent[]> {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.VERCEL_URL?.startsWith("http")
        ? process.env.VERCEL_URL
        : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000";

    const response = await fetch(`${baseUrl}/api/feed`, {
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return fallbackEvents;
    }

    const data = await response.json();
    return data.events?.length ? data.events : fallbackEvents;
  } catch {
    return fallbackEvents;
  }
}

export default async function HomePage() {
  const liveEvents = await getLiveEvents();

  const activeRegions: Record<Region, { events: number; conflict: boolean; economic: boolean }> = {
    Americas: { events: 12, conflict: false, economic: true },
    Europe: { events: 8, conflict: true, economic: true },
    Asia: { events: 15, conflict: true, economic: true },
    "Middle East": { events: 6, conflict: true, economic: false },
    Africa: { events: 4, conflict: false, economic: false },
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950/50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-6 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium tracking-wide text-emerald-300">
            REDWOUD · REAL-TIME GLOBAL INTELLIGENCE
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-tight sm:text-7xl">
            Understand the world in real time.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-300">
            REDWOUD turns worldwide data, geopolitical developments, market signals,
            economic indicators, and public information into structured, actionable intelligence.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/product"
              className="rounded-lg bg-white px-6 py-4 text-sm font-semibold text-slate-950 hover:bg-white/90 transition-all duration-200 hover:scale-[1.02]"
            >
              Explore Product
            </Link>
            <Link
              href="/investors"
              className="rounded-lg border border-slate-700 px-6 py-4 text-sm font-semibold text-slate-200 hover:border-slate-600 hover:bg-slate-800/50 transition-all duration-200"
            >
              Investor Overview
            </Link>
            <Link
              href="/briefing"
              className="rounded-lg border border-slate-700 px-6 py-4 text-sm font-semibold text-slate-200 hover:border-slate-600 hover:bg-slate-800/50 transition-all duration-200"
            >
              Daily Briefing
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-12">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 lg:col-span-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Topic Filters
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Geopolitics", "Markets", "Trade", "Energy", "Technology", "Security"].map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-200"
              >
                {topic}
              </span>
            ))}
          </div>

          <h2 className="mt-8 text-sm font-semibold uppercase tracking-wide text-slate-400">
            Region Filters
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Americas", "Europe", "Asia", "Middle East", "Africa"].map((region) => (
              <span
                key={region}
                className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-200"
              >
                {region}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 lg:col-span-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Live Event Feed</h2>
            <span className="text-sm text-emerald-300">Live monitoring</span>
          </div>

          <div className="mt-5 space-y-4">
            {liveEvents.slice(0, 6).map((event) => (
              <article
                key={event.id}
                className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs uppercase tracking-wide text-slate-400">
                    {event.region}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500">{event.timeAgo}</span>
                    <span className="rounded-full bg-amber-500/15 px-2 py-1 text-xs font-medium text-amber-300">
                      {event.intensity} intensity
                    </span>
                  </div>
                </div>
                <h3 className="mt-2 text-base font-semibold">{event.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-400">
                  <span>{event.topic}</span>
                  <span>•</span>
                  <span>Confidence {event.confidence}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{event.summary}</p>
                <p className="mt-3 text-xs leading-6 text-slate-400">
                  <span className="font-medium text-slate-300">Why this matters:</span>{" "}
                  {event.whyItMatters}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 lg:col-span-3">
          <h2 className="text-lg font-semibold">Daily AI Briefing</h2>
          <p className="mt-2 text-xs text-slate-400">{dailyBriefing.dateLabel}</p>
          <p className="mt-4 text-sm leading-6 text-slate-300">{dailyBriefing.lead}</p>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <h3 className="text-sm font-semibold text-slate-200">Why this matters</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {dailyBriefing.whyThisMatters}
            </p>
          </div>

          <div className="mt-6">
            <Link href="/briefing" className="text-sm font-medium text-emerald-300 hover:text-emerald-200">
              Read full briefing →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-8 lg:grid-cols-12">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 lg:col-span-7">
          <IntelligenceMap activeRegions={activeRegions} />
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 lg:col-span-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Trend Summaries</h2>
            <Link href="/trends" className="text-sm text-emerald-300 hover:text-emerald-200">
              View all
            </Link>
          </div>

          <div className="mt-5 space-y-4">
            {trendCards.map((card) => (
              <div
                key={card.id}
                className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold">{card.title}</h3>
                  <span className="rounded-full bg-sky-500/15 px-2 py-1 text-xs font-medium text-sky-300">
                    {card.value}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-300">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
