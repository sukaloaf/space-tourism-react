"use client";

import Navbar from "../components/Navbar";
import "../styles/destination.css";
import data from "../data.json";
import Image from "next/image";
import React, { useState } from "react";

export default function Destination() {
  // Select active li
  const [selectedDestination, setSelectedDestination] = useState("MOON");

  // retrieve destination data based on selection
  const selectedDestinationData = data.destinations.find(
    (destination) => destination.name.toUpperCase() === selectedDestination
  );

  const handleDestinationChange = (
    destination: React.SetStateAction<string>
  ) => {
    setSelectedDestination(destination);
  };

  const selectedImageSource = selectedDestinationData?.images?.webp || "";

  const destinations = ["MOON", "MARS", "EUROPA", "TITAN"];

  return (
    <div className="background-container">
      <Navbar />
      <div className="flex flex-col items-center mt-8">
        <div className="md:w-full md:pl-12">
          <h5 className="text-three">
            <span className="text-three/25 mr-3 font-extrabold">01</span>PICK
            YOUR DESTINATION
          </h5>
        </div>
        <div className="w-full lg:flex lg:flex-row lg:justify-evenly lg:mt-24">
          <div className="flex justify-center lg:w-[450px]">
            <Image
              src={selectedImageSource}
              alt="planet image"
              width={450}
              height={450}
              className="w-44 my-8 md:w-80 md:my-14 lg:w-full"
            />
          </div>
          <div className="lg:w-[450px]">
            <div className="px-16 md:px-48 lg:px-0">
              <ul className="flex text-center justify-evenly lg:justify-start text-secondary text-base gap-6">
                {destinations.map((destination, index) => (
                  <li
                    key={index}
                    tabIndex={2}
                    className={`cursor-pointer flex items-start h-9 ${
                      selectedDestination === destination
                        ? "text-three border-b-4 border-three cursor-pointer flex items-start h-9 hover:border-b-4 hover:border-neutral-400 active:border-b-4 active:border-three active:text-three focus:border-b-4 focus:border-three focus:text-three"
                        : "cursor-pointer flex items-start h-9 hover:border-b-4 hover:border-neutral-400 active:border-b-4 active:border-three active:text-three focus:border-b-4 focus:border-three focus:text-three"
                    }`}
                    onClick={() => handleDestinationChange(destination)}
                  >
                    {destination}
                  </li>
                ))}
              </ul>
            </div>
            <h2 className="text-three my-3 md:my-5 text-center lg:text-start">
              {selectedDestinationData?.name.toUpperCase()}
            </h2>
            <p className="body-text text-secondary text-center px-8 md:px-20 lg:px-0 lg:text-start">
              {selectedDestinationData?.description}
            </p>
            <div className="flex justify-center">
              <hr className="h-px w-10/12 my-6 bg-three/25 border-0 md:my-10 lg:w-full" />
            </div>
            <div className="text-center flex flex-col md:flex-row md:items-center md:justify-evenly md:w-full md:mb-12">
              <div className="mt-2">
                <p className="subheading2 text-secondary">AVG. DISTANCE</p>
                <p className="subheading1 text-three mt-2">
                  {selectedDestinationData?.distance.toUpperCase()}
                </p>
              </div>
              <div className="my-8 md:my-0 md:mt-2">
                <p className="subheading2 text-secondary">EST. TRAVEL TIME</p>
                <p className="subheading1 text-three mt-2">
                  {selectedDestinationData?.travel.toUpperCase()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
