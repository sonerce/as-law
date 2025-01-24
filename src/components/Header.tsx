'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)

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
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-gray-900">AS LAW</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 relative">
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
                    className="text-gray-600 hover:text-gray-900 transition-colors font-medium py-8"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-gray-600 hover:text-gray-900 transition-colors font-medium py-8 cursor-default">
                    {item.name}
                  </span>
                )}

                {/* Mega Menu */}
                {item.megaMenu && activeMegaMenu === item.megaMenu && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-full min-w-[800px] bg-[#002B5B] shadow-xl">
                    <div className="container mx-auto px-4 py-8">
                      <div className="grid grid-cols-3 gap-8">
                        {/* Image Section */}
                        <div className="col-span-1">
                          <div className="relative h-48 w-full overflow-hidden rounded-lg">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        
                        {/* Menu Items */}
                        <div className="col-span-2">
                          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                            {(item.megaMenu === 'citizenship' ? citizenshipMenuItems : legalMenuItems).map((subItem) => (
                              <div
                                key={subItem.name}
                                className="text-white hover:text-gray-300 transition-colors text-sm cursor-default"
                              >
                                {subItem.name}
                              </div>
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

          {/* Social Media Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-600 hover:text-gray-900"
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <div key={item.name}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span className="text-gray-600 cursor-default">
                      {item.name}
                    </span>
                  )}
                  {item.megaMenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {(item.megaMenu === 'citizenship' ? citizenshipMenuItems : legalMenuItems).map((subItem) => (
                        <div
                          key={subItem.name}
                          className="text-gray-600 text-sm cursor-default"
                        >
                          {subItem.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
