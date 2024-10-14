// next.config.mjs
const nextConfig = {
    reactStrictMode: true, // or any other configurations you need
    images:{
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**'
        }
      ]
    }
  }
  
  export default nextConfig;
  