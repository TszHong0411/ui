import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  transpilePackages: ['@codewithhong/ui'],

  images: {
    domains: ['images.unsplash.com'],
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/docs',
        permanent: false,
      },
    ]
  },

  webpack: (config) => {
    config.infrastructureLogging = {
      level: 'error',
    }

    return config
  },
}

export default withContentlayer(nextConfig)
