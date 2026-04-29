import { Component } from "./ui/etheral-shadow";

const Hero = () => {
  return (
    <>
      <div className="absolute inset-0">
        <Component
          color="rgba(128, 128, 128, 0.5)"
          animation={{ scale: 100, speed: 90 }}
          noise={{ opacity: 1, scale: 1.2 }}
          sizing="fill"
          className="bg-black"
        />
      </div>
      <div>helo world</div>
    </>
  );
};

export default Hero;
