// import { cn } from "@/lib/utils";
// import Link from "next/link";
// import React from "react";
// import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

// function Header({ className }: { className?: string }) {
//   const socials = [
//     {
//       link: "https://linkedin.com/in/anikmalik",
//       label: "LinkedIn",
//       icon: SiLinkedin,
//     },
//     {
//       link: "https://github.com/anikmalik",
//       label: "GitHub",
//       icon: SiGithub,
//     },
//     {
//       link: "https://X.com/anikmalik",
//       label: "X",
//       icon: SiX,
//     },
//   ];
//   return (
//     // <nav className={cn("py-10  flex justify-between items-center animate-move-down ",className)}>
//     <nav
//       className={cn(
//         "py-10 flex justify-between items-center animate-move-down sticky top-0 z-40 border-b border-transparent transition duration-200 ease-in-out animate-header-slide-down-fade",
//         className
//       )}
//     >
//       <h1 className="text-2xl font-bold -rotate-2 text-gray-200">
//         {/*  underline underline-offset-8 decoration-yellow-600 */}
//         Anik Malik
//       </h1>

//       <div className="flex items-center gap-5 z-">
//         {socials.map((social, index) => {
//           const Icon = social.icon;
//           return (
//             <Link
//               key={social.link}
//               href={social.link}
//               aria-label={social.label}
//             >
//               <Icon className="w-5 h-5 hover:scale-125 hover:text-gray-200 transition-all text-zinc-400" />
//             </Link>
//           );
//         })}
//       </div>
//     </nav>
//   );
// }

// export default React.memo(Header);

"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

function Header({ className }: { className?: string }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 py-4 transition-all duration-500 ease-in-out",
        {
          "bg-black/50 backdrop-blur-md": isScrolled,
          "bg-transparent": !isScrolled,
        },
        className
      )}
    >
      <nav
        className={cn(
          "flex justify-between w-full items-center w-full max-w-screen-xl mx-auto lg:px-2 lg:shadow-none animate-move-down transition-all duration-300 ease-in-out",
          className
        )}
      >
        <h1 className="text-2xl font-bold text-gray-200">
          {" "}
          {/*-rotate-2*/}
          {/* underline underline-offset-8 decoration-yellow-600 */}
          Anik Malik
        </h1>

        <div className="flex items-center gap-5 z-">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.link}
                href={social.link}
                aria-label={social.label}
              >
                <Icon className="w-5 h-5 hover:scale-125 hover:text-gray-200 transition-all text-zinc-400" />
              </Link>
            );
          })}
        </div>
      </nav>
      {/* </div> */}
    </header>
  );
}

export default React.memo(Header);
