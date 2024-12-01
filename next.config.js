import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  env: {
    NEXT_PUBLIC_APPLICATION_INSIGHTS_CONNECTION_STRING: process.env.NEXT_PUBLIC_APPLICATION_INSIGHTS_CONNECTION_STRING,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2000mb',
      allowedOrigins: ["localhost:3000", "localhost:8080", "contentshareappstore.blob.core.windows.net", "www.contentshareappstore.blob.core.windows.net"],
    }},
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "contentshareappstore.blob.core.windows.net",
        port: '',
        pathname: '/images/**',
      },
    ],
   },};

export default config;
