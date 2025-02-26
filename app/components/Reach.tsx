"use client";
import { useEffect, useRef, useState } from "react";
import Title from "./Title";
import Image from "next/image";
import map from "../../public/assets/mapCrt.png";
import trans from "../../public/assets/trans.png";
import countryMap from "../../public/assets/AU.png"; // Example image for the country map

type ProjectDetails = {
  title: string;
  description: string;
};

export default function Reach() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(
    null
  );
  const [modalPosition, setModalPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  // Coordinates for the points you want to show on the map
  const locations = [
    {
      id: 1,
      title: "Project 1",
      x: "30%", 
      y: "40%",
      details: { title: "Project 1", description: "Description of Project 1" },
    },
    {
      id: 2,
      title: "Project 2",
      x: "50%",
      y: "35%",
      details: { title: "Project 2", description: "Description of Project 2" },
    },
    {
      id: 3,
      title: "Project 3",
      x: "80%",
      y: "25%",
      details: { title: "Project 3", description: "Description of Project 3" },
    },
  ];


  // Function to open modal with details at the clicked point
  const handlePointClick = (
    event: React.MouseEvent,
    project: ProjectDetails
  ) => {
    // Get the map container's bounding rectangle
    const mapBounds = event.currentTarget
      .closest("div")
      ?.getBoundingClientRect();

    // Calculate the position of the modal based on the click position
    if (mapBounds) {
      setModalPosition({
        top: event.clientY - mapBounds.top - 110, // Adjusting position above the point
        left: event.clientX - mapBounds.left - 60, // Adjusting position to center over the point
      });
    }

    setSelectedProject(project);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setSelectedProject(null); // Close the modal when clicking outside
      }
    };

    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="relative pb-16 pt-[100px] text-center">
      <div className="container flex flex-col justify-center items-center mx-auto px-4">
        <Title title="Tycoonz Solutions Clients" />
        <h2 className="mt-6 text-[30px] w-[90%] md:w-[45%] md:text-[46px] leading-[48px] md:leading-[70px] font-bold text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">
          We Serve{" "}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">
            Our Clients
            <span className="absolute left-0 bottom-[-2px] w-full h-[5px] rounded-full bg-green-500"></span>
          </span>{" "}
          Globally
        </h2>

        <p className="mt-4 w-[90%] md:w-[55%] text-[18px] text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">
          Tycoonz Solutions empowers businesses globally with advanced
          technology solutions, designed to meet diverse market demands with
          precision, creativity, and excellence.
        </p>
      </div>

      <div className="relative container flex flex-col justify-center items-center mx-auto px-4 mt-[100px]">
        <Image className="md:w-[75%]" src={map} alt="logo" />
        {/* Add points as buttons */}
        {locations.map((location) => (
          <section
            key={location.id}
            className="absolute w-7 md:w-14 h-7 md:h-14 flex justify-center items-center rounded-full"
            style={{
              backgroundColor: "rgba(0, 227, 124, 0.1)",
              top: location.y, // Use percentage-based position
              left: location.x,
              transform: "translate(-50%, -50%)", // Center the button properly
            }}
            onClick={(e) => handlePointClick(e, location.details)}
          >
            <section
              className="w-8 h-8 flex justify-center items-center rounded-full"
              style={{ backgroundColor: "rgba(0, 227, 124, 0.2)" }}
            >
              <button
                className="w-3 h-3 rounded-full bg-green-500"
                style={{
                  backgroundColor: "#00E37C",
                  boxShadow:
                    "0px 0px 5px rgba(0, 255, 123, 0.4), 0px 0px 10px rgba(0, 255, 123, 0.2)",
                }}
              />
            </section>
          </section>
        ))}


        {/* Modal for project details */}
        {selectedProject && modalPosition && (
          <div
            className="absolute p-2 rounded-lg shadow-lg"
            style={{
              top: `${modalPosition.top}px`,
              left: `${modalPosition.left}px`,
              zIndex: 999,
              background:
                "linear-gradient(136.71deg, rgba(67, 67, 67, 0.86) -24.05%, rgba(0, 0, 0, 0) 115.5%)",
              boxShadow: "0px 0px 0px 0.5px rgba(174, 181, 173, 0.9)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
            ref={modalRef}
          >
            {/* Circular country map image */}
            <div className="mb-3 w-full flex items-center justify-center">
              <Image
                src={countryMap}
                alt="Country Map"
                width={15}
                height={15}
                className="rounded-full"
              />
            </div>
            <h3 className="font-semibold text-[#00E37C] text-[9px]">
              {selectedProject.title}
            </h3>
            <p className="text-[10px] text-[#D1D5DB] font-light">
              {selectedProject.description}
            </p>
            {/* <button
              onClick={() => setSelectedProject(null)}
              className="mt-2 text-blue-500"
            >
              Close
            </button> */}
          </div>
        )}
      </div>

      <div
        className="container flex flex-col justify-center items-center rounded-xl mx-auto px-4 mt-[150px] w-[90%] md:w-full h-[500px] md:h-[700px]"
        style={{
          backgroundImage: `url(${trans.src})`, // Set the image as background
          backgroundSize: "cover", // Ensure the image covers the entire div
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Prevent repeating
          border: "1px solid #696969",
        }}
      >
        <h2 className="mt-6 text-[30px] w-[90%] md:w-[45%] md:text-[46px] leading-[48px] md:leading-[70px] font-bold text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400 text-center">
          Need a{" "}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">
            Solution
            <span className="absolute left-0 bottom-[-2px] w-full h-[5px] rounded-full bg-green-500"></span>
          </span>{" "}
          Tailored Just For You?
        </h2>

        <p className="mt-4 w-[90%] md:w-[55%] text-[18px] text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400 text-center">
          Let’s discuss how we can turn your vision into reality.
        </p>

        <button
          className="bg-[#00E37C] mt-14 flex gap-2 py-2 justify-center align-middle items-center px-6 rounded-lg text-[12px] text-[#000000] md:text-[15px] hover:bg-green-500"
          style={{
            boxShadow: "0px 15px 60px 0px rgba(75, 209, 160, 0.5)",
          }}
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Contact Us Today!
        </button>
      </div>
    </section>
  );
}
