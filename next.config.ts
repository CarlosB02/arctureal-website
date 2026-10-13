import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      {
        source: "/quem-somos",
        destination: "/grupo",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
