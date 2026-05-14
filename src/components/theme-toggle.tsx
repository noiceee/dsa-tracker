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
      className="p-2 rounded-full hover:bg-surface-container hover:text-secondary transition-colors duration-100 cursor-pointer active:opacity-80 flex items-center justify-center"
      aria-label="Toggle theme"
    >
      <span className="material-symbols-outlined" data-icon={isDark ? "light_mode" : "dark_mode"}>
        {isDark ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
}
