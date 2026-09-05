"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects, categories, type Project } from "@/lib/projects";
import FadeIn from "@/components/animations/FadeIn";

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300"
    >
      {project.featured && (
        <div className="absolute -top-3 right-4 px-2 py-0.5 text-xs font-medium bg-blue-600 text-white rounded-full">
          Featured
        </div>
      )}
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <span className="text-xs font-mono text-zinc-500">{project.year}</span>
      </div>
      <p className="text-zinc-400 text-sm leading-relaxed mb-4">
        {project.description}
      </p>
      <p className="text-zinc-500 text-xs leading-relaxed mb-4">
        {project.longDescription}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span key={tag} className="px-2 py-0.5 text-xs font-mono text-blue-400 bg-blue-400/10 rounded">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Code
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function ProjectsContent() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const filtered = activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <FadeIn>
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                  : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
              }`}
            >
              {cat.label}
              <span className="ml-1.5 text-xs opacity-60">
                ({cat.id === "all" ? projects.length : projects.filter((p) => p.category === cat.id).length})
              </span>
            </button>
          ))}
        </div>
      </FadeIn>

      <motion.div layout className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
