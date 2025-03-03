import React from 'react';
import Link from 'next/link';
import PDFIcon from '@/data/icons/pdf';
import RentalsCard from '@/components/rentals-card';
import { RentalCategories } from '@/data/rentals';

const RentalsPage = () => {
  return (
    <section className='page-animation bg-background mx-auto mt-24 mb-14 max-w-7xl rounded-md py-10 text-center text-white md:p-8'>
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
      <div className='mt-8 flex justify-center'>
        <Link
          href='/rental-rates'
          className='flex w-full max-w-xs items-center justify-center gap-3 rounded-full border border-amber-800 bg-amber-800 px-6 py-3 text-lg font-semibold text-white shadow-md transition-all md:w-auto md:bg-transparent md:text-amber-800 md:hover:bg-amber-800 md:hover:text-white'
          aria-label='View rental rates for 2024'
          title='View Rental Rates'
        >
          <PDFIcon /> View Rental Rates
        </Link>
      </div>
    </section>
  );
};

export default RentalsPage;
