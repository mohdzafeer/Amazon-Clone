/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir:"build",
  reactStrictMode: true,
  output:"export ",
  images: {
    domains: ['i.ibb.co'],
  },
};

export default nextConfig;
