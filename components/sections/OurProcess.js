import React from "react";
import SectionHeader from "../SectionHeader";

function OurProcess() {
  const process = [
    {
      id: "01",
      title: "Consulting",
      text: "After enrollment, our partners in Italy will contact you for a consultation to discuss university specializations and options before finalizing the registration process.",
    },
    {
      id: "02",
      title: "Account Creation",
      text: "We create a personalized account for you on our website, giving you access to a dedicated dashboard where you can track the progress of your application and view all your information in one place.",
    },
    {
      id: "03",
      title: "We Take Care of Everything ",
      text: "Once you submit your documents, we take care of the entire university application process, handling everything on your behalf to ensure a smooth and successful admission.",
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
                <p className="mt-4 min-h-28">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurProcess;
