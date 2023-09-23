import Image from "next/image";
import logo from "../../assets/shared/logo.svg";

export default function Design() {
  return (
    <div>
      <div className="flex justify-between">
        <Image src={logo} alt="logo" width={48}></Image>
        <h5 className="text-secondary text-xl tracking-widest">
          DESIGN SYSTEM
        </h5>
      </div>
      <h5 className="text-three mt-10 tracking-widest text-2xl">
        <span className="text-gray-500 mr-3">03</span>INTERACTIVE ELEMENTS
      </h5>
      {/* navbar */}
      <div className="navbar bg-gray-900 mt-10">
        <ul className="flex text-center justify-evenly text-three">
          <li
            tabIndex={1}
            className="cursor-pointer flex items-center h-24 hover:border-b-4 hover:border-neutral-400 hover:pt-1 active:border-b-4 active:border-three active:pt-1 focus:border-b-4 focus:border-three focus:pt-1"
          >
            00 ACTIVE
          </li>
          <li className="cursor-pointer h-24 flex items-center hover:border-b-4 hover:border-neutral-400 hover:pt-1">
            01 HOVERED
          </li>
          <li className="cursor-pointer h-24 flex items-center">02 IDLE</li>
        </ul>
      </div>
      <div className="container flex justify-between">
        {/* explore button */}
        <div className="mt-16 ml-16">
          <button className="explore-button bg-three color-primary text-xl tracking-widest">
            <h4>EXPLORE</h4>
          </button>
        </div>
        {/* tab buttons */}
        <div className="buttons">
          <div className="tabs mt-10">
            <ul className="flex text-center justify-evenly text-secondary text-base gap-6">
              <li
                tabIndex={2}
                className="cursor-pointer flex items-start h-9 hover:border-b-4 hover:border-neutral-400 active:border-b-4 active:border-three active:text-three focus:border-b-4 focus:border-three focus:text-three"
              >
                MOON
              </li>
              <li className="cursor-pointer h-9 flex items-start hover:border-b-4 hover:border-neutral-400">
                MARS
              </li>
              <li className="cursor-pointer h-9 flex items-start">EUPORA</li>
            </ul>
          </div>
          {/* slider 1 */}
          <div className="mt-10 flex justify-evenly w-24 m-auto">
            <button className="w-3.5 h-3.5 bg-three/25 rounded-full hover:bg-three/50 active:bg-three/100 focus:bg-three/100"></button>
            <button className="w-3.5 h-3.5 bg-three/25 rounded-full hover:bg-three/50"></button>
            <button className="w-3.5 h-3.5 bg-three/25 rounded-full"></button>
          </div>
          {/* slider 2 */}
          <div className="mt-10 flex flex-col items-center justify-evenly gap-8">
            <button className="slider2 border border-three/25 w-20 h-20 rounded-full text-three text-3xl hover:border-three active:bg-three active:text-primary focus:bg-three focus:text-primary">
              1
            </button>
            <button className="slider2 border border-three/25 w-20 h-20 rounded-full text-three text-3xl hover:border-three">
              2
            </button>
            <button className="slider2 border border-three/25 w-20 h-20 rounded-full text-three text-3xl">
              3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
