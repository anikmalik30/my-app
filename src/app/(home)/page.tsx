import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import withFooter from "../withFooter";

const Header = dynamic(() => import("../../components/Header"), { ssr: false });
const HeroSection = dynamic(() => import("./components/HeroSection"), {
  ssr: false,
});
const Skills = dynamic(() => import("./components/Skills"), { ssr: false });
const Projects = dynamic(() => import("./components/Projects"), { ssr: false });
// import ParticlesContainer from "./components/ParticlesContainer";

function Page() {
  const header = useMemo(() => <Header />, []);
  const heroSection = useMemo(() => <HeroSection />, []);
  const skills = useMemo(() => <Skills />, []);
  const projects = useMemo(() => <Projects />, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div
        className="relative w-full"
        style={{
          backgroundImage: `url('/bghero.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // This makes sure the background image stays fixed on scroll
        }}
      >
        {/* <ParticlesContainer /> */}
        {/* <div className="max-w-7xl mx-auto"> */}
        {/* <Header />
          <HeroSection /> */}
        {/* {header} */}
        {/* <Header /> */}
        {heroSection}
        {/* </div> */}
        <div
          className="h-10 bg-gradient-to-t from-black absolute -bottom-5 left-0 
      xl:bottom-0 w-full"
        ></div>
      </div>
      <div className="max-w-7xl mx-auto p-5">
        {/* <Skills /> */}
        {/* <Projects /> */}
        {skills}
        {projects}
      </div>
    </div>
  );
}

export default React.memo(withFooter(Page));
