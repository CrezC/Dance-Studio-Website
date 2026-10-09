import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Instructor photoUrl is a free-text field in the admin form, so we
    // don't know the domain ahead of time. Tighten this to specific hosts
    // once real photos have a known source (e.g. a CDN or upload bucket).
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

export default nextConfig;
