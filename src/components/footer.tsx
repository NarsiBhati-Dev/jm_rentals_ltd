import React from 'react';
import Logo from './logo';
import siteMetadata from '@/data/siteMetadata';

const Footer = () => {
  return (
    <footer className='bg-gray-900 px-6 py-4 text-white'>
      <section className='flex flex-col items-center gap-6 md:flex-row md:justify-between'>
        {/* Logo & Description */}
        <div className='mx-auto max-w-82 text-center md:text-left'>
          <Logo />
          <p className='mt-4 text-justify text-lg text-gray-300 md:text-xl'>
            Equipment rentals are available at minimum, daily, weekly, and
            monthly rates, giving you the flexibility to rent the tool you need
            for the day or the entire project.
          </p>
        </div>

        {/* Contact Info */}
        <div className='mx-auto mt-4 max-w-80 text-center md:mt-20 md:max-w-2xl md:text-left'>
          <h5 className='text-2xl font-semibold text-white'>
            Need Equipment? Let’s Talk!
          </h5>
          <p className='mt-4 text-justify text-lg text-gray-300 md:text-xl'>
            Get in touch with <strong>J&M Rentals Ltd.</strong> for equipment
            availability and pricing. We offer flexible rental options to suit
            your needs.
          </p>

          {/* Contact CTA */}
          <div className='mt-4 flex flex-col items-start justify-start gap-4 space-y-3 md:flex-row md:items-start'>
            <a
              href={`tel:${siteMetadata.tel}`}
              className='w-full rounded-lg bg-amber-500 px-6 py-3 font-medium text-white shadow-md transition-all hover:bg-amber-600 md:w-auto'
              aria-label={`Call J&M Rentals at ${siteMetadata.tel}`}
              title='Call J&M Rentals'
            >
              📞 Call Us: {siteMetadata.phone}
            </a>

            <a
              href='/rental-rates'
              className='w-full rounded-lg bg-gray-700 px-6 py-3 font-medium text-white shadow-md transition-all hover:bg-gray-800 md:w-auto'
              aria-label='View rental rates for 2024'
              title='View Rental Rates'
            >
              📋 View Rental Rates
            </a>
          </div>
        </div>
      </section>

      {/* Footer Credit */}
      <div className='my-8 border-t border-gray-700 py-2 text-center text-[16px] text-gray-400'>
        <p className='py-2'>
          &copy; {new Date().getFullYear()} J&M Rentals Ltd. All rights
          reserved.
        </p>
        <p>
          Developed with ❤️ by{'  '}
          <span className='font-semibold'>{siteMetadata.developer}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
