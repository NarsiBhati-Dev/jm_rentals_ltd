import { HeavyEquipment } from '@/data/rentals';
import RentalsPageTemplate from '@/pages/rentals-page-template';
import React from 'react';
import getPageMetadata from '@/lib/getPageMetadata';

export const metadata = getPageMetadata({
  title: 'HEAVY EQUIPMENT',
  path: 'rentals/heavy-equipment',
  image: '/images/rentals/section-heavy-equipment.webp',
});

const HeavyEquipmentPage = () => {
  return (
    <RentalsPageTemplate
      pageTitle={'HEAVY EQUIPMENT'}
      pageImage={'/images/rentals/section-heavy-equipment.webp'}
      pageEquipments={HeavyEquipment}
    />
  );
};

export default HeavyEquipmentPage;
