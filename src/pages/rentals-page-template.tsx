import CategoryCard, { type Equipment } from '@/components/category-card';
import React from 'react';
import Image from 'next/image';

interface RentalsPageTemplateProps {
  pageTitle: string;
  pageImage: string;
  pageEquipments: Equipment[];
}

const RentalsPageTemplate = ({
  pageTitle,
  pageImage,
  pageEquipments,
}: RentalsPageTemplateProps) => {
  return (
    <section className='container mx-auto mt-20 mb-12 rounded-md px-6 py-8 text-white'>
      <h1 className='mb-12 border-b-2 border-dashed py-4 text-4xl font-extrabold tracking-tighter md:text-6xl'>
        {pageTitle}
      </h1>

      <Image
        src={pageImage}
        alt={''}
        width={200}
        height={200}
        priority
        className='my-4 aspect-video w-full rounded-md md:h-[60vh] md:py-4'
      />

      {/*  */}
      <CategoryCard Equipments={pageEquipments} />
    </section>
  );
};

export default RentalsPageTemplate;
