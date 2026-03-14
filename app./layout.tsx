import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "REDWOUD – Global Intelligence Dashboard",
  description:
    "REDWOUD is an AI-native intelligence platform that turns global signals into structured, actionable insight.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="rw-page min-h-screen bg-slate-950 text-slate-100 antialiased">
        <div className="rw-grid-overlay pointer-events-none fixed inset-0 -z-10" />
        <div className="relative flex min-h-screen flex-col">
          <header className="border-b border-rw-border/80 bg-gradient-to-b from-black/60 to-transparent px-6 py-4 md:px-12 md:py-5">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rw-accent/20 ring-1 ring-rw-accent/60 shadow-lg">
                  <span className="text-[18px] font-semibold tracking-tight text-slate-50">
                    R
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-300">
                      REDWOUD
                    </span>
                    <span className="rw-pill-muted hidden md:inline-flex">
                      Public intelligence preview
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400">
                    AI-native global intelligence layer for a complex world.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="hidden items-center gap-2 text-xs text-rw-muted md:flex">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.35)]" />
                  <span>Signals active</span>
                </div>
                <button className="hidden rounded-full border border-rw-border/60 bg-rw-surface/50 px-3.5 py-1.5 text-xs font-medium text-slate-100 shadow-sm backdrop-blur-sm transition-all hover:border-rw-accent/70 hover:bg-rw-accent/20 hover:text-white md:inline-flex">
                  Request early access
                </button>
              </div>
            </div>
          </header>
          <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-10 pt-6 md:px-8 md:pt-7">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
