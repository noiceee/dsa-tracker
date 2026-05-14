import type { Difficulty, Problem } from "@/data/problems";
import type { DifficultyFilter, PaceMonths } from "@/lib/types";

type TopicSummary = {
  topic: string;
  total: number;
  solved: number;
  percent: number;
};

export const DIFFICULTY_LABEL: Record<Difficulty, string> = {
  E: "Easy",
  M: "Medium",
  H: "Hard",
};

export function clampPace(value: number): PaceMonths {
  if (value === 12) return 12;
  if (value <= 3) return 3;
  if (value >= 6) return 6;
  return value as PaceMonths;
}

export function filterProblems(
  problems: Problem[],
  search: string,
  topic: string,
  difficulty: DifficultyFilter
): Problem[] {
  const normalized = search.trim().toLowerCase();

  return problems.filter((problem) => {
    const topicMatch = topic === "ALL" || problem.topic === topic;
    const difficultyMatch =
      difficulty === "ALL" || problem.difficulty === difficulty;

    if (!topicMatch || !difficultyMatch) {
      return false;
    }

    if (!normalized) {
      return true;
    }

    return (
      problem.title.toLowerCase().includes(normalized) ||
      problem.topic.toLowerCase().includes(normalized) ||
      problem.slug.toLowerCase().includes(normalized)
    );
  });
}

export function buildTopicSummaries(
  problems: Problem[],
  solvedSlugs: Record<string, true>
): TopicSummary[] {
  const tracker = new Map<string, { total: number; solved: number }>();

  for (const problem of problems) {
    const existing = tracker.get(problem.topic) ?? { total: 0, solved: 0 };
    existing.total += 1;
    if (solvedSlugs[problem.slug]) {
      existing.solved += 1;
    }
    tracker.set(problem.topic, existing);
  }

  return Array.from(tracker.entries())
    .map(([topic, value]) => ({
      topic,
      total: value.total,
      solved: value.solved,
      percent: value.total > 0 ? Math.round((value.solved / value.total) * 100) : 0,
    }))
    .sort((a, b) => {
      if (b.percent !== a.percent) {
        return b.percent - a.percent;
      }
      return a.topic.localeCompare(b.topic);
    });
}

export function countByDifficulty(
  problems: Problem[],
  solvedSlugs: Record<string, true>
): Record<Difficulty, { solved: number; total: number }> {
  const result: Record<Difficulty, { solved: number; total: number }> = {
    E: { solved: 0, total: 0 },
    M: { solved: 0, total: 0 },
    H: { solved: 0, total: 0 },
  };

  for (const problem of problems) {
    result[problem.difficulty].total += 1;
    if (solvedSlugs[problem.slug]) {
      result[problem.difficulty].solved += 1;
    }
  }

  return result;
}

export function computeStreak(solvedAt: Record<string, string>): number {
  return computeActivityStats(solvedAt).currentStreak;
}

export function computeActivityStats(solvedAt: Record<string, string>) {
  if (Object.keys(solvedAt).length === 0) {
    return { currentStreak: 0, longestStreak: 0, solvedThisWeek: 0, solvedThisMonth: 0, totalSolved: 0 };
  }

  // Helper: format a Date as local YYYY-MM-DD (no UTC conversion)
  const toLocalDate = (d: Date) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

  const validDates = Object.values(solvedAt)
    .filter(Boolean)
    .map((iso) => new Date(iso));

  const solvedDays = new Set(validDates.map(toLocalDate));

  // Current Streak
  let currentStreak = 0;
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  while (true) {
    const localKey = toLocalDate(cursor);
    if (!solvedDays.has(localKey)) break;
    currentStreak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  // Longest Streak
  const sortedDates = Array.from(solvedDays).sort((a, b) => new Date(b).getTime() - new Date(a).getTime());
  let longestStreak = 0;
  let tempStreak = 0;
  let prevDate: Date | null = null;
  
  // Sort descending
  for (const dateStr of sortedDates) {
    const d = new Date(dateStr);
    d.setHours(0, 0, 0, 0);
    if (!prevDate) {
      tempStreak = 1;
    } else {
      const diff = Math.floor((prevDate.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
      if (diff === 1) {
        tempStreak++;
      } else if (diff > 1) {
        longestStreak = Math.max(longestStreak, tempStreak);
        tempStreak = 1;
      }
    }
    prevDate = d;
  }
  longestStreak = Math.max(longestStreak, tempStreak);

  // Time-based stats
  const now = new Date();
  const weekAgo = new Date(now);
  weekAgo.setDate(now.getDate() - 7);
  const monthAgo = new Date(now);
  monthAgo.setDate(now.getDate() - 30);

  let solvedThisWeek = 0;
  let solvedThisMonth = 0;

  for (const d of validDates) {
    if (d >= weekAgo) solvedThisWeek++;
    if (d >= monthAgo) solvedThisMonth++;
  }

  return {
    currentStreak,
    longestStreak,
    solvedThisWeek,
    solvedThisMonth,
    totalSolved: validDates.length,
  };
}

export function estimateDailyTarget(
  solvedCount: number,
  totalCount: number,
  paceMonths: PaceMonths
): number {
  const remaining = Math.max(totalCount - solvedCount, 0);
  const totalDays = paceMonths * 30;
  return Math.max(Math.ceil(remaining / totalDays), 0);
}
