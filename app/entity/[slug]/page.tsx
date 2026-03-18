import { supabaseAdmin } from "@/lib/supabase";

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function EntityPage({ params }: PageProps) {
  const slug = decodeURIComponent(params.slug);
  const entityName = slug.replace(/-/g, " ");

  let events: any[] = [];

  try {
    const { data } = await supabaseAdmin
      .from("events")
      .select("*")
      .ilike("entity", `%${entityName}%`)
      .order("score", { ascending: false })
      .limit(20);

    events = data || [];
  } catch {
    events = [];
  }

  const topRegions = Array.from(
    new Set(events.map((event) => event.region).filter(Boolean))
  ).slice(0, 5);

  const topTopics = Array.from(
    new Set(events.map((event) => event.topic).filter(Boolean))
  ).slice(0, 5);

  const avgScore =
    events.length > 0
      ? Math.round(
          events.reduce((sum, event) => sum + (event.score || 0), 0) / events.length
        )
      : 0;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Strategic Entity Profile
              </p>
              <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">
                {entityName
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Comprehensive intelligence profile tracking {entityName}'s strategic positioning, 
                regional exposure, and thematic engagement patterns.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-950/70 to-slate-900/50 p-6">
                <p className="text-sm font-medium text-slate-400">Profile Status</p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>
                  <p className="text-sm font-medium text-emerald-400">Live Intelligence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-8 lg:grid-cols-12">
        <div className="lg:col-span-4 space-y-6">
          {/* Entity Overview */}
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-950/80 to-slate-900/30 p-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-sm font-medium tracking-wider text-emerald-300 uppercase">Strategic Entity Profile</h2>
                <h3 className="mt-1 text-xl font-semibold text-slate-100">{entityName}</h3>
              </div>
              <div className="rounded-lg bg-gradient-to-r from-slate-800 to-slate-900/50 px-2 py-1 border border-slate-800">
                <p className="text-xs font-medium text-slate-300">{events.length} Signals</p>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <p className="text-xs text-slate-400">Risk Score</p>
                <div className="flex items-baseline gap-1">
                  <span className={`text-2xl font-semibold ${
                    avgScore > 70 ? 'text-red-400' : 
                    avgScore > 40 ? 'text-amber-400' : 'text-emerald-400'}`}>
                    {avgScore}
                  </span>
                  <span className="text-xs text-slate-400">/100</span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-slate-400">Regions</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-semibold text-slate-100">{topRegions.length}</span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-slate-400">Themes</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-semibold text-slate-100">{topTopics.length}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <h4 className="text-sm font-medium text-slate-300">Strategic Presence</h4>
              <ul className="space-y-2">
                {topRegions.slice(0,3).map(region => (
                  <li key={region} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                    <span className="text-sm text-slate-300">{region}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-gradient-to-b from-slate-900/60 to-slate-900/20 p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium tracking-wider text-slate-300 uppercase">Risk Profile</h2>
              <div className="flex items-center gap-1">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                <span className="text-[10px] uppercase tracking-wider text-slate-400">Live</span>
              </div>
            </div>
            <div className="mt-3 flex items-end justify-between">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400">
                  {avgScore}
                </span>
                <span className="text-xs text-slate-400">/100</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-end">
                  <span className="text-xs text-slate-400">Score relevance</span>
                  <span className={`text-xs font-medium ${
                    avgScore > 70 ? 'text-red-400' : 
                    avgScore > 40 ? 'text-amber-400' : 'text-emerald-400'}`}>
                    {avgScore > 70 ? 'Elevated' : avgScore > 40 ? 'Moderate' : 'Stable'}
                  </span>
                </div>
                {/* Color indicator */}
                <div className={`h-2 w-2 rounded-full ${
                  avgScore > 70 ? 'bg-red-400' : 
                  avgScore > 40 ? 'bg-amber-400' : 'bg-emerald-400'}`}/>
              </div>
            </div>
            <div className="mt-2">
              <div className="h-1 w-full rounded-full bg-slate-800 overflow-hidden">
                <div 
                  className={`h-full rounded-full ${
                    avgScore > 70 ? 'bg-gradient-to-r from-red-500 to-pink-500' : 
                    avgScore > 40 ? 'bg-gradient-to-r from-amber-500 to-orange-500' : 
                    'bg-gradient-to-r from-emerald-500 to-teal-500'}`}
                  style={{ width: `${Math.min(100, avgScore)}%` }}
                />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
              <div className="space-y-1">
                <span className="text-slate-400">Strategic</span>
                <div className="bg-slate-800 rounded h-1.5 w-full">
                  <div className="bg-emerald-500 h-full rounded" style={{ width: `${avgScore}%` }}/>
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-slate-400">Operational</span>
                <div className="bg-slate-800 rounded h-1.5 w-full">
                  <div className="bg-amber-500 h-full rounded" style={{ width: `${avgScore * 0.8}%` }}/>
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-slate-400">Market</span>
                <div className="bg-slate-800 rounded h-1.5 w-full">
                  <div className="bg-blue-500 h-full rounded" style={{ width: `${Math.min(100, avgScore * 1.2)}%` }}/>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
            <h2 className="text-lg font-semibold tracking-tight">Regional Exposure</h2>
            <div className="mt-4 space-y-3">
              {topRegions.length ? (
                topRegions.map((region) => {
                  const percentage = Math.round(
                    (events.filter(e => e.region === region).length / events.length) * 100
                  );
                  return (
                    <div key={region} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-300">{region}</span>
                        <span className="text-xs text-slate-400">{percentage}%</span>
                      </div>
                      <div className="h-1 w-full rounded-full bg-slate-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-sky-500"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-sm text-slate-400">No regional activity signals yet</p>
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-lg font-semibold">Top Topics</h2>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {topTopics.length ? (
                topTopics.map((topic) => {
                  const percentage = Math.round(
                    (events.filter(e => e.topic === topic).length / events.length) * 100
                  );
                  return (
                    <div key={topic} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-300">{topic}</span>
                        <span className="text-xs text-slate-400">{percentage}%</span>
                      </div>
                      <div className="h-1 w-full rounded-full bg-slate-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-sky-500"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-sm text-slate-400">No topic signals yet.</p>
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900/40 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold tracking-tight">Signal Activity</h2>
              <span className="rounded-full bg-slate-800/50 px-3 py-1 text-xs font-medium text-slate-400">
                {events.length} Intelligence Signals
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {events.length ? (
                events.map((event) => (
                  <article
                    key={event.id}
                    className="group rounded-xl border border-slate-800 bg-gradient-to-b from-slate-900/50 to-slate-950/90 p-5 transition-all hover:border-slate-700 hover:shadow-lg hover:shadow-sky-500/10"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs uppercase tracking-wide text-slate-400">
                        {event.region || "Unknown region"}
                      </span>
                      <span className="rounded-full bg-sky-500/15 px-2 py-1 text-xs font-medium text-sky-300">
                        Score {event.score || 0}
                      </span>
                    </div>

                    <h3 className="mt-2 text-base font-semibold text-slate-100">
                      {event.title}
                    </h3>

                    <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-400">
                      <span>{event.topic || "Unknown topic"}</span>
                      <span>•</span>
                      <span>{event.intensity || "unknown"} intensity</span>
                      <span>•</span>
                      <span>{event.confidence || "unknown"} confidence</span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {event.summary || "No summary available."}
                    </p>

                    <p className="mt-3 text-xs leading-6 text-slate-400">
                      <span className="font-medium text-slate-300">Why this matters:</span>{" "}
                      {event.why_it_matters || "Strategic implications still being assessed."}
                    </p>
                  </article>
                ))
              ) : (
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-400">
                  No signals yet for this entity.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
