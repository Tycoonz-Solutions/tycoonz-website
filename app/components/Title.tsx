import circle from "../../public/assets/circle.webp";
import Image from "next/image";
export default function Title({ title }: { title: string }) {
  return (
    <div
      className="container bg-[#000000] border-[#00E37C] px-4 flex justify-start gap-2 max-w-fit items-center py-[9px] mb-2 rounded-full"
      style={{ border: "1px solid #00E37C" }}
    >
      <Image width={18} src={circle} alt="logo" />
      <p className="text-[11px] md:text-[12.5px] text-[#FFFFFF]">{title}</p>
    </div>
  );
}
