---
title: "Understanding Server Components in Next.js"
date: "2024-06-10"
excerpt: "A deep dive into React Server Components and how they change the way we think about rendering."
tags: ["React", "Next.js", "Performance"]
---

React Server Components (RSC) represent a fundamental shift in how we think about rendering web applications. Let me break down what they are and why they matter.

## The Problem

Traditional React apps ship all components to the client. Even components that just display data need to be hydrated, consuming bandwidth and CPU.

## Server Components to the Rescue

Server Components run only on the server. They can:
- Directly access databases and file systems
- Keep server-only code out of the client bundle
- Stream content progressively

```tsx
// This component runs ONLY on the server
async function BlogPost({ id }: { id: string }) {
  const post = await db.posts.findById(id);
  return <Article content={post.content} />;
}
```

## The Mental Model

Think of your component tree as having two layers:
1. **Server layer** - Data fetching, heavy dependencies, secrets
2. **Client layer** - Interactivity, state, browser APIs

## When to Use "use client"

Only add `"use client"` when you need:
- Event handlers (`onClick`, `onChange`)
- State (`useState`, `useReducer`)
- Browser-only APIs (`window`, `localStorage`)
- Custom hooks that depend on state

## Performance Wins

In our app, moving to server components reduced:
- JavaScript bundle size: 40% reduction
- Time to interactive: 35% faster
- Core Web Vitals: All green
