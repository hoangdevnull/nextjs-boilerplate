import { siteConfig } from '@/config/site';
import { ROUTES } from '@/lib/routes';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const staticPages: MetadataRoute.Sitemap = Object.values(ROUTES).map((route) => ({
      url: `${siteConfig.appUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    }));

    return staticPages;
  } catch (err) {
    return [];
  }
}
