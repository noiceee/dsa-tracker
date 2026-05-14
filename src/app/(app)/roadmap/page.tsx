"use client";

import { ProgressCalendar } from "@/components/progress-calendar";

export default function RoadmapPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 md:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="font-headline-xl text-[32px] text-on-background tracking-tight">Roadmap & Calendar</h2>
          <p className="font-body-md text-[14px] text-on-surface-variant mt-2">Track your historical progress.</p>
        </div>
      </div>

      <div className="space-y-6">
        <ProgressCalendar />
      </div>
    </div>
  );
}
