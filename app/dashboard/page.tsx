export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 text-slate-100">
      {/* Header Section */}
      <div className="mb-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
          REDWOUD
        </p>
        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
          Global Intelligence Dashboard
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-300">
          Real-time geopolitical and economic risk monitoring
        </p>
      </div>

      {/* Summary Cards */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
          <p className="text-sm text-slate-400">Active Events</p>
          <p className="mt-1 text-2xl font-semibold">142</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
          <p className="text-sm text-slate-400">Rising Trends</p>
          <p className="mt-1 text-2xl font-semibold">8</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
          <p className="text-sm text-slate-400">Critical Regions</p>
          <p className="mt-1 text-2xl font-semibold">3</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
          <p className="text-sm text-slate-400">System Status</p>
          <p className="mt-1 text-2xl font-semibold text-emerald-400">Normal</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        {/* Left Column */}
        <div>
          <h2 className="mb-4 text-lg font-semibold">Recent Intelligence Overview</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-sm text-slate-400">Middle East tensions escalate</p>
              <p className="mt-1 text-xs text-slate-300">Energy markets react to new developments</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-sm text-slate-400">Asian markets volatility</p>
              <p className="mt-1 text-xs text-slate-300">Currency fluctuations impact trade</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="mb-4 text-lg font-semibold">Monitoring Status</h2>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <div className="space-y-3">
              <div>
                <p className="text-sm text-slate-400">Data Collection</p>
                <div className="mt-1 h-1.5 w-full rounded-full bg-slate-800">
                  <div className="h-1.5 w-[95%] rounded-full bg-emerald-400" />
                </div>
              </div>
              <div>
                <p className="text-sm text-slate-400">Analysis Processing</p>
                <div className="mt-1 h-1.5 w-full rounded-full bg-slate-800">
                  <div className="h-1.5 w-[87%] rounded-full bg-emerald-400" />
                </div>
              </div>
              <div>
                <p className="text-sm text-slate-400">Alert System</p>
                <div className="mt-1 h-1.5 w-full rounded-full bg-slate-800">
                  <div className="h-1.5 w-[92%] rounded-full bg-emerald-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
