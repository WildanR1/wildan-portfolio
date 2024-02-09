import React from "react";
import AnimateLine from "./AnimateLine/AnimateLine";
import CardContact from "./Card/CardContact";
import { BsTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { IoIosPerson, IoMdMail } from "react-icons/io";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 lg:px-28 overflow-x-hidden">
      <h2
        className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-center"
        data-aos="fade-up"
      >
        Let&apos;s Connect
      </h2>
      <div className="flex justify-center my-5">
        <AnimateLine />
      </div>
      <div>
        <img
          src="/img/cover-contact-w&b.jpg"
          alt="profil2"
          className="object-cover object-center h-[45vh] w-full rounded-md my-3"
          data-aos="zoom-out"
        />
      </div>
      <div>
        <h2 className="text-xl lg:text-2xl font-semibold" data-aos="fade-right">
          Contact
        </h2>
        <p className="text-justify" data-aos="fade-right">
          Always open to discussing new projects and creative ideas. Feel free
          to contact me!
        </p>
      </div>
      <div className="my-3">
        <CardContact
          icon={<IoIosPerson size={28} />}
          title={"Name"}
          description={"Wildan Rachmadoni"}
        />
        <CardContact
          icon={<MdLocationOn size={28} />}
          title={"Location"}
          description={"Jember, Indonesia"}
        />
        <CardContact
          icon={<BsTelephoneFill size={28} />}
          title={"Telephone"}
          description={"+62 853-3609-2998"}
        />
        <CardContact
          icon={<IoMdMail size={28} />}
          title={"Email"}
          description={
            <Link
              target="_blank"
              rel="noreferrer"
              href="mailto:wildanrachmadoni@gmail.com?"
              className="cursor-pointer text-primary"
            >
              wildanrachmadoni@gmail.com
            </Link>
          }
        />
      </div>
    </section>
  );
};

export default Contact;
