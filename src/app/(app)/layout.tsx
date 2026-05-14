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
    <div className="relative min-h-screen overflow-x-hidden bg-background text-on-background flex">
      <SupabaseHydration />
      
      <AppSidebar user={user} />
      
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen w-full relative z-10">
        <AppHeader user={user} />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
