import Link from "next/link";
import React from "react";
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-5 p-10 text-primary-foreground dark:text-primary-foreground border-t-primary border-t-2">
      <div className="grid grid-flow-col gap-4">
        <Link
          href="about"
          className="hover:underline hover:text-primary transition-all duration-200 ease-in"
        >
          About
        </Link>
        <Link
          href="portfolio"
          className="hover:underline hover:text-primary transition-all duration-200 ease-in"
        >
          Portfolio
        </Link>
        <Link
          href="certificate"
          className="hover:underline hover:text-primary transition-all duration-200 ease-in"
        >
          Certificate
        </Link>
        <Link
          href="contact"
          className="hover:underline hover:text-primary transition-all duration-200 ease-in"
        >
          Contact
        </Link>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <Link href="https://wa.me/6285336092998">
            <IoLogoWhatsapp
              size={32}
              className="hover:text-primary transition-all duration-300 ease-in"
            />
          </Link>
          <Link href="https://github.com/WildanR1">
            <IoLogoGithub
              size={32}
              className="hover:text-primary transition-all duration-300 ease-in"
            />
          </Link>
          <Link href="https://www.instagram.com/wildn_rmdhn/">
            <IoLogoInstagram
              size={34}
              className="hover:text-primary transition-all duration-300 ease-in"
            />
          </Link>
          <Link href="https://linkedin.com/in/wildan-rachmadoni">
            <IoLogoLinkedin
              size={34}
              className="hover:text-primary transition-all duration-300 ease-in"
            />
          </Link>
        </div>
      </div>
      <div>
        <p>
          © 2024 | by{" "}
          <Link
            href="https://linkedin.com/in/wildan-rachmadoni"
            className="text-primary"
          >
            Wildan Rachmadoni.
          </Link>{" "}
          All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
