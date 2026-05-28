import { projects } from "@/data/projects";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="p-0 lg:pl-20 lg:pr-20 lg:pt-10">
      <h1 className="text-2xl md:text-3xl font-bold border-l-4 border-blue-500 pl-3 mb-8 text-gray-900 dark:text-white">
        All Projects
      </h1>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-md transition-shadow bg-white/50 dark:bg-gray-800/50"
          >
            <h3 className="font-bold text-base text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {project.subTitle}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-2 flex-wrap">
              {project.links.map((link, i) => (
                <Link
                  key={i}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    {link.name}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
