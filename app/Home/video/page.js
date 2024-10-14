'use client';

import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline';

function VideoPage() {
  const [mute, setMute] = useState(true); // Initially muted
  const videoRef = useRef(null); // Reference for the video element

  const handleMuteToggle = () => {
    setMute(prevMute => !prevMute);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted; // Mute or unmute the video
    }
  };

  return (
    <div className='flex items-center justify-center border-white md:border-r-8 mt-[-4rem] bg-[#f0f0f0]'>
      <div className="relative w-full h-screen lg:h-full overflow-hidden clip-corner">
        <video
          ref={videoRef}
          autoPlay
          loop
          preload='auto'
          playsInline
          muted={mute}
          className="object-cover h-screen w-full"
        >
          <source src="./background.mp4" type="video/mp4" />
        </video>

        <button
          onClick={handleMuteToggle}
          className="absolute bottom-16 left-28 bg-opacity-60 p-2 rounded-full justify-start hidden sm:block"
        >
          {mute ? (
            <SpeakerXMarkIcon className="h-8 w-8 text-white" />
          ) : (
            <SpeakerWaveIcon className="h-8 w-8 text-white" />
          )}
        </button>

        {/* Content Overlay */}
        <div className="absolute -bottom-2 -right-2 w-[99%] md:w-2/3 lg:w-3/6 xl:w-1/3 h-fit custom-gradient p-6 text-white border-[#F0F0F0] border-[0.5rem] rounded-3xl">
          {/* Mute Button Positioned Relatively to the Card */}
          <button
            onClick={handleMuteToggle}
            className="absolute block sm:hidden -top-16 right-4 bg-opacity-60 p-2 rounded-full"
          >
            {mute ? (
              <SpeakerXMarkIcon className="h-8 w-8 text-white" />
            ) : (
              <SpeakerWaveIcon className="h-8 w-8 text-white" />
            )}
          </button>

          {/* Decorative Elements */}
          <div className="bevel-inverted"></div>
          <div className="bevel"></div>
          <div className="bevel2-inverted"></div>
          <div className="bevel2"></div>

          <h1 className="text-4xl font-bold uppercase mb-2">
            Welcome To, <br /> Khasu Dayan
          </h1>
          <p className='text-[16px] font-thin mb-2'>
            "We will provide international standard energy operation, steel fabrication, electric systems, switch systems, and mining construction support services through a dedicated collaborative approach for our customers, with excellence in safety, performance, and quality, achieving expectations and building long-term relationships based on a best-for-project philosophy."
          </p>
          <div className='flex items-center w-full'>
            <Button className="text-blue-500 px-8 py-4 text-lg items-center justify-center" variant="outline">
              Write us
              <ChevronRight className="h-6 w-6 text-blue-600" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPage;
