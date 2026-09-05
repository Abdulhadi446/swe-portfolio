import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return { title: `${post.title} | John Doe`, description: post.excerpt };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <article className="max-w-3xl mx-auto">
        <header className="mb-10">
          <div className="flex items-center gap-3 text-xs text-zinc-500 mb-4 font-mono">
            <time>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">{post.title}</h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs font-mono text-blue-400 bg-blue-400/10 border border-blue-400/20 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </header>
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <div
            className="text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-6 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-zinc-900 [&>h2]:dark:text-white [&>h2]:mt-10 [&>h2]:mb-4 [&>p]:text-base [&>ul]:list-disc [&>ul]:pl-6 [&>li]:text-zinc-600 [&>li]:dark:text-zinc-400 [&>code]:text-sm [&>code]:bg-zinc-100 [&>code]:dark:bg-zinc-800 [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded [&>pre]:bg-zinc-900 [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto [&>pre>code]:bg-transparent [&>pre>code]:text-zinc-300"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <a href="/blog/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to all posts
          </a>
        </div>
      </article>
    </main>
  );
}
