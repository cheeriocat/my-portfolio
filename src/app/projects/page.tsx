"use client";
import React, { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { FolderKanban, Search, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "SysAdmin & Cloud", "Web", "Java/Desktop", "Mobile", "AI & Tools"];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "All" ||
      (Array.isArray(project.category)
        ? project.category.includes(activeCategory as any)
        : project.category === activeCategory);
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8 w-full">
      <ScrollReveal>
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-300/80 dark:border-slate-800/80 shadow-xl space-y-4">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-400">
              <FolderKanban className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                Projects Showcase
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 font-medium">
                A comprehensive archive of software, web applications, and mobile projects
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-between items-center pt-4 border-t border-slate-200/80 dark:border-slate-800">
            <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-300/70 dark:border-slate-700/50 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                    activeCategory === cat
                      ? "bg-sky-500 text-white shadow-md shadow-sky-500/30"
                      : "text-slate-700 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/60 shadow-xs"
              />
            </div>
          </div>
        </div>
      </ScrollReveal>

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <ScrollReveal>
          <div className="glass-card rounded-3xl p-12 text-center space-y-3 border border-slate-300/80 dark:border-slate-800/80">
            <Sparkles className="w-8 h-8 text-sky-400 mx-auto animate-pulse" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              No matching projects found
            </h3>
            <p className="text-xs text-slate-600 dark:text-gray-400 font-medium">
              Try adjusting your search query or selecting a different category.
            </p>
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}
