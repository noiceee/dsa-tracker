import type { Metadata } from "next";
import { Fira_Code, Hanken_Grotesk } from "next/font/google";

import { AppProviders } from "@/app/providers";

import "./globals.css";

const heading = Hanken_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const mono = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DSA Tracker | Next.js SSR",
  description:
    "LeetCode-linked DSA tracker with Next.js SSR, Redux state, and theme-aware UI.",
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
      className={`${heading.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
      </head>
      <body className="bg-background text-on-background font-body-md antialiased min-h-screen relative overflow-x-hidden" suppressHydrationWarning>
        <div className="bg-orb-1"></div>
        <div className="bg-orb-2"></div>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
