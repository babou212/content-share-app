import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
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
