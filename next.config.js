const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  webpack: (config) => {
    // fix wagmi fallback
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false
    };

    // add alias @
    config.resolve.alias['@'] = path.resolve(__dirname);

    return config;
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  },

  experimental: {
    serverActions: {
      bodySizeLimit: "2mb"
    }
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
