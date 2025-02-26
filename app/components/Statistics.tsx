import Title from "./Title";

export default function Statistics() {

  const stats = [
    { value: '90%', description: '90% client retention show our commitment to lasting success.', title: "Client Retention" },
    { value: '100+ ', description: 'We have successfully delivered over 100 Blockchain, Healthcare, Mobile App & Web Projects for diverse Industries globally.', title: "Projects" },
    { value: '10+', description: 'Tycoonz solutions has worked with clients across 10+ countries in three different continents, providing tailored digital solutions.', title: "Global Reach" },
  ];

  return (
    <section className=" py-[120px]">
      <div className="container flex flex-col align-middle items-center mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat: any, idx: number) => (
            <div key={idx} className="p-6 border-l-[0.5px] flex flex-col text-left text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">
              <Title title={stat.title} />
              <h3 className="text-[35px] pb-2 pt-1 font-bold">{stat.value}</h3>
              <p className="text-[14px] text-[#AEB5AD]">{stat.description}</p>
            </div>
          ))}
        </div>
        <div id="services" />
      </div>
    </section>
  );
}
