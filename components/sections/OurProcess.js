import React from "react";
import SectionHeader from "../SectionHeader";

function OurProcess() {
  const process = [
    {
      id: "01",
      title: "Create an Account",
      text: "Lorem ipsum dolor sit amet consectetur. At lorem molestie ac phasellus augue ullamcorper posuere enim tristique. ",
    },
    {
      id: "02",
      title: "Create an Account",
      text: "Lorem ipsum dolor sit amet consectetur. At lorem molestie ac phasellus augue ullamcorper posuere enim tristique. ",
    },
    {
      id: "03",
      title: "Create an Account",
      text: "Lorem ipsum dolor sit amet consectetur. At lorem molestie ac phasellus augue ullamcorper posuere enim tristique. ",
    },
  ];
  return (
    <section
      id="process"
      className="2xl:px-0 px-5 w-full mt-40 flex flex-col mb-48"
    >
      <SectionHeader title="Our Process" />

      <div className="max-w-screen-2xl flex self-center flex-col w-full gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
          {process.map((p) => (
            <div
              key={p.id}
              className="proc-card h-96 flex flex-col justify-end relative "
            >
              <p className="absolute right-10 top-10 sectionHeader">{p.id}</p>
              <div className="">
                <b className="text-2xl font-bold">{p.title}</b>
                <p className="mt-4">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurProcess;
