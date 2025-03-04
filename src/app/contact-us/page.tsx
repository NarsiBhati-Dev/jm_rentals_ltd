import React from 'react';
import GoogleMap from '@/components/google-map';
import SectionContainer from '@/components/section-container';
import Image from 'next/image';
import ContactsData from '@/data/contactsData';
import Contacts, { Kind } from '@/components/contacts';
import getPageMetadata from '@/lib/getPageMetadata';

const winterHours = [
  { day: 'Monday - Friday', hours: '8:00 AM - 5:00 PM' },
  { day: 'Saturday', hours: '8:00 AM - 12:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

export const metadata = getPageMetadata({
  title: 'Contact us',
  path: 'contact-us',
});

const ContactPage = () => {
  return (
    <main className='page-animation px-2 py-4 md:px-4 md:py-6'>
      <SectionContainer className='bg-background flex flex-col items-center justify-between gap-4 rounded-lg p-4 shadow-lg md:flex-row md:gap-6 md:p-6'>
        {/* Left & Right Sections Wrapper */}
        <section className='flex w-full flex-col gap-4 md:flex-row md:gap-6'>
          {/* Left Section - Contact Info & Winter Hours */}
          <section className='z-0 flex w-full flex-1 flex-col gap-4 rounded-md bg-blue-50 md:gap-6'>
            {/* Contact Info */}
            <section className='flex flex-1 flex-col items-center justify-center rounded-md px-3 py-2 text-center md:items-start md:px-6 md:py-6 md:text-left'>
              <h2 className='pb-2 text-3xl font-bold tracking-tighter text-gray-900 md:pb-4 md:text-5xl'>
                Contact Us
              </h2>

              {/* Contact List */}
              <address className='grid w-full grid-cols-1 gap-4'>
                {ContactsData.map((contact, index) => (
                  <Contacts
                    key={index}
                    kind={contact.type as Kind}
                    href={contact.href}
                    title={contact.title}
                  />
                ))}
              </address>
            </section>

            {/* Winter Hours */}
            <section className='flex flex-1 flex-col items-center justify-center rounded-md px-3 py-2 text-center md:items-start md:px-6 md:py-6 md:text-left'>
              <h3 className='pb-2 text-3xl font-bold tracking-tighter text-gray-900 md:pb-4 md:text-5xl'>
                Winter Hours
              </h3>
              <ul className='w-full space-y-2 text-base font-bold text-gray-800 md:space-y-3 md:text-lg'>
                {winterHours.map((item, index) => (
                  <li
                    key={index}
                    className='flex justify-between border-b pb-1'
                  >
                    <span className='font-bold'>{item.day}</span>
                    <span>{item.hours}</span>
                  </li>
                ))}
              </ul>
            </section>
          </section>

          {/* Right Section - Image & Map */}
          <section className='flex flex-1 flex-col items-center justify-center gap-4 md:gap-6'>
            <Image
              src='/images/Home/Product-14.webp'
              alt='Contact us image'
              width={600}
              height={350}
              priority
              className='w-full max-w-2xl rounded-md border border-white'
            />
            <GoogleMap />
          </section>
        </section>
      </SectionContainer>
    </main>
  );
};

export default ContactPage;
