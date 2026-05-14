"use client";

import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { problems, type Difficulty } from "@/data/problems";
import { countByDifficulty, estimateDailyTarget, computeStreak, DIFFICULTY_LABEL } from "@/lib/problem-math";
import { ProgressCalendar } from "@/components/progress-calendar";
import { toggleAndSyncSolved } from "@/store/tracker-slice";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Pick the "next problem" the user should solve.
 * Returns the first unsolved problem in the roadmap order.
 * Falls back to the first problem if all are solved.
 */
function getNextProblem(solvedSlugs: Record<string, boolean>) {
  const next = problems.find((p) => !solvedSlugs[p.slug]);
  return next ?? problems[0];
}

export default function DashboardPage() {
  const dispatch = useAppDispatch();
  const solvedSlugs = useAppSelector((state) => state.tracker.solvedSlugs);
  const solvedAt = useAppSelector((state) => state.tracker.solvedAt);
  const paceMonths = useAppSelector((state) => state.tracker.paceMonths);

  const solvedCount = useMemo(() => Object.keys(solvedSlugs).length, [solvedSlugs]);
  const streak = useMemo(() => computeStreak(solvedAt), [solvedAt]);
  
  const completion = useMemo(
    () => (problems.length ? Math.round((solvedCount / problems.length) * 100) : 0),
    [solvedCount]
  );
  
  const dailyTarget = useMemo(
    () => estimateDailyTarget(solvedCount, problems.length, paceMonths),
    [paceMonths, solvedCount]
  );
  
  const difficultyStats = useMemo(
    () => countByDifficulty(problems, solvedSlugs),
    [solvedSlugs]
  );

  const potd = useMemo(() => getNextProblem(solvedSlugs), [solvedSlugs]);
  const potdDiffLabel = DIFFICULTY_LABEL[potd.difficulty];
  const potdDiffColor = potd.difficulty === "E" ? "text-success bg-success/10 border-success/20" : potd.difficulty === "M" ? "text-warning bg-warning/10 border-warning/20" : "text-error bg-error/10 border-error/20";
  const isPotdSolved = Boolean(solvedSlugs[potd.slug]);

  const handleMarkAsDone = () => {
    dispatch(toggleAndSyncSolved(potd.slug));
  };

  return (
    <div className="max-w-container-max-width mx-auto p-margin-mobile md:p-margin-desktop space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-on-background tracking-tight">Overview</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">Track your daily algorithm mastery.</p>
        </div>
        <div className="font-button-text text-button-text text-on-surface-variant bg-surface px-4 py-2 rounded-full inline-flex items-center gap-2 border border-secondary/20">
          <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>calendar_today</span>
          {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </div>
      </div>

      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stat Card 1 — Streak */}
        <div className="bg-surface border border-outline-variant rounded-xl p-5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-shadow">
          <div className="flex items-center justify-between mb-2">
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Current Streak</span>
            <span className="material-symbols-outlined text-warning" data-weight="fill">local_fire_department</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-display-lg text-display-lg text-on-background leading-none">{streak}</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">days</span>
          </div>
          <div className="mt-4 w-full bg-surface-container-high rounded-full h-1.5">
            <div className="bg-warning h-1.5 rounded-full transition-all duration-500" style={{ width: `${Math.min(streak * 5, 100)}%` }}></div>
          </div>
        </div>

        {/* Stat Card 2 — Total Solved */}
        <div className="bg-surface border border-outline-variant rounded-xl p-5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-shadow">
          <div className="flex items-center justify-between mb-2">
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Total Solved</span>
            <span className="material-symbols-outlined text-secondary" data-weight="fill">task_alt</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-display-lg text-display-lg text-on-background leading-none">{solvedCount}</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">/ {problems.length}</span>
          </div>
          <div className="mt-4 flex gap-1">
            <span className="font-label-md text-[10px] bg-success/10 text-success px-2 py-0.5 rounded-full">Easy: {difficultyStats["E"]?.solved || 0}</span>
            <span className="font-label-md text-[10px] bg-warning/10 text-warning px-2 py-0.5 rounded-full">Med: {difficultyStats["M"]?.solved || 0}</span>
            <span className="font-label-md text-[10px] bg-error/10 text-error px-2 py-0.5 rounded-full">Hard: {difficultyStats["H"]?.solved || 0}</span>
          </div>
        </div>

        {/* Stat Card 3 — Daily Goal */}
        <div className="bg-surface border border-outline-variant rounded-xl p-5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-shadow">
          <div className="flex items-center justify-between mb-2">
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Completion</span>
            <span className="material-symbols-outlined text-success">flag</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-display-lg text-display-lg text-on-background leading-none">{completion}<span className="text-2xl text-outline-variant">%</span></span>
          </div>
          <div className="mt-4 w-full bg-surface-container-high rounded-full h-1.5">
            <div className="bg-success h-1.5 rounded-full transition-all duration-500" style={{ width: `${completion}%` }}></div>
          </div>
        </div>
      </div>

      {/* Problem of the Day — Dynamic */}
      <div className="bg-surface border border-outline-variant rounded-xl p-6 relative overflow-hidden min-h-[220px]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={potd.slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">Up Next</span>
                  <span className={`px-2 py-0.5 rounded-full font-label-md text-[10px] border ${potdDiffColor}`}>{potdDiffLabel}</span>
                  {isPotdSolved && (
                    <span className="px-2 py-0.5 rounded-full font-label-md text-[10px] border border-success/20 bg-success/10 text-success flex items-center gap-1">
                      <span className="material-symbols-outlined" style={{ fontSize: "12px" }}>check</span>Solved
                    </span>
                  )}
                </div>
                <h3 className="font-display-lg text-headline-lg-mobile md:text-[28px] md:leading-[36px] font-bold text-on-background mb-2">{potd.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Topic: {potd.topic} · Practice this problem to stay on track with your daily goals.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <a
                href={potd.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-primary text-on-primary rounded-lg font-button-text text-button-text hover:bg-surface-tint transition-all duration-100 flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95"
              >
                <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>code</span>
                Solve Now
              </a>

              <button
                onClick={handleMarkAsDone}
                className={`px-6 py-2.5 rounded-lg font-button-text text-button-text transition-all duration-200 flex items-center gap-2 border shadow-sm active:scale-95 ${
                  isPotdSolved 
                    ? "bg-success/10 border-success/30 text-success" 
                    : "bg-surface border-outline-variant text-on-surface hover:bg-surface-container-high"
                }`}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                  {isPotdSolved ? "check_circle" : "radio_button_unchecked"}
                </span>
                {isPotdSolved ? "Solved" : "Mark as Done"}
              </button>
            </div>

            <div className="mt-6 pt-4 border-t border-outline-variant/50 flex gap-4 text-sm text-on-surface-variant font-label-md">
              <span className="flex items-center gap-1"><span className="material-symbols-outlined" style={{ fontSize: "16px" }}>sell</span>{potd.topic}</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined" style={{ fontSize: "16px" }}>speed</span>{potdDiffLabel} Difficulty</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Activity Graph */}
      <ProgressCalendar />
      
    </div>
  );
}
