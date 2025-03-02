import React from 'react';
import Image from 'next/image';
import {
  brandsWeSell,
  dealersOf,
  SalesProductImages,
} from '@/data/brandsWeSell';
import Link from 'next/link';

const SalesPage = () => {
  return (
    <main className='page-animation mt-20 px-4 py-6'>
      {/* Hero Section */}
      <section className='relative h-[80vh] bg-gray-900'>
        <Image
          src='/images/Home/Product-9.webp'
          alt='Heavy Equipment Sales'
          fill
          priority
          className='absolute inset-0 max-h-[65vh] object-cover object-center opacity-30 md:max-h-[90vh]'
        />

        <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white'>
          <h1 className='text-4xl font-bold md:text-6xl'>
            Premium Heavy Equipment Sales
          </h1>
          <p className='mt-4 max-w-xl text-lg md:text-xl'>
            Top-quality construction and industrial equipment from trusted
            brands—built to perform.
          </p>
          <a
            href='/contact-us'
            className='bg-primary md:hover:bg-primary-dark mt-6 rounded-lg px-6 py-3 text-lg font-semibold text-white transition-all'
          >
            Get a Quote
          </a>
        </div>
      </section>

      {/* Brands Section */}
      <section className='mx-auto mt-12 h-full max-w-7xl space-y-12 md:h-full'>
        {/* Brands We Sell */}
        <div>
          <h2 className='text-center text-3xl font-bold text-white md:text-4xl'>
            EQUIPMENT SALES <br />
          </h2>
          <p className='mt-2 text-center text-lg text-gray-400'>
            We offer a great selection of specialty tools and equipment! Come
            check out the new equipment at the shop!
          </p>

          <h3 className='mt-10 text-2xl font-bold text-white underline'>
            BRANDS WE SELL
          </h3>
          <div className='mt-6 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5'>
            {brandsWeSell.map((brand, index) => (
              <div
                key={index}
                className='flex h-[150px] items-center justify-center rounded-lg bg-white p-4 shadow-md transition-all md:hover:scale-105 md:hover:shadow-lg lg:h-[200px]'
              >
                <Image
                  src={brand.logo}
                  alt={brand.brandName}
                  width={140}
                  height={70}
                  priority
                  className='h-auto w-auto object-cover object-center'
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dealers Of */}
        <div>
          <h2 className='text-center text-3xl font-bold text-white md:text-4xl'>
            TRAILER SALES
          </h2>
          <p className='mt-2 text-center text-lg text-gray-400'>
            Custom order your trailer to your needs.
          </p>
          <h3 className='mt-6 text-2xl font-bold text-white underline'>
            DEALER OF
          </h3>
          <div className='mt-6 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4'>
            {dealersOf.map((dealer, index) => (
              <div
                key={index}
                className='flex items-center justify-center rounded-lg bg-white p-4 shadow-md transition-all md:hover:scale-105 md:hover:shadow-lg'
              >
                <Image
                  src={dealer.logo}
                  alt={dealer.brandName}
                  priority
                  width={140}
                  height={70}
                  className='h-auto w-auto object-cover object-center'
                />
              </div>
            ))}
          </div>
        </div>

        <section className='py-12'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-3xl font-bold text-white md:text-4xl'>
              Our Products
            </h2>
            <p className='mx-auto mt-2 max-w-4xl text-lg text-gray-400'>
              Find high-quality construction machinery, industrial tools, and
              reliable trailers designed to enhance efficiency and durability
              for your projects.
            </p>

            {/* Products Grid */}
            <div className='mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
              {SalesProductImages.map((product, index) => (
                <div
                  key={index}
                  className='group overflow-hidden rounded-md shadow-lg transition-transform md:hover:scale-105'
                >
                  <Image
                    src={product.image}
                    alt={`Product ${index + 1}`}
                    width={400}
                    height={300}
                    className='h-[180px] w-full rounded-md object-cover object-center'
                  />
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className='mt-10'>
              <Link
                href='/rentals'
                className='bg-primary md:hover:bg-primary-dark rounded-lg px-6 py-3 text-lg font-semibold text-white transition-all'
              >
                Browse Rentals
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default SalesPage;
