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
      <nav className="hidden md:flex flex-col h-full p-4 gap-base bg-surface-container-low border-r border-outline-variant h-screen w-64 fixed left-0 top-0 z-40">
        <div className="flex items-center gap-3 mb-8 px-2">
          <img alt="DSA Tracker Logo" className="w-10 h-10 rounded-lg object-cover" src="/logo.png" />
          <div>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight" style={{ fontSize: '20px', lineHeight: '24px' }}>DSA Tracker</h1>
            <p className="font-label-md text-label-md text-on-surface-variant">Precision DSA Analytics</p>
          </div>
        </div>
        
        <div className="flex flex-col gap-1 flex-1">
          <NavRow label="Dashboard" icon="dashboard" href="/dashboard" active={pathname === "/dashboard"} />
          <NavRow label="Problems" icon="list_alt" href="/problems" active={pathname === "/problems"} />
          <NavRow label="Roadmap" icon="map" href="/roadmap" active={pathname === "/roadmap"} />
          <NavRow label="Settings" icon="settings" href="/settings" active={pathname === "/settings"} />
        </div>
        
        <div className="mt-auto flex flex-col gap-1 pt-4 border-t border-outline-variant">
          <a
            href="https://buymeacoffee.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-[#FFDD00] text-black shadow-md rounded-lg font-button-text text-button-text hover:brightness-95 transition-all mb-4"
          >
            <span className="material-symbols-outlined text-sm">local_cafe</span>
            Buy me a coffee
          </a>
          
          <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg font-medium hover:bg-surface-container-highest transition-all duration-150 scale-95 active:scale-100 cursor-pointer">
            <span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
            <span className="font-label-md text-label-md">Help Center</span>
          </a>
          
          {user ? (
            <button onClick={handleLogout} className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg font-medium hover:bg-surface-container-highest transition-all duration-150 scale-95 active:scale-100 w-full text-left">
              <span className="material-symbols-outlined" data-icon="logout">logout</span>
              <span className="font-label-md text-label-md">Sign Out</span>
            </button>
          ) : (
            <button onClick={() => setIsLoginOpen(true)} className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg font-medium hover:bg-surface-container-highest transition-all duration-150 scale-95 active:scale-100 w-full text-left">
              <span className="material-symbols-outlined" data-icon="login">login</span>
              <span className="font-label-md text-label-md">Login</span>
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
      <Link href={href} className="flex items-center gap-3 px-3 py-2 bg-secondary text-on-secondary rounded-lg font-bold scale-95 transition-transform">
        <span className="material-symbols-outlined icon-fill" data-weight="fill">{icon}</span>
        <span className="font-label-md text-label-md">{label}</span>
      </Link>
    );
  }
  return (
    <Link href={href} className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg font-medium hover:bg-surface-container-highest transition-all duration-150 scale-95 active:scale-100">
      <span className="material-symbols-outlined">{icon}</span>
      <span className="font-label-md text-label-md">{label}</span>
    </Link>
  );
}
