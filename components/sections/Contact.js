import React from "react";
import SectionHeader from "../SectionHeader";
import Image from "next/image";
import mapp from "@/app/images/map.png";
import sms from "@/app/images/sms.png";
import facebook from "@/app/images/facebook.png";
import call from "@/app/images/call.png";
import instagram from "@/app/images/instagram.png";
import location from "@/app/images/location-minus.png";
import tiktok from "@/app/images/tik_tok.png";
import whatsapp from "@/app/images/whatsapp.png";
import youtube from "@/app/images/youtube.png";
import Link from "next/link";

function Contact() {
  const data = {
    email: "contact@nouhtours.com",
    tel: "+213 657 48 89 80",
    adr: "Next Patron AGErlenstrasse 59CH - 8832 Wollerau",
    ig: "linkkk",
    fcb: "linkkk",
    wp: "linkkk",
    yt: "linkkk",
    tt: "linkkk",
  };

  return (
    <article
      id="contact"
      className="2xl:px-0 px-5 w-full mt-40 flex flex-col mb-48"
    >
      <SectionHeader title={"Contact"} />
      <div className="max-w-screen-2xl flex self-center flex-col w-full gap-8">
        <div className="flex flex-col xl:grid grid-cols-2 gap-6">
          <Image src={mapp} alt="Nouh tours map" />
          <div className="px-0 md:px-6 flex flex-col h-fit gap-6 xl:h-full xl:justify-between py-14">
            <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center font-normal md:text-2xl text-xl ">
              <Image src={sms} alt="message me" />
              <p>{data.email}</p>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center font-normal md:text-2xl text-xl">
              <Image src={call} alt="call me" />
              {data.tel}
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center font-normal md:text-2xl text-xl text-center md:text-left">
              <Image src={location} alt="message me" />
              {data.adr}
            </div>
            <div className="flex flex-row gap-2 md:gap-10 flex-wrap">
              <Link href={data.ig}>
                <Image src={instagram} alt="instagram" />
              </Link>
              <Link href={data.fcb}>
                <Image src={facebook} alt="facebook" />
              </Link>
              <Link href={data.wp}>
                <Image src={whatsapp} alt="whatsapp" />
              </Link>
              <Link href={data.yt}>
                <Image src={youtube} alt="youtube" />
              </Link>
              <Link href={data.tt}>
                <Image src={tiktok} alt="tiktok" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Contact;
