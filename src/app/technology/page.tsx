"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import technologyDesktop from "../../assets/technology/background-technology-desktop.jpg";

export default function technology() {
  return (
    <>
      <Image
        src={technologyDesktop}
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
      <h1>technology</h1>
    </>
  );
}
