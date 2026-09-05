"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-zinc-400 mb-10">
          Have a question or want to work together? Drop me a message.
        </p>

        {submitted ? (
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-8">
            <p className="text-green-400 text-lg font-medium">
              Thanks! Your message has been noted.
            </p>
            <p className="text-zinc-500 mt-2">
              You can reach me directly at{" "}
              <a
                href="mailto:john@example.com"
                className="text-blue-400 hover:underline"
              >
                john@example.com
              </a>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-zinc-400 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-400 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-zinc-400 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
