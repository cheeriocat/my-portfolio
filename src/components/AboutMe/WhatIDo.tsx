"use client";
import React, { useState } from "react";
import { skills } from "@/data/skills";
import { Code, Layout, Wrench, Database, Layers } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const categoryIcons: Record<string, React.ElementType> = {
  "Web Development": Code,
  "Frameworks": Layout,
  "Tools": Wrench,
  "Database": Database,
};

const WhatIDo = () => {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", ...skills.map((s) => s.type)];

  const filteredSkills =
    activeTab === "All"
      ? skills
      : skills.filter((s) => s.type === activeTab);

  return (
    <ScrollReveal delay={100}>
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-300/80 dark:border-slate-800/80 shadow-xl h-full flex flex-col justify-between">
        {/* Header */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-300/80 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  Skills & Expertise
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 font-medium">
                  Technologies, languages & tools I work with
                </p>
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-300/70 dark:border-slate-700/50">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                    activeTab === cat
                      ? "bg-sky-500 text-white shadow-md shadow-sky-500/30"
                      : "text-slate-700 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {filteredSkills.map((group, index) => {
              const IconComponent = categoryIcons[group.type] || Code;
              return (
                <div
                  key={index}
                  className="glass-panel rounded-2xl p-5 border border-slate-300/80 dark:border-slate-800/60 hover:border-sky-400/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <div className="p-2 rounded-lg bg-sky-950/60 text-sky-300">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                      {group.type}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-slate-100 dark:bg-slate-800/90 text-slate-900 dark:text-gray-200 border border-slate-300/80 dark:border-slate-700/60 hover:bg-sky-500 hover:text-white dark:hover:bg-sky-500 dark:hover:text-white hover:scale-105 transition-all duration-200 cursor-default shadow-2xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default WhatIDo;
