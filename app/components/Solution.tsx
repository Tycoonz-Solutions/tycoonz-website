import Image from "next/image";
import type { StaticImageData } from "next/image";
import solutionBox from "../../public/assets/solutionBox.png";

interface SolutionProps {
  title: string;
  desc: string;
  ele1: string;
  ele2: string;
  ele3: string;
  comp: string | StaticImageData;
  flex: "normal" | "reverse";
}
const Solution: React.FC<SolutionProps> = ({
  title,
  desc,
  ele1,
  ele2,
  ele3,
  comp,
  flex,
}) => {
  return (
    <div
      className={`flex flex-wrap justify-between mx-auto px-4 z-50 w-full container mt-[100px] md:mt-[150px] ${
        flex === "reverse" ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Text Section */}
      <div className="text-left w-full md:w-[45%] ">
        <h2
          className="text-[30px] md:text-[46px] font-bold mb-2 md:leading-[60px] leading-[46px] text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="mb-4 mt-4 text-[18px] text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">
          {desc}
        </p>

        <div className="flex gap-6 mt-16">
          <div className="w-[44%] md:w-[36%]">
            <Image width={32} src={solutionBox} alt="logo" />
            <p className="mb-4 mt-4 text-[18px] text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">
              {ele1}
            </p>
          </div>

          <div className="w-[44%] md:w-[36%]">
            <Image width={32} src={solutionBox} alt="logo" />
            <p className="mb-4 mt-4 text-[18px] text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">
              {ele2}
            </p>
          </div>
        </div>

        <div className="w-[44%] md:w-[36%] mt-14">
          <Image width={32} src={solutionBox} alt="logo" />
          <p
            className="mb-4 mt-4 text-[18px] text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400"
            dangerouslySetInnerHTML={{ __html: ele3 }}
          />
        </div>
      </div>

      {/* Image Section */}
      <div
        className="flex justify-center align-middle text-left w-full md:w-[44%] rounded-lg p-8"
        style={{
          background: "rgba(20, 20, 20, 0.8)", // A dark background with reduced opacity
          backdropFilter: "blur(40px)",
          border: "1px solid #696969",
        }}
      >
        <Image
          className="self-end w-[80%] opacity-[100%]"
          src={comp}
          alt="Main Image"
        />
      </div>
    </div>
  );
};

export default Solution;
