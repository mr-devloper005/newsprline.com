'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { siteIdentity } from '@/config/site.identity'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

const deskEmail = `press@${siteIdentity.domain}`

export function ContactPageOverride() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function openMail(e: React.FormEvent) {
    e.preventDefault()
    const subj = encodeURIComponent(`Newsprline inquiry from ${name || 'site'}`)
    const body = encodeURIComponent(
      [`From: ${name}`, `Email: ${email}`, '', message || ''].filter(Boolean).join('\n'),
    )
    window.location.href = `mailto:${deskEmail}?subject=${subj}&body=${body}`
  }

  return (
    <div className="min-h-screen bg-[#faf7f8] text-[#2a1522]">
      <NavbarShell />
      <div className="border-b border-[#e8c8d2] bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--site-font-display)] text-3xl font-semibold sm:text-4xl">Contact us</h1>
          <p className="mt-2 max-w-2xl text-sm text-[#5c4552] sm:text-base">
            Distribution questions, product walkthroughs, and partnership conversations — send a note and the right team will respond.
          </p>
        </div>
      </div>
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-2xl border border-[#e8c8d2] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-semibold">Send a message</h2>
            <form className="mt-6 space-y-4" onSubmit={openMail}>
              <div>
                <label className="text-sm font-medium text-[#5c4552]">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-[#e8c8d2] px-3 py-2.5 text-sm"
                  placeholder="Your name"
                  name="name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#5c4552]">Work email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="mt-1.5 w-full rounded-xl border border-[#e8c8d2] px-3 py-2.5 text-sm"
                  placeholder="you@company.com"
                  name="email"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#5c4552]">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1.5 min-h-[150px] w-full rounded-xl border border-[#e8c8d2] px-3 py-2.5 text-sm"
                  placeholder="What would you like to accomplish with Newsprline?"
                  name="message"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-[#2a1522] py-3 text-sm font-semibold text-white transition hover:bg-[#b95e82]"
              >
                Open in email
              </button>
              <p className="text-xs text-[#5c4552]">
                Opens your email app with a draft. Nothing is sent until you send from your mail client.
              </p>
            </form>
          </div>
          <div className="space-y-6 text-sm text-[#5c4552]">
            <div className="rounded-2xl border border-[#e8c8d2] bg-[#fff5f7] p-5">
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#2a1522]">
                <Clock className="h-4 w-4 text-[#b95e82]" />
                Business hours
              </h3>
              <p className="mt-2 leading-relaxed">Monday to Friday, 8:00 a.m. to 5:00 p.m. (Pacific)</p>
            </div>
            <div className="rounded-2xl border border-[#e8c8d2] bg-white p-5">
              <h3 className="flex items-center gap-2 text-sm font-bold text-[#2a1522]">
                <Mail className="h-4 w-4 text-[#b95e82]" />
                Email
              </h3>
              <a className="mt-2 block text-lg font-semibold text-[#b95e82] hover:underline" href={`mailto:${deskEmail}`}>
                {deskEmail}
              </a>
            </div>
            <div className="flex items-start gap-2 rounded-2xl border border-[#e8c8d2] bg-white p-5">
              <MapPin className="mt-0.5 h-4 w-4 text-[#b95e82]" />
              <div>
                <h3 className="text-sm font-bold text-[#2a1522]">Operations</h3>
                <p className="mt-1">Remote-first team serving North America. On-site or regional sessions by request.</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#5c4552]">
              <Phone className="h-4 w-4 text-[#b95e82]" />
              <a href="tel:+18005551234" className="font-semibold text-[#2a1522]">
                1-800-555-1234
              </a>
            </div>
            <p className="text-xs text-[#5c4552]/80">
              Prefer a faster answer? <Link href="/search" className="font-semibold text-[#b95e82] hover:underline">Search the archive</Link> or read{' '}
              <Link href="/help" className="font-semibold text-[#b95e82] hover:underline">help</Link>.
            </p>
          </div>
        </div>
        <div className="mt-8 rounded-2xl border border-white/20 bg-gradient-to-r from-[#b95e82] to-[#0d9488] px-5 py-4 text-sm text-white sm:px-8 sm:py-5 sm:text-base">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-medium">Check common questions before you write — it saves a round trip.</p>
            <Link
              href="/help"
              className="inline-flex w-fit shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Open FAQs
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
