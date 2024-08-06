// import { MovingBorderBtn } from "@/components/ui/moving-border.";
import Link from "next/link";
import React from "react";
import Title from "./Title";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
const RotatingCube = dynamic(() => import("@/components/rotating-cube"), {
  ssr: false,
  loading: () => <div className="spinner">Loading animation...</div>,
});
export default function HeroSection() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
      <div className="flex flex-col justify-center items-center lg:items-start space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
          Nice to meet you!
          <br />
          <span className="">
            {/* underline underline-offset-8 decoration-yellow-600 */}
            {" I'm Anik."}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "Based in India, I'm a web developer passionate about building modern web application that user love"
          }
        </p>
        <Link href="/contact">
          <Button className="rounded-full px-12 py-4 text-lg font-bold text-zinc-900">
            Get In Touch{" "}
            <ChevronRightIcon className="h-4 w-4 font-bold text-zinc-900" />
          </Button>
        </Link>
      </div>
      <div className="relative flex justify-center items-center -z-1">
        <div className="absolute order-1 transform-gpu grayscale md:order-2 md:w-[700px] hidden items-center justify-center lg:flex lg:animate-[open-scale-up-fade_1.5s_ease-in-out] before:from-green-5/5 before:to-yellow-6/25 before:absolute before:left-0 before:top-0 before:block before:h-full before:w-full before:rounded-full before:bg-gradient-to-br before:blur-[100px] before:content-['']">
          <div className="lg:absolute top-0 left-0 right-0 bottom-0 flex lg:justify-end items-center lg:mr-40 transform mt-5">
            <RotatingCube />
          </div>
        </div>
      </div>
    </div>
  );
}
