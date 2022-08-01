/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true
  },
  images: {
    domains: ['static.vocadb.net', 'i.ytimg.com', 'i1.ytimg.com']
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
    buildExcludes: [/middleware-build-manifest\.json$/]
  }
}

module.exports = withPWA(nextConfig)
