/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images-na.ssl-images-amazon.com']
  },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/home',
          permanent: true, // This makes it a 301 permanent redirect
        },
      ];
    },
  };
  
  export default nextConfig;
  