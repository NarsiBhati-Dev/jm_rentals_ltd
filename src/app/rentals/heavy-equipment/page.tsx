import { HeavyEquipment } from '@/data/rentals';
import RentalsPageTemplate from '@/pages/rentals-page-template';
import React from 'react';

const HeavyEquipmentPage = () => {
  return (
    <RentalsPageTemplate
      pageTitle={'HEAVY EQUIPMENT'}
      pageImage={'/images/rentals/section-heavy-equipment.png'}
      pageEquipments={HeavyEquipment}
    />
  );
};

export default HeavyEquipmentPage;
