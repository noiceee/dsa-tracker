"use client";

import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearProgress } from "@/store/tracker-slice";
import { problems, type Difficulty } from "@/data/problems";
import { countByDifficulty, estimateDailyTarget, buildTopicSummaries, DIFFICULTY_LABEL } from "@/lib/problem-math";
import { ProgressCalendar } from "@/components/progress-calendar";

export default function DashboardPage() {
  const dispatch = useAppDispatch();
  const solvedSlugs = useAppSelector((state) => state.tracker.solvedSlugs);
  const solvedAt = useAppSelector((state) => state.tracker.solvedAt);
  const paceMonths = useAppSelector((state) => state.tracker.paceMonths);

  const solvedCount = useMemo(() => Object.keys(solvedSlugs).length, [solvedSlugs]);
  const streak = useMemo(() => {
    // Basic streak calculation for UI mapping
    const today = new Date().toISOString().split("T")[0];
    return solvedAt[today] ? 1 : 0; // simplistic for now, replace with actual streak logic
  }, [solvedAt]);
  
  const completion = useMemo(
    () => (problems.length ? Math.round((solvedCount / problems.length) * 100) : 0),
    [problems.length, solvedCount]
  );
  
  const dailyTarget = useMemo(
    () => estimateDailyTarget(solvedCount, problems.length, paceMonths),
    [paceMonths, problems.length, solvedCount]
  );
  
  const difficultyStats = useMemo(
    () => countByDifficulty(problems, solvedSlugs),
    [problems, solvedSlugs]
  );

  return (
    <div className="max-w-[1280px] mx-auto space-y-8 px-4 md:px-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background tracking-tight">Overview</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">Track your daily algorithm mastery.</p>
        </div>
        <div className="font-label-sm text-[13px] text-primary glass-panel px-4 py-2 rounded-full inline-flex items-center gap-2 font-medium">
          <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>calendar_today</span>
          {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </div>
      </div>

      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stat Card 1 */}
        <div className="glass-panel rounded-3xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <span className="font-label-md text-[12px] text-on-surface-variant uppercase tracking-widest font-semibold">Current Streak</span>
            <div className="p-2 bg-orange-100/50 rounded-full">
              <span className="material-symbols-outlined text-orange-500" data-weight="fill">local_fire_department</span>
            </div>
          </div>
          <div className="flex items-baseline gap-2 mb-6">
            <span className="font-headline-xl text-[48px] text-on-background leading-none tracking-tight">{streak}</span>
            <span className="font-body-md text-[14px] text-on-surface-variant">days</span>
          </div>
          <div className="w-full bg-white/50 rounded-full h-2 shadow-inner overflow-hidden border border-white/40">
            <div className="liquid-gradient-warning h-full rounded-full" style={{ width: `${Math.min(streak * 5, 100)}%` }}></div>
          </div>
        </div>

        {/* Stat Card 2 */}
        <div className="glass-panel rounded-3xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <span className="font-label-md text-[12px] text-on-surface-variant uppercase tracking-widest font-semibold">Total Solved</span>
            <div className="p-2 bg-blue-100/50 rounded-full">
              <span className="material-symbols-outlined text-primary" data-weight="fill">task_alt</span>
            </div>
          </div>
          <div className="flex items-baseline gap-2 mb-5">
            <span className="font-headline-xl text-[48px] text-on-background leading-none tracking-tight">{solvedCount}</span>
            <span className="font-body-md text-[14px] text-on-surface-variant">problems</span>
          </div>
          <div className="flex gap-2">
            <span className="font-label-sm text-[11px] bg-emerald-100/60 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200/50 backdrop-blur-sm">Easy: {difficultyStats["E"]?.solved || 0}</span>
            <span className="font-label-sm text-[11px] bg-amber-100/60 text-amber-700 px-3 py-1 rounded-full border border-amber-200/50 backdrop-blur-sm">Med: {difficultyStats["M"]?.solved || 0}</span>
            <span className="font-label-sm text-[11px] bg-rose-100/60 text-rose-700 px-3 py-1 rounded-full border border-rose-200/50 backdrop-blur-sm">Hard: {difficultyStats["H"]?.solved || 0}</span>
          </div>
        </div>

        {/* Stat Card 3 */}
        <div className="glass-panel rounded-3xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <span className="font-label-md text-[12px] text-on-surface-variant uppercase tracking-widest font-semibold">Daily Goal</span>
            <div className="p-2 bg-emerald-100/50 rounded-full">
              <span className="material-symbols-outlined text-emerald-500">flag</span>
            </div>
          </div>
          <div className="flex items-baseline gap-2 mb-6">
            <span className="font-headline-xl text-[48px] text-on-background leading-none tracking-tight">
              {dailyTarget > 0 ? (solvedCount % dailyTarget) : 0}
              <span className="text-3xl text-outline-variant font-medium">/{dailyTarget}</span>
            </span>
          </div>
          <div className="w-full bg-white/50 rounded-full h-2 shadow-inner overflow-hidden border border-white/40">
            <div className="liquid-gradient-success h-full rounded-full" style={{ width: `${dailyTarget > 0 ? ((solvedCount % dailyTarget) / dailyTarget) * 100 : 100}%` }}></div>
          </div>
        </div>
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Problem of the Day */}
        <div className="lg:col-span-2 glass-panel rounded-3xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 via-tertiary/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
          <div className="flex items-start justify-between mb-6 relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-label-md text-[12px] text-primary uppercase tracking-widest font-bold">Problem of the Day</span>
                <span className="px-3 py-1 rounded-full bg-rose-100/80 text-rose-700 font-label-sm text-[11px] border border-rose-200/50 backdrop-blur-sm shadow-sm">Hard</span>
              </div>
              <h3 className="font-headline-lg text-[32px] leading-tight text-on-background mb-3">Median of Two Sorted Arrays</h3>
              <p className="font-body-lg text-[16px] text-on-surface-variant max-w-2xl leading-relaxed">Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-8 relative z-10">
            <button className="px-6 py-3 liquid-gradient text-white rounded-xl font-label-md text-[14px] shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-200 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]">
              <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>code</span>
              Solve Now
            </button>
            <button className="px-5 py-3 bg-white/60 text-on-surface-variant border border-white rounded-xl font-label-md text-[14px] hover:bg-white/80 hover:text-primary transition-all duration-200 flex items-center gap-2 backdrop-blur-sm shadow-sm hover:shadow-md">
              <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>lightbulb</span>
              View Hints
            </button>
          </div>
          <div className="mt-8 pt-5 border-t border-white/60 flex flex-wrap gap-6 text-[13px] text-on-surface-variant font-label-sm">
            <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-outline" style={{ fontSize: "18px" }}>sell</span> Array, Binary Search, Divide and Conquer</span>
            <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-emerald-500" style={{ fontSize: "18px" }}>thumb_up</span> <span className="font-medium text-on-surface">92%</span> Success Rate</span>
          </div>
        </div>

        {/* Upcoming Contests */}
        <div className="glass-panel rounded-3xl p-6 flex flex-col relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-2xl pointer-events-none"></div>
          <div className="flex items-center justify-between mb-6 relative z-10">
            <h3 className="font-headline-lg-mobile text-[20px] text-on-background">Upcoming Contests</h3>
            <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/50 text-outline hover:text-primary transition-colors"><span className="material-symbols-outlined">more_horiz</span></button>
          </div>
          <div className="flex flex-col gap-3 flex-1 relative z-10">
            <div className="p-4 bg-white/40 border border-white/60 rounded-2xl hover:bg-white/60 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer backdrop-blur-sm group">
              <div className="flex justify-between items-start mb-2">
                <span className="font-label-md text-[15px] text-on-background group-hover:text-primary transition-colors">Weekly Contest 369</span>
                <span className="font-label-sm text-[11px] bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">In 2 days</span>
              </div>
              <p className="font-body-md text-[13px] text-on-surface-variant flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] opacity-70">event</span> Sunday, 8:00 AM PT
              </p>
            </div>
            <div className="p-4 bg-white/20 border border-white/40 rounded-2xl hover:bg-white/50 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer backdrop-blur-sm group">
              <div className="flex justify-between items-start mb-2">
                <span className="font-label-md text-[15px] text-on-background group-hover:text-primary transition-colors">Biweekly Contest 116</span>
                <span className="font-label-sm text-[11px] bg-surface-variant/50 text-on-surface-variant px-2.5 py-1 rounded-full backdrop-blur-sm">In 5 days</span>
              </div>
              <p className="font-body-md text-[13px] text-on-surface-variant flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] opacity-70">event</span> Saturday, 7:30 AM PT
              </p>
            </div>
          </div>
          <button className="w-full mt-6 py-3 text-primary font-label-md text-[14px] bg-white/30 border border-white/50 hover:bg-white/60 rounded-xl transition-all backdrop-blur-sm shadow-sm relative z-10">
            View All Calendar
          </button>
        </div>
      </div>
      
      {/* Activity Graph Placeholder */}
      <ProgressCalendar />
      
    </div>
  );
}
