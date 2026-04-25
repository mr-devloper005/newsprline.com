export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'ow890kjro8',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Newsprline',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Press release distribution for modern teams',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'Newsprline helps organizations publish announcements, reach journalists, and track visibility across digital channels.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'newsprline.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://newsprline.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || '',
} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const
