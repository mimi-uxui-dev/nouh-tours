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

function Contact() {
  const data = {
    email: "nouh@nouhtours.com",
    tel: "+@13333333333333",
    adr: "Next Patron AGErlenstrasse 59CH - 8832 Wollerau",
    instagram: "linkkk",
    fcb: "linkkk",
    whatsapp: "linkkk",
    youtube: "linkkk",
    tiktok: "linkkk",
  };

  return (
    <article className="2xl:px-0 px-5 w-full mt-40 flex flex-col mb-48">
      <SectionHeader title={"Contact"} />
      <div className="max-w-screen-2xl flex self-center flex-col w-full gap-8">
        <div className="flex flex-col xl:grid grid-cols-2 gap-6">
          <Image src={mapp} alt="Nouh tours map" />
          <div className="px-6 flex flex-col h-fit gap-6 xl:h-full xl:justify-between py-14">
            <div className="flex row gap-6 items-center font-normal text-2xl w-fit">
              <Image src={sms} alt="message me" />
              <p className="w-fit">{data.email}</p>
            </div>
            <div className="flex row gap-6 items-center font-normal text-2xl">
              <Image src={call} alt="call me" />
              {data.tel}
            </div>
            <div className="flex row gap-6 items-center font-normal text-2xl">
              <Image src={location} alt="message me" />
              {data.adr}
            </div>
            <div className="flex row gap-10 flex-wrap">
              <Image src={instagram} alt="instagram" />
              <Image src={facebook} alt="facebook" />
              <Image src={whatsapp} alt="whatsapp" />
              <Image src={youtube} alt="youtube" />
              <Image src={tiktok} alt="tiktok" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Contact;
