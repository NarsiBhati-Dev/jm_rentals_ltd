import React from 'react';
import { ConstructionEquipments } from '@/data/rentals/constructionEquipment';
import RentalsPageTemplate from '@/pages/rentals-page-template';

const ConstructionEquipment = () => {
  return (
    <RentalsPageTemplate
      pageTitle={'CONSTRUCTION EQUIPMENT'}
      pageImage={'/images/rentals/section-img-1.png'}
      pageEquipments={ConstructionEquipments}
    />
  );
};

export default ConstructionEquipment;
