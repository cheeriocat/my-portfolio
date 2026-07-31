"use client";
import React from "react";
import Link from "next/link";
import { ArrowUp, Heart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-16 border-t border-slate-200/60 dark:border-slate-800/80 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} Kaveen Nimsara. Designed & Built with</span>
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse inline" />
        </div>

        <div className="flex items-center gap-6 font-medium">
          <Link href="/" className="hover:text-sky-300 dark:hover:text-white transition-colors">
            About
          </Link>
          <Link href="/projects" className="hover:text-sky-300 dark:hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-sky-300 dark:hover:text-white transition-colors">
            Contact
          </Link>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800/80 hover:bg-sky-500 hover:text-white dark:hover:bg-sky-500 text-gray-600 dark:text-gray-300 transition-all ml-2"
            title="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
