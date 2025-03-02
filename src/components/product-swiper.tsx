'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/legacy/image';

import { ProductImages } from '@/data/product-images';

export default function InfiniteSwiper() {
  return (
    <Swiper
      slidesPerView={1}
      loop={true} // Infinite scrolling
      autoplay={{
        delay: 2000, // Time between auto-swipes (2s)
        disableOnInteraction: false, // Allows user interaction without stopping autoplay
      }}
      navigation
      pagination={{ clickable: true }} // Enables pagination dots
      modules={[Autoplay, Pagination, Navigation]} // Use necessary modules
      className='mt-8 h-fit w-full max-w-6xl rounded-md shadow'
    >
      {ProductImages.map((src, index) => (
        <SwiperSlide key={index}>
          <Image
            src={src.image}
            alt={`Slide ${index}`}
            width={818}
            height={600}
            className='h-[300px] w-full rounded-md object-cover md:h-[600px]'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
