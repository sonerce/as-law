'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const publications = [
  {
    title: "Türkiye'de Yabancıların Çalışma İzni",
    date: "2024-01-15",
    link: "#"
  },
  {
    title: "Türk Vatandaşlığı Kanunu'nda Yapılan Son Değişiklikler",
    date: "2024-01-10",
    link: "#"
  },
  {
    title: "Yabancı Yatırımcılar İçin Türkiye'de Şirket Kurma Rehberi",
    date: "2024-01-05",
    link: "#"
  },
  {
    title: "İkamet İzni Başvuru Süreci ve Gerekli Belgeler",
    date: "2023-12-28",
    link: "#"
  },
  {
    title: "Türkiye'de Gayrimenkul Yatırımı ve Hukuki Süreç",
    date: "2023-12-20",
    link: "#"
  },
  {
    title: "E-ticaret Şirketleri İçin Hukuki Yükümlülükler",
    date: "2023-12-15",
    link: "#"
  },
  {
    title: "İş Hukukunda İşveren Yükümlülükleri",
    date: "2023-12-10",
    link: "#"
  },
  {
    title: "Yabancı Sermayeli Şirketlerde Vergi Düzenlemeleri",
    date: "2023-12-05",
    link: "#"
  },
  {
    title: "Uluslararası Ticaret Hukuku ve İhracat Mevzuatı",
    date: "2023-11-30",
    link: "#"
  },
  {
    title: "Start-up'lar İçin Hukuki Rehber",
    date: "2023-11-25",
    link: "#"
  }
]

export default function PublicationsPage() {
  return (
    <main className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-raleway font-bold mb-12 text-text-dark dark:text-text-light text-center">
            Yayınlar
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background-light dark:bg-background-secondary-dark rounded-lg shadow-md dark:shadow-primary-light/10 p-6 hover:shadow-lg transition-all"
              >
                <a 
                  href={pub.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                >
                  <div className="relative w-12 h-12 mb-4">
                    <Image
                      src="/images/pdf.png"
                      alt="PDF"
                      fill
                      className="object-contain group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="text-lg font-medium text-text-dark dark:text-text-light group-hover:text-primary transition-colors">
                      {pub.title}
                    </h2>
                    <p className="text-sm text-text-gray dark:text-text-light/70 mt-2">
                      {new Date(pub.date).toLocaleDateString('tr-TR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}
