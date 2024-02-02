"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NavigationMenu = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div
      className={`fixed top-0 w-full py-4 transition-all duration-300 ${
        scrolled ? "bg-gray-800" : "bg-gray-600"
      }`}
    >
      <ul className="flex justify-center items-center space-x-8">
        <li>
          <Link legacyBehavior href="/">
            <a className="text-white hover:text-yellow-400">Home</a>
          </Link>
        </li>
        <li>
          <Link href="#second-page" className="text-white hover:text-yellow-400">
            Second Page
          </Link>
        </li>
        <li>
          <a href="#" className={`text-white hover:text-yellow-400`}>
            Services
          </a>
        </li>
        <li>
          <Link href="contact" className="text-white hover:text-yellow-400">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationMenu;
