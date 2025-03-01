import siteMetadata from './siteMetadata';

const ContactsData = [
  {
    title: '30010 PR 216, Grunthal MB, R0A 0R0',
    href: 'https://www.google.com/maps/place/J%26M+Rentals/@49.4438627,-96.8734246,16.25z/data=!4m6!3m5!1s0x52c1b6f84939571f:0xd4ba4d25617c06d7!8m2!3d49.4440513!4d-96.8734146!16s%2Fg%2F11c1rdfwmg?entry=ttu',
    type: 'location',
  },
  {
    title: siteMetadata.phone, // Replace with the actual phone number
    href: siteMetadata.tel,
    type: 'phone',
  },
  {
    title: siteMetadata.email, // Replace with the actual email
    href: `mailto:${siteMetadata.email}`,
    type: 'email',
  },
];

export default ContactsData;
