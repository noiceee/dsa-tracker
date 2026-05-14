"use client";

import { ThemeProvider } from "next-themes";

import { StoreProvider } from "@/store/store-provider";

type Props = {
  children: React.ReactNode;
};

export function AppProviders({ children }: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <StoreProvider>{children}</StoreProvider>
    </ThemeProvider>
  );
}
