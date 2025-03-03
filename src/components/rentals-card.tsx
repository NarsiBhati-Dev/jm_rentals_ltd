import React from 'react';
import Image from 'next/image';
import CtaButton from './cta-button';

interface RentalCategory {
  title: string;
  description: string;
  href: string;
  image: string;
}

interface RentalsCardProps {
  RentalLinks: RentalCategory[];
  gridCols?: string;
}

const RentalsCard = ({
  RentalLinks,
  gridCols = 'lg:grid-cols-3',
}: RentalsCardProps) => {
  return (
    <div
      className={`mt-8 grid grid-cols-1 gap-6 rounded-md sm:grid-cols-2 ${gridCols} `}
    >
      {RentalLinks.map((category, index) => (
        <section
          key={index}
          className='mx-auto flex max-w-[470px] flex-col items-center justify-center rounded-md shadow-md'
        >
          <Image
            src={category.image}
            alt={category.title}
            width={400}
            height={250}
            priority
            className='aspect-auto h-full w-[470px] rounded-t-md object-cover object-center'
          />

          <div className='w-full bg-black px-4 py-4 text-center'>
            <p className='h-100px mt-2 text-sm text-gray-400'>
              {category.description}
            </p>
          </div>
          <CtaButton href={category.href}>{category.title}</CtaButton>
        </section>
      ))}
    </div>
  );
};

export default RentalsCard;
