import Image from "next/image";
import React from "react";
import nouh from "@/app/images/nouh1.png";
import Link from "next/link";

function Stats() {
  const stats = [
    {
      id: 1,
      number: "20K",
      text: "Business trust Syncro",
    },
    {
      id: 2,
      number: "98%",
      text: "Business trust Syncro",
    },
    {
      id: 3,
      number: "150k",
      text: "Business trust Syncro",
    },
  ];
  return (
    <article className="2xl:px-0 px-5 w-full mt-40 flex flex-col mb-48">
      <div className="statsbg max-w-screen-2xl flex self-center w-full px-6 py-16 lg:p-20 relative flex-col-reverse lg:flex-row align-center">
        {/* <Image
          src={nouh}
          alt="nouh"
          className="lg:absolute relative  hidden xl:flex lg:bottom-0 lg:right-20"
        /> */}
        <div className=" flex flex-col gap-16 w-full items-center">
          <div className="flex flex-col gap-12">
            <h1 className="text-center">Join Thousands Of Satisfied Clients</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
              {stats.map((s) => (
                <div key={s.id} className="flex flex-col gap-1 items-center">
                  <p className="number">{s.number}</p>
                  <p className="text">{s.text}</p>
                </div>
              ))}
            </div>
          </div>

          <Link href={"#service"} className="btn w-fit">
            Choose Procedure
          </Link>
        </div>
      </div>
    </article>
  );
}

export default Stats;
