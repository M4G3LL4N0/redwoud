"use client";

import { useState } from "react";

export default function AlertSettingsPanel() {
  const [alertType, setAlertType] = useState("Entity");
  const [frequency, setFrequency] = useState("Daily");
  const [threshold, setThreshold] = useState("Medium");
  const [confidence, setConfidence] = useState("High");
  const [notifications, setNotifications] = useState(true);

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <div className="mb-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
          Alert Configuration
        </p>
        <p className="mt-1 text-xs text-slate-400">
          Fine-tune your REDWOUD alert parameters.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            Alert type
          </label>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {["Entity", "Region", "Topic", "Risk"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setAlertType(type)}
                className={`rounded-lg border px-3 py-2 text-left text-sm transition-colors ${
                  alertType === type
                    ? "border-emerald-400/50 bg-emerald-500/10 text-emerald-300"
                    : "border-slate-700 text-slate-300 hover:border-slate-600"
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
          <div className="mt-3 grid grid-cols-3 gap-2">
            {["Real-time", "Hourly", "Daily"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setFrequency(option)}
                className={`rounded-lg border px-3 py-2 text-center text-sm transition-colors ${
                  frequency === option
                    ? "border-sky-400/50 bg-sky-500/10 text-sky-300"
                    : "border-slate-700 text-slate-300 hover:border-slate-600"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            Threshold
          </label>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {["Low", "Medium", "High"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setThreshold(option)}
                className={`rounded-lg border px-3 py-2 text-center text-sm transition-colors ${
                  threshold === option
                    ? "border-amber-400/50 bg-amber-500/10 text-amber-300"
                    : "border-slate-700 text-slate-300 hover:border-slate-600"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Minimum significance level for alerts.
          </p>
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            Confidence
          </label>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {["Low", "Medium", "High"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setConfidence(option)}
                className={`rounded-lg border px-3 py-2 text-center text-sm transition-colors ${
                  confidence === option
                    ? "border-indigo-400/50 bg-indigo-500/10 text-indigo-300"
                    : "border-slate-700 text-slate-300 hover:border-slate-600"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Required confidence in the signal.
          </p>
        </div>

        <div className="flex items-center justify-between rounded-lg border border-slate-700/50 bg-slate-950/80 p-4">
          <div>
            <p className="text-sm font-medium text-slate-100">Email notifications</p>
            <p className="text-xs text-slate-400">Receive alerts via email</p>
          </div>
          <button
            type="button"
            onClick={() => setNotifications(!notifications)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              notifications ? "bg-emerald-500" : "bg-slate-700"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                notifications ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        <div className="rounded-lg border border-slate-700/50 bg-slate-950/80 p-4">
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Current Configuration
          </p>
          <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-slate-400">Type</p>
              <p className="font-mono text-slate-100">{alertType}</p>
            </div>
            <div>
              <p className="text-slate-400">Frequency</p>
              <p className="font-mono text-slate-100">{frequency}</p>
            </div>
            <div>
              <p className="text-slate-400">Threshold</p>
              <p className="font-mono text-slate-100">{threshold}</p>
            </div>
            <div>
              <p className="text-slate-400">Confidence</p>
              <p className="font-mono text-slate-100">{confidence}</p>
            </div>
            <div className="col-span-2">
              <p className="text-slate-400">Email</p>
              <p className="font-mono text-slate-100">{notifications ? "Enabled" : "Disabled"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
