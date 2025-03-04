import { LawnAndGardenEquipments } from '@/data/rentals';
import RentalsPageTemplate from '@/components/rentals-page-template';
import React from 'react';
import getPageMetadata from '@/lib/getPageMetadata';

export const metadata = getPageMetadata({
  title: 'LAWN & GARDEN EQUIPMENT',
  path: 'rentals/lawn-garden',
  image: '/images/rentals/section-lawn-garden-equipment.webp',
});

const LawnGardenPage = () => {
  return (
    <RentalsPageTemplate
      pageTitle={'LAWN & GARDEN EQUIPMENT'}
      pageImage={'/images/rentals/section-lawn-garden-equipment.webp'}
      pageEquipments={LawnAndGardenEquipments}
    />
  );
};

export default LawnGardenPage;
