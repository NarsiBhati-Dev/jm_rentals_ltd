import HeroSection from '@/components/hero-section';

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* main content */}
      <main className='mt-2 flex items-center justify-center py-8 text-5xl font-extrabold text-white'>
        <h1>J&M Rentals</h1>
      </main>
    </>
  );
}
