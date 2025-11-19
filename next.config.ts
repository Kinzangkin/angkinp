import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Izinkan semua file gambar dari root /public tanpa batasan
    localPatterns: [
      {
        pathname: "/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
