import React from 'react';
import { CTALinks } from '@/data/ctaLinks';
import RentalsCard from './rentals-card';

const HomeCTA = () => {
  return (
    <section className='bg-background mt-12 w-full rounded-md py-12 text-center text-white'>
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold md:text-4xl'>
          Find the Right Equipment for Your Needs
        </h2>
        <p className='mt-3 text-lg text-gray-300'>
          We offer high-quality tools & equipment at competitive rates, with
          delivery & pickup available.
        </p>

        {/* CTA Container */}
        <RentalsCard RentalLinks={CTALinks} />
      </div>
    </section>
  );
};

export default HomeCTA;
