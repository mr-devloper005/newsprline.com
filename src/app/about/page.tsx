import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/about',
    title: 'About Newsprline',
    description: 'How Newsprline helps teams ship press releases and keep readers aligned with a clean, media-first experience.',
    openGraphTitle: `About ${SITE_CONFIG.name}`,
    openGraphDescription: SITE_CONFIG.description,
    image: SITE_CONFIG.defaultOgImage,
  })
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#faf7f8] text-[#2a1522]">
      <NavbarShell />
      <div className="border-b border-[#e8c8d2] bg-white">
        <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#b95e82]">About us</p>
            <h1 className="mt-2 font-[family-name:var(--site-font-display)] text-3xl font-semibold sm:text-4xl">
              Clarity for every announcement
            </h1>
            <p className="mt-4 text-sm leading-7 text-[#5c4552] sm:text-base">
              {SITE_CONFIG.name} is the public face for your press line: a reader-first layout, organized archive, and room for
              the multimedia assets that make a story land. We built the experience around how teams really publish—drafts, reviews,
              then a single moment when the news goes live.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#5c4552]">
              Whether you are a two-person comms shop or a distributed program with agencies, the interface stays out of the way
              so your message stays in focus.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#2a1522] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#b95e82]"
              >
                Talk to us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/updates" className="inline-flex items-center gap-2 text-sm font-semibold text-[#b95e82] hover:underline">
                Read the archive
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[#e8c8d2] shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=80&auto=format&fit=crop"
              alt="Communications team collaborating"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
      <section className="border-b border-[#e8c8d2] bg-[#fff5f7] py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-[#b95e82]" />
            <div>
              <h2 className="text-xl font-semibold">What we optimize for</h2>
              <ul className="mt-3 space-y-2 text-sm text-[#5c4552]">
                <li>— Legible, premium article pages that feel at home on mobile and desktop.</li>
                <li>— Archives that are easy to scan for investors, press, and internal teams.</li>
                <li>— A quiet surface that does not look like a recycled directory template from another product line.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
