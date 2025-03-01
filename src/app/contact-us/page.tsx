import React from 'react';
import GoogleMap from '@/components/google-map';
import SectionContainer from '@/components/section-container';
import Image from 'next/image';
import ContactsData from '@/data/contactsData';
import Contacts, { Kind } from '@/components/contacts';

const winterHours = [
  { day: 'Monday - Friday', hours: '8:00 AM - 5:00 PM' },
  { day: 'Saturday', hours: '8:00 AM - 12:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

const ContactPage = () => {
  return (
    <main className='px-2 py-4 md:px-4 md:py-6'>
      <SectionContainer className='my-12 flex flex-col items-center justify-between gap-4 rounded-lg bg-white p-4 shadow-lg md:my-32 md:flex-row md:gap-6 md:p-6'>
        {/* Left & Right Sections Wrapper */}
        <div className='flex w-full flex-col gap-4 md:flex-row md:gap-6'>
          {/* Left Section - Contact Info & Winter Hours */}
          <div className='flex w-full flex-1 flex-col gap-4 md:gap-6'>
            {/* Contact Info */}
            <div className='flex flex-1 flex-col items-center justify-center rounded-lg bg-gray-100 px-3 py-2 text-center shadow-md transition-all duration-300 hover:shadow-lg md:items-start md:px-6 md:py-6 md:text-left'>
              <h2 className='pb-2 text-xl font-bold text-gray-900 md:pb-4 md:text-3xl'>
                Contact Us
              </h2>
              <div className='flex w-full flex-col gap-2 text-gray-700 md:gap-4'>
                {ContactsData.map((contact, index) => (
                  <div
                    key={index}
                    className='flex w-full items-center gap-2 rounded-md bg-white px-2 py-1 shadow-sm hover:bg-gray-50 md:gap-3 md:px-4 md:py-3'
                  >
                    <Contacts kind={contact.type as Kind} href={contact.href}>
                      <span className='text-sm font-medium text-gray-800 md:text-lg'>
                        {contact.title}
                      </span>
                    </Contacts>
                  </div>
                ))}
              </div>
            </div>

            {/* Winter Hours */}
            <div className='flex flex-1 flex-col items-center justify-center rounded-md bg-gray-100 px-3 py-2 text-center shadow-md hover:shadow-lg md:items-start md:px-6 md:py-6 md:text-left'>
              <h3 className='pb-1 text-xl font-semibold text-gray-900 md:pb-2 md:text-3xl'>
                Winter Hours
              </h3>
              <ul className='w-full space-y-2 text-xs text-gray-700 md:space-y-3 md:text-base'>
                {winterHours.map((item, index) => (
                  <li
                    key={index}
                    className='flex justify-between border-b pb-1'
                  >
                    <span className='font-medium'>{item.day}</span>
                    <span>{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section - Image & Map (Inside One Div) */}
          <div className='flex flex-1 flex-col items-center justify-center gap-4 md:gap-6'>
            <Image
              src='/images/Home/img-9.webp'
              alt='Contact us image'
              width={600}
              height={300}
              priority
              className='w-full max-w-xl rounded-md shadow-lg'
            />
            <GoogleMap />
          </div>
        </div>
      </SectionContainer>
    </main>
  );
};

export default ContactPage;
