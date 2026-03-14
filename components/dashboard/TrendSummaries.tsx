import type { TrendSummary } from "@/lib/mockData";

interface TrendSummariesProps {
  trends: TrendSummary[];
}

export function TrendSummaries({ trends }: TrendSummariesProps) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Trend summaries
          </p>
          <p className="mt-1 text-xs text-slate-400">
            AI-identified trend clusters across major global signals.
          </p>
        </div>
        <span className="rounded-full border border-slate-700 px-2 py-1 text-[10px] text-slate-300">
          {trends.length} active
        </span>
      </div>

      <div className="mt-5 space-y-4">
        {trends.map((trend) => (
          <article
            key={trend.id}
            className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-slate-100">
                {trend.title}
              </h3>
              <span className="rounded-full bg-sky-500/15 px-2 py-1 text-xs font-medium text-sky-300">
                {trend.value}
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {trend.detail}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
