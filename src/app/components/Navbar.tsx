"use client";

import logo from "../../assets/shared/logo.svg";
import hamburger from "../../assets/shared/icon-hamburger.svg";
import close from "../../assets/shared/icon-close.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Update isOpen when the screen width changes
  useEffect(() => {
    const handleResize = () => {
      // Set isOpen to false on screen width change
      setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //Active state
  const pathname = usePathname();

  return (
    <nav>
      <div className="flex justify-between mx-10 mt-10 md:mt-0 md:ml-10 md:mx-0 lg:mt-16 lg:ml-16 lg:mx-0">
        <div className="flex items-center">
          <Image src={logo} alt="logo" width={48}></Image>
        </div>
        <div className="flex items-center">
          <hr className="bg-three/25 h-px w-2/6 border-none absolute left-44 z-10 hidden lg:block" />
          <button onClick={toggleMenu} className="z-10">
            <Image
              src={isOpen ? close : hamburger}
              alt={isOpen ? "Close menu" : "Open menu"}
              width={48}
              className="md:hidden"
            ></Image>
          </button>
        </div>
        {isOpen && (
          <div className="absolute top-0 right-0 bg-three/10 backdrop-blur-lg w-2/3 h-screen z-0">
            <ul className="text-three mt-36 ml-8 text-base flex flex-col justify-evenly gap-8">
              <li tabIndex={2}>
                <a
                  href="/"
                  className={
                    pathname === "/"
                      ? "border-r-4 border-three block w-full"
                      : "active:border-r-4 active:border-three active:pr-1 focus:border-r-4 focus:border-three focus:pr-1"
                  }
                >
                  <span className="font-bold mr-2">00</span>
                  HOME
                </a>
              </li>
              <li tabIndex={2}>
                <a
                  href="/destination"
                  className={
                    pathname === "/destination"
                      ? "border-r-4 border-three block w-full"
                      : "active:border-r-4 active:border-three active:pr-1 focus:border-r-4 focus:border-three focus:pr-1"
                  }
                >
                  <span className="font-bold mr-2">01</span>
                  DESTINATION
                </a>
              </li>
              <li tabIndex={2}>
                <a
                  href="/crew"
                  className={
                    pathname === "/crew"
                      ? "border-r-4 border-three block w-full"
                      : "active:border-r-4 active:border-three active:pr-1 focus:border-r-4 focus:border-three focus:pr-1"
                  }
                >
                  <span className="font-bold mr-2">02</span>
                  CREW
                </a>
              </li>
              <li tabIndex={2}>
                <a
                  href="/technology"
                  className={
                    pathname === "/technology"
                      ? "border-r-4 border-three block w-full"
                      : "active:border-r-4 active:border-three active:pr-1 focus:border-r-4 focus:border-three focus:pr-1"
                  }
                >
                  <span className="font-bold mr-2">03</span>
                  TECHNOLOGY
                </a>
              </li>
            </ul>
          </div>
        )}
        <div className="bg-three/10 w-3/5 backdrop-blur-sm hidden md:block">
          <ul className="flex text-center justify-evenly text-three text-sm gap-12">
            <li tabIndex={1} className="cursor-pointer flex items-center">
              <a
                href="/"
                className={
                  pathname === "/"
                    ? "flex items-center  h-24 border-b-4 border-three pt-1"
                    : "flex items-center  h-24 hover:border-b-4 hover:border-neutral-400 hover:pt-1 active:border-b-4 active:border-three active:pt-1 focus:border-b-4 focus:border-three focus:pt-1"
                }
              >
                <span className="font-bold mr-2 hidden lg:block">00</span>HOME
              </a>
            </li>
            <li tabIndex={1} className="cursor-pointer flex items-center">
              <a
                href="/destination"
                className={
                  pathname === "/destination"
                    ? "flex items-center  h-24 border-b-4 border-three pt-1"
                    : "flex items-center  h-24 hover:border-b-4 hover:border-neutral-400 hover:pt-1 active:border-b-4 active:border-three active:pt-1 focus:border-b-4 focus:border-three focus:pt-1"
                }
              >
                <span className="font-bold mr-2 hidden lg:block">01</span>
                DESTINATION
              </a>
            </li>
            <li tabIndex={1} className="cursor-pointer flex items-center">
              <a
                href="/crew"
                className={
                  pathname === "/crew"
                    ? "flex items-center  h-24 border-b-4 border-three pt-1"
                    : "flex items-center  h-24 hover:border-b-4 hover:border-neutral-400 hover:pt-1 active:border-b-4 active:border-three active:pt-1 focus:border-b-4 focus:border-three focus:pt-1"
                }
              >
                <span className="font-bold mr-2 hidden lg:block">02</span>CREW
              </a>
            </li>
            <li tabIndex={1} className="cursor-pointer flex items-center">
              <a
                href="/technology"
                className={
                  pathname === "/technology"
                    ? "flex items-center  h-24 border-b-4 border-three pt-1"
                    : "flex items-center  h-24 hover:border-b-4 hover:border-neutral-400 hover:pt-1 active:border-b-4 active:border-three active:pt-1 focus:border-b-4 focus:border-three focus:pt-1"
                }
              >
                <span className="font-bold mr-2 hidden lg:block">03</span>
                TECHNOLOGY
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
