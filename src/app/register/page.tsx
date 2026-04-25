import Link from 'next/link'
import { Bookmark, Building2, FileText, Image as ImageIcon, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { getNewsprlineRegisterConfig } from '@/lib/newsprline-auth-theme'
import { REGISTER_PAGE_OVERRIDE_ENABLED, RegisterPageOverride } from '@/overrides/register-page'

function getRegisterConfig(kind: ReturnType<typeof getProductKind>) {
  if (kind === 'directory') {
    return {
      shell: 'bg-[#f8fbff] text-slate-950',
      panel: 'border border-slate-200 bg-white',
      side: 'border border-slate-200 bg-slate-50',
      muted: 'text-slate-600',
      action: 'bg-slate-950 text-white hover:bg-slate-800',
      icon: Building2,
      title: 'Create a business-ready account',
      body: 'List services, manage locations, and activate trust signals with a proper directory workflow.',
    }
  }
  if (kind === 'editorial') {
    return {
      shell: 'bg-[#fbf6ee] text-[#241711]',
      panel: 'border border-[#dcc8b7] bg-[#fffdfa]',
      side: 'border border-[#e6d6c8] bg-[#fff4e8]',
      muted: 'text-[#6e5547]',
      action: 'bg-[#241711] text-[#fff1e2] hover:bg-[#3a241b]',
      icon: FileText,
      title: 'Start your contributor workspace',
      body: 'Create a profile for essays, issue drafts, editorial review, and publication scheduling.',
    }
  }
  if (kind === 'visual') {
    return {
      shell: 'bg-[#07101f] text-white',
      panel: 'border border-white/10 bg-white/6',
      side: 'border border-white/10 bg-white/5',
      muted: 'text-slate-300',
      action: 'bg-[#8df0c8] text-[#07111f] hover:bg-[#77dfb8]',
      icon: ImageIcon,
      title: 'Set up your creator profile',
      body: 'Launch a visual-first account with gallery publishing, identity surfaces, and profile-led discovery.',
    }
  }
  return {
    shell: 'bg-[#f7f1ea] text-[#261811]',
    panel: 'border border-[#ddcdbd] bg-[#fffaf4]',
    side: 'border border-[#e8dbce] bg-[#f3e8db]',
    muted: 'text-[#71574a]',
    action: 'bg-[#5b2b3b] text-[#fff0f5] hover:bg-[#74364b]',
    icon: Bookmark,
    title: 'Create a curator account',
    body: 'Build shelves, save references, and connect collections to your profile without a generic feed setup.',
  }
}

export default function RegisterPage() {
  if (REGISTER_PAGE_OVERRIDE_ENABLED) {
    return <RegisterPageOverride />
  }

  const { recipe } = getFactoryState()
  const productKind = getProductKind(recipe)
  const press = recipe.primaryTask === 'mediaDistribution' ? getNewsprlineRegisterConfig() : null
  const config = press ?? getRegisterConfig(productKind)
  const Icon = config.icon
  const inputClass = press ? press.input : 'h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm'

  return (
    <div className={`min-h-screen ${config.shell}`}>
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className={`rounded-[2rem] p-8 ${config.side}`}>
            <Icon className={press ? 'h-8 w-8 text-[#b95e82]' : 'h-8 w-8'} />
            <h1
              className={
                press
                  ? 'mt-5 font-[family-name:var(--site-font-display)] text-3xl font-semibold tracking-[-0.04em] sm:text-4xl'
                  : 'mt-5 text-4xl font-semibold tracking-[-0.05em]'
              }
            >
              {config.title}
            </h1>
            <p className={`mt-5 text-sm leading-8 ${config.muted}`}>{config.body}</p>
            <div className="mt-8 grid gap-3">
              {('bullets' in config ? config.bullets : ['Different onboarding per product family', 'No repeated one-size-fits-all shell', 'Profile, publishing, and discovery aligned']).map(
                (item) => (
                  <div
                    key={item}
                    className={
                      press
                        ? 'flex items-start gap-2 rounded-2xl border border-[#f3d4dc] bg-white/80 px-4 py-3 text-sm text-[#2a1522]'
                        : 'rounded-[1.5rem] border border-current/10 px-4 py-4 text-sm'
                    }
                  >
                    {press ? <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b95e82]" aria-hidden /> : null}
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>

          <div className={`rounded-[2rem] p-8 ${config.panel}`}>
            <p className={`text-xs font-semibold uppercase tracking-[0.24em] ${press ? 'text-[#b95e82]' : 'opacity-70'}`}>Create account</p>
            <form className="mt-6 grid gap-4">
              <input className={inputClass} placeholder="Full name" autoComplete="name" />
              <input className={inputClass} placeholder="Email address" autoComplete="email" />
              <input className={inputClass} placeholder="Password" type="password" autoComplete="new-password" />
              <input
                className={inputClass}
                placeholder="Company or team name (optional)"
                autoComplete="organization"
              />
              <button type="submit" className={`inline-flex h-12 w-full items-center justify-center rounded-full px-6 text-sm font-semibold transition ${config.action}`}>
                Create account
              </button>
            </form>
            <div className={`mt-6 flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between ${config.muted}`}>
              <span>Already have an account?</span>
              <Link href="/login" className={`inline-flex items-center gap-2 ${press ? press.link : 'font-semibold hover:underline'}`}>
                <Sparkles className="h-4 w-4" />
                Sign in
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
