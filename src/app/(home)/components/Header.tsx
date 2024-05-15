import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

 function Header({className}: {className?: string}) {
  const socials = [
    {
      link: "https://linkedin.com/in/anikmalik",
      label: "LinkedIn",
      icon: SiLinkedin,
    },
    {
      link: "https://github.com/anikmalik",
      label: "GitHub",
      icon: SiGithub,
    },
    {
      link: "https://X.com/anikmalik",
      label: "X",
      icon: SiX,
    },
  ];
  return (
    <nav className={cn("py-10  flex justify-between items-center animate-move-down",className)}>
      <h1 className="text-2xl font-bold -rotate-2 text-slate-300">
      {/*  underline underline-offset-8 decoration-yellow-600 */}
        Anik Malik 
      </h1>

      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <Link key={social.link} href={social.link} area-label={social.label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all text-slate-300"/>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default React.memo(Header);