import type { DailyBriefing } from "@/lib/mockData";

interface DailyBriefingSectionProps {
  briefing: DailyBriefing;
}

export function DailyBriefingSection({ briefing }: DailyBriefingSectionProps) {
  return (
    <section className="rw-card flex flex-col overflow-hidden">
      <header className="flex items-center justify-between border-b border-rw-border/80 px-4 py-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            AI daily briefing
          </p>
          <p className="mt-1 text-xs text-slate-400">{briefing.dateLabel}</p>
        </div>
        <span className="rw-pill-muted text-[10px]">Generated from live signal set</span>
      </header>
      <div className="grid gap-4 px-4 py-3.5 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div>
          <p className="text-[0.86rem] font-medium leading-relaxed text-slate-100">
            {briefing.lead}
          </p>
          <div className="mt-3 space-y-1.5 text-[0.8rem] text-slate-300">
            {briefing.keyThemes.map((theme) => (
              <p key={theme} className="flex gap-2">
                <span className="mt-1 h-1 w-1 flex-none rounded-full bg-slate-400" />
                <span>{theme}</span>
              </p>
            ))}
          </div>
        </div>
        <div className="space-y-3 rounded-2xl border border-rw-border/80 bg-rw-surface-alt/80 p-3 text-[0.8rem] text-slate-200">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
              Primary risks
            </p>
            <ul className="mt-2 space-y-1.5">
              {briefing.primaryRisks.map((risk) => (
                <li key={risk} className="flex gap-2">
                  <span className="mt-[5px] h-1 w-3 rounded-full bg-rose-400" />
                  <span>{risk}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-rw-border/70 pt-2.5">
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
              Opportunities
            </p>
            <ul className="mt-2 space-y-1.5">
              {briefing.opportunities.map((opportunity) => (
                <li key={opportunity} className="flex gap-2">
                  <span className="mt-[5px] h-1 w-3 rounded-full bg-emerald-400" />
                  <span>{opportunity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
