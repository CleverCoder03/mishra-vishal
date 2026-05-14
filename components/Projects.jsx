"use client";
import Image from "next/image";
import { projects } from "../constants/project";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-5 py-30 lg:py-40 md:px-12 xl:px-18 border-b border-gray-400"
    >
      <div>
        <h1 className="uppercase font-semibold flex items-center gap-2">
          ■ projects
        </h1>
      </div>

      {/* Always 2 columns — scales by gap and inner padding only */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-10 lg:gap-x-12 xl:gap-x-16  gap-y-8 md:gap-y-12 lg:gap-y-15 xl:gap-y-20 mt-10 md:mt-16 lg:mt-20">
        {[...projects].reverse().map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <motion.div
              initial={{
                clipPath: "inset(100% 0% 0% 0%)",
                y: 80,
              }}
              whileInView={{
                clipPath: "inset(0% 0% 0% 0%)",
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                ease: [0.83, 0, 0.17, 1],
                delay: project.id * 0.05,
              }}
              className="relative aspect-4/3 sm:aspect-16/10 overflow-hidden rounded-md will-change-transform"
            >
              {/* Background Blur */}
              <motion.div
                initial={{ scale: 1.2, filter: "blur(10px)" }}
                whileInView={{ scale: 1, filter: "blur(4px)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.4,
                  ease: [0.83, 0, 0.17, 1],
                }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.bgImage})` }}
                aria-hidden="true"
              />

              {/* Dark Overlay */}
              <div
                className="absolute inset-0 bg-black/10"
                aria-hidden="true"
              />

              {/* Main Image */}
              <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-6 md:p-10 lg:p-14 xl:p-16">
                <motion.div
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.4,
                    ease: [0.83, 0, 0.17, 1],
                  }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    priority={false}
                    sizes="(max-width: 640px) 100vw,
          (max-width: 768px) 90vw,
          (max-width: 1024px) 80vw,
          70vw"
                    className="object-cover rounded-sm sm:rounded-md shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </motion.div>
              </div>

              {/* Badge */}
              {project.badge && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0.83, 0, 0.17, 1],
                  }}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 bg-white rounded shadow-md px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2"
                >
                  <span className="text-[10px] sm:text-xs md:text-sm font-medium text-black whitespace-nowrap">
                    {project.badge}
                  </span>
                </motion.div>
              )}
            </motion.div>

            {/* Caption */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.83, 0, 0.17, 1],
              }}
              className="mt-2 sm:mt-3 md:mt-4"
            >
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-black">
                {project.title}
              </h3>

              <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-0.5 sm:mt-1">
                {project.description}
              </p>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
