export type Region =
  | "All"
  | "Americas"
  | "Europe"
  | "Asia"
  | "Middle East"
  | "Africa";

export type Topic =
  | "Geopolitics"
  | "Markets"
  | "Trade"
  | "Energy"
  | "Technology"
  | "Security";

export interface EventItem {
  id: string;
  region: Region;
  topic: Topic;
  title: string;
  impact: "Low" | "Medium" | "High";
  intensity: "low" | "medium" | "high";
  confidence: "low" | "medium" | "high";
  timeAgo: string;
  summary: string;
  whyItMatters: string;
}

export type IntelligenceEvent = EventItem;

export interface TrendCard {
  id: string;
  title: string;
  value: string;
  detail: string;
}

export type TrendSummary = TrendCard;

export interface DailyBriefing {
  title: string;
  dateLabel: string;
  lead: string;
  summary: string;
  whyThisMatters: string;
  keyThemes: string[];
  primaryRisks: string[];
}

export const regions: Region[] = [
  "All",
  "Americas",
  "Europe",
  "Asia",
  "Middle East",
  "Africa",
];

export const topics: Topic[] = [
  "Geopolitics",
  "Markets",
  "Trade",
  "Energy",
  "Technology",
  "Security",
];

export const liveEvents: EventItem[] = [
  {
    id: "evt-europe-energy",
    region: "Europe",
    topic: "Energy",
    title: "Energy corridor tensions raise regional supply concerns",
    impact: "High",
    intensity: "high",
    confidence: "high",
    timeAgo: "12m ago",
    summary:
      "Rising transport and policy uncertainty is increasing volatility across regional energy markets.",
    whyItMatters:
      "Energy transport instability can spill into pricing pressure, industrial costs, and wider regional market volatility.",
  },
  {
    id: "evt-asia-chips",
    region: "Asia",
    topic: "Technology",
    title: "Export controls discussion intensifies around strategic chips",
    impact: "Medium",
    intensity: "medium",
    confidence: "medium",
    timeAgo: "28m ago",
    summary:
      "Technology restrictions could affect semiconductor supply chains, pricing, and cross-border investment.",
    whyItMatters:
      "Chip restrictions can reshape capital allocation, supply chains, and competitive positioning across multiple industries.",
  },
  {
    id: "evt-me-shipping",
    region: "Middle East",
    topic: "Trade",
    title: "Shipping route disruption risk edges higher",
    impact: "High",
    intensity: "high",
    confidence: "medium",
    timeAgo: "41m ago",
    summary:
      "New signals suggest elevated trade-route monitoring and possible insurance cost increases.",
    whyItMatters:
      "Trade-route disruption can affect delivery times, insurance costs, commodities pricing, and global supply reliability.",
  },
];

export const trendCards: TrendCard[] = [
  {
    id: "trend-geopolitical-risk",
    title: "Geopolitical Risk",
    value: "Rising",
    detail: "Conflict-adjacent signals are clustering across multiple regions.",
  },
  {
    id: "trend-macro-stress",
    title: "Macro Stress",
    value: "Elevated",
    detail: "Inflation, rates, and trade uncertainty remain tightly linked.",
  },
  {
    id: "trend-supply-chain-pressure",
    title: "Supply Chain Pressure",
    value: "Watch",
    detail: "Transport chokepoints and industrial dependency risks are increasing.",
  },
];

export const dailyBriefing: DailyBriefing = {
  title: "Global intelligence briefing",
  dateLabel: "Updated today",
  lead:
    "Global risk signals are clustering around trade pressure, route security, energy transport uncertainty, and strategic technology controls.",
  summary:
    "REDWOUD is detecting a tighter linkage between logistics disruption risk, industrial policy escalation, and cross-market volatility.",
  whyThisMatters:
    "Seemingly separate developments are connecting into broader strategic pressure across pricing, trade exposure, and regional policy reactions.",
  keyThemes: [
    "Energy transport uncertainty",
    "Strategic technology controls",
    "Trade-route monitoring",
    "Cross-market volatility",
  ],
  primaryRisks: [
    "Shipping route disruption",
    "Strategic export restrictions",
    "Regional energy price volatility",
    "Policy escalation across key corridors",
  ],
};
