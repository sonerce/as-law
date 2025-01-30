'use client'

import { motion } from 'framer-motion'

export default function AboutContent() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 bg-background-light/95 dark:bg-background-dark/95">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-raleway font-bold mb-6 text-text-dark dark:text-text-light">
          AS Law
        </h2>
        <p className="text-text-gray dark:text-text-light/90 leading-relaxed mb-6">
          AS Law, Türkiye&apos;nin önde gelen hukuk firmalarından biri olarak, istisnai yasal hizmetler sunma konusundaki kararlı taahhüdüyle tanınmaktadır. Vizyonumuz, müvekkillerimize stratejik, ileriye dönük düşünen hukuki danışmanlık sağlayarak başarıyı teşvik etmek ve büyümeyi desteklemektir.
        </p>
        <p className="text-text-gray dark:text-text-light/90 leading-relaxed mb-6">
          Dürüstlük, mükemmellik ve müvekkil odaklı hizmet temel değerlerimiz doğrultusunda, Bankacılık & Finans, Kurumsal ve M&A, Uyuşmazlık Çözümü, Enerji, Fikri Mülkiyet, Medya ve Projeler & Proje Finansmanı dahil olmak üzere çeşitli uygulama alanlarında hizmet veriyoruz.
        </p>
        <p className="text-text-gray dark:text-text-light/90 leading-relaxed">
          120&apos;den fazla yetenekli avukattan oluşan ekibimiz, hem yerel hem de uluslararası hukuk alanlarında derin bir anlayış ve eşsiz uzmanlık sunmaktadır. AS Law&apos;da, sadece hukuki danışman değil, aynı zamanda stratejik ortağınız olmayı hedefliyoruz.
        </p>
      </motion.div>
    </div>
  )
}
