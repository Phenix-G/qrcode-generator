/** @type {import('next').NextConfig} */
// next.config.js
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    distDir: 'out',
    assetPrefix: isProd ? '/qrcode-generator/' : '',
    output: 'export',
    images: {
        unoptimized: true,
    },

};

export default nextConfig;
