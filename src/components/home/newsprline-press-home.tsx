import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, LineChart, Megaphone, Play, Radio, Users2 } from 'lucide-react'
import { siteContent } from '@/config/site.content'
import { SITE_CONFIG } from '@/lib/site-config'
import type { SitePost } from '@/lib/site-connector'
import { PressReleaseArchiveClient } from '@/components/home/press-release-archive-client'

type Task = (typeof SITE_CONFIG.tasks)[number]

const heroImage = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80&auto=format&fit=crop'

const solutions = [
  {
    key: 'sm',
    title: 'Small businesses',
    desc: 'Launch product news, local milestones, and partner stories with a guided flow that keeps formatting consistent.',
    cta: { label: 'See press archive', href: '/updates' },
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&auto=format&fit=crop',
    align: 'right' as const,
    bg: 'bg-white',
  },
  {
    key: 'agency',
    title: 'PR agencies',
    desc: 'Give clients a premium reading line and a faster handoff from draft to live—without noisy social clutter.',
    cta: { label: 'View pricing', href: '/pricing' },
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop',
    align: 'left' as const,
    bg: 'bg-[#b95e82] text-white',
  },
  {
    key: 'inhouse',
    title: 'In-house PR teams',
    desc: 'Keep IR, product, and corporate comms aligned with one archive, structured categories, and crisp reader typography.',
    cta: { label: 'Contact us', href: '/contact' },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop',
    align: 'right' as const,
    bg: 'bg-[#fdeeee]',
  },
]

const plans = [
  {
    name: 'Content Pro',
    accent: 'from-[#b95e82] to-[#8d4a65]',
    features: ['Core release template', 'Category tagging', 'Archive hosting', 'Email support'],
  },
  {
    name: 'Media Pro',
    accent: 'from-[#0d9488] to-[#0a3a4a]',
    features: ['Image and file attachments', 'Priority syndication queue', 'Rich text & tables', 'Quarterly review call'],
  },
  {
    name: 'Total Pro',
    accent: 'from-[#f39f9f] to-[#b95e82]',
    features: ['Dedicated account contact', 'Custom distribution lists', 'Performance snapshot', 'Volume-based pricing'],
  },
]

const statRows = [
  { label: 'Network reach (indicative)', value: '2.4M+', hint: 'monthly digital impressions' },
  { label: 'Publisher categories', value: '180+', hint: 'trade, national, local' },
  { label: 'Media desk hours', value: '24/7', hint: 'release monitoring' },
]

const trustLabels = ['G2', 'Capterra', 'Trustpilot', 'SOC2-ready']

const partnerLine = ['National business', 'Trade journals', 'Broadcast & digital', 'Industry analysts']

function Wave() {
  return (
    <svg
      className="absolute -bottom-px left-0 w-full text-[#faf7f8]"
      viewBox="0 0 1440 64"
      fill="currentColor"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path d="M0,32L60,26.7C120,21,240,11,360,10.7C480,11,600,21,720,26.7C840,32,960,32,1080,29.3C1200,27,1320,21,1380,18.7L1440,16L1440,64L0,64Z" />
    </svg>
  )
}

