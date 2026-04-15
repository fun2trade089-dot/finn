import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/providers/AuthProvider";
import { PostHogProvider } from "@/components/providers/PostHogProvider";
import CookieBanner from "@/components/ui/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finnbase | AI-Powered Financial Planning (Asia)",
  description: "Secure your financial future with AI-driven insights and 3D visualizations. Optimized for the Asia region with local data hosting.",
  manifest: "/manifest.json",
  keywords: ["Finance", "Asia", "Investment", "Wealth", "AI", "Mumbai"],
  metadataBase: new URL('https://finnbase.com'),
  openGraph: {
    title: 'Finnbase | AI-Powered Financial Planning',
    description: 'Secure your financial future with AI-driven insights and 3D visualizations.',
    url: 'https://finnbase.com',
    siteName: 'Finnbase',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finnbase | AI-Powered Financial Planning',
    description: 'Secure your financial future with AI-driven insights and 3D visualizations.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'Finnbase',
    url: 'https://finnbase.com',
    description: 'AI-Powered Financial Planning & Tracking.',
  }

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#030712] text-white font-sans">
        <PostHogProvider>
          <AuthProvider>
            <script
              type="application/ld+json"
              dangerouslySetInnerHtml={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
            <CookieBanner />
          </AuthProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
