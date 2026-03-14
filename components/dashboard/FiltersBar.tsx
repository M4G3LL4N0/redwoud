import { regions, topics, type Region, type Topic } from "@/lib/mockData";

interface FiltersBarProps {
  selectedRegion: Region | "All";
  selectedTopic: Topic | "All";
  onRegionChange: (region: Region | "All") => void;
  onTopicChange: (topic: Topic | "All") => void;
}

export function FiltersBar({
  selectedRegion,
  selectedTopic,
  onRegionChange,
  onTopicChange,
}: FiltersBarProps) {
  return (
    <section
      aria-label="Filters"
      className="rw-card flex flex-col gap-3 p-3.5 md:flex-row md:items-center md:justify-between md:px-4"
    >
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
          Scope
        </p>
        <p className="mt-1 text-sm text-slate-200">
          Tune the live view by{" "}
          <span className="font-semibold text-slate-50">region</span> and{" "}
          <span className="font-semibold text-slate-50">topic</span>.
        </p>
      </div>
      <div className="flex flex-wrap gap-2 md:justify-end">
        <FilterSelect
          label="Region"
          value={selectedRegion}
          onChange={(value) => onRegionChange(value as Region | "All")}
          options={["All", ...regions]}
        />
        <FilterSelect
          label="Topic"
          value={selectedTopic}
          onChange={(value) => onTopicChange(value as Topic | "All")}
          options={["All", ...topics]}
        />
      </div>
    </section>
  );
}

interface FilterSelectProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

function FilterSelect({ label, value, options, onChange }: FilterSelectProps) {
  return (
    <label className="inline-flex items-center gap-2 rounded-full border border-rw-border/90 bg-rw-surface/80 px-3 py-1.5 text-xs text-slate-200 shadow-sm">
      <span className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
        {label}
      </span>
      <select
        className="bg-transparent text-xs font-medium text-slate-50 outline-none"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-slate-800 text-slate-100"
          >
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
