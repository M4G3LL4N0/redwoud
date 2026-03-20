"use client";

import { useState, useEffect } from 'react';
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

                  {/* Title */}
                  <h3 className="text-base font-semibold mb-1">{event.title}</h3>

                  {/* Entity & Source */}
                  <div className="flex items-center gap-2 text-sm mb-2">
                    <span className="text-slate-300 font-medium">{event.entity}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-400 text-xs">{event.source}</span>
                  </div>

                  {/* Intensity & Why it matters */}
                  <div className="flex items-center justify-between text-sm">
                    <p className="text-xs leading-5 text-slate-400/80">{event.whyItMatters}</p>
                    <span className={`px-2 py-1 text-xs rounded ${
                      event.intensity.toUpperCase() === 'HIGH' ? 'bg-red-500/20 text-red-300' :
                      event.intensity.toUpperCase() === 'MEDIUM' ? 'bg-amber-500/20 text-amber-300' :
                      'bg-emerald-500/20 text-emerald-300'
                    }`}>
                      {event.intensity.toUpperCase()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: top signals & operations panels */}
          <div className="space-y-6">
            {/* Top Signals panel */}
            <div className="p-4 rounded-xl border border-slate-800/50 bg-gradient-to-b from-slate-900/40 to-slate-950/90 backdrop-blur-sm shadow-[0_0_0_1px_theme(colors.slate.800/30)]">
              <div className="absolute -top-[1px] -left-[1px] -right-[1px] h-[2px] bg-gradient-to-r from-transparent via-sky-500/50 to-transparent"></div>
              <h2 className="text-sm font-semibold mb-4 text-slate-300">TOP SIGNALS</h2>
              <div className="grid grid-cols-2 gap-2">
                {events.slice(0, 5).map((event) => (
                  <div
                    key={event.id}
                    className={`
                      p-3 rounded-lg transition-all 
                      ${event.impact === 'High'
                        ? 'bg-red-900/20 border-red-500/30'
                        : event.impact === 'Medium'
                        ? 'bg-amber-900/20 border-amber-500/30'
                        : 'bg-emerald-900/20 border-emerald-500/30'}
                      hover:shadow-lg hover:border-white/20`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono {event.confidence === 'high' ? 'text-amber-400' : event.confidence === 'medium' ? 'text-slate-400' : 'text-slate-500'}">
                        {event.confidence.toUpperCase()}
                      </span>
                      <span className="text-xs text-slate-400">{event.timeAgo}</span>
                    </div>
                    <h4 className="text-sm font-medium">{event.title}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Operations panel – compact status tiles */}
            <div className="p-4 rounded-xl border border-slate-800/50 bg-gradient-to-b from-emerald-900/15 to-slate-950/90 backdrop-blur-sm shadow-[0_0_0_1px_theme(colors.slate.800/30)]">
              <div className="absolute -top-[1px] -left-[1px] -right-[1px] h-[2px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"></div>
              <h2 className="text-sm font-semibold mb-4 text-slate-300">OPERATIONS</h2>
              <div className="grid grid-cols-2 gap-2">
                {[['OPERATIONAL', 'STATUS', 'bg-amber-500', 'text-amber-300'], ['MONITORING', 'ACTIVE', 'bg-red-500', 'text-red-300']].map(
                  ([label, value, bg, color]) => (
                    <div
                      key={label}
                      className={`px-3 py-1.5 rounded text-xs font-medium bg-[#{bg}]/${'0.1'} text-[#{color}]`}
                    >
                      {label}
                      <div className="mt-0.5">{value}</div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
