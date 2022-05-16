/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true
  },
  images: {
    domains: ['static.vocadb.net']
  }
}

module.exports = nextConfig
