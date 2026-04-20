"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

type RevealAs = "div" | "section" | "span" | "li" | "article" | "header" | "footer";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: RevealAs;
  once?: boolean;
};

const motionMap = {
  div: motion.div,
  section: motion.section,
  span: motion.span,
  li: motion.li,
  article: motion.article,
  header: motion.header,
  footer: motion.footer
} as const;

/**
 * Tasteful, reusable section reveal.
 * Respects prefers-reduced-motion.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
  once = true
}: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = motionMap[as];

  const variants: Variants = reduce
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }
    : {
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0 }
      };

  return (
    <Tag
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      variants={variants}
      transition={{
        duration: 0.8,
        ease: [0.2, 0.8, 0.2, 1],
        delay
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}
