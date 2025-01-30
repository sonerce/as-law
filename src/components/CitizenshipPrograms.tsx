'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { COUNTRY_IMAGES } from '@/utils/images'

export default function CitizenshipPrograms() {
  const programs = [
    {
      country: 'İngiltere',
      description: 'İngiltere vatandaşlık ve yatırım programları',
      image: COUNTRY_IMAGES.uk,
    },
    {
      country: 'Yunanistan',
      description: 'Yunanistan vatandaşlık ve yatırım fırsatları',
      image: COUNTRY_IMAGES.greece,
    },
    {
      country: 'Macaristan',
      description: 'Macaristan vatandaşlık programları',
      image: COUNTRY_IMAGES.hungary,
    },
    {
      country: 'Portekiz',
      description: 'Portekiz Altın Vize Programı',
      image: COUNTRY_IMAGES.uk,
    },
    {
      country: 'İspanya',
      description: 'İspanya Altın Vize Programı',
      image: COUNTRY_IMAGES.greece,
    },
    {
      country: 'İrlanda',
      description: 'İrlanda Yatırımcı Programı',
      image: COUNTRY_IMAGES.hungary,
    },
  ]

  return (
    <section className="py-20 bg-background-light dark:bg-background-dark transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sol taraf - Sabit başlık ve navigasyon */}
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="sticky top-24"
            >
              <h2 className="text-3xl md:text-4xl font-raleway font-bold mb-6 text-text-dark dark:text-text-light">
                Vatandaşlık Programları
              </h2>
              <p className="text-text-gray dark:text-text-light/80 mb-8">
                Dünya genelinde çeşitli vatandaşlık ve yatırım programları hakkında uzman danışmanlık hizmeti sunuyoruz.
              </p>
              <div className="flex space-x-4">
                <button className="swiper-button-prev-custom p-2 rounded-full bg-background-secondary-light dark:bg-background-secondary-dark hover:bg-accent-gold/10 dark:hover:bg-accent-gold/20 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-text-dark dark:text-text-light">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button className="swiper-button-next-custom p-2 rounded-full bg-background-secondary-light dark:bg-background-secondary-dark hover:bg-accent-gold/10 dark:hover:bg-accent-gold/20 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-text-dark dark:text-text-light">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Sağ taraf - Program kartları */}
          <div className="md:w-2/3">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
              }}
            >
              {programs.map((program, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="bg-background-secondary-light dark:bg-background-secondary-dark rounded-lg overflow-hidden shadow-lg dark:shadow-primary-light/10 transition-colors duration-200">
                      <div className="relative h-48">
                        <Image
                          src={program.image}
                          alt={program.country}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-text-dark dark:text-text-light">
                          {program.country}
                        </h3>
                        <p className="text-text-gray dark:text-text-light/80">
                          {program.description}
                        </p>
                      </div>
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
