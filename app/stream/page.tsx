"use client";

import { useState, useEffect } from 'react';
import EntityActivityPanel from '@/components/dashboard/EntityActivityPanel';
import StreamRefresh from '@/components/stream/StreamRefresh';
import type { IntelligenceEvent } from '@/lib/mockData';

export default function StreamPage() {
  const [events, setEvents] = useState<IntelligenceEvent[]>([]);
  const [liveUpdated, setLiveUpdated] = useState<string>('');

  // Simulate live feed – replace with real SSE or WebSocket in production
  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('/api/stream');
      if (response.ok) {
        const data = await response.json();
        setEvents((prev) => [data, ...prev]);
        setLiveUpdated(new Date().toISOString().split('T')[1].slice(0, 8));
      }
    };
    fetchEvents();
    const interval = setInterval(fetchEvents, 30_000); // poll every 30 s
    return () => clearInterval(interval);
  }, []);

  // Helper to decide visual tier based on score & impact
  const getTierClass = (event: IntelligenceEvent) => {
    if (event.impact === 'High' && (event.score ?? 0) >= 90) 
      return 'border-rose-500/30 bg-gradient-to-b from-rose-900/25 to-rose-950 animate-pulse shadow-rose-900/20';
    if (event.impact === 'High' && (event.score ?? 0) >= 75) 
      return 'border-rose-500/20 bg-gradient-to-b from-rose-900/15 to-slate-950 shadow-rose-900/10';
    if (event.impact === 'Medium') 
      return 'border-amber-500/20 bg-gradient-to-b from-amber-900/15 to-slate-950 shadow-amber-900/10';
    return 'border-slate-700/30 bg-gradient-to-b from-slate-900/15 to-slate-950';
  };

  // Helper to create a group class for correlation display
  const getGroupClass = (event: IntelligenceEvent) => {
    const group = [event.region, event.topic, event.entity].join('|');
    return `group-${group.replace(/[^a-z0-9]/gi, '-')}`;
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Header with console title and live status */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-extrabold tracking-tight">REDWOUD Intelligence Console</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-white">LIVE</span>
            <span className="ml-3 text-sm text-slate-300">{liveUpdated}</span>
          </div>
        </div>

        {/* Main grid: left = detailed stream, right = top signals & operations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column: detailed event list */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {events.slice(0, 15).map((event) => (
                <div
                  key={event.id}
                  className={`
                    p-3 rounded-xl border shadow-[0_0_0_1px_theme(colors.slate.800/30)] backdrop-blur-sm 
                    transition-all duration-200 ease-out
                    ${getTierClass(event)} 
                    hover:shadow-[0_0_15px_theme(colors.slate.800/30)] hover:border-slate-700/50
                    ${getGroupClass(event)}
                    relative overflow-hidden
                    after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:to-slate-950/20 after:pointer-events-none
                  `}
                >
                  {/* Score Indicator */}
                  <div className="absolute top-2 right-2">
                    <div className={`
                      px-2 py-1 rounded-full text-xs font-semibold
                      ${event.score && event.score >= 90 ? 'bg-red-500/20 text-red-300' :
                        event.score && event.score >= 75 ? 'bg-amber-500/20 text-amber-300' :
                        'bg-emerald-500/20 text-emerald-300'}
                    `}>
                      {event.score ?? 'N/A'}
                    </div>
                  </div>

                  {/* Header row: topic & region tags */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs rounded font-semibold ${
                        event.impact === 'High' ? 'bg-red-500/20 text-red-300' :
                        event.impact === 'Medium' ? 'bg-amber-500/20 text-amber-300' :
                        'bg-emerald-500/20 text-emerald-300'
                      }`}>
                        {event.topic}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded font-semibold ${
                        event.region === 'Americas' ? 'bg-blue-500/20 text-blue-300' :
                        event.region === 'Europe' ? 'bg-indigo-500/20 text-indigo-300' :
                        'bg-green-500/20 text-green-300'
                      }`}>
                        {event.region}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-400 font-mono">{event.timeAgo.replace(' ago', '')}</div>
                      <div className={`text-xs font-mono border border-slate-800/50 px-1.5 py-0.5 rounded ${
                        event.confidence === 'high' ? 'text-amber-400' :
                        event.confidence === 'medium' ? 'text-slate-400' :
                        'text-slate-500'
                      }`}>
                        {event.confidence.toUpperCase()}
                      </div>
                    </div>
                  </div>

                      {/* Title & Entity */}
                      <h3 className="text-sm font-semibold text-slate-100 mb-1.5 line-clamp-2">
                        {event.title}
                      </h3>
                      
                      {/* Entity & Topic */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-slate-300">
                          {event.entity}
                        </span>
                        <span className="text-slate-700">•</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded ${
                          event.topic === 'Energy' ? 'bg-amber-500/10 text-amber-300' :
                          event.topic === 'Technology' ? 'bg-blue-500/10 text-blue-300' :
                          'bg-slate-800 text-slate-400'
                        }`}>
                          {event.topic}
                        </span>
                      </div>

                      {/* Source & Intensity */}
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-slate-400 flex items-center gap-1">
                          <span className="max-w-[120px] truncate">
                            {typeof event.sources?.[0] === "string" 
                              ? event.sources[0] 
                              : event.sources?.[0]?.name || "Unknown source"}
                          </span>
                          {event.sources?.[0]?.tier && (
                            <span className="text-[10px] px-1 py-0.5 rounded bg-slate-800/50 text-slate-400">
                              Tier {event.sources[0].tier}
                            </span>
                          )}
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded font-mono ${
                          event.intensity === 'high' ? 'bg-rose-500/10 text-rose-300' :
                          event.intensity === 'medium' ? 'bg-amber-500/10 text-amber-300' :
                          'bg-emerald-500/10 text-emerald-300'
                        }`}>
                          {event.intensity.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: analytics & operations */}
          <div className="space-y-4">
            {/* Entity Activity Panel */}
            <EntityActivityPanel 
              events={events}
              groupBy="entity"
              title="Strategic Entities"
              description="Most signaled frameworks and assets."
            />

            {/* Sector Activity Panel */}
            <EntityActivityPanel 
              events={events.filter(e => e.impact === 'High')}
              groupBy="topic"
              title="Critical Sectors"
              description="Highest impact developments by topic."
            />

            {/* Operations Status */}
            <div className="p-4 rounded-xl border border-slate-800/50 bg-gradient-to-b from-slate-900/40 to-slate-950/90 backdrop-blur-sm shadow-[0_0_0_1px_theme(colors.slate.800/30)]">
              <div className="absolute -top-[1px] -left-[1px] -right-[1px] h-[2px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"></div>
              <h2 className="text-sm font-semibold mb-4 text-slate-300">OPERATIONS DASHBOARD</h2>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex flex-col p-2 bg-slate-800/20 rounded-lg border border-slate-800">
                  <span className="text-xs text-slate-400">Alerts</span>
                  <span className="text-xl font-medium text-emerald-300">{events.filter(e => e.impact === 'High').length}</span>
                </div>
                <div className="flex flex-col p-2 bg-slate-800/20 rounded-lg border border-slate-800">
                  <span className="text-xs text-slate-400">Signals</span>
                  <span className="text-xl font-medium text-amber-300">{events.length}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Monitor Frequency</span>
                  <span className="font-mono text-emerald-300">30s</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Last Update</span>
                  <span className="font-mono text-slate-300">{liveUpdated}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Data Freshness</span>
                  <span className="font-mono text-amber-300">&lt;1min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur border-t border-slate-800/50 py-1.5 px-4">
        <div className="mx-auto max-w-7xl flex justify-between items-center text-xs">
          <div className="text-slate-400 font-mono">REDWOUD INTELLIGENCE CONSOLE v2.0</div>
          <div className="flex items-center gap-3">
            <span className="text-slate-400">Last refresh: {liveUpdated} UTC</span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-emerald-400">LIVE</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
