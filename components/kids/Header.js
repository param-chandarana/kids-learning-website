"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo_text.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="bg-[#5BA3D9] bg-opacity-15 z-50 w-full border-gray-200 dark:bg-gray-900 text-xl">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/kids"
            className="flex items-center space-x-1 rtl:space-x-reverse"
          >
            <Image src={logo} alt="Logo" height={56} />
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg space-y-3 bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent md:space-y-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/kids/math"
                  className="block py-2 px-3 text-black rounded md:text-gray-800 hover:text-[#e54e4e]"
                >
                  Math
                </Link>
              </li>
              <li>
                <Link
                  href="/kids/science"
                  className="block py-2 px-3 text-black rounded md:text-gray-800 hover:text-[#e54e4e]"
                >
                  Science
                </Link>
              </li>
              <li>
                <Link
                  href="/kids/english"
                  className="block py-2 px-3 text-black rounded md:text-gray-800 hover:text-[#e54e4e]"
                >
                  English
                </Link>
              </li>
              <li>
                <Link
                  href="/kids/art-creativity"
                  className="block py-2 px-3 text-black rounded md:text-gray-800 hover:text-[#e54e4e]"
                >
                  Art & Creativity
                </Link>
              </li>
              <li>
                <Link href="/">
                  <button className="block py-2 px-3 text-white bg-[#e54e4e] rounded-lg hover:bg-[#d73d3d] inner-shadow border-2 border-black">
                    Logout
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
