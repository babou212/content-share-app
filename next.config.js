import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  output: "standalone",
  experimental: {
    serverActions: {
      bodySizeLimit: '2000mb',
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
