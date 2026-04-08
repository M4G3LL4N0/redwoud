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
      event_sources: {
        Row: {
          event_id: string;
          source_id: string;
        };
        Insert: {
          event_id: string;
          source_id: string;
        };
        Update: Partial<{
          event_id: string;
          source_id: string;
        }>;
      };
      sources: {
        Row: EventSource;
        Insert: Omit<EventSource, 'name'>;
        Update: Partial<EventSource>;
      };
    };
  };
}
