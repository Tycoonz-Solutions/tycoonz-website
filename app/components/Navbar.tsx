"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
// import portfolio from "../../public/";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1D202369] top-0 shadow-md fixed w-full z-[99999]">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
      <Image
  width={130}
  src={logo}
  alt="logo"
  onClick={() => {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  }}
  className="cursor-pointer"
/>


        <button
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
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>

        <ul
  className={`${
    isMenuOpen ? "block" : "hidden"
  } absolute bg-[#010101] text-white md:text-[#AEB5AD] md:bg-transparent top-full left-0 w-full shadow-md md:relative md:flex md:gap-6 md:items-center md:w-auto md:shadow-none`}
>
  <li className=" md:border-0 ">
    <a
      href="#home"
      className="flex justify-end mr-12 px-4 py-2 text-sm text-center hover:text-green-500"
      onClick={(e) => {
        e.preventDefault();
        setIsMenuOpen(false);
        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      Home
    </a>
  </li>
  <li className=" md:border-0 ">
    <a
      href="#about"
      className="flex justify-end mr-12 px-4 py-2 text-sm text-center hover:text-green-500"
      onClick={(e) => {
        e.preventDefault();
        setIsMenuOpen(false);
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      About
    </a>
  </li>
  <li className=" md:border-0 ">
    <a
      href="#team"
      className="flex justify-end mr-12 px-4 py-2 text-sm text-center hover:text-green-500"
      onClick={(e) => {
        e.preventDefault();
        setIsMenuOpen(false);
        document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      Team
    </a>
  </li>
  <li className=" md:border-0 ">
    <a
      href="#services"
      className="flex justify-end mr-12 px-4 py-2 text-sm text-center hover:text-green-500"
      onClick={(e) => {
        e.preventDefault();
        setIsMenuOpen(false);
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      Services
    </a>
  </li>
  <li className=" md:border-0 ">
    <a
      href="#testimonials"
      className="flex justify-end mr-12 px-4 py-2 text-sm text-center hover:text-green-500"
      onClick={(e) => {
        e.preventDefault();
        setIsMenuOpen(false);
        document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      Testimonials
    </a>
  </li>
  <li className="md:border-0">
  <a
    href="/portfolio.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="flex justify-end mr-12 px-4 py-2 text-sm text-center hover:text-green-500"
  >
    Portfolio
  </a>
</li>


  <li className="mt-2 flex justify-end mb-4 md:mt-0 md:mb-0">
    <a
      href="#contact"
      className="flex justify-end mr-12 bg-none  text-[#00E37C] px-4 py-2 rounded-lg text-center md:inline-block "
      onClick={(e) => {
        e.preventDefault();
        setIsMenuOpen(false);
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }}
      style={{ border: "1px solid #00E37C" }}
    >
      Contact Us
    </a>
  </li>
</ul>

      </div>
    </nav>
  );
}
