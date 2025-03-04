import { MiscellaneousEquipments } from '@/data/rentals';
import RentalsPageTemplate from '@/components/rentals-page-template';
import React from 'react';
import getPageMetadata from '@/lib/getPageMetadata';

export const metadata = getPageMetadata({
  title: 'MISCELLANEOUS EQUIPMENT',
  path: 'rentals/miscellaneous-equipment',
  image: '/images/rentals/section-miscellaneous-equipment.webp',
});

const MiscellaneousEquipmentPage = () => {
  return (
    <>
      <RentalsPageTemplate
        pageTitle={'MISCELLANEOUS EQUIPMENT'}
        pageImage={'/images/rentals/section-miscellaneous-equipment.webp'}
        pageEquipments={MiscellaneousEquipments}
      />
    </>
  );
};

export default MiscellaneousEquipmentPage;
