"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import destinationDesktop from "../../assets/destination/background-destination-desktop.jpg";

export default function Destination() {
  return (
    <>
      <Image
        src={destinationDesktop}
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
      <h1>destination</h1>
    </>
  );
}
