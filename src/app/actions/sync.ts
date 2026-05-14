"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function syncProgressToSupabase(
  solvedSlugs: Record<string, true>,
  solvedAt: Record<string, string>
) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    return { success: false, error: "Not authenticated" };
  }

  const { error } = await supabase
    .from("user_progress")
    .upsert({
      user_id: user.id,
      solved_slugs: solvedSlugs,
      solved_at: solvedAt,
      updated_at: new Date().toISOString()
    });

  if (error) {
    console.error("Supabase Sync Error:", error);
    return { success: false, error: error.message };
  }

  return { success: true };
}
