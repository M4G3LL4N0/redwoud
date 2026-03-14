"use client";

.

import { useState } from "react";
import {
  mockDailyBriefing,
  mockEvents,
  mockTrends,
  type Region,
  type Topic,
} from "@/lib/mockData";
import { HeroSection } from "@/components/dashboard/HeroSection";
import { FiltersBar } from "@/components/dashboard/FiltersBar";
import { EventFeed } from "@/components/dashboard/EventFeed";
import { MapSection } from "@/components/dashboard/MapSection";
import { DailyBriefingSection } from "@/components/dashboard/DailyBriefing";
import { TrendSummaries } from "@/components/dashboard/TrendSummaries";
import { WhyThisMatters } from "@/components/dashboard/WhyThisMatters";

type RegionFilter = Region | "All";
type TopicFilter = Topic | "All";

export default function HomePage() {
  const [region, setRegion] = useState<RegionFilter>("All");
  const [topic, setTopic] = useState<TopicFilter>("All");

  const filteredEvents = mockEvents.filter((event) => {
    const regionMatch = region === "All" || event.region === region;
    const topicMatch = topic === "All" || event.topic === topic;
    return regionMatch && topicMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <HeroSection />
      <FiltersBar
        selectedRegion={region}
        selectedTopic={topic}
        onRegionChange={setRegion}
        onTopicChange={setTopic}
      />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <DailyBriefingSection briefing={mockDailyBriefing} />
          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1.2fr] gap-8">
            <div className="space-y-6">
              <EventFeed events={filteredEvents} />
              <WhyThisMatters focalEvents={filteredEvents.length ? filteredEvents : mockEvents} />
            </div>
            <div className="space-y-6">
              <MapSection activeRegion={region} />
              <TrendSummaries trends={mockTrends} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
