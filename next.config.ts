/* eslint-disable @typescript-eslint/no-require-imports */
import type { NextConfig } from "next";

const withPWA = require("next-pwa")({ dest: "public", disable: process.env.NODE_ENV === "development" });

const nextConfig: NextConfig = withPWA({
  /* config options here */
});
export default nextConfig;
// ```[_{{{CITATION{{{_2{Integrating PWA in a Next.js App - DEV Community](https://dev.to/wafa_bergaoui/integrating-pwa-in-a-nextjs-app-3a1)
