"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import technologyDesktop from "../../assets/technology/background-technology-desktop.jpg";
import technologyTablet from "../../assets/technology/background-technology-tablet.jpg";
import technologyMobile from "../../assets/technology/background-technology-mobile.jpg";

export default function Technology() {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    // Function to determine the appropriate background image based on screen width
    const updateBackgroundImage = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 640) {
        setBackgroundImage(technologyMobile as any);
      } else if (screenWidth <= 1024) {
        setBackgroundImage(technologyTablet as any);
      } else {
        setBackgroundImage(technologyDesktop as any);
      }
    };

    // Initial call to set the background image
    updateBackgroundImage();

    // Event listener to update the background image on window resize
    window.addEventListener("resize", updateBackgroundImage);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateBackgroundImage);
    };
  }, []);

  return (
    <>
      <Image
        src={backgroundImage}
        alt="background image"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <Navbar />
      <h1>T</h1>
    </>
  );
}
