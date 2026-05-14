"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { z } from "zod";

const syncSchema = z.object({
  solvedSlugs: z.record(z.string(), z.literal(true)),
  solvedAt: z.record(z.string(), z.string().datetime().or(z.string())), // Allow ISO strings
  paceMonths: z.number().min(3).max(12).optional().default(4),
});

export async function syncProgressToSupabase(
  rawSolvedSlugs: Record<string, true>,
  rawSolvedAt: Record<string, string>,
  rawPaceMonths: number = 4
) {
  // Validate input
  const validation = syncSchema.safeParse({
    solvedSlugs: rawSolvedSlugs,
    solvedAt: rawSolvedAt,
    paceMonths: rawPaceMonths,
  });

  if (!validation.success) {
    return { success: false, error: "Invalid data format" };
  }

  const { solvedSlugs, solvedAt, paceMonths } = validation.data;

  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    return { success: false, error: "Not authenticated" };
  }

  // Basic rate limiting: check last updated_at
  const { data: lastUpdate } = await supabase
    .from("user_progress")
    .select("updated_at")
    .eq("user_id", user.id)
    .single();

  if (lastUpdate?.updated_at) {
    const lastTime = new Date(lastUpdate.updated_at).getTime();
    const now = new Date().getTime();
    if (now - lastTime < 5000) { // 5 seconds rate limit
      return { success: false, error: "Syncing too fast. Please wait." };
    }
  }

  const { error } = await supabase
    .from("user_progress")
    .upsert({
      user_id: user.id,
      solved_slugs: solvedSlugs,
      solved_at: solvedAt,
      pace_months: paceMonths,
      updated_at: new Date().toISOString()
    });

  if (error) {
    console.error("Supabase Sync Error:", error);
    return { success: false, error: error.message };
  }

  return { success: true };
}
