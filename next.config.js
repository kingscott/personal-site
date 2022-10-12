/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['scottkingphotos.s3.ca-central-1.amazonaws.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
