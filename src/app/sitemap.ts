import { MetadataRoute } from 'next';
import siteMetadata from '@/data/siteMetadata';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl;

  const routes = ['', 'rentals', 'sales', 'contact-us'].map(route => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}
