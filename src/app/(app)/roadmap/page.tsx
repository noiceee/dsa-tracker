"use client";

import { useMemo } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { problems } from "@/data/problems";
import { buildTopicSummaries, computeStreak } from "@/lib/problem-math";
import { setPaceAndSync } from "@/store/tracker-slice";

/* Topic icon mapping */
const TOPIC_ICONS: Record<string, string> = {
  "Arrays & Hashing": "data_array",
  "Two Pointers": "compare_arrows",
  "Sliding Window": "width_normal",
  "Stack": "layers",
  "Binary Search": "search",
  "Linked List": "link",
  "Trees": "account_tree",
  "Tries": "schema",
  "Heap / Priority Queue": "filter_list",
  "Backtracking": "undo",
  "Graphs": "hub",
  "Dynamic Programming": "memory",
  "Greedy": "bolt",
  "Intervals": "calendar_view_day",
  "Math & Geometry": "calculate",
  "Bit Manipulation": "code",
  "1-D Dynamic Programming": "memory",
  "2-D Dynamic Programming": "grid_view",
  "Advanced Graphs": "hub",
};

function getTopicIcon(topic: string): string {
  return TOPIC_ICONS[topic] || "code";
}

function getStatusInfo(progress: number): { label: string; icon: string; color: string; bgColor: string; borderColor: string } {
  if (progress >= 100) return { label: "Mastered", icon: "check_circle", color: "text-success", bgColor: "bg-success/10", borderColor: "border-success/20" };
  if (progress > 0) return { label: "In Progress", icon: "bolt", color: "text-secondary", bgColor: "bg-secondary/10", borderColor: "border-secondary/20" };
  return { label: "Up Next", icon: "lock", color: "text-on-surface-variant", bgColor: "bg-surface-container", borderColor: "border-outline-variant" };
}

