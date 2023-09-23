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
    </div>
  );
}
