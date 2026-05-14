"use client";

import { sequences } from "../constants/sequences";
import CharReveal from "./CharReveal";
import { motion } from "motion/react";

const Sequence = () => {
  // Parent stagger animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Individual item animation
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="px-5 py-30 lg:py-40 md:px-12 xl:px-18 border-b bg-[#1a1a1a] text-white border-[#666]">
      <div>
        <h1 className="uppercase font-semibold flex items-center gap-2">
          ■ Sequence
        </h1>
      </div>

      <div className="md:w-2/3 lg:w-1/2 mt-10">
        <CharReveal staggerAmount={0.02}>
          <h2 className="text-2xl lg:text-3xl font-medium">
            You should know exactly how a project works with me, here you will
            find an overview of all the important phases and deadlines.
          </h2>
        </CharReveal>
      </div>

      {/* Animated Sequence List */}
      <motion.div
        className="pt-25 lg:pt-30 flex flex-col gap-16 lg:gap-22"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {sequences.map((sequence) => (
          <motion.div
            key={sequence.id}
            variants={itemVariants}
            className="border-t border-[#666] pt-5 md:pt-8 flex flex-col md:justify-between md:flex-row md:items-start gap-3 md:gap-6 will-change-transform"
          >
            <div className="lg:flex lg:flex-1">
              <h2 className="text-[#666] text-lg md:text-xl font-medium shrink-0">
                {String(sequence.id).padStart(2, "0")}.
              </h2>

              <h3 className="text-2xl md:text-xl lg:w-full lg:text-center font-medium shrink-0">
                {sequence.title}
              </h3>
            </div>

            <p className="text-lg md:text-xl text-[#ccc] md:w-[50vw] lg:w-[45vw] xl:w-[40vw]">
              {sequence.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Sequence;