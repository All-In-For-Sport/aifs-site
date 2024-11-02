const { withContentlayer } = require("next-contentlayer2");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "cdn.sanity.io"],
  },
};

module.exports = withContentlayer(nextConfig);
