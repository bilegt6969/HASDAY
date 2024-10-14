'use client'
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Project_data from "./data";
import Link from "next/link";
import CountUp from "react-countup";


function Page() {
  const [countState, setCountState] = useState({
    isCounting: false,
    isCompleted: false,
  });
  const ref = useRef(null);

  // Intersection Observer to trigger counting when component comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCountState((prev) => ({ ...prev, isCounting: true }));
          if (ref.current) {
            observer.unobserve(ref.current); // Unobserve after counting starts
          }
        }
      },
      { threshold: 0.3 } // Lowered threshold to 0.3 for earlier triggering
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="h-full w-full custom-gradient mt-[-4rem]">
      <section className="relative top-[-4rem] flex-grow flex h-screen">
        <div className="relative top-[20vh] md:top-[40vh] left-4 md:left-10 max-w-[45rem] text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase">
            Projects <span className="text-[#6581C7]">completed</span> <br />{" "}
            with our staff
          </h1>
          <p className="mt-6 font-thin text-white leading-relaxed px-4">
            As a third generation family owned and operated business, California
            Premier Energy is driven by an unparalleled understanding of the
            roofing, solar, and battery needs of today’s homes. We’re your
            trusted partner in sustainable energy solutions.
          </p>
        </div>
      </section>

      <section className="relative text-left mt-0 w-full mx-3  flex flex-col md:flex-row items-stretch">
        <div className="items-end flex md:w-[40%]">
        <div
          className="relative px-6 md:px-12 pt-6 md:pt-12 w-full rounded-t-2xl rounded-tr-2xl bg-[#f0f0f0] flex flex-col justify-between">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-[#1845AD]">
            OUR PROJECTS
          </h1>
          <p className="mt-6 font-light text-black leading-relaxed px-4">
            With Valmet’s proven and reliable technology, you can produce heat
            or steam in a sustainable way. We offer heating plant solutions in
            the thermal capacity range from 10 to 150 MWth – all designed to
            meet customer needs and match the type of fuel available.
          </p>
        </div>
        <div className="bevel4"></div>
        </div>
        

        {/* Right section with ref for IntersectionObserver */}
        <div
          ref={ref}
          className="relative flex flex-1 w-full rounded-2xl text-white flex-col md:flex-row"
        >
          <div className="w-full flex flex-col lg:flex-row justify-around items-center px-6 py-20 rounded-2xl text-white">
            <div className="flex flex-col items-center space-y-2 lg:space-y-4">
              <p className="text-lg md:text-xl lg:text-2xl text-center">
                Completed
                <br />
                Projects
              </p>
              <span className="font-bold text-4xl md:text-6xl lg:text-7xl">
                {countState.isCounting && (
                  <CountUp
                    className="account-balance"
                    start={0}
                    end={100}
                    duration={2}
                    useEasing={true}
                    separator=","
                  />
                )}
              </span>
            </div>

            <div className="flex flex-col items-center space-y-2 lg:space-y-4">
              <p className="text-lg md:text-xl lg:text-2xl text-center">
                LTI Free
                <br />
                Manhours
              </p>
              <span className="font-bold text-4xl md:text-6xl lg:text-7xl">
                {countState.isCounting && (
                  <CountUp
                    className="account-balance"
                    start={0}
                    end={30000000}
                    duration={2}
                    useEasing={true}
                    separator=","
                  />
                )}
              </span>
            </div>

            <div className="flex flex-col items-center space-y-2 lg:space-y-4">
              <p className="text-lg md:text-xl lg:text-2xl text-center">
                Total manhours
                <br />
                employed
              </p>
              <div className="flex items-center">
                <span className="font-bold text-4xl md:text-6xl lg:text-7xl ">
                  {countState.isCounting && (
                    <CountUp
                      className="account-balance"
                      start={0}
                      end={50}
                      duration={2}
                      useEasing={true}
                      separator=","
                      onEnd={() =>
                        setCountState((prev) => ({
                          ...prev,
                          isCompleted: true,
                        }))
                      }
                    />
                  )}
                </span>

                {/* Add animation class when countState.isCompleted is true */}
                {countState.isCompleted && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="39"
                    height="39"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`lucide lucide-plus transition-transform duration-500 ease-out transform ${
                      countState.isCompleted
                        ? "scale-100 opacity-100"
                        : "scale-0 opacity-0"
                    }`}
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="p-4 md:p-8 px-4 md:px-24 pt-12 md:pt-24 bg-[#f0f0f0] rounded-tr-3xl mx-3 divide-y ">
          {/* Header Row */}
          <div className="grid grid-cols-3 bg-blue-800 text-white font-bold text-center rounded-t-xl ">
            <div className="col-span-3 p-4 ">All Projects</div>
          </div>
          <div className="grid grid-cols-2 divide-x border border-gray-300 divide-gray-300 text-center bg-white font-medium">
            <div className="col-span-1 p-4">Heating Plant</div>
            <div className="col-span-1 p-4">Construction</div>
          </div>

          {/* Sub-Header Row */}
          <div className="grid grid-cols-3 divide-x bg-white divide-gray-300 text-center font-medium border-gray-300 border">
            <div className="col-span-1 p-4">
              ENGINEERING AND TECHNICAL SERVICE
            </div>
            <div className="col-span-1 p-4">Mine Contracting</div>
            <div className="col-span-1 p-4">Construction</div>
          </div>

          {/* Second Row: Engineering services and Mine contracting */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y divide-x border">
            {Project_data.map((item, index) => (
              <div key={index} className="relative group overflow-hidden ">
                <Link key={item.id} href={`/projects/${item.id}`}>
                  {/* Image */}
                  <div className="relative w-full h-0 pb-[100%] overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.alt}
                      className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-125 p-14"
                      width={400}
                      height={400}
                      objectFit="fill"
                    />
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                  {/* Text animation */}
                  <div className="absolute bottom-4 left-5 w-full p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                    <p className="text-lg font-thin">{item.company}</p>
                    <p className="text-xl font-medium uppercase">{item.title}</p>
                    <p className="text-sm font-light">
                      {item.location} | {item.date}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;

