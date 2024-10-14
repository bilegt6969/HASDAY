'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { TimeLineData } from '../Data';

const Timeline = () => {
  const [scrollXValue, setScrollXValue] = useState(0);
  const [maxScrollX, setMaxScrollX] = useState(0); // Maximum horizontal scroll value
  const timelineRef = useRef(null); // Reference to the scrollable div

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        setScrollXValue(timelineRef.current.scrollLeft); // Update horizontal scroll position
      }
    };

    const currentRef = timelineRef.current;
    if (currentRef) {
      setMaxScrollX(currentRef.scrollWidth - currentRef.clientWidth); // Set the maximum scrollable width
    }

    currentRef.addEventListener('scroll', handleScroll); // Attach the scroll event listener

    return () => {
      currentRef.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, []);

  // Calculate the scroll percentage (from 0 to 1)
  const scrollPercentage = maxScrollX > 0 ? scrollXValue / maxScrollX : 0;

  return (
    <div className="overflow-x-auto py-8 text-black scrollbar-hide" ref={timelineRef}>
      <div className="md:ml-36">
        <div className="relative flex space-x-8 px-2 md:px-6" style={{ width: 'max-content' }}>
          {/* Timeline with alternating heights */}
          {TimeLineData.events.map((event, index) => {
            const lineWidth = 500; // Line width in pixels instead of vh
            const totalTimelineWidth = TimeLineData.events.length * lineWidth; // Total length of all lines combined
            const lineScroll = scrollPercentage * totalTimelineWidth; // How much of the total line is scrolled

            // For each line, we color it proportionally based on its position in the total scroll
            const currentLineStart = index * lineWidth; // Start position of this line
            const currentLineEnd = currentLineStart + lineWidth; // End position of this line
            const lineColorWidth = Math.max(0, Math.min(lineScroll - currentLineStart, lineWidth)); // Width of the blue line

            return (
              <div key={index} className="relative flex flex-col items-center min-w-[220px] md:min-w-[250px]">
                {/* Alternating vertical positioning with larger difference */}
                <div className={`relative ${index % 2 === 0 ? 'mb-[0rem]' : 'mt-[28rem]'} w-[220px] md:w-[250px] text-left`}>
                  {/* Event year */}
                  <span className="text-center text-xl md:text-2xl font-extrabold mb-3">{event.year}</span>

                  {/* Event card */}
                  <h1 className="text-lg md:text-xl font-extrabold mb-3 mt-2">{event.title}</h1>
                  <p className="text-sm md:text-md">{event.description}</p>
                  <Image 
                    src={event.image} 
                    alt={event.description} 
                    height={180}
                    width={270}
                    className="w-full h-[120px] md:h-[150px] object-cover rounded-lg mb-3 mt-[1rem]"
                  />
                </div>

                {/* Circle connector */}
                <div className="absolute flex top-[45%] left-[0%] items-center transform -translate-y-1/2 w-[500px]">
                  {/* Dot */}
                  <div className="w-4 h-4 bg-blue-800 p-2 border-8 rounded-full border-gray-200 z-10"></div>
                  
                  {/* Gray line as the base */}
                  <div className="h-[6px] w-full bg-gray-200 relative">
                    {/* Blue line overlay that grows with scroll, coloring progressively */}
                    <div
                      className="absolute top-0 left-0 h-full bg-blue-800"
                      style={{
                        width: `${lineColorWidth}px`, // Growing the blue line for each section
                        transition: 'width 0.1s ease-out',
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
