/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['images.unsplash.com', 'placehold.co'],
    unoptimized: true,
  },
}

module.exports = nextConfig
