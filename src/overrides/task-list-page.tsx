import Link from 'next/link'
import { Filter, Search } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { TaskListClient } from '@/components/tasks/task-list-client'
import { fetchTaskPosts } from '@/lib/task-data'
import { getTaskConfig, type TaskKey } from '@/lib/site-config'
import { taskIntroCopy } from '@/config/site.content'
import { CATEGORY_OPTIONS, normalizeCategory } from '@/lib/categories'

export const TASK_LIST_PAGE_OVERRIDE_ENABLED = true

export async function TaskListPageOverride({ task, category }: { task: TaskKey; category?: string }) {
  const posts = await fetchTaskPosts(task, 48, { fresh: true })
  const taskConfig = getTaskConfig(task)
  const intro = taskIntroCopy[task]
  const normalizedCategory = category ? normalizeCategory(category) : 'all'

  return (
    <div className="min-h-screen bg-[#faf7f8] text-[#2a1522]">
      <NavbarShell />
      <div className="border-b border-[#e8c8d2] bg-[linear-gradient(180deg,#fff5f7_0%,#faf7f8_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b95e82]">Archive</p>
          <h1 className="mt-2 max-w-3xl font-[family-name:var(--site-font-display)] text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            {intro?.title || taskConfig?.label}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5c4552]">{taskConfig?.description}</p>
          {intro
            ? intro.paragraphs.map((p) => (
                <p key={p.slice(0, 32)} className="mt-4 max-w-2xl text-sm leading-7 text-[#5c4552]">
                  {p}
                </p>
              ))
            : null}
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <form
            className="flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:items-end"
            action={taskConfig?.route || '/updates'}
            method="get"
          >
            <div className="flex-1">
              <label className="flex items-center gap-1 text-xs font-bold uppercase tracking-[0.2em] text-[#5c4552]">
                <Filter className="h-3.5 w-3.5" />
                Category
              </label>
              <select
                name="category"
                defaultValue={normalizedCategory}
                className="mt-2 w-full rounded-xl border border-[#e8c8d2] bg-white px-3 py-2.5 text-sm font-medium"
              >
                <option value="all">All categories</option>
                {CATEGORY_OPTIONS.map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="h-11 rounded-xl bg-[#2a1522] px-5 text-sm font-semibold text-white transition hover:bg-[#b95e82]"
            >
              Apply
            </button>
          </form>
          <form className="flex w-full max-w-sm gap-2" action="/search" method="get">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5c4552]/70" />
              <input
                name="q"
                className="h-11 w-full rounded-xl border border-[#e8c8d2] bg-white pl-9 pr-3 text-sm"
                placeholder="Search this topic across the site…"
              />
            </div>
            <input type="hidden" name="master" value="1" />
            <button type="submit" className="h-11 rounded-xl bg-white px-4 text-sm font-semibold text-[#2a1522] ring-1 ring-[#e8c8d2] transition hover:ring-[#b95e82]">
              Go
            </button>
          </form>
        </div>
        {intro && intro.links.length > 0 ? (
          <div className="mb-6 flex flex-wrap gap-2 text-sm">
            {intro.links.map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-[#e8c8d2] bg-white px-3 py-1.5 text-[#b95e82] hover:border-[#b95e82]">
                {l.label}
              </Link>
            ))}
          </div>
        ) : null}
        <TaskListClient task={task} initialPosts={posts} category={normalizedCategory} />
      </main>
      <Footer />
    </div>
  )
}
