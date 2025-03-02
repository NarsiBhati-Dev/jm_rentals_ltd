import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <>
      {/* Hero section */}
      <section className='relative mt-32 w-full'>
        {/* Background Image */}
        <Image
          src='/images/jm-rentals-main.png'
          alt='J&M Rentals'
          width={2560}
          height={699}
          className='aspect-auto min-h-[70vh] max-w-full object-center md:aspect-[16/9] md:h-[75vh] md:max-w-full'
          priority={true}
        />

        {/* Text Overlay */}
        <div className='absolute inset-0 mx-2 my-4 flex max-h-[489px] max-w-[600px] flex-col items-center rounded-lg bg-[#E0E0E0F5] px-4 pt-18 md:mx-auto md:my-auto md:px-20'>
          <h2 className='py-4 text-7xl font-extrabold tracking-tight drop-shadow-lg'>
            Welcome
          </h2>
          <p className='mt-4 text-center text-lg drop-shadow'>
            {`J&M Rentals Ltd. specializes in lawn & garden equipment,
            scissorlifts, and earthmoving equipment. Our high-quality tools are
            well-maintained and ready to tackle any project. Whether you're a
            homeowner or a contractor, we've got you covered.`}
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
