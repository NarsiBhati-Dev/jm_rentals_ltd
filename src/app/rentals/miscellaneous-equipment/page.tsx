import { MiscellaneousEquipments } from '@/data/rentals';
import RentalsPageTemplate from '@/pages/rentals-page-template';
import React from 'react';

const MiscellaneousEquipmentPage = () => {
  return (
    <RentalsPageTemplate
      pageTitle={'MISCELLANEOUS EQUIPMENT'}
      pageImage={'/images/rentals/section-miscellaneous-equipment.png'}
      pageEquipments={MiscellaneousEquipments}
    />
  );
};

export default MiscellaneousEquipmentPage;
