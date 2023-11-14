/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["img.clerk.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
