"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import crewDesktop from "../../assets/crew/background-crew-desktop.jpg";

export default function Crew() {
  return (
    <>
      <Image
        src={crewDesktop}
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
      <h1>crew</h1>
    </>
  );
}
