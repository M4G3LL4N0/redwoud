import { liveEvents as fallbackEvents } from "@/lib/mockData";

async function getLiveEvents(): Promise<any[]> {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.VERCEL_URL?.startsWith("http")
        ? process.env.VERCEL_URL
        : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000";

    const response = await fetch(`${baseUrl}/api/feed`, {
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return fallbackEvents;
    }

    const data = await response.json();
    return data.events?.length ? data.events : fallbackEvents;
  } catch {
    return fallbackEvents;
  }
}

export default async function BriefingPage() {
  const events = await getLiveEvents();

  const generateBriefing = (events: any[]) => {
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
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
          Daily Briefing
        </p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">{briefing.title}</h1>
        <p className="mt-3 text-sm text-slate-400">{briefing.dateLabel}</p>
        <p className="mt-6 text-lg leading-8 text-slate-200">{briefing.lead}</p>
        <p className="mt-6 text-base leading-8 text-slate-300">{briefing.summary}</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-lg font-semibold">Key themes</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {briefing.keyThemes.map((theme) => (
                <li key={theme}>• {theme}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-lg font-semibold">Primary risks</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {briefing.primaryRisks.map((risk) => (
                <li key={risk}>• {risk}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-lg font-semibold">Why this matters</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">{briefing.whyThisMatters}</p>
        </div>
      </section>
    </main>
  );
}
