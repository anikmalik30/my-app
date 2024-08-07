"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiExpress,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      text: "React",
      icon: SiReact,
    },
    {
      text: "Node.js",
      icon: SiNodedotjs,
    },
    {
      text: "TailwindCSS",
      icon: SiTailwindcss,
    },
    {
      text: "JavaScript",
      icon: SiJavascript,
    },
    {
      text: "Express",
      icon: SiExpress,
    },
    {
      text: "MongoDB",
      icon: SiMongodb,
    },
    {
      text: "MySQL",
      icon: SiMysql,
    },
    {
      text: "Next.js",
      icon: SiNextdotjs,
    },
    {
      text: "Git",
      icon: SiGit,
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills"
        className="flex flex-col items-center justify-center"
      />
      <p className="text-center text-gray-500 text-lg mt-4">
        I have experience working with the following technologies and tools.
        <br />
        Click on the cards to see more details.
      </p>

      <HoverEffect items={skills} />
    </div>
  );
}
export default React.memo(Skills);
