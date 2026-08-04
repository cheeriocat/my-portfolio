"use client";
import React from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { FolderKanban, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const FeaturedProjects = () => {
  const featured = projects.slice(0, 3);

  return (
    <div className="space-y-6 w-full">
      <ScrollReveal>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400">
              <FolderKanban className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Featured Projects
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 font-medium">
                Selected recent work & open-source applications
              </p>
            </div>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-950/60 hover:bg-sky-500 hover:text-white text-sky-300 border border-sky-800/60 text-xs font-bold self-start sm:self-auto transition-all shadow-xs"
          >
            <span>View All ({projects.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((project, index) => (
          <ScrollReveal key={project.id} delay={index * 120}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
