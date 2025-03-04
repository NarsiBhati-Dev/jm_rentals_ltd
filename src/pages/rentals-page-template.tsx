import CategoryCard, { type Equipment } from '@/components/category-card';
import React from 'react';
import Image from 'next/image';
import RentalsCtaButton from '@/components/rentals-cta-button';
import Head from 'next/head';
import siteMetadata from '@/data/siteMetadata';

interface RentalsPageTemplateProps {
  pageTitle: string;
  pageImage: string;
  pageEquipments: Equipment[];
}

const RentalsPageTemplate = ({
  pageTitle,
  pageImage,
  pageEquipments,
}: RentalsPageTemplateProps) => {
  return (
    <>
      {/* Metadata Head section */}
      <Head>
        <meta property='og:title' content={pageTitle} />
        <meta
          property='og:description'
          content={`Explore our rental equipment collection for ${pageTitle}.`}
        />
        <meta property='og:image' content={pageImage} />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content={`${siteMetadata.siteUrl}/rentals/${pageTitle.toLowerCase().replace(/\s+/g, '-')}`}
        />

        {/* Twitter metadata */}
        <meta name='twitter:title' content={pageTitle} />
        <meta
          name='twitter:description'
          content={`Explore our rental equipment collection for ${pageTitle}.`}
        />
        <meta name='twitter:image' content={pageImage} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <section className='page-animation mx-auto mt-20 mb-12 max-w-7xl rounded-md px-6 py-8 text-white md:px-0'>
        <h1 className='mb-12 border-b-2 border-dashed py-4 text-4xl font-extrabold tracking-tighter md:text-6xl'>
          {pageTitle}
        </h1>

        <Image
          src={pageImage}
          alt={`${pageTitle} - Equipment Image`}
          width={200}
          height={200}
          priority
          className='my-8 aspect-video w-full rounded-md border border-white md:h-[60vh]'
        />

        {/* Equipment Card */}
        <CategoryCard Equipments={pageEquipments} />

        <RentalsCtaButton />
      </section>
    </>
  );
};

export default RentalsPageTemplate;
