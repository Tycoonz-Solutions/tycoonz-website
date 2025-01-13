import Image from "next/image";
import banner from "../../public/assets/heroBg.png";
import bannerTwo from "../../public/assets/heroBgCircle.png";
import Title from "./Title";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex align-middle items-center justify-between bg-cover bg-center bg-no-repeat text-white text-center w-full px-[40px] md:px-[100px]"
      style={{
        backgroundImage: `url(${banner.src})`,
        minHeight: `100vh`,
        width: "100%",
        backgroundSize: "cover",
      }}
    >
      {/* Top-right neon shape */}
      <div
        className="absolute top-0 right-0 w-[200px] md:w-[300px] z-50 h-[200px] md:h-[300px] rounded-full bg-[#00E37C] blur-lg opacity-50"
        style={{
          filter: "blur(80px)",
        }}
      ></div>

      {/* Bottom-left neon shape */}
      <div
        className="absolute bottom-[-80px] md:bottom-[-140px] z-50 left-[-140px] w-[200px] md:w-[300px] h-[200px] md:h-[300px] rounded-full bg-[#00E37C] blur-lg opacity-70"
        style={{
          filter: "blur(80px)",
        }}
      ></div>

      {/* Content */}
      <div className="relative w-[100%] md:w-[43%] flex flex-col align-bottom text-left pr-4 col-span-3 z-10 container ">
        <Title title="Welcome to Tycoonz Solutions" />
        <h2 className="mt-6 mb-6 text-[30px] w-[100%] lg:w-[85%] lg:text-[46px] leading-[48px] md:leading-[70px] font-bold text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">
          {/* Empowering Businesses with Blockchain, Web3.0, & */}
          Navigating the Future through Blockchain, Web3.0{" "}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">
          & Tech Solutions
            <span className="absolute left-0 bottom-[-2px] w-full h-[5px] rounded-full bg-green-500"></span>
          </span>{" "}
          .
        </h2>

        <p className="mb-8 text-[13px] md:text-[16px] lg:text-[23px] text-[#AEB5AD]">
          Transforming your vision into cutting-edge realities.
        </p>
        <div className="flex justify-start space-x-4">
          <button
            className="bg-[#00E37C] flex gap-2 py-2 justify-center align-middle items-center px-6 rounded-lg text-[12px] text-[#000000] md:text-[15px] hover:bg-green-500"
            style={{
              boxShadow: "0px 15px 60px 0px rgba(75, 209, 160, 0.5)",
            }}
          >
            {" "}
            Get Started{" "}
          </button>
        </div>
      </div>

      <div className="relative hidden md:w-[57%] md:flex flex-col justify-between text-left pr-4 col-span-3 z-10 container">
        <Image className="self-end w-[80%]" src={bannerTwo} alt="logo" />
      </div>
    </section>
  );
}

