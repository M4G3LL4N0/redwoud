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

import { getLiveEvents } from "@/lib/api";

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

      {/* Critical Alerts */}
      <section className="alerts-strip border-y border-red-800/20">
        <div className="mx-auto max-w-7xl px-5 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <svg className="h-4 w-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <h2 className="text-sm font-mono font-semibold tracking-wider text-red-300 uppercase">CRITICAL ALERT STREAM</h2>
            </div>
            <span className="text-xs font-mono text-red-400/80">
              PRIORITY EVENTS ONLY
            </span>
          </div>
          
          <div className="mt-3 grid gap-2 grid-cols-5">
            {liveEvents
              .filter(e => e.intensity === "high" && e.confidence === "high")
              .slice(0, 5)
              .map(event => (
                <div key={event.id} className="console-panel hover:border-red-700/50 transition-colors">
                  <div className="flex items-start justify-between p-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="status-indicator bg-red-400 animate-pulse" />
                        <span className="text-xs font-mono uppercase text-red-300">{event.region}</span>
                      </div>
                      <h3 className="mt-2 text-sm font-medium leading-tight text-white">
                        {event.title}
                      </h3>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-red-900/40 px-2 py-1 text-xs font-mono font-bold text-red-400">
                      {event.score?.toFixed(1) || '9.2'}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Main Dashboard Grid */}
      <section className="panel-grid mx-auto max-w-7xl px-5 py-5">
        {/* Left Sidebar - Filters & Map*/}
        <div className="lg:col-span-4 space-y-5">
          <div className="console-panel">
            <header className="console-panel-header">
              <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                QUICK FILTERS
              </h2>
            </header>
            <div className="p-4 grid grid-cols-2 gap-3">
              <div>
                <h3 className="text-xs font-mono text-slate-400 mb-2">TOPICS</h3>
                <div className="space-y-1">
                  {['Geopolitics', 'Markets', 'Security'].map(topic => (
                    <button 
                      key={topic}
                      className="w-full text-left px-3 py-2 text-xs font-mono rounded border border-slate-700 bg-slate-800/30 hover:bg-slate-700/50 hover:border-slate-600 transition-colors"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-mono text-slate-400 mb-2">REGIONS</h3>
                <div className="space-y-1">
                  {['Americas', 'Europe', 'Asia'].map(region => (
                    <button 
                      key={region}
                      className="w-full text-left px-3 py-2 text-xs font-mono rounded border border-slate-700 bg-slate-800/30 hover:bg-slate-700/50 hover:border-slate-600 transition-colors"
                    >
                      {region}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="console-panel h-full">
            <IntelligenceMap events={liveEvents} />
          </div>
        </div>

        {/* Center Event Feed */}
        <div className="lg:col-span-5">
          <div className="console-panel h-full">
            <header className="console-panel-header flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="status-indicator status-indicator-live" />
                <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                  EVENT STREAM
                </h2>
              </div>
              <span className="text-xs font-mono text-emerald-400">
                {liveEvents.length} ACTIVE SIGNALS
              </span>
            </header>
            
            <div className="divide-y divide-slate-700/50">
              {liveEvents.slice(0, 8).map(event => (
                <article 
                  key={event.id}
                  className="p-4 hover:bg-slate-800/30 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div className={`mt-1 h-2 w-2 rounded-full ${
                      event.intensity === 'high' ? 'bg-red-400' : 
                      event.intensity === 'medium' ? 'bg-amber-400' : 'bg-blue-400'
                    }`} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono uppercase text-slate-400">
                          {event.region} • {event.timeAgo}
                        </span>
                        <span className="text-xs font-mono font-medium text-amber-300">
                          {event.intensity}
                        </span>
                      </div>
                      <h3 className="mt-1 text-sm font-semibold leading-snug text-white">
                        [{event.topic}] {event.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-300">
                        {event.summary}
                      </p>
                      <div className="mt-3 flex items-center gap-3 text-xs text-slate-400">
                        <Link 
                          href={`/entity/${slugify(event.entity)}`}
                          className="font-medium text-blue-300 hover:underline"
                        >
                          {event.entity}
                        </Link>
                        <span>•</span>
                        <span>Confidence: {event.confidence}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-3 space-y-5">
          {/* Briefing Panel */}
          <div className="console-panel">
            <DailyBriefingSection briefing={dailyBriefing} condensed />
          </div>

          {/* System Status */}
          <div className="console-panel">
            <header className="console-panel-header">
              <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                SYSTEM STATUS
              </h2>
            </header>
            <div className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-300">Data Sources</span>
                <span className="rounded-full bg-emerald-900/30 px-2 py-1 text-xs font-mono font-bold text-emerald-400">
                  13/13 ONLINE
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-300">Processing Nodes</span>
                <span className="rounded-full bg-emerald-900/30 px-2 py-1 text-xs font-mono font-bold text-emerald-400">
                  100%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-300">Latency</span>
                <span className="rounded-full bg-slate-700/30 px-2 py-1 text-xs font-mono font-bold text-slate-300">
                  < 12ms
                </span>
              </div>
            </div>
          </div>
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
