"use client";
import { motion } from "motion/react";

const LineAnimation = () => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{
        duration: 1.2,
        ease: [0.83, 0, 0.17, 1],
        delay: 0.2,
      }}
      className="h-px w-full bg-white origin-left"
    />
  );
};

export default LineAnimation;
