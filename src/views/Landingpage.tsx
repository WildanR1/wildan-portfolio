import About from "@/components/About";
import Certificate from "@/components/Certificate";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import React from "react";

const Landingpage = () => {
  return (
    <>
      <Navbar />
      <About />
      <Portfolio />
      <Certificate />
      <Contact />
      <Footer />
    </>
  );
};

export default Landingpage;
