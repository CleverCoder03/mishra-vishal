"use client";

import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";

const Button = ({ className }) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const root = document.documentElement; // the <html> tag
    if (toggle) {
      document.body.style.overflow = "hidden";
      root.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      root.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      root.style.overflow = "";
    };
  }, [toggle]);

  return (
    <>
      <button
        onClick={() => setToggle(true)}
        className={`w-fit px-5 py-2.5 font-semibold transition-colors cursor-pointer text-black ${className || ""}`}
      >
        Start Project
      </button>

      {toggle && (
        <div className="fixed inset-0 z-200 bg-black/80 flex items-center justify-end">
          {/* Close on backdrop click */}
          <div
            className="absolute inset-0 backdrop-blur-[2px] pointer-events-auto"
            onClick={() => setToggle(false)}
          />

          {/* 2. CONTENT: Ensure h-screen/h-dvh and overflow-y-auto */}
          <div 
            data-lenis-prevent
            className="relative h-screen md:h-dvh w-full lg:w-1/2 z-10 bg-white flex flex-col py-18 lg:py-10 px-6 md:px-12 xl:px-16 overflow-y-auto overscroll-contain"
          >
            
            {/* Header row */}
            <div className="flex items-center justify-end mb-8 shrink-0">
              {/* <span className="tracking-[0.2em] uppercase text-xs font-medium text-neutral-800">
                New Inquiry
              </span> */}
              <button
                onClick={() => setToggle(false)}
                className="text-lg lg:text-xl font-medium text-neutral-800 hover:text-black transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>

            {/* Title block */}
            <div className="mb-10 border-b border-neutral-100 pb-10">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-black leading-tight mb-4">
                Request a Project
              </h1>
              <p className="text-base text-neutral-500 leading-relaxed max-w-md">
                Tell me about your project and I&apos;ll get back to you within
                24 hours. Prefer a direct line?{" "}
                <a
                  href="mailto:clevercoder0307@gmail.com"
                  className="text-black underline underline-offset-4 hover:text-neutral-600 transition-colors"
                >
                  Email
                </a>{" "}
                or{" "}
                <a
                  href="https://wa.me/+917249084224"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black underline underline-offset-4 hover:text-neutral-600 transition-colors"
                >
                  WhatsApp
                </a>{" "}
                works too.
              </p>
            </div>

            {/* Form area */}
            <ContactForm />
          </div>
        </div>
      )}
    </>
  );
};

export default Button;
