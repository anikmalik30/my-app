"use client";
import { AnimatePresence, animate, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { usePathname, useRouter } from "next/navigation";
// Dynamically import the Transition component
// const Transition = dynamic(() => import("../components/transition"), { ssr: false });
import Transition from "@/components/transition";


export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div key={pathname} className="h-full">
          <Transition />
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
