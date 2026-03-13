import type { TrendSummary } from "@/lib/mockData";

interface TrendSummariesProps {
  trends: TrendSummary[];
}

export function TrendSummaries({ trends }: TrendSummariesProps) {
  return (
    <section className="rw-card flex flex-col overflow-hidden">
      <header className="flex items-center justify-between border-b border-rw-border/80 px-4 py-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Trend summaries
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Consolidated signal clusters across regions and topics.
          </p>
        </div>
      </header>
      <div className="grid gap-3 px-4 py-3.5 md:grid-cols-2">
        {trends.map((trend) => (
          <article
            key={trend.id}
            className="flex flex-col justify-between rounded-2xl border border-rw-border/80 bg-rw-surface-alt/80 p-3 text-[0.8rem] text-slate-200"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-[0.86rem] font-medium text-slate-50">
                  {trend.title}
                </p>
                <div className="mt-1 flex flex-wrap gap-1.5 text-[10px]">
                  <span className="rw-pill-muted">{trend.region}</span>
                  <span className="rw-pill-muted">{trend.topic}</span>
                  <span className="rw-pill-muted">
                    Direction{" "}
                    <span
                      className={
                        trend.direction === "rising"
                          ? "text-amber-200"
                          : trend.direction === "stabilizing"
                          ? "text-emerald-300"
                          : "text-slate-300"
                      }
                    >
                      {trend.direction}
                    </span>
                  </span>
                  <span className="rw-pill-muted">
                    Horizon <span>{trend.horizon}</span>
                  </span>
                </div>
              </div>
              <SignalGauge strength={trend.signalStrength} />
            </div>
            <p className="mt-2 text-[0.78rem] leading-relaxed text-slate-300">
              {trend.narrative}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SignalGauge({ strength }: { strength: number }) {
  const clamped = Math.max(0, Math.min(100, strength));
  return (
    <div className="flex flex-col items-end gap-1 text-[10px] text-slate-400">
      <span>Signal</span>
      <div className="h-1.5 w-20 overflow-hidden rounded-full bg-rw-surface">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-amber-300 to-rose-400"
          style={{ width: `${clamped}%` }}
        />
      </div>
      <span className="text-[10px] text-slate-300">{clamped}</span>
    </div>
  );
}

