/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co","github.com"],
  },
};

module.exports = nextConfig;

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'assets.example.com',
//         port: '',
//         pathname: '/account123/**',
//       },
//     ],
//   },
// }