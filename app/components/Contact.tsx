import Title from "./Title";
import Image from "next/image";
import map from "../../public/assets/map.png";
import trans from "../../public/assets/trans2.png";

export default function Contact() {
  return (
      <div
        id="contact" className="container flex flex-col justify-center items-center rounded-xl mx-auto px-4 mt-[-100px] md:mt-[-70px] w-[90%] md:w-full h-[800px] md:h-[850px] "
        style={{
          backgroundImage: `url(${trans.src})`, // Set the image as background
          backgroundSize: "cover", // Ensure the image covers the entire div
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Prevent repeating
          border: "1px solid #696969",
        }}
      >
        <h2 className="mt-6 text-[26px] w-[90%] md:w-[45%] md:text-[46px] leading-[48px] md:leading-[70px] font-bold text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400 text-center">
          Get In Touch With Us
        </h2>

        <p className="mt-4 w-[90%] md:w-[55%] text-[18px] text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400 text-center">
          Have questions? Let’s talk!
        </p>

        {/* Form Section */}
        <form
          className="mt-14 w-full max-w-[600px] text-left grid grid-cols-2 gap-10"
          style={{
            color: "rgba(255, 255, 255, 0.7)", // Text color for input labels
          }}
        >
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block mb-2">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="Write your first name"
              className="w-full md:px-4 py-2 bg-transparent border-b border-gray-500 focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block mb-2">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Write your last name"
              className="w-full md:px-4 py-2 bg-transparent border-b border-gray-500 focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Contact Email */}
          <div className="mt-10">
            <label htmlFor="email" className="block mb-2">
              Contact email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Write your email"
              className="w-full md:px-4 py-2 bg-transparent border-b border-gray-500 focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Subject */}
          <div className="mt-10">
            <label htmlFor="subject" className="block mb-2">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Define your subject"
              className="w-full md:px-4 py-2 bg-transparent border-b border-gray-500 focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Your Message */}
          <div className="col-span-2 mt-10">
            <label htmlFor="message" className="block mb-2">
              Your message
            </label>
            <textarea
              id="message"
              placeholder="Type your message here"
              // rows="5"
              className="w-full md:px-4 py-2 bg-transparent border-b border-gray-500 focus:outline-none focus:border-green-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="w-full flex justify-center col-span-2 text-center mt-6">
            <button
              type="submit"
              className="bg-[#00E37C] flex gap-2 py-2 justify-center align-middle items-center px-6 rounded-lg text-[15px] text-[#000000] hover:bg-green-500"
              style={{
                boxShadow: "0px 15px 60px 0px rgba(75, 209, 160, 0.5)",
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
  );
}
