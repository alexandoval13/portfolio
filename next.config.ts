import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* these config options export app as a static site and ensure asset paths work correctly on GitHub Pages */
  output: 'export',
  basePath: '',
  assetPrefix: '',
};

export default nextConfig;
