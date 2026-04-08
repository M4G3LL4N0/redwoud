import { EventSource } from "./types";

export function getSourceName(source?: EventSource | string) {
  if (!source) return "Source unavailable";
  return typeof source === "string" ? source : source.name;
}

export function normalizeSource(
  source: EventSource | string
): EventSource {
  if (typeof source === "string") {
    return { name: source, tier: "verified" };
  }
  return source;
}
