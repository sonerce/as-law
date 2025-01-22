'use client'

import { motion } from 'framer-motion'
import TeamMember from '@/components/TeamMember'

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Av. Mehmet Yılmaz',
      title: 'Kurucu Ortak',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
      description: 'Uluslararası hukuk ve göçmenlik hukuku alanında 15 yıllık deneyime sahip. Harvard Hukuk mezunu.',
    },
    {
      name: 'Av. Ayşe Kaya',
      title: 'Kıdemli Ortak',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      description: 'Ticaret hukuku ve şirketler hukuku konusunda uzman. Oxford Üniversitesi Hukuk Fakültesi mezunu.',
    },
    {
      name: 'Av. Can Demir',
      title: 'Ortak',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop',
      description: 'Gayrimenkul hukuku ve yatırım danışmanlığı alanında uzmanlaşmış. İstanbul Üniversitesi Hukuk Fakültesi mezunu.',
    },
    {
      name: 'Av. Zeynep Ak',
      title: 'Kıdemli Avukat',
      image: 'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=400&h=400&fit=crop',
      description: 'Vatandaşlık hukuku ve oturum izni süreçlerinde 10 yıllık tecrübe. Ankara Üniversitesi Hukuk Fakültesi mezunu.',
    },
  ]

  return (
    <>
      {/* About Content */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-raleway font-bold mb-8 text-gray-900">
              Hakkımızda
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8">
              AS Law, Türkiye&apos;nin önde gelen hukuk firmalarından biri olarak, istisnai yasal hizmetler sunma konusundaki kararlı taahhüdüyle tanınmaktadır. Vizyonumuz, müvekkillerimize stratejik, ileriye dönük düşünen hukuki danışmanlık sağlayarak başarıyı teşvik etmek ve büyümeyi desteklemektir.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Dürüstlük, mükemmellik ve müvekkil odaklı hizmet temel değerlerimiz doğrultusunda, Bankacılık & Finans, Kurumsal ve M&A, Uyuşmazlık Çözümü, Enerji, Fikri Mülkiyet, Medya ve Projeler & Proje Finansmanı dahil olmak üzere çeşitli uygulama alanlarında hizmet veriyoruz.
            </p>
            <p className="text-gray-600 leading-relaxed">
              120&apos;den fazla yetenekli avukattan oluşan ekibimiz, hem yerel hem de uluslararası hukuk alanlarında derin bir anlayış ve eşsiz uzmanlık sunmaktadır. AS Law&apos;da, sadece hukuki danışman değil, aynı zamanda stratejik ortağınız olmayı hedefliyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-raleway font-bold mb-4 text-gray-900">
              Profesyonel Ekibimiz
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Deneyimli ve uzman kadromuzla, müvekkillerimize en iyi hukuki hizmeti sunmak için çalışıyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {teamMembers.map((member) => (
              <TeamMember
                key={member.name}
                name={member.name}
                title={member.title}
                image={member.image}
                description={member.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
