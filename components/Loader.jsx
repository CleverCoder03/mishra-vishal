"use client";

import { useState, useEffect } from "react";
import gsap from "gsap";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 30; // simulate progress
        return next >= 100 ? 100 : next;
      });
    }, 200);

    if (progress >= 100) {
      clearInterval(interval);
      gsap.to('.loader-wrapper', {
        yPercent: -100,
        duration: 0.8,
        ease: 'power2.out',
        onComplete: onFinish, // let parent know loader is done
      });
    }

    return () => clearInterval(interval);
  }, [progress, onFinish]);

  return (
    <div className="fixed inset-0 py-14 px-8 md:py-18 md:px-14 bg-black text-white z-9999 loader-wrapper">
      <div className="uppercase font-ppneune-medium text-3xl w-3 md:w-2xl md:text-4xl">
        <h1>VISHAL MISHRA</h1>
        <h1>portfolio &copy;2026</h1>
      </div>
      <div className="absolute bottom-0 right-0 py-14 px-8 md:py-18 md:px-14">
        <span className="text-4xl md:text-5xl lg:text-8xl font-bold">{Math.floor(progress)}</span>
      </div>
    </div>
  );
}