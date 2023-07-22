/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/koujishin',
  basePath: '/koujishin',
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
