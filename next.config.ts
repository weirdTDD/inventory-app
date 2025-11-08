import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'www.enterprisedb.com', 'unsplash.com']
  }
}

export default nextConfig;
