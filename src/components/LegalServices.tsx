'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { COUNTRY_IMAGES } from '@/utils/images'

export default function LegalServices() {
  const services = [
    {
      country: 'İngiltere',
      description: 'Hukuki danışmanlık ve dava hizmetleri',
      image: COUNTRY_IMAGES.uk,
    },
    {
      country: 'Yunanistan',
      description: 'Hukuki danışmanlık ve dava hizmetleri',
      image: COUNTRY_IMAGES.greece,
    },
    {
      country: 'Macaristan',
      description: 'Hukuki danışmanlık ve dava hizmetleri',
      image: COUNTRY_IMAGES.hungary,
    },
    // Ekstra hizmetler
    {
      country: 'Portekiz',
      description: 'Hukuki danışmanlık ve dava hizmetleri',
      image: COUNTRY_IMAGES.uk,
    },
    {
      country: 'İspanya',
      description: 'Hukuki danışmanlık ve dava hizmetleri',
      image: COUNTRY_IMAGES.greece,
    },
    {
      country: 'İrlanda',
      description: 'Hukuki danışmanlık ve dava hizmetleri',
      image: COUNTRY_IMAGES.hungary,
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sol taraf - Sabit başlık ve navigasyon */}
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold mb-4">
              Dava & Danışmanlık
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              Uluslararası Hukuki Danışmanlık Hizmetleri
            </p>
            <div className="flex gap-4">
              <button className="legal-prev bg-primary-dark hover:bg-primary-light text-white p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button className="legal-next bg-primary-dark hover:bg-primary-light text-white p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>

          {/* Sağ taraf - Slider */}
          <div className="md:w-2/3">
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: '.legal-prev',
                nextEl: '.legal-next',
              }}
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              className="legal-slider"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-lg overflow-hidden shadow-lg h-full"
                  >
                    <div className="relative h-48">
                      <Image
                        src={service.image}
                        alt={service.country}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-raleway font-semibold mb-2 text-gray-900">
                        {service.country}
                      </h3>
                      <p className="text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
