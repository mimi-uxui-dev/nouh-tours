import React from "react";

import SectionHeader from "../SectionHeader";
import Link from "next/link";

function OurServices() {
  const services = [
    // {
    //   id: 1,
    //   title: "France",
    //   procedures: [
    //     {
    //       id: 3,
    //       title: "BAC en Cours",
    //       dossier: ["paper 1", "paper 2", "paper 3"],
    //       price: "3000DA",
    //     },
    //     {
    //       id: 4,
    //       title: "Bachelier et L1",
    //       dossier: ["paper 1", "paper 2", "paper 3"],
    //       price: "10 000DA",
    //     },
    //     {
    //       id: 5,
    //       title: "L2, L3, M1 et M2",
    //       dossier: ["paper 1", "paper 2", "paper 3"],
    //       price: "32000DA",
    //     },
    //   ],
    // },
    {
      id: 2,
      title: "Study in Italy",
      procedures: [
        {
          id: 6,
          title: "University Enrollment",
          dossier: [
            "Original + Translation in English or Italian",
            "Relever de BAC",
            "Diplome de BAC",
            "Passport",
            "Photo Biometric",
          ],
          para: "We assist with enrollment in multiple universities, ensuring guaranteed admission in all offered specializations. This service provides students with diverse academic options to secure their preferred field of study.",
          price: "3000DA",
        },
        {
          id: 7,
          title: "Visa Application Assistance",
          dossier: [
            "Original + Translation in English or Italian",
            "Diplome de BAC",
            "Relever de BAC",
            "Relever de note",
            "Diplome de Licence",
            "Passport",
            "Photo Biometric",
            "Letter de reccomdation (optional)",
            "Test IELTS (optional)",
          ],
          para: "We help you prepare all the necessary documents for your visa application and guide you through every step of the visa process, ensuring a smooth and successful experience.",
          price: "10 000DA",
        },
        {
          id: 8,
          title: "Scholarships ",
          dossier: [
            "Original + Translation in English or Italian",
            "Diplome de BAC",
            "Relever de BAC",
            "Relever de note license",
            "Diplome de Licence",
            "Relever de note Master",
            "Diplome de Master",
            "Passport",
            "Photo Biometric",
            "Letter de reccomdation (optional)",
            "Test IELTS (optional)",
          ],
          para: "We provide access to scholarships and ensure you can study in Italy for free, covering university tuition fees. Our support guarantees a cost-free academic experience, allowing you to focus entirely on your studies.",
          price: "32000DA",
        },
        {
          id: 8,
          title: "Accompaniment in Italy",
          dossier: [
            "Original + Translation in English or Italian",
            "Diplome de BAC",
            "Relever de BAC",
            "Relever de note license",
            "Diplome de Licence",
            "Relever de note Master",
            "Diplome de Master",
            "Passport",
            "Photo Biometric",
            "Letter de reccomdation (optional)",
            "Test IELTS (optional)",
          ],
          para: "Our services provides comprehensive support to students during their journey to Italy. Our team is dedicated to ensuring a smooth transition, offering personalized guidance every step of the way to help students feel confident and supported in their new environment.",
          price: "32000DA",
        },
      ],
    },
  ];
  return (
    <section
      id="service"
      className="2xl:px-0 px-5 w-full mt-40 flex flex-col mb-48"
    >
      <SectionHeader title="Study in Italy" />

      <div className="max-w-screen-2xl flex self-center flex-col w-full gap-8">
        {services.map((service) => (
          <div className="" key={service.id}>
            {/* <div className="text-2xl md:text-4xl font-semibold mb-4">
              {service.title}
            </div> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {service.procedures.map((procedure) => (
                <div
                  key={procedure.id}
                  className="proc-card flex justify-between flex-col"
                >
                  <div>
                    <div className="text-2xl font-semibold mb-5 mt-3 text-green-500">
                      {procedure.title}
                    </div>
                    <p className="mb-12">{procedure.para}</p>
                    {/* <b className="mb-3">Dossier</b> */}
                    {/* <div className="mb-3">
                      {procedure.dossier.map((p) => (
                        <li key={p.id}>{p}</li>
                      ))}
                    </div> */}
                  </div>
                  {/* <b>Prix: {procedure.price}</b> */}
                  {/* <Link
                    href={
                      "https://call.whatsapp.com/voice/XSFqQbFvBTeM4AZbNkHzAQ"
                    }
                    className="btn w-fit"
                  >
                    Apply Now
                  </Link> */}
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
