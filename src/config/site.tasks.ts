export const siteTaskDefinitions = [
  {
    key: 'mediaDistribution',
    label: 'Release media',
    route: '/updates',
    description: 'Official announcements, launches, and media statements.',
    contentType: 'mediaDistribution',
    enabled: true,
  },
] as const

export const siteTaskViews = {
  mediaDistribution: '/updates',
} as const
