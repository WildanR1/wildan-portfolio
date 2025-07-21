import React from "react";
import AnimateLine from "./AnimateLine/AnimateLine";
import Card from "./Card/Card";
import {
  PCekula,
  PMoge,
  PNotulensi,
  PSociops,
  PTaskChrono,
  PBymayscarf,
} from "@/assets/img/portfolio";

const Portfolio = () => {
  const portfolioData = [
    {
      link: "https://bymayscarf.shop/",
      img: PBymayscarf,
      title: "Bymayscarf",
      description:
        "Bymayscarf is an online store website specializing in custom Al-Qur'an products as the main offering. Other products include custom prayer rugs and hampers for Eid or wedding occasions.",
      category: "Next.Js - Tailwind CSS",
    },
    {
      link: "https://notulensi.widyawicara.com/en-US",
      img: PNotulensi,
      title: "Widya Wicara Notulensi",
      description:
        "Widya Wicara Notulensi is an automatic note-taking application powered by artificial intelligence, eliminating the need to manually record meetings.",
      category: "Next.Js - Tailwind CSS - NextUI",
    },
    {
      link: "https://sociops-admin.vercel.app/",
      img: PSociops,
      title: "Sociops",
      description:
        "A web application for social campaigns focusing on volunteer programs and fundraising. It provides a platform for users to contribute and get involved in various social initiatives.",
      category: "Next.Js - Tailwind CSS - Rest API",
    },
    {
      link: "https://task-chrono.vercel.app/",
      img: PTaskChrono,
      title: "Task Chrono",
      description:
        "A web application designed to help users plan and organize their tasks for upcoming days, enabling better and more structured scheduling for efficient work management.",
      category: "React.JS - Tailwind CSS - GraphQL",
    },
    {
      link: "https://www.figma.com/file/vUfdWLxdXJIoLJJlDJiaoo/MANPRO-DAPAT-A-team-library?type=design&node-id=490%3A1040&mode=design&t=PseHi4azVxliQqkJ-1",
      img: PCekula,
      title: "Cekula - Smart School",
      description:
        "A Smart School application targeted at Junior High Schools, featuring multiple roles such as Admin, Students, Teachers, and Osis.",
      category: "Laravel - Bootstrap",
    },
    {
      link: "https://www.figma.com/file/flPxDl45XYG4U5BsfsDCtq/MOGE-Vehicle-Rental?type=design&node-id=0%3A1&mode=design&t=5g9dNzE6bHSOk6kc-1",
      img: PMoge,
      title: "MOGE Premium Rental",
      description:
        "Website interface design for a vehicle rental company, offering premium rental services for cars and motorcycles.",
      category: "Figma",
    },
  ];

  return (
    <section id="portfolio" className="py-16 px-4 lg:px-28">
      <h2
        className="text-xl md:text-2xl lg:text-3xl font-semibold text-center text-primary"
        data-aos="fade-up"
      >
        Portfolio
      </h2>
      <div
        className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-center py-3"
        data-aos="fade-up"
      >
        My Recent Project
      </div>
      <div className="flex justify-center my-5" data-aos="fade-up">
        <AnimateLine />
      </div>
      <div
        className="text-lg lg:text-xl font-medium text-center mb-10"
        data-aos="zoom-in-up"
      >
        Check out my portfolio with a bunch of awesome projects I&apos;ve been a
        part of, including website building and UI designing. Some are all
        wrapped up, while others are still a work in progress.
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {portfolioData.map((item, idx) => (
          <div data-aos="zoom-in" key={item.title + idx}>
            <Card
              link={item.link}
              img={item.img}
              title={item.title}
              description={item.description}
              category={item.category}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
