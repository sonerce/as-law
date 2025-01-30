'use client'

import { motion } from 'framer-motion'

export default function Welcome() {
  return (
    <section className="py-20 bg-background-light dark:bg-background-dark transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Sol taraf - Video */}
          <div className="md:w-1/2">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg dark:shadow-primary-light/10">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full"
              >
                <source src="/videos/istanbul.mp4" type="video/mp4" />
                Tarayıcınız video özelliğini desteklemiyor.
              </video>
            </div>
          </div>

          {/* Sağ taraf - Karşılama Metni */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-raleway font-bold mb-6 text-text-dark dark:text-text-light transition-colors duration-200">
              AS Law&apos;a Hoş Geldiniz
            </h2>
            <div className="space-y-4 text-text-gray dark:text-text-light/80 transition-colors duration-200">
              <p>
                AS Law, Türkiye&apos;nin önde gelen hukuk firmalarından biri olarak, istisnai yasal hizmetler sunma konusundaki kararlı taahhüdüyle tanınmaktadır. Vizyonumuz, müvekkillerimize stratejik, ileriye dönük düşünen hukuki danışmanlık sağlayarak başarıyı teşvik etmek ve büyümeyi desteklemektir.
              </p>
              <p>
                Dürüstlük, mükemmellik ve müvekkil odaklı hizmet temel değerlerimiz doğrultusunda, Bankacılık & Finans, Kurumsal ve M&A, Uyuşmazlık Çözümü, Enerji, Fikri Mülkiyet, Medya ve Projeler & Proje Finansmanı dahil olmak üzere çeşitli uygulama alanlarında hizmet veriyoruz.
              </p>
              <p>
                AS Law&apos;da, sadece hukuki danışman değil, aynı zamanda stratejik ortağınız olmayı hedefliyoruz. 120&apos;den fazla yetenekli avukattan oluşan ekibimiz, eşsiz uzmanlık ve hem yerel hem de uluslararası hukuk alanlarında derin bir anlayış sunmaktadır.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
