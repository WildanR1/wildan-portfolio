"use client";
import { Typewriter } from "react-simple-typewriter";
import { BsDashLg } from "react-icons/bs";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { MProfilePic } from "@/assets/img/me";

const About = () => {
  return (
    <section id="about" className="py-12 px-4 lg:p-28 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="flex justify-center items-center p-5">
          <div>
            <Image
              width={288}
              height={288}
              src={MProfilePic}
              alt="Profile image Wildan Rachmadoni"
              className="rounded-full object-cover object-center border-2 border-primary w-72 h-72 md:w-96 md:h-96 lg:w-full lg:h-full"
              data-aos="zoom-in"
              priority
            />
          </div>
        </div>
        <div className="lg:col-span-2 lg:px-12 h-full flex items-center">
          <div className="flex flex-col gap-4">
            <h6 className="font-bold">
              <div
                className="font-consolas text-2xl text-primary"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Hello my name is
              </div>
              <div
                className="uppercase font-extrabold text-3xl"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                Wildan Rachmadoni,
              </div>
              <div
                className="uppercase font-extrabold text-3xl"
                data-aos="fade-right"
                data-aos-delay="600"
              >
                <Typewriter
                  words={["IT Student", "Front-End Web Developer"]}
                  cursor
                  loop={true}
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={60}
                  delaySpeed={2000}
                />
              </div>
            </h6>
            <div>
              <p
                className="text-justify text-lg"
                data-aos="fade-right"
                data-aos-delay="800"
              >
                I am currently pursuing studies at Universitas Negeri Surabaya,
                aspiring to build a career as a Front-End Web Developer. I am
                currently focusing on mastering ReactJS and making it my primary
                tech stack.
              </p>
            </div>
            <hr data-aos="fade-right" data-aos-delay="1000" />
            <div
              className="mb-10 flex gap-3 items-center "
              data-aos="fade-right"
              data-aos-delay="1200"
            >
              <Link
                rel="noopener noreferrer"
                className="group relative inline-flex items-center overflow-hidden border border-primary px-8 py-3 focus:outline-none focus:ring"
                href="https://drive.google.com/uc?export=download&id=1KDTmhopjTY3pfdlGQfHnfruwfJWhAWB0"
                download="Wildan Rachmadoni CV.pdf"
                target="_blank"
              >
                <span className="absolute inset-y-0 left-0 w-[2px] bg-primary transition-all duration-300 ease-out group-hover:w-full group-active:bg-primary"></span>
                <span className="absolute -end-full transition-all group-hover:end-4">
                  <svg
                    className="h-5 w-5 rtl:rotate-180 text-primary-foreground"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>

                <span className="relative text-lg font-medium text-primary transition-all group-hover:text-primary-foreground group-hover:me-4">
                  Download CV
                </span>
              </Link>
              <div>
                <BsDashLg className="text-2xl md:text-4xl lg:text-5xl" />
              </div>
              <div className="flex gap-1 items-center">
                <Link
                  target="_blank"
                  rel="noreferrer"
                  title="Wildan Rachmadoni Instagram"
                  href="https://www.instagram.com/wildn_rmdhn/"
                >
                  <FaInstagramSquare className="text-2xl md:text-4xl lg:text-6xl hover:text-primary transition-all ease-in" />
                </Link>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  title="Wildan Rachmadoni LinkedIn"
                  href="https://linkedin.com/in/wildan-rachmadoni"
                >
                  <FaLinkedin className="text-2xl md:text-4xl lg:text-6xl hover:text-primary transition-all ease-in" />
                </Link>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  title="Wildan Rachmadoni Github"
                  href="https://github.com/WildanR1"
                >
                  <FaGithubSquare className="text-2xl md:text-4xl lg:text-6xl hover:text-primary transition-all ease-in" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
