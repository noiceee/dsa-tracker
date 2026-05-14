"use client";

import { memo } from "react";
import { motion } from "framer-motion";

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
    <tr className="hover:bg-surface-container-lowest transition-colors group border-b border-outline-variant">
      <td className="py-3 px-4">
        <label className="relative flex cursor-pointer items-center justify-center -ml-2 rounded-full hover:bg-surface-container-high transition-colors">
          <motion.input
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            type="checkbox"
            checked={solved}
            onChange={() => dispatch(toggleAndSyncSolved(problem.slug) as any)}
            className="h-5 w-5 cursor-pointer rounded border-outline-variant bg-surface text-primary focus:ring-primary/40 shadow-sm"
          />
        </label>
      </td>
      <td className="py-3 px-4 text-on-surface-variant font-label-md text-label-md">{String(index + 1).padStart(4, '0')}</td>
      <td className="py-3 px-4 font-button-text text-button-text group-hover:text-secondary transition-colors cursor-pointer relative">
        <a
          href={problem.url}
          target="_blank"
          rel="noreferrer"
          className={`${
            solved ? "text-on-surface-variant" : "text-on-background"
          } transition-colors duration-300 relative inline-block`}
        >
          {problem.title}
          {solved && (
            <motion.span
              layoutId={`strike-${problem.slug}`}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              className="absolute left-0 top-1/2 h-[1.5px] bg-on-surface-variant -translate-y-1/2"
            />
          )}
        </a>
      </td>
      <td className="hidden md:table-cell py-3 px-4">
        <div className="flex gap-2">
          <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface text-[11px] font-label-md border border-outline-variant border-opacity-50">
            {problem.topic}
          </span>
        </div>
      </td>
      <td className="py-3 px-4">
        <span className={`font-label-md text-label-md ${difficultyPill(problem.difficulty)}`}>
          {DIFFICULTY_LABEL[problem.difficulty]}
        </span>
      </td>
    </tr>
  );
});
