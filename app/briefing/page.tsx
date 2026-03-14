import { dailyBriefing } from "@/lib/mockData";

export default function BriefingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
          Daily Briefing
        </p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">{dailyBriefing.title}</h1>
        <p className="mt-3 text-sm text-slate-400">{dailyBriefing.dateLabel}</p>
        <p className="mt-6 text-lg leading-8 text-slate-200">{dailyBriefing.lead}</p>
        <p className="mt-6 text-base leading-8 text-slate-300">{dailyBriefing.summary}</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-lg font-semibold">Key themes</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {dailyBriefing.keyThemes.map((theme) => (
                <li key={theme}>• {theme}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-lg font-semibold">Primary risks</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {dailyBriefing.primaryRisks.map((risk) => (
                <li key={risk}>• {risk}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-lg font-semibold">Why this matters</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">{dailyBriefing.whyThisMatters}</p>
        </div>
      </section>
    </main>
  );
}
