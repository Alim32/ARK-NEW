/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: { unoptimized: true },
  reactStrictMode: false,
  experimental: {
      forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
