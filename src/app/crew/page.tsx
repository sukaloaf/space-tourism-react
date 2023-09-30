"use client";

import Navbar from "../components/Navbar";
import "../styles/crew.css";
import Image from "next/image";
import data from "../data.json";
import { useState } from "react";

export default function Crew() {
  const [crewIndex, setCrewIndex] = useState(0); // Initialize crew index state

  const handleButtonClick = (index: number) => {
    setCrewIndex(index); // Update crew index when a button is clicked
  };

  const currentCrewMember = data.crew[crewIndex];

  const selectedImageSource = currentCrewMember?.images?.webp || "";

  return (
    <div className="background-container">
      <Navbar />
      <div className="flex flex-col items-center mt-8">
        <div className="md:w-full md:pl-12">
          <h5 className="text-three">
            <span className="text-three/25 mr-3 font-extrabold">02</span>MEET
            YOUR CREW
          </h5>
        </div>
        <div className="w-full md:flex md:flex-col-reverse md:h-screen md:justify-between md:max-h-[1024px] lg:flex-row-reverse lg:justify-evenly">
          <div className="flex justify-center mt-10 ">
            <Image
              src={selectedImageSource}
              alt="crew member"
              width={750}
              height={750}
              className="h-56 w-auto md:h-[525px]"
            />
          </div>
          <div className="md:flex md:flex-col-reverse lg:h-[420px] lg:w-[600px]">
            <div className="flex justify-center">
              <hr className="h-px w-10/12 bg-three/25 border-0 md:hidden" />
            </div>
            <div className="my-8 flex justify-evenly w-40 m-auto">
              {data.crew.map((crewMember, index) => (
                <button
                  key={index}
                  className={`w-3.5 h-3.5 bg-three/25 rounded-full hover:bg-three/50 active:bg-three/100 focus:bg-three/100 ${
                    index === crewIndex ? "bg-three/100" : "" // Apply active-button class if index matches
                  }`}
                  onClick={() => handleButtonClick(index)} // Set the click event to change crew index
                ></button>
              ))}
            </div>
            <div className="flex flex-col md:mt-10">
              <h4 className="text-three/50 text-center md:my-2">
                {currentCrewMember.role.toUpperCase()}
              </h4>
              <h3 className="text-three text-center">
                {currentCrewMember.name.toUpperCase()}
              </h3>
              <p className="body-text text-secondary text-center px-10 mt-3 md:px-40">
                {currentCrewMember.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
