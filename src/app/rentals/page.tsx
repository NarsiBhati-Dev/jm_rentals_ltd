import React from 'react';
import RentalsCard from '@/components/rentals-card';
import { RentalCategories } from '@/data/rentals';
import RentalsCtaButton from '@/components/rentals-cta-button';

const RentalsPage = () => {
  return (
    <section className='md:page-animation bg-background mx-auto mt-24 mb-14 max-w-7xl rounded-md py-10 text-center text-white md:p-8'>
      {/* Page Header */}
      <div className='text-center'>
        <h1 className='text-4xl font-extrabold text-white md:text-6xl'>
          RENTAL SERVICES
        </h1>
        <p className='mt-2 text-sm text-gray-300 md:text-xl'>
          {`YOU'VE GOT A JOB, WE'VE GOT THE TOOL!`}
        </p>
      </div>

      {/* Rental Categories */}
      <section className='container mx-auto mt-4 rounded-md px-4'>
        <RentalsCard RentalLinks={RentalCategories} gridCols='lg:grid-cols-2' />
      </section>

      {/* CTA Button */}
      <RentalsCtaButton />
    </section>
  );
};

export default RentalsPage;
