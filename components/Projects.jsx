import Image from "next/image";
import { projects } from "../constants/project";

const Projects = () => {
  return (
    <section className="px-5 py-30 lg:py-40 md:px-12 xl:px-18 border-b border-gray-400">
      <div>
        <h1 className="uppercase font-semibold flex items-center gap-2">
          ■ projects
        </h1>
      </div>

      {/* Always 2 columns — scales by gap and inner padding only */}
      <div className="grid grid-cols-2 gap-x-6 md:gap-x-10 lg:gap-x-12 xl:gap-x-16  gap-y-8 md:gap-y-12 lg:gap-y-15 xl:gap-y-20 mt-10 md:mt-16 lg:mt-20">
        {[...projects].reverse().map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            {/* Card */}
            <div className="relative aspect-4/3 sm:aspect-16/10 overflow-hidden rounded-md">
              {/* Blurred background image */}
              <div
                className="absolute inset-0 bg-cover bg-center scale-110 blur-sm transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${project.bgImage})` }}
                aria-hidden="true"
              />
              {/* Subtle dark veil so the cover image pops */}
              <div
                className="absolute inset-0 bg-black/10"
                aria-hidden="true"
              />

              {/* Centered cover / screenshot */}
              <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-6 md:p-10 lg:-14 xl:p-16">
                <div className="relative w-full h-full">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    priority={false} // keep false unless it's above the fold
                    sizes="(max-width: 640px) 100vw,
             (max-width: 768px) 90vw,
             (max-width: 1024px) 80vw,
             70vw"
                    className="object-cover rounded-sm sm:rounded-md shadow-2xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Optional badge (top-right) */}
              {project.badge && (
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 bg-white rounded shadow-md px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2">
                  <span className="text-[10px] sm:text-xs md:text-sm font-medium text-black whitespace-nowrap">
                    {project.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Caption */}
            <div className="mt-2 sm:mt-3 md:mt-4">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-black">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-0.5 sm:mt-1">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
