import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'
import { siteContent } from '@/config/site.content'
import { Twitter, Linkedin, Rss } from 'lucide-react'

export const FOOTER_OVERRIDE_ENABLED = true

const productLinks = () =>
  SITE_CONFIG.tasks.filter((t) => t.enabled).map((t) => ({ label: t.label, href: t.route }))

const company = [
  { label: 'About us', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Press kit', href: '/press' },
  { label: 'Contact', href: '/contact' },
]

const legal = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Cookies', href: '/cookies' },
]

export function FooterOverride() {
  return (
    <footer className="border-t border-[#3d1f2e] bg-[#1a0f14] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-content-center rounded-xl bg-[#b95e82] text-sm font-extrabold" aria-hidden>
                N
              </span>
              <span className="text-lg font-bold">{SITE_CONFIG.name}</span>
            </div>
            <p className="mt-3 text-sm leading-7 text-white/70">{SITE_CONFIG.description}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/50">{siteContent.footer.tagline}</p>
            <div className="mt-4 flex gap-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-2.5 text-white/70 transition hover:text-white"
                aria-label="Twitter / X"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-2.5 text-white/70 transition hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <Link
                href="/updates"
                className="rounded-full border border-white/10 p-2.5 text-white/70 transition hover:text-white"
                aria-label="Press RSS feed (releases)"
              >
                <Rss className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Product</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/85">
              {productLinks().map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#f39f9f]">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/search" className="hover:text-[#f39f9f]">
                  Search
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/85">
              {company.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#f39f9f]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Legal &amp; help</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/85">
              {legal.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#f39f9f]">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/help" className="hover:text-[#f39f9f]">
                  Help
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/50">
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved. · {SITE_CONFIG.domain}
        </div>
      </div>
    </footer>
  )
}
