/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',

  // Fix paths for GitHub Pages
  basePath: '/arunodaya',   // your repo name
  assetPrefix: '/arunodaya/', // fixes CSS/JS path issues
}

export default nextConfig
