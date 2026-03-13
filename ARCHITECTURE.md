# Architecture

## Product
REDWOUD

## Suggested stack
- Frontend: Next.js + React + TypeScript
- Styling: Tailwind CSS
- Maps: Mapbox or similar
- Backend: Next.js server routes / server actions
- Database: Supabase
- Auth: Supabase Auth
- Hosting: Vercel
- Background jobs: scheduled jobs / queues later
- AI layer: model-driven summarization, classification, clustering, briefing generation

## Core system modules
- ingestion layer
- event normalization layer
- intelligence explanation layer
- trend detection layer
- briefing generation layer
- filtering/search layer
- dashboard UI layer
- alerts and saved views layer
- enterprise workspace layer

## MVP architecture priorities
- keep architecture simple
- make the dashboard feel real quickly
- support seeded demo data first
- design for later real-time ingestion

## Suggested repository map
- app/
  - page.tsx
  - dashboard/
  - briefing/
  - map/
  - trends/
  - api/
- components/
  - dashboard/
  - map/
  - feed/
  - briefing/
  - filters/
  - ui/
- lib/
  - intelligence/
  - ingestion/
  - briefing/
  - trends/
  - filters/
  - supabase/
  - utils/
- supabase/
  - migrations/
- public/
- scripts/
- docs/

## Engineering rules
- prefer small, reviewable changes
- seed demo data before complex integrations
- keep data contracts simple and typed
- keep UI components modular
