"use client";

import { motion } from "motion/react";

export default function Page() {
  return (
    <motion.div
      animate={{ x: 100, transition: { duration: 5 } }}
      className="h-20 aspect-square bg-blue-400"
    />
  );
}
