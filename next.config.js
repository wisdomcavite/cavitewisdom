/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/cavitewisdom' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/cavitewisdom' : ''
}

module.exports = nextConfig