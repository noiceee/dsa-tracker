"use client";

import { useMemo } from "react";
import { useAppSelector } from "@/store/hooks";

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

  const { dates, activityMap, maxSolved } = useMemo(() => {
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

    return { dates: generated, activityMap: map, maxSolved: max };
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
    if (count === 0) return "bg-black/5 border border-black/5";
    const intensity = count / maxSolved;
    if (intensity < 0.25) return "bg-primary/30";
    if (intensity < 0.5) return "bg-primary/60";
    if (intensity < 0.75) return "bg-primary/90";
    return "bg-primary shadow-[0_0_8px_rgba(0,74,198,0.4)]";
  };

  const getFormatDate = (d: Date) => {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  };

  return (
    <div className="glass-panel rounded-3xl p-8 mb-8">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-headline-lg-mobile text-[24px] text-on-background">Activity History</h3>
        <div className="flex items-center gap-2.5 font-label-sm text-[13px] text-on-surface-variant bg-white/40 px-3 py-1.5 rounded-full border border-white/50 backdrop-blur-sm">
          <span>Less</span>
          <div className="w-3.5 h-3.5 rounded-[4px] bg-black/5 border border-black/5"></div>
          <div className="w-3.5 h-3.5 rounded-[4px] bg-primary/30"></div>
          <div className="w-3.5 h-3.5 rounded-[4px] bg-primary/60"></div>
          <div className="w-3.5 h-3.5 rounded-[4px] bg-primary/90"></div>
          <div className="w-3.5 h-3.5 rounded-[4px] bg-primary shadow-[0_0_8px_rgba(0,74,198,0.4)]"></div>
          <span>More</span>
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
