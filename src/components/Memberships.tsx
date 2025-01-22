'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { MEMBERSHIP_IMAGES } from '@/utils/images'

export default function Memberships() {
  const memberships = MEMBERSHIP_IMAGES.map((image, index) => ({
    id: index + 1,
    image,
    alt: `Üyelik ${index + 1}`,
  }))

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-raleway font-bold text-center mb-12 text-gray-900">
          Üyelikler
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            slidesPerView={5}
            spaceBetween={30}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            className="membership-slider"
          >
            {memberships.map((member) => (
              <SwiperSlide key={member.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-24 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    className="object-contain p-4"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
