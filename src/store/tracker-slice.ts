import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { DifficultyFilter, PaceMonths, TopicFilter, TrackerPersistedState } from "@/lib/types";
import { clampPace } from "@/lib/problem-math";

export type TrackerState = TrackerPersistedState & {
  search: string;
  selectedTopic: TopicFilter;
  selectedDifficulty: DifficultyFilter;
};



const initialState: TrackerState = {
  solvedSlugs: {},
  solvedAt: {},
  paceMonths: 4,
  search: "",
  selectedTopic: "ALL",
  selectedDifficulty: "ALL",
};

export const trackerSlice = createSlice({
  name: "tracker",
  initialState,
  reducers: {
    hydrateFromStorage: (
      state,
      action: PayloadAction<TrackerPersistedState | null>
    ) => {
      const incoming = action.payload;
      if (!incoming) {
        return;
      }

      state.solvedSlugs = incoming.solvedSlugs ?? {};
      state.solvedAt = incoming.solvedAt ?? {};
      state.paceMonths = clampPace(incoming.paceMonths ?? 4);
    },

    toggleSolved: (
      state,
      action: PayloadAction<{ slug: string; nowIso: string }>
    ) => {
      const { slug, nowIso } = action.payload;
      if (state.solvedSlugs[slug]) {
        delete state.solvedSlugs[slug];
        delete state.solvedAt[slug];
        return;
      }

      state.solvedSlugs[slug] = true;
      state.solvedAt[slug] = nowIso;
    },

    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },

    setSelectedTopic: (state, action: PayloadAction<TopicFilter>) => {
      state.selectedTopic = action.payload;
    },

    setSelectedDifficulty: (state, action: PayloadAction<DifficultyFilter>) => {
      state.selectedDifficulty = action.payload;
    },

    setPaceMonths: (state, action: PayloadAction<number>) => {
      state.paceMonths = clampPace(action.payload);
    },



    clearProgress: (state) => {
      state.solvedSlugs = {};
      state.solvedAt = {};
    },
  },
});

export const {
  hydrateFromStorage,
  toggleSolved,
  setSearch,
  setSelectedTopic,
  setSelectedDifficulty,
  setPaceMonths,
  clearProgress,
} = trackerSlice.actions;

export default trackerSlice.reducer;

export const PACE_OPTIONS: PaceMonths[] = [3, 4, 5, 6];

export const toggleAndSyncSolved = (slug: string) => {
  return async (dispatch: any, getState: any) => {
    dispatch(toggleSolved({ slug, nowIso: new Date().toISOString() }));
    
    // Background sync
    const state = getState();
    const { solvedSlugs, solvedAt } = state.tracker;
    
    // Import server action dynamically or top level to sync
    const { syncProgressToSupabase } = await import("@/app/actions/sync");
    await syncProgressToSupabase(solvedSlugs, solvedAt);
  };
};
