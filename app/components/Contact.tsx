import Title from "./Title";
import Image from "next/image";
import map from "../../public/assets/map.png";
import trans from "../../public/assets/trans2.png";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Your message has been sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(`${result.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        "An error occurred while sending your message. Please try again.",
      );
    }
  };

  return (
    <div
      className="container flex flex-col justify-center items-center rounded-xl mx-auto px-4 mt-[-100px] md:mt-[-70px] w-[90%] md:w-full py-5 md:py-10"
      style={{
        backgroundImage: `url(${trans.src})`, // Set the image as background
        backgroundSize: "cover", // Ensure the image covers the entire div
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent repeating
        border: "1px solid #696969",
      }}
    >
      <h2 className=" text-[26px] w-[90%] md:w-[45%] md:text-[46px] leading-[48px] md:leading-[70px] font-bold text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400 text-center">
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
        onSubmit={handleSubmit}
      >
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block mb-2">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
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
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
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
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Write your email"
            className="w-full md:px-4 py-2 bg-transparent border-b border-gray-500 focus:outline-none focus:border-green-500"
            autoComplete="email"
          />
        </div>

        {/* Subject */}
        <div className="mt-10">
          <label htmlFor="subject" className="block mb-2">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
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
            name="message"
            placeholder="Type your message here"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full md:px-4 py-2 bg-transparent border-b border-gray-500 focus:outline-none focus:border-green-500"
          />
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
