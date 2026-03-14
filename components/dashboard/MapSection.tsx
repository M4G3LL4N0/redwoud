import type { Region } from "@/lib/mockData";

interface MapSectionProps {
  activeRegion: Region;
}

export function MapSection({ activeRegion }: MapSectionProps) {
  return (
    <section className="rw-card flex flex-col overflow-hidden">
      <header className="flex items-center justify-between border-b border-rw-border/80 px-4 py-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Global map
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Placeholder for live event map and spatial risk corridors.
          </p>
        </div>
        <span className="rw-pill-muted text-[10px]">
          Map layer design in next phase
        </span>
      </header>
      <div className="relative flex flex-1 flex-col items-stretch justify-center bg-gradient-to-b from-slate-950/70 via-rw-surface/90 to-black/80 px-4 pb-4 pt-5">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute inset-6 rounded-[1.75rem] border border-dashed border-rw-border/70" />
          <div className="absolute inset-10 rounded-[1.5rem] border border-rw-border/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#1f2937_40%,transparent_0)] bg-[size:40px_40px] opacity-40" />
        </div>
        <div className="relative z-10 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-slate-100">
              Spatial risk surface
            </p>
            <span className="rw-chip text-[10px]">
              {activeRegion === "All" ? "Global" : activeRegion} view
            </span>
          </div>
          <p className="max-w-sm text-[0.78rem] leading-relaxed text-slate-300">
            In the full product, this panel renders live spatial intelligence across
            corridors, chokepoints, and infrastructure. For now, it anchors the mental
            model of a{" "}
            <span className="font-medium text-slate-50">
              single global intelligence surface
            </span>
            .
          </p>
          <div className="mt-2 grid grid-cols-3 gap-2 text-[10px] text-slate-300">
            <div className="rounded-xl border border-rw-border/80 bg-black/40 p-2">
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                Corridors
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-50">19</p>
            </div>
            <div className="rounded-xl border border-rw-border/80 bg-black/40 p-2">
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                Watchpoints
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-50">128</p>
            </div>
            <div className="rounded-xl border border-rw-border/80 bg-black/40 p-2">
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                Active clusters
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-50">7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
