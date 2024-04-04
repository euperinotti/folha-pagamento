/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    formats: ['image/webp']
  },
  poweredByHeader: false
}

module.exports = nextConfig
