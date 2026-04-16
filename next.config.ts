import type { NextConfig } from "next"
import { withSentryConfig } from "@sentry/nextjs"

const nextConfig: NextConfig = {
  allowedDevOrigins: ["172.16.97.230", "192.168.31.81"],
}

export default withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  sentryUrl: "https://sentry.io/",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  tunnelRoute: "/monitoring",
  hideSourceMaps: true,
  
  // Sentry SDK 10+ requires these to be inside the webpack object
  webpack: (config) => {
    config.automaticVercelMonitors = true;
    config.reactComponentAnnotation = { enabled: true };
    config.treeshake = {
      removeDebugLogging: true,
    };
    return config;
  },
})
