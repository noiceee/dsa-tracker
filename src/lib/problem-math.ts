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
  if (Object.keys(solvedAt).length === 0) {
    return 0;
  }

  const solvedDays = new Set(
    Object.values(solvedAt)
      .filter(Boolean)
      .map((value) => value.slice(0, 10))
  );

  let streak = 0;
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);

  while (true) {
    const iso = cursor.toISOString().slice(0, 10);
    if (!solvedDays.has(iso)) {
      break;
    }
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return streak;
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
