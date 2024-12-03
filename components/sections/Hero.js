import Image from "next/image";
import React from "react";
import nouh from "@/app/images/nouh.png";
import Link from "next/link";

function Hero() {
  return (
    <div className="hero-section ">
      {/* <Image src={nouh} alt="nouh" className="nouh" /> */}
      <div className="flex justify-center w-full">
        <div className="sm:bg-white bg-transparent sm:rounded-full rounded-lg rounded-b-3xl flex flex-col sm:flex-row justify-center self-center w-fit h-fit gap-2 absolute bottom-40 ">
          <select
            className="border-transparent  sm:min-w-96 text-18"
            defaultValue
          >
            <option name="">Services 🔥🐦‍🔥</option>
            <option name="">BAC en cours</option>
            <option name="">Bachelier et L1</option>
            <option name="">L2, L3, M1 et M2</option>
            <option name="">L2, L3, M1 et M2</option>
          </select>
          <Link className="btn" href={"/services"}>
            Choose Service
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
