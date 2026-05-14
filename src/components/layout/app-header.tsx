"use client";

import { useMemo } from "react";
import { useAppSelector } from "@/store/hooks";
import { computeStreak } from "@/lib/problem-math";
import { problems } from "@/data/problems";
import { ThemeToggle } from "@/components/theme-toggle";

export function AppHeader() {
  const solvedSlugs = useAppSelector((state) => state.tracker.solvedSlugs);
  const solvedAt = useAppSelector((state) => state.tracker.solvedAt);

  const solvedCount = useMemo(() => Object.keys(solvedSlugs).length, [solvedSlugs]);
  const streak = useMemo(() => computeStreak(solvedAt), [solvedAt]);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-margin-mobile md:px-margin-desktop h-20 w-full glass-panel border-x-0 border-t-0 rounded-none">
      <div className="flex items-center md:hidden gap-3">
        <img alt="System Logo" className="w-8 h-8 rounded-lg object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNGXiBa5uUYUuS6774wCQDlqUtYHSFKmrQ7y5ySpnraAbH053OgLqw0wX5Upecz9ac7lOkdVlwwupi_eGqX7UwgehYW5q-TX-vTIli8e46oTFdZ6ALh-mJEGhn_v1ZMi9Vj2j9Tq4G7q7_SshmrcgSF5i4MHQkHhXcNI6Y2eBfeJ7B5tW3Tmg_0IprVfquuebMQ-IVVyWRas1UTBa9trMx5j6QKG6uPHdavUyT5yFFFEcttxJLZ5SMvcQgWtE29jbGzyRm__FWVN9x" />
        <span className="font-headline-lg-mobile text-[20px] font-bold text-primary">DSA Tracker</span>
      </div>
      
      <div className="hidden md:flex flex-1 max-w-md ml-auto mr-8">
        <div className="relative w-full group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">search</span>
          <input className="w-full pl-12 pr-4 py-2.5 bg-white/60 backdrop-blur-sm border border-white rounded-full focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none font-body-md text-[14px] transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] placeholder-on-surface-variant/60" placeholder="Search problems..." type="text"/>
        </div>
      </div>
      
      <div className="flex items-center gap-3 ml-auto md:ml-0 text-on-surface-variant">
        <button className="p-2.5 rounded-full hover:bg-white/80 hover:text-primary transition-all duration-200 cursor-pointer flex items-center justify-center shadow-sm border border-transparent hover:border-white">
          <span className="material-symbols-outlined" data-icon="local_fire_department">local_fire_department</span>
        </button>
        <button className="p-2.5 rounded-full hover:bg-white/80 hover:text-primary transition-all duration-200 cursor-pointer flex items-center justify-center shadow-sm border border-transparent hover:border-white">
          <span className="material-symbols-outlined" data-icon="pie_chart">pie_chart</span>
        </button>
        <div className="p-2.5 rounded-full hover:bg-white/80 transition-all duration-200 cursor-pointer flex items-center justify-center shadow-sm border border-transparent hover:border-white">
          <ThemeToggle />
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md cursor-pointer ml-3 hover:scale-105 transition-transform">
          <img alt="User Profile Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEAKZga4JsCYfd_UzjMBrOxYBjJ2lOCdkVy4UthfXNYc5xvvju18jZ-BPLwKPALvkGbPabUvVfL6IJPpjdSfT8oDp_8s3eKQeLA0mPDUmWRCVfS8RwLXAs8TQajHgeVlcSShoZwkMYcQTIghoBwUlzPMBEzRDi1qfd2es_dLKGBIUnlhsPcixulI0p3DLfejYotZgiq6eFfN-p5YvjgsNLWxGe-NnPp9EgJ2ruhviE8-GW101JS62yPS0RveANWdg2AbQObjTFQFUy" />
        </div>
      </div>
    </header>
  );
}
