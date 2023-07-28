import { Element } from "react-scroll";
import { AnimateLine, CardCertificate } from "../../atoms";

const CertificateOrganism = () => {
  return (
    <Element name="certificate" className="py-16 px-4 lg:px-28">
      <div
        className="text-xl md:text-2xl lg:text-3xl font-semibold text-center text-my-primary"
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
        <div data-aos="flip-down">
          <CardCertificate
            title={"Basic Web Programming"}
            organizer={"Camp404"}
            link={
              "https://drive.google.com/file/d/15tgzIRKwJ2SFVzs__ZaACts-S0aegcYm/view?usp=sharing"
            }
          />
        </div>
        <div data-aos="flip-down" data-aos-delay="300">
          <CardCertificate
            title={"2023 Complete Front-End Engineer Career With ReactJS"}
            organizer={"Alterra Academy"}
            link={
              "https://drive.google.com/file/d/1EEPs_1HSLAuWjFUoAToX70Dkk_AKp7a1/view?usp=sharing"
            }
          />
        </div>
      </div>
    </Element>
  );
};

export default CertificateOrganism;
