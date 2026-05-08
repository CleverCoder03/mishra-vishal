"use client";

import { useState } from "react";
import { faqData } from "../constants/faq";

const Faq = () => {
  // State to keep track of the currently open accordion item's ID.
  // We initialize it to null, so all items are closed by default.
  const [openId, setOpenId] = useState(null);

  // This function handles the click event on an accordion item.
  const handleToggle = (id) => {
    // If the clicked item is already open, close it by setting state to null.
    // Otherwise, set the state to the ID of the clicked item.
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="px-5 py-30 lg:py-40 md:px-12 xl:px-18 border-b bg-[#1a1a1a] text-white border-[#666]">
      <div>
        <h1 className="uppercase font-semibold flex items-center gap-2">
          ■ FAQ
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-25 lg:gap-0">
        <div className="lg:w-1/2 mt-10">
          <h2 className="md:w-3/4 text-2xl lg:text-3xl font-medium">
            Perhaps you have a few questions, Let&apos;s start together. Here
            you&apos;ll find the most important answers to frequently asked
            questions.
          </h2>
        </div>

        <div className="lg:w-1/2">
          {faqData.map((item) => {
            // Check if the current item is the one that's open
            const isOpen = item.id === openId;

            return (
              <div
                key={item.id}
                className="py-8 lg:py-12 border-b border-[#666] cursor-pointer w-full"
                onClick={() => handleToggle(item.id)}
                aria-expanded={isOpen}
                aria-controls={`accordion-content-${item.id}`}
              >
                <div>
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      {/* <div className="hidden lg:block">{`0${item.id}`}</div> */}
                      <div className="text-xl lg:text-2xl">
                        <div className="flex justify-between items-center">
                          <h1>{item.title}</h1>
                          {/* Plus/Minus Icon */}
                          <div className="relative size-4 shrink-0">
                            {/* Horizontal line (always visible) */}
                            <div className="w-full border h-px bg-black absolute top-1/2 -translate-y-1/2"></div>
                            {/* Vertical line (rotates to become horizontal, forming a minus sign) */}
                            <div
                              className={`h-full border w-px bg-black absolute left-1/2 -translate-x-1/2 transition-transform duration-300 ease-in-out ${
                                isOpen ? "rotate-90" : "rotate-0"
                              }`}
                            ></div>
                          </div>
                        </div>
                        <div
                          id={`accordion-content-${item.id}`}
                          className={`grid transition-all duration-500 ease-in-out ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="pt-5 lg:py-10 text-[#ccc]">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
