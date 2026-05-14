"use client";

import { useMemo } from "react";
import { useAppSelector } from "@/store/hooks";
import { computeActivityStats } from "@/lib/problem-math";

// Generate last 365 days
function generateLastYearDates() {
  const dates = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Start from exactly 52 weeks ago (364 days) to align weeks nicely
  const start = new Date(today);
  start.setDate(today.getDate() - 364);

  // Pad the beginning so the first column starts on a Sunday (0)
  while (start.getDay() !== 0) {
    start.setDate(start.getDate() - 1);
  }

  const current = new Date(start);
  while (current <= today || current.getDay() !== 0) {
    if (current > today && current.getDay() === 0) break;
    dates.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }

  return dates;
}

export function ProgressCalendar() {
  const solvedAt = useAppSelector((state) => state.tracker.solvedAt);

  const { dates, activityMap, maxSolved, stats } = useMemo(() => {
    const generated = generateLastYearDates();
    
    // Create activity map: 'YYYY-MM-DD' -> count
    const map: Record<string, number> = {};
    Object.values(solvedAt).forEach((isoDate) => {
      if (!isoDate) return;
      const d = new Date(isoDate);
      const dateString = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
      map[dateString] = (map[dateString] || 0) + 1;
    });

    let max = 1;
    Object.values(map).forEach(count => {
      if (count > max) max = count;
    });

    const calculatedStats = computeActivityStats(solvedAt);

    return { dates: generated, activityMap: map, maxSolved: max, stats: calculatedStats };
  }, [solvedAt]);

  const weeks: Date[][] = [];
  let currentWeek: Date[] = [];
  dates.forEach((date) => {
    currentWeek.push(date);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });

  const getIntensityClass = (count: number) => {
    if (count === 0) return "bg-surface-container-high border border-outline-variant/30";
    const intensity = count / maxSolved;
    if (intensity < 0.25) return "bg-secondary/30";
    if (intensity < 0.5) return "bg-secondary/60";
    if (intensity < 0.75) return "bg-secondary/90";
    return "bg-secondary";
  };

  const getFormatDate = (d: Date) => {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  };

  return (
    <div className="bg-surface border border-outline-variant rounded-xl p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-background">Activity History</h3>
        <div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant bg-surface-container-low px-3 py-1.5 rounded-full border border-outline-variant hidden sm:flex">
          <span>Less</span>
          <div className="w-3.5 h-3.5 rounded-[4px] bg-surface-container-high border border-outline-variant/30"></div>
          <div className="w-3.5 h-3.5 rounded-[4px] bg-secondary/30"></div>
          <div className="w-3.5 h-3.5 rounded-[4px] bg-secondary/60"></div>
          <div className="w-3.5 h-3.5 rounded-[4px] bg-secondary/90"></div>
          <div className="w-3.5 h-3.5 rounded-[4px] bg-secondary"></div>
          <span>More</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant/50">
          <div className="font-label-md text-on-surface-variant mb-1">Total Solved</div>
          <div className="font-display-md text-primary">{stats.totalSolved}</div>
        </div>
        <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant/50">
          <div className="font-label-md text-on-surface-variant mb-1">Solved This Week</div>
          <div className="font-display-md text-secondary">{stats.solvedThisWeek}</div>
        </div>
        <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant/50">
          <div className="font-label-md text-on-surface-variant mb-1">Current Streak</div>
          <div className="font-display-md text-warning">{stats.currentStreak} <span className="text-sm">days</span></div>
        </div>
        <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant/50">
          <div className="font-label-md text-on-surface-variant mb-1">Longest Streak</div>
          <div className="font-display-md text-success">{stats.longestStreak} <span className="text-sm">days</span></div>
        </div>
      </div>
      
      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <div className="min-w-max flex gap-[6px]">
          {weeks.map((week, wIndex) => (
            <div key={wIndex} className="flex flex-col gap-[6px]">
              {week.map((day, dIndex) => {
                const dateStr = getFormatDate(day);
                const count = activityMap[dateStr] || 0;
                const isFuture = day > new Date();

                return (
                  <div
                    key={dIndex}
                    title={`${dateStr}: ${count} problems`}
                    className={`h-[14px] w-[14px] rounded-[4px] transition-all hover:scale-125 cursor-pointer ${isFuture ? "bg-transparent" : getIntensityClass(count)}`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
