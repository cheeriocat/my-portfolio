"use client";
import React from "react";
import { experiences } from "@/data/experience";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  if (!experiences || experiences.length === 0) return null;

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/60 dark:border-slate-800/80 shadow-xl">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200/60 dark:border-slate-800">
        <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400">
          <Briefcase className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            Work experience & roles
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {experiences.map((item, index) => (
          <div
            key={index}
            className="glass-panel rounded-2xl p-5 border border-slate-200/50 dark:border-slate-800/60"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950/60 text-sky-300 text-xs font-semibold">
                <Calendar className="w-3.5 h-3.5" />
                {item.startDate} — {item.endDate}
              </span>
            </div>
            <p className="text-sm font-medium text-sky-300 mb-2">
              {item.company}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
