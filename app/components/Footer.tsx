import Image from "next/image";
import logo from "../../public/assets/logo.png";
import emailArrow from "../../public/assets/emailArrow.png";
import Social1 from "../../public/assets/Social1.png";
import Social2 from "../../public/assets/Social2.png";
import Social3 from "../../public/assets/Social3.png";

export default function Footer() {
  return (
    <footer className="bg-[#]FFFFFF text-[#001835] py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col ml-3 md:ml-0 md:flex-row justify-between">
          <div className="flex flex-col md:w-[25%] gap-8">
            <Image src={logo} alt="Next Arrow" width={164} height={100} />
            <p className=" text-[13px] md:text-[14px] text-[#AEB5AD]">
              Tycoonz Solutions is a global leader in blockchain development,
              Web3.0 integration, and custom tech solutions, helping businesses
              innovate and grow through cutting-edge technology.
            </p>

            <p className=" text-[13px] md:text-[14px] text-[#AEB5AD]">
              Tycoonz Solutions Main Boulevard Rd, Block H, Valencia, Lahore{" "}
            </p>
          </div>

          <div
            className="flex flex-col justify-between mt-8 md:mt-0 md:w-[10%] gap-8"
            // style={{ height: "auto" }}
          >
            <nav
              className="flex md:flex-col h-[100%] text-[#FFFFFF] mt-0 justify-between md:justify-evenly text-[12px] md:text-[14px]"
              // style={{ height: "-webkit-fill-available" }}
            >
              <a href="#home" className="hover:text-green-500">
                Home
              </a>
              <a href="#about" className="hover:text-green-500">
                About
              </a>
              <a href="#team" className="hover:text-green-500">
                Team
              </a>
              <a href="#services" className="hover:text-green-500">
                Services
              </a>
              <a href="#testimonials" className="hover:text-green-500">
                Testimonials
              </a>
              <a href="#contact" className="hover:text-green-500">
                Contact
              </a>
            </nav>
          </div>

          <div className=" flex flex-col md:w-[35%] mt-10 md:mt-0 gap-8 justify-evenly">
            <div>
              <label
                htmlFor="firstName"
                className="block md:mb-2 text-[13px] md:text-[14px] text-[#FFFFFF]"
              >
                Subscribe to our newsletter
              </label>
              <div className="flex gap-6 align-middle items-center">
                <input
                  id="firstName"
                  type="text"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 bg-transparent text-[13px] md:text-[14px] border-b border-gray-500 focus:outline-none focus:border-green-500 text-[#FFFFFF] placeholder-gray-400"
                />
                <Image
                  src={emailArrow}
                  alt="Next Arrow"
                  className="w-[15.8px] h-[14.85px] ml-[-40px]"
                />
                <button
                  className="bg-[#00E37C] flex gap-2 py-2 justify-center align-middle items-center px-6 rounded-lg text-[12px] text-[#000000] md:text-[15px] hover:bg-green-500"
                  style={{
                    boxShadow: "0px 15px 60px 0px rgba(75, 209, 160, 0.5)",
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>

            <div>
              <p className="mb-4 mt-6 md:mt-0 text-[13px] md:text-[14px] text-[#FFFFFF]">
                Get in Touch
              </p>
              <p className="text-[13px] md:text-[14px] text-[#AEB5AD]">
                You are welcome to reach out by phone or email:
              </p>
              <p className=" text-[13px] md:text-[14px] text-[#00E37C]">
                +92 317 414 4853
              </p>
              <p className=" text-[13px] md:text-[14px] text-[#00E37C]">
                info@tycoonzsolutions.com
              </p>
            </div>
          </div>
        </div>

        <div
          className="w-full h-[1px] bg-[#AEB5AD] mt-12 mb-8"
          style={{ transform: "scaleY(0.5)" }}
        ></div>

        <div className="text-[12px] w-full justify-between flex mt-2 md:mt-0  md:text-[14px] text-[#FFFFFF]">
          <div >
          © 2024 Tycoonz Solutions. All rights reserved.
          </div>
          <div className="flex gap-4">
  <a
    href="https://www.linkedin.com/company/tycoonz-solutions/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      src={Social1}
      alt="LinkedIn"
      className="w-[24px] h-[24px]"
    />
  </a>
  <a
    href="https://www.facebook.com/share/18Qpdfi43V/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      src={Social2}
      alt="Instagram"
      className="w-[24px] h-[24px]"
    />
  </a>
  <a
   href="https://www.instagram.com/tycoonzsolutions?igsh=MTg0NnYzeXoyNW1pNA=="
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      src={Social3}
      alt="Facebook"
      className="w-[24px] h-[24px]"
    />
  </a>
</div>

        </div>
      </div>
    </footer>
  );
}
