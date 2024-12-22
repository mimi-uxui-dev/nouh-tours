import React from "react";
import nouh from "@/app/images/nouh2.png";
import Image from "next/image";
import SectionHeader from "../SectionHeader";

function Aboutus() {
  return (
    <article className="2xl:px-0 px-5 w-full mt-40 flex flex-col mb-48">
      <div className="max-w-screen-2xl flex self-center flex-col w-full gap-8">
        <div className="grid grid-cols-2 gap-10 content-center">
          {/* right */}
          <div>
            <SectionHeader title={"About"} />
            <p className="text-xl">
              Welcome to Nouh Tours! As a dedicated travel agent and founder of
              Nouh Tours, I specialize in making study abroad dreams a reality.
              Our agency focuses on guiding students through the entire process
              of studying in Italy, from visa applications to finding the
              perfect accommodation. With years of experience and a passion for
              helping students succeed, we’re here to simplify your journey and
              ensure a smooth transition to studying in one of the most
              beautiful countries in the world.
            </p>
          </div>
          {/* left */}
          <Image src={nouh} alt="nouh" />
        </div>
      </div>
    </article>
  );
}

export default Aboutus;
