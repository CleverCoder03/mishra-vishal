const ContactForm = () => {
  return (
    <div className="w-full py-4 sm:py-6 md:py-8 font-sans">
      <form className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        
        {/* Name Field */}
        <div className="bg-[#f4f4f5] rounded-xl p-5 flex flex-col justify-center min-h-[80px]">
          <label htmlFor="name" className="text-sm font-medium text-gray-900 mb-1">Name</label>
          <input
            type="text"
            id="name"
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
            placeholder="Your phone number"
            className="bg-transparent border-none outline-none w-full text-base placeholder-gray-400 text-gray-800"
          />
        </div>

        {/* Project Details Field */}
        <div className="bg-[#f4f4f5] rounded-xl p-5 md:col-span-2 flex flex-col min-h-[220px]">
          <label htmlFor="project" className="text-sm font-medium text-gray-900 mb-2">Project details</label>
          <textarea
            id="project"
            data-lenis-prevent
            placeholder="Briefly describe your project"
            className="bg-transparent border-none outline-none w-full text-base placeholder-gray-400 text-gray-800 resize-y flex-grow"
          ></textarea>
        </div>

        {/* News Field */}
        <div className="bg-[#f4f4f5] rounded-xl p-5 md:col-span-2 flex flex-col min-h-[220px]">
          <label htmlFor="news" className="text-sm font-medium text-gray-900 mb-2">News</label>
          <textarea
            id="news"
            data-lenis-prevent
            placeholder="Do you have any further information?"
            className="bg-transparent border-none outline-none w-full text-base placeholder-gray-400 text-gray-800 resize-y flex-grow"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 pt-2 flex justify-start">
          <button
            type="submit"
            className="bg-[#1a1a1a] hover:bg-black text-white text-lg font-medium py-4 px-10 rounded-xl transition-colors duration-200 cursor-pointer"
          >
            Submit
          </button>
        </div>

      </form>
    </div>
  );
};

export default ContactForm;