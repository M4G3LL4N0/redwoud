import type { IntelligenceEvent } from "@/lib/mockData";

interface DailyBriefingSectionProps {
  events: IntelligenceEvent[];
}

export default function DailyBriefingSection({ events }: DailyBriefingSectionProps) {
  const generateBriefing = (events: IntelligenceEvent[]) => {
    if (!events.length) {
      return {
        title: "Global intelligence briefing",
        dateLabel: "Updated today",
        lead: "No significant developments detected in the monitored regions.",
        summary: "The system is actively monitoring for emerging signals.",
        whyThisMatters: "Continue monitoring for potential developments.",
        keyThemes: [],
        primaryRisks: [],
      };
    }

    const regions = [...new Set(events.map(e => e.region))];
    const topics = [...new Set(events.map(e => e.topic))];
    const highIntensityEvents = events.filter(e => e.intensity === "high");
    const mediumIntensityEvents = events.filter(e => e.intensity === "medium");

    const keyThemes = [
      ...new Set(events.map(e => e.topic)),
      ...new Set(events.map(e => e.region)),
    ].slice(0, 3);

    const primaryRisks = highIntensityEvents.map(e => {
      const risk = e.topic === "Energy" ? "Energy supply disruption" :
                   e.topic === "Technology" ? "Technology restrictions" :
                   e.topic === "Trade" ? "Trade route disruption" :
                   e.topic === "Security" ? "Security escalation" :
                   e.topic === "Markets" ? "Market volatility" :
                   e.topic === "Geopolitics" ? "Geopolitical tension" :
                   "Strategic risk";
      return `${risk} in ${e.region}`;
    }).slice(0, 3);

    const lead = highIntensityEvents.length > 0
      ? `Global risk signals are clustering around ${topics.join(", ")} developments across ${regions.join(", ")}.`
      : `Monitoring active developments in ${regions.join(", ")} across ${topics.join(", ")} sectors.`;

    const summary = highIntensityEvents.length > 0
      ? `REDWOUD is detecting tighter linkages between ${topics.join(", ")} developments and cross-market volatility.`
      : `The system is actively processing events to identify emerging patterns and connections.`;

    const whyThisMatters = highIntensityEvents.length > 0
      ? `Seemingly separate developments are connecting into broader strategic pressure across pricing, trade exposure, and regional policy reactions.`
      : `Continue monitoring for potential developments as the situation evolves.`;

    return {
      title: "Global intelligence briefing",
      dateLabel: `Updated ${new Date().toLocaleDateString()}`,
      lead,
      summary,
      whyThisMatters,
      keyThemes,
      primaryRisks,
    };
  };

  const briefing = generateBriefing(events);

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
            AI daily briefing
          </p>
          <p className="mt-1 text-xs text-slate-400">{briefing.dateLabel}</p>
        </div>
        <span className="rounded-full border border-slate-700 px-2 py-1 text-[10px] text-slate-300">
          Generated from live signal set
        </span>
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
