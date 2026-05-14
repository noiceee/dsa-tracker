import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { AppHeader } from "@/components/layout/app-header";
import { SupabaseHydration } from "@/components/supabase-hydration";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-canvas text-text">
      <SupabaseHydration />
      <div className="pointer-events-none fixed left-[55%] top-[4%] h-[420px] w-[420px] rounded-full bg-accent/10 blur-[90px]" />
      <div className="pointer-events-none fixed left-[15%] top-[58%] h-[360px] w-[360px] rounded-full bg-success/10 blur-[90px]" />

      <AppSidebar user={user} />
      <AppHeader />

      <main className="relative z-10 pb-20 pt-20 md:ml-64">
        {children}
      </main>
    </div>
  );
}
