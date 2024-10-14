"use client";
import React, { useEffect, useState } from "react"; // Importing React and hooks
import Image from "next/image"; // Importing Next.js Image component
import { CheckIcon } from "lucide-react"; // Importing CheckIcon from lucide-react
import { useParams } from "next/navigation"; // Importing useParams from next/navigation
//import "./styles"

// Define the shape of the Heating Plant Data
interface HeatingPlantItem {
  id: number; // Ensure id is a number
  heading: string;
  description: string;
  list: (string | number | boolean)[];
}

interface HeatingPlantData {
  body: HeatingPlantItem[];
}

function Body() {
  const { slug } = useParams(); // Getting the slug from the URL
  const [heatingPlantData, setHeatingPlantData] =
    useState<HeatingPlantData | null>(null); // Set state to hold heating plant data

  useEffect(() => {
    // Dynamically import the HeatingPlant data based on the slug
    const loadHeatingPlantData = async () => {
      try {
        const HeatingPlant = await import(`@/lib/datas/${slug}`);
        setHeatingPlantData(HeatingPlant.default || HeatingPlant); // Adjust based on how you export HeatingPlant
      } catch (error) {
        console.error("Error loading heating plant data:", error);
      }
    };

    loadHeatingPlantData();
  }, [slug]); // Dependency array to run the effect when slug changes

  // Optionally render loading state or error handling here
  if (!heatingPlantData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Mapping over the heatingPlantData.body array to create sections for each item */}
      {heatingPlantData.body.map((item, index) => {
        const isLastItem = index === heatingPlantData.body.length - 1; // Checking if the current item is the last in the array

        // Special case: both last item and id === 1
        if (isLastItem && item.id === 1) {
          return (
            <section className="w-full mt-[0rem]">
              <div className="md:mx-2 -mb-2">
                <div className="flex flex-col md:flex-row text-center space-x-0 w-full h-full">
                  <div className="flex w-1/2">
                    <div className=" border-[#f0f0f0] mt-[-0.5rem] rounded-tr-none rounded-b-none rounded-tl-none bg-[#f0f0f0]">
                      <Image
                        width={900}
                        height={900}
                        alt="Heating Facility"
                        className="w-full h-full rounded-3xl border-[#f0f0f0] border-8"
                        src="/img-76.png"
                      />
                    </div>
                    <div className="bevel6"></div>
                  </div>

                  <div className="flex items-end md:w-1/2">
                    <div className="bevel11"></div>

                    <div className="text-left mt-2  md:p-8 ">
                      <h1 className="text-2xl md:text-4xl font-extrabold mb-4">
                        {item.heading}
                      </h1>
                      <p className="text-base md:text-xl leading-7 font-thin">
                        {item.description}
                      </p>
                      <ul className="mt-4 space-y-2 text-base md:text-xl font-thin">
                        {item.list.map((listItem, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckIcon className="mr-2" />
                            {listItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }

        // For even id items
        if (item.id % 2 === 0) {
          if (isLastItem) {
            // For the last even item
            return (
              <section
                className="w-full flex flex-col md:flex-row space-x-0 mt-2"
                key={item.id}
              >
                <div className="p-4 md:p-8 w-full md:w-1/2 text-left">
                  <h1 className="text-2xl md:text-4xl font-extrabold mb-4">
                    {item.heading}
                  </h1>
                  <p className="text-base md:text-xl leading-7 font-thin">
                    {item.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-base md:text-xl font-thin">
                    {item.list.map((listItem, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckIcon className="mr-2" />
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-1/2 items-end flex">
                  <div className="bevel9"></div>
                  <div className="bevel10"></div>

                  <div className="bg-[#f0f0f0] rounded-3xl rounded-br-none w-full">
                    <Image
                      width={700}
                      height={700}
                      alt="Maintenance Services"
                      className="w-full  border-[#f0f0f0] bg-white rounded-3xl border-8"
                      src="/1.png"
                    />
                  </div>
                </div>
              </section>
            );
          } else {
            // For non-last even items
            return (
              <section
                key={item.id}
                className="flex flex-col md:flex-row space-x-0 md:space-x-0 mt-2 md:mx-2 w-full bg-[#f0f0f0] md:bg-transparent md:text-white text-black md:rounded-none rounded-3xl"
              >
                <div className="p-4 md:p-8 w-full md:w-1/2 text-left">
                  <h1 className="text-2xl md:text-4xl font-extrabold mb-4">
                    {item.heading}
                  </h1>
                  <p className="text-base md:text-xl leading-7 font-thin">
                    {item.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-base md:text-xl font-thin">
                    {item.list.map((listItem, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckIcon className="mr-2" />
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full md:w-1/2 border-[#f0f0f0] md:border-white rounded-3xl md:rounded-b-3xl rounded-b-3xl md:rounded-t-3xl bg-[#f0f0f0] md:bg-white flex-grow">
                  <Image
                    width={900}
                    height={900}
                    alt="Heating Facility"
                    className="w-full h-full object-cover rounded-3xl border-8 border-[#f0f0f0] md:border-white"
                    src="/img-76.png"
                  />
                </div>
              </section>
            );
          }
        } else {
          // Handling for odd id items (excluding id === 1, as handled above)
          if (item.id === 1) {
            return (
              <section key={item.id} className="mt-[-0.5rem]">
                <div className="md:mx-2 mt-4 md:mt-0">
                  <div className="flex flex-col md:flex-row w-full">
                    {/* Left Side (Image Section) */}
                    <div className="flex w-full md:w-1/2 items-stretch">
                      <div className="w-full border-[#f0f0f0] md:border-white rounded-3xl md:rounded-b-3xl rounded-b-none md:rounded-t-none bg-[#f0f0f0] md:bg-white flex-grow">
                        <Image
                          width={900}
                          height={900}
                          alt="Heating Facility"
                          className="w-full h-full object-cover rounded-3xl border-8 border-[#f0f0f0] md:border-white"
                          src="/img-76.png"
                        />
                      </div>
                      {/* Keep bevel6 hidden if not in use */}
                    </div>
                    <div className="bevel6 md:block hidden"></div>

                    {/* Right Side (Text Section) */}
                    <div className="flex w-full md:w-1/2 text-left mt-0 md:mt-2 max-w-4xl lg:pt-0 flex-grow bg-[#f0f0f0] rounded-b-3xl md:rounded-b-none text-black md:bg-transparent md:text-white">
                      <div className="px-3 pb-4 py-4 md:px-8 md:pb-0 md:py-8 flex flex-col h-full">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 max-w-xl">
                          {item.heading}
                        </h1>
                        <p className="text-base mt-4 md:text-xl leading-7 font-thin">
                          {item.description}
                        </p>
                        <ul className="mt-8 md:mb-6 space-y-2 text-base md:text-xl font-thin">
                          {item.list.map((listItem, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckIcon className="mr-2 w-4 h-4" />
                              {listItem}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          } else {
            // Handling other odd id items
            if (isLastItem) {
              return (
                <section
  key={item.id}
  className="flex md:mx-2 flex-col md:flex-row mt-2 space-x-0 items-stretch"
>
  <div className="flex w-full md:w-1/2 items-end">
    <div className="w-full border-[#f0f0f0] md:border-[#f0f0f0] rounded-3xl md:rounded-b-none  rounded-b-none md:rounded-t-3xl bg-[#f0f0f0] md:bg-[#f0f0f0] flex-grow h-full">
      <Image
        width={900}
        height={900}
        alt="Heating Facility"
        className="w-full h-full object-cover rounded-3xl border-8 border-[#f0f0f0] md:border-[#f0f0f0]"
        src="/img-76.png"
      />
    </div>
    <div className="bevel8 md:block hidden"></div>
  </div>

  <div className="rounded-bl-3xl p-4 md:p-8 w-full md:w-1/2 text-left text-black md:bg-transparent md:text-white bg-[#f0f0f0] h-full">
    <h1 className="text-2xl md:text-4xl font-extrabold mb-4">
      {item.heading}
    </h1>
    <p className="text-base md:text-xl leading-7 font-thin">
      {item.description}
    </p>
    <ul className="mt-4 space-y-2 text-base md:text-xl font-thin">
      {item.list.map((listItem, idx) => (
        <li key={idx} className="flex items-center">
          <CheckIcon className="mr-2" />
          {listItem}
        </li>
      ))}
    </ul>
  </div>
</section>

              );
            }
          }
        }
      })}
    </div>
  );
}

export default Body;
