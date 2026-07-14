"use client";

import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export default function GlassCard({ children, className = "", delay = 0, hover = true }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5 } : {}}
      className={`glass-card rounded-2xl ${/(?:^|\s)p(?:[xytrbl])?-/.test(className) ? '' : 'p-md'} shadow-sm transition-shadow hover:shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
}
