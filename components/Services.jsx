"use client";

import { services } from "../constants/services";
import CharReveal from "./CharReveal";
import { motion } from "motion/react";

const Services = () => {
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
    <section
      id="services"
      className="px-5 py-30 lg:py-40 md:px-12 xl:px-18 border-b bg-[#1a1a1a] text-white border-[#666]"
    >
      <div>
        <h1 className="uppercase font-semibold flex items-center gap-2">
          ■ my services
        </h1>
      </div>

      <div className="md:w-2/3 lg:w-1/2 mt-10">
        <CharReveal staggerAmount={0.02}>
          <h2 className="text-2xl lg:text-3xl font-medium">
            Web design, development, SEO and maintenance. I do that for you so
            you can focus on your core business.
          </h2>
        </CharReveal>
      </div>

      {/* Animated Services Grid */}
      <motion.div
        className="pt-25 lg:pt-30 grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-y-22 gap-x-22 xl:gap-x-30"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={itemVariants}
            className="will-change-transform"
          >
            <h3 className="text-2xl lg:text-3xl font-medium">
              <span className="text-[#666]">0{service.id}.</span>{" "}
              {service.title}
            </h3>

            <hr className="my-6 border-[#666]" />

            <p className="lg:text-lg mt-4">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;