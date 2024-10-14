import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Timeline from "../../app/About-us/component/App";
import { ChevronRightIcon, CircleCheck } from "lucide-react";

function Page() {
  const teamsdata = [
    { img: "/person1.png", name: "TUMEN-AYUSH Jamiyansuren", position: "Only Shareholder" },
    { img: "/person2.png", name: "GANKHULUG Enkhbold", position: "Executive Director" },
    { img: "/person3.png", name: "ZULBAYAR Bold", position: "Advisor" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <Image
          className="absolute -top-[4rem] left-0 w-full h-full object-cover brightness-50"
          height={900}
          width={1600}
          src="/bg.jpg"
          alt="Background"
        />

<div className="absolute top-1/3 left-5 md:left-[10%] text-left">
          <h1 className="text-6xl md:text-6xl lg:text-8xl font-extrabold mb-4 tracking-tight text-white">
            ABOUT US
          </h1>
          <p className="font-light max-w-[85%] md:max-w-[70%] lg:max-w-[50%] text-sm md:text-lg lg:text-xl text-white leading-relaxed">
            "We will provide international standard energy operation, steel fabrication, electric systems, switch systems and mining construction support services through dedicated collaborative approach for our customers with excellence in safety, performance, quality achieving expectations and building of long term relationships based no a best for project philosophy"
          </p>
          <Button className="bg-blue-800 mt-4 flex items-center">
            Write us <ChevronRightIcon className="ml-2" />
          </Button>
        </div>

        {/* Adjusted Container for the Info Box */}
        <div className="absolute flex flex-col justify-center items-center -bottom-7 right-5 md:right-[10%] bg-white rounded-3xl p-6 md:p-8 text-blue-700 shadow-lg w-[90%] md:w-auto z-10">
          <ul className="text-sm md:text-lg space-y-4">
            <li className="flex items-center">
              <CircleCheck className="mr-2 md:mr-4" aria-label="Quality Control Icon" />
              <span className="font-medium">Quality Control System, 100% Satisfaction Guarantee</span>
            </li>
            <li className="flex items-center">
              <CircleCheck className="mr-2 md:mr-4" aria-label="Professional Staff Icon" />
              <span className="font-medium">Highly Professional Staff, Accurate Testing Processes</span>
            </li>
            <li className="flex items-center">
              <CircleCheck className="mr-2 md:mr-4" aria-label="Workmanship Icon" />
              <span className="font-medium">Unrivaled Workmanship, Certified and Qualified Experts</span>
            </li>
          </ul>
        </div>

      </section>

      {/* About Section */}
      <section className="mt-[-4rem] bg-blue-800 text-white flex flex-col md:flex-row py-[8rem] lg:px-4 md:px-[5rem]">
        <div className="flex-1 flex flex-col md:justify-start justify-center items-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl text-gray-400 font-extrabold">Who we are.</h1>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold">What we do.</h1>
        </div>
        <div className="flex-1 flex flex-col md:max-w-[40%] max-w-[70%] lg:mt-4 md:mt-0 justify-center mx-auto mt-8 items-center">
          <p className="font-light">Established in 2000, Hasu Megawatt LLC is engaged in construction of energy facilities, boilers, sub-systems, mechanical components, power transmission lines, utilities service pipelines, pressure vessels and equipment for the energy and mining industry of Mongolia.</p>
          <p className="font-light mt-4">Hasu Megawatt LLC manufactures and offers service in various types and grades of pre-engineered steel structures for underground mine shaft sinking and lateral development, industrial facilities and energy thermal power plant mechanical components.</p>
          <p className="font-light mt-4">With years of “hands-on” experience in energy operation and construction, we commit to being a reliable service provider with comprehensive solutions.</p>
        </div>
      </section>

      <Timeline />

      {/* Company Ownership Section */}
      <section className="mt-20 mb-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 tracking-tight text-blue-800 text-center uppercase">
          Company Ownership
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 lg:mx-[20rem]">
          {teamsdata.map((data, index) => (
            <div key={index} className="bg-gray-200 rounded-2xl text-center hover:shadow-lg transition">
              <Image
                width={300}
                height={300}
                src={data.img || "/default-avatar.png"}
                className="w-full h-auto object-cover rounded-t-2xl"
                alt={data.name}
              />
              <div className="px-4 mt-4 mb-4">
                <p className="text-gray-500 text-[16px] font-thin">{data.position}</p>
                <h1 className="text-[20px] text-black font-thin">{data.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Page;
