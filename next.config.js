const nextConfig = {
    output: 'standalone',
    images: { unoptimized: true },
    reactStrictMode: false,
    experimental: {
        forceSwcTransforms: true,
    },
    transpilePackages: ["@0xsquid/widget"],
};

module.exports = nextConfig;
