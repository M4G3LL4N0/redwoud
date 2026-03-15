import { HeroSection } from "@/components/dashboard/HeroSection";
import { AlertSettingsPanel } from "@/components/dashboard/AlertSettingsPanel";

export default function AlertsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="rw-card relative overflow-hidden px-6 py-12 md:px-12 md:py-16">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute inset-y-0 right-[-20%] w-1/2 rotate-6 bg-gradient-to-br from-rw-accent/30 via-sky-500/10 to-transparent blur-3xl" />
          <div className="absolute inset-y-0 left-[-30%] w-1/3 -rotate-6 bg-gradient-to-tr from-slate-900/0 via-rw-accent/40 to-transparent blur-3xl" />
        </div>
        <div className="relative flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-rw-border/80 bg-black/40 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-slate-100">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.35)]" />
            ALERTS • PREMIUM INTELLIGENCE NOTIFICATIONS
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl lg:text-[2.8rem]">
            Stay ahead of{" "}
            <span className="bg-gradient-to-r from-slate-100 via-sky-100 to-indigo-200 bg-clip-text text-transparent">
              critical developments
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base md:leading-relaxed">
            Configure intelligent alerts for entities, regions, topics, and emerging risks that matter to your strategic decisions.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12 md:px-8 md:py-16">
        <h2 className="text-3xl font-semibold text-slate-50 mb-6">Alert Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-slate-50 mb-4">Entity Alerts</h3>
            <p className="text-sm text-slate-300">
              Monitor specific entities for sudden changes in activity or risk profiles.
            </p>
            <p className="text-sm text-slate-300">
              Example: "OPEC+ announces oil production cuts"
            </p>
          </div>
          <div className="bg-slate-900 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-slate-50 mb-4">Region Alerts</h3>
            <p className="text-sm text-slate-300">
              Track geopolitical developments in specific regions.
            </p>
            <p className="text-sm text-slate-300">
              Example: "Sudden military buildup in Eastern Europe"
            </p>
          </div>
          <div className="bg-slate-900 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-slate-50 mb-4">Topic Alerts</h3>
            <p className="text-sm text-slate-300">
              Get updates on specific intelligence topics.
            </p>
            <p className="text-sm text-slate-300">
              Example: "New sanctions against Russian energy exports"
            </p>
          </div>
          <div className="bg-slate-900 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-slate-50 mb-4">Risk Alerts</h3>
            <p className="text-sm text-slate-300">
              Receive alerts about emerging risk factors.
            </p>
            <p className="text-sm text-slate-300">
              Example: "Increased cyberattack attempts on critical infrastructure"
            </p>
          </div>
        </div>
        <AlertSettingsPanel />
      </section>
    </main>
  );
}
