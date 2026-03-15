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
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-lg font-semibold">Entity Overview</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              This page aggregates live REDWOUD intelligence signals associated with this entity,
              including related events, regions, topics, and approximate risk intensity.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-lg font-semibold">Risk Score</h2>
            <p className="mt-4 text-3xl font-semibold text-white">{avgScore}</p>
            <p className="mt-2 text-sm text-slate-400">Average derived event score</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-lg font-semibold">Top Regions</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {topRegions.length ? (
                topRegions.map((region) => (
                  <span
                    key={region}
                    className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-200"
                  >
                    {region}
                  </span>
                ))
              ) : (
                <p className="text-sm text-slate-400">No region signals yet.</p>
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
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Recent Related Events</h2>
              <span className="text-sm text-slate-400">{events.length} events</span>
            </div>

            <div className="mt-6 space-y-4">
              {events.length ? (
                events.map((event) => (
                  <article
                    key={event.id}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
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
