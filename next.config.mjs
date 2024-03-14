/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // valores padrão: [640, 750, 828, 1080, 1200, 1920, 2048, 3840] > não é preciso add
    deviceSizes: [600, 800, 1200, 2400, 3600],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.origamid.online",
        port: "",
        pathname: "/imagens/**",
      },
    ],
  },
};

export default nextConfig;
