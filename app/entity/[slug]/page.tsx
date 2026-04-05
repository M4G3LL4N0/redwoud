import { supabaseAdmin } from "@/lib/supabase";
import { type Region } from "@/lib/mockData";

type PageProps = {
  params: {
    slug: string;
  };
};

type EventItem = {
  id: string;
  title: string;
  region: Region;
  topic: string;
  score: number;
  intensity: string;
  confidence: string;
  timestamp: string;
  sources?: Array<{ name: string }>;
  why_it_matters?: string;
};

export default async function EntityPage({ params }: PageProps) {
  const slug = decodeURIComponent(params.slug);
  const entityName = slug.replace(/-/g, " ");

  let events: EventItem[] = [];

  try {
    const { data } = await supabaseAdmin
      .from("events")
      .select("*")
      .ilike("entity", `%${entityName}%`)
      .order("score", { ascending: false })
      .limit(50);

    events = (data as EventItem[]) || [];
  } catch {
    events = [];
  }

  // Calculate metrics
  const totalSignals = events.length;
  const avgScore = totalSignals > 0 
    ? Math.round(events.reduce((sum, e) => sum + (e.score || 0), 0) / totalSignals)
    : 0;

  // Calculate region distribution
  const regions = events.reduce<Record<string, number>>((acc, event) => {
    acc[event.region] = (acc[event.region] || 0) + 1;
    return acc;
  }, {});

  const topRegions = Object.entries(regions)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  // Calculate topic distribution
  const topics = events.reduce<Record<string, number>>((acc, event) => {
    acc[event.topic] = (acc[event.topic] || 0) + 1;
    return acc;
  }, {});

  const topTopics = Object.entries(topics)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  // Calculate intensity distribution
  const intensities = {
    high: events.filter(e => e.intensity === "high").length,
    medium: events.filter(e => e.intensity === "medium").length,
    low: events.filter(e => e.intensity === "low").length
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900/30">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Strategic Entity Profile
              </p>
              <h1 className="mt-2 text-4xl font-semibold sm:text-5xl">
                {entityName.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-7 text-slate-300">
                Comprehensive intelligence profile tracking {entityName}'s strategic positioning, 
                regional exposure, and thematic engagement patterns.
              </p>
            </div>
            <div className="flex flex-col items-end gap-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 w-full max-w-xs">
                <p className="text-xs uppercase tracking-wider text-slate-400">Profile Status</p>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>
                    <p className="text-sm font-medium text-emerald-400">Live Monitoring</p>
                  </div>
                  <span className="text-xs text-slate-400">Updated</span>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 w-full max-w-xs">
                <p className="text-xs uppercase tracking-wider text-slate-400">Signal Volume</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xl font-semibold text-white">{totalSignals}</span>
                  <span className="text-xs text-slate-400">last 30d</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-8 lg:grid-cols-12">
        <div className="lg:col-span-4 space-y-6">
          {/* Entity Risk Profile */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Strategic Risk Profile</h2>
              <div className={`rounded-full px-3 py-1 text-xs font-medium ${
                avgScore > 70 ? 'bg-red-500/10 text-red-400' :
                avgScore > 40 ? 'bg-amber-500/10 text-amber-400' :
                'bg-emerald-500/10 text-emerald-400'
              }`}>
                {avgScore > 70 ? 'High Risk' : avgScore > 40 ? 'Moderate Risk' : 'Low Risk'}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                <p className="text-xs uppercase tracking-wider text-slate-500">Avg Score</p>
                <p className={`mt-2 text-2xl font-semibold ${
                  avgScore > 70 ? 'text-red-400' :
                  avgScore > 40 ? 'text-amber-400' :
                  'text-emerald-400'
                }`}>
                  {avgScore}
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                <p className="text-xs uppercase tracking-wider text-slate-500">High Intensity</p>
                <p className="mt-2 text-2xl font-semibold text-rose-400">{intensities.high}</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                <p className="text-xs uppercase tracking-wider text-slate-500">Regions</p>
                <p className="mt-2 text-2xl font-semibold text-sky-400">{topRegions.length}</p>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-medium text-slate-300 mb-2">Risk Composition</h3>
              <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-amber-500 to-red-500"
                  style={{ 
                    background: `linear-gradient(90deg, 
                      #10b981 ${Math.min(avgScore, 40)}%, 
                      #f59e0b ${Math.min(avgScore, 40)}% ${Math.min(avgScore, 70)}%, 
                      #ef4444 ${Math.min(avgScore, 70)}% ${avgScore}%, 
                      #1e293b ${avgScore}%)`
                  }}
                />
              </div>
              <div className="mt-2 flex justify-between text-xs text-slate-400">
                <span>Low</span>
                <span>Moderate</span>
                <span>High</span>
              </div>
            </div>
          </div>

          {/* Signal Distribution */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <h2 className="text-lg font-semibold">Signal Distribution</h2>
            <p className="mt-1 text-sm text-slate-400">Breakdown of recent activity</p>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <h3 className="text-sm font-medium text-slate-300 mb-3">By Region</h3>
                <div className="space-y-3">
                  {topRegions.map(([region, count]) => (
                    <div key={region} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-300">{region}</span>
                        <span className="text-slate-400">{count} ({Math.round((count / totalSignals) * 100)}%)</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-slate-800">
                        <div 
                          className="h-full rounded-full bg-sky-500" 
                          style={{ width: `${(count / totalSignals) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <h3 className="text-sm font-medium text-slate-300 mb-3">By Topic</h3>
                <div className="space-y-3">
                  {topTopics.map(([topic, count]) => (
                    <div key={topic} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-300">{topic}</span>
                        <span className="text-slate-400">{count} ({Math.round((count / totalSignals) * 100)}%)</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-slate-800">
                        <div 
                          className="h-full rounded-full bg-emerald-500" 
                          style={{ width: `${(count / totalSignals) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <h3 className="text-sm font-medium text-slate-300 mb-3">By Intensity</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-1">
                  <p className="text-xs text-slate-400">High</p>
                  <p className="text-xl font-semibold text-rose-400">{intensities.high}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-slate-400">Medium</p>
                  <p className="text-xl font-semibold text-amber-400">{intensities.medium}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-slate-400">Low</p>
                  <p className="text-xl font-semibold text-emerald-400">{intensities.low}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Relationships */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <h2 className="text-lg font-semibold">Key Relationships</h2>
            <p className="mt-1 text-sm text-slate-400">Frequently co-occurring entities</p>
            
            <div className="mt-4 space-y-3">
              {topTopics.map(([topic]) => (
                <div key={topic} className="rounded-lg border border-slate-800 bg-slate-950/60 p-3">
                  <h3 className="text-sm font-medium text-slate-300">{topic}</h3>
                  <p className="mt-1 text-xs text-slate-400">
                    {events.filter(e => e.topic === topic).length} related signals
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6">
          {/* Recent Signals */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Recent Signals</h2>
              <span className="rounded-full bg-slate-800/50 px-3 py-1 text-xs font-medium text-slate-400">
                {totalSignals} intelligence items
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {events.length > 0 ? (
                events.slice(0, 10).map((event) => (
                  <article
                    key={event.id}
                    className="rounded-xl border border-slate-800 bg-slate-950/70 p-5 transition-all hover:border-slate-700"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-500">
                          <span>{event.region}</span>
                          <span>•</span>
                          <span>{event.topic}</span>
                        </div>
                        <h3 className="mt-2 text-lg font-semibold text-white">{event.title}</h3>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className={`text-xs font-medium ${
                          event.score > 70 ? 'text-red-400' :
                          event.score > 40 ? 'text-amber-400' :
                          'text-emerald-400'
                        }`}>
                          Score {event.score}
                        </span>
                        <span className="mt-1 text-xs text-slate-400">
                          {new Date(event.timestamp).toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                      <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-2">
                        <span className="text-slate-400">Intensity</span>
                        <p className={`mt-1 font-medium ${
                          event.intensity === 'high' ? 'text-red-400' :
                          event.intensity === 'medium' ? 'text-amber-400' :
                          'text-emerald-400'
                        }`}>
                          {event.intensity}
                        </p>
                      </div>
                      <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-2">
                        <span className="text-slate-400">Confidence</span>
                        <p className={`mt-1 font-medium ${
                          event.confidence === 'high' ? 'text-emerald-400' :
                          event.confidence === 'medium' ? 'text-amber-400' :
                          'text-red-400'
                        }`}>
                          {event.confidence}
                        </p>
                      </div>
                      <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-2">
                        <span className="text-slate-400">Source</span>
                        <p className="mt-1 font-medium text-slate-300">
                          {event.sources?.[0]?.name || 'Unknown'}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-sm leading-6 text-slate-300">
                        {event.summary || "No summary available."}
                      </p>
                    </div>

                    {event.why_it_matters && (
                      <div className="mt-4 rounded-lg border border-slate-800 bg-slate-950/60 p-3">
                        <h4 className="text-xs uppercase tracking-wider text-slate-400">
                          Strategic Implications
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          {event.why_it_matters}
                        </p>
                      </div>
                    )}
                  </article>
                ))
              ) : (
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-400">
                  No signals yet for this entity.
                </div>
              )}
            </div>
          </div>

          {/* Analysis Summary */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <h2 className="text-lg font-semibold">Analysis Summary</h2>
            <p className="mt-1 text-sm text-slate-400">Strategic assessment of entity activity</p>
            
            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <h3 className="text-sm font-medium text-slate-300">Key Risks</h3>
                <ul className="mt-2 space-y-2 text-sm text-slate-400">
                  {avgScore > 70 && (
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">•</span>
                      <span>High strategic risk exposure across multiple regions</span>
                    </li>
                  )}
                  {intensities.high > 3 && (
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">•</span>
                      <span>Frequent high-intensity events requiring monitoring</span>
                    </li>
                  )}
                  {topRegions.length > 3 && (
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">•</span>
                      <span>Wide regional footprint increases operational complexity</span>
                    </li>
                  )}
                  {topTopics.length > 2 && (
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">•</span>
                      <span>Diverse thematic engagement across strategic domains</span>
                    </li>
                  )}
                </ul>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <h3 className="text-sm font-medium text-slate-300">Monitoring Priorities</h3>
                <ul className="mt-2 space-y-2 text-sm text-slate-400">
                  {topRegions.slice(0, 2).map(([region]) => (
                    <li key={region} className="flex items-start gap-2">
                      <span className="text-sky-400">•</span>
                      <span>Regional developments in {region}</span>
                    </li>
                  ))}
                  {topTopics.slice(0, 2).map(([topic]) => (
                    <li key={topic} className="flex items-start gap-2">
                      <span className="text-sky-400">•</span>
                      <span>{topic}-related policy and market movements</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
