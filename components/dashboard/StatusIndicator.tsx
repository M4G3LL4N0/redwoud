interface StatusIndicatorProps {
  risks: number
}

export default function StatusIndicator({ risks }: StatusIndicatorProps) {
  const level =
    risks >= 5 ? "High" :
    risks >= 2 ? "Moderate" :
    "Stable"

  const color =
    risks >= 5
      ? "bg-gradient-to-r from-rose-900/20 to-rose-950 border-rose-500/30 text-rose-100"
      : risks >= 2
      ? "bg-gradient-to-r from-amber-900/20 to-amber-950 border-amber-500/30 text-amber-100"
      : "bg-gradient-to-r from-emerald-900/20 to-emerald-950 border-emerald-500/30 text-emerald-100"

  return (
    <div className={`rounded-lg border backdrop-blur-sm px-3 py-1.5 text-xs font-medium tracking-wide ${color}`}>
      <span className="text-[10px] uppercase tracking-wider opacity-90">Status Threat</span>
      <div className="flex items-center justify-between mt-1">
        <span>{level}</span>
        {risks >= 5 && (
          <span className="animate-pulse">⚠️ Critical</span>
        )}
      </div>
    </div>
  )
}
