"use client";

import type { Region, Topic } from "@/lib/mockData";

interface FiltersBarProps {
  selectedRegion: Region;
  selectedTopic: "All" | Topic;
  onRegionChange: React.Dispatch<React.SetStateAction<Region>>;
  onTopicChange: React.Dispatch<React.SetStateAction<"All" | Topic>>;
}

const regions: Region[] = ["All", "Americas", "Europe", "Asia", "Middle East", "Africa"];
const topics: Array<"All" | Topic> = [
  "All",
  "Geopolitics",
  "Markets",
  "Trade",
  "Energy",
  "Technology",
  "Security",
];

export default function FiltersBar({
  selectedRegion,
  selectedTopic,
  onRegionChange,
  onTopicChange,
}: FiltersBarProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <div className="border-b border-slate-800 pb-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
          Signal Filters
        </p>
        <h3 className="mt-1 text-lg font-semibold text-slate-100">
          Intelligence Monitoring Scope
        </h3>
        <p className="mt-2 text-sm text-slate-400">
          Filter active alerts by strategic region and topic focus
        </p>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            Region
          </label>
          <select
            value={selectedRegion}
            onChange={(e) => onRegionChange(e.target.value as Region)}
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-200 outline-none"
          >
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            Topic
          </label>
          <select
            value={selectedTopic}
            onChange={(e) => onTopicChange(e.target.value as "All" | Topic)}
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-200 outline-none"
          >
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