export default function RoadmapPage() {
  const solvedSlugs = useAppSelector((state) => state.tracker.solvedSlugs);
  const solvedAt = useAppSelector((state) => state.tracker.solvedAt);
  const paceMonths = useAppSelector((state) => state.tracker.paceMonths);
  const dispatch = useAppDispatch();

  const topics = useMemo(() => buildTopicSummaries(problems, solvedSlugs), [solvedSlugs]);
  const solvedCount = useMemo(() => Object.keys(solvedSlugs).length, [solvedSlugs]);
  const streak = useMemo(() => computeStreak(solvedAt), [solvedAt]);
  const overallProgress = useMemo(
    () => (problems.length ? Math.round((solvedCount / problems.length) * 100) : 0),
    [solvedCount]
  );

  /* Split topics: first 3 get full cards, rest go into "Advanced Structures" */
  const mainTopics = topics.slice(0, 3);
  const advancedTopics = topics.slice(3);

  return (
    <div className="flex-1 p-margin-mobile md:p-margin-desktop max-w-container-max-width mx-auto w-full">
      {/* Plan Selector Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Mastery Path</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Structured learning modules to build your algorithmic foundation.</p>
        </div>
        <div className="bg-surface border border-outline-variant p-1 rounded-lg inline-flex shadow-sm">
          <button onClick={() => dispatch(setPaceAndSync(3) as any)} className={`px-4 py-2 font-button-text text-button-text transition-colors rounded ${paceMonths === 3 ? "bg-surface-container-low text-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface"}`}>3 Months</button>
          <button onClick={() => dispatch(setPaceAndSync(6) as any)} className={`px-4 py-2 font-button-text text-button-text transition-colors rounded ${paceMonths === 6 ? "bg-surface-container-low text-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface"}`}>6 Months</button>
          <button onClick={() => dispatch(setPaceAndSync(12) as any)} className={`px-4 py-2 font-button-text text-button-text transition-colors rounded ${paceMonths === 12 ? "bg-surface-container-low text-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface"}`}>1 Year</button>
        </div>
      </div>

      {/* Overall Progress */}
      <div className="bg-surface border border-outline-variant rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 w-full">
          <div className="flex justify-between items-center mb-2">
            <span className="font-label-md text-label-md text-on-surface-variant uppercase">Overall Completion</span>
            <span className="font-label-md text-label-md font-bold text-secondary">{overallProgress}%</span>
          </div>
          <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
            <div className="h-full bg-secondary rounded-full transition-all duration-500" style={{ width: `${overallProgress}%` }}></div>
          </div>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <div className="bg-surface-container-low px-4 py-3 rounded-lg border border-outline-variant flex-1 md:flex-none text-center">
            <div className="font-display-lg text-primary text-[24px] leading-tight">{solvedCount}</div>
            <div className="font-label-md text-label-md text-on-surface-variant">Problems Solved</div>
          </div>
          <div className="bg-surface-container-low px-4 py-3 rounded-lg border border-outline-variant flex-1 md:flex-none text-center">
            <div className="font-display-lg text-primary text-[24px] leading-tight">{streak}</div>
            <div className="font-label-md text-label-md text-on-surface-variant">Days Streak</div>
          </div>
        </div>
      </div>

      {/* Module Grid (Bento Style) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mainTopics.map((topic) => {
          const progress = topic.total > 0 ? Math.round((topic.solved / topic.total) * 100) : 0;
          const status = getStatusInfo(progress);
          const barColor = progress >= 100 ? "bg-success" : "bg-secondary";
          const accentColor = progress >= 100 ? "text-success" : progress > 0 ? "text-secondary" : "text-on-surface-variant";

          return (
            <div key={topic.topic} className="bg-surface border border-outline-variant rounded-xl p-6 relative overflow-hidden group hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300">
              {progress > 0 && <div className={`absolute top-0 left-0 w-1 h-full ${barColor}`}></div>}
              <div className="flex justify-between items-start mb-4">
                <div className={`w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center ${accentColor} border border-outline-variant`}>
                  <span className="material-symbols-outlined">{getTopicIcon(topic.topic)}</span>
                </div>
                <span className={`font-label-md text-label-md ${status.color} ${status.bgColor} px-2 py-1 rounded-full flex items-center gap-1 border ${status.borderColor}`}>
                  <span className="material-symbols-outlined text-[14px]">{status.icon}</span>
                  {status.label}
                </span>
              </div>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-2">{topic.topic}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 line-clamp-2">
                {topic.solved} of {topic.total} problems completed across Easy, Medium, and Hard difficulties.
              </p>
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-label-md text-label-md text-on-surface-variant">Progress</span>
                  <span className="font-label-md text-label-md text-on-surface">{topic.solved}/{topic.total}</span>
                </div>
                <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                  <div className={`h-full ${barColor} rounded-full transition-all duration-500`} style={{ width: `${progress}%` }}></div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Advanced Structures Bento Section */}
        {advancedTopics.length > 0 && (
          <div className="md:col-span-2 lg:col-span-3 bg-surface border border-outline-variant rounded-xl p-6 mt-4">
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-6 border-b border-outline-variant pb-4">Advanced Structures</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {advancedTopics.map((topic) => {
                const progress = topic.total > 0 ? Math.round((topic.solved / topic.total) * 100) : 0;
                return (
                  <div key={topic.topic} className="flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded bg-surface-container-low flex items-center justify-center text-on-surface-variant border border-outline-variant">
                        <span className="material-symbols-outlined text-[18px]">{getTopicIcon(topic.topic)}</span>
                      </div>
                      <h4 className="font-button-text text-button-text text-on-surface">{topic.topic}</h4>
                    </div>
                    <div className="w-full h-1 bg-surface-container-high rounded-full overflow-hidden mb-2">
                      <div className="h-full bg-secondary rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                    </div>
                    <span className="font-label-md text-label-md text-on-surface-variant text-right">{progress}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
