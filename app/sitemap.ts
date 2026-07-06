import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

const NOW = new Date('2026-07-06')

const routes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '/', priority: 1.0, freq: 'weekly' },
  { path: '/company', priority: 0.7, freq: 'monthly' },
  { path: '/business', priority: 0.9, freq: 'monthly' },
  { path: '/business/quality', priority: 0.9, freq: 'monthly' },
  { path: '/business/products', priority: 0.9, freq: 'monthly' },
  { path: '/business/products/ramen', priority: 0.8, freq: 'monthly' },
  { path: '/business/products/yakisoba', priority: 0.8, freq: 'monthly' },
  { path: '/business/products/agemen', priority: 0.8, freq: 'monthly' },
  { path: '/business/products/gyoza', priority: 0.7, freq: 'monthly' },
  { path: '/business/products/shumai', priority: 0.7, freq: 'monthly' },
  { path: '/business/sample', priority: 0.9, freq: 'monthly' },
  { path: '/business/test-kitchen', priority: 0.9, freq: 'monthly' },
  { path: '/tokyo-seimenjo', priority: 0.9, freq: 'monthly' },
  { path: '/business-noodles', priority: 0.8, freq: 'monthly' },
  { path: '/original-noodles', priority: 0.8, freq: 'monthly' },
  { path: '/ramen-noodles', priority: 0.8, freq: 'monthly' },
  { path: '/chinese-noodles', priority: 0.8, freq: 'monthly' },
  { path: '/itabashi-seimenjo', priority: 0.9, freq: 'monthly' },
  { path: '/contact', priority: 0.9, freq: 'monthly' },
  { path: '/sitemap', priority: 0.4, freq: 'yearly' },
  { path: '/privacy', priority: 0.3, freq: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: NOW,
    changeFrequency: r.freq,
    priority: r.priority,
  }))
}
