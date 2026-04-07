import Link from "next/link"

export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <div className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-300">
            Getting Started
          </div>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Create a Meaningful Memorial
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Let's walk through setting up your loved one's ForeverLuvd memorial.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="rounded-2xl border border-slate-800/50 bg-slate-950/60 p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10 text-lg font-medium text-purple-300">
                1
              </div>
              <h3 className="mt-6 text-xl font-semibold">Basic Information</h3>
              <p className="mt-2 text-sm text-slate-300">
                Tell us about your loved one and set privacy preferences.
              </p>
              <div className="mt-6">
                <Link href="/onboarding/basic-info">
                  <button className="rounded-lg border border-slate-700 bg-slate-800/30 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-slate-600 hover:bg-slate-800/50">
                    Begin Setup
                  </button>
                </Link>
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-slate-800/50 bg-slate-950/60 p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-lg font-medium text-blue-300">
                2
              </div>
              <h3 className="mt-6 text-xl font-semibold">Add Memories</h3>
              <p className="mt-2 text-sm text-slate-300">
                Upload photos, stories, and important moments.
              </p>
              <div className="mt-6">
                <button 
                  disabled
                  className="rounded-lg border border-slate-700 bg-slate-800/10 px-4 py-2 text-sm font-medium text-slate-500">
                  Continue Setup
                </button>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-slate-800/50 bg-slate-950/60 p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-lg font-medium text-emerald-300">
                3
              </div>
              <h3 className="mt-6 text-xl font-semibold">Invite Family</h3>
              <p className="mt-2 text-sm text-slate-300">
                Optionally invite others to contribute and view.
              </p>
              <div className="mt-6">
                <button 
                  disabled
                  className="rounded-lg border border-slate-700 bg-slate-800/10 px-4 py-2 text-sm font-medium text-slate-500">
                  Continue Setup
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="text-3xl font-semibold">Premium Features</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Consider adding these powerful memorial features:
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* Premium Feature 1 */}
            <div className="rounded-2xl border border-slate-800/50 bg-gradient-to-b from-purple-950/20 to-slate-950/80 p-6">
              <div className="text-purple-300 flex items-center gap-2 text-sm font-medium">
                <span>Voice Preservation</span>,<span>
                  Premium Legacy Features
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
