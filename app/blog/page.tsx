import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogContent from "@/components/BlogContent";

export const metadata: Metadata = {
  title: "Blog | John Doe",
  description: "Thoughts on software engineering, architecture, and best practices.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">Blog</h1>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto">
            Writing about software engineering, system design, and lessons learned building products.
          </p>
        </div>
        <BlogContent posts={posts} />
      </div>
    </main>
  );
}
