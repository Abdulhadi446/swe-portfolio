"use client";

import { useEffect, useRef, ReactNode } from "react";

export function StaggerChildren({ children, className = "", staggerDelay = 0.1 }: { children: ReactNode; className?: string; staggerDelay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const children = el.children;
          Array.from(children).forEach((child, i) => {
            const childEl = child as HTMLElement;
            childEl.style.opacity = "1";
            childEl.style.transform = "translateY(0)";
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function StaggerItem({ children, className = "", index = 0 }: { children: ReactNode; className?: string; index?: number }) {
  return (
    <div
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(20px)",
        transition: `opacity 0.4s ease ${index * 0.1}s, transform 0.4s ease ${index * 0.1}s`,
      }}
    >
      {children}
    </div>
  );
}
