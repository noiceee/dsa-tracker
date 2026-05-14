import type { Metadata } from "next";

import { AppProviders } from "@/app/providers";
import { Toaster } from "sonner";

import "./globals.css";

export const metadata: Metadata = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f9ff" },
    { media: "(prefers-color-scheme: dark)", color: "#111318" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  title: {
    default: "DSA Tracker — Problem Tracker & Analytics",
    template: "%s | DSA Tracker",
  },
  description:
    "Master data structures and algorithms with DSA Tracker. Track solved problems, monitor streaks, and follow structured learning roadmaps. Syncs across devices via Google sign-in.",
  keywords: [
    "DSA tracker",
    "LeetCode tracker",
    "algorithm practice",
    "data structures",
    "competitive programming",
    "coding interview prep",
  ],
  authors: [{ name: "DSA Tracker" }],
  robots: { index: true, follow: true },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "DSA Tracker — Problem Tracker & Analytics",
    description:
      "Track solved problems, monitor streaks, and follow structured learning roadmaps for DSA mastery.",
    type: "website",
    locale: "en_US",
    siteName: "DSA Tracker",
  },
  twitter: {
    card: "summary_large_image",
    title: "DSA Tracker — Problem Tracker & Analytics",
    description:
      "Track solved problems, monitor streaks, and follow structured learning roadmaps for DSA mastery.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700&family=Inter:wght@400;600&family=JetBrains+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-background text-on-background font-body-md antialiased min-h-screen relative overflow-x-hidden"
        suppressHydrationWarning
      >
        <AppProviders>
          {children}
          <Toaster position="bottom-right" richColors theme="system" />
        </AppProviders>
      </body>
    </html>
  );
}
