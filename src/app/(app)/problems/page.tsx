"use client";
import React, { useDeferredValue, useMemo, useState, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSearch, setSelectedTopic, setSelectedDifficulty } from "@/store/tracker-slice";
import { problems, type Difficulty } from "@/data/problems";
import { filterProblems, DIFFICULTY_LABEL } from "@/lib/problem-math";
import { ProblemRow } from "@/components/problem-row";

const difficultyOptions: Array<{ value: Difficulty | "ALL"; label: string }> = [
  { value: "ALL", label: "All Difficulty" },
  { value: "E", label: DIFFICULTY_LABEL.E },
  { value: "M", label: DIFFICULTY_LABEL.M },
  { value: "H", label: DIFFICULTY_LABEL.H },
];

const PROBLEMS_PER_WEEK = 35; // 5 problems per day × 7 days

export default function ProblemsPage() {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.tracker.search);
  const selectedTopic = useAppSelector((state) => state.tracker.selectedTopic);
  const selectedDifficulty = useAppSelector((state) => state.tracker.selectedDifficulty);
  const solvedSlugs = useAppSelector((state) => state.tracker.solvedSlugs);

  const deferredSearch = useDeferredValue(search);

  const [openWeeks, setOpenWeeks] = useState<Record<number, boolean>>({ 1: true });

  const toggleWeek = useCallback((weekIndex: number) => {
    setOpenWeeks((prev) => ({ ...prev, [weekIndex]: !prev[weekIndex] }));
  }, []);

  const topics = useMemo(
    () => ["ALL", ...Array.from(new Set(problems.map((problem) => problem.topic))).sort()],
    []
  );

  const filtered = useMemo(
    () => filterProblems(problems, deferredSearch, selectedTopic, selectedDifficulty),
    [deferredSearch, selectedTopic, selectedDifficulty]
  );

  const weeks = useMemo(() => {
    const segmented: { weekIndex: number; problems: typeof filtered }[] = [];
    for (let i = 0; i < filtered.length; i += PROBLEMS_PER_WEEK) {
      segmented.push({
        weekIndex: Math.floor(i / PROBLEMS_PER_WEEK) + 1,
        problems: filtered.slice(i, i + PROBLEMS_PER_WEEK),
      });
    }
    return segmented;
  }, [filtered]);

  return (
    <div className="flex-1 p-margin-mobile md:p-margin-desktop max-w-container-max-width mx-auto w-full">
      {/* Page Header & Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-on-background mb-1">Problem List</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Showing {filtered.length} of {problems.length} problems · {Object.keys(solvedSlugs).length} solved
          </p>
        </div>
      </div>

      {/* Data Controls */}
      <div className="bg-surface rounded-xl border border-outline-variant p-4 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Filters Left */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="relative group">
            <select
              value={selectedTopic}
              onChange={(event) => dispatch(setSelectedTopic(event.target.value))}
              aria-label="Filter by topic"
              className="appearance-none bg-surface border border-outline-variant rounded-lg pl-3 pr-8 py-1.5 font-label-md text-label-md text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary cursor-pointer hover:bg-surface-container-lowest transition-colors"
            >
              {topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic === "ALL" ? "All Topics" : topic}
                </option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-[16px] text-on-surface-variant pointer-events-none">expand_more</span>
          </div>
          
          <div className="relative group">
            <select
              value={selectedDifficulty}
              onChange={(event) => dispatch(setSelectedDifficulty(event.target.value as Difficulty | "ALL"))}
              aria-label="Filter by difficulty"
              className="appearance-none bg-surface border border-outline-variant rounded-lg pl-3 pr-8 py-1.5 font-label-md text-label-md text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary cursor-pointer hover:bg-surface-container-lowest transition-colors"
            >
              {difficultyOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-[16px] text-on-surface-variant pointer-events-none">expand_more</span>
          </div>
        </div>

        {/* Search Right */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <div className="relative w-full md:w-64">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
            <input
              value={search}
              onChange={(event) => dispatch(setSearch(event.target.value))}
              placeholder="Search problems..."
              aria-label="Search problems"
              className="w-full pl-9 pr-3 py-1.5 bg-surface border border-outline-variant rounded-lg text-body-sm font-body-sm focus:border-secondary focus:ring-1 focus:ring-secondary placeholder-on-surface-variant outline-none transition-all"
            />
          </div>
        </div>
      </div>

      {/* Week Accordion */}
      <div className="space-y-3">
        {weeks.length ? (
          weeks.map((week) => {
            const isOpen = openWeeks[week.weekIndex] ?? false;
            const weekSolved = week.problems.filter((p) => solvedSlugs[p.slug]).length;
            const weekTotal = week.problems.length;
            const weekProgress = weekTotal > 0 ? Math.round((weekSolved / weekTotal) * 100) : 0;

            return (
              <div key={week.weekIndex} className="bg-surface border border-outline-variant rounded-xl overflow-hidden">
                {/* Week Header — clickable */}
                <button
                  onClick={() => toggleWeek(week.weekIndex)}
                  className="w-full flex items-center justify-between px-6 py-4 hover:bg-surface-container-low transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span className={`material-symbols-outlined text-on-surface-variant transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}>
                      chevron_right
                    </span>
                    <div className="text-left">
                      <span className="font-button-text text-button-text text-on-background">Week {week.weekIndex}</span>
                      <span className="font-label-md text-label-md text-on-surface-variant ml-3">{weekTotal} problems</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-label-md text-label-md text-on-surface-variant">
                      {weekSolved}/{weekTotal} solved
                    </span>
                    <div className="w-24 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                      <div
                        className="h-full bg-secondary rounded-full transition-all duration-500"
                        style={{ width: `${weekProgress}%` }}
                      ></div>
                    </div>
                    {weekProgress === 100 && (
                      <span className="material-symbols-outlined text-success text-[18px]">check_circle</span>
                    )}
                  </div>
                </button>

                {/* Week Body — collapsible */}
                {isOpen && (
                  <div className="border-t border-outline-variant">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-surface-container-low">
                        <tr>
                          <th className="w-12 px-4 py-2 font-label-md text-label-md text-on-surface-variant">Status</th>
                          <th className="w-14 px-4 py-2 text-center font-label-md text-label-md text-on-surface-variant">#</th>
                          <th className="px-4 py-2 font-label-md text-label-md text-on-surface-variant">Problem</th>
                          <th className="hidden md:table-cell px-4 py-2 font-label-md text-label-md text-on-surface-variant">Topic</th>
                          <th className="px-4 py-2 font-label-md text-label-md text-on-surface-variant">Difficulty</th>
                        </tr>
                      </thead>
                      <tbody>
                        {week.problems.map((problem, idx) => {
                          const globalIndex = (week.weekIndex - 1) * PROBLEMS_PER_WEEK + idx;
                          return <ProblemRow key={problem.slug} problem={problem} index={globalIndex} />;
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="bg-surface border border-outline-variant rounded-xl p-12 text-center">
            <span className="material-symbols-outlined text-on-surface-variant text-[48px] mb-4 block">search_off</span>
            <p className="font-body-md text-body-md text-on-surface-variant">No problems match your current filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
