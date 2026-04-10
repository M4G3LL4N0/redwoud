export type SourceTier = "premium" | "verified" | "standard";
export type ImpactLevel = "Low" | "Medium" | "High";
export type IntensityLevel = "low" | "medium" | "high";
export type ConfidenceLevel = "low" | "medium" | "high";

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
  confidence: ConfidenceLevel;
  timestamp: string;
  sources: (EventSource | string)[];
  impact: ImpactLevel;
  intensity: IntensityLevel;
  timeAgo: string;
  whyItMatters: string;
}

export interface FeedEvent extends EventItem {
  sources: string[];
}

export interface BriefingEvent extends EventItem {
  sources: Array<{
    sources: EventSource
  }>;
}

export interface TrendEvent extends Pick<EventItem, 'topic' | 'region' | 'score' | 'timestamp'> {
  id: string;
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
