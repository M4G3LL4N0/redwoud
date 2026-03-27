"use client";

import { useState, useEffect, useMemo } from "react";
import type { IntelligenceEvent, Region, Topic } from "@/lib/mockData";
import AlertSettingsPanel from "@/components/dashboard/AlertSettingsPanel";
import EntityActivityPanel from "@/components/dashboard/EntityActivityPanel";
import EventFeed from "@/components/dashboard/EventFeed";
import FiltersBar from "@/components/dashboard/FiltersBar";

function isHighPriority(event: IntelligenceEvent): boolean {
  return event.impact === "High" || (event.intensity === "high" && event.confidence === "high");
}

function isRiskEvent(event: IntelligenceEvent): boolean {
  return event.intensity === "high" || event.impact === "High";
}

interface SummaryCardProps {
  title: string;
  description: string;
  count: number;
}

function SummaryCard({ title, description, count }: SummaryCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/50 to-slate-950/50 p-5 hover:border-slate-700 transition-all group cursor-pointer">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
        <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
          {count} active
        </span>
      </div>
      <p className="mt-2 text-sm text-slate-300 line-clamp-2">{description}</p>
      <div className="mt-4 flex items-end justify-between">
        <span className="text-3xl font-bold text-emerald-400">{count}</span>
        <button 
          className="text-xs font-medium text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={(e) => {
            e.stopPropagation();
            // TODO: Implement drill-down
          }}
        >
          View Details →
        </button>
      </div>
    </div>
  );
}

