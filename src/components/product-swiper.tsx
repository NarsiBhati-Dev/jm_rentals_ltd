'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

import { ProductImages } from '@/data/product-images';

export default function InfiniteSwiper() {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination, Navigation]}
      className='mx-auto mt-8 h-fit w-full max-w-7xl rounded-md px-4 shadow sm:px-0'
    >
      {ProductImages.map((src, index) => (
        <SwiperSlide key={index}>
          <Image
            src={src.image}
            alt={`Slide ${index}`}
            width={1920}
            height={1080}
            priority
            className='h-[370px] w-full rounded-md object-center md:h-[700px] md:object-cover'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
