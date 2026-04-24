import type { NextConfig } from "next";
import { env } from "process";

const nextConfig: NextConfig = {
  basePath: env["BASE_URL"] ?? "",
  output: "export",
};

export default nextConfig;
