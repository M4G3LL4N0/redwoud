import type { IntelligenceEvent } from "@/lib/mockData";

interface Props {
  events?: IntelligenceEvent[];
}

export default function EventFeed({ events = [] }: Props) {
  if (!events.length) {
    return (
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm text-slate-400">
        No live events available.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {events.slice(0, 10).map((event) => (
        <div
          key={event.id}
          className="rounded-lg border border-slate-800 bg-slate-900 p-3"
        >
          <p className="text-sm text-slate-200">{event.title}</p>
          <p className="mt-1 text-xs text-slate-400">
            {event.region} • {event.topic}
          </p>
        </div>
      ))}
    </div>
  );
}
