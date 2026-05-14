"use client";

import { useDeferredValue, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { PACE_OPTIONS, setPaceMonths, setSearch, setSelectedTopic, setSelectedDifficulty } from "@/store/tracker-slice";
import { problems, type Difficulty } from "@/data/problems";
import { filterProblems, DIFFICULTY_LABEL } from "@/lib/problem-math";
import { ProblemRow } from "@/components/problem-row";

const difficultyOptions: Array<{ value: Difficulty | "ALL"; label: string }> = [
  { value: "ALL", label: "All Difficulty" },
  { value: "E", label: DIFFICULTY_LABEL.E },
  { value: "M", label: DIFFICULTY_LABEL.M },
  { value: "H", label: DIFFICULTY_LABEL.H },
];

export default function ProblemsPage() {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.tracker.search);
  const selectedTopic = useAppSelector((state) => state.tracker.selectedTopic);
  const selectedDifficulty = useAppSelector((state) => state.tracker.selectedDifficulty);
  const paceMonths = useAppSelector((state) => state.tracker.paceMonths);

  const deferredSearch = useDeferredValue(search);

  const topics = useMemo(
    () => ["ALL", ...Array.from(new Set(problems.map((problem) => problem.topic))).sort()],
    []
  );

  const filtered = useMemo(
    () => filterProblems(problems, deferredSearch, selectedTopic, selectedDifficulty),
    [deferredSearch, selectedTopic, selectedDifficulty]
  );

  return (
    <div className="mx-auto max-w-[1280px] px-4 md:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="font-headline-xl text-[32px] text-on-background tracking-tight">Problem List</h2>
          <p className="font-body-md text-[14px] text-on-surface-variant mt-2">
            Showing {filtered.length} of {problems.length} problems
          </p>
        </div>
      </div>

      <div className="glass-panel rounded-3xl p-6 md:p-8 relative overflow-hidden">
        <div className="mb-6 grid gap-4 md:grid-cols-[1fr_220px_180px]">
          <div className="relative w-full group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">search</span>
            <input
              value={search}
              onChange={(event) => dispatch(setSearch(event.target.value))}
              placeholder="Search by title, topic, or slug..."
              className="w-full pl-12 pr-4 py-3 bg-white/60 backdrop-blur-sm border border-white rounded-2xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none font-body-md text-[14px] transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] placeholder-on-surface-variant/60 text-on-background"
            />
          </div>

          <select
            value={selectedTopic}
            onChange={(event) => dispatch(setSelectedTopic(event.target.value))}
            className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-white rounded-2xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none font-body-md text-[14px] transition-all text-on-background appearance-none"
          >
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic === "ALL" ? "All Topics" : topic}
              </option>
            ))}
          </select>

          <select
            value={selectedDifficulty}
            onChange={(event) =>
              dispatch(setSelectedDifficulty(event.target.value as Difficulty | "ALL"))
            }
            className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-white rounded-2xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none font-body-md text-[14px] transition-all text-on-background appearance-none"
          >
            {difficultyOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/60 bg-white/30 backdrop-blur-sm shadow-sm">
          <div className="max-h-[60vh] overflow-auto scrollbar-hide">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-white/60">
                <tr>
                  <th className="w-14 px-4 py-4 text-center font-label-md text-[12px] text-on-surface-variant uppercase tracking-widest font-semibold">
                    #
                  </th>
                  <th className="px-4 py-4 font-label-md text-[12px] text-on-surface-variant uppercase tracking-widest font-semibold">
                    Problem
                  </th>
                  <th className="px-4 py-4 font-label-md text-[12px] text-on-surface-variant uppercase tracking-widest font-semibold">
                    Topic
                  </th>
                  <th className="px-4 py-4 font-label-md text-[12px] text-on-surface-variant uppercase tracking-widest font-semibold">
                    Difficulty
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.length ? (
                  filtered.map((problem, index) => (
                    <ProblemRow key={problem.slug} problem={problem} index={index} />
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-4 py-12 text-center text-[14px] text-on-surface-variant font-body-md bg-white/20"
                    >
                      No problems match your current filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
