/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true
  },
  images: {
    domains: ['static.vocadb.net', 'i.ytimg.com', 'i1.ytimg.com']
  }
}

module.exports = nextConfig
