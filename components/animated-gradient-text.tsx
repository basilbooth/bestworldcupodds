"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AnimatedGradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
