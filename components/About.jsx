import Image from "next/image";
import React from "react";
import Button from "./Button";

const About = () => {
  return (
    <div id="about" className="px-5 py-30 lg:py-40 md:px-12 xl:px-18 border-b border-gray-400">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex lg:flex-col lg:w-1/2 justify-between">
          <h1 className="uppercase font-semibold flex items-center gap-2">
            ■ about me
          </h1>
          <div className="relative w-16 h-16 md:w-22 md:h-22 lg:w-30 lg:h-30 xl:w-36 xl:h-36 overflow-hidden rounded-sm">
            <Image
              src="/assets/profile-pic.jpg"
              alt="Vishal Mishra"
              fill
              sizes="(max-width: 768px) 64px,
               (max-width: 1024px) 88px,
               (max-width: 1280px) 120px,
               144px"
              className="object-cover scale-110"
            />
          </div>
        </div>
        <div className="flex flex-col lg:w-1/2 gap-10">
          <div className="text-3xl lg:text-4xl font-medium w-2/3">
            <h1>Hi, I&apos;m Vishal.</h1>
            <h1>Web developer from Mumbai, India.</h1>
          </div>
          <p className="text-lg md:text-xl lg:w-2/3">
            What started as a hobby is now my job. I guide you from the initial
            idea to the finished website, creating solutions that perfectly suit
            you and your project or business. I develop visually appealing and
            technically flawless websites, whether it&apos;s a small business
            card or a larger web project.
          </p>
          <Button
            className={
              "bg-neutral-100 hover:text-white hover:bg-[#222] lg:px-6 lg:py-4 lg:text-lg lg:mt-4"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default About;
