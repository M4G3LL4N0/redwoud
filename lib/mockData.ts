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
  region: Region;
  topic: Topic;
  title: string;
  impact: "Low" | "Medium" | "High";
  summary: string;
}

export interface TrendCard {
  title: string;
  value: string;
  detail: string;
}

export interface DailyBriefing {
  title: string;
  dateLabel: string;
  lead: string;
  summary: string;
  whyThisMatters: string;
  keyThemes: string[];
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
    region: "Europe",
    topic: "Energy",
    title: "Energy corridor tensions raise regional supply concerns",
    impact: "High",
    summary:
      "Rising transport and policy uncertainty is increasing volatility across regional energy markets.",
  },
  {
    region: "Asia",
    topic: "Technology",
    title: "Export controls discussion intensifies around strategic chips",
    impact: "Medium",
    summary:
      "Technology restrictions could affect semiconductor supply chains, pricing, and cross-border investment.",
  },
  {
    region: "Middle East",
    topic: "Trade",
    title: "Shipping route disruption risk edges higher",
    impact: "High",
    summary:
      "New signals suggest elevated trade-route monitoring and possible insurance cost increases.",
  },
];

export const trendCards: TrendCard[] = [
  {
    title: "Geopolitical Risk",
    value: "Rising",
    detail: "Conflict-adjacent signals are clustering across multiple regions.",
  },
  {
    title: "Macro Stress",
    value: "Elevated",
    detail: "Inflation, rates, and trade uncertainty remain tightly linked.",
  },
  {
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
};
