"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSelectedTopic } from "@/store/tracker-slice";
import { buildTopicSummaries } from "@/lib/problem-math";
import { problems } from "@/data/problems";
import { createClient } from "@/utils/supabase/client";
import { type User } from "@supabase/supabase-js";
import { LoginModal } from "@/components/login-modal";

export function AppSidebar({ user }: { user: User | null }) {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  
  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <>
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <nav className="hidden md:flex flex-col h-screen p-4 gap-xs glass-sidebar w-64 fixed left-0 top-0 z-40">
        <div className="flex items-center gap-3 mb-8 px-2 pt-2">
          <img alt="System Logo" className="w-10 h-10 rounded-xl object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDOqou8tKCOTelIoz8Q-YsRvMixHXO7aqWGrZTpv55U27Q43NwfsxGXOfmSHk7nyZVU8IReer8zBK5EqOlRpU7TA2Q_OJVETa-JVYgYGYOzH3BsdGTY21Cs1TrssEqApPzO6QG0-RlHOyEWcVXZjbqB64_9o_w2dMyJ6cU_S48USbXAjgasoxKnHwQtDVGe3I1nnt-nw5Gko3HO5pq2KiwDKKqSmURFLsZduPauvvsHDjZuom2abhf2M6IZF17COnwK9IFoRZtsds_" />
          <div>
            <h1 className="font-headline-lg-mobile text-[24px] text-primary tracking-tight font-bold">DSA Tracker</h1>
            <p className="font-label-sm text-[12px] text-on-surface-variant mt-0.5">Precision DSA Analytics</p>
          </div>
        </div>
        
        <div className="flex flex-col gap-1 flex-1">
          <NavRow label="Dashboard" icon="dashboard" href="/dashboard" active={pathname === "/dashboard"} />
          <NavRow label="Problems" icon="list_alt" href="/problems" active={pathname === "/problems"} />
          <NavRow label="Roadmap" icon="map" href="/roadmap" active={pathname === "/roadmap"} />
          <NavRow label="Settings" icon="settings" href="/settings" active={pathname === "/settings"} />
        </div>
        
        <div className="mt-auto flex flex-col gap-1 pt-4 border-t border-outline-variant/30 relative">
          <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-outline-variant/50 to-transparent"></div>
          
          <button className="w-full py-3 px-4 liquid-gradient text-white rounded-xl font-label-md text-[14px] shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-200 mb-4 hover:scale-[1.02] active:scale-[0.98]">
              {user ? user.email?.split('@')[0] : "Not Connected"}
          </button>
          
          <a className="flex items-center gap-3 px-4 py-2.5 text-on-surface-variant hover:bg-white/50 rounded-xl font-medium transition-all duration-200 cursor-pointer">
            <span className="material-symbols-outlined text-[20px]" data-icon="help_outline">help_outline</span>
            <span className="font-label-sm text-[13px]">Help Center</span>
          </a>
          
          {user ? (
            <button onClick={handleLogout} className="flex w-full items-center gap-3 px-4 py-2.5 text-on-surface-variant hover:bg-white/50 rounded-xl font-medium transition-all duration-200">
              <span className="material-symbols-outlined text-[20px]" data-icon="logout">logout</span>
              <span className="font-label-sm text-[13px]">Sign Out</span>
            </button>
          ) : (
            <button onClick={() => setIsLoginOpen(true)} className="flex w-full items-center gap-3 px-4 py-2.5 text-on-surface-variant hover:bg-white/50 rounded-xl font-medium transition-all duration-200">
              <span className="material-symbols-outlined text-[20px]" data-icon="login">login</span>
              <span className="font-label-sm text-[13px]">Login</span>
            </button>
          )}
        </div>
      </nav>
    </>
  );
}

function NavRow({ label, icon, href, active = false }: { label: string; icon: string; href: string; active?: boolean; }) {
  if (active) {
    return (
      <Link href={href} className="flex items-center gap-3 px-4 py-3 bg-white/80 text-primary rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-white/50 font-semibold scale-[0.98] transition-all">
        <span className="material-symbols-outlined text-primary">{icon}</span>
        <span className="font-label-md text-[14px]">{label}</span>
      </Link>
    );
  }
  return (
    <Link href={href} className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-white/50 rounded-xl font-medium hover:text-primary transition-all duration-200 scale-[0.98] hover:scale-[1]">
      <span className="material-symbols-outlined">{icon}</span>
      <span className="font-label-md text-[14px]">{label}</span>
    </Link>
  );
}
