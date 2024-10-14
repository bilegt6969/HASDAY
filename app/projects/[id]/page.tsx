"use client";
import React, { useState } from "react";
import {
  MapPin,
  Calendar,
  ChevronRight,
  ChevronLeft,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useParams } from 'next/navigation';
import Project_data from "../data";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function Page() {
  const { id } = useParams(); // Accessing the dynamic route parameter

  const item_1 = Project_data.find(item => item.id === id);

  // Check if item_1 is undefined
  if (!item_1) {
    return <div className="text-center">Project not found.</div>; // Render a message or a fallback UI
  }

  const [opacities, setOpacities] = useState<number[]>([]);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slides: item_1.slides.length,
    loop: true,
    detailsChanged(s) {
      const new_opacities = s.track.details.slides.map(
        (slide) => slide.portion,
      );
      setOpacities(new_opacities);
    },
  });

  const nextSlide = () => {
    slider.current?.next(); // Correct way to access slider methods
  };

  const prevSlide = () => {
    slider.current?.prev(); // Correct way to access slider methods
  };

  return (
    <div className="custom-gradient bg-gray-100 md:p-2 mr-1">
      <section className="h-full">
        <div className="flex flex-col md:flex-row gap-2">
          {/* Left Section */}
          <div className="md:w-2/5 flex flex-col">
            {/* Project Title */}
            <div className="mb-2 bg-white p-4 md:p-16 rounded-xl shadow-lg">
              <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900 uppercase">
                {item_1.body.title}
              </h1>
              <p className="font-normal text-black">Fit-Out Project</p>
            </div>

            {/* Location, Year, and Project Description */}
            <div className="bg-white p-4 md:p-16 rounded-xl shadow-lg flex flex-col space-y-4">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="border rounded-xl p-3">
                    <MapPin className="text-blue-800 h-6 w-6" />
                  </div>
                  <p className="font-normal text-black">
                    {item_1.location}
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="border rounded-xl p-3">
                    <Calendar className="text-blue-800 h-6 w-6" />
                  </div>
                  <p className="font-normal text-black">{item_1.date}</p>
                </div>
              </div>

              {/* Project Description */}
              <p className="font-light text-lg text-gray-700">
                {item_1.body.description}
              </p>
            </div>
          </div>

          {/* Right Section - Carousel */}
          <div className="md:w-3/5 flex-grow bg-white p-4 md:p-6 rounded-xl relative">
            <div className="relative w-full h-64 md:h-full bg-white rounded-xl overflow-hidden">
              <div ref={sliderRef} className="fader">
                {item_1.slides.map((item, idx) => (
                  <div
                    key={idx}
                    className="fader__slide"
                    style={{ opacity: opacities[idx] }}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                ))}
              </div>
              {/* Navigation buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full"
              >
                <ChevronLeft className="h-8 w-8 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full"
              >
                <ChevronRight className="h-8 w-8 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-2">
        <div className="bg-white rounded-2xl p-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 hover:text-blue-500">
            {Project_data.map((item) => (
              <div
                key={item.id}
                className="relative hover:text-blue-500 group w-full h-0 pb-[90%] overflow-hidden border-[2vh] rounded-3xl border-[#F5F5F5] lalar"
              >
                {/* Image */}
                <Image
                  src={item.img}
                  alt={item.alt}
                  layout="fill" // Use fill to cover the square area
                  objectFit="cover" // Cover the area while maintaining aspect ratio
                  className="transition-transform duration-300 group-hover:scale-105 ring-4" // Updated line
                />

                {/* Overlay Text and Icon */}
                <div className="absolute inset-0 flex flex-col justify-between p-0 rounded-xl">
                  <div className="flex items-center justify-end ">
                    <div className="bevel12"></div>
                    <div className="bevel13"></div>
                    <div className="bg-[#F5F5F5] pl-3 pb-3 rounded-bl-2xl">
                      <div className="bg-[#f5f5f5] group-hover:bg-blue-800 transition-colors duration-250 group-hover:border-blue-800 p-1 rounded-full border-gray-300 border-1">
                        <ArrowUpRight className="h-5 w-5 text-gray-300 group-hover:text-white" />
                      </div>
                    </div>
                  </div>

                  

                  <div className="relative flex">
                    <div className="flex-col w-full">
                      <div className="bevel15"></div>
                      <div className="flex items-end">
                        <div className="bg-[#f5f5f5] w-4/6 rounded-tr-2xl flex p-2 pb-0 pl-0">
                          <p className="text-gray-800 font-semibold ">
                            {item.company}
                            <br />
                            {item.title}
                          </p>
                        </div>
                        <div className="bevel14"></div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
