import type { NextConfig } from 'next';

module.exports = {
  webpack: (config: NextConfig) => {
    config.resolve.alias.canvas = false;

    return config;
  },
};
const nextConfig: NextConfig = {
  /* these config options export app as a static site and ensure asset paths work correctly on GitHub Pages */
  output: 'export',
  basePath: '',
  assetPrefix: '',
  // webpack: (config) => {
  //   config.resolve.alias.canvas = false;
  //   return config;
  // },
};

export default nextConfig;
