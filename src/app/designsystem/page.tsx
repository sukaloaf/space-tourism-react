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
      <div className="navbar bg-gray-900 mt-10">
        <ul className="flex text-center justify-evenly text-three">
          <li className="cursor-pointer flex items-center h-16 active:border-b-4 active:pt-1">
            00 ACTIVE
          </li>
          <li className="cursor-pointer h-16 flex items-center hover:border-b-4 hover:border-neutral-400 hover:pt-1">
            01 HOVERED
          </li>
          <li className="cursor-pointer h-16 flex items-center">02 IDLE</li>
        </ul>
      </div>
    </div>
  );
}
