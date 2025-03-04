import React from 'react';
import Link from 'next/link';
import getPageMetadata from '@/lib/getPageMetadata';

export const metadata = getPageMetadata({
  title: 'Rental Rates',
  path: 'rental-rates',
});

const RentalRatesPage = () => {
  const pdfUrl = '/RentalRates_2024.pdf';

  return (
    <div className='page-animation mx-auto px-4 py-16 text-center'>
      <h1 className='mb-4 text-2xl font-bold'>Rental Rates 2024</h1>

      {/* PDF Embed */}
      <div className='mx-auto max-w-7xl'>
        <iframe
          src={pdfUrl}
          className='h-72 w-full rounded-lg border md:h-[800px]'
          title='Rental Rates PDF'
        />
      </div>

      {/* Download Button */}
      <div className='mt-6'>
        <Link
          href={pdfUrl}
          download
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-lg bg-amber-800 px-6 py-4 font-bold text-white hover:bg-amber-600'
        >
          Download PDF
        </Link>
      </div>
    </div>
  );
};

export default RentalRatesPage;
