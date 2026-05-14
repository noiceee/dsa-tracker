"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : false;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center gap-2 rounded-xl border border-border bg-panel px-3 py-2 text-sm font-semibold text-text transition hover:border-accent/50 hover:text-accent"
      aria-label="Toggle theme"
    >
      <span className="text-base leading-none">{isDark ? "☀" : "☾"}</span>
      <span>{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
