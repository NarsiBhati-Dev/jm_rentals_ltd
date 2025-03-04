import React from 'react';
import { FeaturesData } from '@/data/featuresData';

const WhyChooseUs = () => {
  return (
    <section className='mx-auto mt-12 max-w-7xl px-6 py-12 text-center'>
      <h2 className='text-3xl font-bold text-gray-200 md:text-4xl'>
        Why Choose J&M Rentals?
      </h2>
      <p className='mx-auto mt-2 max-w-2xl text-lg text-gray-400'>
        We provide high-quality equipment, competitive pricing, and excellent
        service to support your projects.
      </p>

      <div className='mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2'>
        {FeaturesData.map((feature, index) => (
          <div
            key={index}
            className='bg-background rounded-md p-6 shadow-md transition-transform md:hover:scale-105'
          >
            <h3 className='text-primary text-xl font-semibold'>
              {feature.title}
            </h3>
            <p className='mt-2 text-gray-300'>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
