import Title from "./Title";
import Solution from "./Solution";
import comp1 from "../../public/assets/comp1.webp";
import comp2 from "../../public/assets/comp2.webp";
import comp3 from "../../public/assets/comp3.webp";
import comp4 from "../../public/assets/comp4.webp";

export default function Solutions() {
  return (
    <section className="relative py-16 text-center">
      <div className="container flex flex-col justify-center items-center mx-auto px-4">
        <Title title="Our Expertise" />
        <h2 className="mt-6 text-[30px] w-[90%] md:w-[45%] md:text-[46px] leading-[48px] md:leading-[70px] font-bold text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">
            Solutions Built
            <span className="absolute left-0 bottom-[-2px] w-full h-[5px] rounded-full bg-green-500" />
          </span>{" "}
          Around Your Success
        </h2>

        <p className="mt-4 w-[90%] md:w-[55%] text-[18px] text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">
          Our comprehensive services are designed to empower your business with
          the latest in technology, ensuring scalability, efficiency, and
          innovation at every step.
        </p>
      </div>

      <div className="relative">
        <Solution
          title="Blockchain <br /> Development"
          desc="We design secure and efficient blockchain systems to enhance transparency, security, and streamline operations"
          ele1="Custom Blockchain Solutions"
          ele2="Smart Contract Development"
          ele3="Decentralized <br/> Applications (DApps)"
          comp={comp1}
          flex="normal"
        />
        <div
          className="absolute bottom-[100px] md:bottom-[250px] right-[-20px] w-[300px] h-[100px] md:w-[500px] md:h-[120px] bg-[#00E37C] blur-lg opacity-100"
          style={{
            transform: "rotate(55deg)",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* Second Solution */}
      <Solution
        title="Web3.0 <br /> Integration"
        desc="Empower your business with decentralized technologies and prepare for the future of a more secure, transparent, and user-centric internet."
        ele1="Decentralize Your Systems"
        ele2="NFT Integration"
        ele3="Crypto Payment Solutions"
        comp={comp2}
        flex="reverse"
      />

      <Solution
        title="Custom Software  <br /> Solutions"
        desc="Tailored software to address your business's unique challenges."
        ele1="Enterprise Applications"
        ele2="Mobile App Development"
        ele3="Cloud-Based Solutions"
        comp={comp3}
        flex="normal"
      />

      <div className="relative">
        <Solution
          title="Technical Consulting"
          desc="Expert solutions for today’s hurdles and tomorrow’s growth."
          ele1="System Audits"
          ele2="Strategic Planning"
          ele3="Training & Support"
          comp={comp4}
          flex="reverse"
        />
        <div
          className="absolute bottom-[40px] left-[-120px] w-[300px] h-[100px] md:w-[500px] md:h-[120px] bg-[#00E37C] blur-lg opacity-100 "
          style={{
            transform: "rotate(115deg)",
            filter: "blur(80px)",
          }}
        />
      </div>
    </section>
  );
}
