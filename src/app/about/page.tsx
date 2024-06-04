"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import Header from "../(home)/components/Header";
import withFooter from "../withFooter";
// import AAnimation from "@/components/a-animation";
import dynamic from "next/dynamic";
const AAnimation = dynamic(() => import("@/components/a-animation"), { ssr: false });


function AboutPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ container: containerRef });
  // console.log(scrollYProgress);

  const skillRef = useRef<HTMLDivElement | null>(null);

  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef<HTMLDivElement | null>(null);
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  const skills = [
    { name: "React" },
    { name: "Next.js" },
    { name: "TailwindCSS" },
    { name: "Node.js" },
    { name: "TypeScript" },
    { name: "GraphQL" },
    { name: "MongoDB" },
    { name: "PostgreSQL" },
    { name: "Docker" },
    { name: "Kubernetes" },
    { name: "AWS" },
    { name: "GCP" },
  ];

  return (
    // <div>
    <>
      <div className="min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto sm:p-5 z-20">
          <Header />
        </div>
        <motion.div
          className="h-full"
          initial={{ y: "-200vh" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1 }}
        >
          {/* CONTAINER */}
          <div className="h-full lg:flex" ref={containerRef}>
            {/* TEXT CONTAINER */}
            <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
              {/* BIOGRAPHY CONTAINER */}
              <div className="flex flex-col gap-12 justify-center">
                {/* BIOGRAPHY IMAGE */}
                {/* <Image
              src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            /> */}

                {/* BIO TITLE */}
                <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                {/* BIO TEXT */}
                <p className="text-lg">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque voluptatem consectetur repudiandae voluptate est
                  alias. Illum doloribus numquam aliquid odit porro quos nesciunt
                  aspernatur! Illum deserunt aperiam consequatur repellat
                  laudantium!
                </p>
                {/* BIO QUOTE */}
                <span className="italic">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </span>
                {/* BIO SIGNATURE */}
                <div className="self-end">
                  <Image src="/sign.svg" alt="Description of image" width={140} height={140} />
                </div>
                {/* SCROLL SVG*/}
                <motion.svg
                  initial={{ opacity: 0.2, y: 0 }}
                  animate={{ opacity: 1, y: "10px" }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={50}
                  height={50}
                >
                  <path
                    d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                    stroke="#ffffff"
                    strokeWidth="1"
                  ></path>
                  <path d="M12 6V14" stroke="#ffffff" strokeWidth="1"></path>
                  <path
                    d="M15 11L12 14L9 11"
                    stroke="#ffffff"
                    strokeWidth="1"
                  ></path>
                </motion.svg>
              </div>
              {/* SKILLS CONTAINER */}
              <div
                className="flex flex-col gap-12 justify-center "
                ref={skillRef}
              >
                {/* SKILL TITLE */}
                <motion.h1
                  initial={{ x: "-300px" }}
                  animate={isSkillRefInView ? { x: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className="font-bold text-2xl"
                >
                  SKILLS
                </motion.h1>
                {/* SKILL LIST */}
                <motion.div
                  initial={{ x: "-300px" }}
                  animate={isSkillRefInView ? { x: 0 } : {}}
                  className="flex gap-4 flex-wrap"
                >
                  {skills.map((skill, index) => {
                    return (
                      <div key={index} className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                        {skill.name}
                      </div>
                    )
                  })}
                </motion.div>
                {/* SKILL SCROLL */}
                <motion.svg
                  initial={{ opacity: 0.2, y: 0 }}
                  animate={{ opacity: 1, y: "10px" }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={50}
                  height={50}
                >
                  <path
                    d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                    stroke="#ffffff"
                    strokeWidth="1"
                  ></path>
                  <path d="M12 6V14" stroke="#ffffff" strokeWidth="1"></path>
                  <path
                    d="M15 11L12 14L9 11"
                    stroke="#ffffff"
                    strokeWidth="1"
                  ></path>
                </motion.svg>
              </div>
              {/* EXPERIENCE CONTAINER */}
              <div
                className="flex flex-col gap-12 justify-center pb-48"
                ref={experienceRef}
              >
                {/* EXPERIENCE TITLE */}
                <motion.h1
                  initial={{ x: "-300px" }}
                  animate={isExperienceRefInView ? { x: "0" } : {}}
                  transition={{ delay: 0.2 }}
                  className="font-bold text-2xl"
                >
                  EXPERIENCE
                </motion.h1>
                {/* EXPERIENCE LIST */}
                <motion.div
                  initial={{ x: "-300px" }}
                  animate={isExperienceRefInView ? { x: "0" } : {}}
                  className=""
                >
                  {/* EXPERIENCE LIST ITEM */}
                  <div className="flex justify-between h-48">
                    {/* LEFT */}
                    <div className="w-1/3 ">
                      {/* JOB TITLE */}
                      <div className="bg-stone-800 p-3 font-semibold rounded-b-lg rounded-s-lg">
                        Senior JavaScript Engineer
                      </div>
                      {/* JOB DESC */}
                      <div className="p-3 text-sm italic">
                        I led web development, offering expertise in JavaScript
                        frameworks.{" "}
                      </div>
                      {/* JOB DATE */}
                      <div className="p-3 text-red-400 text-sm font-semibold">
                        2024 - Present
                      </div>
                      {/* JOB COMPANY */}
                      <div className="p-1 rounded bg-stone-800 text-sm font-semibold w-fit">
                        Apple
                      </div>
                    </div>
                    {/* CENTER */}
                    <div className="w-1/6 flex justify-center">
                      {/* LINE */}
                      <div className="w-1 h-full bg-gray-600 rounded relative">
                        {/* LINE CIRCLE */}
                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-stone-800 -left-2"></div>
                      </div>
                    </div>
                    {/* RIGHT */}
                    <div className="w-1/3 "></div>
                  </div>
                  {/* EXPERIENCE LIST ITEM */}
                  <div className="flex justify-between h-48">
                    {/* LEFT */}
                    <div className="w-1/3 "></div>
                    {/* CENTER */}
                    <div className="w-1/6 flex justify-center">
                      {/* LINE */}
                      <div className="w-1 h-full bg-gray-600 rounded relative">
                        {/* LINE CIRCLE */}
                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-stone-800 -left-2"></div>
                      </div>
                    </div>
                    {/* RIGHT */}
                    <div className="w-1/3 ">
                      {/* JOB TITLE */}
                      <div className="bg-stone-800 p-3 font-semibold rounded-b-lg rounded-s-lg">
                        Senior React Developer
                      </div>
                      {/* JOB DESC */}
                      <div className="p-3 text-sm italic">
                        I spearheaded React-based application development,
                        leveraging advanced skills.{" "}
                      </div>
                      {/* JOB DATE */}
                      <div className="p-3 text-red-400 text-sm font-semibold">
                        2019 - 2024{" "}
                      </div>
                      {/* JOB COMPANY */}
                      <div className="p-1 rounded bg-stone-800 text-sm font-semibold w-fit">
                        Microsoft
                      </div>
                    </div>
                  </div>
                  {/* EXPERIENCE LIST ITEM */}
                  <div className="flex justify-between h-48">
                    {/* LEFT */}
                    <div className="w-1/3 ">
                      {/* JOB TITLE */}
                      <div className="bg-stone-800 p-3 font-semibold rounded-b-lg rounded-s-lg">
                        Freelancer{" "}
                      </div>
                      {/* JOB DESC */}
                      <div className="p-3 text-sm italic">
                        I provided web solutions, applying a range of technologies
                        to address client requirements.{" "}
                      </div>
                      {/* JOB DATE */}
                      <div className="p-3 text-red-400 text-sm font-semibold">
                        2010 - 2019{" "}
                      </div>
                    </div>
                    {/* CENTER */}
                    <div className="w-1/6 flex justify-center">
                      {/* LINE */}
                      <div className="w-1 h-full bg-gray-600 rounded relative">
                        {/* LINE CIRCLE */}
                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-stone-800 -left-2"></div>
                      </div>
                    </div>
                    {/* RIGHT */}
                    <div className="w-1/3 "></div>
                  </div>
                </motion.div>
              </div>
            </div>
            {/* SVG CONTAINER */}
            {/* <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
            <Brain scrollYProgress={scrollYProgress} />
          </div> */}
            {/* <div className="hidden lg:block w-1/3 sticky z-30 xl:w-1/2"> */}
            {/* </div> */}
            {/* <AAnimation /> */}
          </div>

        </motion.div>
        <AAnimation />
      {/* <div className="my-10 -z-10"> */}
      {/* </div> */}
      </div>
    </>
  );
}

export default React.memo(withFooter(AboutPage));