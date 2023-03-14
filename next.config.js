/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'cdn.dota2.com',
        port: '',
        pathname: '/apps/dota2/images/heroes/*',
      },
    ],
  },
}

module.exports = nextConfig
