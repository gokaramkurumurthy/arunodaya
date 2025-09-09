/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // skip lint errors during build
  },
  typescript: {
    ignoreBuildErrors: true, // skip type errors during build
  },
  images: {
    unoptimized: true, // serve images as-is
  },
  // No output/export — Vercel will handle server build
}

export default nextConfig;
