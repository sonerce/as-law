'use client'

import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'
import { useState } from 'react'

const offices = [
  {
    city: 'İstanbul',
    address: 'Flora Residence, Küçükbakkalköy Mah. Vedat Günyol Cad. Defne Sok. No: 1 K: 13 D: 1305 Ataşehir - İstanbul',
    phone: '+90 (212) 555 0000',
    email: 'istanbul@aslaw.com.tr',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6555127743256!2d29.115899776537752!3d40.98931897134391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac7c7c7c7c7c7%3A0x7c7c7c7c7c7c7c7c!2sFlora%20Residence!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str'
  },
  {
    city: 'Londra',
    address: '6 Falkirk Court, 141 Asfield Road, London N147PF',
    phone: '+44 20 8123 4567',
    email: 'london@aslaw.com.tr',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.432046577295!2d-0.1277265!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b6b8b4b8b8b%3A0x8b8b8b8b8b8b8b8b!2s6%20Falkirk%20Court%2C%20London%20N14%207PF!5e0!3m2!1sen!2suk!4v1620000000000!5m2!1sen!2suk'
  },
  {
    city: 'Lizbon',
    address: 'Avenida 5 de Outubro 102 R/C, 1050-051 Lisboa',
    phone: '+351 21 123 4567',
    email: 'lisbon@aslaw.com.tr',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.2758940766733!2d-9.1513834!3d38.7436266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDQ0JzM3LjEiTiA5wrAwOScwNS4wIlc!5e0!3m2!1spt-PT!2spt!4v1620000000000!5m2!1spt-PT!2spt'
  }
]

function OfficeCard({ office, index }: { office: typeof offices[0], index: number }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }}
    >
      <div 
        className="relative h-[300px] w-full perspective-1000"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <motion.div
          className="w-full h-full"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front */}
          <div className={`absolute w-full h-full bg-white rounded-xl shadow-lg p-6 backface-hidden
            ${isFlipped ? 'opacity-0' : 'opacity-100'}`}>
            <h3 className="text-2xl font-semibold text-primary mb-4">{office.city}</h3>
            <div className="space-y-3">
              <p className="text-gray-600">{office.address}</p>
              <p className="text-gray-600">
                <a href={`tel:${office.phone}`} className="hover:text-primary transition-colors">
                  {office.phone}
                </a>
              </p>
              <p className="text-gray-600">
                <a href={`mailto:${office.email}`} className="hover:text-primary transition-colors">
                  {office.email}
                </a>
              </p>
            </div>
          </div>

          {/* Back */}
          <div className={`absolute w-full h-full bg-white rounded-xl shadow-lg overflow-hidden backface-hidden
            ${isFlipped ? 'opacity-100' : 'opacity-0'}`}
            style={{ transform: 'rotateY(180deg)' }}>
            <iframe
              src={office.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function ContactPage() {
  return (
    <main className="pt-32 pb-16">
      {/* Ofis Bilgileri */}
      <section className="mb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-raleway font-bold text-gray-900 mb-4">
              Global Ofislerimiz
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dünyanın farklı noktalarındaki ofislerimizle müvekkillerimize uluslararası hukuk hizmeti sunuyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <OfficeCard key={office.city} office={office} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* İletişim Formu */}
      <section>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:pr-12"
            >
              <h2 className="text-3xl md:text-4xl font-raleway font-bold text-gray-900 mb-4">
                Bizimle İletişime Geçin
              </h2>
              <p className="text-gray-600 mb-6">
                Hukuki danışmanlık hizmetlerimiz hakkında detaylı bilgi almak, randevu oluşturmak veya sorularınız için bize ulaşın. En kısa sürede size dönüş yapacağız.
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Çalışma Saatlerimiz
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                  <p>Cumartesi: 10:00 - 14:00</p>
                  <p>Pazar: Kapalı</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
