'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import CountUp from 'react-countup';
import { Plus } from 'lucide-react';

function HomeCard() {
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
      { threshold: 0.7 } // Trigger when 70% of the component is visible
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
    <div className="bg-[#f0f0f0] px-0 sm:px-0 py-8 md:py-12 lg:py-16">
      <section className="text-left px-2 sm:px-6 md:px-12 xl:px-36">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold uppercase">
          We value the law and <span className="text-[#5374C6]">the values</span>{" "}
          of the company, introduce the environmentally friendly advanced{" "}
          <span className="text-[#5374C6]">technology</span>, and always{" "}
          contribute to <span className="text-[#5374C6]">the prosperity</span> of
          Mongolia.
        </h1>
      </section>

      <section className="flex flex-col lg:flex-row gap-8 mt-8 lg:mt-16">
        <div
          ref={ref}
          className="w-full lg:w-2/3 flex flex-col md:flex-row md:justify-around md:items-center px-4 py-12 md:px-6 md:py-16 lg:px-20 lg:py-20 rounded-2xl text-white custom-gradient text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-7xl"
        >
          <div className="flex  md:flex-col flex-row items-center space-y-2 lg:space-y-4">
            <p className="text-lg md:text-xl lg:text-2xl text-left md:text-center">
              Completed
              <br />
              Projects
            </p>
            <span className="font-bold font-sans text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl">
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

          <div className="flex md:flex-col flex-row items-center space-y-2 lg:space-y-4 ">
            <p className="text-lg md:text-xl lg:text-2xl  text-left md:text-center">
              LTI Free
              <br />
              Manhours
            </p>
            <span className="font-bold font-sans  text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl">
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

          <div className="flex  md:flex-col flex-row items-center space-y-2 lg:space-y-4">
            <p className="text-lg md:text-xl lg:text-2xl  text-left md:text-center">
              Total manhours
              <br />
              employed
            </p>
            <div className="flex items-center font-sans">
              <span className="font-bold text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl">
                {countState.isCounting && (
                  <CountUp
                    className="account-balance"
                    start={0}
                    end={50}
                    duration={2}
                    useEasing={true}
                    separator=","
                    onEnd={() =>
                      setCountState((prev) => ({ ...prev, isCompleted: true }))
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

        <div className="lg:w-1/3 w-full px-2 sm:px-6 md:px-12 lg:px-0 flex flex-col justify-center space-y-4 md:pr-24">
          <p className="text-base sm:text-lg md:text-xl text-left">
            We will provide international standard energy operation, steel
            fabrication, and mining construction support services through a
            dedicated collaborative approach for our customers, focusing on
            excellence in safety, performance, and quality, building long-term
            relationships based on a best-for-project philosophy.
          </p>
          <div className="text-left mt-4">
            <Button
              className="text-blue-500 hover:text-blue-700 text-lg md:text-xl p-4 md:p-6 border-blue-600 px-8 md:px-12"
              variant="outline"
            >
              Write us
              <ChevronRightIcon className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeCard;
