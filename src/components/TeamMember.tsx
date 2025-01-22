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
      <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{name}</h3>
      <p className="text-gray-500 mb-4 text-center">{title}</p>
      <p className="text-gray-600 text-center text-sm">{description}</p>
    </motion.div>
  )
}
