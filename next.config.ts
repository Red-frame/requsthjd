import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // App Router default (tidak perlu experimental lagi)
  poweredByHeader: false,

  // Supaya wagmi / viem / wallet tidak error di build
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false
    };
    return config;
  },

  // Mobile-first + image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  },

  // Untuk DEX & API (kadang fetch on-chain agak lama)
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb"
    }
  },

  // Lebih aman untuk API / blockchain call
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

export default nextConfig;
