'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'
import { SLIDER_IMAGES } from '@/utils/images'

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      title: 'Profesyonel Hukuk Danışmanlığı',
      description: 'Uzman kadromuzla yanınızdayız',
      image: SLIDER_IMAGES[0],
    },
    {
      id: 2,
      title: 'Uluslararası Vatandaşlık Programları',
      description: 'Yeni fırsatlar için doğru adres',
      image: SLIDER_IMAGES[1],
    },
    {
      id: 3,
      title: 'Güvenilir Hukuki Çözümler',
      description: 'Deneyimli ekibimizle hizmetinizdeyiz',
      image: SLIDER_IMAGES[2],
    },
  ]

  return (
    <div className="relative h-[600px] w-full bg-background-light dark:bg-background-dark">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <div className="absolute inset-0 bg-black/50 z-10" />
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="text-center space-y-4 px-4">
                  <h2 className="text-4xl md:text-5xl font-bold text-text-light">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-text-light/90">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
