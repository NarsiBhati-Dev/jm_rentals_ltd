const envSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

if (!envSiteUrl) {
  throw new Error(
    '❌ NEXT_PUBLIC_SITE_URL is missing or empty! Check your .env file.',
  );
}

const SITE_URL = envSiteUrl.replace(/\/$/, '');

const siteMetadata = {
  title: 'J&M Rentals',
  description:
    'J&M Rentals Ltd. offers high-quality tool and equipment rentals in Grunthal, Manitoba. We specialize in lawn & garden equipment, scissor lifts, and earthmoving machinery—perfect for homeowners and contractors alike.',

  developer: 'Narsi Bhati',

  siteUrl: SITE_URL,

  language: 'en-US',
  locale: 'en-US',

  socialBanner: `${SITE_URL}/images/social-banner.png`,

  //   contact
  tel: '+12044346755',
  phone: '+1 (204) 434-6755',

  email: 'accounts@jmrentals.net',

  //   address: "30010 MB-216, Grunthal, MB R0A 0R0, Canada",
  address: '30010 PR 216, Grunthal MB, R0A 0R0',
  addressLink: 'https://maps.app.goo.gl/jwbKt7tbDQGWL4H1A',
};

export default siteMetadata;
