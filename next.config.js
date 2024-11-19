import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  experimental: {
    serverActions: {
      bodySizeLimit: '50mb',
      allowedOrigins: ["localhost:3000", "proud-pebble-0aabd6c03.5.azurestaticapps.net", "www.proud-pebble-0aabd6c03.5.azurestaticapps.net"],
    }},
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "contentshareblog.blob.core.windows.net",
        port: '',
        pathname: '/images/**',
      },
    ],
   },};

export default config;
