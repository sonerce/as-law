'use client'

import { motion } from 'framer-motion'
import TeamMember from '@/components/TeamMember'
import AboutContent from '@/components/AboutContent'

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
      <section className="relative h-screen bg-[url('/images/law-office.jpg')] bg-cover bg-center">
        <AboutContent />
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background-secondary-light dark:bg-background-secondary-dark transition-colors duration-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-raleway font-bold mb-4 text-text-dark dark:text-text-light">
              Profesyonel Ekibimiz
            </h2>
            <p className="text-text-gray dark:text-text-light/80 max-w-2xl mx-auto">
              Deneyimli ve uzman kadromuzla, müvekkillerimize en iyi hukuki hizmeti sunmak için çalışıyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
