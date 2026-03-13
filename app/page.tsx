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
    <div className="flex flex-1 flex-col gap-4 pb-4">
      <HeroSection />
      <FiltersBar
        selectedRegion={region}
        selectedTopic={topic}
        onRegionChange={setRegion}
        onTopicChange={setTopic}
      />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)]">
        <div className="space-y-4">
          <EventFeed events={filteredEvents} />
          <WhyThisMatters focalEvents={filteredEvents.length ? filteredEvents : mockEvents} />
        </div>
        <div className="space-y-4">
          <MapSection activeRegion={region} />
          <DailyBriefingSection briefing={mockDailyBriefing} />
        </div>
      </div>
      <TrendSummaries trends={mockTrends} />
    </div>
  );
}

