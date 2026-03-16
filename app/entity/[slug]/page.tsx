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
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Entity Intelligence
          </p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">
            {entityName
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            REDWOUD tracks live signals, event activity, and strategic relevance for this entity.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-10 lg:grid-cols-12">
        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/70 via-slate-950 to-slate-900 p-6">
            <h2 className="text-lg font-semibold tracking-tight">Strategic Entity Profile</h2>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                <p className="text-sm font-medium text-slate-300">Live Intelligence Summary</p>
              </div>
              <p className="text-sm leading-6 text-slate-400 indent-0">
                High-signal analytical profile tracking situational awareness,
                regional presence, and thematic engagement patterns for <span className="font-medium text-slate-200">{entityName}</span>.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 backdrop-blur-sm bg-gradient-to-b from-slate-950/70 to-slate-900/50 p-6">
            <h2 className="text-lg font-semibold tracking-tight">Strategic Risk Indicator</h2>
            <div className="mt-4 flex items-baseline gap-2">
              <p className="text-4xl font-medium">
                <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                  {avgScore}
                </span>
                <span className="text-sm font-normal text-slate-400">/100</span>
              </p>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-slate-800">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-sky-500"
                style={{ width: `${Math.min(100, avgScore)}%` }}
              ></div>
            </div>
            <p className="mt-2 text-xs uppercase tracking-wider text-slate-500">
              Composite Risk Score · {events.length} Signals
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
            <h2 className="text-lg font-semibold tracking-tight">Regional Exposure</h2>
            <div className="mt-4 space-y-3">
              {topRegions.length ? (
                topRegions.map((region) => (
                  <div key={region} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-300">{region}</span>
                    <span className="rounded-full bg-slate-800/50 px-2 py-1 text-xs text-slate-400">
                      {Math.round(
                        (events.filter(e => e.region === region).length / events.length) * 100
                      )}%
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-400">No regional activity signals yet</p>
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-lg font-semibold">Top Topics</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {topTopics.length ? (
                topTopics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-200"
                  >
                    {topic}
                  </span>
                ))
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
                    className="group rounded-xl border border-slate-800 bg-gradient-to-b from-slate-900/50 to-slate-950/90 p-5 transition-all hover:border-slate-700"
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
