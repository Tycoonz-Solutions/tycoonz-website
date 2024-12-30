import Title from "./Title";
import Image from "next/image";
import map from "../../public/assets/map.png";
import trans from "../../public/assets/trans.png";
export default function Reach() {
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
          Tycoonz Solutions partners with businesses worldwide, delivering
          tailored technology solutions that meet diverse market needs with
          precision and excellence.
        </p>
      </div>
      <div className="container flex flex-col justify-center items-center mx-auto px-4 mt-[100px]">
        <Image className="md:w-[75%]" src={map} alt="logo" />
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
        >
          Contact Us Today!
        </button>
      </div>
    </section>
  );
}
