const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Tech Corp",
    period: "2023 - Present",
    description:
      "Leading development of microservices architecture. Reduced API response times by 40% through optimization and caching strategies.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    role: "Software Engineer",
    company: "Startup Inc",
    period: "2021 - 2023",
    description:
      "Built and maintained core platform features serving 100k+ users. Implemented CI/CD pipelines and improved test coverage to 90%.",
    technologies: ["React", "TypeScript", "Docker", "MongoDB"],
  },
  {
    role: "Junior Developer",
    company: "Digital Agency",
    period: "2019 - 2021",
    description:
      "Developed responsive web applications for clients across various industries. Collaborated with design teams to implement pixel-perfect UIs.",
    technologies: ["JavaScript", "React", "Node.js", "Git"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-zinc-800 hover:border-blue-500 transition-colors"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-zinc-950" />
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-zinc-500 font-mono">
                    {exp.period}
                  </span>
                </div>
                <p className="text-blue-400 font-medium mb-3">{exp.company}</p>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono text-zinc-400 bg-zinc-800 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
