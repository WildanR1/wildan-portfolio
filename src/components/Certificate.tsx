import React from "react";
import AnimateLine from "./AnimateLine/AnimateLine";
import CardCertificate from "./Card/CardCertificate";
import { dataCertificate } from "@/data/certificate";

const Certificate = () => {
  return (
    <section id="certificate" className="py-16 px-4 lg:px-28">
      <div
        className="text-xl md:text-2xl lg:text-3xl font-semibold text-center text-primary"
        data-aos="fade-up"
      >
        Certificate
      </div>
      <div
        className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-center py-3"
        data-aos="fade-up"
      >
        Latest Certificate
      </div>
      <div className="flex justify-center my-5" data-aos="fade-up">
        <AnimateLine />
      </div>
      <div
        className="text-lg lg:text-xl font-medium text-center mb-10"
        data-aos="zoom-in-up"
      >
        Explore my collection of certificates reflecting my commitment to skill
        enhancement and personal growth.
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {dataCertificate?.map((item, index) => (
          <div data-aos="flip-down" key={index + 1}>
            <CardCertificate
              title={item.title}
              organizer={item.organizer}
              link={item.link}
              level={item.level}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
