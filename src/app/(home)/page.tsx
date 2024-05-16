import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import dynamic from "next/dynamic";
import withFooter from "../withFooter";

const Skills = dynamic(() => import("./components/Skills"));
const Projects = dynamic(() => import("./components/Projects"));
// const Footer = dynamic(() => import("./components/Footer"));
// import ParticlesContainer from "./components/ParticlesContainer";

function page() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className=" dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">
        {/* <ParticlesContainer /> */}
        <div className="max-w-7xl mx-auto sm:p-5">
          <Header />
          <HeroSection />
        </div>
        <div
          className="h-10 bg-gradient-to-t from-black absolute -bottom-5 left-0 
      xl:bottom-0 w-full"
        ></div>
      </div>
      <div className="max-w-7xl mx-auto p-5">
        <Skills />
        <Projects />
        {/* <Footer/>  */}
      </div>
    </div>
  );
}

export default React.memo(withFooter(page));
