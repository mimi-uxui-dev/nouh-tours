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
    adr: "Q35 Lpp sidi abdellah mhalma alger",
    ig: "https://www.instagram.com/nouhtours_",
    fcb: "linkkk",
    wp: "https://call.whatsapp.com/voice/TS4eUiZprPUHPozJKJpaue",
    yt: "https://youtube.com/@nouhbz7636?si=cxXr2c9-9KTxPksW",
    tt: "https://www.tiktok.com/@nouh_tours?_t=8sQn3tLjB2M&_r=1",
  };

  return (
    <article
      id="contact"
      className="2xl:px-0 px-5 w-full mt-40 flex flex-col mb-48"
    >
      <SectionHeader title={"Contact"} />
      <div className="max-w-screen-2xl flex self-center flex-col w-full gap-8">
        <div className="flex flex-col md:grid grid-cols-2 gap-6">
          <Link
            href={
              "https://www.google.com/maps/place/Bloc+4+LPP+Q35/@36.6897314,2.8709061,19.22z/data=!4m6!3m5!1s0x128fa57f901e2841:0x1f0c12f75c9fc775!8m2!3d36.6898209!4d2.8722053!16s%2Fg%2F11pzfpc9kc?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
            }
          >
            <Image quality={100} unoptimized src={mapp} alt="Nouh tours map" />
          </Link>

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
              {/* <Link href={data.fcb}>
                <Image src={facebook} alt="facebook" />
              </Link> */}
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
