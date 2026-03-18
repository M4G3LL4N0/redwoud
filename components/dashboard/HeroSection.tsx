export function HeroSection() {
  return (
    <section className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-4">
        {/* Status grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {/* Events monitored */}
          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3">
            <div className="flex items-center justify-between">
              <div className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Events
              </div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                </span>
                +14%
              </div>
            </div>
            <div className="mt-1 text-xl font-semibold text-slate-100">3,126</div>
            <div className="mt-1 text-xs text-slate-400">
              <span className="text-emerald-400">↑</span> 412 in last hour
            </div>
          </div>

          {/* Active regions */}
          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3">
            <div className="text-xs font-medium uppercase tracking-wider text-slate-400">
              Regions
            </div>
            <div className="mt-1 text-xl font-semibold text-slate-100">7</div>
            <div className="mt-1 text-xs text-slate-400">
              Americas, Europe, Asia, MidEast
            </div>
          </div>

          {/* High-intensity */}
          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3">
            <div className="flex items-center justify-between">
              <div className="text-xs font-medium uppercase tracking-wider text-slate-400">
                High-intensity
              </div>
              <div className="flex items-center gap-1.5 text-xs text-rose-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-rose-400"></span>
                </span>
                +9
              </div>
            </div>
            <div className="mt-1 text-xl font-semibold text-slate-100">41</div>
            <div className="mt-1 text-xs text-slate-400">
              <span className="text-rose-400">↑</span> 12 in last hour
            </div>
          </div>

          {/* Briefing status */}
          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3">
            <div className="text-xs font-medium uppercase tracking-wider text-slate-400">
              Briefing
            </div>
            <div className="mt-1 flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              </span>
              <span className="text-xl font-semibold text-slate-100">Fresh</span>
            </div>
            <div className="mt-1 text-xs text-slate-400">
              Generated 12 minutes ago
            </div>
          </div>
        </div>

        {/* Signal posture */}
        <div className="mt-4 rounded-lg border border-slate-800 bg-slate-900/50 p-4">
          <div className="flex items-center justify-between">
            <div className="text-xs font-medium uppercase tracking-wider text-slate-400">
              Signal Posture
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-amber-400/10 px-2 py-1 text-xs text-amber-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-400"></span>
              </span>
              Active Risk
            </div>
          </div>
          <div className="mt-3 h-1.5 w-full rounded-full bg-slate-800">
            <div className="h-full w-3/4 bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400" />
          </div>
          <div className="mt-3 text-xs text-slate-400">
            <span className="font-medium text-slate-100">Focus:</span> Risk clustering around{" "}
            <span className="font-semibold text-slate-100">
              cyber infrastructure, energy transport, and strategic material controls
            </span>{" "}
            across active corridors.
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <div className="flex items-center gap-1.5 rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
              SWIFT alternatives
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Critical minerals
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              Asian shipping
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
