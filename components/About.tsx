const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "Git",
  "REST APIs",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-zinc-400 leading-relaxed mb-6">
              I&apos;m a software engineer with a passion for building products that
              make a difference. With experience in full-stack development, I
              enjoy working across the entire stack to deliver polished
              applications.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing what I&apos;ve learned
              through blog posts and community talks.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Technologies I work with
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm font-mono text-blue-400 bg-blue-400/10 border border-blue-400/20 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
