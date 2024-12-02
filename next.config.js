const { withContentlayer } = require("next-contentlayer2");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "cdn.sanity.io" },
      { hostname: "arweave.net" },
    ],
  },
};

module.exports = withContentlayer(nextConfig);
