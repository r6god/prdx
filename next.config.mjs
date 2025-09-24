/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
  images: { unoptimized: true } // so it works out of the box on Vercel/static too
};
export default nextConfig;
