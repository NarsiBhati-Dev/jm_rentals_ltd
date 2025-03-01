const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.trim();

const siteMetadata = {
  title: "J&M Rentals",
  description:
    "J&M Rentals Ltd. offers high-quality tool and equipment rentals in Grunthal, Manitoba. We specialize in lawn & garden equipment, scissor lifts, and earthmoving machinery—perfect for homeowners and contractors alike.",

  developer: "Narsi Bhati",

  siteUrl: SITE_URL,

  language: "en-US",
  locale: "en-US",

  socialBanner: `${SITE_URL}/images/jmb-social-banner.png`,
};

export default siteMetadata;
