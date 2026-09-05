import type { Metadata } from "next";
import ProjectsContent from "@/components/ProjectsContent";

export const metadata: Metadata = {
  title: "Projects | John Doe",
  description: "A collection of projects I've built.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">Projects</h1>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto">
            A curated selection of projects spanning full-stack, frontend, backend, and infrastructure.
          </p>
        </div>
        <ProjectsContent />
      </div>
    </main>
  );
}
