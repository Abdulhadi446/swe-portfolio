"use client";

import { useEffect, useRef } from "react";

export default function TextReveal({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const spans = el.querySelectorAll("span > span");
    spans.forEach((span) => {
      (span as HTMLElement).style.transform = "translateY(100%)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          spans.forEach((span, i) => {
            setTimeout(() => {
              (span as HTMLElement).style.transform = "translateY(0)";
            }, i * 80);
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <span
            className="inline-block"
            style={{
              transition: "transform 0.4s ease",
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}
