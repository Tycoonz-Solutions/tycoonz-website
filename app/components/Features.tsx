
export default function Features() {


  return (
    <section  className="pt-[120px] pb-6 bg-black text-white" id="about">
      <div className="container mx-auto px-4" >
        <div className="flex flex-col items-start space-y-16">
          {/* Who We Are Section */}
          <div className="w-full flex justify-between">
            <div className="w-[30%]">
              <h2 className="text-[30px] md:text-[46px] leading-[38px] md:leading-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">
                Who <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">We Are
                  <span className="absolute left-0 bottom-[-12px] w-full h-[5px] bg-green-500"></span>
                </span>
              </h2>
            </div>
            <p className="mt-4 w-[55%] text-lg md:text-[18px] text-[#AEB5AD]">
              Tycoonz Solutions is a forward-thinking technology firm specializing in Blockchain Development, Web3.0 Integration, and Custom Tech Solutions and are dedicated to delivering innovative and scalable solutions that drive success.
            </p>
          </div>
          {/* Our Mission Section */}
          <div className="w-full flex justify-between">
            <div className="w-[30%]">
              <h2 className="text-[30px] md:text-[46px] leading-[38px] md:leading-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">
                Our <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">Mission
                  <span className="absolute left-0 bottom-[-12px] w-full h-[5px] bg-green-500"></span>
                </span>
              </h2>
            </div>
            <p className="mt-4 w-[55%] text-lg md:text-[18px] text-[#AEB5AD]">
              We are on the mission to enable businesses to thrive in the digital age by delivering transformative technology solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
