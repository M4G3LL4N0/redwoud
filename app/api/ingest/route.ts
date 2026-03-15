import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import type { FeedEvent } from '@/app/api/feed/route'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    // 1. Fetch from internal feed API
    const feedRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/feed`)
    if (!feedRes.ok) throw new Error('Failed to fetch feed')

    const { events } = (await feedRes.json()) as { events: FeedEvent[] }
    if (!events?.length) {
      return NextResponse.json({ message: 'No new events to ingest' })
    }

    // 2. Upsert with conflict resolution
    const { data, error } = await supabaseAdmin
      .from('events')
      .upsert(events, {
        onConflict: 'id',
        ignoreDuplicates: false
      })
      .select()

    if (error) throw error

    return NextResponse.json({
      ingested: data?.length ?? 0,
      batchId: new Date().toISOString()
    })

  } catch (error) {
    console.error('Ingestion error:', error)
    return NextResponse.json(
      { error: 'Internal ingestion error' },
      { status: 500 }
    )
  }
}
