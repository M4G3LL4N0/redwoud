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
      ? "bg-red-500/20 text-red-300 border-red-500/30"
      : risks >= 2
      ? "bg-amber-500/20 text-amber-300 border-amber-500/30"
      : "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"

  return (
    <div className={`rounded-lg border px-3 py-2 text-xs font-semibold ${color}`}>
      System Status: {level}
    </div>
  )
}
