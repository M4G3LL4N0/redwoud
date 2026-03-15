"use client";

import { useState } from "react";

export default function AlertSettingsPanel() {
  const [selectedAlert, setSelectedAlert] = useState("Entity");
  const [frequency, setFrequency] = useState("Daily");

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
          Alert Settings
        </p>
        <p className="mt-1 text-xs text-slate-400">
          Configure future REDWOUD alert workflows.
        </p>
      </div>

      <div className="mt-5 space-y-5">
        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            Alert type
          </label>
          <div className="mt-3 flex flex-wrap gap-2">
            {["Entity", "Region", "Topic", "Risk"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedAlert(type)}
                className={`rounded-full border px-3 py-1 text-sm ${
                  selectedAlert === type
                    ? "border-emerald-400 bg-emerald-500/10 text-emerald-300"
                    : "border-slate-700 text-slate-300"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            Frequency
          </label>
          <div className="mt-3 flex flex-wrap gap-2">
            {["Real-time", "Hourly", "Daily"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setFrequency(option)}
                className={`rounded-full border px-3 py-1 text-sm ${
                  frequency === option
                    ? "border-sky-400 bg-sky-500/10 text-sky-300"
                    : "border-slate-700 text-slate-300"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-300">
          <p>
            Selected alert: <span className="font-medium text-slate-100">{selectedAlert}</span>
          </p>
          <p className="mt-2">
            Frequency: <span className="font-medium text-slate-100">{frequency}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
