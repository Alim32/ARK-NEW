/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  reactStrictMode: false,
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
