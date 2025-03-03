import React from 'react';
import { ConstructionEquipments } from '@/data/rentals';
import RentalsPageTemplate from '@/pages/rentals-page-template';

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
