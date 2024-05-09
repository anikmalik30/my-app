import { MovingBorderBtn } from "@/components/ui/moving-border.";
import Link from "next/link";
import React from "react";
import Title from "./Title";
import Spline from "@splinetool/react-spline";
import dynamic from "next/dynamic";

// import RotatingCube from "@/components/rotating-cube";
const RotatingCube = dynamic(() => import('@/components/rotating-cube'), { ssr: false });

export default function HeroSection() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
      <div className="flex flex-col justify-center items-center lg:items-start space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold text-slate-300">
          Nice to meet you! 👋
          <br />
          <span className="underline underline-offset-8 decoration-yellow-600">
            {" I'm Anik."}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "Based in India, I'm a web developer passionate about building modern web application that user love"
          }
        </p>
        <Link href={"mailto:some@gmail.com"} className=" inline-block group">
          <Title text="Contact Me 📪" />
        </Link>
      </div>
      
      <div className="relative flex justify-center items-center -z-1">
        {/* <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative"> */}
        {/*  <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-yellow-600"></div>
            <div className="w-32 h-32 rounded-full bg-slate-400"></div>
          </div>

          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-slate-400"></div>
            <div className="w-32 h-32 rounded-full bg-yellow-600"></div>
          </div>*/}
          {/* <div className="glow absolute top-[40%] right-1/2 -z-10"></div> */}
        {/* </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10"> 
        <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
            <p>📫 Available</p>
        </MovingBorderBtn> */}
        {/* </div>  */}
        {/* <Spline scene="https://prod.spline.design/7a2ZWwrf3jXU5WMw/scene.splinecode" /> */}
        {/* <div className=" object-contain"> */}
        <div className="lg:absolute top-0 left-0 right-0 bottom-0 flex lg:justify-end items-center lg:ml-72 transform">
          <RotatingCube />
        </div>
 {/* </div> */}
      </div>
    </div>
  );
}
