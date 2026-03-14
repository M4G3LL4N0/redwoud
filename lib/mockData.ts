export type Region =
  | "Global"
  | "North America"
  | "Europe"
  | "Middle East"
  | "Asia-Pacific"
  | "Latin America"
  | "Africa";

export type Topic =
  | "Geopolitics"
  | "Energy"
  | "Supply Chains"
  | "Cyber"
  | "Climate"
  | "Markets"
  | "Technology";

export interface IntelligenceEvent {
  id: string;
  title: string;
  region: Region;
  topic: Topic;
  timeAgo: string;
  intensity: "low" | "medium" | "high";
  confidence: "low" | "medium" | "high";
  summary: string;
  whyItMatters: string;
}

export interface TrendSummary {
  id: string;
  title: string;
  region: Region | "Global";
  topic: Topic;
  direction: "rising" | "stabilizing" | "falling";
  horizon: "hours" | "days" | "weeks";
  signalStrength: number; // 0–100
  narrative: string;
}

export interface DailyBriefing {
  dateLabel: string;
  lead: string;
  keyThemes: string[];
  primaryRisks: string[];
  opportunities: string[];
}

export const regions: Region[] = [
  "Global",
  "North America",
  "Europe",
  "Middle East",
  "Asia-Pacific",
  "Latin America",
  "Africa",
];

export const topics: Topic[] = [
  "Geopolitics",
  "Energy",
  "Supply Chains",
  "Cyber",
  "Climate",
  "Markets",
  "Technology",
];

export const mockEvents: IntelligenceEvent[] = [
  {
    id: "evt-1",
    title: "Coordinated cyber probes on financial infrastructure",
    region: "North America",
    topic: "Cyber",
    timeAgo: "12 minutes ago",
    intensity: "high",
    confidence: "medium",
    summary:
      "Multiple banks report low-level probing of external interfaces consistent with pre-operational mapping activity.",
    whyItMatters:
      "Suggests reconnaissance ahead of a potential campaign targeting payment rails or customer data in the next 2–7 days.",
  },
  {
    id: "evt-2",
    title: "Unexpected production disruption at key LNG facility",
    region: "Europe",
    topic: "Energy",
    timeAgo: "43 minutes ago",
    intensity: "medium",
    confidence: "high",
    summary:
      "Unplanned maintenance at a major European LNG import hub reduces scheduled throughput during a period of elevated demand.",
    whyItMatters:
      "Tightens short-term gas balances and raises price sensitivity to additional outages or geopolitical shocks.",
  },
  {
    id: "evt-3",
    title: "Port congestion building along critical trade corridor",
    region: "Asia-Pacific",
    topic: "Supply Chains",
    timeAgo: "1 hour ago",
    intensity: "medium",
    confidence: "medium",
    summary:
      "Average container dwell times rise above 30% of seasonal norms across several high-volume transshipment ports.",
    whyItMatters:
      "Increases risk of delivery slippage for just‑in‑time manufacturers and raises logistics costs over the coming weeks.",
  },
  {
    id: "evt-4",
    title: "Escalating rhetoric around contested maritime zone",
    region: "Asia-Pacific",
    topic: "Geopolitics",
    timeAgo: "2 hours ago",
    intensity: "high",
    confidence: "medium",
    summary:
      "New naval exercises and public statements increase signaling around freedom-of-navigation operations in a strategic chokepoint.",
    whyItMatters:
      "Elevates tail-risk of miscalculation affecting trade flows, insurance costs, and regional risk premia.",
  },
  {
    id: "evt-5",
    title: "Central bank signals divergent policy paths",
    region: "Global",
    topic: "Markets",
    timeAgo: "3 hours ago",
    intensity: "medium",
    confidence: "high",
    summary:
      "Major central banks show increasing divergence in interest rate outlook, creating currency volatility.",
    whyItMatters:
      "Diverging monetary policies increase hedging costs and complicate international investment decisions.",
  },
  {
    id: "evt-6",
    title: "Arctic shipping routes see early ice melt",
    region: "Global",
    topic: "Climate",
    timeAgo: "5 hours ago",
    intensity: "low",
    confidence: "medium",
    summary:
      "Satellite observations show accelerated ice melt in key Arctic passages, opening seasonal shipping windows earlier.",
    whyItMatters:
      "Earlier opening creates both opportunities for reduced transit times and risks of increased geopolitical tension.",
  },
];

export const mockTrends: TrendSummary[] = [
  {
    id: "tr-1",
    title: "Operational cyber pressure on financial services",
    region: "Global",
    topic: "Cyber",
    direction: "rising",
    horizon: "days",
    signalStrength: 82,
    narrative:
      "Coordinated low‑level activity and exploit chatter point to elevated campaign risk against tier‑one institutions.",
  },
  {
    id: "tr-2",
    title: "Structural tightness in European gas balances",
    region: "Europe",
    topic: "Energy",
    direction: "stabilizing",
    horizon: "weeks",
    signalStrength: 68,
    narrative:
      "Storage levels remain comfortable, but maintenance and geopolitics keep price sensitivity above historic norms.",
  },
  {
    id: "tr-3",
    title: "Logistics friction across Asia–Europe corridor",
    region: "Asia-Pacific",
    topic: "Supply Chains",
    direction: "rising",
    horizon: "weeks",
    signalStrength: 74,
    narrative:
      "Weather events, labor actions, and rerouting continue to erode schedule reliability across key nodes.",
  },
  {
    id: "tr-4",
    title: "Market attention shifting to policy divergence",
    region: "Global",
    topic: "Markets",
    direction: "rising",
    horizon: "days",
    signalStrength: 61,
    narrative:
      "Differing central bank guidance is widening rate expectations and repricing cross‑border capital flows.",
  },
  {
    id: "tr-5",
    title: "Renewable energy investment acceleration",
    region: "Global",
    topic: "Climate",
    direction: "rising",
    horizon: "months",
    signalStrength: 58,
    narrative:
      "Policy incentives and corporate commitments are driving faster-than-expected deployment of wind and solar capacity.",
  },
];

export const mockDailyBriefing: DailyBriefing = {
  dateLabel: "Friday, Global Open",
  lead:
    "The signal environment today is defined by elevated cyber probing, tighter European energy balances, and persistent logistics friction along key trade corridors.",
  keyThemes: [
    "Cyber reconnaissance against financial infrastructure continues to build, with activity clustered around external interfaces and third‑party providers.",
    "Unplanned stress in European gas infrastructure is amplifying the impact of otherwise routine outages.",
    "Physical and policy bottlenecks are combining to keep shipping schedules fragile on Asia–Europe routes.",
  ],
  primaryRisks: [
    "Operational disruption or data loss at systemically important financial institutions.",
    "Price and volatility spikes in regional gas and power markets following additional outages.",
    "Production delays for sectors reliant on just‑in‑time supply chains, especially electronics and autos.",
  ],
  opportunities: [
    "Accelerated investment in cyber resilience, monitoring, and incident-response readiness.",
    "Hedging strategies that assume above‑average volatility in European energy benchmarks.",
    "Diversification of logistics partners and route options ahead of peak seasonal flows.",
  ],
};
