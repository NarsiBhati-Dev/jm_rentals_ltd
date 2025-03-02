import HeroSection from '@/components/hero-section';
import ProductSwiper from '@/components/product-swiper';

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Main Content */}
      <main className='mx-auto mt-2 flex max-w-7xl flex-col items-center justify-center py-8 text-center'>
        {/* Swiper Heading */}
        <h2 className='mt-6 text-3xl font-bold text-gray-200 md:text-4xl'>
          Explore Our Equipment
        </h2>
        <p className='mt-2 text-lg text-gray-400'>
          Browse our selection of high-quality construction and industrial
          equipment.
        </p>

        {/* Product Swiper */}
        <ProductSwiper />
      </main>
    </>
  );
}
