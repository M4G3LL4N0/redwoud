import { supabaseBrowser } from "@/lib/supabase";

interface Event {
  id: string;
  title: string;
  date: string;
  score: number;
  entity: string;
  region: string;
  topics: string[];
}

export default async function EntityPage({
  params,
}: {
  params: { slug: string };
}) {
  // Fetch events for this entity
  const { data: events, error } = await supabaseBrowser
    .from("events")
    .select("*")
    .eq("entity", params.slug);

  if (error) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Connection Error
          </p>
          <h1 className="mt-4 text-4xl font-semibold">
            Could not load entity data
          </h1>
        </div>
      </main>
    );
  }

  if (!events || events.length === 0) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
            No Signals
          </p>
          <h1 className="mt-4 text-4xl font-semibold">{params.slug}</h1>
          <p className="mt-4 text-slate-300">
            No intelligence signals detected for this entity yet.
          </p>
        </div>
      </main>
    );
  }

  // Calculate analytics
  const eventCount = events.length;
  const riskScore = events.reduce((sum, event) => sum + event.score, 0) / eventCount;
  
  const regions = events.reduce<Record<string, number>>((acc, event) => {
    acc[event.region] = (acc[event.region] || 0) + 1;
    return acc;
  }, {});
  const topRegions = Object.entries(regions)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([region]) => region);

  const topics = events.flatMap(event => event.topics)
    .reduce<Record<string, number>>((acc, topic) => {
      acc[topic] = (acc[topic] || 0) + 1;
      return acc;
    }, {});
  const topTopics = Object.entries(topics)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([topic]) => topic);

  const recentEvents = [...events]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  const riskColor = riskScore > 7 ? "text-red-400" : 
                   riskScore > 4 ? "text-yellow-400" : 
                   "text-green-400";

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Header */}
        <div className="border-b border-slate-800 pb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Entity Intelligence
          </p>
          <h1 className="mt-4 text-4xl font-semibold capitalize">
            {params.slug.replace(/-/g, " ")}
          </h1>
        </div>

        {/* Metrics Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-lg bg-slate-900">
            <p className="text-sm text-slate-400">Event Count</p>
            <p className="mt-2 text-2xl font-semibold">{eventCount}</p>
          </div>
          <div className="p-6 rounded-lg bg-slate-900">
            <p className="text-sm text-slate-400">Risk Score</p>
            <p className={`mt-2 text-2xl font-semibold ${riskColor}`}>
              {riskScore.toFixed(1)}
            </p>
          </div>
          <div className="p-6 rounded-lg bg-slate-900">
            <p className="text-sm text-slate-400">Top Regions</p>
            <div className="mt-2 space-y-1">
              {topRegions.map(region => (
                <p key={region} className="text-slate-200">{region}</p>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-lg bg-slate-900">
            <p className="text-sm text-slate-400">Top Topics</p>
            <div className="mt-2 space-y-1">
              {topTopics.map(topic => (
                <p key={topic} className="text-slate-200">{topic}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Events */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold">Recent Events</h2>
          <div className="mt-4 space-y-3">
            {recentEvents.map(event => (
              <div key={event.id} className="p-4 rounded-lg bg-slate-900 border border-slate-800">
                <div className="flex justify-between">
                  <h3 className="font-medium">{event.title}</h3>
                  <span className="text-sm text-slate-400">{event.date}</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-slate-400">{event.region}</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${riskColor} bg-opacity-20 ${riskColor.replace('text', 'bg')}`}>
                    Score: {event.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
