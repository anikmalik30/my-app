"use client";
import { AnimatePresence, animate, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Transition from "../components/transition";

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
