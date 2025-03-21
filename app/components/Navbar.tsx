"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import Link from "next/link";
// import portfolio from "../../public/";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[black] top-0 shadow-md fixed w-full z-[99999]">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <Image
          width={130}
          src={logo}
          alt="logo"
          onClick={() => {
            document
              .getElementById("home")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="cursor-pointer"
          unoptimized
        />

        <button
          type="button"
          className="block md:hidden text-[#00E37C] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Menu Toggle Icon"
            aria-labelledby="menuTitle"
          >
            <title id="menuTitle" className="sr-only">
              Menu Toggle Icon
            </title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute bg-[#010101] text-white md:text-[#AEB5AD] md:bg-transparent top-full left-0 w-full shadow-md md:relative md:flex gap-1 md:gap-2 lg:gap-3 md:items-center md:w-auto md:shadow-none`}
        >
          <li className=" md:border-0 ">
            <Link
              href="#home"
              className="flex justify-end mr-8 px-4 py-2 text-sm text-center hover:text-green-500"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Home
            </Link>
          </li>
          <li className=" md:border-0 ">
            <Link
              href="#about"
              className="flex justify-end mr-8 px-4 py-2 text-sm text-center hover:text-green-500"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About
            </Link>
          </li>
          {/* <li className=" md:border-0 ">
    <a
      href="#team"
      className="flex justify-end mr-8 px-4 py-2 text-sm text-center hover:text-green-500"
      onClick={(e) => {
        e.preventDefault();
        setIsMenuOpen(false);
        document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      Team
    </a>
  </li> */}
          <li className=" md:border-0 ">
            <Link
              href="#services"
              className="flex justify-end mr-8 px-4 py-2 text-sm text-center hover:text-green-500"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Services
            </Link>
          </li>
          <li className=" md:border-0 ">
            <Link
              href="#testimonials"
              className="flex justify-end mr-8 px-4 py-2 text-sm text-center hover:text-green-500"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                document
                  .getElementById("testimonials")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Testimonials
            </Link>
          </li>
          <li className="md:border-0">
            <a
              href="/portfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-end mr-8 px-4 py-2 text-sm text-center hover:text-green-500"
            >
              Portfolio
            </a>
          </li>

          <li className="mt-2 flex justify-end mb-4 md:mt-0 md:mb-0">
            <Link
              href="#contact"
              className="flex justify-end mr-8 bg-none  text-[#00E37C] px-4 py-2 rounded-lg text-center md:inline-block "
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{ border: "1px solid #00E37C" }}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
