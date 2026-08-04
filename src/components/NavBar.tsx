"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { toggle } from "@/redux/features/sidemenu-slice";
import { Menu, FileText, User, FolderKanban, Mail } from "lucide-react";

const NavBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const pathname = usePathname();

  const navItems = [
    { name: "About", path: "/", icon: User },
    { name: "Projects", path: "/projects", icon: FolderKanban },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-8 py-2.5 glass-nav transition-all duration-300">
      <div className="max-w-[1550px] mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-sky-400/40 p-0.5 group-hover:border-sky-400 transition-colors shadow-md flex-shrink-0">
            <img
              src="/assets/profile.jpg"
              alt="Nimzii"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-[family-name:var(--font-signature)] text-2xl sm:text-3xl text-gradient font-normal tracking-wide leading-none select-none drop-shadow-[0_2px_8px_rgba(116,172,223,0.35)] signature-animate py-0.5">
              Nimzii
            </span>
            <span className="text-[10px] sm:text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5 -mt-0.5">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for work
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1 bg-slate-800/70 p-1.5 rounded-full border border-slate-700/60 backdrop-blur-md">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-sky-500 text-white shadow-md shadow-sky-500/30"
                    : "text-gray-300 hover:text-white hover:bg-slate-700/60"
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-2.5">
          <Link
            href="/assets/Kaveen_CV new.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-sky-950/70 text-sky-300 border border-sky-800/70 hover:bg-sky-500 hover:text-white text-xs font-bold transition-all duration-200 shadow-xs"
          >
            <FileText className="w-4 h-4" />
            Resume
          </Link>

          <button
            onClick={() => dispatch(toggle())}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 text-gray-200 hover:bg-sky-500 hover:text-white transition-colors cursor-pointer"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
