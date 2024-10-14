"use client";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS
import "tailwindcss/tailwind.css";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current index

  const slides = [
    {
      img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
      title: "Central Heating Plant",
      description: `Shaft 2, the most important underground development facility for the Oyu Tolgoi project, has been successfully completed and handed over. Dayan Contract Mining LLC successfully completed the construction of the Shaft-2, the world's largest and latest underground mine shaft.
      Once Shaft 2 is fully commissioned, it will be the main access to the Oyu Tolgoi underground mine. The shaft will be used for transporting up to 300 people per cage, the movement of equipment and materials. The headframe, at a height of 96m, houses the 10m diameter, 1284m deep shaft. The entire shaft construction – from sinking through to equipping (roughly 3000 tons of steel) – has taken 3 years 4 months to complete. 
      Shaft 2 production and service hoists are the largest Koepe (friction) hoists in the world employing approximately 32 kilometers (270 tons) of steel ropes. The entire 24 rope installation process required 25 days by a team of approximately 300 employees. 
      This achievement is one of the safest, most technically challenging, and efficient rope-ups undertaken anywhere in the world.`,
      company: "Oyu Tolgoi LLC",
      location: "Southern Mongolia",
    },
    {
      img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      title: "Another Slide",
      description: `Shaft 2, the most important underground development facility for the Oyu Tolgoi project, has been successfully completed and handed over.`,
      company: "Company Name",
      location: "Location Info",
    },
    // Add more slides if needed
  ];

  const handleSlideChange = (index: React.SetStateAction<number>) => {
    setCurrentIndex(index); // Update the current index on slide change
  };

  return (
    <div className=" flex flex-col md:flex-row border rounded-2xl ">
      <div className="w-full">
        {/* Carousel */}
        <div className="">
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showIndicators={false}
            autoPlay={false}
            showThumbs={true}
            thumbWidth={120}
            className="shadow-xl rounded-xl"
            selectedItem={currentIndex}
            onChange={handleSlideChange}
            renderThumbs={() =>
              slides.map((slide, index) => (
                <Image
                  key={index}
                  src={slide.img}
                  height={100}
                  width={100}
                  alt={`Thumbnail ${index}`}
                  className="h-[110px] object-cover rounded focus:rounded-xl active:rounded focus:ring"
                />
              ))
            }
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className={`absolute top-1/2 left-[-20px] md:left-[-30px] pl-8 -pr-8 py-4 transform -translate-y-1/2 rounded-full shadow-lg z-10 ${
                    currentIndex === 0
                      ? "bg-white text-blue-700 border-blue-700"
                      : "bg-blue-800 text-white"
                  }`}
                >
                  <ChevronLeft
                    className={`h-6 w-6 ${
                      currentIndex === 0 ? "text-blue-700" : "text-white"
                    }`}
                  />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="absolute top-1/2 right-[-20px] md:right-[-30px] pr-8 -pl-8 py-4 transform -translate-y-1/2 bg-blue-800 rounded-full shadow-lg z-10 flex text-blue-700"
                >
                  <ChevronRight className="text-white h-6 w-6" />
                </button>
              )
            }
          >
            {slides.map((slide, index) => (
              <div key={index} className="flex flex-col md:flex-row w-full">
                <div className="p-6 w-full md:w-3/5">
                  <Image
                    key={index}
                    src={slide.img}
                    height={100}
                    width={100}
                    alt={`Thumbnail of ${slide.title}`}
                    className="w-full h-auto object-fill rounded-xl"
                  />
                </div>
                <div className="w-full md:w-2/5">
                  <div className="text-left space-y-4 p-4">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-blue-800">
                      {slide.title}
                    </h2>
                    <p className="text-gray-600 font-light flex items-center">
                      <MapPinIcon className="h-5 w-5 text-blue-800 mr-2" />
                      {slide.location}
                    </p>
                    <p className="text-gray-700 text-sm md:text-xl font-light p-4">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;
