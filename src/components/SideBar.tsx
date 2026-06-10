"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FaUserAlt, FaFilePdf, FaLaptopCode } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa6";
import { BiLogoLinkedin, BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { Moon, Sun, Monitor } from "lucide-react";
import { AiOutlineClose } from "react-icons/ai";
import { useTheme } from "next-themes";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { close } from "@/redux/features/sidemenu-slice";
import { cn } from "@/lib/utils";

const SideBar = ({ className }: { className?: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();

  return (
    <div
      className={cn(
        "p-4 w-60 fixed top-0 left-0 bottom-0 z-20 overflow-y-auto flex flex-col bg-blue-700 dark:bg-gray-900 text-white",
        className,
      )}
    >
      <div className="fixed right-3 top-3 block lg:hidden">
        <AiOutlineClose onClick={() => dispatch(close())} />
      </div>

      {/* Name */}
      <h1 className="font-bold text-lg text-white text-center mt-3">
        <Link href="/" onClick={() => dispatch(close())}>
          Kaveen Nimsara
        </Link>
      </h1>

      {/* Profile Photo */}
      <Link href="/" onClick={() => dispatch(close())}>
        <div className="mx-auto mt-5 w-[120px] h-[120px] rounded-full overflow-hidden border-2 border-white/40">
          <img
            src="/assets/profile.jpg"
            alt="Kaveen Nimsara"
            className="w-full h-full object-cover"
          />
        </div>
      </Link>

      {/* Social Links */}
      <div className="mt-5 flex justify-center gap-2">
        <Link
          href="https://linkedin.com/in/kaveennimsara"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-2 rounded-full text-blue-700"
        >
          <BiLogoLinkedin />
        </Link>
        <Link
          href="https://github.com/cheeriocat"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-2 rounded-full text-blue-700"
        >
          <BsGithub />
        </Link>
        <Link
          href="mailto:sendtonimzii@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-2 rounded-full text-blue-700"
        >
          <BiLogoGmail />
        </Link>
      </div>

      <hr className="mt-5 border-white/30" />

      {/* Nav Links */}
      <div className="mt-5 flex flex-col gap-2">
        <Link href="/">
          <Button
            className={`w-full transition-all duration-200 ${
              pathname === "/"
                ? "bg-white text-blue-700 font-semibold"
                : "text-white hover:bg-white/20"
            }`}
            variant="ghost"
            size="sm"
            onClick={() => dispatch(close())}
          >
            <FaUserAlt className="mr-1 h-3 w-3" /> About Me
          </Button>
        </Link>
        <Link href="/projects">
          <Button
            className={`w-full transition-all duration-200 ${
              pathname === "/projects"
                ? "bg-white text-blue-700 font-semibold"
                : "text-white hover:bg-white/20"
            }`}
            variant="ghost"
            size="sm"
            onClick={() => dispatch(close())}
          >
            <FaLaptopCode className="mr-1 h-4 w-4" /> Projects
          </Button>
        </Link>
        <Link href="/contact">
          <Button
            className={`w-full transition-all duration-200 ${
              pathname === "/contact"
                ? "bg-white text-blue-700 font-semibold"
                : "text-white hover:bg-white/20"
            }`}
            variant="ghost"
            size="sm"
            onClick={() => dispatch(close())}
          >
            <FaAddressCard className="mr-1 h-4 w-4" /> Contact
          </Button>
        </Link>
        <Link
          href="/assets/Kaveen_CV new.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className="w-full text-white hover:bg-white/20 transition-all duration-200"
            variant="ghost"
            size="sm"
            onClick={() => dispatch(close())}
          >
            <FaFilePdf className="mr-1 h-4 w-4" /> Resume
          </Button>
        </Link>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      <hr className="border-white/30 mb-4" />

      {/* Theme Switcher */}
      <div className="flex justify-end gap-1 pb-2">
        <button
          onClick={() => setTheme("light")}
          title="Light mode"
          className={`p-2 rounded-full transition-all duration-300 ${
            theme === "light"
              ? "bg-white text-blue-700 scale-110"
              : "text-white/60 hover:text-white hover:bg-white/20"
          }`}
        >
          <Sun className="h-4 w-4" />
        </button>
        <button
          onClick={() => setTheme("dark")}
          title="Dark mode"
          className={`p-2 rounded-full transition-all duration-300 ${
            theme === "dark"
              ? "bg-white text-blue-700 scale-110"
              : "text-white/60 hover:text-white hover:bg-white/20"
          }`}
        >
          <Moon className="h-4 w-4" />
        </button>
        <button
          onClick={() => setTheme("system")}
          title="System mode"
          className={`p-2 rounded-full transition-all duration-300 ${
            theme === "system"
              ? "bg-white text-blue-700 scale-110"
              : "text-white/60 hover:text-white hover:bg-white/20"
          }`}
        >
          <Monitor className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
