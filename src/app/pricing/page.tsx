import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, HelpCircle } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { buildPageMetadata } from '@/lib/seo'
import { sitePricingContent, siteContent } from '@/config/site.content'
import { SITE_CONFIG } from '@/lib/site-config'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/pricing',
    title: 'Pricing — press distribution plans',
    description: sitePricingContent.pageDescription,
    openGraphTitle: 'Newsprline pricing',
    openGraphDescription: sitePricingContent.pageDescription,
    image: SITE_CONFIG.defaultOgImage,
  })
}

const plans = [
  {
    name: 'Basic',
    blurb: 'Steady cadence for product updates and regional news.',
    price: '$199',
    period: '/ release',
    highlight: false,
    features: ['1 distribution lane', 'Standard business categories', 'Hosted archive page', '72-hour review turnaround'],
  },
  {
    name: 'Pro',
    blurb: 'Where most teams land for launches and public milestones.',
    price: '$499',
    period: '/ month',
    highlight: true,
    features: [
      'Broader media bundle',
      'Placement analytics (opens & referrers)',
      'File & image slots',
      'Expedited support',
    ],
  },
  {
    name: 'Premium',
    blurb: 'Always-on comms, larger bundles, and named support.',
    price: 'Let’s talk',
    period: '',
    highlight: false,
    features: [
      'Custom media lists & regions',
      'Executive briefing assistance',
      'Crisis / IR coordination window',
      'Service-level options',
    ],
  },
]

const addOns = [
  { title: 'Sponsored headline boost', copy: 'Additional homepage or category visibility for 48 hours when inventory allows.' },
  { title: 'Transcript & long-form', copy: 'Structured earnings-style tables and long appendix hosting.' },
  { title: 'Extra multimedia pack', copy: 'More file slots, gallery ordering, and captioning assistance.' },
]

const faq = [
  { q: 'Is pricing per seat or per release?', a: 'Plans are based on how many releases you file per month and the bundle you choose, not the number of readers on your team.' },
  { q: 'Do you work with outside agencies?', a: 'Yes. We can work directly with in-house comms, retainers, or a hybrid model—permissions stay clear in your account settings.' },
  { q: 'What regions do you cover?', a: 'We focus on digital-first reach with the option to tag regional and trade coverage based on the categories you select when publishing.' },
  { q: 'Can I move between tiers later?', a: 'You can upgrade or adjust cadence with prorated differences when you grow into higher volumes.' },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#faf7f8] text-[#2a1522]">
      <NavbarShell />
      <div className="border-b border-[#e8c8d2] bg-[linear-gradient(180deg,#0a3a4a_0%,#b95e82_100%)] text-white">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/80">Newsprline pricing</p>
          <h1 className="mt-2 font-[family-name:var(--site-font-display)] text-3xl font-semibold sm:text-4xl lg:text-5xl">
            {sitePricingContent.pageTitle}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">{sitePricingContent.pageDescription}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs font-medium text-white/70">
            <span className="rounded-full border border-white/20 px-3 py-1">Compare distribution depth</span>
            <span className="rounded-full border border-white/20 px-3 py-1">Add-ons stay optional</span>
            <span className="rounded-full border border-white/20 px-3 py-1">IR-friendly options</span>
          </div>
        </div>
      </div>

      <div className="mx-auto -mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-2xl border bg-white p-6 shadow-[0_20px_50px_rgba(185,94,130,0.12)] ${
                p.highlight
                  ? 'ring-2 ring-[#b95e82] lg:scale-[1.02] lg:shadow-lg'
                  : 'border-[#e8c8d2]'
              }`}
            >
              {p.highlight ? <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[#b95e82]">Popular</p> : null}
              <h2 className="mt-1 text-2xl font-bold">{p.name}</h2>
              <p className="mt-1 text-sm text-[#5c4552]">{p.blurb}</p>
              <p className="mt-4 flex items-baseline gap-1 text-3xl font-bold text-[#2a1522]">
                {p.price}
                <span className="text-base font-normal text-[#5c4552]">{p.period}</span>
              </p>
              <ul className="mt-4 flex-1 space-y-2 text-sm text-[#2a1522]">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#b95e82]" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-6 w-full rounded-full bg-[#2a1522] text-white hover:bg-[#b95e82] sm:mt-8"
              >
                <Link href="/contact">{p.name === 'Premium' ? 'Request proposal' : 'Get started'}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-[family-name:var(--site-font-display)] text-2xl font-semibold">Add-ons</h2>
        <p className="mt-1 text-sm text-[#5c4552]">Stack only what the story needs. Your account manager can help estimate volume.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {addOns.map((a) => (
            <div key={a.title} className="rounded-2xl border border-[#e8c8d2] bg-white p-5 text-sm">
              <h3 className="font-semibold text-[#2a1522]">{a.title}</h3>
              <p className="mt-2 leading-relaxed text-[#5c4552]">{a.copy}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#e8c8d2] bg-white py-14">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#b95e82]">
            <HelpCircle className="h-4 w-4" />
            FAQ
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faq.map((item, i) => (
              <AccordionItem key={item.q} value={`faq-${i}`} className="border-[#e8c8d2]">
                <AccordionTrigger className="text-left text-[#2a1522] hover:no-underline [&[data-state=open]]:text-[#b95e82]">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#5c4552] leading-relaxed">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <section className="bg-[linear-gradient(90deg,#b95e82,#0d9488)] py-10 text-center text-white">
        <p className="px-4 text-sm font-medium sm:text-base">Need a comparison sheet? We’ll send a clean PDF that maps plans to {SITE_CONFIG.name}’s product lanes.</p>
        <Link
          href="/contact"
          className="mt-3 inline-block text-sm font-bold underline decoration-white/60 underline-offset-2 hover:decoration-white"
        >
          {siteContent.cta.primaryCta.label}
        </Link>
      </section>

      <Footer />
    </div>
  )
}
