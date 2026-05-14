import type { Difficulty } from "@/data/problems";

export type PaceMonths = 3 | 4 | 5 | 6;
export type DifficultyFilter = Difficulty | "ALL";
export type TopicFilter = "ALL" | string;



export type TrackerPersistedState = {
  solvedSlugs: Record<string, true>;
  solvedAt: Record<string, string>;
  paceMonths: PaceMonths;
};
