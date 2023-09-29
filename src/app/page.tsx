"use client";

import Navbar from "./components/Navbar";
import "../app/styles/home.css";

export default function Home() {
  return (
    <div className="background-container">
      <Navbar />
      <div className="flex flex-col items-center text-center mt-12 md:mt-28 lg:flex-row lg:justify-around lg:mt-48">
        <div className="px-10 lg:w-[450px] lg:px-0">
          <h5 className="text-secondary">SO, YOU WANT TO TRAVEL TO</h5>
          <h1 className="text-three m-7">SPACE</h1>
          <p className="text-secondary body-text">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <button className="explore-button bg-three color-primary tracking-widest w-40 mt-16 md:w-60 md:mt-40 lg:w-72">
            <h4>EXPLORE</h4>
          </button>
        </div>
      </div>
    </div>
  );
}
