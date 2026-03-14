export function HeroSection() {
  return (
    <section className="rw-card relative overflow-hidden p-5 md:p-7">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute inset-y-0 right-[-20%] w-1/2 rotate-6 bg-gradient-to-br from-rw-accent/30 via-sky-500/10 to-transparent blur-3xl" />
        <div className="absolute inset-y-0 left-[-30%] w-1/3 -rotate-6 bg-gradient-to-tr from-slate-900/0 via-rw-accent/40 to-transparent blur-3xl" />
      </div>
      <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-rw-border/80 bg-black/40 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.35)]" />
            Live global intelligence feed
          </div>
          <h1 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl lg:text-[2.1rem]">
            See the world as a single{" "}
            <span className="bg-gradient-to-r from-slate-100 via-sky-100 to-indigo-200 bg-clip-text text-transparent">
              intelligence surface
            </span>
            .
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300 md:text-[0.92rem]">
            REDWOUD continuously assembles global events, economic indicators, and
            market signals into a structured picture of risk, pressure, and opportunity.
          </p>
          <dl className="mt-5 grid grid-cols-3 gap-3 text-xs text-slate-300 md:max-w-sm">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Watchpoints
              </dt>
              <dd className="mt-1 text-sm font-semibold text-slate-50">128</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Signals today
              </dt>
              <dd className="mt-1 text-sm font-semibold text-slate-50">2,947</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Risk corridors
              </dt>
              <dd className="mt-1 text-sm font-semibold text-slate-50">19</dd>
            </div>
          </dl>
        </div>
        <div className="flex w-full max-w-xs flex-col gap-2 rounded-2xl border border-rw-border/80 bg-gradient-to-b from-slate-950/60 via-rw-surface/90 to-black/80 p-3 text-xs text-slate-200 shadow-rw-soft md:w-64">
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
              Signal posture
            </span>
            <span className="rw-chip">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Elevated watch
            </span>
          </div>
          <div className="mt-2 h-[3px] w-full overflow-hidden rounded-full bg-rw-surface-alt/70">
            <div className="h-full w-3/5 bg-gradient-to-r from-emerald-400 via-amber-300 to-rose-400" />
          </div>
          <p className="mt-2 text-[11px] leading-relaxed text-slate-300">
            Today’s environment is defined by{" "}
            <span className="font-semibold text-slate-50">
              cyber, energy, and logistics
            </span>{" "}
            pressure across North America, Europe, and Asia–Pacific.
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            <span className="rw-pill-muted">Financial infrastructure</span>
            <span className="rw-pill-muted">European energy balances</span>
            <span className="rw-pill-muted">Asia–Europe shipping</span>
          </div>
        </div>
      </div>
    </section>
  );
}
