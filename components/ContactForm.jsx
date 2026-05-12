"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setSubmitStatus("success");
          form.current.reset(); // Clear the form after success
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSubmitStatus("error");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="w-full py-4 sm:py-6 md:py-8 font-sans">
      <form 
        ref={form} 
        onSubmit={sendEmail} 
        className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
      >
        {/* Name Field */}
        <div className="bg-[#f4f4f5] rounded-xl p-5 flex flex-col justify-center min-h-[80px]">
          <label htmlFor="name" className="text-sm font-medium text-gray-900 mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="user_name" // Required for EmailJS matching
            required
            placeholder="First name Last Name"
            className="bg-transparent border-none outline-none w-full text-base placeholder-gray-400 text-gray-800"
          />
        </div>

        {/* Pursue Field */}
        <div className="bg-[#f4f4f5] rounded-xl p-5 flex flex-col justify-center min-h-[80px]">
          <label htmlFor="pursue" className="text-sm font-medium text-gray-900 mb-1">Pursue</label>
          <input
            type="text"
            id="pursue"
            name="user_pursue" // Required for EmailJS matching
            placeholder="Your company"
            className="bg-transparent border-none outline-none w-full text-base placeholder-gray-400 text-gray-800"
          />
        </div>

        {/* Email Field */}
        <div className="bg-[#f4f4f5] rounded-xl p-5 flex flex-col justify-center min-h-[80px]">
          <label htmlFor="email" className="text-sm font-medium text-gray-900 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="user_email" // Required for EmailJS matching
            required
            placeholder="Your email address"
            className="bg-transparent border-none outline-none w-full text-base placeholder-gray-400 text-gray-800"
          />
        </div>

        {/* Phone Field */}
        <div className="bg-[#f4f4f5] rounded-xl p-5 flex flex-col justify-center min-h-[80px]">
          <label htmlFor="phone" className="text-sm font-medium text-gray-900 mb-1">Phone</label>
          <input
            type="tel"
            id="phone"
            name="user_phone" // Required for EmailJS matching
            placeholder="Your phone number"
            className="bg-transparent border-none outline-none w-full text-base placeholder-gray-400 text-gray-800"
          />
        </div>

        {/* Project Details Field */}
        <div className="bg-[#f4f4f5] rounded-xl p-5 md:col-span-2 flex flex-col min-h-[220px]">
          <label htmlFor="project" className="text-sm font-medium text-gray-900 mb-2">Project details</label>
          <textarea
            id="project"
            name="project_details" // Required for EmailJS matching
            data-lenis-prevent
            required
            placeholder="Briefly describe your project"
            className="bg-transparent border-none outline-none w-full text-base placeholder-gray-400 text-gray-800 resize-y flex-grow"
          ></textarea>
        </div>

        {/* News Field */}
        <div className="bg-[#f4f4f5] rounded-xl p-5 md:col-span-2 flex flex-col min-h-[220px]">
          <label htmlFor="news" className="text-sm font-medium text-gray-900 mb-2">News</label>
          <textarea
            id="news"
            name="news_info" // Required for EmailJS matching
            data-lenis-prevent
            placeholder="Do you have any further information?"
            className="bg-transparent border-none outline-none w-full text-base placeholder-gray-400 text-gray-800 resize-y flex-grow"
          ></textarea>
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="md:col-span-2 text-green-600 font-medium">
            Message sent successfully! We will get back to you soon.
          </div>
        )}
        {submitStatus === "error" && (
          <div className="md:col-span-2 text-red-600 font-medium">
            Oops! Something went wrong. Please try again later.
          </div>
        )}

        {/* Submit Button */}
        <div className="md:col-span-2 pt-2 flex justify-start">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-[#1a1a1a] hover:bg-black text-white text-lg font-medium py-4 px-10 rounded-xl transition-colors duration-200 cursor-pointer ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;