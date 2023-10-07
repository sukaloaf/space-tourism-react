"use client";

import Navbar from "../components/Navbar";
import "../styles/technology.css";
import Image from "next/image";
import data from "../data.json";
import { useState, useEffect } from "react";

export default function Technology() {
  const [technologyIndex, setTechnologyIndex] = useState(0); // Initialize technology index state
  const [selectedImageSource, setSelectedImageSource] = useState("");

  const handleButtonClick = (index: number) => {
    setTechnologyIndex(index); // Update index on button click
  };

  const currentTechnology = data.technology[technologyIndex];

  useEffect(() => {
    const handleResize = () => {
      const newImageSource =
        window.innerWidth > 1023
          ? currentTechnology?.images?.portrait || ""
          : currentTechnology?.images?.landscape || "";
      setSelectedImageSource(newImageSource);
    };

    // Call handleResize initially and add resize event listener
    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [technologyIndex]); // Re-run effect whenever technology index changes

  return (
    <div className="background-container">
      <Navbar />
      <div className="flex flex-col items-center mt-8">
        <div className="md:w-full md:pl-12 lg:pl-44">
          <h5 className="text-three">
            <span className="text-three/25 mr-3 font-extrabold">03</span>SPACE
            LAUNCH 101
          </h5>
        </div>
        <div className="w-full lg:flex lg:flex-row-reverse lg:mt-10">
          <div className="flex justify-center mt-10 lg:mt-0">
            <Image
              src={selectedImageSource}
              alt="space technology picture"
              width={750}
              height={750}
              className="h-44 w-screen md:h-[310px] lg:h-[527px] lg:max-w-lg"
            />
          </div>
          <div className="lg:flex lg:justify-evenly">
            <div className="my-6 flex justify-center lg:ml-44">
              <ul className="flex items-center justify-center gap-5 lg:flex-col">
                {data.technology.map((technologyName, index) => (
                  <li key={index}>
                    <button
                      className={`slider2 border border-three/25 w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full
                  ${
                    index === technologyIndex
                      ? "bg-three text-primary"
                      : "text-three hover:border-three active:bg-three active:text-primary"
                  }`}
                      onClick={() => handleButtonClick(index)}
                    >
                      <h4>{index + 1}</h4>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center lg:text-start lg:flex lg:flex-col lg:justify-center lg:px-28">
              <p className="nav-text text-secondary">THE TERMINOLOGY...</p>
              <h3 className="text-three my-3">
                {currentTechnology.name.toUpperCase()}
              </h3>
              <p className="body-text text-secondary px-7 md:px-40 lg:px-0">
                {currentTechnology.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
