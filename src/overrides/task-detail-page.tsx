import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Facebook, Linkedin, Link2, Twitter } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContentImage } from '@/components/shared/content-image'
import { buildPostUrl, fetchTaskPostBySlug, fetchTaskPosts } from '@/lib/task-data'
import { SITE_CONFIG, getTaskConfig, type TaskKey } from '@/lib/site-config'
import type { SitePost } from '@/lib/site-connector'
import { formatRichHtml, RichContent } from '@/components/shared/rich-content'

export const TASK_DETAIL_PAGE_OVERRIDE_ENABLED = true

function getHeroImage(post: SitePost) {
  const media = Array.isArray(post.media) ? post.media[0]?.url : null
  if (typeof media === 'string' && media) return media
  const c = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const images = c.images
  if (Array.isArray(images) && typeof images[0] === 'string') return images[0]
  if (typeof c.logo === 'string' && c.logo) return c.logo
  return 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=80&auto=format&fit=crop'
}

export async function TaskDetailPageOverride({ task, slug }: { task: TaskKey; slug: string }) {
  const post = await fetchTaskPostBySlug(task, slug)
  if (!post) notFound()
  const taskConfig = getTaskConfig(task)
  const related = (await fetchTaskPosts(task, 10, { fresh: true })).filter((item) => item.slug !== slug).slice(0, 4)
  const content = (post.content || {}) as Record<string, unknown>
  const html = formatRichHtml((content.body as string) || post.summary || '', 'Full text will display here when available.')
  const base = SITE_CONFIG.baseUrl.replace(/\/$/, '')
  const pagePath = buildPostUrl(task, post.slug)
  const pageUrl = `${base}${pagePath}`
  const shareText = encodeURIComponent(post.title || SITE_CONFIG.name)
  const category =
    typeof content.category === 'string' && content.category.trim()
      ? content.category.trim()
      : 'Press release'
  const hero = getHeroImage(post)
  const sub =
    post.summary && post.summary.length < 220
      ? post.summary
      : post.summary
        ? post.summary.slice(0, 200).trimEnd() + '…'
        : ''

  return (
    <div className="min-h-screen bg-[#faf7f8] text-[#2a1522]">
      <NavbarShell />
      <div className="border-b border-[#e8c8d2] bg-white/90">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b95e82]">{taskConfig?.label || 'Release'}</p>
          <nav className="mt-2 text-xs text-[#5c4552]">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-[#b95e82]">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href={taskConfig?.route || '/updates'} className="hover:text-[#b95e82]">
                  {taskConfig?.label || 'Archive'}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="line-clamp-1 max-w-[min(100%,20rem)] font-medium text-[#2a1522]">{post.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <header>
          <p className="text-sm font-medium text-[#b95e82]">{category}</p>
          <h1 className="mt-2 font-[family-name:var(--site-font-display)] text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          {sub ? <p className="mt-4 text-lg text-[#5c4552] sm:text-xl">{sub}</p> : null}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[#5c4552]">
            <time dateTime={post.publishedAt || undefined}>
              {new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </time>
            <span className="text-[#d4b8c2]">·</span>
            <span>By {post.authorName || 'Newsroom'}</span>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${shareText}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#e8c8d2] bg-white px-3 py-1.5 text-xs font-semibold transition hover:border-[#b95e82]"
            >
              <Twitter className="h-3.5 w-3.5" /> Share
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#e8c8d2] bg-white px-3 py-1.5 text-xs font-semibold transition hover:border-[#b95e82]"
            >
              <Linkedin className="h-3.5 w-3.5" /> Post
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#e8c8d2] bg-white px-3 py-1.5 text-xs font-semibold transition hover:border-[#b95e82]"
            >
              <Facebook className="h-3.5 w-3.5" /> Send
            </a>
            <a
              href={pageUrl}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#e8c8d2] bg-white px-3 py-1.5 text-xs font-semibold text-[#5c4552] transition hover:border-[#b95e82]"
            >
              <Link2 className="h-3.5 w-3.5" /> Permalink
            </a>
          </div>
        </header>

        <div className="relative mt-8 aspect-[2/1] w-full max-h-[24rem] overflow-hidden rounded-3xl border border-[#e8c8d2] bg-white shadow-sm">
          <ContentImage src={hero} alt={post.title} fill className="object-cover" />
        </div>

        <div className="prose prose-lg mt-10 max-w-none text-[#2a1522] prose-headings:font-[family-name:var(--site-font-display)] prose-a:text-[#b95e82] prose-p:leading-relaxed prose-li:marker:text-[#b95e82]">
          <RichContent html={html} />
        </div>
      </main>

      {related.length ? (
        <section className="border-t border-[#e8c8d2] bg-white py-12">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--site-font-display)] text-2xl font-semibold">Related releases</h2>
            <p className="mt-1 text-sm text-[#5c4552]">From the same archive. Skip around without losing the reading line.</p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {related.map((item) => (
                <li key={item.id}>
                  <Link
                    href={buildPostUrl(task, item.slug)}
                    className="group block rounded-2xl border border-[#e8c8d2] bg-[#fffafc] p-4 transition hover:border-[#b95e82] hover:shadow-sm"
                  >
                    <p className="line-clamp-2 text-sm font-semibold text-[#2a1522] group-hover:text-[#b95e82]">{item.title}</p>
                    <p className="mt-1 text-xs text-[#5c4552]">
                      {new Date(item.publishedAt || Date.now()).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <Footer />
    </div>
  )
}
