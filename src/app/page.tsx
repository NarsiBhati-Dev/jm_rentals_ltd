import HeroSection from '@/components/hero-section';
import HomeCTA from '@/components/home-cta';
import ProductSwiper from '@/components/product-swiper';
import WhyChooseUs from '@/components/why-choose-us';

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
