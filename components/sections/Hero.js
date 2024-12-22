import Image from "next/image";
import React from "react";
import nouh from "@/app/images/nouh 1.png";
import Link from "next/link";

function Hero() {
  return (
    <div className="hero-section">
      <section className="2xl:px-0 px-5 w-full pt-40 flex flex-col lg:mb-48">
        <div className="max-w-screen-2xl flex self-center flex-col w-full gap-8">
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 items-center">
            <div>
              <p className="text-xl lg:text-2xl font-bold mb-6">Welcome 👋</p>
              <h1 className="text-4xl lg:text-5xl font-semibold mb-5">
                Study in Italy with Nouh –<br />
                Your Journey Starts Here!
              </h1>
              <p className="text-xl font-medium mb-20 max-w-700">
                Nouh specializes in guiding students to pursue their dreams of
                studying in Italy. From selecting the right university to
                navigating visa applications, Nouh ensures a smooth and
                stress-free process every step of the way.
              </p>
              <Link className="btn" href={"/"}>
                Let&apos;s Start
              </Link>
            </div>
            <Image
              src={nouh}
              alt="nouh"
              className="w-fit lg:w-full lg:max-w-xl flex place-self-center"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
