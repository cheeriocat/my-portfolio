"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ExternalLink, X, Eye, Code2, Cpu, Terminal, Smartphone, Globe } from "lucide-react";
import { BsGithub } from "react-icons/bs";

interface ProjectCardProps {
  project: Project;
}

const getCategoryIcon = (category: string | string[]) => {
  const primaryCat = Array.isArray(category) ? category[0] : category;
  switch (primaryCat) {
    case "AI & Tools":
      return Cpu;
    case "Java/Desktop":
      return Terminal;
    case "Mobile":
      return Smartphone;
    default:
      return Globe;
  }
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const CategoryIcon = getCategoryIcon(project.category);
  const categoryLabel = Array.isArray(project.category)
    ? project.category.join(" & ")
    : project.category;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="group glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-800/80 flex flex-col justify-between hover:shadow-2xl hover:border-sky-400/40 transition-all duration-300 h-full relative overflow-hidden">
        {/* Top Header Row with Icon & Category */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
              <CategoryIcon className="w-5 h-5" />
            </div>
            <span className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-slate-800/90 text-sky-300 border border-sky-400/30 shadow-xs">
              {categoryLabel}
            </span>
          </div>

          {/* Quick View Details Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white hover:bg-sky-500 transition-colors border border-slate-700/60 cursor-pointer shadow-xs"
            title="Quick View Details"
            aria-label="Quick View Details"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Card Main Info */}
        <div className="flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-1.5 sm:space-y-2">
            <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-sky-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs font-bold text-sky-300">
              {project.subTitle}
            </p>
            <p className="text-xs sm:text-sm text-gray-300 font-medium line-clamp-3 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 pt-2">
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-[11px] sm:text-xs rounded-lg bg-sky-950/60 text-sky-200 font-bold border border-sky-800/50"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-800/80">
              {project.links.map((link, i) => {
                const isGithub = link.name.toLowerCase().includes("github");
                return (
                  <Link
                    key={i}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                      isGithub
                        ? "bg-slate-800 text-white hover:bg-sky-500 shadow-xs"
                        : "bg-sky-500 text-white hover:bg-sky-600 shadow-md shadow-sky-500/30"
                    }`}
                  >
                    {isGithub ? (
                      <BsGithub className="w-3.5 h-3.5" />
                    ) : (
                      <ExternalLink className="w-3.5 h-3.5" />
                    )}
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Image-Free Quick View Modal Rendered via React Portal */}
      {isModalOpen &&
        mounted &&
        createPortal(
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
            {/* Backdrop click to close */}
            <div
              className="fixed inset-0"
              onClick={() => setIsModalOpen(false)}
            />

            {/* Modal Dialog Card */}
            <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700/80 shadow-2xl rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-5 my-auto">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-gray-300 hover:text-white hover:bg-red-500 transition-colors cursor-pointer z-20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-400">
                  <CategoryIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-500 text-white shadow-md">
                    {categoryLabel}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <p className="text-xs sm:text-sm font-bold text-sky-300">
                  {project.subTitle}
                </p>
                <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Technologies Used
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-xl bg-sky-950/70 text-sky-200 font-bold border border-sky-800/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-slate-800">
                {project.links.map((link, i) => (
                  <Link
                    key={i}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-sky-500/30"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
