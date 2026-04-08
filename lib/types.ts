export type SourceTier = "premium" | "verified" | "standard";

export type EventSource = {
  name: string;
  tier: SourceTier;
};

export type EventItem = {
  id?: string;
  title: string;
  summary: string;
  entity?: string;
  region?: string;
  topic?: string;
  score?: number;
  confidence?: number;
  timestamp: string;
  sources: EventSource[];
};
