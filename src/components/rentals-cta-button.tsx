import PDFIcon from '@/data/icons/pdf';
import Link from 'next/link';
import React from 'react';

const RentalsCtaButton = () => {
  return (
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
  );
};

export default RentalsCtaButton;
