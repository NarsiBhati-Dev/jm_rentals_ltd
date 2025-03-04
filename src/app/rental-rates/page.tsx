import React from 'react';
import getPageMetadata from '@/lib/getPageMetadata';

export const metadata = getPageMetadata({
  title: 'Rental Rates',
  path: 'rental-rates',
});

const RentalRatesPage = () => {
  const pdfUrl = '/RentalRates.pdf';
  console.log('PDF URL:', pdfUrl);

  return (
    <div className='page-animation mx-auto mt-20 px-4 py-10 text-center'>
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
        <a
          href={pdfUrl}
          download
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-lg bg-amber-800 px-6 py-4 font-bold text-white hover:bg-amber-600'
        >
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default RentalRatesPage;
