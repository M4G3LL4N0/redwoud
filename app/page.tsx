import Link from "next/link";
import { slugify } from "@/lib/utils";
import {
  dailyBriefing,
  liveEvents as fallbackEvents,
  trendCards,
  type IntelligenceEvent,
} from "@/lib/mockData";
import DailyBriefingSection from "@/components/dashboard/DailyBriefing";
import EntityActivityPanel from "@/components/dashboard/EntityActivityPanel";

async function getLiveEvents(): Promise<IntelligenceEvent[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
      ? process.env.NEXT_PUBLIC_SITE_URL
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

  const activeRegions = Array.from(
    new Set(liveEvents.map((event) => event.region).filter((region) => region !== "All"))
  );
  const highIntensitySignals = liveEvents.filter((event) => event.intensity === "high").length;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-6 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium tracking-wide text-emerald-300">
            REDWOUD · REAL-TIME GLOBAL INTELLIGENCE
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
            Understand the world in real time.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            REDWOUD turns worldwide data, geopolitical developments, market signals,
            economic indicators, and public information into structured, actionable intelligence.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/product"
              className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950"
            >
              Explore Product
            </Link>
            <Link
              href="/investors"
              className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200"
            >
              Investor Overview
            </Link>
            <Link
              href="/briefing"
              className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200"
            >
              Daily Briefing
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Events monitored now
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">{liveEvents.length}</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Active regions
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">{activeRegions.length}</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                High-intensity signals
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">{highIntensitySignals}</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Briefing status
              </p>
              <p className="mt-3 text-2xl font-semibold text-emerald-300">Updated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Alerts Strip */}
      <section className="border-y border-slate-800 bg-gradient-to-r from-red-900/50 via-red-900/30 to-red-900/10">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {liveEvents
              .filter(
                (event) =>
                  event.intensity === "high" && event.confidence === "high"
              )
              .slice(0, 5)
              .map((event) => (
                <div
                  key={event.id}
                  className="rounded-lg border border-red-800/30 bg-red-900/10 p-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium uppercase text-red-300">
                      {event.region}
                    </span>
                    <span className="rounded-full bg-red-500/15 px-2 py-1 text-xs font-medium text-red-300">
                      {event.intensity}
                    </span>
                  </div>
                  <h3 className="mt-2 text-sm font-semibold text-white">
                    {event.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-xs text-red-300">
                    <span>Risk score:</span>
                    <span className="font-medium">9.2</span>
                  </div>
                </div>
              ))}
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
                  <Link 
                    href={`/entity/${slugify(event.entity)}`}
                    className="hover:text-slate-200 hover:underline"
                  >
                    {event.entity}
                  </Link>
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
          <DailyBriefingSection briefing={dailyBriefing} />
        </div>
      </section>

      {/* Lower Dashboard Sections */}
      <section className="mx-auto grid max-w-7xl gap-4 px-6 pb-4 lg:grid-cols-12">
        {/* Entity Activity */}
        <div className="dashboard-panel lg:col-span-7">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Entity Activity Monitoring</h2>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.5)]" />
              <span className="text-sm text-blue-300">Tracking {liveEvents.reduce((acc, event) => acc + (event.entity ? 1 : 0), 0)} entities</span>
            </div>
          </div>
          <div className="mt-4">
            <EntityActivityPanel events={liveEvents} />
          </div>
        </div>

        {/* Trend Signals */}
        <div className="dashboard-panel lg:col-span-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Strategic Trend Indicators</h2>
            <Link 
              href="/trends" 
              className="text-sm text-emerald-300 hover:text-emerald-200"
            >
              View detailed analysis →
            </Link>
          </div>

          <div className="mt-4 space-y-3">
            {trendCards.map((card) => (
              <div
                key={card.id}
                className="dashboard-feed-item"
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
