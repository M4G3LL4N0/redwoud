import type { DailyBriefing } from "@/lib/mockData";
import StatusIndicator from "@/components/dashboard/StatusIndicator";

interface DailyBriefingSectionProps {
  briefing: DailyBriefing;
}

export default function DailyBriefingSection({
  briefing,
}: DailyBriefingSectionProps) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
            AI daily briefing
          </p>
          <p className="mt-1 text-xs text-slate-400">{briefing.dateLabel}</p>
        </div>
        <StatusIndicator risks={briefing.primaryRisks.length} />
      </div>

      <div className="mt-5">
        <h2 className="text-lg font-semibold text-slate-100">{briefing.title}</h2>
        <p className="mt-3 text-[0.92rem] font-medium leading-relaxed text-slate-100">
          {briefing.lead}
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-300">{briefing.summary}</p>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Key themes
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {briefing.keyThemes.map((theme) => (
              <li key={theme} className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>{theme}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Primary risks
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {briefing.primaryRisks.map((risk) => (
              <li key={risk} className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-rose-400" />
                <span>{risk}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          Why this matters
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          {briefing.whyThisMatters}
        </p>
      </div>
    </section>
  );
}
