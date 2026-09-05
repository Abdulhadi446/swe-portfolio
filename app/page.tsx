"use client";

import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import TextReveal from "@/components/animations/TextReveal";

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
  "Python", "PostgreSQL", "MongoDB", "Docker", "AWS", "Git", "REST APIs",
];

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Tech Corp",
    period: "2023 - Present",
    description: "Leading development of microservices architecture. Reduced API response times by 40% through optimization and caching strategies.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    role: "Software Engineer",
    company: "Startup Inc",
    period: "2021 - 2023",
    description: "Built and maintained core platform features serving 100k+ users. Implemented CI/CD pipelines and improved test coverage to 90%.",
    technologies: ["React", "TypeScript", "Docker", "MongoDB"],
  },
  {
    role: "Junior Developer",
    company: "Digital Agency",
    period: "2019 - 2021",
    description: "Developed responsive web applications for clients across various industries. Collaborated with design teams to implement pixel-perfect UIs.",
    technologies: ["JavaScript", "React", "Node.js", "Git"],
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-3xl text-center">
          <FadeIn delay={0.1}>
            <p className="text-blue-600 dark:text-blue-400 font-mono text-sm mb-4 tracking-wider uppercase">
              Hello, I&apos;m
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-5xl sm:text-7xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
              John Doe
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <h2 className="text-2xl sm:text-3xl text-zinc-500 dark:text-zinc-400 mb-8 font-light">
              <TextReveal text="Software Engineer" />
            </h2>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              I build scalable web applications and craft clean, maintainable code.
              Passionate about creating exceptional digital experiences.
            </p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <div className="flex gap-4 justify-center">
              <Link
                href="/projects"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors shadow-lg shadow-blue-600/25"
              >
                View My Work
              </Link>
              <a
                href="#contact"
                className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 hover:border-zinc-500 dark:hover:border-zinc-500 text-zinc-600 dark:text-zinc-300 rounded-lg font-medium transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.6}>
            <div className="mt-16 flex gap-6 justify-center">
              {[
                { href: "https://github.com", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
                { href: "https://linkedin.com", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                { href: "https://twitter.com", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
              ].map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d={s.icon} /></svg>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-12 text-center">About Me</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <FadeIn direction="left">
              <div>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                  I&apos;m a software engineer with a passion for building products that
                  make a difference. With experience in full-stack development, I
                  enjoy working across the entire stack to deliver polished applications.
                </p>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  When I&apos;m not coding, you can find me exploring new technologies,
                  contributing to open-source projects, or sharing what I&apos;ve learned
                  through blog posts and community talks.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
                  Technologies I work with
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-400/10 border border-blue-200 dark:border-blue-400/20 rounded-md"
                      style={{
                        opacity: 0,
                        transform: "translateY(10px)",
                        animation: `fadeInUp 0.4s ease ${0.3 + i * 0.05}s forwards`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-12 text-center">Experience</h2>
          </FadeIn>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <FadeIn key={index} delay={index * 0.15}>
                <div className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-800 hover:border-blue-500 transition-colors">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-zinc-950" />
                  <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-sm dark:shadow-none">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{exp.role}</h3>
                      <span className="text-sm text-zinc-400 font-mono">{exp.period}</span>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{exp.company}</p>
                    <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 text-xs font-mono text-zinc-500 bg-zinc-100 dark:bg-zinc-800 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Get In Touch</h2>
            <p className="text-zinc-500 dark:text-zinc-400 mb-10">
              Have a question or want to work together? Drop me a message.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const data = Object.fromEntries(new FormData(form));
        const subject = encodeURIComponent(`Portfolio Contact from ${data.name}`);
        const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`);
        window.open(`mailto:hello@johndoe.dev?subject=${subject}&body=${body}`, "_blank");
      }}
      className="space-y-6 text-left"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-2">Name</label>
        <input type="text" id="name" name="name" required className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-2">Email</label>
        <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition-colors" placeholder="your@email.com" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-2">Message</label>
        <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Your message..." />
      </div>
      <button type="submit" className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors shadow-lg shadow-blue-600/25">
        Open Email Client
      </button>
    </form>
  );
}
