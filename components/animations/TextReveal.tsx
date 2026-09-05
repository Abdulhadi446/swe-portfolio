"use client";

import { motion } from "framer-motion";

export default function TextReveal({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
