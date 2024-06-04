"use client";
import React from "react";
import Link from "next/link";
import { GoHome } from "react-icons/go";
import { MdOutlineEmail, MdPerson, MdPerson2 } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { usePathname } from "next/navigation";

const navData = [
  {
    name: "Home",
    path: "/",
    icon: GoHome,
  },
  {
    name: "About",
    path: "/about",
    icon: MdPerson2,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: MdOutlineEmail,
  },
  {
    name: "Blogs",
    path: "/blog",
    icon: FaBlog,
  },
];

function Nav() {
  const pathname = usePathname();
  return (
    <nav
      className="flex flex-col items-center justify-center gap-y-4 fixed h-max bottom-0 mt-auto 
    xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen"
    >
      {/* inner */}
      <div
        className="flex w-full xl:flex-col items-center justify-between 
      xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] bg-zinc-800 xl:h-max py-8
      backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full "
      >
        {navData.map((link, index) => {
          const Icon = link.icon;
          return (
            <Link key={link.path} href={link.path} aria-label={link.name} className="group">
              {/* tooltip */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-zinc-900 relative flex text-gray-200 items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div className="border-solid border-l-slate-900 border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              {/* icon */}
              <Icon
                className={`relative flex items-center hover:text-gray-200 hover:scale-125 transition-all ${link.path === pathname ? "text-gray-200" : "text-zinc-400"
                  }`}
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
export default React.memo(Nav);