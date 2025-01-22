const { withContentlayer } = require("next-contentlayer2");
const withExportImages = require("next-export-optimize-images");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "cdn.sanity.io" },
      { hostname: "arweave.net" },
    ],
  },
  trailingSlash: true,
};

module.exports = withExportImages(withContentlayer(nextConfig));
