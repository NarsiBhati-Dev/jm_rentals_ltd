'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductImages } from '@/data/product-images';

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play effect
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    emblaApi.on('pointerDown', () => clearInterval(interval)); // Pause on interaction
    emblaApi.on('select', () => setCurrentIndex(emblaApi.selectedScrollSnap()));

    return () => clearInterval(interval);
  }, [emblaApi]);

  // Manual Navigation
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className='relative mx-auto mt-8 max-w-7xl'>
      {/* Carousel */}
      <div ref={emblaRef} className='overflow-hidden'>
        <div className='flex'>
          {ProductImages.map((item, index) => (
            <div key={index} className='min-w-full'>
              <div className='relative h-[370px] w-full md:h-[700px]'>
                <Image
                  src={item.image}
                  alt={`Slide ${index + 1}`}
                  width={1920}
                  height={1080}
                  className='h-[370px] w-full rounded-md object-center md:h-[700px] md:object-cover'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className='absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black md:p-3'
        aria-label='left swipe'
        onClick={scrollPrev}
      >
        <ChevronLeft size={30} />
      </button>
      <button
        className='absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black md:p-3'
        aria-label='Right swipe'
        onClick={scrollNext}
      >
        <ChevronRight size={30} />
      </button>

      {/* Pagination Dots */}
      <div className='mt-4 flex justify-center gap-2'>
        {ProductImages.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
