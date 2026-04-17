import type { NextConfig } from "next"
import { withSentryConfig } from "@sentry/nextjs"

const nextConfig: NextConfig = {
  allowedDevOrigins: ["172.16.97.230", "192.168.31.81"],
  // This ensures Next.js doesn't look for a nested src folder
  typescript: {
    ignoreBuildErrors: false,
  },
}

export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  sentryUrl: "https://sentry.io/",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  tunnelRoute: "/monitoring",
  hideSourceMaps: true,

  // Sentry SDK 10+ MUST use this object structure to stop warnings
  webpack: {
    automaticVercelMonitors: true,
    reactComponentAnnotation: { enabled: true },
    treeshake: {
      removeDebugLogging: true,
    },
  },
})