export default function AlertsPage() {
  const [events, setEvents] = useState<IntelligenceEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<Region | "All">("All");
  const [selectedTopic, setSelectedTopic] = useState<Topic | "All">("All");

  const fetchEvents = async () => {
    try {
      const response = await fetch("/api/feed", { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`Failed to fetch events: ${response.status}`);
      }
      const data: IntelligenceEvent[] = await response.json();
      setEvents(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      setEvents([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
    const interval = setInterval(fetchEvents, 60000);
    return () => clearInterval(interval);
  }, []);

  const highPriorityEvents = useMemo(() => events.filter(isHighPriority), [events]);
  const riskEvents = useMemo(() => events.filter(isRiskEvent), [events]);

  const filteredHighPriority = useMemo(() => {
    return highPriorityEvents.filter((event) => {
      const regionMatch = selectedRegion === "All" || event.region === selectedRegion;
      const topicMatch = selectedTopic === "All" || event.topic === selectedTopic;
      return regionMatch && topicMatch;
    });
  }, [highPriorityEvents, selectedRegion, selectedTopic]);

  const filteredRisk = useMemo(() => {
    return riskEvents.filter((event) => {
      const regionMatch = selectedRegion === "All" || event.region === selectedRegion;
      const topicMatch = selectedTopic === "All" || event.topic === selectedTopic;
      return regionMatch && topicMatch;
    });
  }, [riskEvents, selectedRegion, selectedTopic]);

  // Compute distinct counts for categories from high-priority events
  const entityCounts = useMemo(() => {
    const counts = new Map<string, number>();
    filteredHighPriority.forEach((event) => {
      counts.set(event.entity, (counts.get(event.entity) || 0) + 1);
    });
    return counts;
  }, [filteredHighPriority]);

  const regionCounts = useMemo(() => {
    const counts = new Map<string, number>();
    filteredHighPriority.forEach((event) => {
      counts.set(event.region, (counts.get(event.region) || 0) + 1);
    });
    return counts;
  }, [filteredHighPriority]);

  const topicCounts = useMemo(() => {
    const counts = new Map<string, number>();
    filteredHighPriority.forEach((event) => {
      counts.set(event.topic, (counts.get(event.topic) || 0) + 1);
    });
    return counts;
  }, [filteredHighPriority]);

  const categories = [
    {
      title: "Entity Alerts",
      description: "Track specific countries, companies, industries, or strategic assets.",
      count: entityCounts.size,
    },
    {
      title: "Region Alerts",
      description: "Monitor changes across Europe, Asia, the Middle East, Africa, and the Americas.",
      count: regionCounts.size,
    },
    {
      title: "Topic Alerts",
      description: "Follow geopolitical, energy, trade, technology, market, and security developments.",
      count: topicCounts.size,
    },
    {
      title: "Risk Alerts",
      description: "Surface rising intensity, volatility, disruption, and escalation signals.",
      count: filteredRisk.length,
    },
  ];

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100">
        <section className="border-b border-slate-800">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Alerting Control Center
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
              Real-time intelligence alerts for the signals that matter most.
            </h1>
          </div>
        </section>
        <div className="flex items-center justify-center py-20">
          <p className="text-slate-400">Loading alert data...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100">
        <section className="border-b border-slate-800">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Alerting Control Center
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
              Real-time intelligence alerts for the signals that matter most.
            </h1>
          </div>
        </section>
        <div className="flex items-center justify-center py-20">
          <p className="text-red-400">Error loading alerts: {error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Alerting Control Center
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
            Real-time intelligence alerts for the signals that matter most.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            REDWOUD alerts are designed to notify users when important developments emerge across
            tracked entities, regions, topics, and risk conditions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        {/* Operational Control Center Layout */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Active Alerts Bridge */}
            <section className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-slate-100">Active High-Priority Signals</h2>
                <span className="rw-chip bg-slate-800/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {filteredHighPriority.length} active
                </span>
              </div>
          {filteredHighPriority.length > 0 ? (
            <EventFeed events={filteredHighPriority} />
          ) : (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 text-center">
              <div className="mx-auto max-w-xs">
                <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-slate-200 mb-1">No Active Signals</h4>
                <p className="text-sm text-slate-400">Adjust filters or check back later for updates</p>
              </div>
            </div>
          )}
        </section>
        </div>

            {/* Compact Summary Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((cat) => (
                <SummaryCard key={cat.title} {...cat} />
              ))}
            </div>

            {/* Signal Activity Panels */}
            <div className="space-y-6">
            <FiltersBar
              selectedRegion={selectedRegion}
              selectedTopic={selectedTopic}
              onRegionChange={setSelectedRegion}
              onTopicChange={setSelectedTopic}
            />
            <div className="grid gap-6 md:grid-cols-2">
              <EntityActivityPanel
                events={filteredHighPriority}
                groupBy="entity"
                title="Entity Alerts"
                description="Strategic entities with active high-priority signals."
              />
              <EntityActivityPanel
                events={filteredHighPriority}
                groupBy="region"
                title="Region Alerts"
                description="Regions with active high-priority signals."
              />
              <EntityActivityPanel
                events={filteredHighPriority}
                groupBy="topic"
                title="Topic Alerts"
                description="Topics with active high-priority signals."
              />
              {/* Risk panel */}
              <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Risk Alerts
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Rising intensity or high impact events.
                    </p>
                  </div>
                </div>
                <div className="mt-5 space-y-3">
                  {filteredRisk.slice(0, 6).map((event) => (
                    <div
                      key={event.id}
                      className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3"
                    >
                      <div className="flex flex-col">
                        <span className="text-sm text-slate-200 truncate">{event.title}</span>
                        <span className="text-xs text-slate-400">
                          {event.region} · {event.topic}
                        </span>
                      </div>
                      <span
                        className={`rounded-full px-2 py-1 text-xs font-medium ${
                          event.intensity === "high"
                            ? "bg-rose-500/10 text-rose-300"
                            : "bg-amber-500/10 text-amber-300"
                        }`}
                      >
                        {event.intensity === "high" ? "High intensity" : "High impact"}
                      </span>
                    </div>
                  ))}
                  {filteredRisk.length === 0 && (
                    <p className="text-sm text-slate-400">No risk alerts matching current filters.</p>
                  )}
                </div>
              </section>
            </div>
          </div>
          </div>

          {/* Configuration Column */}
          <div className="lg:col-span-4 space-y-8">
            <AlertSettingsPanel />
            {/* Future Controls Placeholder */}
            <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Advanced Controls
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Coming soon: Escalation workflows and team collaboration
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
