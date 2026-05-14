import Button from "./Button";
import Link from "next/link";
import { ManualTextRoll } from "./ManualTextRoll";

const Footer = () => {
  return (
    <section id="contact" className="px-5 pt-20 lg:pt-30 md:px-12 xl:px-18">
      <div className="md:flex md:justify-between md:items-end border-b border-gray-400 pb-15 md:pb-20">
        <div className="md:w-2/3 lg:w-1/2">
          <h2 className="text-2xl md:text-3xl xl:text-[2.6rem] font-medium">
            Let&apos;s talk about your project and make something really great
            out of it!
          </h2>
        </div>
        <Button
          className={
            "bg-neutral-100 hover:text-white hover:bg-[#222] px-6 py-4 lg:px-8 lg:py-6 text-lg lg:text-xl mt-5 lg:mt-0"
          }
        />
      </div>
      <div className="py-15 md:py-20 text-xl lg:text-2xl font-medium flex flex-col lg:flex-row lg:justify-between gap-10">
        <div>
          <p className="text-[#666]">Contact</p>
          <a href="tel:+917249084224">
            <ManualTextRoll>+91 7249084224</ManualTextRoll>
          </a>{" "}
          <br />
          <a href="mailto:clevercoder0307@gmail.com">
            <ManualTextRoll>clevercoder0307@gmail.com</ManualTextRoll>
          </a>
        </div>
        <div>
          <p className="text-[#666]">Social</p>
          <a
            href="https://www.linkedin.com/in/clever-coder/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ManualTextRoll>Linkedin</ManualTextRoll>
          </a>{" "}
          <br />
          <a
            href="https://x.com/CleverCoder0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ManualTextRoll>Twitter/X</ManualTextRoll>
          </a>
        </div>
        <div>
          <p className="text-[#666]">&copy; 2026</p>
          <Link href="/imprint">
            <ManualTextRoll>Imprint</ManualTextRoll>
          </Link>{" "}
          <br />
          <Link href="/data-protection">
            <ManualTextRoll>Data Protection</ManualTextRoll>
          </Link>
        </div>
      </div>

      {/* <div className="">
        <p className="relative mb-[-20vw] text-center text-neutral-300 text-[11.5vw] font-bold">
          VISHAL MISHRA
        </p>
      </div> */}
    </section>
  );
};

export default Footer;
