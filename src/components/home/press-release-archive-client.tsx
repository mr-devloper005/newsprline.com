'use client'

import { useMemo, useState } from 'react'
import { TaskPostCard } from '@/components/shared/task-post-card'
import { buildPostUrl } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import type { SitePost } from '@/lib/site-connector'
import { cn } from '@/lib/utils'

const ranges = [
  { id: 'all', label: 'All dates' },
  { id: '7d', label: 'Last 7 days' },
  { id: '30d', label: 'Last 30 days' },
] as const

type RangeId = (typeof ranges)[number]['id']

function inRange(dateIso: string | undefined, id: RangeId) {
  if (id === 'all') return true
  const t = dateIso ? new Date(dateIso).getTime() : 0
  if (!t) return true
  const now = Date.now()
  const day = 86400000
  if (id === '7d') return now - t <= 7 * day
  return now - t <= 30 * day
}

export function PressReleaseArchiveClient({ posts, taskKey }: { posts: SitePost[]; taskKey: TaskKey }) {
  const [range, setRange] = useState<RangeId>('all')
  const filtered = useMemo(() => posts.filter((p) => inRange(p.publishedAt, range)), [posts, range])

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-end gap-2">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#5c4552]">Date</span>
        <div className="inline-flex flex-wrap gap-1 rounded-full border border-[#e8c8d2] bg-white/90 p-1">
          {ranges.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setRange(r.id)}
              className={cn(
                'rounded-full px-3 py-1.5 text-sm font-medium transition-colors',
                range === r.id ? 'bg-[#b95e82] text-white shadow-sm' : 'text-[#2a1522] hover:bg-[#fff5f7]',
              )}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>
      {filtered.length ? (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {filtered.map((post) => (
            <TaskPostCard key={post.id} post={post} href={buildPostUrl(taskKey, post.slug)} taskKey={taskKey} />
          ))}
        </div>
      ) : (
        <p className="rounded-2xl border border-dashed border-[#e8c8d2] py-12 text-center text-sm text-[#5c4552]">No releases in this range.</p>
      )}
    </div>
  )
}
