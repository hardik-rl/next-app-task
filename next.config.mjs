// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'http',
//         hostname: '192.168.29.66',
//         port: '3000',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'i.pravatar.cc',
//       },
//     ],
//     domains: ['picsum.photos', 'i.pravatar.cc'],
//   },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.29.66",
        port: "3000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**", // allow all paths
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
