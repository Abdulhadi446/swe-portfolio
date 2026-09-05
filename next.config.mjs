/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: "/swe-portfolio",
  assetPrefix: "/swe-portfolio/",
};

export default nextConfig;
