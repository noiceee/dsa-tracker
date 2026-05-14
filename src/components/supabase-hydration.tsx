"use client";

import { useEffect, useRef } from "react";
import { useAppDispatch } from "@/store/hooks";
import { hydrateFromStorage } from "@/store/tracker-slice";
import { createClient } from "@/utils/supabase/client";

export function SupabaseHydration() {
  const dispatch = useAppDispatch();
  const fetched = useRef(false);

  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;

    async function loadRemoteData() {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        const { data, error } = await supabase
          .from("user_progress")
          .select("solved_slugs, solved_at, pace_months")
          .eq("user_id", user.id)
          .single();

        if (data && !error) {
          // Merge with current state or overwrite
          dispatch(hydrateFromStorage({
            solvedSlugs: data.solved_slugs,
            solvedAt: data.solved_at,
            paceMonths: data.pace_months ?? 4,
          }));
        }
      }
    }

    loadRemoteData();
  }, [dispatch]);

  return null;
}
