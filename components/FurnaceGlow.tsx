"use client";

import { motion } from "framer-motion";

export default function FurnaceGlow() {
  return (
    <motion.div
      className="furnace-glow"
      aria-hidden="true"
      animate={{ opacity: [0.8, 1, 0.8] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
    />
  );
}
