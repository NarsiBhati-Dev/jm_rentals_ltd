import { MiscellaneousEquipments } from '@/data/rentals';
import RentalsPageTemplate from '@/pages/rentals-page-template';
import React from 'react';
import getPageMetadata from '@/lib/getPageMetadata';

export const metadata = getPageMetadata({
  title: 'MISCELLANEOUS EQUIPMENT',
  path: 'rentals/miscellaneous-equipment',
  image: '/images/rentals/section-miscellaneous-equipment.png',
});

const MiscellaneousEquipmentPage = () => {
  return (
    <>
      <RentalsPageTemplate
        pageTitle={'MISCELLANEOUS EQUIPMENT'}
        pageImage={'/images/rentals/section-miscellaneous-equipment.png'}
        pageEquipments={MiscellaneousEquipments}
      />
    </>
  );
};

export default MiscellaneousEquipmentPage;
