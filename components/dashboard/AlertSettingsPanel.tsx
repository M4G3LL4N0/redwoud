import { useState } from "react";

interface AlertSettingsPanelProps {}

export function AlertSettingsPanel({}: AlertSettingsPanelProps) {
  const [settings, setSettings] = useState({
    entityAlerts: true,
    regionAlerts: true,
    topicAlerts: true,
    riskAlerts: true,
  });

  const handleSave = () => {
    // Mock save functionality
    console.log("Alert settings saved:", settings);
  };

  return (
    <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Alert Configuration
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Customize your intelligence notification preferences
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-4">
        <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={settings.entityAlerts}
              onChange={() =>
                setSettings({ ...settings, entityAlerts: !settings.entityAlerts })
              }
              className="h-4 w-4 rounded border-slate-600 bg-slate-700 text-emerald-400 focus:ring-emerald-400"
            />
            <div>
              <p className="text-sm font-medium text-slate-200">Entity Alerts</p>
              <p className="text-xs text-slate-400">Monitor strategic entities</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={settings.regionAlerts}
              onChange={() =>
                setSettings({ ...settings, regionAlerts: !settings.regionAlerts })
              }
              className="h-4 w-4 rounded border-slate-600 bg-slate-700 text-emerald-400 focus:ring-emerald-400"
            />
            <div>
              <p className="text-sm font-medium text-slate-200">Region Alerts</p>
              <p className="text-xs text-slate-400">Track regional developments</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={settings.topicAlerts}
              onChange={() =>
                setSettings({ ...settings, topicAlerts: !settings.topicAlerts })
              }
              className="h-4 w-4 rounded border-slate-600 bg-slate-700 text-emerald-400 focus:ring-emerald-400"
            />
            <div>
              <p className="text-sm font-medium text-slate-200">Topic Alerts</p>
              <p className="text-xs text-slate-400">Specific intelligence topics</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={settings.riskAlerts}
              onChange={() =>
                setSettings({ ...settings, riskAlerts: !settings.riskAlerts })
              }
              className="h-4 w-4 rounded border-slate-600 bg-slate-700 text-emerald-400 focus:ring-emerald-400"
            />
            <div>
              <p className="text-sm font-medium text-slate-200">Risk Alerts</p>
              <p className="text-xs text-slate-400">Emerging risk factors</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSave}
          className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 hover:bg-emerald-500/20"
        >
          Save Configuration
        </button>
      </div>
    </section>
  );
}
