import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow local network IP for mobile testing
  devIndicators: false,
  experimental: {
    allowedDevOrigins: ['192.168.1.34', 'localhost', '0.0.0.0'],
  } as any // Use any because allowedDevOrigins might not be fully typed in Next.js 16 yet or exists outside experimental
};

// Next.js 16 puts allowedDevOrigins at the top level
nextConfig.allowedDevOrigins = ['192.168.1.34', 'localhost', '0.0.0.0'] as any;

export default nextConfig;
