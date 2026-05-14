"use client";

import { useMemo } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearProgress } from "@/store/tracker-slice";
import { computeStreak } from "@/lib/problem-math";
import { type User } from "@supabase/supabase-js";

function StreakChart({ solvedAt }: { solvedAt: Record<string, string> }) {
  /* Compute problems-solved-per-day for last 7 days */
  const last7 = useMemo(() => {
    const days: { label: string; count: number }[] = [];
    const labels = ["S", "M", "T", "W", "T", "F", "S"];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = d.toISOString().split("T")[0];
      let count = 0;
      Object.values(solvedAt).forEach((v) => {
        if (v && v.startsWith(key)) count++;
      });
      days.push({ label: labels[d.getDay()], count });
    }
    return days;
  }, [solvedAt]);

  const maxCount = Math.max(...last7.map((d) => d.count), 1);

  return (
    <div className="relative h-24 w-full flex items-end justify-between gap-1 pt-4">
      <div className="absolute inset-0 flex flex-col justify-between z-0 border-l border-b border-outline-variant pb-6 pl-1">
        <div className="w-full border-t border-outline-variant/30 h-0"></div>
        <div className="w-full border-t border-outline-variant/30 h-0"></div>
        <div className="w-full border-t border-outline-variant/30 h-0"></div>
      </div>
      <div className="w-full h-full absolute inset-0 z-10 flex items-end justify-between px-2 pb-6">
        {last7.map((d, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div
              className="w-2 rounded-full bg-secondary transition-all duration-300"
              style={{ height: `${Math.max((d.count / maxCount) * 100, 4)}%` }}
            ></div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 w-full flex justify-between px-2 font-label-md text-[10px] text-on-surface-variant">
        {last7.map((d, i) => (
          <span key={i}>{d.label}</span>
        ))}
      </div>
    </div>
  );
}

export default function SettingsPage() {
  const dispatch = useAppDispatch();
  const solvedAt = useAppSelector((state) => state.tracker.solvedAt);
  const streak = useMemo(() => computeStreak(solvedAt), [solvedAt]);

  return (
    <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12">
      <div className="mb-8 md:mb-12">
        <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-on-background tracking-tight">Account Settings</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-2xl">Manage your profile, adjust your learning cadence, and configure security preferences.</p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">

        {/* Appearance (Spans 8 columns) */}
        <section className="lg:col-span-8 bg-surface border border-outline-variant rounded-xl p-6 md:p-8 hover:shadow-[0_4px_12px_rgba(86,94,116,0.05)] transition-shadow duration-300">
          <h3 className="font-display-lg text-headline-lg-mobile text-on-background mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">palette</span>
            Appearance
          </h3>
          <div className="flex flex-col gap-0">
            <div className="flex items-center justify-between py-4 border-b border-outline-variant/50">
              <div>
                <p className="font-body-md text-body-md font-semibold text-on-background">Theme Preference</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Toggle between Light and Dark mode.</p>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </section>

        {/* Streak Stats (Spans 4 columns) */}
        <section className="lg:col-span-4 bg-surface border border-outline-variant rounded-xl p-6 md:p-8 hover:shadow-[0_4px_12px_rgba(86,94,116,0.05)] transition-shadow duration-300 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <h3 className="font-display-lg text-headline-lg-mobile text-on-background flex items-center gap-2">
              <span className="material-symbols-outlined text-warning" data-weight="fill">local_fire_department</span>
              Streak Stats
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="border border-outline-variant rounded-lg p-4 bg-surface-container-lowest text-center">
              <p className="font-label-md text-label-md text-on-surface-variant mb-1">CURRENT</p>
              <p className="font-display-lg text-headline-lg text-on-background">{streak} <span className="text-body-sm text-on-surface-variant">days</span></p>
            </div>
            <div className="border border-outline-variant rounded-lg p-4 bg-surface-container-lowest text-center">
              <p className="font-label-md text-label-md text-on-surface-variant mb-1">TOTAL DAYS</p>
              <p className="font-display-lg text-headline-lg text-on-background">
                {Object.keys(
                  Object.values(solvedAt).reduce<Record<string, boolean>>((acc, v) => {
                    if (v) acc[v.split("T")[0]] = true;
                    return acc;
                  }, {})
                ).length} <span className="text-body-sm text-on-surface-variant">days</span>
              </p>
            </div>
          </div>
          <div className="mt-auto">
            <p className="font-label-md text-label-md text-on-surface-variant mb-3">CONSISTENCY (LAST 7 DAYS)</p>
            <StreakChart solvedAt={solvedAt} />
          </div>
        </section>

        {/* Danger Zone (Full span) */}
        <section className="lg:col-span-12 bg-surface border border-error/30 rounded-xl p-6 md:p-8 hover:shadow-[0_4px_12px_rgba(86,94,116,0.05)] transition-shadow duration-300">
          <h3 className="font-display-lg text-headline-lg-mobile text-error mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-error">warning</span>
            Danger Zone
          </h3>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-lg bg-error/5 border border-error/20 p-6">
            <div>
              <p className="font-body-md text-body-md font-semibold text-on-background">Factory Reset</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 max-w-md">
                Permanently delete all local solved progress. This cannot be undone and will reset your sync state.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                if (window.confirm("Are you absolutely sure you want to clear all progress and settings? This action cannot be reversed.")) {
                  dispatch(clearProgress());
                }
              }}
              className="whitespace-nowrap rounded-lg bg-error px-6 py-2.5 font-button-text text-button-text text-on-error transition-colors hover:opacity-90 active:opacity-80"
            >
              Reset Everything
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
