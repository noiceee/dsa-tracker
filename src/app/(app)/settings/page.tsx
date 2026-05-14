"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { useAppDispatch } from "@/store/hooks";
import { clearProgress } from "@/store/tracker-slice";

export default function SettingsPage() {
  const dispatch = useAppDispatch();

  return (
    <div className="mx-auto max-w-[1280px] px-4 md:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="font-headline-xl text-[32px] text-on-background tracking-tight">Settings</h2>
          <p className="font-body-md text-[14px] text-on-surface-variant mt-2">Manage your preferences and data.</p>
        </div>
      </div>
      <div className="space-y-6">
        <section className="glass-panel rounded-3xl p-6 md:p-8">
          <h3 className="mb-4 font-headline-lg-mobile text-[20px] text-on-background">Appearance</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-label-md text-[16px] text-on-background">Theme Preference</p>
              <p className="font-body-md text-[13px] text-on-surface-variant mt-1">
                Toggle between Light and Dark mode.
              </p>
            </div>
            <ThemeToggle />
          </div>
        </section>

        <section className="glass-panel rounded-3xl p-6 md:p-8 border-rose-200/50 bg-rose-50/20">
          <h3 className="mb-4 font-headline-lg-mobile text-[20px] text-rose-700">Danger Zone</h3>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-2xl bg-white/40 border border-rose-200/50 backdrop-blur-sm p-6 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <div>
              <p className="font-label-md text-[16px] text-rose-800">Factory Reset</p>
              <p className="font-body-md text-[13px] text-rose-600/80 mt-1 max-w-md">
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
              className="whitespace-nowrap rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 px-6 py-3 text-[14px] font-bold text-white shadow-lg shadow-rose-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Reset Everything
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
