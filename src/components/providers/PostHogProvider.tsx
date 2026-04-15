'use client'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect } from 'react'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
      const host = process.env.NEXT_PUBLIC_POSTHOG_HOST
      
      if (key && host) {
        posthog.init(key, {
          api_host: host,
          capture_pageview: false, // Disable automatic pageview capture, as we capture manually
          capture_pageleave: true, // Enable pageleave capture
        })
      } else {
        console.warn('PostHog environment variables are missing. Analytics will not be tracked.')
      }
    }
  }, [])

  return <PHProvider client={posthog}>{children}</PHProvider>
}
