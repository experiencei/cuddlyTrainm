/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://ctlctfpgzjczkgvarkgj.supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ctlctfpgzjczkgvarkgj.supabase.co",
      },
    ],
  },
};

export default nextConfig;
