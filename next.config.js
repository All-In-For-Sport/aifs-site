const { withContentlayer } = require("next-contentlayer2");
const withExportImages = require("next-export-optimize-images");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,

  trailingSlash: true,
};

module.exports = withExportImages(withContentlayer(nextConfig));
