import React from "react";

import SectionHeader from "../SectionHeader";

function OurServices() {
  const services = [
    {
      id: 1,
      title: "France",
      procedures: [
        {
          id: 3,
          title: "BAC en Cours",
          dossier: ["paper 1", "paper 2", "paper 3"],
          price: "3000DA",
        },
        {
          id: 4,
          title: "Bachelier et L1",
          dossier: ["paper 1", "paper 2", "paper 3"],
          price: "10 000DA",
        },
        {
          id: 5,
          title: "L2, L3, M1 et M2",
          dossier: ["paper 1", "paper 2", "paper 3"],
          price: "32000DA",
        },
      ],
    },
    {
      id: 2,
      title: "Italy",
      procedures: [
        {
          id: 6,
          title: "BAC en Cours",
          dossier: ["paper 1", "paper 2", "paper 3"],
          price: "3000DA",
        },
        {
          id: 7,
          title: "Bachelier et L1",
          dossier: ["paper 1", "paper 2", "paper 3"],
          price: "10 000DA",
        },
        {
          id: 8,
          title: "L2, L3, M1 et M2",
          dossier: ["paper 1", "paper 2", "paper 3"],
          price: "32000DA",
        },
      ],
    },
  ];
  return (
    <section className="2xl:px-0 px-5 w-full mt-40 flex flex-col mb-48">
      <SectionHeader title="Our Services" />

      <div className="max-w-screen-2xl flex self-center flex-col w-full gap-8">
        {services.map((service) => (
          <div className="" key={service.id}>
            <div className="text-2xl md:text-4xl font-semibold mb-4">
              {service.title}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {service.procedures.map((procedure) => (
                <div key={procedure.id} className="proc-card">
                  <div className="text-xl font-semibold mb-3">
                    {procedure.title}
                  </div>
                  <b className="mb-3">Dossier</b>
                  <div className="mb-3">
                    {procedure.dossier.map((p) => (
                      <li key={p.id}>{p}</li>
                    ))}
                  </div>
                  <b>Prix: {procedure.price}</b>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurServices;
