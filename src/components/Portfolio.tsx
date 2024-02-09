import React from "react";
import AnimateLine from "./AnimateLine/AnimateLine";
import Card from "./Card/Card";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 px-4 lg:px-28">
      <div
        className="text-xl md:text-2xl lg:text-3xl font-semibold text-center text-primary"
        data-aos="fade-up"
      >
        Portfolio
      </div>
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
        <div data-aos="flip-right">
          <Card
            link={"https://notulensi.widyawicara.com/en-US"}
            img={"/img/portfolio/notulensi.jpg"}
            title={"Widya Wicara Notulensi"}
            description={
              "Widya Wicara Notulensi is an automatic note-taking application based on artificial intelligence, no longer need to spend time focusing on recording meetings manually"
            }
            category={"Next.Js - Tailwind CSS - NextUI"}
          />
        </div>
        <div data-aos="flip-right">
          <Card
            link={"https://sociops-admin.vercel.app/"}
            img={"/img/portfolio/sociops.jpg"}
            title={"Sociops"}
            description={
              "Web application for social campaigns that focuses on volunteer programs and fundraising. This application is designed to provide a platform that facilitates users in contributing and getting involved in various social campaign programs."
            }
            category={"Next.Js - Tailwind CSS - Rest API"}
          />
        </div>
        <div data-aos="flip-right">
          <Card
            link={"https://task-chrono.vercel.app/"}
            img={"/img/portfolio/task-chrono.jpg"}
            title={"Task Chrono"}
            description={
              "Web application designed to assist users in planning and organizing their tasks or work for the upcoming days. This allows for better and more structured scheduling of tasks, making it easier to manage work efficiently"
            }
            category={"React.JS - Tailwind CSS - GraphQL"}
          />
        </div>
        <div data-aos="flip-right">
          <Card
            link={
              "https://www.figma.com/file/vUfdWLxdXJIoLJJlDJiaoo/MANPRO-DAPAT-A-team-library?type=design&node-id=490%3A1040&mode=design&t=PseHi4azVxliQqkJ-1"
            }
            img={"/img/portfolio/cekula.png"}
            title={"Cekula - Smart School"}
            description={
              "Smart School application intended for the Junior High School market. Equipped with several roles including Admin, Students, Teachers, Osis, etc."
            }
            category={"Laravel - Bootstrap"}
          />
        </div>
        <div data-aos="flip-right">
          <Card
            link={
              "https://www.figma.com/file/flPxDl45XYG4U5BsfsDCtq/MOGE-Vehicle-Rental?type=design&node-id=0%3A1&mode=design&t=5g9dNzE6bHSOk6kc-1"
            }
            img={"/img/portfolio/moge.jpg"}
            title={"MOGE Premium Rental"}
            description={
              "Website interface design intended for a vehicle rental company, offering premium rental services for both cars and motorcycles."
            }
            category={"Figma"}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
