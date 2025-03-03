import { MetadataRoute } from 'next';
import siteMetadata from '@/data/siteMetadata';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl;

  const routes = [
    '',
    'rentals',
    'sales',
    'contact-us',
    'rental-rates',
    'rentals/construction-equipment',
    'rentals/heavy-equipment',
    'rentals/lawn-garden',
    'rentals/miscellaneous-equipment',
  ].map(route => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}
