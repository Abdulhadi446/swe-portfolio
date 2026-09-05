"use client";

import Link from "next/link";
import { type BlogPost } from "@/lib/blog";
import FadeIn from "@/components/animations/FadeIn";

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <FadeIn delay={index * 0.1}>
      <Link href={`/blog/${post.slug}/`}>
        <article
          className="group block bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all duration-300"
        >
          <div className="flex items-center gap-3 text-xs text-zinc-500 mb-3 font-mono">
            <time>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
          <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
            {post.title}
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 text-xs font-mono text-zinc-400 bg-zinc-800 rounded">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-4 text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
            Read more
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </div>
        </article>
      </Link>
    </FadeIn>
  );
}

export default function BlogContent({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-zinc-500 text-lg">No posts yet. Check back soon!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((post, i) => (
        <BlogCard key={post.slug} post={post} index={i} />
      ))}
    </div>
  );
}
