/** @type {import('next').NextConfig} */
import withPWAConfig from "next-pwa";

const withPWA = withPWAConfig({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

async function rewrites() {
  return [
    {
      source: "/doctor/:slug*",
      destination: "/pages/doctor/:slug*",
    },
    {
      source: "/patient/:slug*",
      destination: "/pages/patient/:slug*",
    },
    {
      source: "/main/:slug*",
      destination: "/pages/main/:slug*",
    },
    {
      source: "/upload/:slug*",
      destination: "/pages/upload/:slug*",
    },
    {
      source: "/scan/:slug*",
      destination: "/pages/scan/:slug*",
    },
    {
      source: "/home/:slug*",
      destination: "/pages/home/:slug*",
    },
  ];
}

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["cdn-icons-png.flaticon.com"],
    domains: ['flaticon.com']
  },
 
  rewrites,
};

export default withPWA(nextConfig);
