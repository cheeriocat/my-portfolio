"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, FileText, Mail, Code2, GraduationCap, MapPin } from "lucide-react";
import { BiLogoLinkedin, BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import ScrollReveal from "@/components/ScrollReveal";

const PersonalInfo = () => {
  return (
    <ScrollReveal>
      <div className="relative overflow-hidden glass-card rounded-3xl p-6 sm:p-10 border border-slate-800/80 shadow-2xl">
        {/* Ambient Glow spot */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
            {/* macOS Color Lights Badge with Sequential Loading Loop */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-md">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500 text-red-500 mac-dot-red"></span>
                <span className="w-3 h-3 rounded-full bg-amber-400 text-amber-400 mac-dot-yellow"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500 text-emerald-500 mac-dot-green"></span>
              </div>
              <span className="text-[11px] text-slate-300 font-semibold tracking-wide ml-0.5">
                system.online
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I&apos;m{" "}
                <span className="text-gradient">
                  Kaveen Nimsara
                </span>
              </h1>
              <h2 className="text-lg sm:text-xl font-bold text-sky-300">
                Computer Science Undergraduate & Web Developer
              </h2>
            </div>

            {/* Paragraph */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-medium">
              I&apos;m a Computer Science student based in Sri Lanka, focused on building clean, high-performance applications across web, mobile, and desktop. On the frontend, I work with <strong className="text-white font-extrabold">React, TypeScript, Next.js, and Flutter</strong> to craft polished, intuitive interfaces. On the backend, I build with <strong className="text-white font-extrabold">Node.js and Java</strong>, using <strong className="text-white font-extrabold">MongoDB, SQL, and Firebase</strong> to power reliable, scalable systems.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm shadow-lg shadow-sky-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-white border border-slate-700 text-sm font-bold transition-all duration-200 shadow-xs"
              >
                <Mail className="w-4 h-4 text-sky-300" />
                <span>Contact Me</span>
              </Link>

              <Link
                href="/assets/Kaveen_CV new.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-sky-800/80 text-sky-300 hover:bg-sky-950/50 text-sm font-bold transition-all duration-200"
              >
                <FileText className="w-4 h-4" />
                <span>CV / Resume</span>
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-4 border-t border-slate-800">
              <span className="text-xs font-extrabold text-gray-400 uppercase tracking-wider">
                Follow
              </span>
              <div className="h-4 w-[1px] bg-slate-700" />
              <a
                href="https://linkedin.com/in/kaveennimsara"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/80 text-slate-300 hover:text-sky-300 hover:scale-110 transition-all border border-slate-700"
                aria-label="LinkedIn"
              >
                <BiLogoLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/cheeriocat"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white hover:scale-110 transition-all border border-slate-700"
                aria-label="GitHub"
              >
                <BsGithub className="w-5 h-5" />
              </a>
              <a
                href="mailto:sendtonimzii@gmail.com"
                className="p-2.5 rounded-xl bg-slate-800/80 text-slate-300 hover:text-red-400 hover:scale-110 transition-all border border-slate-700"
                aria-label="Email"
              >
                <BiLogoGmail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Avatar Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Animated Glow Halo - Argentine flag celeste & white */}
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 via-white to-sky-300 rounded-3xl blur-md opacity-50 group-hover:opacity-80 transition duration-500"></div>

              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl bg-slate-900">
                <img
                  src="/assets/profile.jpg"
                  alt="Kaveen Nimsara"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Bottom Tag Overlay */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl glass-panel border border-slate-700/60 backdrop-blur-md">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-extrabold text-white">Kaveen Nimsara</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                      Galle, LK
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-800">
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-800/30 border border-slate-800/50">
            <div className="p-3 rounded-xl bg-sky-500/10 text-sky-300">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold">Projects Built</p>
              <p className="text-base font-extrabold text-white">9+ Applications</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-800/30 border border-slate-800/50">
            <div className="p-3 rounded-xl bg-white/10 text-white">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold">Education</p>
              <p className="text-base font-extrabold text-white">BSc in Computer Science</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-800/30 border border-slate-800/50">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold">Location</p>
              <p className="text-base font-extrabold text-white">Galle, Sri Lanka</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default PersonalInfo;
