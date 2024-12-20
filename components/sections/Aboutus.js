import React from "react";
import nouh from "@/app/images/nouh2.png";
import Image from "next/image";
import SectionHeader from "../SectionHeader";

function Aboutus() {
  return (
    <articel className="2xl:px-0 px-5 w-full mt-40 flex flex-col mb-48">
      <div className="max-w-screen-2xl flex self-center flex-col w-full gap-8">
        <div className="grid grid-cols-2 gap-10 content-center">
          {/* right */}
          <div>
            <SectionHeader title={"About"} />
            <p>
              Lorem ipsum dolor sit amet consectetur. At lorem molestie ac
              phasellus augue ullamcorper posuere enim tristique. Quisque enim
              lectus morbi porta viverra hendrerit suspendisse. Ultrices mauris
              diam natoque pellentesque. Interdum tortor netus ut odio arcu eu
              ac.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur. At lorem molestie ac
              phasellus augue ullamcorper posuere enim tristique. Quisque enim
              lectus morbi porta viverra hendrerit suspendisse. Ultrices mauris
              diam natoque pellentesque. Interdum tortor nim lectus morbi porta
              viverr
            </p>
          </div>
          {/* left */}
          <Image src={nouh} alt="nouh" />
        </div>
      </div>
    </articel>
  );
}

export default Aboutus;
