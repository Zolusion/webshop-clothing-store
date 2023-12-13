/** @type {import('next').NextConfig} */
const TerserPlugin = require('terser-webpack-plugin');
const nextConfig = {}

module.exports = {
    images: {
        domains: [
            'images.unsplash.com',
            'plus.unsplash.com',
        ],
    },
    webpack: (config, { dev, isServer }) => {
        if (!dev && !isServer) {
          config.optimization.minimizer.push(new TerserPlugin());
        }
    
        return config;
      },
}
