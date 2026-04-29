"use client";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname("/");
  const menuRef = useRef(null);
  const colorRef = useRef(null);
  const logoRef = useRef(null);
  const navLinksRef = useRef([]);
  const navBasedRef = useRef();
  const navRef = useRef();

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About me", link: "/#about" },
    { name: "Projects", link: "/#projects" },
    { name: "Services", link: "/#services" },
    { name: "Contact", link: "/#contact" },
  ];

  useGSAP(() => {
    // Set initial positions without animation
    gsap.set(menuRef.current, { yPercent: -100 });
    gsap.set(navLinksRef.current, { yPercent: 100, opacity: 0 });
    gsap.set(navBasedRef.current, { yPercent: 100, opacity: 0 });
  }, []);

  useGSAP(() => {
    if (toggle) {
      gsap.fromTo(
        menuRef.current,
        {
          yPercent: -100,
        },
        {
          yPercent: 0,
          duration: 0.8,
          ease: "power1.inOut",
        }
      );

      //   gsap.to([colorRef.current, logoRef.current], {
      //     color: "white",
      //     duration: 0.4,
      //     ease: "power1",
      //   });

      gsap.fromTo(
        navLinksRef.current,
        {
          yPercent: 100,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          ease: "expo.out",
          delay: 0.5,
          stagger: 0.2, // 0.2s delay between each link
        }
      );

      gsap.fromTo(
        navBasedRef.current,
        {
          yPercent: 100,
          opacity: 0,
        },
        { yPercent: 0, opacity: 1, duration: 0.5, ease: "expo.out", delay: 1.3 }
      );
    } else {
      gsap.to(menuRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power1.inOut",
      });

      //   gsap.to([colorRef.current, logoRef.current], {
      //     color: "black",
      //     delay: 0.4,
      //     ease: "power1",
      //   });

      // Reset nav links
      gsap.fromTo(
        navLinksRef.current,
        {
          yPercent: 0,
          opacity: 1,
        },
        {
          yPercent: 100,
          opacity: 0,
          duration: 0.4,
          ease: "expo.out",
        }
      );

      gsap.fromTo(
        navBasedRef.current,
        {
          yPercent: 0,
          opacity: 0,
        },
        { yPercent: 100, opacity: 0, duration: 0.4, ease: "expo.out" }
      );
    }

    // gsap.fromTo(
    //   navRef.current,
    //   {
    //     yPercent: -100,
    //     opacity: 0
    //   },
    //   { yPercent: 0, opacity: 1, duration: 1, delay: 2, ease: "power3.in" }
    // );
  }, [toggle]);
  return (
    <>
      <nav
        ref={navRef}
        className="fixed w-full z-[101] md:z-1 mix-blend-difference py-7 px-5 md:py-6 md:px-12 lg:py-10 xl:px-18"
      >
        <div className="flex items-center justify-between w-full">
          <Link
            href={"/"}
            className="text-xl font-ppneune-medium font-medium text-white md:text-2xl"
            ref={logoRef}
            onClick={() => setToggle(false)}
          >
            Vishal Mishra
          </Link>

          <div className="hidden md:flex md:gap-6 text-xl font-ppneune-medium text-white">
            <Link href={"/#about"}>About me</Link>
            <Link href={"/#projects"}>Projects</Link>
            <Link href={"/#services"}>Services</Link>
            <Link href={"/#contact"}>Contact</Link>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <h1
              className={`font-ppneune-medium font-medium text-xl cursor-pointer text-white`}
              ref={colorRef}
              onClick={() => setToggle((prev) => !prev)}
            >
              {toggle ? "Close" : "Menu"}
            </h1>
          </div>
        </div>
      </nav>
      <div
        id="menu-bar"
        ref={menuRef}
        className="bg-[#222] fixed h-dvh w-screen z-100 block md:hidden"
      >
        <div className="absolute bottom-0 left-0 py-10 px-5 flex flex-col gap-15">
          <div className="flex flex-col gap-5 text-4xl text-white uppercase">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.link}
                ref={(el) => (navLinksRef.current[index] = el)}
                onClick={() => setToggle(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div
            ref={navBasedRef}
            className="text-white text-xl font-ppneune-medium font-medium leading-6"
          >
            <h1>Based in</h1>
            <h1>Mumbai, India</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;