import type { TrackerPersistedState } from "@/lib/types";
import type { TrackerState } from "@/store/tracker-slice";

const STORAGE_KEY = "dsa-tracker-next-v1";

export function pickPersistedState(state: TrackerState): TrackerPersistedState {
  return {
    solvedSlugs: state.solvedSlugs,
    solvedAt: state.solvedAt,
    paceMonths: state.paceMonths,
    leetcode: state.leetcode,
  };
}

export function loadPersistedTrackerState(): TrackerPersistedState | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw) as TrackerPersistedState | null;
    if (!parsed || typeof parsed !== "object") {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

export function persistTrackerState(state: TrackerPersistedState): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Intentionally ignore persistence failures (private mode/quota).
  }
}
