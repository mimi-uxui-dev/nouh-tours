import React from "react";
import SectionHeader from "../SectionHeader";
import Image from "next/image";
import mapp from "@/app/images/map.png";
function Contact() {
  return (
    <article>
      <SectionHeader title={"Contact"} />
      <div>
        <Image src={mapp} alt="Nouh tours map" />
      </div>
    </article>
  );
}

export default Contact;
