"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { type User } from "@supabase/supabase-js";
import Link from "next/link";

export function AppHeader({ user }: { user: User | null }) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-margin-mobile md:px-margin-desktop h-16 w-full bg-surface/80 backdrop-blur-md border-b border-outline-variant">
      <div className="flex items-center md:hidden gap-3">
        <span className="font-display-lg text-headline-lg-mobile font-bold text-primary">DSA Tracker</span>
      </div>
      
      <div className="hidden md:flex flex-1 max-w-md ml-auto mr-8">
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
          <input
            className="w-full pl-10 pr-4 py-2 bg-surface border border-outline-variant rounded-lg focus:border-secondary focus:ring-1 focus:ring-secondary outline-none font-body-sm text-body-sm transition-all"
            placeholder="Search problems..."
            type="text"
            aria-label="Search problems"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4 ml-auto md:ml-0 text-on-surface">
        <Link
          href="/roadmap"
          className="p-2 rounded-full hover:bg-surface-container hover:text-secondary transition-colors duration-100 cursor-pointer active:opacity-80 flex items-center justify-center"
          aria-label="View streaks"
        >
          <span className="material-symbols-outlined" data-icon="local_fire_department">local_fire_department</span>
        </Link>
        <ThemeToggle />
        <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer hover:scale-105 transition-transform border border-outline-variant">
          <img 
            alt={user?.user_metadata?.full_name || "User Avatar"}
            className="w-full h-full object-cover"
            loading="lazy"
            src={user?.user_metadata?.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.user_metadata?.full_name || user?.email || 'User')}&background=random`} 
          />
        </div>
      </div>
    </header>
  );
}
