import React from 'react';
import { ConstructionEquipments } from '@/data/rentals';
import RentalsPageTemplate from '@/pages/rentals-page-template';
import getPageMetadata from '@/lib/getPageMetadata';

export const metadata = getPageMetadata({
  title: 'CONSTRUCTION EQUIPMENT',
  path: 'rentals/construction-equipment',
  image: '/images/rentals/section-construction-equipment.png',
});

const ConstructionEquipmentPage = () => {
  return (
    <RentalsPageTemplate
      pageTitle={'CONSTRUCTION EQUIPMENT'}
      pageImage={'/images/rentals/section-construction-equipment.png'}
      pageEquipments={ConstructionEquipments}
    />
  );
};

export default ConstructionEquipmentPage;
