'use client';
import { useEffect, useState } from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowDown } from "lucide-react";
import CarouselComponent from "../../Components/Carousel/page";
import { useParams } from 'next/navigation';
import Body from "./body";

// Define the interface for the expected data structure
interface DataType {
  title: {
    heading: string;
    description: string;
  };
  body: Array<any>; // You can replace 'any' with the specific structure if known
}

export default function Home() {
  const { slug } = useParams();
  const [data, setData] = useState<DataType | null>(null); // Type the state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const importedData: { default: DataType } = await import(`@/lib/datas/${slug}`);
        setData(importedData.default); // Set the dynamically imported data
        console.log(`Slug: ${slug}`);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    if (slug) {
      fetchData();
    }
  }, [slug]);

  return (
    <div className="text-white custom-gradient mt-[-4rem] relative">
      {/* Hero Section */}
      <section className="relative w-full h-screen mx-2 border-white border-8 border-t-0 rounded-3xl rounded-t-none md:rounded-bl-none bg-white">
        <Image
          src="/bgimg.png"
          alt="Heating Plant"
          fill
          className="rounded-b-3xl object-cover"
          style={{ filter: 'brightness(50%)' }} // Darken the image for better text readability
        />

        {/* Main Heading Section */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-full md:w-4/6 lg:w-1/2 flex flex-col space-y-4 md:space-y-8 text-left p-4 md:p-8">
          {data && (
            <>
              <h1 className="text-white text-left text-3xl md:text-5xl lg:text-8xl font-extrabold tracking-tight max-w-3xl">
                {data.title.heading}
              </h1>
              <p className="text-white text-left text-base md:text-lg lg:text-xl font-normal max-w-xl">
                {data.title.description}
              </p>
            </>
          )}
          <Button className="mt-4 md:mt-8 w-fit bg-blue-800 hover:bg-blue-900 text-white rounded-xl">
            Write us
            <ChevronRight className="w-6 h-6 ml-2" />
          </Button>
        </div>

        {/* "Be Part" Section */}
        {/* "Be Part" Section */}
<div className="absolute bottom-16 right-0 hidden md:flex items-end transform translate-x-1/2 md:translate-x-0 w-full lg:w-1/2 text-left px-4 md:px-8 text-white text-base md:text-lg lg:text-xl font-light">
  <p className="text-left">
    BE PART OF THE GLOBAL SHIFT <br /> TOWARDS CLEAN, SUSTAINABLE ENERGY SOURCES
  </p>
  <Button className="bg-transparent hover:bg-white hover:text-black transition-color duration-300 text-white rounded-xl mt-4">
    Explore more
    <ArrowDown className="w-6 h-6 ml-4" />
  </Button>
</div>

      </section>

      {/* Info Section */}
      <Body />

      {/* Conditional Section based on body length */}
      <section className={`lg:ml-0 pt-9 bg-[#f0f0f0] ${data?.body && data.body.length % 2 === 0 ? "rounded-tl-3xl" : "rounded-tl-none rounded-tr-3xl lg:mr-0"}`}>
  <div className="mt-8 md:mt-16 pb-16 md:pb-24 px-4 md:px-8 text-center mx-auto">
    <h1 className="text-4xl md:text-6xl font-bold text-blue-800">Work Process</h1>
    <p className="text-black mt-4 md:mt-8 text-lg md:text-xl max-w-3xl mx-auto">
      With Valmet’s proven technology, you can produce heat in a sustainable way...
    </p>
    
    {/* Using grid here for layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-between mt-8 px-18">
      {[
        { img: "/img-1.png", step: "Step 1", text: "Hot water boilers for district heat" },
        { img: "/img-2.png", step: "Step 2", text: "Hot water boilers for industrial needs" },
        { img: "/img-3.png", step: "Step 3", text: "Steam boiler plants for industrial processes" },
        { img: "/img-4.png", step: "Step 4", text: "Boilers for peak loads" },
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center text-black">
          <Image
            src={item.img}
            width={200}
            height={200}
            alt={`Step ${index}`}
            className="w-auto h-auto"
          />
          <h1 className="text-2xl text-blue-800 font-semibold mt-4">{item.step}</h1>
          <p className="max-w-[17rem] text-center font-light">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Heating Plant Projects Section */}
      <section className="px-4 md:px-16 pt-16 w-full bg-white mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800">HEATING PLANT PROJECTS</h1>
        <div className="mt-8">
          <CarouselComponent />
        </div>
      </section>

      <div className="pb-36 custom-gradient"></div>
    </div>
  );
}