export function NewsprlinePressHome({ posts, primaryTask }: { posts: SitePost[]; primaryTask?: Task }) {
  const latest = posts.slice(0, 8)
  const c = siteContent

  return (
    <main className="bg-[#faf7f8] text-[#2a1522]">
      <section className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0a3a4a] via-[#0d9488] to-[#14b8a6]"
          style={{ backgroundSize: '200% 200%', animation: 'npl-soft-pan 18s ease-in-out infinite' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(243,159,159,0.2),transparent_50%)]" />
        <div className="relative z-[1] mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="npl-fade-up max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/80">{c.hero.badge}</p>
              <h1 className="mt-4 font-[family-name:var(--site-font-display)] text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-[3.1rem]">
                {c.hero.title[0]}
              </h1>
              <p className="mt-6 text-lg leading-8 text-white/90">{c.hero.description}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={primaryTask?.route || c.hero.primaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full bg-[#f39f9f] px-6 py-3 text-sm font-semibold text-[#2a1522] shadow-lg shadow-black/10 transition-transform hover:scale-[1.02] hover:brightness-105"
                >
                  {c.hero.primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20"
                >
                  View plans
                </Link>
                <Link href={c.hero.secondaryCta.href} className="text-sm font-medium text-white/80 underline-offset-4 hover:underline">
                  {c.hero.secondaryCta.label}
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                {trustLabels.map((name) => (
                  <div
                    key={name}
                    className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-center text-xs font-bold uppercase tracking-wider text-white/85 backdrop-blur-sm"
                  >
                    {name}
                  </div>
                ))}
                <span className="ml-1 text-xs text-white/60">Channel-ready coverage</span>
              </div>
            </div>

            <div className="relative npl-fade-up">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-[#f39f9f]/30 to-white/0 blur-2xl" />
              <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/5 shadow-2xl shadow-black/20 backdrop-blur">
                <div className="relative aspect-[4/3] w-full">
                  <Image src={heroImage} alt="Newsroom and press distribution" fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 45vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a3a4a]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between gap-2 rounded-2xl bg-white/95 p-3 text-[#2a1522] shadow-lg">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5c4552]">Engagement (sample)</p>
                        <p className="text-lg font-bold tabular-nums">128k opens</p>
                        <p className="text-xs text-[#5c4552]">7-day window</p>
                      </div>
                      <div className="grid h-12 w-12 place-content-center rounded-2xl bg-[#b95e82] text-white">
                        <LineChart className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 grid h-16 w-16 -translate-y-1/2 place-content-center rounded-full border border-white/40 bg-white/20 text-white backdrop-blur-md transition hover:scale-105"
                    aria-label="Play product overview (visual)"
                  >
                    <Play className="ml-1 h-7 w-7" fill="currentColor" />
                  </button>
                </div>
                <div className="grid grid-cols-3 divide-x divide-[#2a1522]/10 border-t border-[#2a1522]/10 bg-white/95 p-3 text-center text-sm text-[#2a1522]">
                  {statRows.map((s) => (
                    <div key={s.label} className="px-2 py-2">
                      <p className="text-2xl font-bold tabular-nums text-[#b95e82]">{s.value}</p>
                      <p className="text-[10px] font-medium uppercase leading-tight tracking-wider text-[#5c4552]">{s.label}</p>
                      <p className="text-[9px] text-[#5c4552]/80">{s.hint}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Wave />
      </section>

      <section className="border-b border-[#edd8e0] bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 sm:px-6 lg:px-8">
          {partnerLine.map((p) => (
            <p key={p} className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c4552] opacity-80">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section id="services" className="relative py-20">
        <div className="absolute inset-x-0 top-0 h-24 -translate-y-full bg-[linear-gradient(180deg,transparent_0%,#7c3055_8%)] opacity-20 blur-2xl" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-[family-name:var(--site-font-display)] text-3xl font-semibold tracking-[-0.03em] text-[#2a1522] sm:text-4xl">
              {c.home.servicesHeading}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#5c4552]">Pick a lane, publish multimedia assets, and route stories to the audiences that cover your industry.</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e8c8d2] bg-white shadow-[0_16px_50px_rgba(185,94,130,0.1)]"
              >
                <div className={`bg-gradient-to-r px-5 py-4 text-white ${plan.accent}`}>
                  <h3 className="text-lg font-bold">{plan.name}</h3>
                </div>
                <ul className="flex flex-1 flex-col gap-3 px-5 py-6 text-sm text-[#2a1522]">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#b95e82]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-[#f3e0e6] p-5">
                  <Link
                    href="/pricing"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#2a1522] py-2.5 text-sm font-semibold text-white transition hover:bg-[#b95e82]"
                  >
                    Compare in detail
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-[family-name:var(--site-font-display)] text-3xl font-semibold tracking-[-0.03em]">{c.home.aboutTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-[#5c4552]">{c.home.aboutBody}</p>
            <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#b95e82] hover:underline">
              About Newsprline
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative min-h-[240px] overflow-hidden rounded-3xl border border-[#e8c8d2] bg-gradient-to-br from-white to-[#fff5f7] p-8 shadow-lg">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Release drafting', sub: 'Structured fields & approvals', icon: Megaphone },
                { label: 'Distribution', sub: 'Wires, search, and partners', icon: Radio },
                { label: 'Measurement', sub: 'Snapshots your team can share', icon: LineChart },
                { label: 'Accountability', sub: 'Roles, audit trail, and timing', icon: Users2 },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-[#e8c8d2] bg-white/80 p-4">
                  <item.icon className="h-5 w-5 text-[#b95e82]" />
                  <p className="mt-2 text-sm font-semibold">{item.label}</p>
                  <p className="text-xs text-[#5c4552]">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {solutions.map((block) => {
        const imageBlock = (
          <div className="relative min-h-[280px] overflow-hidden rounded-3xl border border-white/20 shadow-xl">
            <Image src={block.image} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
          </div>
        )
        return (
          <section key={block.key} className={`py-16 sm:py-20 ${block.bg}`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  block.key === 'agency' ? 'bg-white/5' : ''
                }`}
              >
                {block.align === 'right' ? (
                  <>
                    <div className={block.key === 'inhouse' ? 'text-[#2a1522]' : 'text-inherit'}>
                      <h2 className="font-[family-name:var(--site-font-display)] text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">{block.title}</h2>
                      <p className="mt-4 text-sm leading-7 opacity-90">{block.desc}</p>
                      <Link
                        href={block.cta.href}
                        className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#2a1522] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                      >
                        {block.cta.label}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                    {imageBlock}
                  </>
                ) : (
                  <>
                    {imageBlock}
                    <div>
                      <h2 className="font-[family-name:var(--site-font-display)] text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">{block.title}</h2>
                      <p className="mt-4 text-sm leading-7 text-white/90">{block.desc}</p>
                      <Link
                        href={block.cta.href}
                        className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#b95e82] transition hover:bg-[#f39f9f]/30"
                      >
                        {block.cta.label}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        )
      })}

      <section className="border-y border-[#e8c8d2] bg-white py-20 text-center">
        <blockquote className="mx-auto max-w-3xl font-[family-name:var(--site-font-display)] text-2xl italic leading-snug text-[#2a1522] sm:text-3xl">
          &ldquo;The clearest win was executive confidence—one archive, one voice, and stakeholders actually read the
          update.&rdquo;
        </blockquote>
        <p className="mt-6 text-sm font-medium text-[#5c4552]">Communications lead, B2B technology (customer feedback)</p>
        <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#b95e82] hover:underline">
          Learn how teams deploy Newsprline
        </Link>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-[family-name:var(--site-font-display)] text-2xl font-semibold sm:text-3xl">
            {c.home.resourcesHeading}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {c.home.caseStudies.map((cs) => (
              <Link
                key={cs.title}
                href="/press"
                className="group relative min-h-[220px] overflow-hidden rounded-2xl border border-[#e8c8d2] shadow-sm transition shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
              >
                <Image
                  src={cs.image}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a1522]/90 via-[#2a1522]/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-left text-white">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">{cs.topic}</p>
                  <p className="mt-1 text-lg font-semibold leading-tight">{cs.title}</p>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link href="/press" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#b95e82] bg-white px-6 py-2.5 text-sm font-semibold text-[#b95e82] transition hover:bg-[#fff5f7]">
              View more
              <ArrowRight className="h-4 w-4" />
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-[#fff5f7] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:text-left">
            <h2 className="font-[family-name:var(--site-font-display)] text-2xl font-semibold sm:text-3xl">Latest press releases</h2>
            <p className="mt-2 max-w-2xl text-sm text-[#5c4552]">From the live feed: newest stories published to the archive. Filter by recency to scan what landed this week.</p>
          </div>
          {latest.length ? (
            <>
              <PressReleaseArchiveClient posts={latest} taskKey="mediaDistribution" />
              <p className="mt-8 text-center">
                <Link
                  href="/updates"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#b95e82] hover:underline"
                >
                  Open full press archive
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </p>
            </>
          ) : (
            <p className="rounded-2xl border border-dashed border-[#e8c8d2] py-12 text-center text-sm text-[#5c4552]">
              Releases will appear here as soon as they are published.{' '}
              <Link href="/contact" className="font-semibold text-[#b95e82] underline">
                Get notified
              </Link>
            </p>
          )}
        </div>
      </section>
    </main>
  )
}
