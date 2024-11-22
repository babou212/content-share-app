import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  env: {
    NEXT_PUBLIC_APP_APPLICATION_INSIGHTS_CONNECTION_STRING: process.env.NEXT_PUBLIC_APP_APPLICATION_INSIGHTS_CONNECTION_STRING,
  },
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
