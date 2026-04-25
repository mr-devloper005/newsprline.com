'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, Search } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { siteContent } from '@/config/site.content'
import { cn } from '@/lib/utils'

export const NAVBAR_OVERRIDE_ENABLED = true

const staticNav = [
  { label: 'Services', href: '/#services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Press releases', href: '/updates' },
  { label: 'About', href: '/about' },
  { label: 'Press kit', href: '/press' },
  { label: 'Contact', href: '/contact' },
]

export function NavbarOverride() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const primary = SITE_CONFIG.tasks.find((t) => t.enabled) || SITE_CONFIG.tasks[0]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#edd8e0] bg-white/95 shadow-[0_1px_0_rgba(185,94,130,0.06)] backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2.5">
          <span
            className="grid h-10 w-10 place-content-center rounded-2xl bg-[#b95e82] text-sm font-extrabold text-white shadow-inner"
            aria-hidden
          >
            N
          </span>
          <span className="min-w-0">
            <span className="block truncate font-[family-name:var(--site-font-display)] text-lg font-bold tracking-[-0.02em] text-[#2a1522]">
              {SITE_CONFIG.name}
            </span>
            <span className="block truncate text-[10px] font-medium uppercase tracking-[0.22em] text-[#5c4552]">
              {siteContent.navbar.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center justify-center gap-1 lg:flex" aria-label="Main">
          {staticNav.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/#services' && item.href !== '/' && pathname.startsWith(item.href))
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  'rounded-full px-3 py-2 text-sm font-semibold text-[#5c4552] transition hover:text-[#2a1522]',
                  isActive && 'bg-[#fff5f7] text-[#b95e82]',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/search"
            className="hidden h-10 w-10 place-content-center rounded-full border border-[#e8c8d2] text-[#5c4552] transition hover:border-[#b95e82] hover:text-[#b95e82] sm:grid"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </Link>
          <Link
            href="/login"
            className="hidden text-sm font-semibold text-[#5c4552] transition hover:text-[#2a1522] sm:inline"
          >
            Log in
          </Link>
          <Link
            href="/register"
            className="inline-flex h-9 items-center rounded-full bg-[#2a1522] px-4 text-sm font-semibold text-white transition hover:bg-[#b95e82] sm:h-10 sm:px-5"
          >
            Sign up
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-content-center rounded-full border border-[#e8c8d2] lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Open menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[#f3e0e6] bg-white px-4 py-4 lg:hidden">
          {staticNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-[#2a1522] hover:bg-[#fff5f7]"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 flex items-center justify-between border-t border-[#f3e0e6] pt-2">
            <Link href="/search" className="inline-flex items-center gap-2 px-3 py-2 text-sm text-[#5c4552]">
              <Search className="h-4 w-4" />
              Search
            </Link>
            {primary ? (
              <Link href={primary.route} onClick={() => setOpen(false)} className="text-sm font-semibold text-[#b95e82]">
                {primary.label}
              </Link>
            ) : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
