"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Title from "./Title";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Contact from "./Contact";
import Image from "next/image";
import animeCarousel from "../../public/assets/animeCarousel.png";
import doc1 from "../../public/assets/test1.png";
import doc2 from "../../public/assets/doc1.png";
import doc3 from "../../public/assets/doc3.png";
import doc4 from "../../public/assets/doc4.png";
import nameLine from "../../public/assets/nameLine.png";

const testimonials = [
  {
    id: 1,
    image: doc1,
    name: "Sasha Kindred",
    role: "MD CEO",
    company: "NextGen Enterprises",
    testimonial:
      "We needed a custom software solution for managing our supply chain, and Tycoonz delivered beyond our expectations. Their solution transformed our efficiency and saved us time and resources.",
  },
  {
    id: 2,
    image: doc2,
    name: "John Doe",
    role: "CTO",
    company: "Tech Innovations",
    testimonial:
      "Tycoonz helped us build a scalable infrastructure that exceeded our goals. The team is truly exceptional!",
  },
  {
    id: 3,
    image: doc4,
    name: "Emily Smith",
    role: "Founder",
    company: "Smith Ventures",
    testimonial:
      "The professionalism and dedication of the Tycoonz team are unmatched. They delivered exactly what we needed.",
  },
];

export default function Clients() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="relative py-[80px] text-center overflow-hidden"
    >
      <div className="container flex flex-col justify-center items-center mx-auto px-4">
        <Title title="Our Testimonials" />
        <h2 className="mt-6 text-[30px] w-[90%] md:w-[47%] md:text-[46px] leading-[48px] md:leading-[70px] font-bold text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">
          What{" "}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">
            Our Clients
            <span className="absolute left-0 bottom-[-2px] w-full h-[5px] rounded-full bg-green-500"></span>
          </span>{" "}
          Say About Us
        </h2>

        <p className="mt-4 w-[90%] md:w-[55%] text-[18px] text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">
          Discover what our clients have to say about working with Tycoonz
          Solutions and how we’ve helped them achieve their business goals.
        </p>

        <div
          className="h-[800px] w-full md:w-[90%] mt-[-150px] md:mt-8 flex justify-center"
          style={{
            backgroundImage: `url(${animeCarousel.src})`,
            backgroundSize: "contain",
            backgroundPosition: "75% 40%", 
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative flex justify-between items-center w-full space-x-4 md:space-x-8">
            {/* Previous Profile */}
            <div
              className="w-[190px] md:w-[96px] md:h-24 mt-[-230px] rounded-full md:border-[3px] md:border-gray-600 overflow-hidden transition-transform duration-300 hover:scale-110 cursor-pointer"
              onClick={prevSlide}
              style={{
                boxShadow: "0px 15px 60px 0px rgba(75, 209, 160, 0.5)",
              }}
            >
              <Image
                src={testimonials[(activeIndex - 1 + testimonials.length) % testimonials.length].image}
                alt="Previous"
                // width={96}
                // height={96}
                className="object-cover w-[190px] md:w-[96px]"
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="px-8 ml-0 md:p-8 relative md:w-[50%] text-white rounded-lg shadow-lg md:space-y-4 flex items-center"
                style={{
                  background: "rgba(20, 20, 20, 0.4)",
                  backdropFilter: "blur(40px)",
                  border: "1px solid #696969",
                }}
              >
                <div
                  className="p-1 absolute rounded-full w-[58px] md:w-[128px] md:h-[128px] overflow-hidden left-[-30px] md:left-[-60px]"
                  style={{ border: "1px solid #00E37C" }}
                >
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    width={128}
                    height={128}
                    className="object-cover rounded-full"
                  />
                </div>

                <div className="md:mx-14">
                  <p className="text-[40px] md:text-[80px] h-[60px] items-center md:ml-[-30px] font-medium text-[#FFFFFF26] flex justify-start">
                    &#8220;
                  </p>
                  <p className="text-[13px] md:text-lg font-medium text-[#AEB5AD]">
                    {testimonials[activeIndex].testimonial}
                  </p>

                  <div className="text-[13px] md:text-lg flex align-middle items-center justify-center gap-2 mr-4 text-[#AEB5AD] mt-8">
                    <Image src={nameLine} alt="nameLine" width={26} />
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-[#AEB5AD] text-[13px] md:text-lg">
                    {testimonials[activeIndex].role} @{" "}
                    <span className="text-[#00E37C] ">
                      {testimonials[activeIndex].company}
                    </span>
                    <p className="text-[40px] md:text-[80px] h-[60px] md:mr-[-60px] font-medium text-[#FFFFFF26] flex justify-end">
                    ”
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Next Profile */}
            <div
              className="w-[190px] md:w-[96px] md:h-24 mb-[-120px]  rounded-full md:border-[3px] md:border-gray-600 overflow-hidden transition-transform duration-300 hover:scale-110 cursor-pointer"
              onClick={nextSlide}
              style={{
                boxShadow: "0px 15px 60px 0px rgba(75, 209, 160, 0.5)",
              }}
            >
              <Image
                src={testimonials[(activeIndex + 1) % testimonials.length].image}
                alt="Next"
                // width={96}
                // height={96}
                 className="object-cover w-[50px] md:w-[96px]"
              />
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </section>
  );
}