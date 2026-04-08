export type SourceTier = "premium" | "verified" | "standard";

export interface EventSource {
  name: string;
  tier: SourceTier;
}

export interface EventItem {
  id: string;
  title: string;
  summary: string;
  entity: string;
  region: string;
  topic: string;
  score: number;
  confidence: number;
  timestamp: string;
  sources: (EventSource | string)[];
  impact?: "Low" | "Medium" | "High";
  intensity?: "low" | "medium" | "high";
  timeAgo?: string;
}

export interface Database {
  public: {
    Tables: {
      events: {
        Row: EventItem;
        Insert: Omit<EventItem, 'id'>;
        Update: Partial<EventItem>;
      };
    };
  };
}
