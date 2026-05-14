"use client";
import Image from "next/image";
import { motion } from "motion/react";

const AboutImage = () => {
  return (
    <motion.div
      initial={{ clipPath: "inset(100% 0 0 0)" }}
      whileInView={{ clipPath: "inset(0% 0 0 0)" }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        ease: [0.83, 0, 0.17, 1],
        delay: 0.3,
      }}
      className="relative w-16 h-16 md:w-22 md:h-22 lg:w-30 lg:h-30 xl:w-36 xl:h-36 overflow-hidden rounded-sm will-change-[clip-path]"
    >
      <motion.div
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.83, 0, 0.17, 1],
          delay: 0.3,
        }}
        className="w-full h-full"
      >
        <Image
          src="/assets/profile-pic.jpg"
          alt="Vishal Mishra"
          fill
          sizes="(max-width: 768px) 64px,
      (max-width: 1024px) 88px,
      (max-width: 1280px) 120px,
      144px"
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default AboutImage;
