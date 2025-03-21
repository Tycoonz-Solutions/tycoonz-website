"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import leftArrow from "../../public/assets/leftArrow.png";
import rightArrow from "../../public/assets/rightArrow.png";
import member1 from "../../public/assets/doc1.webp";
import { useEffect, useState } from "react";

interface Scientist {
  name: string;
  role: string;
  description: string;
  source: StaticImageData;
}

export default function Team() {
  const expertists: Scientist[] = [
    {
      name: "Zain Ahmed",
      role: "Founder & CEO",
      description:
        "Zain is the CEO of Tycoonz Solutions, leading the company with a passion for innovation and expertise in blockchain and Web3.0 technologies. Under his leadership, Tycoonz Solutions continues to deliver cutting-edge solutions that empower businesses globally.",
      source: member1,
    },
    {
      name: "Zain Ahmed",
      role: "Founder & CEO",
      description:
        "Zain is the CEO of Tycoonz Solutions, leading the company with a passion for innovation and expertise in blockchain and Web3.0 technologies. Under his leadership, Tycoonz Solutions continues to deliver cutting-edge solutions that empower businesses globally.",
      source: member1,
    },
    {
      name: "Zain Ahmed",
      role: "Founder & CEO",
      description:
        "Zain is the CEO of Tycoonz Solutions, leading the company with a passion for innovation and expertise in blockchain and Web3.0 technologies. Under his leadership, Tycoonz Solutions continues to deliver cutting-edge solutions that empower businesses globally.",
      source: member1,
    },
    {
      name: "Zain Ahmed",
      role: "Founder & CEO",
      description:
        "Zain is the CEO of Tycoonz Solutions, leading the company with a passion for innovation and expertise in blockchain and Web3.0 technologies. Under his leadership, Tycoonz Solutions continues to deliver cutting-edge solutions that empower businesses globally.",
      source: member1,
    },
  ];

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const customPrevArrow = (onClickHandler: () => void) => (
    <button
      type="button"
      onClick={onClickHandler}
      className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
      aria-label="Previous Slide"
    >
      <Image src={leftArrow} alt="Previous Arrow" width={10} height={10} />
    </button>
  );

  const customNextArrow = (onClickHandler: () => void) => (
    <button
      type="button"
      onClick={onClickHandler}
      className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 z-10"
      aria-label="Next Slide"
    >
      <Image src={rightArrow} alt="Next Arrow" width={10} height={10} />
    </button>
  );

  return (
    <section className="pb-16 md:pt-14" id="team">
      <div className="container mx-auto px-4 relative">
        <div className="w-full flex justify-between mb-[80px]">
          <div className="w-[30%]">
            <h2 className="text-[30px] md:text-[46px] leading-[38px] md:leading-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">
                The People Powering Our Vision
                <span className="absolute left-0 bottom-[-12px] w-full h-[5px] bg-green-500" />
              </span>
            </h2>
          </div>
          <p className="mt-4 w-[55%] text-lg md:text-[18px] text-[#AEB5AD]">
            Behind every innovation is a team of visionaries and experts
            dedicated to turning ideas into impactful solutions. Meet the minds
            driving our success{" "}
          </p>
        </div>
        <Carousel
          showArrows={false}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          swipeable={true}
          centerMode={true}
          centerSlidePercentage={isSmallScreen ? 100 : 33.33}
          emulateTouch={true}
          transitionTime={500}
          renderArrowPrev={customPrevArrow}
          renderArrowNext={customNextArrow}
          selectedItem={isSmallScreen ? 2 : 1}
        >
          {expertists.map((scientist) => (
            <div
              key={scientist.name}
              className="relative rounded-lg overflow-hidden shadow-lg"
              style={{
                height: "450px",
              }}
            >
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-transparent to-black"
                style={{ zIndex: 1 }}
              />

              {/* Image */}
              <Image
                src={scientist.source}
                alt={scientist.name}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 w-full h-full"
                style={{ zIndex: 0 }}
              />

              {/* Content */}
              <div
                className="absolute bottom-0 left-0 w-full p-4 text-white text-left"
                style={{ zIndex: 2 }}
              >
                <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-l text-left from-white to-gray-400">
                  {scientist.role}
                </h3>
                <h4 className="text-md text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">
                  {scientist.name}
                </h4>
                <p className="text-sm text-[#AEB5AD] mt-1">
                  {scientist.description}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
