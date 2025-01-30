'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface TeamMemberProps {
  name: string
  title: string
  image: string
  description: string
}

export default function TeamMember({ name, title, image, description }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center group"
    >
      <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden shadow-lg dark:shadow-primary-light/10 transition-all duration-300 group-hover:scale-105">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-text-dark dark:text-text-light mb-2 text-center transition-colors duration-200">{name}</h3>
      <p className="text-text-gray dark:text-text-light/90 mb-4 text-center transition-colors duration-200">{title}</p>
      <p className="text-text-gray dark:text-text-light/80 text-center text-sm transition-colors duration-200">{description}</p>
    </motion.div>
  )
}
