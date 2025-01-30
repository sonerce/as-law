'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from '@/context/ThemeContext'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const { isDarkMode, toggleDarkMode } = useTheme()

  const citizenshipMenuItems = [
    { name: 'Türk Vatandaşlığı', href: '/vatandaslik/turk-vatandasligi' },
    { name: 'İkamet İzni', href: '/vatandaslik/ikamet-izni' },
    { name: 'Çalışma İzni', href: '/vatandaslik/calisma-izni' },
    { name: 'Mavi Kart', href: '/vatandaslik/mavi-kart' }
  ]

  const legalMenuItems = [
    { name: 'Gayrimenkul Hukuku', href: '/hukuk/gayrimenkul' },
    { name: 'Şirketler Hukuku', href: '/hukuk/sirketler' },
    { name: 'Ticaret Hukuku', href: '/hukuk/ticaret' },
    { name: 'İş Hukuku', href: '/hukuk/is-hukuku' }
  ]

  const menuItems = [
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { 
      name: 'Vatandaşlık ve Oturum İzni', 
      megaMenu: 'citizenship',
      image: '/images/vatandaslik.jpg'
    },
    { 
      name: 'Hukuk', 
      megaMenu: 'legal',
      image: '/images/hukuk.png'
    },
    { name: 'Yayınlar', href: '/yayinlar' },
    { name: 'İletişim', href: '/iletisim' },
  ]

  const handleMouseEnter = (menuType: string) => {
    setActiveMegaMenu(menuType)
  }

  const handleMouseLeave = () => {
    setActiveMegaMenu(null)
  }

  return (
    <header className={`
      fixed w-full z-50 
      bg-background-light dark:bg-background-dark 
      border-b border-gray-200 dark:border-text-light/10
      shadow-md dark:shadow-primary-light/10 transition-colors duration-200
    `}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary-dark dark:text-text-light">AS LAW</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.megaMenu && handleMouseEnter(item.megaMenu)}
                onMouseLeave={handleMouseLeave}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-text-dark dark:text-text-light hover:text-accent-gold transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button className="text-text-dark dark:text-text-light hover:text-accent-gold transition-colors duration-200">
                    {item.name}
                  </button>
                )}

                {/* Mega Menu */}
                {item.megaMenu && activeMegaMenu === item.megaMenu && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-full min-w-[800px] bg-background-secondary-light dark:bg-background-secondary-dark shadow-xl">
                    <div className="container mx-auto px-4 py-8">
                      <div className="grid grid-cols-3 gap-8">
                        {/* Image Section */}
                        <div className="col-span-1">
                          {item.image && (
                            <Image src={item.image} alt={item.name} width={300} height={200} className="rounded-lg" />
                          )}
                        </div>
                        {/* Menu Items */}
                        <div className="col-span-2">
                          <div className="grid grid-cols-2 gap-4">
                            {(item.megaMenu === 'citizenship' ? citizenshipMenuItems : legalMenuItems).map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="text-text-dark dark:text-text-light hover:text-accent-gold transition-colors duration-200 text-sm"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-background-secondary-light dark:hover:bg-background-secondary-dark transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <SunIcon className="h-6 w-6 text-text-light hover:text-accent-gold" />
              ) : (
                <MoonIcon className="h-6 w-6 text-text-dark hover:text-accent-gold" />
              )}
            </button>

            {/* Social Media Icons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-dark dark:text-text-light hover:text-accent-gold transition-colors duration-200"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-text-dark dark:text-text-light hover:text-accent-gold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4">
            <nav className="space-y-4">
              {menuItems.map((item) => (
                <div key={item.name}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block text-text-dark dark:text-text-light hover:text-accent-gold transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        item.megaMenu && handleMouseEnter(item.megaMenu)
                        setIsOpen(false)
                      }}
                      className="block w-full text-left text-text-dark dark:text-text-light hover:text-accent-gold transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
