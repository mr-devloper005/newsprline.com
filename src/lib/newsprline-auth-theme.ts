import type { LucideIcon } from 'lucide-react'
import { Megaphone, Sparkles } from 'lucide-react'

export type AuthPageConfig = {
  shell: string
  panel: string
  side: string
  muted: string
  action: string
  link: string
  input: string
  icon: LucideIcon
  title: string
  body: string
  bullets: string[]
}

const base: Pick<AuthPageConfig, 'shell' | 'panel' | 'side' | 'muted' | 'action' | 'link' | 'input'> = {
  shell: 'bg-[#faf7f8] text-[#2a1522]',
  panel: 'border border-[#e8c8d2] bg-white shadow-[0_12px_40px_rgba(185,94,130,0.08)]',
  side: 'border border-[#e8c8d2] bg-gradient-to-b from-[#fff5f7] to-white',
  muted: 'text-[#5c4552]',
  action: 'bg-[#2a1522] text-white hover:bg-[#b95e82]',
  link: 'font-semibold text-[#b95e82] hover:underline',
  input: 'h-12 w-full rounded-xl border border-[#e8c8d2] bg-white px-4 text-sm text-[#2a1522] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] placeholder:text-[#5c4552]/60 focus:border-[#b95e82] focus:outline-none focus:ring-2 focus:ring-[#b95e82]/20',
}

export function getNewsprlineLoginConfig(): AuthPageConfig {
  return {
    ...base,
    icon: Megaphone,
    title: 'Log in to Newsprline',
    body: 'Use your work email to access the newsroom, draft press releases, and follow distribution status in one place.',
    bullets: [
      'Be found by media and partners in your archive',
      'Tighter review flow before a story goes live',
      'Branding and layout aligned to press distribution',
    ],
  }
}

export function getNewsprlineRegisterConfig(): AuthPageConfig {
  return {
    ...base,
    icon: Sparkles,
    title: 'Create your account',
    body: 'Set up a Newsprline profile to publish corporate announcements, attach media, and keep your team on the same timeline.',
    bullets: [
      'Structured release templates your approvers can trust',
      'Visibility into readership and referrers',
      'Roles that fit comms, IR, and external agencies',
    ],
  }
}

