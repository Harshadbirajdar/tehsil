/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API: "http://localhost:4000/api",
  },
};

module.exports = nextConfig;
