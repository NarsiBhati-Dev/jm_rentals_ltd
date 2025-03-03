import { LawnAndGardenEquipments } from '@/data/rentals';
import RentalsPageTemplate from '@/pages/rentals-page-template';
import React from 'react';

const LawnGardenPage = () => {
  return (
    <RentalsPageTemplate
      pageTitle={'LAWN & GARDEN EQUIPMENT'}
      pageImage={'/images/rentals/section-lawn-garden-equipment.png'}
      pageEquipments={LawnAndGardenEquipments}
    />
  );
};

export default LawnGardenPage;
