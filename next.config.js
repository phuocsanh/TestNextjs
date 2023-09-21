/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["localhost", "istockphoto.com", "www.istockphoto.com" ],
  },
};

module.exports = nextConfig;
