"use client";
import React from "react";
import { academics } from "@/data/academic";
import { GraduationCap, Calendar, Building2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Education = () => {
  return (
    <ScrollReveal delay={200}>
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-300/80 dark:border-slate-800/80 shadow-xl h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-300/80 dark:border-slate-800">
            <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                Academic Background
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 font-medium">
                My educational journey & qualifications
              </p>
            </div>
          </div>

          <div className="relative pl-6 space-y-8 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-sky-400 before:via-white before:to-transparent">
            {academics.map((item, index) => (
              <div key={index} className="relative group">
                {/* Timeline dot */}
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-sky-400 group-hover:scale-125 transition-transform duration-200 shadow-md shadow-sky-400/30" />

                <div className="glass-panel rounded-2xl p-5 border border-slate-300/80 dark:border-slate-800/60 group-hover:border-sky-400/50 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-sky-300 transition-colors">
                      {item.degree}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950/60 text-sky-300 text-xs font-bold self-start sm:self-auto border border-sky-800/50">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.startYear} — {item.endYear}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-700 dark:text-gray-300 text-sm font-semibold">
                    <Building2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    <span>{item.institution}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default Education;
