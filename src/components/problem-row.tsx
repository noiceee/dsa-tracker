"use client";

import { memo } from "react";

import type { Problem } from "@/data/problems";
import { DIFFICULTY_LABEL } from "@/lib/problem-math";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleAndSyncSolved } from "@/store/tracker-slice";

type Props = {
  problem: Problem;
  index: number;
};

function difficultyPill(difficulty: Problem["difficulty"]): string {
  if (difficulty === "E") {
    return "border-success/25 bg-success/10 text-success";
  }
  if (difficulty === "M") {
    return "border-warning/25 bg-warning/10 text-warning";
  }
  return "border-danger/30 bg-danger/10 text-danger";
}

export const ProblemRow = memo(function ProblemRow({ problem, index }: Props) {
  const dispatch = useAppDispatch();
  const solved = useAppSelector((state) => Boolean(state.tracker.solvedSlugs[problem.slug]));

  return (
    <tr className="border-b border-white/40 transition-all duration-200 hover:bg-white/40 cursor-pointer group">
      <td className="w-14 px-4 py-4 text-[13px] font-medium text-center text-on-surface-variant/70">{index + 1}</td>
      <td className="px-4 py-4">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={solved}
            onChange={() => dispatch(toggleAndSyncSolved(problem.slug) as any)}
            className="h-4 w-4 cursor-pointer rounded border-white bg-white/50 text-primary focus:ring-primary/40 shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]"
          />
          <a
            href={problem.url}
            target="_blank"
            rel="noreferrer"
            className={`text-[15px] font-semibold transition-colors ${
              solved ? "text-on-surface-variant/60 line-through" : "text-on-background group-hover:text-primary"
            }`}
          >
            {problem.title}
          </a>
        </div>
      </td>
      <td className="px-4 py-4 text-[13px] font-medium text-on-surface-variant/90">{problem.topic}</td>
      <td className="px-4 py-4">
        <span
          className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-bold tracking-wide shadow-sm backdrop-blur-sm ${difficultyPill(
            problem.difficulty
          )}`}
        >
          {DIFFICULTY_LABEL[problem.difficulty]}
        </span>
      </td>
    </tr>
  );
});
