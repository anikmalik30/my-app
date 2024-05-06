import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ParticlesContainer from "./components/ParticlesContainer";
import Nav from "./components/Nav";
import Transition from "../../components/transition";

export default function page() {
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
        <Projects/>
        <Footer/>
      </div>
    </div>
  );
}
