import React from 'react';
import CtaButton from './cta-button';
import { CTALinks } from '@/data/ctaLinks';
import Image from 'next/image';

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
        <div className='mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {CTALinks.map((CTA, index) => (
            <section
              key={index}
              className='mx-auto flex max-w-[400px] flex-col items-center justify-center rounded-md shadow-md'
            >
              <Image
                src={CTA.image}
                alt={CTA.title}
                width={400}
                height={250}
                className='h-[200px] w-[400px] rounded-t-md object-cover'
              />
              <div className='bg-black px-4 py-4 text-center'>
                <p className='mt-2 text-sm text-gray-400'>{CTA.description}</p>
              </div>
              <CtaButton href={CTA.href}>{CTA.title}</CtaButton>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
