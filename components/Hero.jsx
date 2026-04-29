import Image from "next/image";
import globeSVG from "../assets/globe.svg";
import { Component } from "./ui/etheral-shadow";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Component
          color="rgba(128, 128, 128, 0.5)"
          animation={{ scale: 100, speed: 90 }}
          noise={{ opacity: 1, scale: 1.2 }}
          sizing="fill"
          className="bg-black"
        />
      </div>

      {/* Foreground */}
      <div className="relative min-h-dvh px-5 md:px-12 xl:px-18 pb-12 text-white flex flex-col justify-end">
        <div className="flex flex-col gap-15">
          <div>
            <div className="text-6xl">
              <h1>Freelance</h1>
              <h1>Web Developer</h1>
            </div>
            <div className="flex items-center gap-2 mt-4 text-lg md:text-xl">
              <Image src={globeSVG} alt="Globe" className="invert size-5" />
              Mumbai, India
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-5">
            <h1 className="text-lg md:text-xl">
              I&apos;ll help you make a lasting impression online.
            </h1>
            <button className="bg-white text-black w-fit px-5 py-2.5 font-semibold hover:bg-gray-200 transition-colors">
              Start Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
