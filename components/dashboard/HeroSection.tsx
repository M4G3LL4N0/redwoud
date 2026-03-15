export function HeroSection() {
  return (
    <>
      <section className="rw-card relative overflow-hidden p-6 md:p-8">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute inset-y-0 right-[-20%] w-1/2 rotate-6 bg-gradient-to-br from-rw-accent/30 via-sky-500/10 to-transparent blur-3xl" />
          <div className="absolute inset-y-0 left-[-30%] w-1/3 -rotate-6 bg-gradient-to-tr from-slate-900/0 via-rw-accent/40 to-transparent blur-3xl" />
        </div>
        <div className="relative flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-rw-border/80 bg-black/40 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.35)]" />
              Live global intelligence feed
            </div>
            <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl lg:text-[2.3rem]">
              See discontinuity before{" "}
              <span className="bg-gradient-to-r from-slate-100 via-sky-100 to-indigo-200 bg-clip-text text-transparent">
                it becomes legacy news
              </span>
              .
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base md:leading-relaxed">
              REDWOUD continuously aggregates global events, economics, and market signals into structured intelligence ahead of press cycles.
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs text-slate-300">
              <span className="rw-pill flex items-center gap-1.5">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Feed Live
              </span>
              <span className="rw-pill-muted">
                <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-slate-500" />
                Processing 3.1k signals/min
              </span>
            </div>
          </div>
          <div className="flex w-full max-w-xs flex-col gap-2 rounded-2xl border border-rw-border/80 bg-gradient-to-b from-slate-950/60 via-rw-surface/90 to-black/80 p-4 text-xs text-slate-200 shadow-rw-soft md:w-72 md:p-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.18em] text-slate-300">
                Signal posture
              </span>
              <span className="rw-chip">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                Active Risk
              </span>
            </div>
            <div className="mt-2 h-[4px] w-full overflow-hidden rounded-full bg-rw-surface-alt/70">
              <div className="h-full w-4/5 bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400" />
            </div>
            <p className="mt-3 text-[11px] leading-relaxed text-slate-300">
              <span className="font-medium text-slate-50">Focus:</span> Risk clustering around{" "}
              <span className="font-semibold text-slate-50">
                cyber infrastructure, energy transport, and strategic material controls
              </span>{" "}
              across active corridors.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rw-pill flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                SWIFT alternatives
              </span>
              <span className="rw-pill flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                Critical minerals
              </span>
              <span className="rw-pill flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                Asian shipping
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-0.5 rounded-b-xl border-x border-b border-rw-border bg-slate-950/50 px-6 py-4 md:px-8 md:py-5">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4">
          <div className="border-r border-rw-border/40 pr-6">
            <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">Events Monitored</div>
            <div className="mt-1 text-xl font-medium text-slate-100">3,126</div>
            <div className="mt-0.5 flex items-center gap-1.5 text-[10px] text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>+14% today</span>
            </div>
          </div>
          <div className="border-r border-rw-border/40 pr-6">
            <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">Active Regions</div>
            <div className="mt-1 text-xl font-medium text-slate-100">7</div>
            <div className="mt-0.5 text-xs text-slate-400">
              Americas, Europe, Asia, MidEast
            </div>
          </div>
          <div className="border-r border-rw-border/40 pr-6">
            <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">High-Intensity Signals</div>
            <div className="mt-1 text-xl font-medium text-slate-100">41</div>
            <div className="mt-0.5 text-xs text-slate-400">
              <span className="text-rose-400">+9</span> in last hour
            </div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">Briefing Status</div>
            <div className="mt-1 flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-xl font-medium text-slate-100">Fresh</span>
            </div>
            <div className="mt-0.5 text-xs text-slate-400">
              Generated 12 minutes ago
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
