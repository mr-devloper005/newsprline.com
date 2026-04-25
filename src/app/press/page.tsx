'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useToast } from '@/components/ui/use-toast'
import { SITE_CONFIG } from '@/lib/site-config'

const pressAssets = [
  {
    id: 'npl-logo',
    title: 'Newsprline logo pack',
    description: 'SVG, PNG, and reversed treatments for light and dark surfaces.',
    fileType: 'ZIP',
    previewUrl: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&h=600&fit=crop',
  },
  {
    id: 'npl-screens',
    title: 'Product & archive screenshots',
    description: 'UI captures sized for press decks and event slides.',
    fileType: 'ZIP',
    previewUrl: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&h=600&fit=crop',
  },
  {
    id: 'npl-guide',
    title: 'Editorial & brand notes',
    description: 'How we refer to the product, tone, and color usage in external materials.',
    fileType: 'PDF',
    previewUrl: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800&h=600&fit=crop',
  },
] as const

const coverage = [
  { id: '1', outlet: 'Trade media', headline: 'Distribution platforms double down on archive clarity for IROs.', date: '2026' },
  { id: '2', outlet: 'Communications week', headline: 'Teams choose calmer press sites over noisy social-first feeds.', date: '2026' },
] as const

export default function PressPage() {
  const { toast } = useToast()
  const [activeId, setActiveId] = useState<string | null>(null)
  const active = pressAssets.find((a) => a.id === activeId)

  return (
    <div className="min-h-screen bg-[#faf7f8] text-[#2a1522]">
      <NavbarShell />
      <div className="border-b border-[#e8c8d2] bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--site-font-display)] text-3xl font-semibold sm:text-4xl">Press</h1>
          <p className="mt-2 text-sm text-[#5c4552] sm:text-base">Brand assets, product imagery, and recent coverage for {SITE_CONFIG.name}.</p>
        </div>
      </div>
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-[#e8c8d2] bg-white shadow-sm">
            <CardContent className="space-y-3 p-6">
              <h2 className="text-lg font-semibold">Press kit</h2>
              <p className="text-sm text-[#5c4552]">Use these for articles, event programs, and partner co-marketing.</p>
              <div className="grid gap-2">
                {pressAssets.map((asset) => (
                  <div key={asset.id} className="rounded-lg border border-[#e8c8d2] bg-[#fffafc] px-4 py-3">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="text-sm font-medium">{asset.title}</p>
                        <p className="text-xs text-[#5c4552]">{asset.description}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-[#fff5f7] text-[#b95e82]">
                          {asset.fileType}
                        </Badge>
                        <Button size="sm" variant="outline" className="border-[#e8c8d2]" onClick={() => setActiveId(asset.id)}>
                          Preview
                        </Button>
                        <Button
                          size="sm"
                          className="bg-[#2a1522] text-white hover:bg-[#b95e82]"
                          onClick={() =>
                            toast({ title: 'Download', description: `${asset.title} — use your own hosting for production assets.` })
                          }
                        >
                          Request
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <div className="space-y-4">
            {coverage.map((item) => (
              <Card key={item.id} className="border-[#e8c8d2] bg-white transition hover:shadow-sm">
                <CardContent className="p-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#b95e82]">{item.outlet}</div>
                  <p className="mt-2 text-sm text-[#2a1522]">{item.headline}</p>
                  <p className="mt-2 text-xs text-[#5c4552]">{item.date}</p>
                </CardContent>
              </Card>
            ))}
            <p className="text-xs text-[#5c4552]">Coverage blurbs are illustrative. Replace with live mentions when available.</p>
          </div>
        </div>
        <p className="mt-8 text-sm">
          <Link href="/contact" className="font-semibold text-[#b95e82] hover:underline">
            Media inquiries
          </Link>
          <span className="text-[#5c4552]"> — include your outlet, deadline, and angle so we can route you quickly.</span>
        </p>
      </main>
      <Dialog open={Boolean(activeId)} onOpenChange={() => setActiveId(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{active?.title}</DialogTitle>
          </DialogHeader>
          {active?.previewUrl ? (
            <div className="relative aspect-video overflow-hidden rounded-xl border border-[#e8c8d2] bg-[#f5f5f5]">
              <Image src={active.previewUrl} alt="" fill className="object-cover" />
            </div>
          ) : null}
          <p className="text-sm text-[#5c4552]">{active?.description}</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setActiveId(null)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Footer />
    </div>
  )
}
