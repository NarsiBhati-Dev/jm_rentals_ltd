import React from 'react';
import CtaButton from './cta-button';
import { CTALinks } from '@/data/ctaLinks';
import Image from 'next/legacy/image';

const HomeCTA = () => {
  return (
    <section className='mt-12 w-full rounded-md bg-gray-900 py-12 text-center text-white'>
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold md:text-4xl'>
          Find the Right Equipment for Your Needs
        </h2>
        <p className='mt-3 text-lg text-gray-300'>
          We offer high-quality tools & equipment at competitive rates, with
          delivery & pickup available.
        </p>

        {/* CTA Container */}
        <div className='mt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-center'>
          {CTALinks.map((CTA, index) => (
            <section
              key={index}
              className='mx-auto flex max-w-[370px] flex-col items-center justify-center rounded-md sm:mx-0'
            >
              <Image
                src={CTA.image}
                alt={CTA.title}
                width={370}
                height={200}
                className='h-auto w-auto rounded-t-md'
              />
              <div className='px-4 py-4 text-center'>
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
