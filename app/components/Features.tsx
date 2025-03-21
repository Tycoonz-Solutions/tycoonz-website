export default function Features() {
  return (
    <section className="pt-[120px] pb-6 bg-black text-white" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start space-y-16">
          {/* Who We Are Section */}
          <div className="w-full flex justify-between flex-col md:flex-row">
            <div className="w-full md:w-[30%]">
              <h2 className="text-[30px] md:text-[46px] leading-[38px] md:leading-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">
                Who{" "}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">
                  We Are
                  <span className="absolute left-0 bottom-[-12px] rounded-full w-full h-[5px] bg-green-500" />
                </span>
              </h2>
            </div>
            <p className="mt-6 md:mt-4 w-full md:w-[55%] text-lg md:text-[18px] text-[#AEB5AD]">
              Tycoonz Solutions is an emerging software development company
              based in Lahore, Pakistan, committed to creating meaningful
              solutions in blockchain, healthcare, Web 3.0, mobile app
              development, and artificial intelligence. We collaborate with
              businesses worldwide to turn their ideas into reality using
              innovative technology and a personalized approach.
            </p>
          </div>
          {/* Our Mission Section */}
          <div className="w-full flex justify-between flex-col md:flex-row">
            <div className="w-full md:w-[30%]">
              <h2 className="text-[30px] md:text-[46px] leading-[38px] md:leading-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">
                Our{" "}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">
                  Mission
                  <span className="absolute left-0 bottom-[-12px] rounded-full w-full h-[5px] bg-green-500" />
                </span>
              </h2>
            </div>
            <p className="mt-6 md:mt-4 w-full md:w-[55%] text-lg md:text-[18px] text-[#AEB5AD]">
              To make innovation accessible to all by leveraging blockchain and
              emerging technologies to empower businesses, enhance healthcare,
              and foster community growth. Guided by our core values, we aim to
              drive positive change, transforming industries and creating a
              future where progress benefits everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
