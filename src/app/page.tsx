import HeroSection from '@/components/hero-section';
import HomeCTA from '@/components/home-cta';
import ProductSwiper from '@/components/product-swiper';
import WhyChooseUs from '@/components/why-choose-us';
import siteMetadata from '@/data/siteMetadata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: 'J&M Rentals | Tool & Equipment Rentals in Grunthal, Manitoba',
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,

  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
};

export default function Home() {
  return (
    <main className='page-animation'>
      <HeroSection />

      {/* Main Content */}
      <section className='mx-auto mt-2 flex max-w-7xl flex-col items-center justify-center py-8 text-center'>
        {/* Swiper Heading */}
        <h2 className='mt-6 text-3xl font-bold text-gray-200 md:text-4xl'>
          Explore Our Equipment
        </h2>
        <p className='mx-auto mt-4 max-w-2xl text-center text-lg text-gray-400'>
          Whether you’re looking for construction machinery, industrial tools,
          or reliable trailers, we offer top-tier equipment to support your
          projects with efficiency and durability.
        </p>

        {/* Product Swiper */}
        <ProductSwiper />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* CTA */}
        <HomeCTA />
      </section>
    </main>
  );
}
