"use client";

import Link from "next/link";
import Image from "next/image";
import homeDesktop from "../assets/home/background-home-desktop.jpg";
import homeTablet from "../assets/home/background-home-tablet.jpg";
import homeMobile from "../assets/home/background-home-mobile.jpg";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    // Function to determine the appropriate background image based on screen width
    const updateBackgroundImage = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 640) {
        setBackgroundImage(homeMobile);
      } else if (screenWidth <= 1024) {
        setBackgroundImage(homeTablet);
      } else {
        setBackgroundImage(homeDesktop);
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
      <div>
        <Navbar />
        <h1>home</h1>
      </div>
    </>
  );
}
