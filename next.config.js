import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  env: {
    NEXT_PUBLIC_APP_APPLICATION_INSIGHTS_CONNECTION_STRING: process.env.NEXT_PUBLIC_APP_APPLICATION_INSIGHTS_CONNECTION_STRING,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2000mb',
      allowedOrigins: ["localhost:3000", "localhost:8080", "content-blog-share-b2h5fkf6btd0gxgb.ukwest-01.azurewebsites.net", "www.content-blog-share-b2h5fkf6btd0gxgb.ukwest-01.azurewebsites.net"],
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
