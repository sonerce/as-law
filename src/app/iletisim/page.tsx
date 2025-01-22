'use client'

import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'

const offices = [
  {
    city: 'İstanbul',
    address: 'Levent Mah. Büyükdere Cad. No:201 Kat:12, 34394 Şişli/İstanbul',
    phone: '+90 (212) 555 0000',
    email: 'istanbul@aslaw.com.tr',
    coordinates: {
      lat: 41.0825918,
      lng: 29.0178392
    }
  },
  {
    city: 'Lizbon',
    address: 'Av. da Liberdade 110, 1269-046 Lisboa, Portugal',
    phone: '+351 21 123 4567',
    email: 'lisbon@aslaw.com.tr',
  },
  {
    city: 'London',
    address: '100 Liverpool Street, London EC2M 2RH, United Kingdom',
    phone: '+44 20 8123 4567',
    email: 'london@aslaw.com.tr',
  }
]

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
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-primary text-2xl font-bold mb-4">{office.city}</div>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Adres</div>
                    <div className="text-gray-700">{office.address}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Telefon</div>
                    <a href={`tel:${office.phone}`} className="text-gray-700 hover:text-primary transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">E-posta</div>
                    <a href={`mailto:${office.email}`} className="text-gray-700 hover:text-primary transition-colors">
                      {office.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Harita */}
      <section className="mb-20">
        <div className="container mx-auto px-4">
          <div className="h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.0071816649713!2d29.015650615415726!3d41.08259177929264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab63f6f4a2867%3A0x2b7c91e2e3b98c03!2sLevent%2C%20B%C3%BCy%C3%BCkdere%20Cd.%20No%3A201%2C%2034394%20%C5%9Ei%C5%9Fli%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1629789456789!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
