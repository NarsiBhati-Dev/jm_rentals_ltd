import React from 'react';
import Logo from './logo';
import siteMetadata from '@/data/siteMetadata';
import { Phone } from '@/data/icons/contact-us-icons';
import PDFIcon from '@/data/icons/pdf';

const Footer = () => {
  return (
    <footer className='bg-background px-6 py-4 text-white'>
      <section className='flex flex-col items-center gap-6 md:flex-row md:justify-between'>
        {/* Logo & Description */}
        <section className='mx-auto max-w-82 text-center md:text-left'>
          <header>
            <Logo />
          </header>
          <p className='mt-4 text-justify text-lg text-gray-300 md:text-xl'>
            Equipment rentals are available at minimum, daily, weekly, and
            monthly rates, giving you the flexibility to rent the tool you need
            for the day or the entire project.
          </p>
        </section>

        {/* Contact Info */}
        <address className='mx-auto mt-4 max-w-80 text-center not-italic md:mt-20 md:max-w-2xl md:text-left'>
          <h2 className='text-2xl font-semibold text-white'>
            Need Equipment? Let’s Talk!
          </h2>
          <p className='mt-4 text-justify text-lg text-gray-300 md:text-xl'>
            Get in touch with <strong>J&M Rentals Ltd.</strong> for equipment
            availability and pricing. We offer flexible rental options to suit
            your needs.
          </p>

          {/* Contact CTA */}
          <section className='mt-4 flex flex-col items-start justify-start gap-4 space-y-3 md:flex-row md:items-start'>
            <a
              href={`tel:${siteMetadata.tel}`}
              className='bg-primary md:hover:bg-primary-dark flex w-full items-center gap-6 rounded-lg px-6 py-3 font-bold text-white shadow-md transition-all md:w-auto md:justify-center'
              aria-label={`Call J&M Rentals at ${siteMetadata.tel}`}
              title='Call J&M Rentals'
            >
              <Phone color={'white'} /> Call Us: {siteMetadata.phone}
            </a>
            <a
              href='/rental-rates'
              className='flex w-full items-center gap-6 rounded-lg bg-gray-700 px-6 py-3 font-bold text-white shadow-md transition-all md:w-auto md:justify-center md:hover:bg-gray-800'
              aria-label='View rental rates for 2024'
              title='View Rental Rates'
            >
              <PDFIcon /> View Rental Rates
            </a>
          </section>
        </address>
      </section>

      {/* Footer Credit */}
      <section className='my-8 border-t border-gray-700 py-2 text-center text-[16px] text-gray-400'>
        <small>
          <p className='py-2'>
            &copy; {new Date().getFullYear()} J&M Rentals Ltd. All rights
            reserved.
          </p>
          <p>
            Developed with ❤️ by{' '}
            <span className='font-semibold'>{siteMetadata.developer}</span>
          </p>
        </small>
      </section>
    </footer>
  );
};

export default Footer;
