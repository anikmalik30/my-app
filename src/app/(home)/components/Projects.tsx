import React from "react";
import { SiNodedotjs, SiReact, SiTailwindcss } from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

function Projects() {
  const projects = [
    {
      title: "Project 1",
      tech: [SiReact, SiTailwindcss, SiNodedotjs],
      link: "http://www.testlink.com",
      cover: "/project-1.png",
      background: "bg-yellow-500",
    },
    {
      title: "Project 2",
      tech: [SiReact, SiTailwindcss, SiNodedotjs],
      link: "http://www.testlink.com",
      cover: "/project-1.png",
      background: "bg-slate-400",
    },
    // {
    //   title: "Project 3",
    //   tech: [SiReact, SiTailwindcss, SiNodedotjs],
    //   link: "http://www.testlink.com",
    //   cover: "/project-1.png",
    //   background: "bg-red-500",
    // },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={project.title}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                    <div className="space-y-5">
                  <h1 className="text-2xl font-bold">{project.title}</h1>
                  <div className="flex items-center gap-5">
                    {project.tech.map((Icon, index) => (
                      <Icon key={Icon.name} className="w-8 h-8" />
                    ))}
                  </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default React.memo(Projects);