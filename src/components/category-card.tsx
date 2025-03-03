import React from 'react';

export type Equipment = {
  title: string;
  items: string[];
};

interface CategoryCardProps {
  Equipments: Equipment[];
}

const CategoryCard = ({ Equipments }: CategoryCardProps) => {
  if (!Equipments) {
    return <p className='text-white'>No equipment available.</p>;
  }

  return (
    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
      {Equipments.map((category, index) => (
        <div
          key={index}
          className='bg-background w-full rounded-lg p-6 shadow-md md:w-[480px]'
        >
          <h2 className='mt-4 font-bold tracking-tighter text-white md:text-3xl'>
            {category.title}
          </h2>
          <ul className='mt-2 text-base text-gray-300'>
            {category.items.map((item, idx) => (
              <li key={idx} className='ml-4 list-disc'>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;
