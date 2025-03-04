export const navLinks = [
  { title: 'HOME', path: '/' },
  {
    title: 'RENTALS',
    path: '/rentals',
    subroutes: [
      {
        title: 'CONSTRUCTION EQUIPMENT',
        path: '/rentals/construction-equipment',
      },
      { title: 'HEAVY EQUIPMENT', path: '/rentals/heavy-equipment' },
      { title: 'LAWN & GARDEN EQUIPMENT', path: '/rentals/lawn-garden' },
      {
        title: 'MISCELLANEOUS EQUIPMENT',
        path: '/rentals/miscellaneous-equipment',
      },
    ],
  },
  { title: 'SALES', path: '/sales' },
  { title: 'CONTACT US', path: '/contact-us' },
];
