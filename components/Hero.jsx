import Image from "next/image";
import globeSVG from "@/public/assets/globe.svg";
import { Component } from "./ui/etheral-shadow";
import Button from "./Button";

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
      <div className="relative min-h-dvh px-5 md:px-12 xl:px-18 pb-12 lg:pb-18 text-white flex flex-col justify-end">
        <div className="flex flex-col gap-15">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-5">
            <div className="text-6xl lg:text-8xl xl:text-9xl">
              <h1>Freelance</h1>
              <h1>Web Developer</h1>
            </div>
            <div className="flex items-center gap-2 text-lg md:text-xl">
              <Image src={globeSVG} alt="Globe" className="invert size-5" />
              Mumbai, India
            </div>
          </div>
          <hr />
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5">
            <h1 className="text-lg md:text-xl">
              I&apos;ll help you make a lasting impression online.
            </h1>
            <Button className={"bg-white text-black hover:bg-gray-200"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
