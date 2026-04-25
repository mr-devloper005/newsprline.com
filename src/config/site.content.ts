import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: 'Press release distribution',
  },
  footer: {
    tagline: 'Visibility for every announcement',
  },
  hero: {
    badge: 'Distribution platform',
    title: ['Distribute press releases with clarity, speed, and measurable reach.'],
    description:
      'Send multimedia announcements to journalists, trade publications, and digital channels from one workflow built for comms and marketing teams.',
    primaryCta: {
      label: 'View press releases',
      href: '/updates',
    },
    secondaryCta: {
      label: 'Talk to us',
      href: '/contact',
    },
    searchPlaceholder: 'Search releases',
    focusLabel: 'Latest',
    featureCardBadge: 'Network reach',
    featureCardTitle: 'Track distribution and coverage in one place.',
    featureCardDescription:
      'See where your story travels and keep stakeholders aligned with a single source of truth for every announcement.',
  },
  home: {
    metadata: {
      title: 'Press release distribution and media reach',
      description:
        'Publish corporate announcements, product launches, and media statements with a professional press distribution experience.',
      openGraphTitle: 'Newsprline — press release distribution',
      openGraphDescription: 'Distribute releases, reach journalists, and keep visibility organized for your team.',
      keywords: [
        'press release distribution',
        'media relations',
        'public relations',
        'news wire',
        'corporate communications',
        'earnings',
        'product launch',
        'newsprline',
      ],
    },
    servicesHeading: 'Press release distribution and multimedia software services',
    aboutTitle: 'Built for communications teams, not generic feeds',
    aboutBody:
      'Newsprline is a media-forward publishing front that pairs archive browsing with a calm, high-trust interface. Post once, follow consistent formatting, and give readers a premium reading line that matches the importance of the news.',
    resourcesHeading: 'Resources',
    caseStudies: [
      { title: 'Global retail rebrand', topic: 'Case study', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80&auto=format&fit=crop' },
      { title: 'Public sector transparency report', topic: 'Case study', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80&auto=format&fit=crop' },
      { title: 'B2B product launch', topic: 'Case study', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80&auto=format&fit=crop' },
    ],
  },
  cta: {
    badge: 'Ready when you are',
    title: 'From draft review to live distribution, keep the story on-brand.',
    description: 'Start with a press release, attach supporting media, and keep every lane aligned on timing and message.',
    primaryCta: {
      label: 'Contact sales',
      href: '/contact',
    },
    secondaryCta: {
      label: 'Read latest',
      href: '/updates',
    },
  },
  taskSectionHeading: 'Latest press releases',
  taskSectionDescriptionSuffix: 'Read recently distributed announcements.',
} as const

export const sitePricingContent = {
  pageTitle: 'Simple pricing for distribution teams',
  pageDescription: 'Choose a lane that matches how often you publish. Upgrade when volume grows—no surprise limits on reader access.',
} as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Articles',
    description: 'Read the latest posts and long-form updates.',
  },
  listing: {
    title: 'Listings',
    description: 'Explore listings and directory-style entries.',
  },
  classified: {
    title: 'Classifieds',
    description: 'Browse classifieds and short-form notices.',
  },
  image: {
    title: 'Images',
    description: 'Browse image-led updates and visual posts.',
  },
  profile: {
    title: 'Profiles',
    description: 'View profile pages and public identities.',
  },
  sbm: {
    title: 'Bookmarks',
    description: 'Browse curated resources and saved links.',
  },
  pdf: {
    title: 'Resources',
    description: 'Open PDFs and downloadable files.',
  },
  mediaDistribution: {
    title: 'Press releases',
    description: 'Browse the latest distributed announcements and media updates.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: { title: 'Listings', paragraphs: ['Directory entries and service pages.'], links: [{ label: 'Home', href: '/' }] },
  article: { title: 'Articles', paragraphs: ['General long-form article feed.'], links: [{ label: 'Home', href: '/' }] },
  classified: { title: 'Classifieds', paragraphs: ['Short-form posts and notices.'], links: [{ label: 'Home', href: '/' }] },
  image: { title: 'Images', paragraphs: ['Image-first posts and galleries.'], links: [{ label: 'Home', href: '/' }] },
  profile: { title: 'Profiles', paragraphs: ['Profile pages and identity surfaces.'], links: [{ label: 'Home', href: '/' }] },
  sbm: { title: 'Bookmarks', paragraphs: ['Curated saved links and references.'], links: [{ label: 'Home', href: '/' }] },
  pdf: { title: 'Resources', paragraphs: ['Downloadable files and documents.'], links: [{ label: 'Home', href: '/' }] },
  social: { title: 'Social', paragraphs: ['Short updates and activity.'], links: [{ label: 'Home', href: '/' }] },
  comment: { title: 'Comments', paragraphs: ['Commentary and response posts.'], links: [{ label: 'Home', href: '/' }] },
  org: { title: 'Organizations', paragraphs: ['Organization pages and entities.'], links: [{ label: 'Home', href: '/' }] },
  mediaDistribution: {
    title: 'Press release archive',
    paragraphs: [
      'Filter by topic to focus on the announcements that matter to you. Every release uses the same readable layout for consistency across your organization and partners.',
    ],
    links: [
      { label: 'Home', href: '/' },
      { label: 'Contact', href: '/contact' },
    ],
  },
}
