"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUserAlt, FaFilePdf, FaLaptopCode, FaEnvelope } from "react-icons/fa";
import { BiLogoLinkedin, BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { X } from "lucide-react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { close } from "@/redux/features/sidemenu-slice";
import { cn } from "@/lib/utils";

const SideBar = ({ className }: { className?: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const pathname = usePathname();

  const navLinks = [
    { name: "About Me", path: "/", icon: FaUserAlt },
    { name: "Projects", path: "/projects", icon: FaLaptopCode },
    { name: "Contact", path: "/contact", icon: FaEnvelope },
  ];

  return (
    <aside
      className={cn(
        "w-72 fixed top-0 bottom-0 left-0 z-50 p-6 flex flex-col glass-panel shadow-2xl overflow-y-auto border-r border-slate-800/80 bg-slate-950/95 backdrop-blur-2xl",
        className
      )}
    >
      <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-800">
        <span className="font-bold text-xl text-white tracking-tight leading-none select-none">
          Kaveen Nimsara
        </span>
        <button
          onClick={() => dispatch(close())}
          className="p-2 rounded-full hover:bg-slate-800 text-gray-400 transition-colors cursor-pointer"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex flex-col items-center text-center my-4">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-sky-400/60 p-1 shadow-lg shadow-sky-400/15">
          <img
            src="/assets/PP.png"
            alt="Kaveen Nimsara"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h2 className="font-bold text-white text-xl mt-3">
          Kaveen Nimsara
        </h2>
        <p className="text-xs text-sky-300 font-semibold mt-0.5">
          CS Undergraduate & SysAdmin / DevOps Enthusiast
        </p>
      </div>

      <nav className="flex flex-col gap-2 my-6">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.path;
          return (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => dispatch(close())}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                isActive
                  ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30"
                  : "text-gray-300 hover:bg-slate-800/60 hover:text-white"
              }`}
            >
              <Icon className="w-4 h-4" />
              {link.name}
            </Link>
          );
        })}
        <Link
          href="/assets/Kaveen_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => dispatch(close())}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold border border-sky-800/60 text-sky-300 hover:bg-sky-500 hover:text-white transition-all mt-2"
        >
          <FaFilePdf className="w-4 h-4" />
          View Resume
        </Link>
      </nav>

      <div className="flex-1" />

      <div className="pt-4 border-t border-slate-800">
        <p className="text-xs text-center text-gray-400 mb-3">
          Connect with me
        </p>
        <div className="flex justify-center gap-3">
          <a
            href="https://linkedin.com/in/kaveennimsara"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-slate-800 text-blue-400 hover:scale-110 transition-transform"
            aria-label="LinkedIn"
          >
            <BiLogoLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/cheeriocat"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-slate-800 text-white hover:scale-110 transition-transform"
            aria-label="GitHub"
          >
            <BsGithub className="w-5 h-5" />
          </a>
          <a
            href="mailto:sendtonimzii@gmail.com"
            className="p-2.5 rounded-full bg-slate-800 text-red-400 hover:scale-110 transition-transform"
            aria-label="Email"
          >
            <BiLogoGmail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
