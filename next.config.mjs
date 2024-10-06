/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'api.microlink.io',
        },
        {
          protocol: 'https',
          hostname: 'assets.aceternity.com',
        },
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
        },
        {
          protocol: 'https',
          hostname: 'media.istockphoto.com',
        },
      ],
    },
  };

export default nextConfig;
